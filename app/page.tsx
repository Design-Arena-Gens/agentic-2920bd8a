"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  ShieldCheck,
  Sparkles,
  Stars,
  Zap
} from "lucide-react";
import styles from "./page.module.css";

const tools = [
  {
    title: "Merge PDFs",
    description:
      "Combine multiple documents into a single masterpiece with adaptive compression and smart pagination.",
    accent: "merge",
    illustration: "/illustrations/merge-stack.svg"
  },
  {
    title: "AI Refine",
    description:
      "Rewrite, summarize, and translate text directly inside each page with tone-aware AI workflows.",
    accent: "ai",
    illustration: "/illustrations/ai-refine.svg"
  },
  {
    title: "Signature Suite",
    description:
      "Collect legally binding e-signatures with branded request flows and audit-ready tracking.",
    accent: "sign",
    illustration: "/illustrations/signature-suite.svg"
  }
];

const automations = [
  {
    title: "Drag. Drop. Done.",
    description:
      "Upload from desktop, cloud storage, or URL import. Files auto-scan for issues and start processing instantly."
  },
  {
    title: "Smart Pipelines",
    description:
      "Chain multiple actions in a single flow—compress, watermark, restructure, and export in one click."
  },
  {
    title: "Collaborative Review",
    description:
      "Invite teammates to annotate, comment, and approve with version control baked in."
  }
];

const testimonials = [
  {
    name: "Radhika Malhotra",
    role: "Legal Operations, LumaCorp",
    quote:
      "We ship 10x faster with the automation studio. The interface feels like a flagship design tool—not a dusty PDF utility."
  },
  {
    name: "Ankit Sharma",
    role: "Marketing Lead, NeonDesk",
    quote:
      "Our brand team loves the 3D dashboards and live preview. Clients think we built a custom solution."
  }
];

const pricing = [
  {
    title: "Creator",
    price: "₹699",
    cadence: "per month",
    highlight: false,
    perks: [
      "All core PDF tools",
      "Up to 200 exports / month",
      "Brand colors & typography",
      "Live collaboration (3 seats)"
    ]
  },
  {
    title: "Pro Studio",
    price: "₹1,499",
    cadence: "per month",
    highlight: true,
    perks: [
      "Unlimited workflows",
      "AI content refinement",
      "Advanced e-signatures",
      "Workspace automations",
      "Priority concierge support"
    ]
  },
  {
    title: "Enterprise",
    price: "Talk to us",
    cadence: "Tailored plans",
    highlight: false,
    perks: [
      "Dedicated success squad",
      "Custom security posture",
      "On-premise connectors",
      "White-label portals"
    ]
  }
];

export default function HomePage() {
  return (
    <main>
      <section className={styles.heroSection}>
        <div className={`${styles.heroPanel} glass-panel`}>
          <motion.span
            className={styles.heroBadge}
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6, ease: "easeOut" }}
          >
            <Sparkles size={18} /> Meet the premium PDF studio
          </motion.span>
          <motion.h1
            className={styles.heroTitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
          >
            A dynamic universe for designing <span>luxury PDFs</span>.
          </motion.h1>
          <motion.p
            className={styles.heroSubtitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
          >
            Reimagine document crafting with immersive 3D dashboards, AI-driven
            enhancements, and lightning-fast automations. Your PDFs deserve the
            same level of polish as your brand.
          </motion.p>

          <motion.div
            className={styles.heroActions}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
          >
            <Link href="#pricing" className="cta-button">
              Start free trial <ArrowRight size={18} />
            </Link>
            <Link href="#features" className="subtle-button">
              View product tour <Stars size={18} />
            </Link>
          </motion.div>

          <motion.dl
            className={styles.heroStats}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <div>
              <dt>Processing speed</dt>
              <dd>14× faster</dd>
            </div>
            <div>
              <dt>Customer satisfaction</dt>
              <dd>98% CSAT</dd>
            </div>
            <div>
              <dt>Documents automated</dt>
              <dd>5M+/year</dd>
            </div>
          </motion.dl>
        </div>

        <motion.div
          className={`${styles.heroVisual} glass-panel`}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.25, duration: 0.7, ease: "easeOut" }}
        >
          <div className={styles.visualBackdrop} />
          <Image
            src="/illustrations/hero-console.svg"
            alt="3D dashboard illustrating PDF workflows"
            width={630}
            height={520}
            priority
            className={styles.heroImage}
          />
        </motion.div>
      </section>

      <section id="features" className={styles.featuresSection}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionEyebrow}>Signature toolkit</span>
          <h2 className="section-title">Dynamic workflows crafted for creators</h2>
          <p className="section-subtitle">
            Every tool is reimagined with cinematic visuals, 3D depth, and deep
            automation so you can elevate documents without leaving the canvas.
          </p>
        </div>

        <div className={styles.toolGrid}>
          {tools.map((tool) => (
            <motion.article
              key={tool.title}
              className={`${styles.toolCard} glass-panel ${styles[`accent-${tool.accent}`]}`}
              whileHover={{ y: -10, rotateX: 2, rotateY: -2 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
            >
              <div className={styles.toolIllustration}>
                <Image
                  src={tool.illustration}
                  alt={tool.title}
                  width={320}
                  height={220}
                  className={styles.illustration}
                />
              </div>
              <h3>{tool.title}</h3>
              <p>{tool.description}</p>
              <span className={styles.toolCta}>
                Launch workflow <ArrowRight size={18} />
              </span>
            </motion.article>
          ))}
        </div>
      </section>

      <section className={styles.automationSection}>
        <div className={`${styles.automationPanel} glass-panel`}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionEyebrow}>Automation studio</span>
            <h2 className="section-title">
              Orchestrate signature-ready documents with one flow.
            </h2>
            <p className="section-subtitle">
              Build branching automations with live previews, 3D visual cues, and
              AI suggestions that keep every team in sync.
            </p>
          </div>

          <ul className={styles.automationList}>
            {automations.map((step, index) => (
              <li key={step.title}>
                <div className={styles.stepBadge}>
                  <span>{index + 1}</span>
                  <Zap size={18} />
                </div>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className={`${styles.securityPanel} glass-panel`}>
          <div className={styles.securityBadge}>
            <ShieldCheck size={22} />
            Enterprise-grade security
          </div>
          <Image
            src="/illustrations/security-hub.svg"
            alt="Security console illustration"
            width={400}
            height={320}
          />
          <div className={styles.securityCopy}>
            <h3>Zero-trust encryption for every workflow.</h3>
            <p>
              SOC 2 Type II, GDPR ready, and compliant with India&apos;s DPDP
              regulations. SSO, granular permissions, and audit trails come
              standard.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.testimonialSection}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionEyebrow}>Loved by creators</span>
          <h2 className="section-title">Designed for teams who obsess over detail.</h2>
        </div>
        <div className={styles.testimonialGrid}>
          {testimonials.map((item) => (
            <motion.blockquote
              key={item.name}
              className={`${styles.testimonialCard} glass-panel`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <p>“{item.quote}”</p>
              <footer>
                <span>{item.name}</span>
                <small>{item.role}</small>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </section>

      <section id="pricing" className={styles.pricingSection}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionEyebrow}>Pricing</span>
          <h2 className="section-title">Choose the studio built for your ambition.</h2>
        </div>
        <div className={styles.pricingGrid}>
          {pricing.map((plan) => (
            <motion.article
              key={plan.title}
              className={`${styles.pricingCard} glass-panel ${
                plan.highlight ? styles.pricingHighlight : ""
              }`}
              whileHover={{ y: -6 }}
            >
              <div className={styles.pricingHeader}>
                <h3>{plan.title}</h3>
                <p>{plan.cadence}</p>
              </div>
              <div className={styles.pricingValue}>
                <span>{plan.price}</span>
              </div>
              <ul>
                {plan.perks.map((perk) => (
                  <li key={perk}>
                    <Check size={18} />
                    {perk}
                  </li>
                ))}
              </ul>
              <Link href="#" className={plan.highlight ? "cta-button" : "subtle-button"}>
                {plan.highlight ? "Start with Pro Studio" : "Choose plan"}
              </Link>
            </motion.article>
          ))}
        </div>
      </section>

      <section className={`${styles.ctaSection} glass-panel`}>
        <motion.div
          className={styles.ctaContent}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span className={styles.ctaBadge}>
            <Sparkles size={18} /> Elevate every document
          </span>
          <h2>Bring premium craftsmanship to every PDF you share.</h2>
          <p>
            Launch signature-ready proposals, polished brochures, and legal-grade
            contracts inside a single dynamic studio.
          </p>
          <div className={styles.ctaActions}>
            <Link href="#" className="cta-button">
              Launch your workspace <ArrowRight size={18} />
            </Link>
            <Link href="#" className="subtle-button">
              Explore customization <Sparkles size={18} />
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
