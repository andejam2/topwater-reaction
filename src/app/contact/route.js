import { NextResponse } from "next/server";
import sg from "@sendgrid/mail";

export const runtime = "nodejs"; // ensure Node runtime on Vercel

sg.setApiKey(process.env.SENDGRID_API_KEY);

export async function POST(req) {
  try {
    const { name = "", email = "", message = "" } = await req.json();

    if (!process.env.SENDGRID_API_KEY || !process.env.CONTACT_FROM || !process.env.CONTACT_TO) {
      throw new Error("Missing SENDGRID_API_KEY / CONTACT_FROM / CONTACT_TO");
    }
    if (!message) throw new Error("Message is required");

    await sg.send({
      to: process.env.CONTACT_TO,                 // goes to your Gmail
      from: process.env.CONTACT_FROM,             // shows to customers (no-reply@…)
      replyTo: email || undefined,                // so you can hit “Reply” in Gmail
      subject: `Contact: ${name || "Anonymous"}`,
      text: `From: ${name} <${email}>\n\n${message}`,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("CONTACT_API_ERROR:", err);
    return NextResponse.json({ ok: false, error: err.message }, { status: 500 });
  }
}
