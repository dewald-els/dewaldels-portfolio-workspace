import {defineField, defineType} from 'sanity'

export const projectType = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {source: 'title'},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'video',
      type: 'file',
      options: {
        accept: 'video/mp4',
      },
    }),
    defineField({
      name: 'image',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'projectImage'}],
        },
      ],
    }),
    defineField({
      name: 'body',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      title: 'Project links',
      name: 'links',
      type: 'array',
      of: [{type: 'projectLink'}],
    }),
    defineField({
      title: 'Tech stack',
      name: 'techStack',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'projectTag'}],
        },
      ],
    }),
    defineField({
      title: 'Project tags',
      name: 'projectTags',
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
