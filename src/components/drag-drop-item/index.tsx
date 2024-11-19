import { FC, ReactNode } from "react";

import {
  AlignJustifyIcon,
  Button,
  Flex,
  FlexChild,
  Panel,
  Popover,
  TrashBinIcon,
  Typography,
  UserEditIcon,
  usyColor,
  usySpacing,
} from "@usy-ui/base";

import { DragDropStyled } from "./styled";

type DragDropItemProps = {
  children: ReactNode;
  isDraggable?: boolean;
  onEdit: () => void;
  onRemove: () => void;
};

export const DragDropItem: FC<DragDropItemProps> = ({
  children,
  isDraggable = true,
  onEdit,
  onRemove,
}) => {
  const renderConfirmQuestion = () => (
    <Flex
      direction="column"
      alignItems="center"
      gap={usySpacing.px6}
      widthProps={{ minWidth: "160px" }}
    >
      <Typography size="small">Are you sure to remove?</Typography>
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
        <Popover position="top-start" content={renderConfirmQuestion()}>
          <Button variant="invisible">
            <TrashBinIcon color={usyColor.red7} />
          </Button>
        </Popover>
      </Flex>
    );
  };

  return (
    <Panel
      marginProps={{ margin: `${usySpacing.px6} 0` }}
      paddingProps={{
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
