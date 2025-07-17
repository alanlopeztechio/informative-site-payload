import * as migration_20250717_181222 from './20250717_181222';

export const migrations = [
  {
    up: migration_20250717_181222.up,
    down: migration_20250717_181222.down,
    name: '20250717_181222'
  },
];
