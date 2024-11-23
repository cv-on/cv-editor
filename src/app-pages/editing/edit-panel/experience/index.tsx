import { FC, useCallback, useRef, useState } from "react";

import {
  Badge,
  Box,
  Button,
  Flex,
  PlusIcon,
  Typography,
  usySpacing,
} from "@usy-ui/base";
import { useFieldArray, useForm } from "react-hook-form";

import { experienceAtom } from "@/app-states/experience";
import { DragDropPanel } from "@/components/drag-drop-panel";
import { useObserveState } from "@/hooks/use-observe-state";
import { CompanyType, ExperienceSectionType } from "@/types";

import { SectionHeader } from "../_header";
import { SectionPaddingConst } from "../constants";
import { DisplaySectionUnion } from "../types";

import { CompanyModal } from "./company-modal";

export type CompanyTypeWithIndex = CompanyType & {
  index: number;
};

type ExperienceSectionProps = {
  changeSection: (section: DisplaySectionUnion) => void;
};

export const ExperienceSection: FC<ExperienceSectionProps> = ({
  changeSection,
}) => {
  const dragAreaRef = useRef(null);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState<CompanyTypeWithIndex>();
  const setExperienceTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const [experience, setExperience] = useObserveState<ExperienceSectionType>({
    atom: experienceAtom,
    sectionType: "experience",
  });

  const { control, getValues } = useForm<ExperienceSectionType>({
    mode: "onBlur",
    values: experience,
    defaultValues: experience,
  });

  const { fields, append, update, remove } = useFieldArray({
    control,
    name: "companies",
  });

  const syncExperienceState = useCallback(() => {
    if (setExperienceTimeoutRef.current) {
      clearTimeout(setExperienceTimeoutRef.current);
    }

    setExperienceTimeoutRef.current = setTimeout(() => {
      setExperience({ ...getValues() });
    }, 200);
  }, [getValues, setExperience]);

  const openModal = () => setIsOpenModal(true);
  const closeModal = () => {
    setIsOpenModal(false);
    setSelectedItem(undefined);
  };

  /**
   * Render
   */

  const renderAddCompany = () => {
    return (
      <Box marginProps={{ marginBottom: usySpacing.px10 }}>
        <Button
          variant="outline"
          widthProps={{ width: "100%" }}
          radius="large"
          onClick={openModal}
        >
          <PlusIcon />
          &nbsp; Add Company
        </Button>
      </Box>
    );
  };

  const renderCompanyList = () => {
    return fields.map((item, index) => {
      const projectNames = item.projects.reduce((acc, project) => {
        if (project.projectName.includes(",")) {
          acc = acc.concat(project.projectName.split(","));
        } else {
          acc.push(project.projectName);
        }

        return acc;
      }, [] as string[]);

      return (
        <DragDropPanel
          key={item.id}
          isDraggable={false}
          onEdit={() => {
            setSelectedItem({ ...item, index });
            setIsOpenModal(true);
          }}
          onRemove={() => {
            remove(index);
            syncExperienceState();
          }}
        >
          <Flex
            direction="column"
            justifyContent="center"
            alignItems="baseline"
          >
            <Typography weight="bold">{item.companyName}</Typography>
            <Typography tag="em" weight="semibold" size="small">
              {item.position}
            </Typography>
            <Flex wrap="wrap" gap={usySpacing.px4}>
              {projectNames.map((projName) => (
                <Badge
                  key={projName}
                  size="small"
                  variant="filled"
                  radius="full"
                >
                  {projName}
                </Badge>
              ))}
            </Flex>
          </Flex>
        </DragDropPanel>
      );
    });
  };

  return (
    <>
      {isOpenModal && (
        <CompanyModal
          selectedItem={selectedItem}
          syncExperienceState={syncExperienceState}
          append={append}
          update={update}
          onClose={closeModal}
        />
      )}
      <Flex direction="column" paddingProps={{ ...SectionPaddingConst }}>
        <SectionHeader
          sectionTitle="Experience"
          changeSection={changeSection}
          hasGoBack
        />
        {renderAddCompany()}
        <Flex ref={dragAreaRef} direction="column">
          {renderCompanyList()}
        </Flex>
      </Flex>
    </>
  );
};
