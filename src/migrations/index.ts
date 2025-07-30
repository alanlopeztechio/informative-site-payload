import * as migration_20250629_202644_initial from './20250629_202644_initial';
import * as migration_20250721_155651 from './20250721_155651';
import * as migration_20250728_224003 from './20250728_224003';
import * as migration_20250729_200242 from './20250729_200242';
import * as migration_20250730_160726 from './20250730_160726';
import * as migration_20250730_161514 from './20250730_161514';

export const migrations = [
  {
    up: migration_20250629_202644_initial.up,
    down: migration_20250629_202644_initial.down,
    name: '20250629_202644_initial',
  },
  {
    up: migration_20250721_155651.up,
    down: migration_20250721_155651.down,
    name: '20250721_155651',
  },
  {
    up: migration_20250728_224003.up,
    down: migration_20250728_224003.down,
    name: '20250728_224003',
  },
  {
    up: migration_20250729_200242.up,
    down: migration_20250729_200242.down,
    name: '20250729_200242',
  },
  {
    up: migration_20250730_160726.up,
    down: migration_20250730_160726.down,
    name: '20250730_160726',
  },
  {
    up: migration_20250730_161514.up,
    down: migration_20250730_161514.down,
    name: '20250730_161514'
  },
];
