import { Tile } from './Tile';
import { getSize } from '../utils';

const SIZE = getSize();

const Tiles = () => (
  <>
    {Array(SIZE).fill(null).map((_, y) => (
      Array(SIZE).fill(null).map((__, x) => (
        <Tile x={x} y={y} key={`${x}_${y}`} />
      ))
    ))}
  </>
);

export default Tiles;
