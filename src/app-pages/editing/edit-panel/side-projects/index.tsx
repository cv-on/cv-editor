import { FC, useCallback, useEffect, useRef, useState } from "react";

import {
  Box,
  Button,
  Flex,
  PlusIcon,
  Typography,
  usySpacing,
} from "@usy-ui/base";
import Link from "next/link";
import { useFieldArray, useForm } from "react-hook-form";
import Sortable from "sortablejs";

import { sideProjectsAtom } from "@/app-states/side-projects";
import { DragDropPanel } from "@/components/drag-drop-panel";
import { useObserveState } from "@/hooks/use-observe-state";
import { SideProjectsSectionType, SideProjectType } from "@/types";
import { changeItemOrder } from "@/utils/helpers";

import { SectionHeader } from "../_header";
import { SectionPaddingConst } from "../constants";
import { DisplaySectionUnion } from "../types";

import { ProjectItemModal } from "./project-modal";

export type SideProjectTypeWithIndex = SideProjectType & {
  index: number;
};

type SideProjectsSectionProps = {
  changeSection: (section: DisplaySectionUnion) => void;
};

export const SideProjectsSection: FC<SideProjectsSectionProps> = ({
  changeSection,
}) => {
  const dragAreaRef = useRef(null);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState<SideProjectTypeWithIndex>();
  const setSideProjectsTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const [sideProjects, setSideProjects] =
    useObserveState<SideProjectsSectionType>({
      atom: sideProjectsAtom,
      sectionType: "sideProjects",
    });

  const { control, getValues, setValue } = useForm<SideProjectsSectionType>({
    mode: "onBlur",
    values: sideProjects,
    defaultValues: sideProjects,
  });

  const { fields, append, update, remove } = useFieldArray({
    control,
    name: "projects",
  });

  const syncSideProjectsState = useCallback(() => {
    if (setSideProjectsTimeoutRef.current) {
      clearTimeout(setSideProjectsTimeoutRef.current);
    }

    setSideProjectsTimeoutRef.current = setTimeout(() => {
      setSideProjects({ ...getValues() });
    }, 200);
  }, [getValues, setSideProjects]);

  const openModal = () => setIsOpenModal(true);
  const closeModal = () => {
    setIsOpenModal(false);
    setSelectedItem(undefined);
  };

  useEffect(() => {
    if (dragAreaRef.current) {
      new Sortable(dragAreaRef.current, {
        animation: 350,
        onEnd: function (evt) {
          if (
            typeof evt.oldIndex === "number" &&
            typeof evt.newIndex === "number"
          ) {
            const orderedProjectItems = changeItemOrder<SideProjectType>({
              array: getValues().projects,
              fromIndex: evt.oldIndex,
              toIndex: evt.newIndex,
            });

            setValue("projects", orderedProjectItems);
            syncSideProjectsState();
          }
        },
      });
    }
  }, [getValues, setValue, syncSideProjectsState]);

  /**
   * Render
   */

  const renderAddProjectItem = () => {
    return (
      <Box marginProps={{ marginBottom: usySpacing.px10 }}>
        <Button
          variant="outline"
          widthProps={{ width: "100%" }}
          radius="large"
          onClick={openModal}
        >
          <PlusIcon />
          &nbsp; Add Item
        </Button>
      </Box>
    );
  };

  const renderProjectItemList = () => {
    return fields.map((item, index) => {
      return (
        <DragDropPanel
          key={item.id}
          onEdit={() => {
            setSelectedItem({ ...item, index });
            setIsOpenModal(true);
          }}
          onRemove={() => {
            remove(index);
            syncSideProjectsState();
          }}
        >
          <Flex direction="column" justifyContent="center">
            <Typography weight="bold">{item.name}</Typography>
            <Typography size="small">- {item.description}</Typography>
            <Typography size="small">- {item.techStacks.join(", ")}</Typography>
            <Link href={item.url} target="_blank">
              <Typography size="small">- {item.url}</Typography>
            </Link>
          </Flex>
        </DragDropPanel>
      );
    });
  };

  return (
    <>
      {isOpenModal && (
        <ProjectItemModal
          selectedItem={selectedItem}
          syncSideProjectsState={syncSideProjectsState}
          append={append}
          update={update}
          onClose={closeModal}
        />
      )}
      <Flex direction="column" paddingProps={{ ...SectionPaddingConst }}>
        <SectionHeader
          sectionTitle="Side Projects"
          changeSection={changeSection}
          hasGoBack
        />
        {renderAddProjectItem()}
        <Flex ref={dragAreaRef} direction="column">
          {renderProjectItemList()}
        </Flex>
      </Flex>
    </>
  );
};
