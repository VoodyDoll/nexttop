import {getAllPosts} from '../../fetch/getall'

export async function generateStaticParams() {
    const posts=await getAllPosts()
    return posts.map((post)=>({
        slug:post.id.toString()
    }))
}

