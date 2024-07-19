# Personal Blog

## Introduction
Personal Blog is a web application that allows users to create, manage, and share blog posts. The application is built using JavaScript, EJS, and CSS, and is hosted on Vercel. It provides a platform for users to express their thoughts and ideas, while also offering a robust backend for managing content.

## Table of Contents
- [Introduction](#introduction)
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Dependencies](#dependencies)
- [Configuration](#configuration)
- [Database Setup](#database-setup)
- [Troubleshooting](#troubleshooting)
- [Contributors](#contributors)
- [License](#license)

## Installation
1. Clone the repository:
    ```sh
    git clone https://github.com/CandyVelazco100/PersonalBlog.git
    ```
2. Navigate to the project directory:
    ```sh
    cd PersonalBlog
    ```
3. Install the dependencies:
    ```sh
    npm install
    ```

## Usage
1. Start the development server:
    ```sh
    npm start
    ```
2. Open your browser and navigate to `http://localhost:3000` to use the application.

## Features
- **Create Posts:** Users can create new blog posts with a title, body content, and optional tags.
- **Edit Posts:** Users can edit their existing posts.
- **Delete Posts:** Users can delete their posts.
- **User Authentication:** Secure login and registration system.
- **Responsive Design:** Optimized for both mobile and desktop devices.

## Dependencies
- **Backend:**
  - Express
  - Mongoose
  - Body-Parser
  - Dotenv
  - Express-Session
  - Connect-Mongo
- **Frontend:**
  - EJS
  - Custom CSS and JavaScript

## Configuration
1. Create a `.env` file in the root directory.
2. Add the following environment variables:
    ```env
    DATABASE_URL=your_database_url
    SESSION_SECRET=your_session_secret
    ```

## Database Setup
1. Ensure MongoDB is installed and running on your system.
2. Update the `DATABASE_URL` in the `.env` file to point to your MongoDB instance.
3. The application will automatically create the necessary collections in your database when it runs for the first time.

## Troubleshooting
- **Server not starting:** Ensure all dependencies are installed and the `.env` file is configured correctly.
- **Database connection issues:** Verify the `DATABASE_URL` in the `.env` file and ensure the MongoDB server is running.
- **CSS/JS not loading:** Check if the static files are correctly linked in the EJS templates.
- **Session issues:** Ensure the `SESSION_SECRET` in the `.env` file is set to a secure, random string.

## Contributors
- Candy Velazco ([CandyVelazco100](https://github.com/CandyVelazco100))

## License
This project is licensed under the MIT License.
