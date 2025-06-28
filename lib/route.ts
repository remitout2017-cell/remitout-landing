// app/api/enquiries/route.ts
import { NextResponse } from "next/server";

const payloadURL = process.env.PAYLOAD_API || "http://localhost:3001";
export async function Enquiry(data: {
  fullName: string;
  email: string;
  phoneCountryCode: string;
  phoneNumber: string;
  serviceInterestedIn: string;
  message: string;
}) {


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

export async function GetServices() {
  try {
    const res = await fetch(`${payloadURL}/api/services`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      throw new Error("Failed to fetch services");
    }

    const data = await res.json();
    return data.docs; // return the array directly
  } catch (error) {
    console.error("Service fetch error:", error);
    return []; // return empty array on error
  }
}

export async function getWhyRemitout() {

  const res = await fetch(`${payloadURL}/api/why-remitout?limit=10`, {
    headers: { "Content-Type": "application/json" },
  });

  if (!res.ok) throw new Error("Failed to fetch why-remitout data");

  const data = await res.json();
  return data.docs;
}
