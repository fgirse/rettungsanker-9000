import { getPartners } from '@/globals/partners/queries'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const partnersData = await getPartners()
    return NextResponse.json({ partners: partnersData?.partners || [] })
  } catch (error) {
    console.error('Error fetching partners:', error)
    return NextResponse.json({ partners: [] }, { status: 500 })
  }
}
