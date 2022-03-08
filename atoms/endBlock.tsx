import { atom } from "recoil";
import { BlockItem } from "../types/BlockItem";

export const endBlockState = atom({
    key: "endBlockState",
    default: 1025,
});