# 🏡 NESTtrip

**NESTtrip** is a full-stack travel and accommodation web application inspired by modern property-booking platforms. It allows users to explore destinations, discover accommodations, create listings, and manage their travel stays through an interactive web interface.

The project is built to demonstrate practical **full-stack web development**, including RESTful APIs, authentication, database management, sessions, image uploads, CRUD operations, and deployment-ready architecture.

---

## 🚀 Features

### 👤 User Authentication

* User registration and login
* Secure password authentication
* Session-based authentication
* User logout
* Protected routes
* Authorization for listing management

### 🏠 Property Listings

* Create new accommodation listings
* View all available listings
* View individual listing details
* Edit existing listings
* Delete listings
* Add property descriptions
* Add location and pricing information
* Upload property images

### 🔍 Explore & Discover

* Browse available accommodations
* Explore different destinations
* View detailed property information
* Responsive listing interface
* Location-based property information

### 🖼️ Image Management

* Upload listing images
* Store images using Cloudinary
* Display uploaded images dynamically
* Image validation and management

### 🗄️ Database Management

* MongoDB database integration
* Mongoose models and schemas
* CRUD operations
* Data validation
* Relationships between users and listings

### 🔐 Security & Authorization

* Authentication using Passport
* Password hashing
* Protected CRUD operations
* User-based authorization
* Secure session management
* Environment variables for sensitive configuration

---

## 🛠️ Tech Stack

### Frontend

* HTML5
* CSS3
* JavaScript
* EJS
* EJS-Mate
* Bootstrap

### Backend

* Node.js
* Express.js

### Database

* MongoDB
* MongoDB Atlas
* Mongoose

### Authentication & Sessions

* Passport.js
* Passport-Local
* Passport-Local-Mongoose
* Express Session
* Connect-Mongo

### Image Storage

* Cloudinary

### Other Tools

* Method-Override
* Dotenv
* Joi
* Git
* GitHub
* VS Code

---

## 🏗️ Project Architecture

```text
NESTtrip
│
├── controllers/
│   ├── listing.js
│   ├── review.js
│   └── user.js
│
├── models/
│   ├── listing.js
│   ├── review.js
│   └── user.js
│
├── routes/
│   ├── listing.js
│   ├── review.js
│   └── user.js
│
├── views/
│   ├── layouts/
│   ├── listings/
│   ├── users/
│   └── includes/
│
├── public/
│   ├── css/
│   └── js/
│
├── utils/
│   ├── ExpressError.js
│   └── wrapAsync.js
│
├── init/
│   └── data.js
│
├── middleware.js
├── schema.js
├── app.js
├── cloudConfig.js
├── package.json
├── package-lock.json
├── .env
└── README.md
```

> The exact folder structure may vary depending on the current version of the project.

---

## 🔄 Application Workflow

```text
                ┌─────────────────┐
                │      User       │
                └────────┬────────┘
                         │
                         ▼
                ┌─────────────────┐
                │   NESTtrip UI   │
                │   EJS / CSS / JS│
                └────────┬────────┘
                         │
                         ▼
                ┌─────────────────┐
                │  Express Server │
                └────────┬────────┘
                         │
             ┌───────────┼───────────┐
             ▼           ▼           ▼
        Authentication Listings    Reviews
             │           │           │
             └───────────┼───────────┘
                         ▼
                ┌─────────────────┐
                │     Mongoose    │
                └────────┬────────┘
                         ▼
                ┌─────────────────┐
                │     MongoDB     │
                └─────────────────┘
                         
                         │
                         ▼
                ┌─────────────────┐
                │    Cloudinary   │
                │  Image Storage  │
                └─────────────────┘
```

---

## 📌 Main CRUD Operations

NESTtrip implements complete CRUD functionality for property listings.

| Operation | HTTP Method | Purpose                    |
| --------- | ----------- | -------------------------- |
| Create    | POST        | Add a new listing          |
| Read      | GET         | Display listings           |
| Read      | GET         | Display individual listing |
| Update    | PUT         | Edit a listing             |
| Delete    | DELETE      | Remove a listing           |

---

## 🔐 Authentication Flow

```text
User
 │
 ├── Register
 │      ↓
 │   User Account
 │
 ├── Login
 │      ↓
 │   Passport Authentication
 │      ↓
 │   Session Created
 │
 ├── Access Protected Routes
 │
 └── Logout
        ↓
     Session Destroyed
```

---

## 📷 Image Upload Flow

```text
User
  │
  ▼
Upload Property Image
  │
  ▼
Express Server
  │
  ▼
Cloudinary
  │
  ▼
Image URL
  │
  ▼
MongoDB Listing
  │
  ▼
Display Image
```

---

## ⚙️ Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/NESTtrip.git
```

### 2. Move Into the Project

```bash
cd NESTtrip
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Create Environment Variables

Create a `.env` file in the root directory:

```env
ATLASDB_URL=your_mongodb_connection_string

SECRET=your_session_secret

CLOUD_NAME=your_cloudinary_cloud_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_SECRET=your_cloudinary_api_secret
```

> Never upload your `.env` file to GitHub.

### 5. Start the Application

For development:

```bash
node app.js
```

Or, if your project uses nodemon:

```bash
nodemon app.js
```

The application will run on:

```text
http://localhost:8080
```

---

## 🌐 Database

NESTtrip uses **MongoDB** for storing application data.

Main data entities include:

### User

```text
User
├── username
├── email
└── password
```

### Listing

```text
Listing
├── title
├── description
├── image
├── price
├── location
├── country
└── owner
```

### Review

```text
Review
├── comment
├── rating
└── author
```

---

## 🔒 Environment Variables

The following information should be kept private:

```text
MongoDB Connection String
Session Secret
Cloudinary Cloud Name
Cloudinary API Key
Cloudinary API Secret
```

Add `.env` to `.gitignore`:

```gitignore
.env
node_modules/
```

---

## 🎯 Project Objectives

The main objectives of NESTtrip are:

* Build a real-world full-stack web application
* Understand Express.js backend architecture
* Implement RESTful routing
* Perform MongoDB CRUD operations
* Implement authentication and authorization
* Work with sessions and cookies
* Integrate third-party cloud services
* Handle image uploads
* Practice MVC architecture
* Develop a responsive and user-friendly interface

---

## 📚 What I Learned

Through this project, I gained practical experience with:

* Node.js backend development
* Express.js routing and middleware
* MongoDB and Mongoose
* REST APIs
* MVC architecture
* Authentication using Passport.js
* Authorization and protected routes
* Session management
* CRUD operations
* Cloudinary image uploads
* Form handling and validation
* Error handling
* Environment variable management
* Git and GitHub
* Full-stack application development

---

## 🔮 Future Improvements

Planned improvements for NESTtrip include:

* 🔎 Advanced search and filtering
* 🗺️ Interactive maps
* 📅 Accommodation booking system
* 💳 Online payment integration
* ❤️ Wishlist functionality
* 🔔 Booking notifications
* 📱 Improved mobile responsiveness
* 👤 User profile dashboard
* ⭐ Advanced review and rating system
* 📊 Host dashboard
* ☁️ Production deployment

---

## 📈 Future Architecture

```text
                    NESTtrip
                       │
        ┌──────────────┼──────────────┐
        ▼              ▼              ▼
     Users          Hosts          Admin
        │              │              │
        ▼              ▼              ▼
   Explore         Manage          Monitor
   Listings        Listings        Platform
        │              │
        └───────┬──────┘
                ▼
          Booking System
                │
        ┌───────┼────────┐
        ▼       ▼        ▼
      Maps   Payment  Notifications
```

---

## 💻 Development Skills Demonstrated

This project demonstrates practical knowledge of:

```text
Frontend
   ↓
HTML + CSS + JavaScript + EJS

Backend
   ↓
Node.js + Express.js

Database
   ↓
MongoDB + Mongoose

Authentication
   ↓
Passport.js + Sessions

Cloud Services
   ↓
Cloudinary + MongoDB Atlas

Development
   ↓
Git + GitHub + REST + MVC
```

---

## 👨‍💻 Developer

**Harikrishna Patel**

B.Tech Computer Science & Engineering

Interested in:

* Full Stack Development
* MERN Stack
* Backend Development
* REST APIs
* Database Management
* Problem Solving

---

## ⭐ Project Highlights

> **NESTtrip is a practical full-stack project that demonstrates how a real-world accommodation platform can be designed using Node.js, Express.js, MongoDB, authentication, cloud image storage, and MVC architecture.**

If you find this project useful, consider giving the repository a ⭐.

---

## 📄 License

This project is created for **educational and portfolio purposes**.
