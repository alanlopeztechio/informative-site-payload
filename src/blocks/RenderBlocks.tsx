import React, { Fragment } from 'react'

import type { Page } from '@/payload-types'

import { ArchiveBlock } from '@/blocks/ArchiveBlock/Component'
import { CallToActionBlock } from '@/blocks/CallToAction/Component'
import { ContentBlock } from '@/blocks/Content/Component'
import { FormBlock } from '@/blocks/Form/Component'
import { MediaBlock } from '@/blocks/MediaBlock/Component'
import { ContetWithMediaBlock } from './ContentWithMedia/Component'
import { SliderCompnent } from './SliderBlock/config'
import Acordeon from './Acordeon/config'
import Carousel from './Carousel/config'
import { RowComponent } from './Row/Component'
import { ColumnComponent } from './Column/Component'
import { SectionComponent } from './Section/Component'
import { TextComponent } from './Text/Component'

const blockComponents = {
  archive: ArchiveBlock,
  content: ContentBlock,
  cta: CallToActionBlock,
  acordeon: Acordeon,
  formBlock: FormBlock,
  mediaBlock: MediaBlock,
  carousel: Carousel,
  contentWithMedia: ContetWithMediaBlock,
  slider: SliderCompnent,
  row: RowComponent,
  column: ColumnComponent,
  section: SectionComponent,
  text: TextComponent,
}

export const RenderBlocks: React.FC<{
  blocks: Page['layout'][0][]
}> = (props) => {
  const { blocks } = props

  const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0

  if (hasBlocks) {
    return (
      <Fragment>
        {blocks.map((block, index) => {
          const { blockType } = block

          if (blockType && blockType in blockComponents) {
            const Block = blockComponents[blockType]

            if (Block) {
              return (
                <div className="my-16" key={index}>
                  {/* @ts-expect-error there may be some mismatch between the expected types here */}
                  <Block {...block} disableInnerContainer />
                </div>
              )
            }
          }
          return null
        })}
      </Fragment>
    )
  }

  return null
}
