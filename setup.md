# ⚙️ Project Setup Guide (`setup.md`)

This file helps you quickly set up a TypeScript-based Node.js project with MongoDB and Express.

---

## 📁 Folder Structure

```
src/
├── config/        # .env and DB setup
├── controller/    # Route logic
├── middleware/    # Auth, error handling, etc.
├── model/         # Mongoose schemas
├── routes/        # API route definitions
├── service/       # Business logic
├── types/         # TypeScript interfaces/types
├── app.ts         # Express app setup
└── index.ts       # App entry point
```

---

## 🔧 Setup Instructions

### 1. Install dependencies

```bash
npm install dotenv express mongoose 
```
```bash
npm install --save-dev tsx nodemon 
```

```bash
npm install --save-dev @types/ express node 
```
---

### 2. Create `.env` file

```
PORT=5000
MONGODB_URI=your-mongodb-uri
```

---

### 3. Dotenv Config

```ts
// src/config/dotenv.config.ts
import { config as dotenvConfig } from 'dotenv';
dotenvConfig();

export const dotenv = {
  PORT: process.env.PORT || '5000',
  MONGODB_URI: process.env.MONGODB_URI || ''
};
```

---

### 4. `index.ts` setup

```ts
// src/index.ts
import express from 'express';
import { dotenv } from './config/dotenv.config';
import app from './app';

const PORT = dotenv.PORT;

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
```

---

### 5. `app.ts` setup

```ts
// src/app.ts
import express from 'express';
import userRoutes from './routes/user.routes'; // example

const app = express();
app.use(express.json());

// Routes
app.use('/api/users', userRoutes);

export default app;
```

---

### 6. Scripts (`package.json`)

```json
 "scripts": {
    "build": "tsc",
    "start": "node dist/index.js",
    "dev": "nodemon --exec tsx src/index.ts"
  }
```

Run dev server:

```bash
npm run dev
```

---

## ✅ Optional

- Add `tsconfig.json` settings:
  ```json
  {
    "compilerOptions": {
      "module": "NodeNext",
    "moduleResolution": "NodeNext",
    "target": "ES2022",
    "rootDir": "src",
    "outDir": "dist",
    "strict": true,
    "esModuleInterop": true,
    "resolveJsonModule": true,
    "skipLibCheck": true
    },
    "include": ["src"],
    "exclude": ["node_modules", "dist"]
  }
  ```

---

Happy coding! 🚀