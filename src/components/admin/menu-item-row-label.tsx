'use client'

import { useRowLabel } from '@payloadcms/ui'

export function MenuItemRowLabel() {
  const { data } = useRowLabel<{ label?: string; URL?: string }>()

  return <div>{data?.label || data?.URL || 'Untitled Menu Item'}</div>
}
