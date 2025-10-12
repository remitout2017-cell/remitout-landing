export async function getServices() {
  const payloadURL = "https://loan.remitout.com";

  const res = await fetch(`${payloadURL}/api/services`, {
    headers: { "Content-Type": "application/json" },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch services");
  }

  const data = await res.json();
  return data.docs;
}
