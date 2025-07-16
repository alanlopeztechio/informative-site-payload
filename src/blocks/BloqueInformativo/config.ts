import {
  lexicalEditor,
  HeadingFeature,
  InlineToolbarFeature,
  FixedToolbarFeature,
  UnorderedListFeature, //
} from '@payloadcms/richtext-lexical'

import type { Block } from 'payload'
import { icons } from 'lucide-react' // Solo para generar las opciones del select

export const BloqueInformativo: Block = {
  slug: 'BloqueInformativo',
  interfaceName: 'ImagenConTextoBlock',
  labels: {
    singular: 'Bloque Informativo',
    plural: 'Bloques Informativos',
  },
  fields: [
    {
      name: 'icono',
      type: 'select',
      label: 'Ícono',
      options: Object.keys(icons).sort(),
      required: false,
    },
    {
      name: 'titulo',
      type: 'text',
      label: 'Título',
      required: true,
    },
    {
      name: 'subtitulo',
      type: 'text',
      label: 'Subtítulo',
    },
    {
      name: 'contenido',
      type: 'richText',
      label: 'Contenido con formato',
      editor: lexicalEditor({
        features: [
          HeadingFeature(),
          InlineToolbarFeature(),
          FixedToolbarFeature(),
          UnorderedListFeature(),
        ],
      }),
    },
  ],
}
