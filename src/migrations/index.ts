import * as migration_20250716_214745 from './20250716_214745';
import * as migration_20250716_214917 from './20250716_214917';

export const migrations = [
  {
    up: migration_20250716_214745.up,
    down: migration_20250716_214745.down,
    name: '20250716_214745',
  },
  {
    up: migration_20250716_214917.up,
    down: migration_20250716_214917.down,
    name: '20250716_214917'
  },
];
