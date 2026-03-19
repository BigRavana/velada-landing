"use client";

import Image from "next/image";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import type { MerchItem } from "@/types";
import { ShoppingBag } from "lucide-react";

interface MerchandisingSectionProps {
  items: MerchItem[];
}

export function MerchandisingSection({ items }: MerchandisingSectionProps) {
  return (
    <section id="merch" className="py-24 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.2em] text-pink-400 mb-4">
            Tienda
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-4">
            <span className="text-gradient">
              Merchandising
            </span>
          </h2>
          <p className="text-neutral-500 text-base max-w-xl mx-auto">
            Consigue tu equipamiento exclusivo del evento. Edición limitada.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {items.map((item) => (
            <MerchCard key={item.id} item={item} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-neutral-600 text-sm mb-4">
            Disponible en tienda oficial
          </p>
          <Button variant="outline" size="lg">
            <ShoppingBag className="w-4 h-4 mr-2" />
            Ver Tienda Completa
          </Button>
        </div>
      </div>
    </section>
  );
}

interface MerchCardProps {
  item: MerchItem;
}

function MerchCard({ item }: MerchCardProps) {
  return (
    <Card className="group cursor-pointer" hover>
      <div className="relative aspect-square overflow-hidden rounded-lg bg-neutral-900">
        <Image
          src={item.image}
          alt={item.name}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 20vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          placeholder="blur"
          blurDataURL={item.blurDataUrl}
        />
      </div>
      <div className="p-4">
        <h3 className="font-medium text-white text-sm mb-1 group-hover:text-purple-400 transition-colors">
          {item.name}
        </h3>
        <div className="flex items-center justify-between">
          <span className="text-base font-bold text-white">
            €{item.price.toFixed(2)}
          </span>
          <span className="text-xs text-neutral-600">
            {item.sizes.length > 2
              ? `${item.sizes[0]} - ${item.sizes[item.sizes.length - 1]}`
              : item.sizes.join(" / ")}
          </span>
        </div>
      </div>
    </Card>
  );
}
