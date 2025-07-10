"use client";

import React, { useState } from "react";

export const Acordeon = ({
  titulo,
  items,
}: {
  titulo: string;
  items: { titulo: string; contenido: string }[];
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold mb-8 text-center">{titulo}</h2>
      <div className="max-w-2xl mx-auto space-y-4">
        {items.map((item, index) => (
          <div key={index} className="border rounded-lg overflow-hidden">
            <button
              onClick={() => toggle(index)}
              className="w-full text-left px-4 py-3 bg-gray-100 hover:bg-gray-200 font-semibold"
            >
              {item.titulo}
            </button>
            {openIndex === index && (
              <div className="px-4 py-3 bg-white border-t text-gray-700">
                {item.contenido}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
