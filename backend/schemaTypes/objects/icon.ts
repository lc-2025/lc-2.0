import {defineType} from 'sanity'

export const icon = defineType({
  name: 'icon',
  title: 'Icon',
  type: 'object',
  fields: [
    {
      name: 'media',
      title: 'Media',
      type: 'string',
    },
    {
      name: 'url',
      title: 'URL',
      type: 'string',
    },
    {
      name: 'href',
      title: 'HREF',
      type: 'string',
    },
  ],
})
