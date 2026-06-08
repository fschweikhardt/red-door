import { HomePage } from "@/pages/home-page"
import { TeamPage } from "@/pages/team-page"
import { ShowcasePage } from "@/pages/showcase-page"

function isTeamPath(pathname: string) {
  return pathname === "/team" || pathname === "/team/"
}

function isShowcasePath(pathname: string) {
  return pathname === "/showcase" || pathname === "/showcase/"
}

export default function App() {
  const { pathname } = window.location

  if (isTeamPath(pathname)) {
    return <TeamPage />
  }

  if (isShowcasePath(pathname)) {
    return <ShowcasePage />
  }

  return <HomePage />
}
