"use client";

import { EVENT_INFO, SOCIAL_LINKS } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { Instagram, Twitter, Youtube, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-dark-100 border-t border-dark-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-2xl font-black mb-4">
              <span className="bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
                {EVENT_INFO.name}
              </span>
            </h3>
            <p className="text-gray-400 mb-4">
              El evento de entretenimiento más grande del año. {EVENT_INFO.date} en {EVENT_INFO.venue}.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Enlaces</h4>
            <ul className="space-y-2">
              {["Inicio", "Cartel", "Fighters", "FAQ", "Merchandising"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-400 hover:text-neon-blue transition-colors"
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector(`#${link.toLowerCase()}`)?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Contacto</h4>
            <div className="flex items-center gap-4 mb-6">
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-dark-200 hover:bg-neon-pink/20 text-gray-400 hover:text-neon-pink transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={SOCIAL_LINKS.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-dark-200 hover:bg-neon-blue/20 text-gray-400 hover:text-neon-blue transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href={SOCIAL_LINKS.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-dark-200 hover:bg-neon-red/20 text-gray-400 hover:text-neon-red transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href="mailto:contacto@example.com"
                className="p-2 rounded-lg bg-dark-200 hover:bg-neon-purple/20 text-gray-400 hover:text-neon-purple transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
            <Button variant="secondary" size="sm">
              Contactar
            </Button>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-dark-300 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © 2026 {EVENT_INFO.name}. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-gray-300 transition-colors">Privacidad</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Términos</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
