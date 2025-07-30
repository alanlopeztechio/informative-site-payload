import * as migration_20250730_215041 from './20250730_215041';

export const migrations = [
  {
    up: migration_20250730_215041.up,
    down: migration_20250730_215041.down,
    name: '20250730_215041'
  },
];
