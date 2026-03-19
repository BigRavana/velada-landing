"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import type { FAQItem } from "@/types";

interface FAQSectionProps {
  items: FAQItem[];
}

export function FAQSection({ items }: FAQSectionProps) {
  return (
    <section id="faq" className="py-24 bg-dark-100">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-black mb-4">
            <span className="bg-gradient-to-r from-neon-green to-neon-blue bg-clip-text text-transparent">
              Preguntas Frecuentes
            </span>
          </h2>
          <p className="text-gray-400 text-lg">
            Todo lo que necesitas saber sobre el evento
          </p>
        </div>

        <Accordion.Root type="single" collapsible className="space-y-4">
          {items.map((item) => (
            <AccordionItem key={item.id} value={item.id}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion.Root>
      </div>
    </section>
  );
}

interface AccordionItemProps {
  children: React.ReactNode;
  value: string;
}

function AccordionItem({ children, value }: AccordionItemProps) {
  return (
    <Accordion.Item
      value={value}
      className="overflow-hidden rounded-xl bg-dark-200 border border-dark-300 focus-within:border-neon-blue/50 transition-colors"
    >
      {children}
    </Accordion.Item>
  );
}

function AccordionTrigger({ children }: { children: React.ReactNode }) {
  return (
    <Accordion.Header className="flex">
      <Accordion.Trigger className="group flex flex-1 items-center justify-between p-6 text-left transition-colors hover:text-neon-blue">
        <span className="text-lg font-semibold text-white group-hover:text-neon-blue transition-colors">
          {children}
        </span>
        <ChevronDown
          className="w-5 h-5 text-gray-400 transition-transform duration-300 group-data-[state=open]:rotate-180 group-hover:text-neon-blue"
          aria-hidden
        />
      </Accordion.Trigger>
    </Accordion.Header>
  );
}

function AccordionContent({ children }: { children: React.ReactNode }) {
  return (
    <Accordion.Content className="overflow-hidden data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp">
      <div className="px-6 pb-6 pt-0 text-gray-400 leading-relaxed">{children}</div>
    </Accordion.Content>
  );
}
