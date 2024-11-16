import { FC, useEffect } from "react";

import {
  Button,
  Flex,
  Input,
  Scrollable,
  TextArea,
  usySpacing,
} from "@usy-ui/base";
import { Controller, useForm } from "react-hook-form";

import { ValidateRules } from "@/constants/validation";
import { PersonalInfoSectionType } from "@/types";

import { SectionHeader } from "../_header";
import { SectionPaddingConst } from "../constants";
import { DisplaySectionUnion } from "../types";

type PersonalInfoSectionProps = {
  changeSection: (section: DisplaySectionUnion) => void;
};

export const PersonalInfoSection: FC<PersonalInfoSectionProps> = ({
  changeSection,
}) => {
  const {
    formState: { errors },
    control,
    watch,
  } = useForm<PersonalInfoSectionType>({
    mode: "onBlur",
    defaultValues: {
      name: "",
    },
  });

  const formValues = watch();

  useEffect(() => {
    console.log(formValues);
  }, [formValues]);

  /**
   * Render
   */

  const renderFormFields = () => {
    return (
      <>
        <SectionHeader
          sectionTitle="Personal Info"
          changeSection={changeSection}
          hasGoBack
        />
        <Controller
          name="name"
          control={control}
          rules={{ required: ValidateRules.required }}
          render={({ field }) => (
            <Input
              {...field}
              label="Name"
              placeholder="John Doe"
              description={errors.name?.message}
              hasError={Boolean(errors.name?.message)}
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
              placeholder="Senior Fullstack Developer"
              description={errors.position?.message}
              hasError={Boolean(errors.position?.message)}
            />
          )}
        />
        <Input label="Date of Birth" />
        <Controller
          name="email"
          control={control}
          rules={{
            required: ValidateRules.required,
            pattern: ValidateRules.emailPattern,
          }}
          render={({ field }) => (
            <Input
              {...field}
              label="Email"
              placeholder="john-doe@gmail.com"
              description={errors.email?.message}
              hasError={Boolean(errors.email?.message)}
            />
          )}
        />
        <Controller
          name="phone"
          control={control}
          rules={{ required: ValidateRules.required }}
          render={({ field }) => (
            <Input
              {...field}
              label="Phone"
              placeholder="+84 111 222 333"
              description={errors.phone?.message}
              hasError={Boolean(errors.phone?.message)}
            />
          )}
        />
        <Controller
          name="summary"
          control={control}
          rules={{ required: ValidateRules.required }}
          render={({ field }) => (
            <TextArea
              {...field}
              label="Summary"
              placeholder="Highly skilled on..."
              heightProps={{ minHeight: "150px" }}
              description={errors.summary?.message}
              hasError={Boolean(errors.summary?.message)}
            />
          )}
        />
      </>
    );
  };

  const renderReferenceLinks = () => {
    return (
      <Flex direction="column" alignItems="center" gap={usySpacing.px20}>
        <Button variant="outline">Add reference link</Button>
      </Flex>
    );
  };

  return (
    <Scrollable heightProps={{ maxHeight: "100vh" }}>
      <form>
        <Flex
          direction="column"
          gap={usySpacing.px24}
          paddingProps={{ ...SectionPaddingConst }}
        >
          {renderFormFields()}
          {renderReferenceLinks()}
        </Flex>
      </form>
    </Scrollable>
  );
};
