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
    <section id="merch" className="py-24 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-black mb-4">
            <span className="bg-gradient-to-r from-neon-yellow to-neon-pink bg-clip-text text-transparent">
              Merchandising Oficial
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Consigue tu equipamiento exclusivo del evento. Edición limitada, ¡no te lo pierdas!
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {items.map((item) => (
            <MerchCard key={item.id} item={item} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm mb-4">
            Merchandising disponible en tienda oficial
          </p>
          <Button variant="outline" size="lg">
            <ShoppingBag className="w-5 h-5 mr-2" />
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
    <Card className="group cursor-pointer" hover glow>
      <div className="relative aspect-square overflow-hidden rounded-t-xl">
        <Image
          src={item.image}
          alt={item.name}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 20vw"
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          placeholder="blur"
          blurDataURL={item.blurDataUrl}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
      <div className="p-4">
        <h3 className="font-bold text-white mb-1 group-hover:text-neon-blue transition-colors">
          {item.name}
        </h3>
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-neon-yellow">
            €{item.price.toFixed(2)}
          </span>
          <span className="text-xs text-gray-500">
            {item.sizes.length > 2
              ? `${item.sizes[0]} - ${item.sizes[item.sizes.length - 1]}`
              : item.sizes.join(" / ")}
          </span>
        </div>
      </div>
    </Card>
  );
}
