import type { RowBlock } from '@/payload-types'
import React from 'react'
import { ColumnComponent } from '../Column/Component'

export const RowComponent: React.FC<RowBlock> = (props) => {
  const { columns } = props

  return (
    <div className={`flex flex-row flex-wrap p-4`}>
      {columns?.map((column) => (
        <ColumnComponent key={column.id} {...column} />
      ))}
    </div>
  )
}
