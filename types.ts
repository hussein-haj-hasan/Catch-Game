import { Dispatch, SetStateAction } from "react";

export type modalType = {
  showModal: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
  setLevel: Dispatch<SetStateAction<levelType>>;
  setScore: Dispatch<SetStateAction<number>>;
};
export type OrderType = {
  level: levelType;
  setShowModal: Dispatch<SetStateAction<boolean>>;
  score: number;
  setScore: Dispatch<SetStateAction<number>>;
  setShowHeader: Dispatch<SetStateAction<boolean>>;
  showModal: boolean;
};

export type levelType =
  | "Telegram | Easy"
  | "Call | Medium"
  | "Face2Face | Hard"
  | null;
export type BaseLevel = {
  setLevel: Dispatch<SetStateAction<levelType>>;
  level: levelType;
};
export type HeaderType = {
  showHeader: boolean;
};
