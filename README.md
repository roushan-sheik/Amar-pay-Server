# Quick Order Server Starter

The repository for server-side setup for a quick order system, designed specifically for educational purposes in the Next Level Web Development course. This project serves as a tutorial for integrating the AmarPay payment system into a server-side application.

---

### **Directory Structure**

```plaintext
src/
├── app/                     # Core application logic
│   ├── config/              # Configuration files
│   │   ├── db.ts            # Database configuration
│   │   └── seed.ts          # Data seeding script
│   └── modules/            # Application modules (e.g., order, product)
│       ├── order/          # Order module
│       │   ├── order.controller.ts   # Controller for order-related routes
│       │   ├── order.model.ts        # Mongoose model for orders
│       │   ├── order.routes.ts       # Routes for order-related endpoints
│       │   └── order.service.ts      # Service layer for order logic
│       └── product/        # Product module
│           ├── product.controller.ts # Controller for product-related routes
│           ├── product.model.ts      # Mongoose model for products
│           ├── product.routes.ts     # Routes for product-related endpoints
│           └── product.service.ts    # Service layer for product logic
├── app.ts                   # Main application entry point
└── index.ts                 # Server initialization
.env                         # Environment variables
```

---

### **Environment Variables**

Create a `.env` file in the root of your project directory with the following content:

```plaintext
DB_URL="YOUR MONGO URI"
PORT=3000
```

- **`DB_URL`**: The connection string for your MongoDB database.
- **`PORT`**: The port on which the server will run.

---

### **Getting Started**

To get started with this project, follow these steps:

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/Apollo-Level2-Web-Dev/quick-order-server-starter.git
   ```

2. **Navigate to the Project Directory:**

   ```bash
   cd quick-order-server-starter
   ```

3. **Install Dependencies:**

   Make sure you have Node.js installed. Run the following command to install the required dependencies:

   ```bash
   npm install
   ```

4. **Set Up Environment Variables:**

   Create a `.env` file in the root of your project directory and add the environment variables specified above.

5. **Run the Development Server:**

   Start the development server with:

   ```bash
   npm run dev
   ```

   The server will be available at `http://localhost:3000` (or your configured port).

---

