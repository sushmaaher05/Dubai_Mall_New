# Project Architecture

## Overview
This project is built as a modular React application designed for scalability and storytelling-based UI.

## Structure

- components/ → Reusable UI elements (buttons, headings, layout wrappers)
- sections/ → Main storytelling sections (Hero, Entertainment, Events)
- animations/ → GSAP animation logic separated from UI
- data/ → Static content and stats
- assets/ → Videos, images, media files

## Design Principle
The architecture follows a separation of concerns:

UI (components) + Story (sections) + Motion (animations)

## Scalability Plan
The system is designed to support future expansion:

- Leasing module
- Sponsorship module
- Event booking module