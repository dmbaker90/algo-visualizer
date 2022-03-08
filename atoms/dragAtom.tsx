import { atom } from "recoil";
import { BlockItem } from "../types/BlockItem";
import { DragInfo } from "../types/DragInfo";

const initialState: DragInfo = { id: 0, dragType: '' };

export const dragState = atom({
    key: "dragState",
    default: initialState,
});