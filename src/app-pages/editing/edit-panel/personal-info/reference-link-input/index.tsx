import { FC, useState } from "react";

import {
  Button,
  ContentFnParams,
  Flex,
  Input,
  Popover,
  usySpacing,
} from "@usy-ui/base";
import { Control, Controller, FieldArrayWithId } from "react-hook-form";

import { PersonalInfoSectionType, ReferenceTypeUnion } from "@/types";
import { capitalize } from "@/utils/format";

import { ReferenceIconsArray, ReferenceIconsConst } from "./constants";
import { BrandIconButton, TrashBinIconStyled } from "./styled";

type ReferenceLinkInputProps = {
  index: number;
  control: Control<PersonalInfoSectionType, any>;
  item: FieldArrayWithId<PersonalInfoSectionType, "referenceLinks", "id">;
  changeState: () => void;
};

export const ReferenceLinkInput: FC<ReferenceLinkInputProps> = ({
  index,
  control,
  item,
  changeState,
}) => {
  const [selectIcon, setSelectIcon] = useState<ReferenceTypeUnion>(item.type);

  /**
   * Render
   */

  const renderIconsPanel = ({ closePopover }: ContentFnParams) => {
    return (
      <Controller
        name={`referenceLinks.${index}.type`}
        control={control}
        defaultValue={item.type}
        render={({ field }) => (
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
                  field.onChange(type);
                  setSelectIcon(type);
                  closePopover();
                  changeState();
                }}
              >
                {iconElement}
              </BrandIconButton>
            ))}
          </Flex>
        )}
      />
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
            label={selectIcon ? capitalize(selectIcon) : "Link"}
            placeholder="https://..."
            onChange={(value) => {
              field.onChange(value);
              changeState();
            }}
          />
        )}
      />
      <TrashBinIconStyled />
    </Flex>
  );
};
