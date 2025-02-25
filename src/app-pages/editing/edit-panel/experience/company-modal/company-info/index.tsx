import { FC, useState } from "react";

import { Box, Button, Checkbox, Flex, Input, usySpacing } from "@usy-ui/base";
import dayjs from "dayjs";
import { Controller, UseFieldArrayReturn, useForm } from "react-hook-form";

import { ValidateRules } from "@/constants/validation";
import { ExperienceSectionType, CompanyType } from "@/types";

import { CompanyTypeWithIdIndex } from "../..";

type CompanyInfoProps = {
  isUpdateMode: boolean;
  selectedCompany?: CompanyTypeWithIdIndex;
  companiesFieldArray: UseFieldArrayReturn<
    ExperienceSectionType,
    "companies",
    "id"
  >;
  syncExperienceState: () => void;
  onClose: () => void;
};

export const CompanyInfo: FC<CompanyInfoProps> = ({
  isUpdateMode,
  selectedCompany,
  companiesFieldArray,
  syncExperienceState,
  onClose,
}) => {
  const [isStillWorking, setIsStillWorking] = useState(
    selectedCompany?.toDate === "present"
  );
  const {
    formState: { errors },
    control,
    handleSubmit,
  } = useForm<CompanyTypeWithIdIndex>({
    defaultValues: {
      ...selectedCompany,
      fromDate: selectedCompany?.fromDate || new Date().toISOString(),
      toDate: selectedCompany?.toDate || new Date().toISOString(),
    },
  });

  const onSubmit = (formValues: CompanyTypeWithIdIndex) => {
    const updatedCompany: CompanyType = {
      companyName: formValues.companyName,
      fromDate: formValues.fromDate,
      toDate: isStillWorking ? "present" : formValues.toDate,
      position: formValues.position,
      projects: selectedCompany?.projects || [],
    };

    if (isUpdateMode && typeof selectedCompany?.index === "number") {
      companiesFieldArray.update(selectedCompany.index, updatedCompany);
    } else {
      companiesFieldArray.append(updatedCompany);
    }

    syncExperienceState();
    onClose();
  };

  /**
   * Render
   */

  const renderCompanyNameAndPosition = () => {
    return (
      <>
        <Controller
          name="companyName"
          control={control}
          rules={{ required: ValidateRules.required }}
          render={({ field }) => (
            <Input
              {...field}
              label="Company Name"
              placeholder=""
              description={errors.companyName?.message}
              hasError={Boolean(errors.companyName?.message)}
            />
          )}
        />
        <Controller
          name="position"
          control={control}
          rules={{ required: ValidateRules.required }}
          render={({ field }) => (
            <Input
              {...field}
              label="Position"
              placeholder=""
              description={errors.position?.message}
              hasError={Boolean(errors.position?.message)}
            />
          )}
        />
      </>
    );
  };

  const renderFromAndToDate = () => {
    return (
      <>
        <Controller
          name="fromDate"
          control={control}
          rules={{ required: ValidateRules.required }}
          render={({ field }) => (
            <Input
              {...field}
              value={dayjs(field.value).format("YYYY-MM-DD")}
              type="date"
              label="From Date"
              description={errors.fromDate?.message}
              hasError={Boolean(errors.fromDate?.message)}
              widthProps={{ maxWidth: "220px" }}
            />
          )}
        />
        <Flex
          justifyContent="flex-start"
          alignItems="flex-end"
          gap={usySpacing.px20}
        >
          <Controller
            name="toDate"
            control={control}
            disabled={isStillWorking}
            rules={{ required: ValidateRules.required }}
            render={({ field }) => (
              <Input
                {...field}
                value={dayjs(field.value).format("YYYY-MM-DD")}
                type="date"
                label="To Date"
                description={errors.toDate?.message}
                hasError={Boolean(errors.toDate?.message)}
                widthProps={{ maxWidth: "220px", minWidth: "220px" }}
              />
            )}
          />
          <Box paddingProps={{ paddingBottom: usySpacing.px6 }}>
            <Checkbox
              checked={isStillWorking}
              label="Working"
              onChange={(checked) => {
                setIsStillWorking(checked);
              }}
            />
          </Box>
        </Flex>
      </>
    );
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex
        direction="column"
        gap={usySpacing.px24}
        paddingProps={{ paddingTop: usySpacing.px16 }}
        widthProps={{ minWidth: "450px", maxWidth: "400px" }}
      >
        {renderCompanyNameAndPosition()}
        {renderFromAndToDate()}
        <Flex
          justifyContent="center"
          marginProps={{ marginTop: usySpacing.px10 }}
        >
          <Button
            type="submit"
            variant="primary"
            widthProps={{ width: "200px" }}
          >
            {isUpdateMode ? "Update" : "Create"}
          </Button>
        </Flex>
      </Flex>
    </form>
  );
};
