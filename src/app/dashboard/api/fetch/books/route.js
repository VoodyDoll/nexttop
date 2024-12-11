// async function getData() {
//     const res = await fetch(`http://localhost:5000/1`)
//     // Возвращаемое значение не сериализуется,
//     // что позволяет возвращать Date, Map, Set и др.

//     if (!res.ok) {
//         // Это активирует ближайшего предохранителя `error.js`
//         throw new Error('Провал получения данных')
//     }

//     return res.json()
// }



export async function GET () {
    const res = await fetch(`http://localhost:5000/1`)

    return res.json()
}