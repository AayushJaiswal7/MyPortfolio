import { useState } from "react";
import {
  CheckCircle2,
  Mail,
  MessageSquare,
  Send,
  Tag,
  User,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "@/components/ui/Button";
import { contactData } from "@/constants/contact";
import { siteConfig } from "@/constants/site";
import { cn } from "@/lib/utils";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const initialForm: FormData = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export default function ContactForm() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const nextErrors: Partial<FormData> = {};

    if (!form.name.trim()) nextErrors.name = "Name is required";
    if (!form.email.trim()) {
      nextErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      nextErrors.email = "Enter a valid email";
    }
    if (!form.subject.trim()) nextErrors.subject = "Subject is required";
    if (!form.message.trim()) nextErrors.message = "Message is required";

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!validate()) return;

    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`,
    );
    const subject = encodeURIComponent(form.subject);
    const mailto = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;

    window.location.href = mailto;
    setSubmitted(true);
    setForm(initialForm);
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <div className="glass-card p-6 sm:p-8">
      <div className="mb-6 flex items-center gap-2">
        <Send size={18} className="text-primary" />
        <h3 className="text-card-title font-semibold text-text">
          {contactData.formTitle}
        </h3>
      </div>
      <p className="mb-6 text-caption text-text-secondary">
        {contactData.formSubtitle}
      </p>

      <AnimatePresence mode="wait">
        {submitted ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col items-center py-12 text-center"
          >
            <CheckCircle2 size={48} className="mb-4 text-success" />
            <h4 className="text-lg font-semibold text-text">
              {contactData.successTitle}
            </h4>
            <p className="mt-2 max-w-sm text-caption text-text-secondary">
              {contactData.successMessage}
            </p>
            <Button
              variant="outline"
              size="sm"
              className="mt-6"
              onClick={() => setSubmitted(false)}
            >
              Send another message
            </Button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onSubmit={handleSubmit}
            className="space-y-4"
            noValidate
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="sr-only">Your Name</label>
                <div className="relative">
                  <User
                    size={16}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary"
                  />
                  <input
                    id="name"
                    type="text"
                    placeholder="Your Name"
                    value={form.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    className={cn(
                      "h-11 w-full rounded-input border bg-bg/50 pl-10 pr-4 text-sm text-text placeholder:text-text-secondary/60 transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20",
                      errors.name ? "border-error" : "border-white/10",
                    )}
                  />
                </div>
                {errors.name && (
                  <p className="mt-1 text-xs text-error">{errors.name}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="sr-only">Your Email</label>
                <div className="relative">
                  <Mail
                    size={16}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary"
                  />
                  <input
                    id="email"
                    type="email"
                    placeholder="Your Email"
                    value={form.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    className={cn(
                      "h-11 w-full rounded-input border bg-bg/50 pl-10 pr-4 text-sm text-text placeholder:text-text-secondary/60 transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20",
                      errors.email ? "border-error" : "border-white/10",
                    )}
                  />
                </div>
                {errors.email && (
                  <p className="mt-1 text-xs text-error">{errors.email}</p>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="sr-only">Subject</label>
              <div className="relative">
                <Tag
                  size={16}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary"
                />
                <input
                  id="subject"
                  type="text"
                  placeholder="Subject"
                  value={form.subject}
                  onChange={(e) => handleChange("subject", e.target.value)}
                  className={cn(
                    "h-11 w-full rounded-input border bg-bg/50 pl-10 pr-4 text-sm text-text placeholder:text-text-secondary/60 transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20",
                    errors.subject ? "border-error" : "border-white/10",
                  )}
                />
              </div>
              {errors.subject && (
                <p className="mt-1 text-xs text-error">{errors.subject}</p>
              )}
            </div>

            <div>
              <label htmlFor="message" className="sr-only">Your Message</label>
              <div className="relative">
                <MessageSquare
                  size={16}
                  className="absolute left-3 top-4 text-text-secondary"
                />
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Your Message"
                  value={form.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  className={cn(
                    "w-full resize-none rounded-input border bg-bg/50 py-3 pl-10 pr-4 text-sm text-text placeholder:text-text-secondary/60 transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20",
                    errors.message ? "border-error" : "border-white/10",
                  )}
                />
              </div>
              {errors.message && (
                <p className="mt-1 text-xs text-error">{errors.message}</p>
              )}
            </div>

            <Button type="submit" variant="primary">
              <Send size={16} />
              Send Message
            </Button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
