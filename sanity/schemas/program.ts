import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'program',
  title: 'Program',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Program Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'ageRange',
      title: 'Age Range',
      type: 'string',
      description: 'e.g., "6 weeks - 12 months"',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{ type: 'block' }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'dailySchedule',
      title: 'Daily Schedule',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'learningFocus',
      title: 'Learning Focus Areas',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
    }),
    defineField({
      name: 'teacherToChildRatio',
      title: 'Teacher to Child Ratio',
      type: 'string',
      description: 'e.g., "1:4"',
    }),
    defineField({
      name: 'hoursAvailable',
      title: 'Hours Available',
      type: 'string',
      description: 'e.g., "Full-time, Part-time, Half-day"',
    }),
    defineField({
      name: 'tuitionSummary',
      title: 'Tuition Summary',
      type: 'string',
      description: 'High-level pricing info (optional)',
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'icon',
      title: 'Icon',
      type: 'image',
      description: 'Small icon for cards',
    }),
    defineField({
      name: 'isFeatured',
      title: 'Featured Program',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'displayOrder',
      title: 'Display Order',
      type: 'number',
      description: 'Order for sorting (lower numbers first)',
    }),
  ],
  orderings: [
    {
      title: 'Display Order',
      name: 'displayOrder',
      by: [{ field: 'displayOrder', direction: 'asc' }],
    },
  ],
})



