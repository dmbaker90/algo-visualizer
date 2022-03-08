import { useEffect, useState } from "react";
// import { BlockItem } from "../types/BlockItem";


function Block(props: any) {
    return (
        <div className={`border border-solid border-sky-200 h-4 ${props.blockItem.row}-${props.blockItem.col} ${props.blockItem.visited ? 'bg-teal-500' : ''}`}>
            <span>{props.blockItem.tentativeDistance == Infinity ? '' : props.blockItem.tentativeDistance}</span>
        </div>
    )
}

export default Block
