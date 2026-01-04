import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export async function GET() {
    try {
        const cookieStore = await cookies()
        const authToken = cookieStore.get('auth_token')
        
        return NextResponse.json({
            authenticated: !!authToken?.value
        })
    } catch (error) {
        console.error('Error checking auth status:', error)
        return NextResponse.json(
            { authenticated: false },
            { status: 500 }
        )
    }
}
