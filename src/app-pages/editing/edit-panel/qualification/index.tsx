import { FC, useEffect, useRef, useState } from "react";

import {
  AlignJustifyIcon,
  Box,
  Button,
  Flex,
  FlexChild,
  Panel,
  PlusIcon,
  Popover,
  TrashBinIcon,
  Typography,
  UserEditIcon,
  usyColor,
  usySpacing,
} from "@usy-ui/base";
import { useFieldArray, useForm } from "react-hook-form";
import Sortable from "sortablejs";

import { qualificationAtom } from "@/app-states/qualification";
import { useObserveState } from "@/hooks/use-observe-state";
import { QualificationSectionType, QualifyType } from "@/types";
import { changeItemOrder } from "@/utils/helpers";

import { SectionHeader } from "../_header";
import { SectionPaddingConst } from "../constants";
import { DisplaySectionUnion } from "../types";

import { QualifyItemModal } from "./qualify-item-modal";
import { DragDropStyled } from "./styled";

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

  const syncQualificationState = () => {
    if (setQualificationTimeoutRef.current) {
      clearTimeout(setQualificationTimeoutRef.current);
    }

    setQualificationTimeoutRef.current = setTimeout(() => {
      setQualification({ ...getValues() });
    }, 200);
  };

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
    const renderEditDeleteIcons = (item: QualifyType, index: number) => {
      const renderConfirmQuestion = () => (
        <Flex
          direction="column"
          alignItems="center"
          gap={usySpacing.px6}
          widthProps={{ minWidth: "160px" }}
        >
          <Typography size="small">Are you sure to remove?</Typography>
          <Button
            variant="danger"
            size="tiny"
            onClick={() => {
              remove(index);
              syncQualificationState();
            }}
            noSole
          >
            Confirm
          </Button>
        </Flex>
      );

      return (
        <Flex
          direction="column"
          justifyContent="center"
          widthProps={{ maxWidth: usySpacing.px48 }}
        >
          <Button
            variant="invisible"
            onClick={() => {
              setSelectedItem({ ...item, index });
              setIsOpenModal(true);
            }}
          >
            <UserEditIcon />
          </Button>
          <Popover position="top-start" content={renderConfirmQuestion()}>
            <Button variant="invisible">
              <TrashBinIcon color={usyColor.red7} />
            </Button>
          </Popover>
        </Flex>
      );
    };

    return fields.map((item, index) => {
      return (
        <Panel
          key={item.keyPoint}
          marginProps={{ margin: `${usySpacing.px6} 0` }}
          paddingProps={{
            padding: `${usySpacing.px20} ${usySpacing.px4}`,
          }}
        >
          <Flex alignItems="center" gap={usySpacing.px4}>
            <DragDropStyled>
              <AlignJustifyIcon />
            </DragDropStyled>
            <FlexChild grow={1}>
              <Typography size="small">
                <Typography tag="strong">{`${item.keyPoint}: `}</Typography>
                {item.description}
              </Typography>
            </FlexChild>
            {renderEditDeleteIcons(item, index)}
          </Flex>
        </Panel>
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
