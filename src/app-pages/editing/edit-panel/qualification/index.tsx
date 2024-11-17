import { FC, useEffect, useRef, useState } from "react";

import {
  AlignJustifyIcon,
  Box,
  Button,
  Flex,
  Modal,
  Panel,
  PlusIcon,
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

import { DragDropStyled } from "./styled";

type QualificationSectionProps = {
  changeSection: (section: DisplaySectionUnion) => void;
};

export const QualificationSection: FC<QualificationSectionProps> = ({
  changeSection,
}) => {
  const dragAreaRef = useRef(null);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [qualification, setQualification] =
    useObserveState<QualificationSectionType>({
      atom: qualificationAtom,
      sectionType: "qualification",
    });

  const { control, getValues, setValue } = useForm<QualificationSectionType>({
    values: qualification,
    defaultValues: qualification,
  });

  const { fields, remove } = useFieldArray({
    control,
    name: "qualifyItems",
  });

  const syncQualificationState = () => setQualification({ ...getValues() });

  const openModal = () => setIsOpenModal(true);
  const closeModal = () => setIsOpenModal(false);

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
            setQualification({
              qualifyItems: orderedQualifyItems as QualifyType[],
            });
          }
        },
      });
    }
  }, []);

  /**
   * Render
   */

  const renderAddQualifyItem = () => {
    return (
      <>
        <Box marginProps={{ marginBottom: usySpacing.px10 }}>
          <Button
            variant="outline"
            widthProps={{ width: "100%" }}
            onClick={openModal}
          >
            <PlusIcon />
            &nbsp; Add Item
          </Button>
        </Box>
        {isOpenModal && <Modal onClose={closeModal}>a</Modal>}
      </>
    );
  };

  const renderQualifyItemList = () => {
    return fields.map(({ keyWord, description }, index) => {
      const renderEditDeleteIcons = () => (
        <Flex
          direction="column"
          justifyContent="center"
          widthProps={{ maxWidth: usySpacing.px48 }}
        >
          <Button variant="invisible">
            <UserEditIcon />
          </Button>
          <Button
            variant="invisible"
            onClick={() => {
              remove(index);
              syncQualificationState();
            }}
          >
            <TrashBinIcon color={usyColor.red7} />
          </Button>
        </Flex>
      );

      return (
        <Panel
          key={keyWord}
          marginProps={{ margin: `${usySpacing.px6} 0` }}
          paddingProps={{
            padding: `${usySpacing.px20} ${usySpacing.px4}`,
          }}
        >
          <Flex alignItems="center" gap={usySpacing.px4}>
            <DragDropStyled>
              <AlignJustifyIcon />
            </DragDropStyled>
            <Typography size="small">
              <Typography tag="strong">{`${keyWord}: `}</Typography>
              {description}
            </Typography>
            {renderEditDeleteIcons()}
          </Flex>
        </Panel>
      );
    });
  };

  return (
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
  );
};
