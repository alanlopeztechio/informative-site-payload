import { GlobalConfig } from 'payload'

const loadColorPicker = () => import('@/components/ColorPicker').then((mod) => mod.default)

const SiteConfig: GlobalConfig = {
  slug: 'siteConfig',
  label: 'Configuración del sitio',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'headerBackgroundColor',
      label: 'Color de fondo del Header',
      type: 'text',
      defaultValue: '#ffffff',
      admin: {
        components: {
          Field: loadColorPicker as any, // esto fuerza el tipo correcto sin romper TypeScript
        },
      },
    },
    {
      name: 'footerBackgroundColor',
      label: 'Color de fondo del Footer',
      type: 'text',
      defaultValue: '#f5f5f5',
      admin: {
        components: {
          Field: loadColorPicker as any,
        },
      },
    },
  ],
}

export default SiteConfig
