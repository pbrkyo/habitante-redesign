import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { name, email, projectType, location, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Habitante Web" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_TO || "info@habitante.co",
      replyTo: email,
      subject: `Nuevo brief: ${name} — ${projectType || "General"}`,
      html: `
        <h2>Nuevo brief emocional</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Tipo de proyecto:</strong> ${projectType || "No especificado"}</p>
        <p><strong>Ubicación:</strong> ${location || "No especificada"}</p>
        <hr />
        <p><strong>Mensaje:</strong></p>
        <p>${message.replace(/\n/g, "<br />")}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
