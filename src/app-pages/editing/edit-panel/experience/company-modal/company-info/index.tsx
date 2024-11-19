import { FC, useState } from "react";

import { Box, Button, Checkbox, Flex, Input, usySpacing } from "@usy-ui/base";
import dayjs from "dayjs";
import {
  Controller,
  UseFieldArrayAppend,
  UseFieldArrayUpdate,
  useForm,
} from "react-hook-form";

import { ValidateRules } from "@/constants/validation";
import { ExperienceSectionType, CompanyType } from "@/types";

import { CompanyTypeWithIndex } from "../..";

type CompanyInfoProps = {
  selectedItem?: CompanyTypeWithIndex;
  isUpdateMode: boolean;
  append: UseFieldArrayAppend<ExperienceSectionType, "companies">;
  update: UseFieldArrayUpdate<ExperienceSectionType, "companies">;
  syncExperienceState: () => void;
  onClose: () => void;
};

export const CompanyInfo: FC<CompanyInfoProps> = ({
  selectedItem,
  isUpdateMode,
  append,
  update,
  syncExperienceState,
  onClose,
}) => {
  const [isStillWorking, setIsStillWorking] = useState(
    selectedItem?.toDate === "present"
  );
  const {
    formState: { errors },
    control,
    handleSubmit,
  } = useForm<CompanyTypeWithIndex>({
    defaultValues: {
      ...selectedItem,
      fromDate: selectedItem?.fromDate || new Date().toISOString(),
      toDate: selectedItem?.fromDate || new Date().toISOString(),
    },
  });

  const onSubmit = (formValues: CompanyTypeWithIndex) => {
    const data: CompanyType = {
      companyName: formValues.companyName,
      fromDate: formValues.fromDate,
      toDate: isStillWorking ? "present" : formValues.toDate,
      position: formValues.position,
      projects: selectedItem?.projects || [],
    };

    if (isUpdateMode && typeof selectedItem?.index === "number") {
      update(selectedItem.index, data);
    } else {
      append(data);
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
          <Controller
            name="toDate"
            control={control}
            render={({ field }) => (
              <Box paddingProps={{ paddingBottom: usySpacing.px6 }}>
                <Checkbox
                  checked={isStillWorking}
                  label="Still working"
                  onChange={(checked) => {
                    setIsStillWorking(checked);
                    if (checked) {
                      field.onChange("present");
                    }
                  }}
                />
              </Box>
            )}
          />
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
        <Button type="submit" variant="primary">
          {isUpdateMode ? "Update" : "Create"}
        </Button>
      </Flex>
    </form>
  );
};
