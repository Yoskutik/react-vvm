import { view, ViewModel } from '@yoskutik/react-vvm';
import type { MapViewModel } from '../Map/Map';
import { computed } from 'mobx';
import './Tile.scss';

type Props = {
  x: number;
  y: number;
};

class TileViewModel extends ViewModel<MapViewModel, Props> {
  @computed get status(): 'idle' | 'snake' | 'apple' {
    const { x, y } = this.viewProps;
    const { appleCoordinates } = this.parent;

    if (this.parent.map[y][x]) {
      return 'snake';
    }

    if (x === appleCoordinates?.x && y === appleCoordinates?.y) {
      return 'apple';
    }

    return 'idle';
  }
}

export const Tile = view(TileViewModel)<Props>(({ viewModel }) => (
  <div className={`tile tile--${viewModel.status}`} />
));
