# Ministry of Water & Energy — Website

Official website for the Federal Democratic Republic of Ethiopia's Ministry of Water & Energy (MiWE), built as part of a Ministry internship project.

## About

MiWE is the federal authority responsible for water resources management, energy development, and public digital services — spanning river basin governance, rural electrification, renewable energy strategy, scientific research, and citizen-facing digital services.

This repository contains the public-facing website: a multi-section frontend (hero slider, animated stats, project showcase, news/announcements, contact) backed by a PHP/MySQL staff management dashboard.

## Tech Stack

**Frontend**
- HTML5 / CSS3 (custom, no framework)
- Vanilla JavaScript — `IntersectionObserver` for scroll-triggered animation, `requestAnimationFrame` for animated counters

**Backend**
- PHP
- MySQL
- XAMPP (local development environment)

## Features

- Multi-language support (English, Amharic, Arabic)
- Hero image slider
- Animated stat counters
- Project showcase cards with progress indicators
- News & announcements section
- Contact form with emergency info block
- Staff management dashboard (CRUD, authentication) — admin-only

## Project Structure

```
├── index.html          # Home page
├── about.html           # About the Ministry
├── css/
│   └── style.css        # Global styles & design tokens
├── js/
│   └── main.js           # Slider, counters, scroll interactions
├── assets/
│   └── images/
└── backend/
    ├── config/            # DB connection
    ├── api/               # CRUD endpoints
    └── auth/              # Login / session handling
```

## Status

🚧 In active development as part of a 3-month Ministry internship (2026).

## License

Internal Ministry project — not for redistribution without authorization.
