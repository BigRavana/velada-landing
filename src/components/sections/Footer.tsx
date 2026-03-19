"use client";

import { EVENT_INFO, SOCIAL_LINKS } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { Instagram, Twitter, Youtube, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold mb-4">
              <span className="text-gradient">
                {EVENT_INFO.name}
              </span>
            </h3>
            <p className="text-neutral-500 text-sm">
              El evento de entretenimiento más grande del año. {EVENT_INFO.date} en {EVENT_INFO.venue}.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Enlaces</h4>
            <ul className="space-y-2">
              {["Inicio", "Cartel", "Luchadores", "FAQ", "Merchandising"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(" ", "-")}`}
                    className="text-neutral-500 hover:text-white transition-colors text-sm"
                    onClick={(e) => {
                      e.preventDefault();
                      const id = link.toLowerCase().replace(" ", "-");
                      document.querySelector(`#${id}`)?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Contacto</h4>
            <div className="flex items-center gap-3 mb-4">
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-neutral-500 hover:text-white transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={SOCIAL_LINKS.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-neutral-500 hover:text-white transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href={SOCIAL_LINKS.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-neutral-500 hover:text-white transition-colors"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="mailto:contacto@example.com"
                className="p-2 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-neutral-500 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
            <Button variant="secondary" size="sm">
              Contactar
            </Button>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-neutral-600 text-xs">
            © 2026 {EVENT_INFO.name}. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-6 text-xs text-neutral-600">
            <a href="#" className="hover:text-neutral-400 transition-colors">Privacidad</a>
            <a href="#" className="hover:text-neutral-400 transition-colors">Términos</a>
            <a href="#" className="hover:text-neutral-400 transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
