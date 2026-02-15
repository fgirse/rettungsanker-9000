import { getPayload } from 'payload'
import config from '@/payload.config'

export async function getMarqueeLogos() {
  const payload = await getPayload({ config })

  try {
    const marqueeData = await payload.find({
      collection: 'marquee',
      limit: 1,
      depth: 2,
    })

    console.log('Marquee data fetched:', JSON.stringify(marqueeData.docs[0], null, 2))
    return marqueeData.docs[0] || null
  } catch (error) {
    console.error('Error fetching marquee logos:', error)
    return null
  }
}
