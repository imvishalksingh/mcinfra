---
name: Modern Luxury Real Estate
colors:
  surface: '#0c141f'
  surface-dim: '#0c141f'
  surface-bright: '#323946'
  surface-container-lowest: '#070e19'
  surface-container-low: '#151c27'
  surface-container: '#19202b'
  surface-container-high: '#232a36'
  surface-container-highest: '#2e3541'
  on-surface: '#dce2f3'
  on-surface-variant: '#c6c6cb'
  inverse-surface: '#dce2f3'
  inverse-on-surface: '#2a313d'
  outline: '#909095'
  outline-variant: '#45474b'
  surface-tint: '#c6c6cc'
  primary: '#c6c6cc'
  on-primary: '#2f3035'
  primary-container: '#0f1115'
  on-primary-container: '#7b7c82'
  inverse-primary: '#5d5e63'
  secondary: '#f0bf5c'
  on-secondary: '#412d00'
  secondary-container: '#8a6400'
  on-secondary-container: '#ffe9c6'
  tertiary: '#59de9b'
  on-tertiary: '#003921'
  tertiary-container: '#001509'
  on-tertiary-container: '#008f5a'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e2e2e8'
  primary-fixed-dim: '#c6c6cc'
  on-primary-fixed: '#1a1c20'
  on-primary-fixed-variant: '#45474b'
  secondary-fixed: '#ffdea4'
  secondary-fixed-dim: '#f0bf5c'
  on-secondary-fixed: '#261900'
  on-secondary-fixed-variant: '#5d4200'
  tertiary-fixed: '#78fbb6'
  tertiary-fixed-dim: '#59de9b'
  on-tertiary-fixed: '#002111'
  on-tertiary-fixed-variant: '#005232'
  background: '#0c141f'
  on-background: '#dce2f3'
  surface-variant: '#2e3541'
typography:
  display-hero:
    fontFamily: Epilogue
    fontSize: 72px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Epilogue
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Epilogue
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Manrope
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Manrope
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: Manrope
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1'
    letterSpacing: 0.1em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1440px
  gutter: 32px
  section-padding: 120px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 24px
---

## Brand & Style

The visual identity of this design system centers on exclusivity, architectural precision, and cinematic grandeur. It is designed to evoke a sense of "quiet luxury"—where the interface recedes to allow high-fidelity property photography to take center stage. 

The style utilizes a **Minimalist-Glassmorphic** hybrid. By combining deep charcoal foundations with translucent, frosted-glass overlays, the design system creates a sense of physical depth and materiality. High-contrast gold accents are used sparingly to denote premium value and call-to-action points, while the emerald accent is reserved strictly for trust signals and "available" status indicators. The emotional response is one of confidence, stability, and aspiration.

## Colors

The palette is anchored by **Deep Charcoal**, providing a sophisticated, dark-mode-first environment that emphasizes the **Luxury Gold** highlights. 

- **Primary & Background**: Use the charcoal tones to create a high-end, cinematic backdrop.
- **Luxury Gold**: Reserved for high-priority interactive elements, borders of featured properties, and premium badges. 
- **Emerald Accent**: Used specifically for financial indicators, "Newly Listed" tags, or "Active" status to signify growth and opportunity.
- **Glass Surfaces**: Use white at 5-10% opacity with a backdrop-filter blur (12px-20px) to create the glassmorphic layers over the dark gradient backgrounds.

## Typography

This design system uses a pairing of **Epilogue** and **Manrope** to balance editorial flair with technical clarity.

**Epilogue** is used for all headlines and display text. Its geometric yet expressive nature provides the "high-end" feel required for luxury real estate headings. Tighten the letter spacing on larger display sizes to maintain a modern, compact look.

**Manrope** serves as the functional workhorse for body copy, property details, and UI labels. It offers exceptional readability at smaller sizes. For meta-data (like square footage or price labels), use the `label-caps` style to create a distinct hierarchy against standard body text.

## Layout & Spacing

The layout philosophy follows a **Fixed Grid** model within a 1440px container to ensure a curated, gallery-like experience. 

- **Grid**: 12-column grid with a wide 32px gutter to provide significant breathing room between property cards and content blocks.
- **Section Spacing**: Large vertical margins (120px+) should be used between major sections to emphasize exclusivity and prevent the interface from feeling "crowded."
- **Alignment**: Use generous padding within glassmorphic containers (typically 32px or 40px) to maintain the airy, luxury aesthetic.

## Elevation & Depth

Hierarchy is established through **translucency and soft diffusion** rather than harsh shadows.

- **Surface Layers**: The base is the `dark-premium` gradient. Secondary surfaces use a glassmorphic effect: a semi-transparent Pure White fill (8%) with a 1px "inner glow" stroke (White at 15% opacity) to catch the light at the edges.
- **Shadows**: When depth is required, use a "Luxury Shadow"—a very large blur (40px-60px) with low opacity (20%) using the Deep Charcoal color. This creates a subtle lift without muddying the dark background.
- **Backdrop Blur**: Every glass layer must implement a `backdrop-filter: blur(16px)` to ensure text remains legible over high-contrast property photography.

## Shapes

The shape language is defined by **refined softness**. 

- **Standard Radius**: Property cards, image containers, and large surfaces use a 20px (1.25rem) radius. This softens the "architectural" charcoal base, making the brand feel more approachable and modern.
- **Pill Shapes**: Interactive elements like buttons and chips utilize a fully rounded (pill) radius. This creates a clear visual distinction between "content containers" (20px) and "interactive elements" (pill).
- **Icons**: Use linear, medium-weight icons with slightly rounded caps to match the typography's geometric nature.

## Components

### Buttons
Buttons are strictly **pill-shaped**. The primary button uses the `gold-premium` gradient with black text for maximum contrast. Secondary buttons should use the glassmorphic style (blurred background, white border).

### Property Cards
Cards feature a "Hover Lift" effect: upon hover, the card should scale slightly (1.02x) and the shadow should deepen. Image containers within cards should occupy the top 60% of the frame, using a 20px top-radius.

### Cinematic Hero
The hero section must utilize a full-bleed background video or high-resolution image with a `dark-premium` gradient overlay (bottom-to-top) to ensure the `display-hero` typography is legible.

### Input Fields
Forms should be styled with a glassmorphic background and a 1px border. When focused, the border transitions to the `gold-premium` color, and the inner glow intensifies.

### Chips & Badges
Small status indicators (e.g., "For Sale") use the pill shape with a low-opacity fill of the Emerald or Gold accent colors, keeping the text sharp and legible.