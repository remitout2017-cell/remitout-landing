export async function getServices() {
  const payloadURL = process.env.PAYLOAD_API || "http://localhost:3001";

  const res = await fetch(`${payloadURL}/api/services`, {
    headers: { "Content-Type": "application/json" },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch services");
  }

  const data = await res.json();
  return data.docs;
}
