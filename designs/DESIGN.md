# Design System: The Liquid Creator Experience

## 1. Overview & Creative North Star
**Creative North Star: "The Ethereal Curator"**
This design system moves beyond the rigid, boxy constraints of traditional mobile apps. It is inspired by the fluidity of liquid and the clarity of high-end editorial magazines. We are not just building an interface; we are creating a digital "atmosphere." 

To break the "template" look, we employ **intentional asymmetry** and **tonal layering**. The UI should feel like it is floating in a vast, airy space. By using high-contrast typography scales (pairing the tech-forward Geist with the classical elegance of EB Garamond) and overlapping glass surfaces, we achieve an aesthetic that feels bespoke, premium, and calm.

---

## 2. Colors & Surface Philosophy
The palette is rooted in atmospheric sky blues and clean neutrals, designed to feel expansive and "liquid."

### The "No-Line" Rule
**Explicit Instruction:** You are prohibited from using 1px solid borders to section content. Boundaries must be defined solely through:
1. **Background Color Shifts:** Placing a `surface-container-low` card on a `surface` background.
2. **Tonal Transitions:** Using subtle gradients to suggest a change in the environment.
3. **Negative Space:** Relying on the spacing scale to create mental groupings.

### Surface Hierarchy & Nesting
Treat the UI as a series of stacked, frosted glass sheets. 
- **Base Layer:** `surface` (#fbf8fe).
- **Secondary Content:** `surface-container-low` (#f6f2f8).
- **Interactive Cards:** `surface-container-lowest` (#ffffff) to provide a soft "pop" against the background.
- **Nesting:** When placing an element inside a card, use a *lower* tier (e.g., a `surface-container` search bar inside a `surface-container-lowest` card) to create a recessed, tactile feel.

### The Glass & Gradient Rule
Use **Glassmorphism** for all floating elements (Bottom Navigation, Tooltips, Modals).
- **Recipe:** 40-60% opacity of `surface-container-lowest` + 20px Backdrop Blur.
- **Signature Gradients:** Apply a "Liquid Sky" gradient (`primary` #0058be to `primary-container` #2170e4) at a 135-degree angle for Hero CTAs and active states. This adds "soul" and depth that flat color cannot replicate.

---

## 3. Typography
Our typography is the voice of the brand: authoritative yet approachable.

*   **Display & Headlines (Manrope/Aeonik influence):** Used for "Campaign" titles and impact statements. Large, airy, and bold to establish immediate hierarchy.
*   **Body & Titles (Geist/Inter):** The workhorse. Geist provides a technical, precise feel that balances the liquid aesthetic. Use `title-lg` for navigation headers and `body-md` for submission descriptions.
*   **The Editorial Accent (EB Garamond):** Use sparingly (approx. 3% of the UI). Use for italicized "empty state" quotes or subtle "Featured" labels to provide a high-end, human touch.

---

## 4. Elevation & Depth
We eschew "Material" shadows in favor of **Tonal Layering**.

*   **The Layering Principle:** Avoid elevation levels 1-5. Instead, use the `surface-container` tiers. A `surface-container-high` element naturally feels "closer" to the user than a `surface-dim` element.
*   **Ambient Shadows:** For floating glass elements, use an extra-diffused shadow: `box-shadow: 0 12px 40px rgba(0, 88, 190, 0.06)`. Note the tint: we use a hint of the `primary` blue rather than neutral grey to maintain the "sky" atmosphere.
*   **The Ghost Border:** If accessibility requires a stroke, use `outline-variant` at 15% opacity. Never use 100% opaque borders.

---

## 5. Components

### Navigation (The Floating Bar)
The bottom bar (Campaigns, Submissions, Profile) must be a **floating glass island**. 
- **Style:** `surface-container-lowest` at 70% opacity, 32px backdrop blur, `xl` (1.5rem) corner radius. 
- **Active State:** A subtle dot or a primary-tinted glow behind the icon, never a heavy solid block.

### Buttons
- **Primary:** "Liquid Sky" gradient with `full` (pill) roundedness. No border.
- **Secondary:** `surface-container-high` with a 10% `outline-variant` ghost border. 
- **Tertiary:** Pure text using `primary` color with `label-md` Geist SemiBold.

### Cards & Lists
- **Rule:** Forbid divider lines. 
- **Implementation:** Use a 16px vertical gap between list items. Use a subtle `surface-container-low` background on every second item, or simply allow the typography hierarchy to lead the eye. 
- **Cards:** Use `xl` (1.5rem) corner radius for a friendly, modern feel.

### Input Fields
- **Style:** Minimalist. A soft `surface-container` background with no border. On focus, the background shifts to `surface-container-highest` with a 1px `primary` ghost border (20% opacity).

---

## 6. Do's and Don'ts

### Do
- **Do** use generous white space. If you think it’s enough, add 8px more.
- **Do** use `primary-fixed-dim` for subtle backgrounds behind dark text.
- **Do** favor asymmetric layouts (e.g., a left-aligned headline with a right-aligned glass card slightly overlapping the header area).

### Don't
- **Don't** use pure black (#000000) for text. Use `on-surface` (#1b1b1f) to keep the contrast high but the feel "soft."
- **Don't** use standard "drop shadows." If it doesn't look like ambient light, it's too heavy.
- **Don't** use 90-degree corners. Everything must feel "liquid" and smoothed, adhering to the `md` to `xl` roundedness scale.
- **Don't** use icons with varying line weights. Stick to a 1.5px or 2px consistent stroke for all minimalist icons.