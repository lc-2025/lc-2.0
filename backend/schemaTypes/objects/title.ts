import {defineType} from 'sanity'

export const title = defineType({
  name: 'title',
  title: 'Title',
  type: 'object',
  fields: [
    {
      name: 'default',
      title: 'Default',
      type: 'string',
    },
    {
      name: 'template',
      title: 'Template',
      type: 'string',
    },
  ],
})
