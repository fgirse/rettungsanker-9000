import { unstable_cache } from 'next/cache.js'
import { getPayload } from 'payload'
import configPromise from '@/payload.config'

const slug = 'navigation'

export const CACHE_TAG = `global_${slug}`

export async function getNavigation() {
  const payload = await getPayload({ config: configPromise })

  const global = await payload.findGlobal({
    slug,
    depth: 2,
  })

  return global
}

export const getCachedNavigation = unstable_cache(async () => getNavigation(), [slug], {
  tags: [CACHE_TAG],
})
