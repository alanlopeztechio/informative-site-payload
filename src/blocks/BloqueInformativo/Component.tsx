import React from 'react'

type Props = {
  titulo: string
  descripcionCorta: string
  descripcionLarga: string
  icono: {
    url?: string
    alt?: string
  }
}

const BloqueInformativo: React.FC<Props> = ({
  titulo,
  descripcionCorta,
  descripcionLarga,
  icono,
}) => {
  return (
    <div className="bg-white shadow rounded-lg p-6 max-w-4xl mx-auto">
      <div className="flex items-start space-x-4">
        {icono?.url && <img src={icono.url} alt={icono.alt || 'Ícono'} className="w-8 h-8 mt-1" />}
        <div>
          <h3 className="text-lg font-semibold text-emerald-700">{titulo}</h3>
          <p className="text-sm text-gray-600 mb-2">{descripcionCorta}</p>
          <p className="text-sm text-gray-800 whitespace-pre-line">{descripcionLarga}</p>
        </div>
      </div>
    </div>
  )
}

export default BloqueInformativo
