import {defineField, defineType} from 'sanity'

export const pageType = defineType({
  name: 'page',
  title: 'Page',
  type: 'document',
  groups: [
    {
      name: 'seo',
      title: 'SEO',
    },
  ],
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'metadata',
      title: 'Metadata',
      type: 'seo',
      group: 'seo',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'headline',
      title: 'Headline',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'pictures',
      title: 'Pictures',
      type: 'reference',
      to: [{type: 'picture'}],
    }),
    defineField({
      name: 'projects',
      title: 'Projects',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'project'}]}],
    }),
    defineField({
      name: 'lastUpdate',
      title: 'Last Update',
      type: 'date',
      initialValue: new Date().toISOString(),
      options: {
        dateFormat: 'MM/DD/YYYY',
      },
    }),
    defineField({
      name: 'articles',
      title: 'Articles',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'article'}]}],
    }),
    defineField({
      name: 'lists',
      title: 'Lists',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'list'}]}],
    }),
    defineField({
      name: 'documents',
      title: 'Documents',
      type: 'array',
      of: [{type: 'file', options: {accept: 'application/pdf'}}],
    }),
  ],
})
