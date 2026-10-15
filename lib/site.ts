/** Edit this file to customize product copy and links. */
export const site = {
  name: "LaunchKit",
  description: "The beautiful, responsive SaaS landing page built to help you launch faster.",
  url: "https://example.com", // Replace before deployment
  email: "hello@example.com", // Replace before deployment
  links: {
    demo: "#preview",
    start: "#pricing",
    github: "https://github.com/", // Replace with your repository
  },
} as const;

export const features = [
  { icon: "zap", title: "Ship faster", description: "Launch your next idea without spending weeks on a marketing website." },
  { icon: "palette", title: "Designed to convert", description: "A clean visual hierarchy guides visitors from curiosity to action." },
  { icon: "smartphone", title: "Responsive by default", description: "A polished experience across phones, tablets, and desktops." },
  { icon: "moon", title: "Dark and light modes", description: "Beautiful themes that adapt to your customer's preferences." },
  { icon: "code", title: "Developer friendly", description: "Modular, typed components that are easy to modify and extend." },
  { icon: "shield", title: "Accessible foundation", description: "Semantic markup, keyboard-friendly controls, and visible focus states." },
] as const;

export const plans = [
  { name: "Starter", price: "$0", period: "/month", description: "Explore the essentials at your own pace.", items: ["1 project", "Basic analytics", "Community support"], cta: "Get started", featured: false, href: "mailto:hello@example.com?subject=Starter%20plan" },
  { name: "Pro", price: "$19", period: "/month", description: "Everything you need to grow your idea.", items: ["Unlimited projects", "Advanced insights", "Priority support", "Custom integrations"], cta: "Start with Pro", featured: true, href: "mailto:hello@example.com?subject=Pro%20plan" },
  { name: "Scale", price: "$49", period: "/month", description: "Tools and support for ambitious teams.", items: ["Everything in Pro", "Team collaboration", "Dedicated onboarding", "Premium support"], cta: "Contact sales", featured: false, href: "mailto:hello@example.com?subject=Scale%20plan" },
] as const;

export const faqs = [
  { question: "Can I customize every section?", answer: "Yes. All sections are React components, and the text, links, colors, and layout can be edited in the source code." },
  { question: "Does the template include a backend?", answer: "No. This is a marketing landing-page template. Payments, authentication, analytics, and databases must be integrated separately." },
  { question: "Does it work on mobile?", answer: "Yes. The navigation, layout, feature grid, and pricing cards adapt to smaller screens." },
  { question: "Can I use it for a commercial project?", answer: "Yes, under the included license. Redistribution or resale of the template as a template is not permitted." },
];
