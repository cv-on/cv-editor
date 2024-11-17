import { FC, useState } from "react";

import {
  Button,
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

import { PersonalInfoSectionType, ReferenceTypeUnion } from "@/types";
import { capitalize } from "@/utils/format";

import { ReferenceIconsArray, ReferenceIconsConst } from "./constants";
import { BrandIconButton, TrashBinIconStyled } from "./styled";

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
    <Flex alignItems="flex-end" gap={usySpacing.px4}>
      <Popover content={renderIconsPanel} position="top-end">
        <Button>{ReferenceIconsConst[selectIcon]}</Button>
      </Popover>
      <Controller
        name={`referenceLinks.${index}.url`}
        control={control}
        defaultValue={item.url}
        render={({ field }) => (
          <Input
            {...field}
            label={capitalize(selectIcon)}
            placeholder="https://..."
            onBlur={() => {
              changeState();
            }}
          />
        )}
      />
      <TrashBinIconStyled
        onClick={() => {
          remove(index);
        }}
      />
    </Flex>
  );
};
