import { HomePage } from "@/pages/home-page"
import { CoopPage } from "@/pages/coop-page"
import { KidsPage } from "@/pages/kids-page"
import { ShowcasePage } from "@/pages/showcase-page"

function isCoopPath(pathname: string) {
  return pathname === "/coop" || pathname === "/coop/"
}

function isKidsPath(pathname: string) {
  return pathname === "/kids" || pathname === "/kids/"
}

function isShowcasePath(pathname: string) {
  return pathname === "/showcase" || pathname === "/showcase/"
}

export default function App() {
  const { pathname } = window.location

  if (isCoopPath(pathname)) {
    return <CoopPage />
  }

  if (isKidsPath(pathname)) {
    return <KidsPage />
  }

  if (isShowcasePath(pathname)) {
    return <ShowcasePage />
  }

  return <HomePage />
}
