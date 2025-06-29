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

export async function getAllFaqs() {

  const res = await fetch(`${payloadURL}/api/faqs?limit=100`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch FAQs");
  }

  const json = await res.json();
  return json.docs;
}


// Get In Touch Form Submission

export async function submitGetInTouchForm(data: {
  name: string;
  email: string;
  message: string;
  acceptTerms: boolean;
}) {

  const res = await fetch(`${payloadURL}/api/get-in-touch`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error?.message || 'Failed to submit form');
  }

  return res.json();
}


// Newsletter Subscription
export async function Newsletter(req: Request) {
  const data = await req.json();

  const res = await fetch(`${payloadURL}/api/newsletters`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email: data.email }),
  });

  if (!res.ok) {
    return NextResponse.json({ success: false }, { status: res.status });
  }

  return NextResponse.json({ success: true });
}

// Footer Content
export async function Footer() {

  const res = await fetch(`${payloadURL}/api/footer-content`);

  const data = await res.json();
  return NextResponse.json(data);
}

//Testimonials
export async function Testimonials() {
  try {
    const res = await fetch(`${payloadURL}/api/testimonial`);
    const data = await res.json();

    return NextResponse.json(data);
  } catch (err) {
    console.error("[ERROR fetching testimonials]", err);
    return NextResponse.json({ testimonials: [] }, { status: 500 });
  }
}