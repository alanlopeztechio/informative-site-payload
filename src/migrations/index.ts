import * as migration_20250730_165417 from './20250730_165417'

export const migrations = [
  {
    up: migration_20250730_165417.up,
    down: migration_20250730_165417.down,
    name: '20250730_165417',
  },
]
