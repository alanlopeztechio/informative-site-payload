import * as migration_20250716_225356 from './20250716_225356';
import * as migration_20250721_155651 from './20250721_155651';
import * as migration_20250721_160730 from './20250721_160730';

export const migrations = [
  {
    up: migration_20250716_225356.up,
    down: migration_20250716_225356.down,
    name: '20250716_225356',
  },
  {
    up: migration_20250721_155651.up,
    down: migration_20250721_155651.down,
    name: '20250721_155651',
  },
  {
    up: migration_20250721_160730.up,
    down: migration_20250721_160730.down,
    name: '20250721_160730'
  },
];
