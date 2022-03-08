import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { dragState } from "../atoms/dragAtom";
import { endBlockState } from "../atoms/endBlock";
import { startBlockState } from "../atoms/startBlock";
import { DragInfo } from "../types/DragInfo";
// import { BlockItem } from "../types/BlockItem";


function Block(props: any) {
    const [startBlock, setStartBlock] = useRecoilState(startBlockState);
    const [endBlock, setEndBlock] = useRecoilState(endBlockState);
    const [dragData, setDragData] = useRecoilState(dragState);

    const handleDragStart = (e: any, id: number, dragType: string) => {
        setDragData({ id: id, dragType: dragType });
    };

    // DND will not work without this.
    const handleDragOver = (e: any) => {
        e.preventDefault();
    };

    const handleDrop = (e: any, destinationBlockId: number) => {
        if (dragData && dragData.dragType == "startBlock") {
            setStartBlock(destinationBlockId);
        }
        else if (dragData && dragData.dragType == "endBlock") {
            setEndBlock(destinationBlockId);
        }
    };

    return (
        <div id={`block-${props.blockItem.row}-${props.blockItem.col}`} className={`border border-solid border-sky-200 relative flex items-center justify-center`}
            onDrop={(e) => handleDrop(e, props.blockItem.id)} onDragOver={handleDragOver}>
            {props.blockItem.id == startBlock &&
                <span className="flex h-3 w-3 cursor-grab" draggable
                    onDragStart={(e) => handleDragStart(e, startBlock, "startBlock")}
                >
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 left-0 top-0"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
            }
            {props.blockItem.id == endBlock &&
                <span className="cursor-grab" draggable
                    onDragStart={(e) => handleDragStart(e, endBlock, "endBlock")}>

                    <svg xmlns="http://www.w3.org/2000/svg" className="relative first:icon icon-tabler icon-tabler-target" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ff2825" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <circle cx="12" cy="12" r="1" />
                        <circle cx="12" cy="12" r="5" />
                        <circle cx="12" cy="12" r="9" />
                    </svg>

                    <svg xmlns="http://www.w3.org/2000/svg" className="absolute top-0 animate-ping icon icon-tabler icon-tabler-target" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ff2825" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <circle cx="12" cy="12" r="1" />
                        <circle cx="12" cy="12" r="5" />
                        <circle cx="12" cy="12" r="9" />
                    </svg>
                </span>
            }
        </div>
    )
}

export default Block
