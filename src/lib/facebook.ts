export const FACEBOOK_PAGE_URL = "https://www.facebook.com/reddoorbloomington"

export function facebookPageEmbedUrl({
  tabs = "timeline",
  width = 500,
  height = 600,
}: {
  tabs?: string
  width?: number
  height?: number
} = {}) {
  const params = new URLSearchParams({
    href: FACEBOOK_PAGE_URL,
    tabs,
    width: String(width),
    height: String(height),
    small_header: "false",
    adapt_container_width: "true",
    hide_cover: "false",
    show_facepile: "true",
  })

  return `https://www.facebook.com/plugins/page.php?${params}`
}
