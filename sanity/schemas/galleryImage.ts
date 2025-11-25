import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'galleryImage',
  title: 'Gallery Image',
  type: 'document',
  fields: [
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'altText',
      title: 'Alt Text',
      type: 'string',
      description: 'Describe the image for accessibility',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'caption',
      title: 'Caption',
      type: 'string',
      description: 'Display caption (optional)',
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Playtime', value: 'playtime' },
          { title: 'Classroom', value: 'classroom' },
          { title: 'Outdoor', value: 'outdoor' },
          { title: 'Arts & Crafts', value: 'arts-crafts' },
          { title: 'Special Events', value: 'events' },
          { title: 'Meals', value: 'meals' },
          { title: 'Staff', value: 'staff' },
        ],
        layout: 'dropdown',
      },
    }),
    defineField({
      name: 'program',
      title: 'Related Program',
      type: 'reference',
      to: [{ type: 'program' }],
      description: 'Link to specific program (optional)',
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'reference',
      to: [{ type: 'location' }],
      description: 'Link to location (optional)',
    }),
    defineField({
      name: 'isFeatured',
      title: 'Featured',
      type: 'boolean',
      initialValue: false,
      description: 'Show on homepage/hero',
    }),
    defineField({
      name: 'displayOrder',
      title: 'Display Order',
      type: 'number',
    }),
  ],
  preview: {
    select: {
      title: 'altText',
      category: 'category',
      media: 'image',
    },
    prepare(selection) {
      const { title, category } = selection
      return {
        ...selection,
        title: title,
        subtitle: category ? `Category: ${category}` : 'No category',
      }
    },
  },
})



