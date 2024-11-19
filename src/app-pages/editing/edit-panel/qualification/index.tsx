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

import { qualificationAtom } from "@/app-states/qualification";
import { DragDropItem } from "@/components/drag-drop-item";
import { useObserveState } from "@/hooks/use-observe-state";
import { QualificationSectionType, QualifyType } from "@/types";
import { changeItemOrder } from "@/utils/helpers";

import { SectionHeader } from "../_header";
import { SectionPaddingConst } from "../constants";
import { DisplaySectionUnion } from "../types";

import { QualifyItemModal } from "./qualify-item-modal";

export type QualifyTypeWithIndex = QualifyType & {
  index?: number;
};

type QualificationSectionProps = {
  changeSection: (section: DisplaySectionUnion) => void;
};

export const QualificationSection: FC<QualificationSectionProps> = ({
  changeSection,
}) => {
  const dragAreaRef = useRef(null);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState<QualifyTypeWithIndex>();
  const setQualificationTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const [qualification, setQualification] =
    useObserveState<QualificationSectionType>({
      atom: qualificationAtom,
      sectionType: "qualification",
    });

  const { control, getValues, setValue } = useForm<QualificationSectionType>({
    values: qualification,
    defaultValues: qualification,
  });

  const { fields, append, update, remove } = useFieldArray({
    control,
    name: "qualifyItems",
  });

  const syncQualificationState = useCallback(() => {
    if (setQualificationTimeoutRef.current) {
      clearTimeout(setQualificationTimeoutRef.current);
    }

    setQualificationTimeoutRef.current = setTimeout(() => {
      setQualification({ ...getValues() });
    }, 200);
  }, [getValues, setQualification]);

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
            const orderedQualifyItems = changeItemOrder<QualifyType>({
              array: qualification.qualifyItems,
              fromIndex: evt.oldIndex,
              toIndex: evt.newIndex,
            });

            setValue("qualifyItems", orderedQualifyItems);
            syncQualificationState();
          }
        },
      });
    }
  }, [qualification.qualifyItems, setValue, syncQualificationState]);

  /**
   * Render
   */

  const renderAddQualifyItem = () => {
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

  const renderQualifyItemList = () => {
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
            syncQualificationState();
          }}
        >
          <Typography size="small">
            <Typography tag="strong">{`${item.keyPoint}: `}</Typography>
            {item.description}
          </Typography>
        </DragDropItem>
      );
    });
  };

  return (
    <>
      {isOpenModal && (
        <QualifyItemModal
          selectedItem={selectedItem}
          syncQualificationState={syncQualificationState}
          append={append}
          update={update}
          onClose={closeModal}
        />
      )}
      <Flex direction="column" paddingProps={{ ...SectionPaddingConst }}>
        <SectionHeader
          sectionTitle="Qualification"
          changeSection={changeSection}
          hasGoBack
        />
        {renderAddQualifyItem()}
        <Flex ref={dragAreaRef} direction="column">
          {renderQualifyItemList()}
        </Flex>
      </Flex>
    </>
  );
};
