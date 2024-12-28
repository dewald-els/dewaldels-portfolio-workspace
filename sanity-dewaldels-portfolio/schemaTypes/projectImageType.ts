import {defineField, defineType} from 'sanity'

export const projectImageType = defineType({
  name: 'projectImage',
  title: 'Project image',
  type: 'document',
  fields: [
    defineField({
      name: 'screenshot',
      type: 'image',
    }),
    defineField({
      name: 'caption',
      type: 'string',
    }),
  ],
})
