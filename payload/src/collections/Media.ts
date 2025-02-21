import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'videoList',
      type: 'array',
      fields: [
        {
          name: 'video',
          type: 'group',
          fields: [
            {
              name: 'vidID',
              type: 'text',
              required: true,
            },
            {
              name: 'role',
              type: 'text',
              required: true,
            },
          ]
        },
      ]
    },
    {
      name: 'vidID',
      type: 'text',
      required: false,
    },
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'role',
      type: 'text',
      required: false,
    },
    {
      name: 'press',
      type: 'array',
      fields: [
        {
          name: 'pressItem',
          type: 'group',
          fields: [
            {
              name: 'pub',
              type: 'text',
              required: true,
            },
            {
              name: 'link',
              type: 'text',
              required: true,
            },
          ]
        }
      ]
    },
    {
      name: 'isMusicVideo',
      type: 'checkbox',
      defaultValue: false,
    },
    {
      name: 'rentalLink',
      type: 'text',
    },
  ],
  upload: true,
}
