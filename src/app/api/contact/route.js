import { NextResponse } from "next/server";
import sg from "@sendgrid/mail";

export const runtime = "nodejs"; // ensure Node runtime on Vercel
sg.setApiKey(process.env.SENDGRID_API_KEY);

export async function POST(req) {
  try {
    const { name = "", email = "", subject = "", message = "", botField = "" } = await req.json();

    // 🛡️ Honeypot check — if botField is filled, drop silently
    if (botField) {
      console.warn("BOT submission blocked");
      return NextResponse.json({ ok: true });
    }

    if (!process.env.SENDGRID_API_KEY || !process.env.CONTACT_FROM || !process.env.CONTACT_TO) {
      throw new Error("Missing SENDGRID_API_KEY / CONTACT_FROM / CONTACT_TO");
    }
    if (!message) throw new Error("Message is required");

    await sg.send({
      to: process.env.CONTACT_TO,
      from: process.env.CONTACT_FROM,
      replyTo: email || undefined,
      subject: subject || `Contact: ${name || "Anonymous"}`,
      text: `From: ${name} <${email}>\n\n${message}`,
    });

    console.log("CONTACT_API_SUCCESS", { to: process.env.CONTACT_TO });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("CONTACT_API_ERROR:", err);
    return NextResponse.json({ ok: false, error: err.message }, { status: 500 });
  }
}
