import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'faq',
  title: 'FAQ',
  type: 'document',
  fields: [
    defineField({
      name: 'question',
      title: 'Question',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'answer',
      title: 'Answer',
      type: 'array',
      of: [{ type: 'block' }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Enrollment', value: 'enrollment' },
          { title: 'Tuition & Payment', value: 'tuition' },
          { title: 'Health & Safety', value: 'health-safety' },
          { title: 'Daily Operations', value: 'operations' },
          { title: 'Curriculum', value: 'curriculum' },
          { title: 'General', value: 'general' },
        ],
        layout: 'dropdown',
      },
    }),
    defineField({
      name: 'displayOrder',
      title: 'Display Order',
      type: 'number',
      description: 'Order for sorting (lower numbers first)',
    }),
  ],
  preview: {
    select: {
      title: 'question',
      category: 'category',
    },
    prepare(selection) {
      const { title, category } = selection
      return {
        title: title,
        subtitle: category || 'No category',
      }
    },
  },
})



