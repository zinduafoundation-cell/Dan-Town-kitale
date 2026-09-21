"use client"

import Image from "next/image"
import Link from "next/link"
import { ChangeEvent, useEffect, useState } from "react"
import { ArrowLeft, ArrowRight, Camera, CheckCircle2, MessageCircle, Phone, Upload } from "lucide-react"
import type { TeamProfile } from "./teamData"

type Props = { profile: TeamProfile }

export default function TeamProfileEditor({ profile }: Props) {
  const [preview, setPreview] = useState("")
  const [saved, setSaved] = useState(false)

  useEffect(() => () => { if (preview) URL.revokeObjectURL(preview) }, [preview])

  function handleUpload(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0]
    if (!file) return
    if (preview) URL.revokeObjectURL(preview)
    setPreview(URL.createObjectURL(file))
    setSaved(false)
  }

  return (
    <main className={`team-single-page team-single-${profile.accent}`}>
      <section className="team-single-hero">
        <div className="team-single-hero-image" style={{ backgroundImage: `linear-gradient(90deg, rgba(5,5,5,.94), rgba(5,5,5,.38)), url(${profile.image})` }} aria-hidden="true" />
        <div className="container team-single-hero-content">
          <Link href="/team" className="back-link"><ArrowLeft size={16} /> Back to Team Pyramid</Link>
          <span className="team-single-number">{profile.number}</span>
          <span className="section-kicker">{profile.label}</span>
          <h1>{profile.title}</h1>
          <p>{profile.summary}</p>
          <div className="team-single-actions"><Link href="/contact" className="btn btn-primary">Contact this team <ArrowRight size={17} /></Link><a href="https://wa.me/254745917655" className="btn btn-secondary"><MessageCircle size={17} /> WhatsApp</a></div>
        </div>
      </section>

      <section className="section">
        <div className="container team-single-grid">
          <div className="team-upload-panel">
            <div className="team-upload-frame" style={preview ? { backgroundImage: `url(${preview})` } : undefined}>
              {!preview && <Image src={profile.image} alt={profile.title} fill sizes="(max-width: 800px) 100vw, 50vw" />}
              <div className="team-upload-overlay"><Camera size={24} /><span>{preview ? "Uploaded preview" : "Add approved staff photo"}</span></div>
            </div>
            <label className="team-upload-button"><Upload size={16} /> Upload a staff picture<input type="file" accept="image/png,image/jpeg,image/webp" onChange={handleUpload} /></label>
            <p className="team-upload-note">Preview only: the selected image stays in this browser until permanent storage is connected.</p>
          </div>
          <div className="team-single-content">
            <span className="section-kicker">Role profile</span>
            <h2>What this part of Dantown does.</h2>
            <p>{profile.summary}</p>
            <div className="team-responsibility-list">{profile.responsibilities.map((item) => <div key={item}><CheckCircle2 size={17} /> {item}</div>)}</div>
            <div className="team-profile-note"><strong>Staff details</strong><span>Names, direct numbers and personal profiles can be added here once approved by the business.</span></div>
            <button type="button" className="btn btn-primary" onClick={() => setSaved(true)}>{saved ? "Profile note saved" : "Save profile note"}</button>
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container team-single-contact"><div><span className="section-kicker">Official route</span><h2>Start the conversation here.</h2></div><div className="team-single-contact-links"><a href="tel:+254745917655"><Phone size={17} /> 07 4591 7655</a><a href="https://wa.me/254745917655"><MessageCircle size={17} /> WhatsApp Dantown</a></div></div>
      </section>
    </main>
  )
}
