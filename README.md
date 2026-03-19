# La Velada del Año V - Landing Page

> High-performance landing page para evento masivo de entretenimiento.
> Optimizada para picos de tráfico con métricas Lighthouse >90.

## Demo

[Ver proyecto en vivo](https://velada-landing.vercel.app)

## Features

- **Performance-first**: SSG + ISR con Next.js 14 App Router
- **Core Web Vitals optimizados**: LCP <2.5s, CLS <0.1, TTI <3.5s
- **Image optimization**: AVIF/WebP automático con blur placeholders
- **Real-time countdown**: SSR para mejor performance
- **Lazy loading**: Componentes cargados bajo demanda con Intersection Observer
- **Mobile-first**: Diseño responsive optimizado
- **Dark theme**: Estética neón con CSS custom properties
- **SEO optimizado**: Meta tags, Open Graph, Twitter cards

## Tech Stack

| Technology | Purpose |
|------------|---------|
| **Next.js 14** | Framework (App Router) |
| **TypeScript** | Type safety (strict mode) |
| **Tailwind CSS 4** | Styling |
| **next/font** | Optimización de fuentes (Inter + JetBrains Mono) |
| **next/image** | Optimización de imágenes |
| **Radix UI** | Componentes accesibles (Accordion) |
| **Vercel** | Deployment |

## Project Structure

```
src/
├── app/                      # App Router
│   ├── api/                  # API Routes (Route Handlers)
│   │   ├── fighters/route.ts
│   │   └── events/route.ts
│   ├── layout.tsx            # Root layout (fuentes, metadata)
│   ├── page.tsx              # Landing page (SSG + ISR)
│   └── globals.css           # Estilos globales
├── components/
│   ├── ui/                   # Componentes atómicos
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Badge.tsx
│   │   └── Skeleton.tsx
│   └── sections/             # Secciones de la landing
│       ├── Hero.tsx
│       ├── Countdown.tsx
│       ├── Fighters.tsx
│       ├── Events.tsx
│       ├── FAQ.tsx
│       ├── Merchandising.tsx
│       ├── Navigation.tsx
│       └── Footer.tsx
├── data/                     # Mock data estático
│   ├── fighters.ts
│   ├── events.ts
│   ├── faq.ts
│   └── merch.ts
├── hooks/                    # Custom hooks
│   ├── useScrollDirection.ts
│   └── useIntersectionObserver.ts
├── lib/                      # Utilities
│   ├── utils.ts
│   └── constants.ts
└── types/                   # TypeScript types
    └── index.ts
```

## Decisiones Técnicas

### Por qué SSG + ISR?

- **SSG (Static Site Generation)**: Las páginas se pre-renderizan en build time, ofreciendo la mejor performance possible
- **ISR (Incremental Static Regeneration)**: Con `revalidate: 60`, las páginas se actualizan cada 60 segundos sin rebuild completo
- **Resultado**: Tiempo de respuesta <100ms con datos frescos

### Optimización de Imágenes

```tsx
<Image
  src={fighter.image}
  alt={fighter.name}
  fill
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
  className="object-cover"
  placeholder="blur"
  blurDataURL={fighter.blurDataUrl}
  priority={isAboveFold}
/>
```

- **AVIF/WebP automático**: Next.js convierte automáticamente al formato más óptimo
- **Responsive sizing**: Tamaños apropiados para cada breakpoint
- **Blur placeholder**: Elimina layout shift
- **Priority**: Carga diferida para above-fold content

### Lazy Loading

```tsx
const { ref, isVisible } = useIntersectionObserver({
  threshold: 0.1,
  rootMargin: "100px",
});

return isVisible ? <HeavyComponent /> : <Skeleton />;
```

- **Intersection Observer**: Detecta cuando el componente entra en viewport
- **Root margin**: Precarga 100px antes de entrar
- **Skeleton states**: UX consistente durante carga

## Performance Metrics

| Metric | Target | Status |
|--------|--------|--------|
| Performance | ≥90 | ✅ |
| Accessibility | ≥90 | ✅ |
| Best Practices | ≥90 | ✅ |
| SEO | ≥90 | ✅ |
| LCP | <2.5s | ✅ |
| CLS | <0.1 | ✅ |
| FID | <100ms | ✅ |
| TTI | <3.5s | ✅ |

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Installation

```bash
# Clone repository
git clone https://github.com/yourusername/velada-landing.git
cd velada-landing

# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
npm run typecheck # Run TypeScript checker
```

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Deploy automatically

### Environment Variables

No se requieren variables de entorno para el proyecto base.

## Versionado

Este proyecto usa [Release Please](https://github.com/googleapis/release-please) para versionado semántico automático basado en [Conventional Commits](https://www.conventionalcommits.org/).

```bash
git commit -m "feat: add new fighter card animation"
git push
# Se generará automáticamente:
# - CHANGELOG.md
# - GitHub Release
# - Tags (v1.0.0, v1.1.0, etc.)
```

## CI/CD Pipeline

```yaml
# Flujo de trabajo
1. Lint & Typecheck    → ESLint + TypeScript
2. Build              → Next.js build
3. Lighthouse CI      → Performance assertions
4. Deploy            → Vercel (production)
```

## Contributing

1. Fork el repositorio
2. Crear branch (`git checkout -b feature/amazing-feature`)
3. Commit con Conventional Commits (`git commit -m "feat: add amazing feature"`)
4. Push al branch (`git push origin feature/amazing-feature`)
5. Abrir Pull Request

## License

MIT License.

---

Hecho con Next.js, React y mucho ☕
