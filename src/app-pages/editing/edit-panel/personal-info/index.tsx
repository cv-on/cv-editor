import { FC } from "react";

import {
  Button,
  Flex,
  Input,
  Separator,
  TextArea,
  usySpacing,
} from "@usy-ui/base";
import { Controller, useFieldArray, useForm } from "react-hook-form";

import { personalInfoAtom } from "@/app-states";
import { ValidateRules } from "@/constants/validation";
import { useObserveState } from "@/hooks/use-observe-state";
import { PersonalInfoSectionType } from "@/types";
import { debounce } from "@/utils/helpers";

import { SectionHeader } from "../_header";
import { SectionPaddingConst } from "../constants";
import { DisplaySectionUnion } from "../types";

import { ReferenceLinkInput } from "./reference-link-input";
import { UploadAvatar } from "./upload-avatar";

type PersonalInfoSectionProps = {
  changeSection: (section: DisplaySectionUnion) => void;
};

export const PersonalInfoSection: FC<PersonalInfoSectionProps> = ({
  changeSection,
}) => {
  const [personalInfo, setPersonalInfo] =
    useObserveState<PersonalInfoSectionType>({
      atom: personalInfoAtom,
      sectionType: "personalInfo",
    });

  const {
    formState: { errors },
    control,
    getValues,
  } = useForm<PersonalInfoSectionType>({
    mode: "onBlur",
    values: personalInfo,
    defaultValues: personalInfo,
  });

  const { fields, update, append, remove } = useFieldArray({
    control,
    name: "referenceLinks",
  });

  const syncPersonalInfoState = () => setPersonalInfo({ ...getValues() });
  const debounceSyncPersonalInfoState = debounce(syncPersonalInfoState, 300);

  const syncAvatar = (base64Img: string) => {
    setPersonalInfo({ ...personalInfo, avatarSrc: base64Img });
  };

  const handleAddReferenceLink = () => {
    append({
      type: "custom",
      url: "https://...",
    });
    syncPersonalInfoState();
  };

  /**
   * Render
   */

  const renderFormFields = () => {
    return (
      <>
        <UploadAvatar
          avatarSrc={personalInfo.avatarSrc}
          syncAvatar={syncAvatar}
        />
        <Separator title="Info Fields" titleProps={{ weight: "semibold" }} />
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
              onChange={(value) => {
                field.onChange(value);
                debounceSyncPersonalInfoState();
              }}
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
              onChange={(value) => {
                field.onChange(value);
                debounceSyncPersonalInfoState();
              }}
            />
          )}
        />
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
              onChange={(value) => {
                field.onChange(value);
                debounceSyncPersonalInfoState();
              }}
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
              onChange={(value) => {
                field.onChange(value);
                debounceSyncPersonalInfoState();
              }}
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
              onChange={(value) => {
                field.onChange(value);
                debounceSyncPersonalInfoState();
              }}
            />
          )}
        />
      </>
    );
  };

  const renderReferenceLinks = () => {
    return (
      <Flex direction="column" alignItems="center" gap={usySpacing.px20}>
        {fields.map((item, index) => (
          <ReferenceLinkInput
            key={item.id}
            index={index}
            control={control}
            item={item}
            update={update}
            remove={remove}
            changeState={() => debounceSyncPersonalInfoState()}
          />
        ))}

        <Button variant="outline" onClick={handleAddReferenceLink}>
          Add link
        </Button>
      </Flex>
    );
  };

  return (
    <form>
      <Flex
        direction="column"
        gap={usySpacing.px24}
        paddingProps={{ ...SectionPaddingConst }}
      >
        <SectionHeader
          sectionTitle="Personal Info"
          changeSection={changeSection}
          hasGoBack
        />
        {renderFormFields()}
        <Separator
          title="Reference Links"
          titleProps={{ weight: "semibold" }}
        />
        {renderReferenceLinks()}
      </Flex>
    </form>
  );
};
