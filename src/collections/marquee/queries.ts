import { getPayload } from 'payload'
import config from '@/payload.config'

export async function getMarqueeLogos() {
  const payload = await getPayload({ config })

  try {
    const marqueeData = await payload.find({
      collection: 'marquee',
      limit: 1,
      depth: 1,
    })

    return marqueeData.docs[0] || null
  } catch (error) {
    console.error('Error fetching marquee logos:', error)
    return null
  }
}
