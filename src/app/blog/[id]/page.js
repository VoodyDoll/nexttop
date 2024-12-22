
export default async function Page({ params }) {
    let slug = await params.id

    const res = await fetch(`http://localhost:5000/loopo/${slug}`)
    const posts = await res.json()
    // Возвращаемое значение не сериализуется,
    // что позволяет возвращать Date, Map, Set и др.
    console.log(slug)

    return <div>
       <main>My Post: {posts.title}</main> 

        {/* <style jsx>{`main { color:red }`}</style>   */}
            
              
       
       
    </div>
}