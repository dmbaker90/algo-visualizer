import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import Block from "./block";
import { blocksState } from "../atoms/blocksAtom";

function Grid() {
    const blocks = useRecoilValue(blocksState);
    console.log('grid');

    return (
        <div className="grid grid-cols-50 grid-rows-25 h-full">
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
