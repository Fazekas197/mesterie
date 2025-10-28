# 📘 Mesterie

A full-stack monorepo containing:

-   **Backend**: C# Minimal API with Entity Framework Core and PostgreSQL
-   **Frontend**: React (Vite)

---

## 🛠 Prerequisites

Before starting, make sure you have the following installed:

1. **.NET SDK 8+**

```bash
dotnet --version
```

Should return `8.x.x`.

2. **Node.js 18+**

```bash
node -v
```

Should return `v18.x.x` or higher.

3. **pnpm** (package manager)

```bash
npm install -g pnpm
pnpm -v
```

4. **PostgreSQL**  
   Make sure PostgreSQL is running locally and you have credentials to create a database.

---

## 📥 Installation

### 1. Clone the repository

```bash
git clone <repository-url>
cd mesterie
```

### 2. Install dependencies

From the **root of the monorepo**, run:

```bash
pnpm install
```

---

## ⚙️ Configuration

### 1. Backend `.env`

Create a `.env` file inside `apps/backend/Backend/`:

```env
# PostgreSQL connection string
CONNECTION_STRING=Host=localhost;Database=booksdb;Username=postgres;Password=postgres

# JWT secret (used to sign tokens)
JWT_SECRET=mysecretkey123
```

> Make sure `.env` is **not committed** to Git (included in `.gitignore`).

### 2. Frontend `.env`

Create a `.env` file inside `apps/frontend/`:

```env
# Base URL of the backend API
VITE_API_BASE=http://localhost:5101
```

> Any variable for React must **start with `VITE_`**.

---

## 🏗 Project Structure

```
mesterie/
├─ apps/
│  ├─ backend/
│  │  └─ Backend/
│  │     ├─ Backend.csproj
│  │     ├─ Program.cs
│  │     └─ ...
│  └─ frontend/
│        ├─ package.json
│        ├─ vite.config.js
│        └─ src/
├─ .gitignore
├─ mesterie.sln
├─ package.json
├─ pnpm-workspace.yaml
└─ README.md
```

---

## 🚀 Running the Project

### 1. Backend

```bash
cd apps/backend/Backend
dotnet watch run
```

-   Runs on **http://localhost:5101** by default.

### 2. Frontend

```bash
cd apps/frontend
pnpm run dev
```

-   Runs on **http://localhost:5173** by default.

### 3. Run both together (optional)

In the project root

```bash
pnpm run dev
```

---

## 💡 Best Practices & Suggestions

-   **Always create a new branch** for features:

```bash
git checkout -b feature/your-feature-name
```

-   **Always fetch and pull before starting work**:

```bash
git fetch origin
git pull
```

-   **Commit in small, meaningful batches**:

```bash
git add .
git commit -m "Add login endpoint to backend"
```

-   **Keep `.env` files local** — do not commit secrets.

---

## ⚡ Tips

1. Use **VS Code** for both backend and frontend development.
2. Recommended VS Code extensions:
    - C# Dev Kit (or C# by Microsoft)
    - ESLint & Prettier
    - Vite/React syntax highlighting
3. Open **the root folder** in VS Code to have both backend and frontend in the same workspace.
