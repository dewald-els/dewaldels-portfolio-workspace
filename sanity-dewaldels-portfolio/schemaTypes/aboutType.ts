import {defineField, defineType} from 'sanity'

export const aboutType = defineType({
  title: 'About',
  name: 'about',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      title: 'About',
      name: 'body',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      title: 'Skills',
      name: 'skills',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'projectTag'}],
        },
      ],
    }),
  ],
})
