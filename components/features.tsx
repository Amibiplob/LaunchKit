import { Code2, Moon, Palette, ShieldCheck, Smartphone, Zap } from "lucide-react";
import { features } from "@/lib/site";

const icons = {zap:Zap,palette:Palette,smartphone:Smartphone,moon:Moon,code:Code2,shield:ShieldCheck};
export function Features() {
  return <section className="section features-section" id="features"><div className="container"><div className="section-heading"><span className="eyebrow">BUILT FOR BUILDERS</span><h2>Everything you need to <span className="gradient-text">stand out.</span></h2><p>Thoughtfully crafted sections, a delightful user experience, and a foundation you can make your own.</p></div><div className="features-grid">{features.map(feature=>{const Icon=icons[feature.icon];return <article className="feature-card" key={feature.title}><div className="feature-icon"><Icon size={22}/></div><h3>{feature.title}</h3><p>{feature.description}</p></article>})}</div></div></section>;
}
