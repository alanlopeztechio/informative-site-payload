import * as migration_20250728_224003 from './20250728_224003';
import * as migration_20250729_200242 from './20250729_200242';

export const migrations = [
  {
    up: migration_20250728_224003.up,
    down: migration_20250728_224003.down,
    name: '20250728_224003',
  },
  {
    up: migration_20250729_200242.up,
    down: migration_20250729_200242.down,
    name: '20250729_200242'
  },
];
