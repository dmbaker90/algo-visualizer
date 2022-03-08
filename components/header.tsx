import { useRecoilState, useRecoilValue } from "recoil";
import { blocksState } from "../atoms/blocksAtom";
import { endBlockState } from "../atoms/endBlock";
import { startBlockState } from "../atoms/startBlock";
import { BlockItem } from "../types/BlockItem";

function Header() {
    const [blockItems, setBlockItems] = useRecoilState(blocksState);
    const [startBlock, setStartBlock] = useRecoilState(startBlockState);
    const [endBlock, setEndBlock] = useRecoilState(endBlockState);

    const startAlgo = async () => {
        // alert('start');
        startDijstrasAlgo();
    }

    const startDijstrasAlgo = async () => {
        // Mark All Unvisited with Infinity Distance
        let nodes: BlockItem[] = [];
        blockItems.forEach(b => nodes.push({
            ...b,
            visited: false,
            key: `${b.id}-false`,
            tentativeDistance: b.id == startBlock ? 0 : Infinity
        }));
        setBlockItems(nodes);

        // Set the current node and the Tentative Distance to 0
        let currentNode = nodes.find(n => n.id === startBlock);
        let unvisitedCount = nodes.filter(n => n.visited == false).length;
        let loopCount = 0;
        while (unvisitedCount > 0) {

            if (!currentNode) {
                alert("error: current node not found");
            }

            nodes = replaceBlock(nodes, currentNode!, {
                ...currentNode!,
                visited: true,
                key: `${currentNode!.id}-true`,
            });

            setBlockItems(nodes);
            currentNode = nodes.find(n => n.id == currentNode!.id);
            // Get unvisited neighboards of current node
            let neighbors = nodes.filter(node => node.visited == false && node.id !== currentNode!.id && node.col >= (currentNode!.col - 1) && node.col <= (currentNode!.col + 1) && node.row >= (currentNode!.row - 1) && node.row <= (currentNode!.row + 1));

            neighbors.forEach(n => {
                let calcDistance = currentNode!.tentativeDistance + 1;
                if (calcDistance < n.tentativeDistance) {
                    nodes = replaceBlock(nodes, n, {
                        ...n,
                        tentativeDistance: calcDistance,
                    });
                }
                setBlockItems(nodes);
            });

            unvisitedCount = blockItems.filter(n => n.visited == false).length;

            // Move the the neighbor node with the lowest distance
            var min = Math.min(...neighbors.map(item => item.tentativeDistance));
            currentNode = neighbors.find(n => n.tentativeDistance == min);

            if (currentNode!.id === endBlock) {
                alert('done');
                break;
            }
            loopCount++;
        }


    }

    const markVisisted = (block: BlockItem) => {
        const index = blockItems.findIndex((block) => block === block);
        const newList = replaceItemAtIndex(blockItems, index, {
            ...block,
            visited: true,
        });

        setBlockItems(newList);
    };

    function replaceItemWithId(arr: BlockItem[], id: any, newValue: any) {
        let index = arr.findIndex(n => n.id === id);
        return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
    }

    function replaceItemAtIndex(arr: any, index: any, newValue: any) {
        return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
    }

    function replaceBlock(arr: BlockItem[], oldBlock: BlockItem, newBlock: BlockItem): BlockItem[] {
        let index = arr.findIndex(n => n.id === oldBlock.id);
        let returnarray = [...arr.slice(0, index), newBlock, ...arr.slice(index + 1)];
        return returnarray;
    }

    return (
        <div>
            <button
                type="submit"
                onClick={startAlgo}
                className="font-semibold text-blue-400">Start</button>
        </div>
    )
}

export default Header
