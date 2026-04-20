# Shubham Choudhary Portfolio

A premium personal portfolio built with Next.js, React, TypeScript, Tailwind CSS, Framer Motion, Google Sheets integration, and OpenAI-powered assistant features.

## Run Locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Environment Setup

1. Copy env template:

```bash
cp .env.local.example .env.local
```

2. Fill `.env.local` values:
- `OPENAI_API_KEY` for AI chatbot and AI job match analyzer.
- `GOOGLE_SERVICE_ACCOUNT_EMAIL` and `GOOGLE_PRIVATE_KEY` for Google Sheets writes.
- `GOOGLE_SHEET_ID` (already set to your provided sheet id by default in template).

## Google Sheets Contact Form Setup

1. In Google Cloud:
- Create/select a project.
- Enable **Google Sheets API**.
- Create a **Service Account** and generate JSON credentials.

2. Put service account values in `.env.local`:
- `GOOGLE_SERVICE_ACCOUNT_EMAIL`
- `GOOGLE_PRIVATE_KEY` (keep `\\n` escaped as shown in template)

3. Share your Google Sheet with service-account email as **Editor**.

Once configured, contact form submissions append as:
- Column A: timestamp
- Column B: name
- Column C: email
- Column D: message

## API Routes

- `POST /api/contact`: saves Name, Email, Message to Google Sheets.
- `POST /api/ai/chat`: OpenAI-backed portfolio assistant responses.
- `POST /api/ai/job-match`: OpenAI-based role fit analysis from job description.

## Production Check

```bash
npm run lint
npm run build
```
