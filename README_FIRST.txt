AVELLOX STUDIO — CLEAN FULL WEBSITE REPLACEMENT

This package is intentionally NOT based on the old Figma/Tailwind styling.
It uses plain React + plain CSS so the old blue/purple/unstyled CSS cannot interfere.

IMPORTANT:
Your real image files are NOT included in this ZIP.
Keep your existing:
    src/photos/
folder exactly as it is.

RECOMMENDED INSTALL

1. BACK UP your current project folder.

2. Inside your project:
   C:\xampp\htdocs\My_Website_Portofolio_1

3. Keep:
   src/photos/

4. Replace these with the files from this ZIP:
   index.html
   package.json
   vite.config.ts
   src/main.tsx
   src/app/
   src/components/
   src/pages/
   src/data/
   src/styles/

5. Old files such as:
   src/styles/index.css
   src/styles/globals.css
   src/styles/theme.css
   src/styles/tailwind.css
   can stay on disk, BUT THEY MUST NOT BE IMPORTED.
   This new site imports ONLY:
   src/styles/site.css

6. Run:
   npm install

7. Then:
   npm run build

8. Then:
   npm run dev

9. CHECK LOCALHOST FIRST.
   Do not push to Vercel until the local version looks correct.

The new website expects these image files already present in your existing src/photos folder:

Hero_Page.png
me.png
Her_Hands_Remember_cover.png
Her_Hands_Remember_living_room.png
Her_Hands_Remember_kitchen.png
Her_Hands_Remember_forest.png
Her_Hands_Remember_past.png
Her_Hands_Remember_past2.png
FortuneTeller_cover.png
FortuneTeller_1.png
FortuneTeller_2.png
Stay_cover.png
Stay_1.png
Stay_2.png
Potion_cover.png
Potion_1.png
Potion_2.png
Ducky_Holmes_cover.png
Ducky_Holmes_1.png
Ducky_Holmes_2.png
Ducky_Holmes_3.png
Shiba_cover.png
Shiba_1.png
Shiba_2.png
Shiba_3.png

and artwork files under:
src/photos/artworks/

This design includes:
- Home
- Projects
- Individual Project pages
- Artwork gallery + modal
- About
- Experience
- Contact form
- Responsive mobile design
- Warm paper / dark olive visual system
- Handwritten annotations
- Botanical sketches
- Polaroid/tape details
- No Tailwind
- No Shadcn
- No purple/blue tech aesthetic

When everything works locally:
   git add .
   git commit -m "Rebuild Avellox portfolio"
   git push origin main


BEFORE DEPLOYING:
Search the code for:
    hello@avellox.studio
and replace it with your real contact email if that is not your address.

vercel.json is included so React Router pages work when opened directly on Vercel.
