import { childView, view, ViewModel } from '@yoskutik/react-vvm';
import { action, computed, observable } from 'mobx';
import { lazy, Suspense, useEffect } from 'react';
import { FPSRate } from '../FPSRate/FPSRate';
import { getSize } from '../utils';
import './Map.scss';

const SIZE = getSize();

type TCoordinate = { x: number; y: number };

type TDirection = 'up' | 'right' | 'down' | 'left';

export class MapViewModel extends ViewModel {
  private nextDirection: TDirection = 'right';

  @observable private direction: TDirection = 'right';

  @observable private additionalSpeed = 0;

  @observable snakeCoordinates: TCoordinate[] = [3, 4, 5, 6].map(x => ({ y: 2, x }));

  @observable.ref private appleCoordinatesPrevious: null | TCoordinate = null;

  @observable.ref appleCoordinates: null | TCoordinate = null;

  @computed get speed() {
    return Math.floor(this.snakeCoordinates.length / 3 + this.additionalSpeed);
  }

  @computed get map() {
    const map = Array(SIZE).fill(null).map(() => (
      Array(SIZE).fill(null).map(() => false)
    ));

    this.snakeCoordinates.forEach(({ x, y }) => {
      map[y][x] = true;
    });

    return map;
  }

  @action protected onViewMounted() {
    this.tryToCreateApple();

    window.addEventListener('keydown', action(evt => {
      if (['ArrowUp', 'KeyW'].includes(evt.code) && this.direction !== 'down') {
        this.nextDirection = 'up';
      } else if (['ArrowRight', 'KeyD'].includes(evt.code) && this.direction !== 'left') {
        this.nextDirection = 'right';
      } else if (['ArrowDown', 'KeyS'].includes(evt.code) && this.direction !== 'up') {
        this.nextDirection = 'down';
      } else if (['ArrowLeft', 'KeyA'].includes(evt.code) && this.direction !== 'right') {
        this.nextDirection = 'left';
      } else if (evt.code === 'Equal') {
        this.additionalSpeed++;
      } else if (evt.code === 'Minus') {
        this.additionalSpeed--;
      }
    }));

    // this.update();
  }

  private createRandomIndexes = () => (
    Array(SIZE).fill(null)
      .map((_, i) => i)
      .sort(() => Math.random() - 0.5)
  );

  private isCoordsEqual = (coordinate1: TCoordinate | null, coordinate2: TCoordinate | null) => !!(
    coordinate1 && coordinate2 && coordinate1.x === coordinate2.x && coordinate1.y === coordinate2.y
  );

  @action update = () => {
    const head = this.snakeCoordinates.at(-1)!;
    this.direction = this.nextDirection;

    const nextTile = ({
      up: { ...head, y: head.y - 1 },
      right: { ...head, x: head.x + 1 },
      down: { ...head, y: head.y + 1 },
      left: { ...head, x: head.x - 1 },
    })[this.direction];

    if (this.isCoordsEqual(this.snakeCoordinates[0], this.appleCoordinatesPrevious)) {
      this.snakeCoordinates = [...this.snakeCoordinates, nextTile];
      this.appleCoordinatesPrevious = null;
    } else {
      this.snakeCoordinates = [...this.snakeCoordinates.slice(1), nextTile];
    }

    if (this.isCoordsEqual(nextTile, this.appleCoordinates)) {
      this.appleCoordinatesPrevious = this.appleCoordinates;
      this.tryToCreateApple();
    }

    const coordinatesSet = new Set();

    for (const { x, y } of this.snakeCoordinates) {
      coordinatesSet.add(`${x}_${y}`);
      if (x < 0 || x >= SIZE || y < 0 || y >= SIZE) {
        this.endGame(false);
        return;
      }
    }

    if (this.snakeCoordinates.length > coordinatesSet.size) {
      this.endGame(false);
      return;
    }

    setTimeout(this.update, 1_000 / this.speed);
  };

  @action private endGame = (hasWon: boolean) => {
    this.appleCoordinates = null;
    const shouldTryAgain = confirm(`You ${hasWon ? 'win!' : 'lost.'} Try again?`);

    if (shouldTryAgain) {
      this.snakeCoordinates = [3, 4, 5, 6].map(x => ({ y: 2, x }));
      this.nextDirection = 'right';
      this.additionalSpeed = 0;
      this.tryToCreateApple();
      this.update();
    }
  };

  @action private tryToCreateApple = () => {
    for (const y of this.createRandomIndexes()) {
      for (const x of this.createRandomIndexes()) {
        if (this.map[y][x]) continue;
        this.appleCoordinates = { x, y };
        return;
      }
    }

    this.endGame(true);
  };
}

const Fallback = childView<MapViewModel>()(({ viewModel }) => {
  useEffect(() => viewModel.update, [viewModel]);
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'fixed', inset: 0 }}>
      <span>Loading...</span>
    </div>
  );
});

const SpeedRate = childView<MapViewModel>()(({ viewModel }) => (
  <div style={{ position: 'fixed', top: 50, left: 10 }}>
    Speed: {viewModel.speed}
  </div>
));

const Tiles = lazy(() => import('../Tiles/Tiles'));

export const Map = view(MapViewModel)(() => (
  <div
    className="map"
    style={{
      gridTemplateColumns: `repeat(${SIZE}, 1fr)`,
      gap: `calc((100vh - 20px) / (${SIZE - 1}) / 10)`,
    }}
  >
    <FPSRate />
    <SpeedRate />
    <Suspense fallback={<Fallback />}>
      <Tiles />
    </Suspense>
  </div>
));
