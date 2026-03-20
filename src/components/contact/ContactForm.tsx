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
    "w-full bg-transparent border-b border-bone/50 focus:border-az-brand py-3 text-sm text-carbon placeholder:text-sand-light/60 outline-none transition-colors duration-200";

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8">
      <div>
        <label className="label-upper text-sand-light mb-2 block">
          {t("contact.name")}
        </label>
        <input
          {...register("name", { required: true })}
          className={inputClass}
          placeholder={t("contact.name")}
        />
        {errors.name && (
          <span className="text-[10px] text-red-500 mt-1">Required</span>
        )}
      </div>

      <div>
        <label className="label-upper text-sand-light mb-2 block">
          {t("contact.email")}
        </label>
        <input
          type="email"
          {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
          className={inputClass}
          placeholder="email@example.com"
        />
        {errors.email && (
          <span className="text-[10px] text-red-500 mt-1">Valid email required</span>
        )}
      </div>

      <div>
        <label className="label-upper text-sand-light mb-2 block">
          {t("contact.type")}
        </label>
        <select
          {...register("projectType", { required: true })}
          className={`${inputClass} cursor-pointer`}
        >
          <option value="">{t("contact.type")}</option>
          <option value="residential">{t("contact.type.residential")}</option>
          <option value="commercial">{t("contact.type.commercial")}</option>
          <option value="urban">{t("contact.type.urban")}</option>
          <option value="other">{t("contact.type.other")}</option>
        </select>
      </div>

      <div>
        <label className="label-upper text-sand-light mb-2 block">
          {t("contact.location")}
        </label>
        <input
          {...register("location")}
          className={inputClass}
          placeholder={t("contact.location")}
        />
      </div>

      <div>
        <label className="label-upper text-sand-light mb-2 block">
          {t("contact.message")}
        </label>
        <textarea
          {...register("message", { required: true })}
          rows={5}
          className={`${inputClass} resize-none`}
          placeholder={t("contact.message.placeholder")}
        />
        {errors.message && (
          <span className="text-[10px] text-red-500 mt-1">Required</span>
        )}
      </div>

      <div>
        <button
          type="submit"
          disabled={status === "sending"}
          className="btn-primary disabled:opacity-50"
        >
          {status === "sending"
            ? "..."
            : t("contact.submit")}
        </button>
      </div>

      {status === "success" && (
        <p className="text-xs text-az-brand">{t("contact.success")}</p>
      )}
      {status === "error" && (
        <p className="text-xs text-red-500">{t("contact.error")}</p>
      )}
    </form>
  );
}
