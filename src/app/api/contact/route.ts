import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const PLACEHOLDERS = ["your-email@gmail.com", "your-app-password", ""];

function smtpPass() {
  return (process.env.SMTP_PASS ?? "").replace(/\s/g, "");
}

function isConfigured() {
  const { SMTP_HOST, SMTP_USER } = process.env;
  const pass = smtpPass();
  return (
    !!SMTP_HOST &&
    !!SMTP_USER &&
    !!pass &&
    !PLACEHOLDERS.includes(SMTP_USER) &&
    !PLACEHOLDERS.includes(pass)
  );
}

function escapeHtml(str: string) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(req: NextRequest) {
  try {
    const { name, email, projectType, location, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    if (!isConfigured()) {
      console.error(
        "Contact form: SMTP is not configured. Set SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS (and CONTACT_TO) in the environment / Vercel project settings."
      );
      return NextResponse.json(
        { error: "Email service not configured" },
        { status: 503 }
      );
    }

    const port = Number(process.env.SMTP_PORT) || 587;

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port,
      secure: port === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: smtpPass(),
      },
    });

    const safe = {
      name: escapeHtml(String(name)),
      email: escapeHtml(String(email)),
      projectType: escapeHtml(String(projectType || "No especificado")),
      location: escapeHtml(String(location || "No especificada")),
      message: escapeHtml(String(message)),
    };

    await transporter.sendMail({
      from: `"Habitante Web" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_TO || "info@habitante.co",
      replyTo: email,
      subject: `Nuevo brief: ${safe.name} — ${safe.projectType}`,
      text: `Nuevo brief emocional\n\nNombre: ${name}\nEmail: ${email}\nTipo de proyecto: ${
        projectType || "No especificado"
      }\nUbicación: ${location || "No especificada"}\n\nMensaje:\n${message}`,
      html: `
        <h2>Nuevo brief emocional</h2>
        <p><strong>Nombre:</strong> ${safe.name}</p>
        <p><strong>Email:</strong> ${safe.email}</p>
        <p><strong>Tipo de proyecto:</strong> ${safe.projectType}</p>
        <p><strong>Ubicación:</strong> ${safe.location}</p>
        <hr />
        <p><strong>Mensaje:</strong></p>
        <p>${safe.message.replace(/\n/g, "<br />")}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    const err = error as Error & { code?: string; response?: string };
    console.error("Contact form error:", err.message, err.code, err.response);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
