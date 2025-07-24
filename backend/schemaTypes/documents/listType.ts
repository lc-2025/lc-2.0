import {defineField, defineType} from 'sanity'

export const listType = defineType({
  name: 'list',
  title: 'List',
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
