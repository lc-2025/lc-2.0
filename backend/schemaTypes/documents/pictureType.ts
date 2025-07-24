import {defineField, defineType} from 'sanity'

export const pictureType = defineType({
  name: 'picture',
  title: 'Picture',
  type: 'document',
  fields: [
    defineField({
      name: 'imageLight',
      title: 'Image (Light)',
      type: 'image',
      validation: (rule) => rule.required(),
    }),
     defineField({
      name: 'imageDark',
      title: 'Image (Dark)',
      type: 'image',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'alt',
      title: 'Alternate text',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
  ],
})
