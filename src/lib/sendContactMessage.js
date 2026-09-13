const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

export function isContactApiConfigured() {
  return Boolean(import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);
}

export async function sendContactMessage({ name, email, subject, message, recipientEmail }) {
  const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

  if (!accessKey) {
    throw new Error(
      "Contact API is not configured. Add VITE_WEB3FORMS_ACCESS_KEY locally or in Vercel Environment Variables."
    );
  }

  const response = await fetch(WEB3FORMS_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      access_key: accessKey,
      name,
      email,
      subject,
      message,
      from_name: name,
      replyto: email,
      to: recipientEmail,
    }),
  });

  const payload = await response.json().catch(() => ({}));

  if (!response.ok || !payload.success) {
    throw new Error(payload.message || "Unable to send your message right now.");
  }

  return payload;
}
