import { Block } from 'payload'

export const SliderCompnent: Block = {
  slug: 'slider',
  interfaceName: 'Slider',
  fields: [
    {
      name: 'slider',
      type: 'array',
      minRows: 1,
      fields: [
        {
          name: 'userTeam',
          type: 'text',
        },
        {
          name: 'userDescription',
          type: 'text',
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
        },
      ],
    },
  ],
}
