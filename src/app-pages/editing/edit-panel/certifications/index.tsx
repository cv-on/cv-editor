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

import { certificationsAtom } from "@/app-states/certifications";
import { DragDropPanel } from "@/components/drag-drop-panel";
import { useObserveState } from "@/hooks/use-observe-state";
import { CertificationItemType, CertificationsSectionType } from "@/types";
import { changeItemOrder } from "@/utils/helpers";

import { SectionHeader } from "../_header";
import { SectionPaddingConst } from "../constants";
import { DisplaySectionUnion } from "../types";

import { CertificationItemModal } from "./certification-item-modal";

export type CertificationItemWithIndexType = CertificationItemType & {
  index?: number;
};

type CertificationsSectionProps = {
  changeSection: (section: DisplaySectionUnion) => void;
};

export const CertificationsSection: FC<CertificationsSectionProps> = ({
  changeSection,
}) => {
  const dragAreaRef = useRef(null);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [selectedItem, setSelectedItem] =
    useState<CertificationItemWithIndexType>();
  const setAchieveTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const [certifications, setCertifications] =
    useObserveState<CertificationsSectionType>({
      atom: certificationsAtom,
      sectionType: "certifications",
    });

  const { control, getValues, setValue } = useForm<CertificationsSectionType>({
    mode: "onBlur",
    values: certifications,
    defaultValues: certifications,
  });

  const { fields, append, update, remove } = useFieldArray({
    control,
    name: "certificationItems",
  });

  const syncCertificationsState = useCallback(() => {
    if (setAchieveTimeoutRef.current) {
      clearTimeout(setAchieveTimeoutRef.current);
    }

    setAchieveTimeoutRef.current = setTimeout(() => {
      setCertifications({ ...getValues() });
    }, 200);
  }, [getValues, setCertifications]);

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
            const orderedAchieveItems =
              changeItemOrder<CertificationItemWithIndexType>({
                array: getValues().certificationItems,
                fromIndex: evt.oldIndex,
                toIndex: evt.newIndex,
              });

            setValue("certificationItems", orderedAchieveItems);
            syncCertificationsState();
          }
        },
      });
    }
  }, [getValues, setValue, syncCertificationsState]);

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
            syncCertificationsState();
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
        <CertificationItemModal
          selectedItem={selectedItem}
          syncCertificationsState={syncCertificationsState}
          append={append}
          update={update}
          onClose={closeModal}
        />
      )}
      <Flex direction="column" paddingProps={{ ...SectionPaddingConst }}>
        <SectionHeader
          sectionTitle="Certifications"
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
