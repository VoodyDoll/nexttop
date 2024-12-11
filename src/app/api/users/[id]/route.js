
import {NextResponse} from 'next/server'

export async function GET(context) {
    let {params}=context
    return NextResponse.json({
        hellow:params.id
    })
}