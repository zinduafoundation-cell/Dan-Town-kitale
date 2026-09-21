import { notFound } from "next/navigation"
import TeamProfileEditor from "@/components/team/TeamProfileEditor"
import { teamProfiles } from "@/components/team/teamData"

export function generateStaticParams() {
  return teamProfiles.map((profile) => ({ slug: profile.slug }))
}

export default async function TeamProfilePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const profile = teamProfiles.find((item) => item.slug === slug)
  if (!profile) notFound()
  return <TeamProfileEditor profile={profile} />
}
