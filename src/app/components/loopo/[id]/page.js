import React from 'react'

async function getDat(id) {
    id = Number(id)

    const res = await fetch(`http://localhost:5000/loopo/${id}`)
    // Возвращаемое значение не сериализуется,
    // что позволяет возвращать Date, Map, Set и др.
    
    if (!res.ok) {
        // Это активирует ближайшего предохранителя `error.js`
        throw new Error('Провал получения данных')
    }

    return res.json()
}


export default async function Page({ params }) {
    let { id } = await params
    id = Number(id)
    const data = await getDat(id)
    console.log(data)
    return <main>

        <center>
            {data.map((item) => {
                return (
                    <p>{item.title}</p>
                )
            })}
        </center>
    </main>
}


