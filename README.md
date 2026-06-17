# School Management System

Project Name: School Management System

Core Tech Stack: Node.js, TypeScript, Next.js 14 (App Router), React, PostgreSQL, Prisma, Tailwind CSS

High-level Purpose: A web-based administration dashboard for K–12 schools that centralizes student, teacher, class, schedule, attendance, assignment, exam, and results management. The product delivers role-based views (admin, teacher, parent, student) to streamline school operations, automate record keeping, and surface analytics for decision-making. Engineering goals emphasize a typed stack, server-side rendering via Next.js, and a relational data model powered by Prisma/Postgres.

---

## Project Description:

School Management System is a Next.js-based administrative dashboard that helps schools manage students, teachers, classes, schedules, attendance, exams, assignments, events, and announcements. It provides role-aware views and actions for admins, teachers, parents, and students so each user type can access the information they need. The platform uses Prisma and PostgreSQL for reliable relational data storage and Clerk for identity and authentication.

## Key Features:

- Role-based access (Admin, Teacher, Parent, Student) using Clerk authentication
- Relational data model (students, teachers, classes, grades, lessons, exams, assignments, attendance, results)
- CRUD forms and validation using Zod and react-hook-form
- Calendar and scheduling UI powered by `react-big-calendar` and custom utilities
- Charts and analytics using `recharts`
- Cloudinary-backed media uploads for profile photos and attachments
- Prisma + PostgreSQL as source of truth, with a seeding script for initial data

## Prerequisites & Installation:

1. Clone the repository

```bash
git clone <REPOSITORY_URL>
cd school-management-system
```

2. Install dependencies

```bash
npm install
# or
yarn
```

3. Environment variables

Create a `.env` file in the project root with the following entries (example values shown):

```env
DATABASE_URL=postgresql://user:password@localhost:5432/school_db
# Clerk keys (replace with real values from your Clerk dashboard)
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...
# Cloudinary (for uploads)
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your-cloud-name
CLOUDINARY_URL=cloudinary://api_key:api_secret@your-cloud-name
```

4. Prepare the database

```bash
# Create/migrate the database using Prisma
npx prisma migrate dev --name init
# Seed (project has a seed entry configured in package.json)
npx prisma db seed
```

5. Start the development server

```bash
npm run dev
# or
yarn dev
```

The app will be available at `http://localhost:3000` by default.

## Usage Examples:

Run in development mode:

```bash
npm run dev
```

Build and run production locally:

```bash
npm run build
npm start
```

Seed the database (same as installation step):

```bash
npx prisma db seed
```

Example: creating a student via server action (inside the app code)

```ts
// call a server action exported from src/lib/actions.ts
import { createStudent } from '@/lib/actions'

await createStudent({
  username: 'jdoe123',
  name: 'John',
  surname: 'Doe',
  email: 'john@example.com',
  parentId: 'parent-id',
  classId: 1,
  gradeId: 1,
  birthday: new Date('2012-01-01'),
  sex: 'MALE',
})
```

## Testing:

Run linting and any present test suite. If a `test` script is not defined, this serves as a placeholder for your preferred test runner.

```bash
npm run lint
# Run test suite (if present)
npm test
```

---

Notes & next steps:

- The repository ships with mock data under `src/lib/data.ts` used for UI placeholders; remove or gate these mock data sources before production rollout to avoid inconsistent data sources. See `src/lib/prisma.ts` for the Prisma client pattern and ensure environment handling for serverless deployments.
- To prepare for production, configure a connection pool (PgBouncer), add DB backups and compliance policies, and run a security review of Clerk/Cloudinary configuration.

For additional developer onboarding, see `OVERVIEW.md` in the project root for architecture diagrams, data model details, and prioritized recommendations.
# Lama Dev School Management Dashboard

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Lama Dev Youtube Channel](https://youtube.com/lamadev) 
- [Next.js](https://nextjs.org/learn)