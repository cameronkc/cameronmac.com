import { json, type RequestHandler } from "@sveltejs/kit";

import db from '$lib/database'

export const GET: RequestHandler = async (event) => {
    const posts = await db.post.findMany()
    event.setHeaders ({
        'Cache-control': 'max-age=60'
    })
   
    return json(posts)
};
