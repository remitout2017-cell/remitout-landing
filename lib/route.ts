// app/api/enquiries/route.ts
import { NextResponse } from "next/server";

export async function Enquiry(data: {
  fullName: string;
  email: string;
  phoneCountryCode: string;
  phoneNumber: string;
  serviceInterestedIn: string;
  message: string;
}) {

  const payloadURL = process.env.PAYLOAD_API || "http://localhost:3001";

  const res = await fetch(`${payloadURL}/api/enquiries`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    return NextResponse.json(
      { error: "Failed to create enquiry" },
      { status: 500 }
    );
  }

  const result = await res.json();
  return NextResponse.json(result);
}
