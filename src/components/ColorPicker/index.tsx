'use client'

import React from 'react'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

// Tipo personalizado para trabajar con Payload CMS
type ColorPickerProps = {
  value?: string
  onChange: (val: string) => void
}

const ColorPicker: React.FC<ColorPickerProps> = ({ value = '#ffffff', onChange }) => {
  return (
    <div className="space-y-2">
      <Label className="text-sm">Color actual</Label>

      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className="w-[120px] justify-start"
            style={{ backgroundColor: value }}
          >
            {value}
          </Button>
        </PopoverTrigger>

        <PopoverContent className="w-fit p-4">
          <Input
            type="color"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="h-10 w-24 p-1 border-none bg-transparent"
          />
          <Button variant="ghost" size="sm" className="mt-2" onClick={() => onChange('#ffffff')}>
            Restaurar color
          </Button>
        </PopoverContent>
      </Popover>
    </div>
  )
}

export default ColorPicker
