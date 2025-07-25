"use client";

import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export const Acordeon = ({
  titulo,
  items,
}: {
  titulo: string;
  items: { titulo: string; contenido: string }[];
}) => {
  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold mb-8 text-center">{titulo}</h2>
      <Accordion type="single" collapsible className="max-w-2xl mx-auto rounded-lg">
        {items.map((item, index) => (
          <AccordionItem value={String(index)} key={index}>
            <AccordionTrigger>{item.titulo}</AccordionTrigger>
            <AccordionContent>{item.contenido}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};
