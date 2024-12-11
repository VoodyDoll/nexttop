
export default async function Page() {
    let res=await fetch(`http://localhost:3000/dashboard/api/books`)
    let books=res.json()
    return(
        <main>
<p>
    {books.title}
    {/* {books.map((item)=>{

    return(
        <p>{item.title}</p>
    )
})} */}
</p>

        </main>
    )
}

// // import Link from "next/link";
// async function getData() {
//     const res = await fetch(`http://localhost:5000/dashboard/api/books`)
//     // Возвращаемое значение не сериализуется,
//     // что позволяет возвращать Date, Map, Set и др.

//     if (!res.ok) {
//         // Это активирует ближайшего предохранителя `error.js`
//         throw new Error('Провал получения данных')
//     }

//     return res.text()
// }
// export default async function Page() {
//     const data = await getData()
// // console.log(data)
//     return <main>
       
//         <center>
//             <p>{data}</p>

//         {/* {data.map((item) => {
//             return (
//                 <p><Link href={`loopo/${item.id}`}>{item.id}</Link></p>
//                 // href={'abaut'}
//                 // <p>Link{item.id}</p>
//             )
//         })} */}
//     </center>
//     </main>
// }