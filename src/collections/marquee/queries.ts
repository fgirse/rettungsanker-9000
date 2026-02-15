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

    const doc = marqueeData.docs[0]
    console.log('Raw marquee data:', JSON.stringify(doc, null, 2))

    if (!doc) {
      console.log('No marquee document found')
      return null
    }

    return doc
  } catch (error) {
    console.error('Error fetching marquee logos:', error)
    return null
  }
}
