import * as migration_20250629_202644_initial from './20250629_202644_initial'
import * as migration_20250716_204415 from './20250716_204415'
import * as migration_20250717_190000 from './20250717_190000'
import * as migration_20250728_154855 from './20250728_154855'

export const migrations = [
  {
    up: migration_20250629_202644_initial.up,
    down: migration_20250629_202644_initial.down,
    name: '20250629_202644_initial',
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
  {
    up: migration_20250728_154855.up,
    down: migration_20250728_154855.down,
    name: '20250728_154855',
  },
]
