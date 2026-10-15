"use client";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { faqs } from "@/lib/site";
export function FAQ(){const [active,setActive]=useState<number|null>(0);return <section className="section faq-section" id="faq"><div className="container faq-container"><div className="section-heading"><span className="eyebrow">GOOD TO KNOW</span><h2>Frequently asked <span className="gradient-text">questions.</span></h2><p>Everything you need to know before getting started.</p></div><div className="faq-list">{faqs.map((item,i)=><div key={item.question} className={`faq-item ${active===i?"expanded":""}`}><h3><button type="button" aria-expanded={active===i} aria-controls={`faq-panel-${i}`} onClick={()=>setActive(active===i?null:i)}>{item.question}<ChevronDown size={20}/></button></h3><div id={`faq-panel-${i}`} hidden={active!==i}><p>{item.answer}</p></div></div>)}</div></div></section>}
