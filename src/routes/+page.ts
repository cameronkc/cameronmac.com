import type { PageLoad } from "./$types"
import type { Post } from "@prisma/client"
export const load: PageLoad = async ({ fetch }) => {
    const response = await fetch('api/posts')
    const posts: Post[] = await response.json()
    return { posts }
}