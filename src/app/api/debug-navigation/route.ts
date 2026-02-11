import { NextResponse } from 'next/server'
import { getPayload } from 'payload'
import configPromise from '@/payload.config'

export async function GET() {
  try {
    const payload = await getPayload({ config: configPromise })

    // Get navigation global with full details
    const navigation = await payload.findGlobal({
      slug: 'navigation',
      depth: 2,
    })

    return NextResponse.json({
      success: true,
      data: navigation,
      summary: {
        hasMenuItems: !!navigation.menuItems,
        menuItemsCount: navigation.menuItems?.length || 0,
        menuItemsIsNull: navigation.menuItems === null,
        menuItemsIsUndefined: navigation.menuItems === undefined,
      },
    })
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 },
    )
  }
}
