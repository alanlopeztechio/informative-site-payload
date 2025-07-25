import { SectionBlock } from '@/payload-types'
import React from 'react'
import { RowComponent } from '../Row/Component'

export const SectionComponent: React.FC<SectionBlock> = (props) => {
  const { rows: row } = props

  return <section>{row && row.map((row, index) => <RowComponent key={index} {...row} />)}</section>
}
