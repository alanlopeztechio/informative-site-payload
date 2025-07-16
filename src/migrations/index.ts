import * as migration_20250629_202644_initial from './20250629_202644_initial';
import * as migration_20250716_205611 from './20250716_205611';

export const migrations = [
  {
    up: migration_20250629_202644_initial.up,
    down: migration_20250629_202644_initial.down,
    name: '20250629_202644_initial',
  },
  {
    up: migration_20250716_205611.up,
    down: migration_20250716_205611.down,
    name: '20250716_205611'
  },
];
