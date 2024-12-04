import { FC, ReactNode } from "react";

import {
  AlignJustifyIcon,
  Button,
  ConfirmContent,
  Flex,
  FlexChild,
  MarginProps,
  PaddingProps,
  Panel,
  Popover,
  TrashBinIcon,
  UserEditIcon,
  usyColor,
  usySpacing,
} from "@usy-ui/base";

import { DragDropStyled } from "./styled";

type DragDropPanelProps = {
  children: ReactNode;
  isDraggable?: boolean;
  onEdit?: () => void;
  onRemove?: () => void;
} & MarginProps &
  PaddingProps;

export const DragDropPanel: FC<DragDropPanelProps> = ({
  children,
  isDraggable = true,
  onEdit,
  onRemove,
  marginProps,
  paddingProps,
}) => {
  const renderEditDeleteIcons = () => {
    return (
      <Flex
        direction="column"
        justifyContent="center"
        widthProps={{
          maxWidth: `calc(${usySpacing.px40} + ${usySpacing.px4})`,
        }}
      >
        {onEdit && (
          <Button variant="invisible" onClick={onEdit}>
            <UserEditIcon />
          </Button>
        )}
        {onRemove && (
          <Popover
            position="left"
            color="dark-8"
            content={
              <ConfirmContent
                description="Are you sure to remove"
                onConfirm={onRemove}
              />
            }
          >
            <Button variant="invisible">
              <TrashBinIcon color={usyColor.red7} />
            </Button>
          </Popover>
        )}
      </Flex>
    );
  };

  return (
    <Panel
      marginProps={{ ...marginProps, margin: `${usySpacing.px6} 0` }}
      paddingProps={{
        ...paddingProps,
        padding: `${usySpacing.px18} ${usySpacing.px4}`,
        paddingLeft: isDraggable ? usySpacing.px4 : usySpacing.px18,
      }}
    >
      <Flex alignItems="center" gap={usySpacing.px4}>
        {isDraggable && (
          <DragDropStyled>
            <AlignJustifyIcon />
          </DragDropStyled>
        )}
        <FlexChild grow={1}>{children}</FlexChild>
        {renderEditDeleteIcons()}
      </Flex>
    </Panel>
  );
};
