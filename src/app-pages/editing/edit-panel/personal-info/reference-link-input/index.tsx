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
  UseFieldArrayRemove,
  UseFieldArrayUpdate,
} from "react-hook-form";

import { ValidateRules } from "@/constants/validation";
import { PersonalInfoSectionType, ReferenceTypeUnion } from "@/types";
import { capitalize } from "@/utils/format";

import { ReferenceIconsArray, ReferenceIconsConst } from "./constants";
import {
  BrandIconButton,
  SelectIconButtonStyled,
  TrashBinIconStyled,
} from "./styled";

type ReferenceLinkInputProps = {
  index: number;
  control: Control<PersonalInfoSectionType, any>;
  item: FieldArrayWithId<PersonalInfoSectionType, "referenceLinks", "id">;
  update: UseFieldArrayUpdate<PersonalInfoSectionType, "referenceLinks">;
  remove: UseFieldArrayRemove;
  changeState: () => void;
};

export const ReferenceLinkInput: FC<ReferenceLinkInputProps> = ({
  index,
  control,
  item,
  update,
  remove,
  changeState,
}) => {
  const [selectIcon, setSelectIcon] = useState<ReferenceTypeUnion>(item.type);

  const removeLink = () => {
    remove(index);
    changeState();
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
              update(index, { ...item, type });
              setSelectIcon(type);
              closePopover();
              changeState();
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
            onBlur={() => changeState()}
          />
        )}
      />
      <TrashBinIconStyled onClick={removeLink} />
    </Flex>
  );
};
