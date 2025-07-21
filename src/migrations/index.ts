import * as migration_20250721_184054 from './20250721_184054';
import * as migration_20250721_190139 from './20250721_190139';

export const migrations = [
  {
    up: migration_20250721_184054.up,
    down: migration_20250721_184054.down,
    name: '20250721_184054',
  },
  {
    up: migration_20250721_190139.up,
    down: migration_20250721_190139.down,
    name: '20250721_190139'
  },
];
