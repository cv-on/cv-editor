export type LinkType = {
  name: string;
  url: string;
};

type ParagraphTypeStyle = {
  type: "strong" | "href";
  url: string;
  fromChar: number;
  toChar: number;
};

export type ParagraphType = {
  content: string;
  styles?: ParagraphTypeStyle;
};
