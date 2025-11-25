import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'class',
  title: 'Class',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Class Name',
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
      description: 'e.g., "2-3 years"',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{ type: 'block' }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'duration',
      title: 'Duration',
      type: 'string',
      description: 'e.g., "3 months", "Full year"',
    }),
    defineField({
      name: 'schedule',
      title: 'Schedule',
      type: 'string',
      description: 'e.g., "Monday, Wednesday, Friday 9am-12pm"',
    }),
    defineField({
      name: 'classSize',
      title: 'Class Size',
      type: 'string',
      description: 'Maximum number of students',
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'number',
      description: 'Monthly or total price',
    }),
    defineField({
      name: 'priceUnit',
      title: 'Price Unit',
      type: 'string',
      options: {
        list: [
          { title: 'Per Month', value: 'month' },
          { title: 'Per Week', value: 'week' },
          { title: 'Total', value: 'total' },
        ],
      },
      initialValue: 'month',
    }),
    defineField({
      name: 'curriculum',
      title: 'Curriculum Highlights',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Key learning activities or subjects',
    }),
    defineField({
      name: 'instructor',
      title: 'Instructor',
      type: 'reference',
      to: [{ type: 'staffMember' }],
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'gallery',
      title: 'Gallery Images',
      type: 'array',
      of: [{ type: 'image' }],
    }),
    defineField({
      name: 'enrollmentOpen',
      title: 'Enrollment Open',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'spotsAvailable',
      title: 'Spots Available',
      type: 'number',
    }),
    defineField({
      name: 'startDate',
      title: 'Start Date',
      type: 'date',
    }),
    defineField({
      name: 'isFeatured',
      title: 'Featured Class',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'displayOrder',
      title: 'Display Order',
      type: 'number',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      ageRange: 'ageRange',
      price: 'price',
      priceUnit: 'priceUnit',
      media: 'coverImage',
    },
    prepare(selection) {
      const { title, ageRange, price, priceUnit } = selection
      return {
        ...selection,
        title: title,
        subtitle: `${ageRange || ''} - $${price}/${priceUnit || 'month'}`,
      }
    },
  },
})



