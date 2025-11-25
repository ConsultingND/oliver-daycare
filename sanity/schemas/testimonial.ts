import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    defineField({
      name: 'parentName',
      title: 'Parent Name',
      type: 'string',
      description: 'Display name or "Parent of [Child Name]"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'childFirstName',
      title: 'Child First Name',
      type: 'string',
      description: 'Optional - child\'s first name',
    }),
    defineField({
      name: 'quote',
      title: 'Quote',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'rating',
      title: 'Rating',
      type: 'number',
      description: '1-5 star rating',
      validation: (Rule) => Rule.min(1).max(5).integer(),
    }),
    defineField({
      name: 'source',
      title: 'Source',
      type: 'string',
      description: 'e.g., "Google Review", "Facebook", "Parent Survey"',
    }),
    defineField({
      name: 'program',
      title: 'Program',
      type: 'reference',
      to: [{ type: 'program' }],
      description: 'Related program (if applicable)',
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'reference',
      to: [{ type: 'location' }],
      description: 'Related location (if applicable)',
    }),
    defineField({
      name: 'isFeatured',
      title: 'Featured',
      type: 'boolean',
      initialValue: false,
      description: 'Show on homepage carousel',
    }),
    defineField({
      name: 'displayOrder',
      title: 'Display Order',
      type: 'number',
    }),
  ],
  preview: {
    select: {
      parentName: 'parentName',
      quote: 'quote',
      rating: 'rating',
    },
    prepare(selection) {
      const { parentName, quote, rating } = selection
      const stars = rating ? '⭐'.repeat(rating) : ''
      return {
        title: parentName,
        subtitle: `${stars} ${quote?.substring(0, 60)}...`,
      }
    },
  },
})



