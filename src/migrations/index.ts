import * as migration_20250629_202644_initial from './20250629_202644_initial';
import * as migration_20250716_204415 from './20250716_204415';

export const migrations = [
  {
    up: migration_20250629_202644_initial.up,
    down: migration_20250629_202644_initial.down,
    name: '20250629_202644_initial',
  },
  {
    up: migration_20250716_204415.up,
    down: migration_20250716_204415.down,
    name: '20250716_204415'
  },
];
