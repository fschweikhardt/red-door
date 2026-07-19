const THREADS_API = "https://graph.threads.net/v1.0"

/**
 * Fetch recent posts from the authenticated Threads account.
 * Requires a user access token with the threads_basic permission.
 */
export async function fetchThreadsPosts(accessToken, { limit = 5 } = {}) {
  const params = new URLSearchParams({
    fields: "id,permalink,text,timestamp,media_type",
    limit: String(Math.min(Math.max(limit, 1), 25)),
    access_token: accessToken,
  })

  const response = await fetch(`${THREADS_API}/me/threads?${params}`)

  if (!response.ok) {
    const body = await response.text()
    throw new Error(`Threads API ${response.status}: ${body}`)
  }

  const data = await response.json()

  const posts = (data.data ?? [])
    .filter((post) => typeof post.permalink === "string" && post.permalink.length > 0)
    .map((post) => ({
      id: post.id,
      permalink: post.permalink,
      text: post.text ?? "",
      timestamp: post.timestamp ?? "",
      mediaType: post.media_type ?? "",
    }))

  return { posts, paging: data.paging }
}
