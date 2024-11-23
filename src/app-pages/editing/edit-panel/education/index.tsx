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

import { educationAtom } from "@/app-states/education";
import { DragDropPanel } from "@/components/drag-drop-panel";
import { useObserveState } from "@/hooks/use-observe-state";
import { EduAchievementType, EducationSectionType } from "@/types";
import { changeItemOrder } from "@/utils/helpers";

import { SectionHeader } from "../_header";
import { SectionPaddingConst } from "../constants";
import { DisplaySectionUnion } from "../types";

import { AchievementItemModal } from "./achievement-popup";

export type AchieveTypeWithIndex = EduAchievementType & {
  index?: number;
};

type EducationSectionProps = {
  changeSection: (section: DisplaySectionUnion) => void;
};

export const EducationSection: FC<EducationSectionProps> = ({
  changeSection,
}) => {
  const dragAreaRef = useRef(null);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState<AchieveTypeWithIndex>();
  const setAchieveTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const [education, setEducation] = useObserveState<EducationSectionType>({
    atom: educationAtom,
    sectionType: "education",
  });

  const { control, getValues, setValue } = useForm<EducationSectionType>({
    mode: "onBlur",
    values: education,
    defaultValues: education,
  });

  const { fields, append, update, remove } = useFieldArray({
    control,
    name: "achievements",
  });

  const syncEducationState = useCallback(() => {
    if (setAchieveTimeoutRef.current) {
      clearTimeout(setAchieveTimeoutRef.current);
    }

    setAchieveTimeoutRef.current = setTimeout(() => {
      setEducation({ ...getValues() });
    }, 200);
  }, [getValues, setEducation]);

  const openModal = () => setIsOpenModal(true);
  const closeModal = () => {
    setIsOpenModal(false);
    setSelectedItem(undefined);
  };

  useEffect(() => {
    if (dragAreaRef.current) {
      new Sortable(dragAreaRef.current, {
        animation: 350,
        onEnd: (evt) => {
          if (
            typeof evt.oldIndex === "number" &&
            typeof evt.newIndex === "number"
          ) {
            const orderedAchieveItems = changeItemOrder<EduAchievementType>({
              array: getValues().achievements,
              fromIndex: evt.oldIndex,
              toIndex: evt.newIndex,
            });

            setValue("achievements", orderedAchieveItems);
            syncEducationState();
          }
        },
      });
    }
  }, [getValues, setValue, syncEducationState]);

  /**
   * Render
   */

  const renderAddAchieveItem = () => {
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

  const renderAchievementsList = () => {
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
            syncEducationState();
          }}
        >
          <Typography size="small">{item.content}</Typography>
        </DragDropPanel>
      );
    });
  };

  return (
    <>
      {isOpenModal && (
        <AchievementItemModal
          selectedItem={selectedItem}
          syncEducationState={syncEducationState}
          append={append}
          update={update}
          onClose={closeModal}
        />
      )}
      <Flex direction="column" paddingProps={{ ...SectionPaddingConst }}>
        <SectionHeader
          sectionTitle="Education"
          changeSection={changeSection}
          hasGoBack
        />
        {renderAddAchieveItem()}
        <Flex ref={dragAreaRef} direction="column">
          {renderAchievementsList()}
        </Flex>
      </Flex>
    </>
  );
};
