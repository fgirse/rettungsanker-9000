import type { GlobalConfig } from 'payload'

export const Partners: GlobalConfig = {
  slug: 'partners',
  fields: [
    {
      name: 'partners',
      type: 'array',
      required: true,
      fields: [
        {
          name: 'name',
          type: 'text',
          required: true,
        },
        {
          name: 'logo',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'width',
          type: 'number',
          defaultValue: 150,
        },
        {
          name: 'height',
          type: 'number',
          defaultValue: 80,
        },
      ],
    },
  ],
}
