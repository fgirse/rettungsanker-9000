import { getPayload } from 'payload'
import config from '@payload-config'
import AboutClient from './AboutClient'

export default async function About() {
  const payload = await getPayload({ config })

  try {
    const {
      docs: [about],
    } = await payload.find({
      collection: 'about',
      depth: 2, // Ensure media relationships are fully populated
    })

    if (!about) {
      return (
        <div className="flex items-center justify-center min-h-[400px] text-gray-400">
          No About Data Found
        </div>
      )
    }

    return <AboutClient about={about} />
  } catch (error) {
    console.error('Error fetching About data:', error)
    return (
      <div className="flex items-center justify-center min-h-[400px] text-red-400">
        Error loading About section
      </div>
    )
  }
}
