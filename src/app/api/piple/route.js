import {NextResponse} from 'next/server'
export async function GET() {
    return NextResponse.json({

        hellow:[
            {name:'god',age:12}
        ]

    })
}

export async function POST() {
    // let dogy=await request.json()
    return NextResponse.json({
        dogy:[
            {name:'gor',age:'hhhh'}
        ]
    })
}




// export async function POST(request) {
//     let dogy=await request.json()
//     return NextResponse.json({
//         dogy
//     })
// }

// import { NextResponse } from 'next/server'
 
// return NextResponse.redirect(new URL('/api', request.url))

// export async function POST(request) {
//     let data = await request.text()
//     return NextResponse.text({

//       data

//     })
// }