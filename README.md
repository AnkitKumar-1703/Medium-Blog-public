# Medium Blog Clone

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Tech Stack](#tech-stack)
  - [Backend](#backend)
  - [Frontend](#frontend)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Introduction

Welcome to the Medium Blog Clone project! This full-stack blogging platform allows users to immerse themselves in a world of knowledge sharing. Whether you're looking to explore diverse perspectives, share your own experiences, or engage with a community of learners, this platform provides the perfect space.

Our project is designed with both readers and writers in mind. It offers a seamless experience for discovering new content through scrolling or targeted searches, as well as an intuitive interface for publishing your own blogs. With a focus on user experience and performance, we've implemented features like pagination, loading skeletons, and theme customization to ensure a smooth and enjoyable interaction with the platform.

## Features

- **User Authentication**: Secure sign-up and login functionality.
- **Blog Reading**: Scroll through a feed of blogs or use the search function to find specific topics.
- **Blog Publishing**: Easy-to-use interface for writing and publishing your own blogs.
- **Blog Deletion**: Seamlessly delete your blog posts directly from your profile with instant updates to the user interface.
- **Search Functionality**: Powerful search feature to find blogs by title, content, or author.
- **Responsive Design**: Optimal viewing experience across a wide range of devices.
- **Dark/Light Theme**: Toggle between dark and light modes for comfortable reading in any environment.
- **Pagination**: Efficient loading of blog posts for improved performance and user experience.
- **Loading Skeletons**: Visual feedback during data fetching to enhance perceived performance.
- **Custom Hooks**: Reusable logic for data fetching and other common operations.

## Tech Stack

### Backend

- **Hosting**: Cloudflare Workers
  - Leveraging the power of edge computing for fast, globally distributed content delivery.
- **Framework**: Hono
  - A small, simple, and ultrafast web framework for Cloudflare Workers.
- **Database**: Prisma ORM
  - Type-safe database access with auto-generated queries.
  - Implemented with connection pooling for efficient database management.
- **Authentication**: JSON Web Tokens (JWT)
  - Secure, stateless authentication for API requests.
- **Data Validation**: Zod
  - TypeScript-first schema validation with static type inference.

### Frontend

- **Framework**: React (Vite)
  - Utilizing Vite for an incredibly fast and lean development experience.
- **Styling**: 
  - Tailwind CSS: Utility-first CSS framework for rapid UI development.
  - DaisyUI: Plugin for Tailwind CSS that adds component classes.
- **HTTP Client**: Axios
  - Promise-based HTTP client for making API requests.
- **Routing**: React Router DOM
  - Declarative routing for React applications.
- **Language**: TypeScript
  - Adds static typing to JavaScript for improved developer experience and code quality.

## Project Structure

The project follows a component-based architecture to promote reusability and maintainability. Key aspects of the structure include:

- **Custom Hooks**: Encapsulate and reuse complex logic, particularly for data fetching.
- **Reusable Components**: UI elements designed for flexibility and consistency across the application.
- **Type Definitions**: Comprehensive TypeScript types for robust type checking and improved code quality.

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn
- A Cloudflare account (for backend deployment)

## Installation
### Backend
1. Clone the repository:
   ```bash
   git clone https://github.com/AnkitKumar-1703/Medium-Blog
   cd Medium-Blog/backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up the database with Prisma:
   ```bash
   npx prisma migrate dev
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```
### Frontend
1. Navigate to the frontend directory:
   ```bash
   cd ../frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```
## Usage

1. Access the application at \`http://localhost:3000\`.
2. Sign up or log in to publish blogs.
3. Browse and search for blogs using the search functionality.
4. Toggle between dark and light themes using the theme switcher.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes. Make sure to follow the code style and include tests for any new features.

1. Fork the repository
2. Create a new branch (\`git checkout -b feature-branch\`)
3. Commit your changes (\`git commit -m 'Add some feature'\`)
4. Push to the branch (\`git push origin feature-branch\`)
5. Create a pull request

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

Ankit Kumar - [contactankit1234@gmail.com]

Project Link: [https://github.com/AnkitKumar-1703/Medium-Blog-public](https://github.com/AnkitKumar-1703/Medium-Blog-public)

