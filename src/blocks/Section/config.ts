import { Block } from 'payload'
import { Row } from '../Row/config'

export const Section: Block = {
  slug: 'section',
  interfaceName: 'SectionBlock',
  fields: [
    {
      type: 'blocks',
      name: 'rows',
      label: 'Rows',
      blocks: [Row],
      //blockReferences: ['row'],
    },
  ],
}
