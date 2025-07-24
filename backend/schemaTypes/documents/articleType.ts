import {defineField, defineType} from 'sanity'

export const articleType = defineType({
  name: 'article',
  title: 'Article',
  type: 'document',
  fields: [
    defineField({
      name: 'contents',
      title: 'Contents',
      type: 'array',
      of: [{type: 'text'}],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'animationSpeed',
      title: 'Animation Speed',
      type: 'number',
    }),
    defineField({
      name: 'animationDelay',
      title: 'Animation Delay',
      type: 'number',
    }),
  ],
})
