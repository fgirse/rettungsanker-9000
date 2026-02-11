import type { CollectionConfig } from 'payload'

export const BentoGrid: CollectionConfig = {
  slug: 'bentogrid',

  fields: [
    {
      name: 'image_biere',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },

    {
      name: 'title_biere',
      type: 'text',
      required: true,
    },

    {
      name: 'content_biere',
      type: 'richText',
      required: true,
    },
    {
      name: 'image_weine',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'title_weine',
      type: 'text',
      required: true,
    },

    {
      name: 'content_weine',
      type: 'richText',
      required: true,
    },
    {
      name: 'image_cocktails',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'title_cocktails',
      type: 'text',
      required: true,
    },

    {
      name: 'content_cocktails',
      type: 'richText',
      required: true,
    },
    {
      name: 'image_fussball',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },

    {
      name: 'title_fussball',
      type: 'text',
      required: true,
    },

    {
      name: 'content_fussball',
      type: 'richText',
      required: true,
    },
    {
      name: 'image_events',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'title_events',
      type: 'text',
      required: true,
    },

    {
      name: 'content_events',
      type: 'richText',
      required: true,
    },
    {
      name: 'image_albers',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'title_albers',
      type: 'text',
      required: true,
    },

    {
      name: 'content_albers',
      type: 'richText',
      required: true,
    },
    {
      name: 'image_logoNeu',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'title_logoNeu',
      type: 'text',
      required: true,
    },

    {
      name: 'content_logoNeu',
      type: 'richText',
      required: true,
    },
  ],
}
