---
name: Aura Luxury Framework
colors:
  surface: '#fcf8f8'
  surface-dim: '#ddd9d9'
  surface-bright: '#fcf8f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3f2'
  surface-container: '#f1edec'
  surface-container-high: '#ebe7e7'
  surface-container-highest: '#e5e2e1'
  on-surface: '#1c1b1b'
  on-surface-variant: '#444748'
  inverse-surface: '#313030'
  inverse-on-surface: '#f4f0ef'
  outline: '#747878'
  outline-variant: '#c4c7c8'
  surface-tint: '#5d5f5f'
  primary: '#5d5f5f'
  on-primary: '#ffffff'
  primary-container: '#ffffff'
  on-primary-container: '#747676'
  inverse-primary: '#c6c6c7'
  secondary: '#5d5f5f'
  on-secondary: '#ffffff'
  secondary-container: '#dcdddd'
  on-secondary-container: '#5f6161'
  tertiary: '#5d5f5f'
  on-tertiary: '#ffffff'
  tertiary-container: '#ffffff'
  on-tertiary-container: '#747676'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e2e2e2'
  primary-fixed-dim: '#c6c6c7'
  on-primary-fixed: '#1a1c1c'
  on-primary-fixed-variant: '#454747'
  secondary-fixed: '#e2e2e2'
  secondary-fixed-dim: '#c6c6c7'
  on-secondary-fixed: '#1a1c1c'
  on-secondary-fixed-variant: '#454747'
  tertiary-fixed: '#e2e2e2'
  tertiary-fixed-dim: '#c6c6c7'
  on-tertiary-fixed: '#1a1c1c'
  on-tertiary-fixed-variant: '#454747'
  background: '#fcf8f8'
  on-background: '#1c1b1b'
  surface-variant: '#e5e2e1'
typography:
  display-xl:
    fontFamily: Plus Jakarta Sans
    fontSize: 64px
    fontWeight: '700'
    lineHeight: 72px
    letterSpacing: -0.02em
  h1:
    fontFamily: Plus Jakarta Sans
    fontSize: 48px
    fontWeight: '600'
    lineHeight: 56px
    letterSpacing: -0.01em
  h2:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  h3:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
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
  gutter: 24px
  margin-mobile: 20px
  margin-desktop: 80px
  section-gap: 120px
---

## Brand & Style

This design system embodies "Modern Luxury" for the premium real estate sector. The aesthetic is defined by an expansive sense of airiness, utilizing significant whitespace to allow high-end property photography to serve as the primary visual anchor. 

The style is a sophisticated blend of **Minimalism** and **Glassmorphism**. It relies on translucent white layers and soft background blurs to create a sense of depth without weight. The interface should feel like a gallery—clean, quiet, and meticulously organized—to evoke trust and exclusivity. Interactions are subtle, favoring smooth transitions and high-contrast clarity over decorative clutter.

## Colors

The color strategy uses a restricted palette to maintain a high-end feel. **Pure White** is the foundation, used for primary surfaces to maximize brightness. **Soft Gray** provides subtle structural separation for backgrounds and secondary containers.

**Luxury Gold** is reserved strictly for primary calls to action, active states, and brand-critical highlights, ensuring it remains a premium focal point. **Deep Charcoal** provides the necessary typographic weight to ensure accessibility and a sense of "grounded" authority. The **Emerald Accent** is used sparingly for positive status indicators (e.g., "Available" properties) to maintain a natural, lush connection to landscape and environment.

## Typography

Typography is used to establish hierarchy through scale and weight. **Plus Jakarta Sans** (a modern alternative to Poppins) provides a geometric yet friendly warmth for headlines, echoing the architectural precision of the brand. 

For body copy, **Inter** ensures maximum legibility across all device sizes. Large display sizes should be used for property titles to create a high-impact, editorial feel. Use `label-caps` for metadata like square footage or location tags to differentiate technical details from narrative descriptions.

## Layout & Spacing

This design system utilizes a **Fixed Grid** philosophy for desktop (12 columns) and a fluid model for mobile. To achieve the "airy" personality, spacing is intentionally generous. 

Margins and section gaps are larger than industry standard to force a slower, more deliberate browsing experience. Property cards and image modules should follow an 8px base grid, but the distance between major content blocks (`section-gap`) should remain wide to prevent the interface from feeling "crowded."

## Elevation & Depth

Depth is communicated through **Glassmorphism** and ultra-soft, diffused shadows. 
- **Level 1 (Subtle):** Used for cards. A 40px blur shadow with 4% opacity of the Deep Charcoal color. 
- **Level 2 (Glass):** Used for navigation bars and floating overlays. A background-blur of 12px-20px combined with a semi-transparent white fill (70-80% opacity) and a 1px solid white border to simulate light catching the edge of a glass pane.
- **Level 3 (High):** Reserved for modal components. A 60px blur shadow with 8% opacity.

Avoid heavy black shadows; instead, use tinted shadows that incorporate a hint of the secondary gray to maintain a clean look.

## Shapes

The shape language reflects modern architecture: structured but softened. 
- **Standard Elements (Buttons, Inputs):** 16px radius.
- **Large Elements (Cards, Image Containers):** 24px radius.
- **Interactive Small Elements (Chips, Tags):** Full pill-shape for high contrast against the structural cards.

Gradients are used minimally: a linear transition from a light gold to a slightly deeper gold for primary buttons, and a very subtle vertical white-to-gray gradient for container backgrounds to give them a slight 3D "sheen."

## Components

- **Buttons:** Primary buttons use a Gold gradient with white text. Secondary buttons use a transparent background with a 1.5px gold border (Ghost style).
- **Cards:** Property cards should feature a "floating" look. The image occupies the top 70% of the card with a 0px top-radius (masked by the container's 24px radius). Text content sits on a white base with generous internal padding (32px).
- **Chips:** Used for property status (e.g., "Ready to Move"). These should be pill-shaped with the Emerald Accent at 10% opacity for the background and 100% opacity for the text.
- **Input Fields:** Minimalist design with a 1px Soft Gray border that turns Gold on focus. Labels should be small and positioned above the field in `label-caps`.
- **Property Visuals:** Images are the most important component. They must always use the 24px corner radius and include a subtle inner stroke to define edges against pure white backgrounds.
- **Navigation:** A floating glassmorphic bar that remains sticky at the top of the viewport, using a high-blur backdrop to maintain readability over scrolling content.