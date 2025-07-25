import * as migration_20250629_202644_initial from './20250629_202644_initial'
import * as migration_20250716_204415 from './20250716_204415'
import * as migration_20250717_190000 from './20250717_190000'

export const migrations = [
  {
    up: migration_20250717_181222.up,
    down: migration_20250717_181222.down,
    name: '20250717_181222',
  },
  {
    up: migration_20250716_204415.up,
    down: migration_20250716_204415.down,
    name: '20250716_204415',
  },
  {
    up: migration_20250717_190000.up,
    down: migration_20250717_190000.down,
    name: '20250717_190000',
  },
]
