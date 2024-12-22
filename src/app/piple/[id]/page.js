export async function generateStaticParams() {
    const posts = await fetch(`http://localhost:5000/1`).then((res) => res.json())
   
    return posts.map((post) => ({
      id: post.id,
    }))
  }