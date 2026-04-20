import { google } from "googleapis";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

type ContactPayload = {
  name?: string;
  email?: string;
  message?: string;
};

function getSheetId() {
  const directId = process.env.GOOGLE_SHEET_ID?.trim();
  if (directId) {
    return directId;
  }

  const url = process.env.GOOGLE_SHEET_URL?.trim();
  if (!url) {
    return "1XdjO9eZWaO_2agGCO_tk8-6dlZMT7CUeRIdIrQ0pBu4";
  }

  const match = url.match(/\/d\/([a-zA-Z0-9-_]+)/);
  return match?.[1] ?? "1XdjO9eZWaO_2agGCO_tk8-6dlZMT7CUeRIdIrQ0pBu4";
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;
    const name = body.name?.trim();
    const email = body.email?.trim();
    const message = body.message?.trim();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 },
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 },
      );
    }

    const serviceAccountEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
    const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n");

    if (!serviceAccountEmail || !privateKey) {
      return NextResponse.json(
        {
          error:
            "Google Sheets credentials are missing. Set GOOGLE_SERVICE_ACCOUNT_EMAIL and GOOGLE_PRIVATE_KEY.",
        },
        { status: 500 },
      );
    }

    const auth = new google.auth.JWT({
      email: serviceAccountEmail,
      key: privateKey,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });
    const spreadsheetId = getSheetId();
    const sheetName = process.env.GOOGLE_SHEET_NAME?.trim() || "Sheet1";
    const timestamp = new Date().toISOString();

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: `${sheetName}!A:D`,
      valueInputOption: "RAW",
      requestBody: {
        values: [[timestamp, name, email, message]],
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact submission error:", error);

    const maybeError = error as {
      message?: string;
      response?: {
        data?:
          | { error_description?: string; error?: string }
          | { error?: { message?: string } };
      };
    };

    const googleDescription =
      (maybeError.response?.data as { error_description?: string } | undefined)
        ?.error_description ||
      (maybeError.response?.data as { error?: { message?: string } } | undefined)
        ?.error?.message ||
      maybeError.message;

    const devHint = process.env.NODE_ENV !== "production" && googleDescription
      ? ` Debug: ${googleDescription}`
      : "";

    return NextResponse.json(
      {
        error: `Unable to submit right now. Please check Google Sheets credentials and sharing settings.${devHint}`,
      },
      { status: 500 },
    );
  }
}
