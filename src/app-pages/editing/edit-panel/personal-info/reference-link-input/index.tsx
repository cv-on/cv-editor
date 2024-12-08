import { FC, useState } from "react";

import {
  Flex,
  Input,
  Popover,
  PopoverContentFnParams,
  usySpacing,
} from "@usy-ui/base";
import {
  Control,
  Controller,
  FieldArrayWithId,
  UseFieldArrayReturn,
} from "react-hook-form";

import { ValidateRules } from "@/constants/validation";
import { PersonalInfoSectionType, ReferenceTypeUnion } from "@/types";
import { capitalize, getShortUrl } from "@/utils/format";

import { ReferenceIconsArray, ReferenceIconsConst } from "./constants";
import {
  BrandIconButton,
  SelectIconButtonStyled,
  TrashBinIconStyled,
} from "./styled";

type ReferenceLinkInputProps = {
  index: number;
  control: Control<PersonalInfoSectionType> | undefined;
  item: FieldArrayWithId<PersonalInfoSectionType, "referenceLinks", "id">;
  referenceLinksFieldArray: UseFieldArrayReturn<
    PersonalInfoSectionType,
    "referenceLinks",
    "id"
  >;
  debounceSyncPersonalInfoState: () => void;
};

export const ReferenceLinkInput: FC<ReferenceLinkInputProps> = ({
  index,
  control,
  item,
  referenceLinksFieldArray,
  debounceSyncPersonalInfoState,
}) => {
  const [selectIcon, setSelectIcon] = useState<ReferenceTypeUnion>(item.type);

  const removeLink = () => {
    referenceLinksFieldArray.remove(index);
    debounceSyncPersonalInfoState();
  };

  /**
   * Render
   */

  const renderIconsPanel = ({ closePopover }: PopoverContentFnParams) => {
    return (
      <Flex
        justifyContent="flex-start"
        alignItems="center"
        wrap="wrap"
        gap={usySpacing.px12}
        widthProps={{ width: "168px" }}
      >
        {ReferenceIconsArray.map(({ type, iconElement }) => (
          <BrandIconButton
            key={type}
            type="button"
            onClick={() => {
              referenceLinksFieldArray.update(index, { ...item, type });
              setSelectIcon(type);
              closePopover();
              debounceSyncPersonalInfoState();
            }}
          >
            {iconElement}
          </BrandIconButton>
        ))}
      </Flex>
    );
  };

  return (
    <Flex alignItems="flex-start" gap={usySpacing.px4}>
      <Popover content={renderIconsPanel} position="top-end">
        <SelectIconButtonStyled>
          {ReferenceIconsConst[selectIcon]}
        </SelectIconButtonStyled>
      </Popover>
      <Controller
        name={`referenceLinks.${index}.url`}
        control={control}
        rules={{ required: ValidateRules.required }}
        render={({ field, fieldState: { error } }) => (
          <Input
            {...field}
            label={capitalize(selectIcon)}
            description={error?.message}
            hasError={Boolean(error?.message)}
            transformOnChange={(value) => getShortUrl(value)}
            onBlur={() => debounceSyncPersonalInfoState()}
          />
        )}
      />
      <TrashBinIconStyled onClick={removeLink} />
    </Flex>
  );
};
