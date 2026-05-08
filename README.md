# britney-javens-realtor

Britney Javens — North Atlanta Realtor Website
A professional real estate website for Britney Javens, a licensed Realtor® with Keller Williams North Atlanta. The site serves buyers and sellers across Metro Atlanta and North Georgia, including Alpharetta, Milton, Cumming, Roswell, Lake Lanier, and beyond.

🌐 Live Site: northatlantarealtor.homes

About the Project
This is a static, multi-page marketing website built with vanilla HTML, CSS, and JavaScript. It is designed to generate leads, establish credibility, and provide resources for home buyers and sellers in the North Atlanta area.

Tech Stack
	•	HTML5 — semantic, SEO-optimized markup
	•	CSS3 — custom styling via style.css
	•	Vanilla JavaScript — interactions via main.js (mobile nav, form handling)
	•	Formspree — contact form submissions (no backend required)
	•	Schema.org JSON-LD — structured data for RealEstateAgent and Person types

Features
    • Fully responsive / mobile-friendly layout
    • SEO-optimized with Open Graph, Twitter Card, and geo meta tags
    • Structured data (JSON-LD) for rich search results
    • Verified profile links (Zillow, Realtor.com, Georgia MLS, KW, LinkedIn, YouTube)
    • Contact form powered by Formspree
    • Hamburger mobile navigation menu
    • Social proof testimonial section

Getting Started
No build tools or dependencies required. Simply open any .html file in a browser, or serve the project with any static file server:
# Using Python
python -m http.server 8000

# Using Node.js (npx)
npx serve .

Contact Form Setup
The contact form submits to Formspree. To activate it:
	1.	Create a free account at formspree.io
	2.	Create a new form and copy your form ID
	3.	In index.html (and contact.html), replace YOUR_FORM_ID in the form action:
        <form action="https://formspree.io/f/YOUR_FORM_ID" method="

Deployment
This is a fully static site and can be deployed to any static hosting platform:
	•	GitHub Pages
	•	Netlify
	•	Vercel
	•	Any standard web host (GoDaddy, Bluehost, etc.)

License
This project is a private, client website. All content, images, and branding are the property of Britney Javens / Keller Williams North Atlanta.

