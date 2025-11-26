"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import HCaptcha from "@hcaptcha/react-hcaptcha";

// Schema with English messages
const formSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().email({ message: "Please enter a valid email" }),
  // type_work: z.enum(["education", "saas", "fullstack", "investment", "other"], {
  //   required_error: "Please select a collaboration type",
  //   invalid_type_error: "Invalid collaboration type",
  // }),
  message: z
    .string()
    .min(30, { message: "Message must be at least 30 characters" }),
  file: z.any().optional(),
});

type FormData = z.infer<typeof formSchema>;

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [status, setStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: FormData) => {
    // if (!captchaToken) {
    //   setStatus({ success: false, message: "Please complete the captcha" });
    //   return;
    // }

    // setLoading(true);
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);
    // formData.append("type_work", data.type_work);
    formData.append("message", data.message);
    if (data.file?.[0]) formData.append("file", data.file[0]);
    // formData.append("captchaToken", captchaToken);

    const res = await fetch("/api/contact", {
      method: "POST",
      body: formData,
    });

    const result = await res.json();
    setStatus(result);
    setLoading(false);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-2xl mx-auto p-8 bg-white rounded-xl shadow-lg space-y-6"
    >
      {/* Name */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Full Name
        </label>
        <input
          {...register("name")}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.name && (
          <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Email
        </label>
        <input
          type="email"
          {...register("email")}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.email && (
          <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
        )}
      </div>

      {/* Collaboration Type */}
      {/* <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Collaboration Type
        </label>
        <select
          {...register("type_work")}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Select an option</option>
          <option value="education">Tech Education</option>
          <option value="saas">SaaS Collaboration</option>
          <option value="fullstack">Full-Stack Project</option>
          <option value="investment">Investment Opportunity</option>
          <option value="other">Other</option>
        </select>
        {errors.type_work && (
          <p className="text-red-500 text-xs mt-1">
            {errors.type_work.message}
          </p>
        )}
      </div> */}

      {/* Message */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Your Message
        </label>
        <textarea
          {...register("message")}
          rows={5}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.message && (
          <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>
        )}
      </div>

      {/* File Attachment */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Attachment (Optional - Max 5MB)
        </label>
        <input type="file" {...register("file")} className="w-full" />
      </div>

      <button
        type="submit"
        // disabled={loading || !captchaToken}
        className="w-full bg-linear-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:opacity-90 disabled:opacity-50"
      >
        {loading ? "Sending..." : "Send Message"}
      </button>

      {status && (
        <p
          className={`text-center font-medium ${
            status.success ? "text-green-600" : "text-red-600"
          }`}
        >
          {status.message}
        </p>
      )}
    </form>
  );
}
