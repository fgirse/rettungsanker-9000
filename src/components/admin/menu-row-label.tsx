'use client'

import { useRowLabel } from '@payloadcms/ui'

export function MenuRowLabel() {
  const { data } = useRowLabel<{ menuName?: string }>()

  return <div>{data?.menuName || 'Untitled Menu'}</div>
}
