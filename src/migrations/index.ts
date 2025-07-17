import * as migration_20250717_180054 from './20250717_180054';

export const migrations = [
  {
    up: migration_20250717_180054.up,
    down: migration_20250717_180054.down,
    name: '20250717_180054'
  },
];
