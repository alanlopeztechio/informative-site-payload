import React from 'react'
import { BloqueInformativo } from '@/payload-types'
import RichText from '@/components/RichText'

export const BloqueInformativoComponent: React.FC<BloqueInformativo> = (props) => {
  return (
    <div className="bg-white rounded-xl shadow p-6 mb-6 max-w-5xl mx-auto">
      <div className="flex items-start gap-4">
        <div className="text-teal-600"></div>
        <div>
          <h3 className="text-xl font-bold text-teal-700">{props.titulo}</h3>
          {props.subtitulo && <p className="text-sm text-gray-500">{props.subtitulo}</p>}
          <div className="mt-3 text-gray-700 leading-relaxed">
            {props.contenido && <RichText data={props.contenido} />}
          </div>
        </div>
      </div>
    </div>
  )
}
