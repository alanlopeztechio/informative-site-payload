import React from 'react'
import { LucideIcon, icons } from 'lucide-react'
import { BloqueInformativo } from './config'
import RichText from '@/components/RichText'

// Tipamos las claves válidas de los íconos
type IconKey = keyof typeof icons

type Props = {
  icono?: IconKey
  titulo: string
  subtitulo?: string
  contenido: any
}

export const BloqueInformativoComponent: React.FC<Props> = ({
  icono = 'info',
  titulo,
  subtitulo,
  contenido,
}) => {
  const Icon: LucideIcon = icons[icono as IconKey] || icons['Info']

  return (
    <div className="bg-white rounded-xl shadow p-6 mb-6 max-w-5xl mx-auto">
      <div className="flex items-start gap-4">
        <div className="text-teal-600">
          <Icon size={28} strokeWidth={2.5} />
        </div>
        <div>
          <h3 className="text-xl font-bold text-teal-700">{titulo}</h3>
          {subtitulo && <p className="text-sm text-gray-500">{subtitulo}</p>}
          <div className="mt-3 text-gray-700 leading-relaxed">
            <RichText data={contenido} />
          </div>
        </div>
      </div>
    </div>
  )
}
