import { FC, ReactNode } from "react";

import {
  AlignJustifyIcon,
  Button,
  Flex,
  Popover,
  TrashBinIcon,
  Typography,
  usyColor,
  usySpacing,
} from "@usy-ui/base";

import { DragDropStyled } from "./styled";

type DragDropTextAreaProps = {
  children: ReactNode;
  onRemove: () => void;
};

export const DragDropTextArea: FC<DragDropTextAreaProps> = ({
  children,
  onRemove,
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

  return (
    <Flex
      alignItems="center"
      gap={usySpacing.px4}
      widthProps={{ width: "unset" }}
      marginProps={{
        marginLeft: `-${usySpacing.px10}`,
        marginRight: `-${usySpacing.px16}`,
      }}
    >
      <DragDropStyled>
        <AlignJustifyIcon />
      </DragDropStyled>
      {children}
      <Popover position="left" color="dark-8" content={renderConfirmQuestion()}>
        <Button variant="invisible">
          <TrashBinIcon color={usyColor.red7} />
        </Button>
      </Popover>
    </Flex>
  );
};
