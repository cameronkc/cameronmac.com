import db from "$lib/database";
import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = async (event) =>
{
    const posts = await db.post.findMany({
        select: {
            Id: true,
            title: true,
            slug: true,
            content: true
        },
        take: 4
    })
    return { posts }
}