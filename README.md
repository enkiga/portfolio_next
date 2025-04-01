# Next.js Portfolio Website

This repository contains a portfolio website built using Next.js. It showcases skills, projects, and contact information, incorporating styling, images, and page-based routing.

## Overview

This project was created as a checkpoint to demonstrate proficiency in:

* Setting up a Next.js project.
* Styling components with CSS modules.
* Displaying images using Next.js's `Image` component.
* Implementing page-based routing with Next.js.
* Server-side rendering (implicit in Next.js).
* Deployment readiness.

## Functionality

The portfolio website includes the following pages:

* **Home:** Introduces the portfolio owner and highlights key skills.
* **About:** Provides more detailed information about the portfolio owner.
* **Projects:** Displays a list of projects with images and descriptions.
* **Contact:** Offers contact information and a form or links for reaching out.

## Technologies Used

* Next.js
* React
* CSS Modules (or other chosen styling method)

## Setup Instructions

To run this application locally, follow these steps:

1. **Clone the repository:**

    ```bash
    git clone https://github.com/enkiga/portfolio_next
    ```

2. **Navigate to the project directory:**

    ```bash
    cd portfolio_next
    ```

3. **Install dependencies:**

    ```bash
    npm install
    ```

4. **Start the development server:**

    ```bash
    npm run dev
    ```

    This will open the application in your default web browser.

## File Structure

* `pages/`: Contains the Next.js pages for each section of the portfolio.
  * ```index.js```: Home page.
  * ```about.js```: About page.
  * ```projects.js```: Projects page.
  * ```contact.js```: Contact page.
* `components/`: Contains reusable React components.
* `public/`: Contains static assets, such as images.
* `styles/`: Contains CSS modules or other styling files.
* `package.json`: Lists the project's dependencies and scripts.
* `README.md`: This file.
* `next.config.js`: Next.js configuration file.

## Usage

Once the application is running, you can navigate between the different pages to view the portfolio content.

## Key Features

* **Page-based routing:** Next.js's file-based routing makes it easy to create and manage pages.
* **Image optimization:** The Next.js `Image` component optimizes images for performance.
* **Styling:** CSS modules or other chosen styling approach to maintain organized and scoped styles.
* **Server-side rendering (SSR):** Next.js handles SSR automatically, improving performance and SEO.
* **Deployment ready:** The project is configured for easy deployment to platforms like Vercel, Netlify, or others.

## Deployment

To deploy this Next.js application, you can use platforms like:

* **Vercel:** Optimized for Next.js deployments.
* **Netlify:** Easy deployment with Git integration.
* **Other platforms:** Deploy to any platform that supports Node.js applications.

Follow the platform's deployment instructions to deploy your portfolio website.
