# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` - Start development server at http://localhost:3000
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Architecture

This is a multi-tenant, white-label California homebuyer education platform built with Next.js 16 (App Router), TypeScript, and Tailwind CSS v4.

### Key Directories

- `src/app/` - App Router pages and API routes
- `src/components/` - Reusable UI components (Header, Footer)
- `src/lib/` - Core utilities:
  - `airtable.ts` - Airtable API integration for Realtors/Buyers
  - `auth.ts` - JWT session management, password hashing
  - `email.ts` - Nodemailer email notifications
  - `subdomain.ts` - Partner portal detection
  - `course-content.ts` - All 10 course modules with lessons
  - `constants.ts` - Site config, brand colors, contact info
- `src/types/` - TypeScript interfaces

### Multi-Tenant System

- **Main site** (`homereadyca.com`): Shows John Yang's contact info and loanDepot CTAs
- **Partner portals** (`lastname.homereadyca.com`): Shows realtor's info from Airtable
- Subdomain detection via `middleware.ts` setting `x-subdomain` header
- `getSiteContext()` in `subdomain.ts` returns appropriate branding

### Airtable Integration

CRM system of record with three tables:
- **Realtors**: Partner applications (Status: Pending/Approved)
- **Buyers**: Registered users with course progress
- **Events**: (V1.1) Activity logging

Environment variables required:
- `AIRTABLE_API_TOKEN`, `AIRTABLE_BASE_ID`
- `REALTORS_TABLE_ID`, `BUYERS_TABLE_ID`, `EVENTS_TABLE_ID`

### Authentication

JWT-based sessions stored in `homeready_session` cookie (7-day expiration). Password hashing with bcrypt.

### Course Content

10 modules stored in `src/lib/course-content.ts` as Markdown strings. Progress tracked per-buyer in Airtable `Progress` field as JSON.

### Email Notifications

GoDaddy SMTP via Nodemailer. Notifications sent for:
- Realtor signup → Admin
- Buyer registration → Admin + Realtor (if partner)

## Import Alias

`@/*` maps to `src/*`

## Environment Variables

See `.env.example` for all required variables. Copy to `.env.local` for local development.
