# Notes App

A full-stack notes app built with Next.js. Users sign up, log in, and manage their own private notes.

## Features

- Sign up, log in and log out (email and password)
- Protected pages and API: only logged-in users can access notes
- Each user sees and manages only their own notes
- Add, edit, delete and clear notes
- Validation on both the form and the server

## Tech

- Next.js (App Router), React, TypeScript
- Tailwind CSS, shadcn/ui
- Better Auth (authentication)
- Drizzle ORM with SQLite (local) and Turso (production)
- Zod (validation)

## Run locally

1. Install packages:
   ```bash
   npm install
   ```
2. Copy `.env.example` to `.env` and fill in `BETTER_AUTH_SECRET`.
3. Create the database tables:
   ```bash
   npm run db:migrate
   ```
4. Start the app:
   ```bash
   npm run dev
   ```

Then open http://localhost:3000
