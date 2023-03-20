import { Dispatch, SetStateAction } from "react";

export type pizzaType = {
  base: string;
  toppings: string[];
};
export type modalType = {
  showModal: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
};
export type OrderType = {
  pizza: pizzaType;
  setShowModal: Dispatch<SetStateAction<boolean>>;
};
export type ToppingsType = {
  addTopping: (topping: string) => void;
  pizza: pizzaType;
};
