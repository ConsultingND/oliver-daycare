import Link from 'next/link'
import { NAV_ITEMS, CONTACT, SOCIAL_LINKS } from '@/lib/constants'
import { School, MapPin, Phone, Mail, Facebook, Instagram } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-br from-warmbeige-50 via-blush-50 to-skyblue-50 border-t border-warmbeige-200">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blush-400 to-blush-600 rounded-xl flex items-center justify-center">
                <School className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-gray-800">Oliver Daycare</h3>
                <p className="text-xs text-gray-500">Where Children Thrive</p>
              </div>
            </div>
            <p className="text-gray-600 text-sm mb-4">
              Providing exceptional early education in a nurturing, safe, and engaging environment where every child can grow and flourish.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-gray-800 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {NAV_ITEMS.slice(0, 5).map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-gray-600 hover:text-blush-500 transition-colors text-sm"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-bold text-gray-800 mb-4">Our Programs</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/programs"
                  className="text-gray-600 hover:text-blush-500 transition-colors text-sm"
                >
                  Infant Care
                </Link>
              </li>
              <li>
                <Link
                  href="/programs"
                  className="text-gray-600 hover:text-blush-500 transition-colors text-sm"
                >
                  Toddler Program
                </Link>
              </li>
              <li>
                <Link
                  href="/programs"
                  className="text-gray-600 hover:text-blush-500 transition-colors text-sm"
                >
                  Preschool
                </Link>
              </li>
              <li>
                <Link
                  href="/programs"
                  className="text-gray-600 hover:text-blush-500 transition-colors text-sm"
                >
                  Pre-Kindergarten
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-gray-800 mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex items-start">
                <MapPin className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0 text-blush-500" />
                <span>
                  {CONTACT.address.street}<br />
                  {CONTACT.address.city}, {CONTACT.address.state} {CONTACT.address.zip}
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-4 h-4 mr-2 flex-shrink-0 text-skyblue-500" />
                <a href={`tel:${CONTACT.phone}`} className="hover:text-blush-500 transition-colors">
                  {CONTACT.phone}
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="w-4 h-4 mr-2 flex-shrink-0 text-mint-500" />
                <a href={`mailto:${CONTACT.email}`} className="hover:text-blush-500 transition-colors">
                  {CONTACT.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="border-t border-warmbeige-200 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm mb-4 md:mb-0">
            © {currentYear} Oliver Daycare. All rights reserved.
          </p>
          <div className="flex items-center space-x-4">
            {SOCIAL_LINKS.facebook && (
              <a
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-blush-500 hover:text-white transition-all shadow-sm group"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-gray-600 group-hover:text-white" />
              </a>
            )}
            {SOCIAL_LINKS.instagram && (
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-blush-500 hover:text-white transition-all shadow-sm group"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-gray-600 group-hover:text-white" />
              </a>
            )}
            <Link
              href="/contact"
              className="px-6 py-2 bg-gradient-to-r from-blush-500 to-blush-600 text-white rounded-full hover:shadow-lg transition-all text-sm font-medium"
            >
              Book a Tour
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
