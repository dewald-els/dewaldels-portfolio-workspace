import {defineField, defineType} from 'sanity'

export const projectLinkType = defineType({
  title: 'Project link',
  name: 'projectLink',
  type: 'document',
  fields: [
    defineField({
      name: 'linkImage',
      type: 'image',
    }),
    defineField({
      name: 'link',
      type: 'string',
    }),
    defineField({
      name: 'linkText',
      type: 'string',
    }),
  ],
})
