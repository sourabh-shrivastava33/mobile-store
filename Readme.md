# MERN Stack Coding Challenge: Product Transactions

This project implements a MERN stack application to Perform CRUD operation over records (I am using mobile records).

## Backend API

- Fetches seed data from a third-party API.(Just to poplate Database)
- Provides APIs for:
  - Create New Records.
  - Read Existing Records.
  - Update Existing Records.
  - Delete Records.
  - View Records

## Frontend Application

- Single page application with:
  - All phones: Displays a list of all Phones retrieved from the backend API.
  - Edit and Create new product: Allows users to create or update a phone.
  - Delete Phone: Provides a button to delete a Existing Phone.
  - Get Phone Detail:Get single phone detail from backend and show it on the frontend.

## Setup Instructions

1. **Prerequisites:**
   - Node.js (version 14+) and npm
2. **Clone Repository:**
   ```bash
   git clone https://github.com/sourabh-shrivastava33/mobile-store.git
   ```
3. **Install Dependencies:**

   ```bash
   npm run setup
   ```

4. **Configure Environment Variables:**

- **Create a `.env` file to the root folder:**
  - In the project root directory, create a file named `.env`.
  - **Do not commit this file to version control** to protect sensitive information.
- **Add MongoDB connection string:**
  - Within the `.env` file, add the following line, replacing `<your_mongo_uri>` with your actual connection string:
  ```
  MONGO_URL=<your_mongo_uri>
  ```
- **Obtain MongoDB connection string:**
  - Refer to your MongoDB provider's documentation for instructions on how to obtain your connection string.

5. **Navigate to the `backend` directory:**

   - Open your terminal and navigate to the directory where the `populateDb.js` file is located (e.g., `cd backend`).

6. **Run the script:**

   - Execute the following command:
     ```bash
     node populateDb.js
     ```

   This will fetch data from the API, populate your database, and log a success message if everything goes well.

7. **Run the application:**

   ```bash
   npm run dev
   ```
