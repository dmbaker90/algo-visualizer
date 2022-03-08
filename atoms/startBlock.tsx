import { atom } from "recoil";
import { BlockItem } from "../types/BlockItem";

export const startBlockState = atom({
    key: "startBlockState",
    default: 0,
});