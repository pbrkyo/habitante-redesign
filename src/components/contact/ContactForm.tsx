"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { useLanguage } from "@/lib/i18n/LanguageContext";

interface FormData {
  name: string;
  email: string;
  projectType: string;
  location: string;
  message: string;
}

export default function ContactForm() {
  const { t } = useLanguage();
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setStatus("success");
        reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const inputClass =
    "w-full bg-transparent border-b-2 border-bone focus:border-az-brand py-3 text-[15px] text-carbon font-normal placeholder:text-sand/70 outline-none transition-colors duration-200";

  const labelClass = "block text-[11px] font-semibold uppercase tracking-[0.18em] text-ink/60 mb-2";

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-7">
      <div>
        <label className={labelClass}>{t("contact.name")}</label>
        <input
          {...register("name", { required: true })}
          className={inputClass}
          placeholder={t("contact.name")}
        />
        {errors.name && (
          <span className="text-[11px] text-red-500 mt-1.5 block">Required</span>
        )}
      </div>

      <div>
        <label className={labelClass}>{t("contact.email")}</label>
        <input
          type="email"
          {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
          className={inputClass}
          placeholder="email@example.com"
        />
        {errors.email && (
          <span className="text-[11px] text-red-500 mt-1.5 block">Valid email required</span>
        )}
      </div>

      <div>
        <label className={labelClass}>{t("contact.type")}</label>
        <select
          {...register("projectType", { required: true })}
          className={`${inputClass} cursor-pointer`}
        >
          <option value="">{t("contact.type")}</option>
          <option value="residential">{t("contact.type.residential")}</option>
          <option value="commercial">{t("contact.type.commercial")}</option>
          <option value="other">{t("contact.type.other")}</option>
        </select>
      </div>

      <div>
        <label className={labelClass}>{t("contact.location")}</label>
        <input
          {...register("location")}
          className={inputClass}
          placeholder={t("contact.location")}
        />
      </div>

      <div>
        <label className={labelClass}>{t("contact.message")}</label>
        <textarea
          {...register("message", { required: true })}
          rows={5}
          className={`${inputClass} resize-none leading-relaxed`}
          placeholder={t("contact.message.placeholder")}
        />
        {errors.message && (
          <span className="text-[11px] text-red-500 mt-1.5 block">Required</span>
        )}
      </div>

      <div className="pt-2">
        <button
          type="submit"
          disabled={status === "sending"}
          className="btn-primary disabled:opacity-50 w-full md:w-auto"
        >
          {status === "sending" ? "..." : t("contact.submit")}
        </button>
      </div>

      {status === "success" && (
        <p className="text-[14px] text-az-brand font-medium">{t("contact.success")}</p>
      )}
      {status === "error" && (
        <p className="text-[14px] text-red-600">{t("contact.error")}</p>
      )}
    </form>
  );
}
