import { FC, useCallback, useEffect, useRef, useState } from "react";

import {
  Box,
  Button,
  Flex,
  PlusIcon,
  Typography,
  usySpacing,
} from "@usy-ui/base";
import { useFieldArray, useForm } from "react-hook-form";
import Sortable from "sortablejs";

import { technicalAtom } from "@/app-states/technical";
import { DragDropItem } from "@/components/drag-drop-item";
import { useObserveState } from "@/hooks/use-observe-state";
import { TechnicalSectionType, TechSkillType } from "@/types";
import { changeItemOrder } from "@/utils/helpers";

import { SectionHeader } from "../_header";
import { SectionPaddingConst } from "../constants";
import { DisplaySectionUnion } from "../types";

import { TechSkillModal } from "./tech-skill-modal";

export type TechSkillTypeWithIndex = TechSkillType & {
  index?: number;
};

type TechnicalSectionProps = {
  changeSection: (section: DisplaySectionUnion) => void;
};

export const TechnicalSection: FC<TechnicalSectionProps> = ({
  changeSection,
}) => {
  const dragAreaRef = useRef(null);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState<TechSkillTypeWithIndex>();
  const setTechnicalTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const [technical, setTechnical] = useObserveState<TechnicalSectionType>({
    atom: technicalAtom,
    sectionType: "technical",
  });

  const { control, getValues, setValue } = useForm<TechnicalSectionType>({
    mode: "onBlur",
    values: technical,
    defaultValues: technical,
  });

  const { fields, append, update, remove } = useFieldArray({
    control,
    name: "skills",
  });

  const syncTechnicalState = useCallback(() => {
    if (setTechnicalTimeoutRef.current) {
      clearTimeout(setTechnicalTimeoutRef.current);
    }

    setTechnicalTimeoutRef.current = setTimeout(() => {
      setTechnical({ ...getValues() });
    }, 200);
  }, [getValues, setTechnical]);

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
            const orderedTechSkills = changeItemOrder<TechSkillType>({
              array: getValues().skills,
              fromIndex: evt.oldIndex,
              toIndex: evt.newIndex,
            });

            setValue("skills", orderedTechSkills);
            syncTechnicalState();
          }
        },
      });
    }
  }, [getValues, setValue, syncTechnicalState]);

  /**
   * Render
   */

  const renderAddTechSkill = () => {
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

  const renderTechSkillList = () => {
    return fields.map((item, index) => {
      return (
        <DragDropItem
          key={item.id}
          onEdit={() => {
            setSelectedItem({ ...item, index });
            setIsOpenModal(true);
          }}
          onRemove={() => {
            remove(index);
            syncTechnicalState();
          }}
        >
          <Flex direction="column" justifyContent="center">
            <Typography weight="bold">{item.skillType}</Typography>
            <Typography size="small">{item.techStacks.join(", ")}</Typography>
          </Flex>
        </DragDropItem>
      );
    });
  };

  return (
    <>
      {isOpenModal && (
        <TechSkillModal
          selectedItem={selectedItem}
          syncTechnicalState={syncTechnicalState}
          append={append}
          update={update}
          onClose={closeModal}
        />
      )}
      <Flex direction="column" paddingProps={{ ...SectionPaddingConst }}>
        <SectionHeader
          sectionTitle="Technical"
          changeSection={changeSection}
          hasGoBack
        />
        {renderAddTechSkill()}
        <Flex ref={dragAreaRef} direction="column">
          {renderTechSkillList()}
        </Flex>
      </Flex>
    </>
  );
};
