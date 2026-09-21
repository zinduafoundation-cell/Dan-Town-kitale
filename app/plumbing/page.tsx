import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle2, Droplets, Home, Phone, Wrench } from "lucide-react"

const plumbingServices = [
  { title: "Water supply", text: "Practical plumbing products and support for water movement around homes, businesses and projects.", icon: Droplets },
  { title: "Fixtures & fittings", text: "A focused place to discuss taps, connections, bathroom requirements and replacement fittings.", icon: Home },
  { title: "Repairs & maintenance", text: "Bring your requirement to the collaboration desk and we can help identify the next practical step.", icon: Wrench },
]

const collaborationSteps = [
  ["01", "Describe the need", "Tell us the room, building or project requirement and what needs attention."],
  ["02", "Choose the right route", "The plumbing side and Dantown electrical side can be coordinated around the same project."],
  ["03", "Plan the supply", "We help organise the products, quantities and timing for a clearer project conversation."],
]

export default function PlumbingPage() {
  return (
    <main className="plumbing-page">
      <section className="plumbing-hero">
        <div className="plumbing-hero-image" aria-hidden="true" />
        <div className="container plumbing-hero-content">
          <div className="section-kicker"><Droplets size={15} /> Dantown collaboration</div>
          <h1>Water works.<br /><span>Power connects.</span></h1>
          <p>A dedicated plumbing collaboration space for homes, businesses and projects, connected to the same trusted Dantown customer experience.</p>
          <div className="plumbing-actions"><Link href="/contact" className="btn btn-primary">Discuss your project <ArrowRight size={17} /></Link><a href="tel:+254745917655" className="btn btn-secondary"><Phone size={17} /> Call Dantown</a></div>
          <div className="plumbing-hero-mark"><strong>PLUMBING</strong><span>COLLABORATION / KITALE</span></div>
        </div>
      </section>

      <section className="section plumbing-intro">
        <div className="container plumbing-intro-grid"><div><span className="section-kicker">A second line of service</span><h2>One project can need more than one kind of expertise.</h2></div><p>The plumbing shop can work as a focused partner alongside Dantown Electrical Kitale. This page gives customers a clear place to start plumbing conversations while keeping the electrical and energy teams close when a project needs both.</p></div>
      </section>

      <section className="section section-muted">
        <div className="container"><div className="section-heading"><span>Plumbing support</span><h2>Simple, practical,<br /><span>ready to discuss.</span></h2></div><div className="plumbing-service-grid">{plumbingServices.map((service) => { const Icon = service.icon; return <article className="plumbing-service-card" key={service.title}><div className="plumbing-service-icon"><Icon size={26} /></div><h3>{service.title}</h3><p>{service.text}</p><Link href="/contact">Ask about this <ArrowRight size={15} /></Link></article> })}</div></div>
      </section>

      <section className="section plumbing-visual-section">
        <div className="container plumbing-visual-grid"><div className="plumbing-visual-image"><Image src="/image/about/shop.webp" alt="Dantown shop and project environment" fill sizes="(max-width: 800px) 100vw, 55vw" /></div><div className="plumbing-visual-copy"><span className="section-kicker">The collaboration advantage</span><h2>Keep the conversation<br /><span>in one place.</span></h2><p>When a project includes water, lighting, electrical supply or energy requirements, customers can begin with one clear enquiry and let the team help organise the next step.</p><div className="plumbing-checks">{["One official contact route", "Kitale-based support", "Clear project conversations", "Electrical and plumbing collaboration"].map((item) => <div key={item}><CheckCircle2 size={17} /> {item}</div>)}</div></div></div>
      </section>

      <section className="section plumbing-process">
        <div className="container"><div className="section-heading"><span>How it works</span><h2>From requirement<br /><span>to response.</span></h2></div><div className="plumbing-process-grid">{collaborationSteps.map(([number, title, text]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div>
      </section>

      <section className="section plumbing-cta"><div className="container plumbing-cta-panel"><div><span className="section-kicker">Plumbing & electrical projects</span><h2>Tell us what you are building.</h2><p>Start with the requirement. We will help you find the clearest route.</p></div><Link href="/request-quote" className="btn btn-primary">Request a quote <ArrowRight size={17} /></Link></div></section>
    </main>
  )
}
