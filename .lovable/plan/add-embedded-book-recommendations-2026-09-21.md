# Add embedded book recommendations

## What will change
- Add a prominent “Book recommendations” control to the Writing & Updates page.
- Keep the recommendations collapsed initially so the professional content remains primary.
- When selected, reveal the existing reading-recommendations website in a full-width embedded window below the control.
- Let visitors close the window again without leaving Tyler’s professional website.
- Include a small fallback link for browsers that block embedded pages.

## Experience details
- Match the current editorial styling, typography, borders, and amber accent.
- Give the embedded window a stable, responsive height for desktop and mobile.
- Label the control and embedded content clearly for accessibility.
- Verify the interaction and rendering on desktop and phone.

## Technical details
- Implement the expandable section directly on the existing Writing route with React state.
- Use a lazily loaded iframe pointed at `https://tdrowberry.github.io/Rowberrys-Reading-Recommendations/`.
- Keep all existing pages, navigation, and writing content unchanged.
