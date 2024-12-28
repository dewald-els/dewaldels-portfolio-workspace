import {defineField, defineType} from 'sanity'

export const projectTagType = defineType({
  name: 'projectTag',
  title: 'Project tag',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'colour',
      type: 'color',
    }),
  ],
})
