import * as migration_20250725_215914 from './20250725_215914';

export const migrations = [
  {
    up: migration_20250725_215914.up,
    down: migration_20250725_215914.down,
    name: '20250725_215914'
  },
];
