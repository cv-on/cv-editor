import { FC, ReactNode } from "react";

import {
  AlignJustifyIcon,
  Button,
  Flex,
  FlexChild,
  MarginProps,
  PaddingProps,
  Panel,
  Popover,
  TrashBinIcon,
  Typography,
  UserEditIcon,
  usyColor,
  usySpacing,
} from "@usy-ui/base";

import { DragDropStyled } from "./styled";

type DragDropPanelProps = {
  children: ReactNode;
  isDraggable?: boolean;
  onEdit: () => void;
  onRemove: () => void;
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
  const renderConfirmQuestion = () => (
    <Flex
      direction="column"
      alignItems="center"
      gap={usySpacing.px12}
      widthProps={{ minWidth: "160px" }}
    >
      <Typography size="small" color="white">
        Are you sure to remove?
      </Typography>
      <Button variant="danger" size="tiny" onClick={onRemove} noSole>
        Confirm
      </Button>
    </Flex>
  );

  const renderEditDeleteIcons = () => {
    return (
      <Flex
        direction="column"
        justifyContent="center"
        widthProps={{
          maxWidth: `calc(${usySpacing.px40} + ${usySpacing.px4})`,
        }}
      >
        <Button variant="invisible" onClick={onEdit}>
          <UserEditIcon />
        </Button>
        <Popover
          position="left"
          color="dark-8"
          content={renderConfirmQuestion()}
        >
          <Button variant="invisible">
            <TrashBinIcon color={usyColor.red7} />
          </Button>
        </Popover>
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
