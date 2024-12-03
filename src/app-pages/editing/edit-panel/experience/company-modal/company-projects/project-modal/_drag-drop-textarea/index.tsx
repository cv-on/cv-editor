import { FC, ReactNode } from "react";

import {
  AlignJustifyIcon,
  Box,
  Button,
  ConfirmContent,
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
  return (
    <Flex
      alignItems="flex-start"
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
      <Box
        widthProps={{ maxWidth: usySpacing.px40 }}
        paddingProps={{ paddingTop: usySpacing.px14 }}
      >
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
      </Box>
    </Flex>
  );
};
