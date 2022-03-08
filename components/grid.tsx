import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import Block from "./block";
import { blocksState } from "../atoms/blocksAtom";

function Grid() {
    const blocks = useRecoilValue(blocksState);

    useEffect(() => {
        blocks.forEach(b => {
            if (b && b.searchOrder && b!.searchOrder >= 0) {
                setTimeout(() => {
                    // const node = visitedNodesInOrder[i];
                    document!.getElementById(`block-${b.row}-${b.col}`)!.className =
                        'node-visited';
                }, 10 * b!.searchOrder);
            }
        });
    });

    return (
        <div className="grid grid-cols-75 grid-rows-25 h-full">
            {blocks.map(block => (
                <Block
                    key={block.key}
                    blockItem={block}
                />
            ))}
        </div>
    )
}

export default Grid
