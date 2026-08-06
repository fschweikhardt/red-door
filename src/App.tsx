import { HomePage } from "@/pages/home-page"
import { CoopPage } from "@/pages/coop-page"
import { KidsPage } from "@/pages/kids-page"

function isCoopPath(pathname: string) {
  return pathname === "/church" || pathname === "/church/"
}

function isKidsPath(pathname: string) {
  return pathname === "/kids" || pathname === "/kids/"
}

export default function App() {
  const { pathname } = window.location

  if (isCoopPath(pathname)) {
    return <CoopPage />
  }

  if (isKidsPath(pathname)) {
    return <KidsPage />
  }

  return <HomePage />
}
