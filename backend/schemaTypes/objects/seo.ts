import {defineType} from 'sanity'

export const seo = defineType({
  name: 'seo',
  title: 'Seo',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
    },
  ],
})
