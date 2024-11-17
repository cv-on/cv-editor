import { ChangeEvent, FC, useRef, useState } from "react";

import { Avatar, Button, Flex, UploadIcon, usySpacing } from "@usy-ui/base";

type UploadAvatarProps = {
  avatarSrc: string;
  syncAvatar: (base64Img: string) => void;
};

export const UploadAvatar: FC<UploadAvatarProps> = ({
  avatarSrc,
  syncAvatar,
}) => {
  const [base64Avatar, setBase64Avatar] = useState<string>(avatarSrc);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setBase64Avatar(reader.result as string);
        syncAvatar(reader.result as string);
      };
      reader.readAsDataURL(file); // Converts file to Base64
    }
  };

  return (
    <Flex direction="column" alignItems="center" gap={usySpacing.px20}>
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        hidden
      />
      <Avatar size="huge" src={base64Avatar} />
      <Button
        variant="outline"
        size="medium"
        onClick={() => inputRef.current?.click()}
      >
        <UploadIcon />
        &nbsp;&nbsp;Select avatar
      </Button>
    </Flex>
  );
};
