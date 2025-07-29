import { SectionBlock } from '@/payload-types'
import React from 'react'
import { RenderBlocks } from '../RenderBlocks'

export const SectionComponent: React.FC<SectionBlock> = (props) => {
  const { rows: row } = props

  return <section className="container my-16">{row && <RenderBlocks blocks={row} />}</section>
}
