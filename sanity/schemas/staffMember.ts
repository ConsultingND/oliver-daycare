import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'staffMember',
  title: 'Staff Member',
  type: 'document',
  fields: [
    defineField({
      name: 'firstName',
      title: 'First Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'lastName',
      title: 'Last Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'role',
      title: 'Role/Title',
      type: 'string',
      description: 'e.g., "Lead Teacher - Toddler Program"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: (doc: any) => `${doc.firstName}-${doc.lastName}`,
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'photo',
      title: 'Photo',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'bio',
      title: 'Bio',
      type: 'array',
      of: [{ type: 'block' }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'credentials',
      title: 'Credentials & Certifications',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Degrees, certifications (CPR, First Aid, CDA, etc.)',
    }),
    defineField({
      name: 'experienceYears',
      title: 'Years of Experience',
      type: 'number',
    }),
    defineField({
      name: 'favoriteQuote',
      title: 'Favorite Quote',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'whyILoveWorkingWithChildren',
      title: 'Why I Love Working with Children',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'programs',
      title: 'Programs',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'program' }] }],
      description: 'Programs this staff member teaches',
    }),
    defineField({
      name: 'isFeatured',
      title: 'Featured Staff',
      type: 'boolean',
      initialValue: false,
      description: 'Show on homepage/staff highlights',
    }),
    defineField({
      name: 'displayOrder',
      title: 'Display Order',
      type: 'number',
    }),
  ],
  preview: {
    select: {
      firstName: 'firstName',
      lastName: 'lastName',
      role: 'role',
      media: 'photo',
    },
    prepare(selection) {
      const { firstName, lastName, role } = selection
      return {
        ...selection,
        title: `${firstName} ${lastName}`,
        subtitle: role,
      }
    },
  },
})



