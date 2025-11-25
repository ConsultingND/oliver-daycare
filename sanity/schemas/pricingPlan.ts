import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'pricingPlan',
  title: 'Pricing Plan',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Plan Name',
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
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'number',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'priceUnit',
      title: 'Price Unit',
      type: 'string',
      options: {
        list: [
          { title: 'Per Month', value: 'month' },
          { title: 'Per Week', value: 'week' },
          { title: 'Per Day', value: 'day' },
        ],
      },
      initialValue: 'month',
    }),
    defineField({
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'List of included features',
    }),
    defineField({
      name: 'schedule',
      title: 'Schedule',
      type: 'string',
      description: 'e.g., "Full Time (8am-5pm)", "Part Time (9am-1pm)"',
    }),
    defineField({
      name: 'mealsIncluded',
      title: 'Meals Included',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'isPopular',
      title: 'Popular Plan',
      type: 'boolean',
      initialValue: false,
      description: 'Highlight this plan as most popular',
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
      price: 'price',
      priceUnit: 'priceUnit',
      isPopular: 'isPopular',
    },
    prepare(selection) {
      const { title, price, priceUnit, isPopular } = selection
      return {
        title: `${title}${isPopular ? ' ⭐' : ''}`,
        subtitle: `$${price}/${priceUnit}`,
      }
    },
  },
})



