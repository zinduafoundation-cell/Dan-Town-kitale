import { SunMedium, Zap } from "lucide-react"

export default function PowerGroupMark() {
  return <div className="power-group-mark" aria-label="Dlux Power Group, powered by Dlux Solar Solutions">
    <span className="power-group-mark__icon"><Zap size={17} /><SunMedium size={12} /></span>
    <span><strong>Dlux Power Group</strong><small>Powered by Dlux Solar Solutions</small></span>
  </div>
}