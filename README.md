# One Bite — Website Redesign Concept (V3)

A responsive multi-page website concept for presenting a possible redesign to One Bite. This is an independent concept, not an official One Bite website.

## Version 3 — fixes and new features

- Fixed the blank menu bug by removing the early menu initialization that accessed V2 state before it was initialized; menu initialization now runs after all state declarations.
- Added a demo combo builder with selectable burger, side and drink.
- Added homepage combo/deal inspiration cards (not advertised as real discounts).
- Added an outlet region finder with search/filter. It uses clearly labeled region examples and does not claim to be a verified branch directory.
- Retained visual food cards, favourites, sorting, category filters, demo cart and item details.

## Version 2 — new features

- Menu sorting by price or name, favourites-only filter, and improved filtering controls.
- Item detail modal with quantity picker, special-instructions field, and add-to-bag action.
- Demo cart with editable quantities and session persistence where browser storage is available.
- Homepage FAQ and value/brand feature section.
- Searchable state list on the outlets page based on states named by the official website; this is not a branch address finder.
- Improved mobile controls, focus states and demo-state messaging.

## Included

- `index.html` — homepage
- `menu.html` — searchable, filterable menu with a demo cart
- `about.html` — brand story
- `outlets.html` — outlet/presence information with a note that this is not a branch directory
- `franchise.html` — franchise information and a demo enquiry form
- `contact.html` — published contact details
- `assets/style.css` — responsive styling and animations
- `assets/app.js` — menu data, filters, demo cart, form preview, mobile navigation

## Run on Windows / VS Code

**Fastest method**
1. Extract `onebite-redesign.zip`.
2. Open the extracted `onebite-redesign` folder in VS Code.
3. Open `index.html` in your browser.

**Recommended method (VS Code Live Server)**
1. Open VS Code.
2. Choose **File → Open Folder** and select `onebite-redesign`.
3. In Extensions, install **Live Server** (by Ritwick Dey) if you don't already have it.
4. Right-click `index.html` and choose **Open with Live Server**.
5. The website should open in your browser. Navigate with the top menu.

No npm, build tools, API keys or backend are required.

## Important data and demo limitations

- Public information was referenced from `https://www.onebite.co.in/`, `https://www.onebite.co.in/menu.html`, `https://www.onebite.co.in/about-us.html` and `https://www.onebite.co.in/contact-us.html`.
- The official site lists `+91 89605 71056`, `info@onebite.co.in`, `sales@onebite.co.in`, an address at Okhla Phase 1, New Delhi 110020, and support hours of 10 AM–6 PM, Monday–Saturday.
- The official menu page lists categories including Waffle, Cheesyloaf, Wrap, Pizza, Sandwich, Burger, Pasta, Chicken, Beverage, Desserts, Potato Tornado, Continental, Salad and Rice Bowl.
- Individual menu items and prices in the interactive menu are **illustrative sample data** based on publicly discoverable menu material; pricing and availability can differ by outlet. Confirm all item names, current prices, product images and dietary classifications with One Bite before a real launch.
- The homepage's public site claims (including restaurant count and menu variety) are intentionally not presented as independently verified facts.
- The cart and checkout are **demo-only**. The V2 cart may remember demo selections in your browser session/local storage; no order is submitted. No order, payment or customer data is submitted or stored.
- The franchise form displays a local preview only. It does not send an enquiry.
- Food photos are loaded from Unsplash over the internet. An internet connection is required for these photos and Google Fonts.
- This concept uses a typographic placeholder mark instead of claiming to reproduce an official logo. Replace it with approved brand assets before launch.

## Before a production launch

1. Get written approval to use One Bite's name, official logo, photography and claims.
2. Confirm a complete menu, prices, sizes, allergens, dietary markings and outlet availability.
3. Get a verified outlet directory and links to official ordering partners.
4. Connect the franchise form to an approved backend/CRM with privacy notice and spam protection.
5. Implement real ordering, tax, delivery fees, inventory, payment provider and order confirmation only after requirements are confirmed.
6. Test accessibility, performance, analytics, SEO, security and mobile behaviour.
