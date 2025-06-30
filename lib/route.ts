import { NextResponse } from "next/server";

const payloadURL = process.env.NEXT_PUBLIC_PAYLOAD_API;

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

export async function getHomePageContent() {
  try {
    const res = await fetch(`${payloadURL}/api/homepageSections`, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      throw new Error("Failed to fetch homepage data");
    }

    const data = await res.json();
    const homepage = data.docs?.[0] || []; // just the first doc

    return NextResponse.json(homepage);
  } catch (error) {
    console.error("Homepage fetch error:", error);
    return NextResponse.json(
      { error: "Failed to fetch homepage data" },
      { status: 500 }
    );
  }
}

export async function getNavContactDetails() {
  try {
    const res = await fetch(`${payloadURL}/api/contactDetails`);
    const data = await res.json();
    const contact = data.docs?.[0] || []; // assuming only one set of details

    return NextResponse.json(contact);
  } catch (error) {
    console.error("Contact fetch error:", error);
    return NextResponse.json({ error: "Failed to fetch contact details" }, { status: 500 });
  }
}

export async function getStudentTrustSectionContent() {
  try {
    const res = await fetch(`${payloadURL}/api/studentTrustSection`);
    const data = await res.json();
    const trustSection = data.docs?.[0] || [];
    return NextResponse.json(trustSection);
  } catch (err) {
    console.error("Student Trust fetch error:", err);
    return NextResponse.json({ error: "Failed to fetch" }, { status: 500 });
  }
}