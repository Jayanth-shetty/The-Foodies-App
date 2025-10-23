# 🍽️ The Foodies App — Full-Stack Recipe Sharing Platform

**The Foodies App** is a full-stack web application built with **Next.js** and **SQLite3**, designed to simplify recipe sharing and food exploration.  
It offers users a smooth experience to browse, add, edit, and manage recipes while demonstrating modern full-stack concepts like routing, API integration, server actions, image storage, and dynamic metadata management.

---

## 🎯 Project Overview

The **Foodies App** provides a comprehensive and interactive platform for managing and sharing recipes efficiently.  
It merges the simplicity of a user-friendly interface with the robustness of full-stack development, ensuring smooth functionality from front-end to back-end.

---

## 🔑 Core Concepts

- **🧩 Reusable Components** — Built with Next.js components focusing on user interactions such as recipe listings, modals, and forms.  
- **⚡ Dynamic Data Handling** — Recipes are fetched dynamically via backend API routes, allowing real-time content updates.  
- **📱 Responsive UI** — Clean layouts with headers, recipe listings, pop-ups, and forms for adding or editing recipes.  
- **🌐 Full-Stack Integration** — Connects front-end and back-end seamlessly, enabling users to view, add, edit, or delete recipes.  
- **🚀 Next.js Framework** — Server-side rendering (SSR), dynamic routing, and API routes for full-stack functionality.  
- **🖼️ Images & Metadata Management** — Upload recipe images to **AWS S3**, with dynamic page metadata for SEO and social sharing.  
- **📋 Server Actions & Form Handling** — Uses `useFormSubmit` for managing form submissions with **server-side input validation** and error handling.  
- **🔧 Error Handling & Not Found States** — Custom `not-found.js` pages for invalid URLs, with granular messaging for missing recipes.  
- **🎯 User Experience Focus** — Provides clear guidance when users encounter errors or invalid content, ensuring seamless navigation.

---

## 🛠️ Features

- 🍲 Browse and explore community recipes  
- 📝 Add, edit, and delete recipes via server-side form handling  
- 🔍 Search and filter recipes efficiently  
- 👩‍🍳 User authentication (login/register)  
- 💾 SQLite3 database for persistent storage  
- 📸 Upload recipe images to AWS S3  
- ⚡ Dynamic metadata for SEO and social sharing  
- 🌙 Fully responsive design across devices  
- 🛑 Custom 404 pages with user-friendly error messages  

---

## 🛠️ Tech Stack

| Category       | Technology |
|----------------|------------|
| Frontend       | Next.js (React Framework) |
| Backend        | Next.js API Routes + Server Actions |
| Database       | SQLite3 |
| Cloud Storage  | AWS S3 for images |
| Styling        | Tailwind CSS / CSS Modules |
| Version Control| Git & GitHub |

---

## 🧭 Not Found / 404 Handling

Users often encounter invalid URLs that trigger 404 errors. The Foodies App improves user experience with:  

- **Custom `not-found.js` pages** for global or localized 404 handling  
- **Granular error messages** for missing content (e.g., non-existing recipe IDs)  
- **Guidance back to functional areas** to maintain seamless navigation  

This ensures users understand what went wrong and can continue exploring the app without frustration.

---

