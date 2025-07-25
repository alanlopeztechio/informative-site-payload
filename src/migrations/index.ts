import * as migration_20250716_204415 from './20250716_204415'
import * as migration_20250717_181222 from './20250717_181222'
import * as migration_20250717_190000 from './20250717_190000'
import * as migration_20250725_193433 from './20250725_193433'

export const migrations = [
  {
    up: migration_20250716_204415.up,
    down: migration_20250716_204415.down,
    name: '20250716_204415',
  },
  {
    up: migration_20250717_181222.up,
    down: migration_20250717_181222.down,
    name: '20250717_181222',
  },
  {
    up: migration_20250717_190000.up,
    down: migration_20250717_190000.down,
    name: '20250717_190000',
  },
  {
    up: migration_20250725_193433.up,
    down: migration_20250725_193433.down,
    name: '20250725_193433',
  },
]
