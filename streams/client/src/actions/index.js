import { SING_IN, SING_OUT } from "./types";

export const singIn = () => {
  return {
    type: SING_IN,
  };
};
export const singOut = () => {
  return {
    type: SING_OUT,
  };
};
