import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowRight, CheckCircle2, MessageCircle, Phone, ShieldCheck, Users } from "lucide-react"

const profiles = [
  {
    id: "leadership",
    number: "01",
    title: "Dantown Leadership",
    label: "CEO & BUSINESS LEADERSHIP",
    image: "/image/team/management.png",
    description: "The leadership level sets the direction for Dantown Electrical Kitale, protects the quality standard and keeps the customer experience at the centre of every decision.",
    responsibilities: ["Business direction", "Customer trust", "Quality standards", "Partnership decisions"],
  },
  {
    id: "operations",
    number: "02",
    title: "Operations & Project Leads",
    label: "PLANNING & COORDINATION",
    image: "/image/team/management.png",
    description: "Operations turns customer requirements into clear next steps, organised quotations and coordinated project support.",
    responsibilities: ["Requirement planning", "Quotation coordination", "Material organisation", "Project communication"],
  },
  {
    id: "technical",
    number: "03",
    title: "Technical Specialists",
    label: "ELECTRICAL, SOLAR & SECURITY",
    image: "/image/team/technical.png",
    description: "The technical team helps customers understand electrical, solar, lighting and security products in the context of their project.",
    responsibilities: ["Product guidance", "Electrical materials", "Solar and energy support", "Lighting and security"],
  },
  {
    id: "customer-support",
    number: "04",
    title: "Customer Support",
    label: "AVAILABILITY & FOLLOW-UP",
    image: "/image/team/customer-support.png",
    description: "Customer support keeps conversations clear, follows up on requirements and helps connect each enquiry to the right Dantown team.",
    responsibilities: ["Enquiry handling", "Availability checks", "Customer updates", "Follow-up"],
  },
  {
    id: "field",
    number: "05",
    title: "Field & Installation Support",
    label: "PRACTICAL DELIVERY",
    image: "/image/home/security.webp",
    description: "Field support helps translate plans and product decisions into practical work for homes, businesses and projects.",
    responsibilities: ["Site support", "Installation coordination", "Practical requirements", "Project feedback"],
  },
  {
    id: "supply",
    number: "06",
    title: "Supply & Distribution",
    label: "PRODUCTS & PROJECT MATERIALS",
    image: "/image/home/solarcomplet.webp",
    description: "Supply and distribution keeps products organised for individual customers, contractors, retailers and project teams.",
    responsibilities: ["Product preparation", "Bulk requirements", "Collection support", "Distribution coordination"],
  },
  {
    id: "partners",
    number: "07",
    title: "Partners & Contractors",
    label: "COLLABORATION NETWORK",
    image: "/image/brands/Brand.webp",
    description: "Dantown works alongside customers, contractors and trusted project partners to help electrical and energy work move forward.",
    responsibilities: ["Project collaboration", "Shared requirements", "Professional communication", "Reliable handovers"],
  },
]

export default function TeamDetailsPage() {
  return (
    <main className="team-details-page">
      <section className="team-details-hero">
        <div className="team-details-hero-image" aria-hidden="true" />
        <div className="container team-details-hero-content">
          <Link href="/team" className="back-link"><ArrowLeft size={16} /> Back to team pyramid</Link>
          <div className="section-kicker"><Users size={15} /> Dantown people & structure</div>
          <h1>Behind every<br /><span>good connection.</span></h1>
          <p>A closer look at the leadership, specialists, support roles and collaborators who help Dantown Electrical Kitale serve customers.</p>
        </div>
      </section>

      <section className="section team-details-note">
        <div className="container details-note-panel">
          <ShieldCheck size={25} />
          <p>Personal names, direct staff numbers and public ratings are shown only when approved by the business. Until then, this page presents the real responsibilities and official Dantown contact route.</p>
        </div>
      </section>

      <section className="section team-profile-list">
        <div className="container">
          {profiles.map((profile, index) => (
            <article id={profile.id} className={`team-profile ${index % 2 ? "reverse" : ""}`} key={profile.id}>
              <div className="team-profile-image"><Image src={profile.image} alt={profile.title} fill sizes="(max-width: 800px) 100vw, 50vw" /></div>
              <div className="team-profile-content">
                <span className="team-profile-number">{profile.number}</span>
                <span className="section-kicker">{profile.label}</span>
                <h2>{profile.title}</h2>
                <p>{profile.description}</p>
                <ul>{profile.responsibilities.map((item) => <li key={item}><CheckCircle2 size={16} /> {item}</li>)}</ul>
                <Link href="/contact" className="btn btn-primary">Connect with Dantown <ArrowRight size={16} /></Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section team-details-contact">
        <div className="container details-contact-panel">
          <div><span className="section-kicker">Need the right person?</span><h2>Start with the official Dantown team.</h2><p>Share your product, service or project requirement and we will direct it to the right role.</p></div>
          <div className="details-contact-actions"><a href="tel:+254745917655" className="btn btn-primary"><Phone size={17} /> 07 4591 7655</a><a href="https://wa.me/254745917655" className="btn btn-secondary"><MessageCircle size={17} /> WhatsApp</a></div>
        </div>
      </section>
    </main>
  )
}
