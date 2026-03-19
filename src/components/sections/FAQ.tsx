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
    <section id="faq" className="py-24 bg-black">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.2em] text-purple-400 mb-4">
            FAQ
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-4">
            <span className="text-gradient">
              Preguntas Frecuentes
            </span>
          </h2>
        </div>

        <Accordion.Root type="single" collapsible className="space-y-3">
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
      className="overflow-hidden rounded-lg bg-neutral-900/50 border border-neutral-800"
    >
      {children}
    </Accordion.Item>
  );
}

function AccordionTrigger({ children }: { children: React.ReactNode }) {
  return (
    <Accordion.Header className="flex">
      <Accordion.Trigger className="group flex flex-1 items-center justify-between p-5 text-left transition-colors">
        <span className="text-sm sm:text-base font-medium text-white group-hover:text-purple-400 transition-colors pr-4">
          {children}
        </span>
        <ChevronDown
          className="w-4 h-4 text-neutral-500 transition-transform duration-300 group-data-[state=open]:rotate-180 group-hover:text-purple-400 flex-shrink-0"
          aria-hidden
        />
      </Accordion.Trigger>
    </Accordion.Header>
  );
}

function AccordionContent({ children }: { children: React.ReactNode }) {
  return (
    <Accordion.Content className="overflow-hidden data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp">
      <div className="px-5 pb-5 pt-0 text-sm text-neutral-400 leading-relaxed">{children}</div>
    </Accordion.Content>
  );
}
