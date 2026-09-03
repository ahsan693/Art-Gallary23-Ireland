"use client";

import { type FormEvent, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { getContactData } from "@/app/lib/data/supportdata";

type ContactData = Awaited<ReturnType<typeof getContactData>>;

// ==========================================
// SVGS & HELPERS
// ==========================================

export function ResponsiveImage({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  return (
    <span className={`relative block h-full w-full overflow-hidden ${className}`}>
      <Image src={src} alt={alt} fill sizes="100vw" className="object-cover" />
    </span>
  );
}

const getIcon = (iconType: string) => {
  switch (iconType) {
    case "pin": return <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z" />;
    case "phone": return <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />;
    case "mail": return <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />;
    case "clock": return <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />;
    default: return null;
  }
};

// Helper function to return SVG social icons based on label
const getSocialIcon = (label: string) => {
  const lower = label.toLowerCase();

  // Instagram
  if (lower.includes("instagram") || lower === "ig") {
    return (
      <svg className="size-[22px] transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
      </svg>
    );
  }

  // Twitter / X
  if (lower.includes("twitter") || lower.includes("x") || lower === "tw") {
    return (
      <svg className="size-[22px] transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
      </svg>
    );
  }

  // Facebook
  if (lower.includes("facebook") || lower === "fb") {
    return (
      <svg className="size-[22px] transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
      </svg>
    );
  }

  // LinkedIn (Assuming IN means LinkedIn)
  if (lower.includes("linkedin") || lower === "in") {
    return (
      <svg className="size-[22px] transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
        <rect x="2" y="9" width="4" height="12"></rect>
        <circle cx="4" cy="4" r="2"></circle>
      </svg>
    );
  }

  // Fallback in case of an unknown social network
  return <span className="body-small font-bold">{label}</span>;
};

// ==========================================
// ANIMATED COUNTER COMPONENT
// ==========================================
function AnimatedCounter({ target, suffix = "", duration = 2000 }: { target: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let startTime: number | null = null;
          const step = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            const easeOutProgress = 1 - (1 - progress) * (1 - progress);
            setCount(Math.floor(easeOutProgress * target));
            if (progress < 1) window.requestAnimationFrame(step);
            else setCount(target);
          };
          window.requestAnimationFrame(step);
        }
      },
      { threshold: 0.3 }
    );
    if (elementRef.current) observer.observe(elementRef.current);
    return () => observer.disconnect();
  }, [target, duration, hasAnimated]);

  return (
    <h3 ref={elementRef} className="heading-display text-white leading-none">
      {count.toLocaleString()}{suffix}
    </h3>
  );
}

// ==========================================
// MAIN CONTACT COMPONENT
// ==========================================
export default function ContactUsComponent({ data }: { data: ContactData }) {
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  if (!data) return <div className="min-h-screen bg-warm-cream" />;

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const subject = String(formData.get("subject") ?? "");
    const message = String(formData.get("message") ?? "").trim();
    const errors: Record<string, string> = {};

    if (name.length < 2) errors.name = "Enter your full name.";
    if (!/^\S+@\S+\.\S+$/.test(email)) errors.email = "Enter a valid email address.";
    if (!subject) errors.subject = "Choose an enquiry topic.";
    if (message.length < 10) errors.message = "Enter a message of at least 10 characters.";

    setFormErrors(errors);
    if (Object.keys(errors).length) return;

    const body = `Name: ${name}\nEmail: ${email}\nTopic: ${subject}\n\n${message}`;
    window.location.href = `mailto:hello@gallery23.com?subject=${encodeURIComponent(`Gallery 23 enquiry: ${subject}`)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="flex min-h-screen flex-col bg-warm-cream text-primary overflow-x-hidden">

      <main className="flex w-full flex-1 flex-col items-center">

        {/* --- 1. HERO SECTION --- */}
        <section className="relative flex h-[495px] w-full flex-col items-center justify-center overflow-hidden lg:h-[600px]">
          <div className="absolute inset-0 z-0 w-full h-full">
            <Image src={data.hero.image} alt={data.hero.imageAlt} fill priority className="object-cover" sizes="100vw" />
          </div>
          <div className="absolute inset-0 z-10 bg-black/10" />

          {/* Constrained Container */}
          <div className="relative z-20 mx-auto flex w-full max-w-[1440px] px-[24px] py-[64px] lg:px-[80px] lg:py-[80px] flex-col items-center gap-[24px] text-center text-white">
            <h1 className="heading-display w-full text-white">
              {data.hero.title}
            </h1>
            <p className="body-large w-full max-w-[600px] text-white/90">
              {data.hero.subtitle}
            </p>
          </div>
        </section>

        {/* --- 2. CONTACT INFO & FORM SECTION --- */}
        <section className="w-full bg-warm-cream flex justify-center py-[56px] lg:py-[100px]">
          <div className="mx-auto flex w-full max-w-[1440px] flex-col items-start gap-[48px] px-[20px] lg:flex-row lg:justify-between lg:gap-[80px] lg:px-[120px]">

            {/* Left: Contact Info */}
            <div className="flex w-full flex-col gap-[40px] lg:max-w-[480px]">
              <div className="flex flex-col gap-[16px]">
                <h2 className="heading-h3 text-primary">
                  {data.contactInfo.title}
                </h2>
                <p className="body-text text-secondary">
                  {data.contactInfo.description}
                </p>
              </div>

              <div className="flex flex-col gap-[32px]">
                {data.contactInfo.details.map((detail, i) => (
                  <div key={i} className="flex items-start gap-[16px]">
                    <div className="mt-[4px] shrink-0 text-forest-green">
                      <svg className="size-[20px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        {getIcon(detail.iconType)}
                      </svg>
                    </div>
                    <div className="flex flex-col gap-[16px]">
                      {detail.items.map((item, idx) => (
                        <div key={idx}>
                          <p className="body-small font-bold text-primary uppercase">{item.label}</p>
                          {detail.iconType === "phone" || detail.iconType === "mail" ? (
                            <a href={`${detail.iconType === "phone" ? "tel:" : "mailto:"}${detail.iconType === "phone" ? item.value.replace(/[^\d+]/g, "") : item.value}`} className="body-small whitespace-pre-line text-secondary hover:text-forest-green">
                              {item.value}
                            </a>
                          ) : <p className="body-small text-secondary whitespace-pre-line">{item.value}</p>}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Icons with Interactive Hover Effects */}
              <div className="flex flex-col gap-[12px]">
                <p className="micro font-bold uppercase tracking-widest text-primary">{data.contactInfo.socialHeading}</p>
                <div className="flex gap-[16px]">
                  {data.contactInfo.socials.map((social, i) => (
                    <Link key={i} href={social.url} className="group flex size-[48px] items-center justify-center rounded-full border border-[#D5D5D5] bg-white text-forest-green transition-all duration-300 hover:-translate-y-1 hover:border-forest-green hover:bg-forest-green hover:text-white hover:shadow-md active:scale-95">
                      {getSocialIcon(social.label)}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="w-full lg:max-w-[600px]">
              <div className="card flex w-full flex-col gap-[24px] p-[24px] sm:gap-[32px] sm:p-[48px]">
                <div className="flex flex-col gap-[8px]">
                  <h3 className="heading-h8 text-primary">{data.form.title}</h3>
                  <p className="body-small text-secondary">{data.form.description}</p>
                </div>

                <form className="flex flex-col gap-[20px]" noValidate onSubmit={handleSubmit}>
                  {Object.keys(formErrors).length > 0 ? (
                    <p className="body-small rounded-[8px] border border-red-300 bg-red-50 px-[16px] py-[12px] text-red-700" role="alert">
                      Please correct the highlighted fields before sending your message.
                    </p>
                  ) : null}
                  <div className="flex flex-col gap-[8px]">
                    <label htmlFor="contact-name" className="caption font-bold text-primary">{data.form.fields.name.label}</label>
                    <input id="contact-name" name="name" type="text" autoComplete="name" placeholder={data.form.fields.name.placeholder} aria-invalid={Boolean(formErrors.name)} aria-describedby={formErrors.name ? "contact-name-error" : undefined} className={`h-[50px] rounded-[8px] border px-[16px] body-small outline-none transition-colors duration-300 hover:border-[#84A59D] focus:border-forest-green bg-white ${formErrors.name ? "border-red-600" : "border-border"}`} />
                    {formErrors.name ? <p id="contact-name-error" className="caption text-red-700">{formErrors.name}</p> : null}
                  </div>
                  <div className="flex flex-col gap-[8px]">
                    <label htmlFor="contact-email" className="caption font-bold text-primary">{data.form.fields.email.label}</label>
                    <input id="contact-email" name="email" type="email" autoComplete="email" placeholder={data.form.fields.email.placeholder} aria-invalid={Boolean(formErrors.email)} aria-describedby={formErrors.email ? "contact-email-error" : undefined} className={`h-[50px] rounded-[8px] border px-[16px] body-small outline-none transition-colors duration-300 hover:border-[#84A59D] focus:border-forest-green bg-white ${formErrors.email ? "border-red-600" : "border-border"}`} />
                    {formErrors.email ? <p id="contact-email-error" className="caption text-red-700">{formErrors.email}</p> : null}
                  </div>
                  <div className="flex flex-col gap-[8px]">
                    <label htmlFor="contact-subject" className="caption font-bold text-primary">{data.form.fields.subject.label}</label>
                    <select id="contact-subject" name="subject" defaultValue="" aria-invalid={Boolean(formErrors.subject)} aria-describedby={formErrors.subject ? "contact-subject-error" : undefined} className={`h-[50px] rounded-[8px] border px-[16px] body-small text-secondary outline-none transition-colors duration-300 hover:border-[#84A59D] focus:border-forest-green bg-white cursor-pointer appearance-none ${formErrors.subject ? "border-red-600" : "border-border"}`}>
                      <option value="" disabled>Select a topic</option>
                      {data.form.subjects.map((subject: string, idx: number) => (
                        <option key={idx}>{subject}</option>
                      ))}
                    </select>
                    {formErrors.subject ? <p id="contact-subject-error" className="caption text-red-700">{formErrors.subject}</p> : null}
                  </div>
                  <div className="flex flex-col gap-[8px]">
                    <label htmlFor="contact-message" className="caption font-bold text-primary">{data.form.fields.message.label}</label>
                    <textarea id="contact-message" name="message" placeholder={data.form.fields.message.placeholder} aria-invalid={Boolean(formErrors.message)} aria-describedby={formErrors.message ? "contact-message-error" : undefined} className={`h-[120px] resize-y rounded-[8px] border p-[16px] body-small outline-none transition-colors duration-300 hover:border-[#84A59D] focus:border-forest-green bg-white ${formErrors.message ? "border-red-600" : "border-border"}`} />
                    {formErrors.message ? <p id="contact-message-error" className="caption text-red-700">{formErrors.message}</p> : null}
                  </div>
                  {/* Form Submit Button (Green -> Black) */}
                  <button type="submit" className="mt-[8px] h-[56px] w-full rounded-[12px] bg-forest-green body-text font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-primary hover:shadow-lg active:scale-95">
                    {data.form.submitText}
                  </button>
                </form>
              </div>
            </div>

          </div>
        </section>

        {/* --- 3. MAP SECTION --- */}
        <section className="relative w-full flex h-[454px] items-center justify-center overflow-hidden bg-warm-cream lg:h-[600px]">
          <iframe
            src={data.map.embedUrl}
            className="absolute inset-0 h-full w-full border-0 grayscale opacity-90 transition-all duration-500 hover:grayscale-0 hover:opacity-100"
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={data.map.embedTitle}
          />

        </section>

        {/* --- 4. STATS SECTION --- */}
        <section className="relative flex w-full flex-col items-center justify-center overflow-hidden py-[80px] lg:py-[196px]">
          <div className="absolute inset-0 z-0">
            <Image src={data.stats.image} alt={data.stats.imageAlt} fill className="object-cover" sizes="100vw" />
          </div>
          <div className="absolute inset-0 z-10 bg-black/10" />

          {/* Constrained Container */}
          <div className="relative z-20 mx-auto flex w-full max-w-[1440px] px-[24px] lg:px-[64px] flex-col items-center gap-[48px] text-center text-white lg:gap-[64px]">
            <div className="flex flex-col gap-[8px]">
              <h2 className="heading-h2 text-white">
                {data.stats.title}
              </h2>
              <p className="body-large text-white/80">
                {data.stats.subtitle}
              </p>
            </div>

            <div className="grid w-full max-w-[1000px] grid-cols-1 gap-[48px] sm:grid-cols-3 sm:gap-[24px]">
              {data.stats.metrics.map((metric, i) => (
                <div key={i} className="flex flex-col items-center gap-[8px]">
                  <AnimatedCounter target={metric.target} suffix={metric.suffix} />
                  <p className="micro font-bold uppercase tracking-widest text-white">
                    {metric.title}
                  </p>
                  <p className="body-small text-white/80">
                    {metric.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- 5. FAQ SECTION --- */}
        <section className="w-full bg-warm-cream flex justify-center py-[56px] lg:py-[100px]">
          <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center gap-[32px] px-[24px] lg:flex-row lg:items-stretch lg:justify-center lg:gap-[64px] lg:px-[120px]">
            <div className="relative h-[220px] w-full max-w-[480px] shrink-0 overflow-hidden rounded-[24px] sm:h-[500px] lg:h-auto">
              <ResponsiveImage src={data.faq.image} alt={data.faq.imageAlt} />
            </div>

            <div className="flex w-full max-w-[680px] flex-col gap-[40px]">
              <h2 className="heading-h3 text-primary">
                {data.faq.title}
              </h2>

              <div className="flex flex-col gap-[16px]">
                {data.faq.questions.map((faq, index) => (
                  <details key={index} className="card group flex flex-col gap-[16px] p-[20px] sm:p-[32px] cursor-pointer transition-all duration-300 hover:border-[#84A59D] active:scale-[0.99]">
                    <summary className="flex items-start justify-between gap-[16px] list-none [&::-webkit-details-marker]:hidden">
                      <h3 className="heading-h9 font-semibold text-primary transition-colors duration-300 group-hover:text-forest-green">{faq.q}</h3>
                      <button className="mt-[2px] shrink-0 text-primary transition-transform duration-300 group-open:rotate-45 group-hover:text-forest-green">
                        <svg className="size-[20px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" /></svg>
                      </button>
                    </summary>
                    <p className="mt-[4px] body-text text-secondary opacity-0 transition-opacity duration-300 group-open:opacity-100">{faq.a}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* --- 6. CTA SECTION --- */}
        <section className="relative w-full flex min-h-[500px] flex-col items-center justify-center overflow-hidden py-[80px] lg:h-[565px] lg:min-h-0 lg:py-[150px]">
          <div className="absolute inset-0 z-0">
            <Image src={data.cta.image} alt={data.cta.imageAlt} fill className="object-cover" sizes="100vw" />
          </div>
          <div className="absolute inset-0 z-10 bg-black/10" />

          <div className="relative z-20 mx-auto flex w-full max-w-[1440px] px-[24px] lg:px-[80px] flex-col items-center gap-[28px] text-center text-white lg:gap-[32px]">
            <div className="flex flex-col items-center gap-[16px]">
              <h2 className="heading-h2 text-white">
                {data.cta.title}
              </h2>
              <p className="body-large text-white/90">
                {data.cta.subtitle}
              </p>
            </div>

            {/* Interactive Button (Green -> Black) */}
            <Link href={data.cta.buttonLink} className="group flex h-[48px] w-max items-center justify-center gap-[12px] rounded-full bg-forest-green px-[32px] button-small font-bold uppercase tracking-wide text-white transition-all duration-300 hover:-translate-y-1 hover:bg-primary hover:shadow-lg active:scale-95">
              <span>{data.cta.buttonText}</span>
              <svg className="size-[16px] shrink-0 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </section>

      </main>

    </div>
  );
}