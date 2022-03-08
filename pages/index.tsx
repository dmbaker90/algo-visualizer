import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useSetRecoilState } from 'recoil'
import Grid from '../components/grid';
import Header from '../components/header';
import { blocksState } from "../atoms/blocksAtom";
import { useEffect } from 'react';
import { BlockItem } from '../types/BlockItem';

const Home: NextPage = () => {

  const COLS = 50;
  const ROWS = 25;

  const setBlockItems = useSetRecoilState(blocksState);

  useEffect(() => {
    let col = 0;
    let row = 0;
    const blocks: BlockItem[] = [];
    let index = 0;
    [...Array(1875)].forEach(b => {
      col = index % 75;
      row = Math.floor(index / 75);
      let bi = new BlockItem();
      bi.id = index;
      bi.key = `${index}-false}`;
      bi.col = col;
      bi.row = row;
      index++;
      blocks.push(bi);
    })
    setBlockItems(() => blocks);
  }, [])

  return (
    <div className="h-full">
      <Head>
        <title>Pathfinding Visualizer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="p-5">

        <Header></Header>

        <Grid></Grid>

      </div>
    </div>
  )
}

export default Home
