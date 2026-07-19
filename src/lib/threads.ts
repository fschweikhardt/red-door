export const THREADS_PROFILE_URL = "https://www.threads.com/@reddoorbtown"

export const THREADS_OEMBED_ENDPOINT = "https://graph.threads.net/v1.0/oembed"

export function threadsOEmbedUrl(postUrl: string, maxWidth = 500) {
  const params = new URLSearchParams({
    url: postUrl,
    maxwidth: String(maxWidth),
  })

  return `${THREADS_OEMBED_ENDPOINT}?${params}`
}
