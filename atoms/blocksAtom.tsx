import { atom } from "recoil";
import { BlockItem } from "../types/BlockItem";

const initialState: BlockItem[] = [];

export const blocksState = atom({
    key: "blocksState",
    default: initialState,
});