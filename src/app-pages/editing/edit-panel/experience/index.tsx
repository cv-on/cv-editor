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

export type CompanyTypeWithIdIndex = CompanyType & {
  id: string;
  index: number;
};

type ExperienceSectionProps = {
  changeSection: (section: DisplaySectionUnion) => void;
};

export const ExperienceSection: FC<ExperienceSectionProps> = ({
  changeSection,
}) => {
  const dragAreaRef = useRef(null);
  const [isCompanyModalOpen, setIsCompanyModalOpen] = useState(false);
  const [selectedCompany, setSelectedCompany] =
    useState<CompanyTypeWithIdIndex>();
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

  const companiesFieldArray = useFieldArray({
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

  const openModal = () => setIsCompanyModalOpen(true);
  const closeModal = () => {
    setIsCompanyModalOpen(false);
    setSelectedCompany(undefined);
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
    return companiesFieldArray.fields.map((company, index) => {
      return (
        <DragDropPanel
          key={company.id}
          isDraggable={false}
          onEdit={() => {
            setSelectedCompany({ ...company, index });
            setIsCompanyModalOpen(true);
          }}
          onRemove={() => {
            companiesFieldArray.remove(index);
            syncExperienceState();
          }}
        >
          <Flex
            direction="column"
            justifyContent="center"
            alignItems="baseline"
          >
            <Typography weight="bold">{company.companyName}</Typography>
            <Typography tag="em" weight="semibold" size="small">
              {company.position}
            </Typography>
            <Flex wrap="wrap" gap={usySpacing.px4}>
              {company.projects.map(({ projectNames }, index) => (
                <Badge
                  key={projectNames[index]}
                  size="small"
                  variant="filled"
                  radius="full"
                >
                  {projectNames[index]}
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
      {isCompanyModalOpen && (
        <CompanyModal
          selectedCompany={selectedCompany}
          setSelectedCompany={setSelectedCompany}
          companiesFieldArray={companiesFieldArray}
          syncExperienceState={syncExperienceState}
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
