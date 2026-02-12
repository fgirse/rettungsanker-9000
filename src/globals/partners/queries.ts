import { getPayload } from 'payload'
import config from '@/payload.config'

export async function getPartners() {
  const payload = await getPayload({ config })

  try {
    const partners = await payload.findGlobal({
      slug: 'partners',
      depth: 2, // Ensure media relationship is fully populated
    })

    return partners
  } catch (error) {
    console.error('Error fetching partners:', error)
    return null
  }
}
