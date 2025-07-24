import {defineField, defineType} from 'sanity'

export const metadataType = defineType({
  name: 'metadata',
  title: 'Metadata',
  type: 'document',
  fields: [
    defineField({
      name: 'nameApp',
      title: 'Application Name',
      type: 'string',
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'title',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'keywords',
      title: 'Keywords',
      type: 'string',
    }),
    defineField({
      name: 'authors',
      title: 'Authors',
      type: 'array',
      of: [
        {
          type: 'string',
        },
      ],
    }),
    defineField({
      name: 'creator',
      title: 'Creator',
      type: 'string',
    }),
    defineField({
      name: 'baseUrl',
      title: 'Base URL',
      type: 'url',
    }),
    defineField({
      name: 'icons',
      title: 'Icons',
      type: 'array',
      of: [
        {
          type: 'icon',
        },
      ],
      validation: (rule) => rule.required(),
    }),
  ],
})
