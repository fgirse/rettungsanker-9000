import type { CollectionConfig } from 'payload'

export const Marquee: CollectionConfig = {
  slug: 'marquee',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'marquee',
      type: 'group',
      fields: [
        {
          name: 'LogoNeu',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'LogoFlens',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'LogoAstra',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
      ],
    },
  ],
}
