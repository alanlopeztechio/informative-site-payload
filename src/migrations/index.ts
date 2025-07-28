import * as migration_20250725_215914 from './20250725_215914';
import * as migration_20250728_154855 from './20250728_154855';
import * as migration_20250728_155506 from './20250728_155506';
import * as migration_20250728_165821 from './20250728_165821';
import * as migration_20250728_171010 from './20250728_171010';

export const migrations = [
  {
    up: migration_20250725_215914.up,
    down: migration_20250725_215914.down,
    name: '20250725_215914',
  },
  {
    up: migration_20250728_154855.up,
    down: migration_20250728_154855.down,
    name: '20250728_154855',
  },
  {
    up: migration_20250728_155506.up,
    down: migration_20250728_155506.down,
    name: '20250728_155506',
  },
  {
    up: migration_20250728_165821.up,
    down: migration_20250728_165821.down,
    name: '20250728_165821',
  },
  {
    up: migration_20250728_171010.up,
    down: migration_20250728_171010.down,
    name: '20250728_171010'
  },
];
