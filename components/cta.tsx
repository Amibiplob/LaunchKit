import { ArrowUpRight } from "lucide-react";
import { site } from "@/lib/site";
export function CTA(){return <section className="cta-section"><div className="container"><div className="cta-box"><div className="cta-orb orb-one"/><div className="cta-orb orb-two"/><span className="eyebrow">YOUR NEXT CHAPTER</span><h2>Ready to build something <span>amazing?</span></h2><p>Stop overthinking your landing page. Start sharing your product with the world.</p><a className="button button-white" href={site.links.start}>Get started now <ArrowUpRight size={18}/></a></div></div></section>}
