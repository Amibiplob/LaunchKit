import { ArrowRight, ArrowUpRight, CheckCircle2, Play } from "lucide-react";
import { DashboardPreview } from "./dashboard-preview";
import { site } from "@/lib/site";

export function Hero() {
  return <section className="hero" id="home"><div className="hero-glow" aria-hidden="true"/><div className="container hero-container">
    <a className="announcement" href="#features"><span className="announcement-dot"/> Introducing LaunchKit 1.0 <span className="announcement-arrow">Explore features <ArrowRight size={14}/></span></a>
    <h1>Launch your next big idea <span className="gradient-text">beautifully.</span></h1>
    <p className="hero-description">Your product deserves a stunning first impression. A modern, conversion-focused SaaS landing page built to help you go from idea to launch, faster.</p>
    <div className="hero-buttons"><a className="button button-primary" href={site.links.start}>Get started <ArrowUpRight size={18}/></a><a className="button button-outline" href="#preview"><Play size={16}/> See live preview</a></div>
    <div className="hero-trust"><span><CheckCircle2 size={15}/> Responsive design</span><span><CheckCircle2 size={15}/> Easy to customize</span><span><CheckCircle2 size={15}/> Next.js + TypeScript</span></div>
    <div className="preview-frame"><div className="window-top"><div className="window-dots"><i/><i/><i/></div><div className="window-url">app.yourproduct.com/dashboard</div><div className="window-trailing">•••</div></div><DashboardPreview/></div>
    <p className="preview-note">Illustrative dashboard design — replace with your product screenshot.</p>
  </div></section>;
}
