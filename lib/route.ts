
const payloadURL = "https://loan.remitout.com";

export async function Enquiry(data: {
  fullName: string;
  email: string;
  phoneCountryCode: string;
  phoneNumber: string;
  serviceInterestedIn: string;
  message: string;
}) {
  try {
    const res = await fetch(`${payloadURL}/api/enquiries`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      const errorData = await res.json().catch(() => ({}));
      throw new Error(errorData?.error || "Failed to create enquiry");
    }

    const result = await res.json();
    return result; // return plain JSON
  } catch (err) {
    console.error("[Enquiry] Error submitting enquiry:", err);
    throw err; // throw to be caught in frontend
  }
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
    return data.docs; 
  } catch (error) {
    console.error("Service fetch error:", error);
    return []; 
  }
}

export async function getWhyRemitout() {
  try {
    const res = await fetch(`${payloadURL}/api/why-remitout`, {
      headers: { "Content-Type": "application/json" },
    });

    if (!res.ok) {
      throw new Error(
        `Failed to fetch why-remitout data: ${res.status} ${res.statusText}`
      );
    }

    const data = await res.json();
    return data.docs || []; // return empty array if docs not found
  } catch (error) {
    console.error("[getWhyRemitout] Error fetching data:", error);
    return []; // fallback to empty array
  }
}


export async function getAllFaqs() {
  try {
    const res = await fetch(`${payloadURL}/api/faqs?limit=40`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch FAQs: ${res.status} ${res.statusText}`);
    }

    const json = await res.json();
    return json.docs || []; 
  } catch (error) {
    console.error("[getAllFaqs] Error fetching FAQs:", error);
    return [];
  }
}

// Get In Touch Form Submission

export async function submitGetInTouchForm(data: {
  name: string;
  email: string;
  message: string;
  acceptTerms: boolean;
}) {
  const res = await fetch(`${payloadURL}/api/get-in-touch`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error?.message || "Failed to submit form");
  }

  return res.json();
}

// Newsletter Subscription
export async function submitNewsletter(data: { email: string }) {
  try {
    const res = await fetch(`${payloadURL}/api/newsletters`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: data.email }),
    });

    if (!res.ok) {
      console.error("Newsletter subscription failed", res.statusText);
      return { success: false };
    }

    return { success: true };
  } catch (error) {
    console.error("Newsletter subscription error", error);
    return { success: false };
  }
}


// Footer Content
export async function fetchFooter() {
  try {
    const res = await fetch(`${payloadURL}/api/footer-content`);
    if (!res.ok) {
      throw new Error(
        `Failed to fetch footer content: ${res.status} ${res.statusText}`
      );
    }

    const data = await res.json();
    return data; // return plain JSON
  } catch (error) {
    console.error("[fetchFooterContent] Error fetching footer:", error);
    return { docs: [{}] }; // safe fallback
  }
}

//Testimonials
export async function Testimonials() {
  try {
    const res = await fetch(`${payloadURL}/api/testimonial`);
    if (!res.ok) {
      throw new Error(
        `Failed to fetch testimonials: ${res.status} ${res.statusText}`
      );
    }

    const data = await res.json();
    return data; // return plain JSON
  } catch (err) {
    console.error("[Testimonials] Error fetching testimonials:", err);
    return { docs: [{ testimonials: [] }] }; // safe fallback
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
    return data.docs?.[0] || null; // Return the first document directly
  } catch (error) {
    console.error("Homepage fetch error:", error);
    return null;
  }
}

export async function getNavContactDetails() {
  try {
    const res = await fetch(`${payloadURL}/api/contactDetails`);
    if (!res.ok) throw new Error("Failed to fetch contact details");

    const data = await res.json();
    const contact = data.docs?.[0] || null; // return a single contact object or null
    return contact;
  } catch (error) {
    console.error("Contact fetch error:", error);
    return null; // return null on error
  }
}

export async function getStudentTrustSectionContent() {
  try {
    const res = await fetch(`${payloadURL}/api/studentTrustSection`);
    if (!res.ok) {
      throw new Error(
        `Failed to fetch student trust section: ${res.status} ${res.statusText}`
      );
    }

    const data = await res.json();
    const trustSection = data.docs?.[0] || null; 
    return trustSection;
  } catch (err) {
    console.error("[getStudentTrustSectionContent] Error:", err);
    return null; 
  }
}

// Get Why Remitout CTA Section
export async function getWhyRemitoutCTA() {
  try {
    const res = await fetch(`${payloadURL}/api/why-remitout-cta?limit=1`, {
      next: { revalidate: 60 }, // optional cache control for ISR
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch Why Remitout CTA: ${res.statusText}`);
    }

    const data = await res.json();
    return data?.docs?.[0] || null; // return first document only
  } catch (error) {
    console.error("Error fetching Why Remitout CTA:", error);
    return null;
  }
}

export async function getSEO() {
  const res = await fetch(`${payloadURL}/api/globals/seo`);
  if (!res.ok) {
    throw new Error("Failed to fetch SEO data");
  }
  const data = await res.json();
  return data;
}