---
name: Industrial Integrity
colors:
  surface: '#f7f9fd'
  surface-dim: '#d8dade'
  surface-bright: '#f7f9fd'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f8'
  surface-container: '#eceef2'
  surface-container-high: '#e6e8ec'
  surface-container-highest: '#e0e2e6'
  on-surface: '#191c1f'
  on-surface-variant: '#44474e'
  inverse-surface: '#2d3134'
  inverse-on-surface: '#eff1f5'
  outline: '#74777f'
  outline-variant: '#c4c6cf'
  surface-tint: '#465f88'
  primary: '#002046'
  on-primary: '#ffffff'
  primary-container: '#1b365d'
  on-primary-container: '#87a0cd'
  inverse-primary: '#aec7f7'
  secondary: '#725c00'
  on-secondary: '#ffffff'
  secondary-container: '#fed000'
  on-secondary-container: '#6f5900'
  tertiary: '#17212f'
  on-tertiary: '#ffffff'
  tertiary-container: '#2c3646'
  on-tertiary-container: '#959fb2'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d6e3ff'
  primary-fixed-dim: '#aec7f7'
  on-primary-fixed: '#001b3d'
  on-primary-fixed-variant: '#2e476f'
  secondary-fixed: '#ffe07f'
  secondary-fixed-dim: '#edc200'
  on-secondary-fixed: '#231b00'
  on-secondary-fixed-variant: '#564500'
  tertiary-fixed: '#d9e3f7'
  tertiary-fixed-dim: '#bdc7db'
  on-tertiary-fixed: '#121c2a'
  on-tertiary-fixed-variant: '#3d4757'
  background: '#f7f9fd'
  on-background: '#191c1f'
  surface-variant: '#e0e2e6'
typography:
  h1:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  h2:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  h3:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '700'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1.0'
    letterSpacing: 0.1em
  ui-button:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.0'
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 48px
  grid-margin: 64px
  grid-gutter: 24px
---

## Brand & Style

The visual identity of this design system is rooted in the physical world of construction, engineering, and architectural precision. It targets a demographic that values structural reliability over digital trends—investors, government contractors, and commercial developers. 

The style is a hybrid of **Corporate Modern** and **Industrial Brutalism**, stripped of unnecessary embellishments to project competence and honesty. It avoids "floating" elements common in tech startups, preferring a grounded aesthetic where every component feels like it has a physical foundation. Layouts are governed by a strict structural grid, echoing the blueprints and steel frames central to the business.

## Colors

The palette is functional and high-contrast. **Deep Navy** serves as the anchor, representing the "Steel" of the infrastructure, while **Construction Yellow** is used exclusively for high-priority actions and safety-critical information, mirroring its use in physical construction sites. 

**Cement Gray** provides a textural bridge between white space and dark text, used for structural borders and background sectioning. Status colors are desaturated to maintain a professional, serious tone.

## Typography

This design system utilizes **Inter** for its neutral, utilitarian character and exceptional legibility in technical contexts. 

Headings are set with heavy weights (Bold to Extra Bold) and tight letter spacing to emulate the impact of stamped architectural plans. Body text favors generous line heights to ensure readability of technical specifications. The `label-caps` style is used for categorization and technical metadata, providing a "tagged" look common in industrial labeling.

## Layout & Spacing

The layout is built on a **12-column fixed grid** for desktop, shifting to a fluid model for mobile. It uses an 8px base rhythm to maintain mathematical rigor. 

Separation is achieved primarily through 1px **Cement Gray** borders rather than whitespace alone, reinforcing the feeling of "zones" or "rooms" within a floor plan. Blueprint-inspired thin dashed lines may be used as horizontal separators to break up long technical documents or project timelines.

## Elevation & Depth

This design system rejects deep shadows and floating layers. Depth is communicated through **Tonal Layering** and **Recessed Surfaces**. 

- **Level 0 (Base):** Cement Gray (#E5E7EB) for the main canvas background.
- **Level 1 (Plinth):** White (#FFFFFF) containers with a 1px solid border in Gray.
- **Interactions:** Subtle inner shadows (inset) are used to indicate pressed states, making buttons feel like physical switches or panels. 
- **Active Elevation:** A very tight, 2px blur shadow with 20% opacity is the maximum depth allowed, used only for active tooltips or dropdown menus to ensure they are legible over content.

## Shapes

The shape language is **Blocky and Solid**. A minimal radius of 4px is applied to all interactive elements to prevent them from feeling "sharp" while maintaining a heavy, industrial profile. Circles are avoided except for purely functional status indicators. Large containers (like project cards) should use the `rounded-sm` (4px) setting to remain consistent with the structural rigidity of construction materials.

## Components

### Buttons
Primary buttons use the Deep Navy background with white text. They are rectangular with a 4px radius. The secondary (action) button uses Construction Yellow with Charcoal Gray text for maximum visibility on site-management screens.

### Input Fields
Inputs use a "Field" approach: 1px Cement Gray border, white background, and no shadow. The focus state uses a 2px Deep Navy border. Labels are always positioned above the field in `label-caps` style.

### Cards
Cards are treated as "Modules." They have a white background, a 1px gray border, and no shadow. Headers within cards are separated by a 1px horizontal line, mimicking the look of technical data sheets.

### Data Tables
Tables are essential for project tracking. They use a zebra-stripe pattern with Cement Gray and White. Column headers are Bold Charcoal Gray.

### Industrial Accents
- **Status Chips:** Rectangular tags with high-contrast backgrounds (Red for 'Delayed', Yellow for 'In Progress', Green for 'Completed').
- **Blueprint Separators:** Subtle 0.5px dashed lines used to separate sections of a form or report.
- **Project Progress Bars:** Thick, 12px bars using Construction Yellow to indicate completion.