import type { CollectionConfig } from 'payload'

export const Pages: CollectionConfig = {
  slug: 'pages',
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
      name: 'home',
      type: 'group',
      fields: [
        {
          name: 'LogoAlt',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'backgroundImageDesktop',
          type: 'upload',
          relationTo: 'media',
          required: true,
          admin: {
            description: 'Background image for desktop (1920px+)',
          },
        },
        {
          name: 'backgroundImageMobile',
          type: 'upload',
          relationTo: 'media',
          required: true,
          admin: {
            description: 'Background image for mobile and tablet devices',
          },
        },
        {
          name: 'Header_1',
          type: 'text',
          required: true,
        },
        {
          name: 'Header_2',
          type: 'text',
          required: true,
        },
      ],
    },
  ],
}
