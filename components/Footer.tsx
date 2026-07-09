import { Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="mt-12 border-t border-slate-200 bg-gray-50">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-4">
        <div>
          <h3 className="mb-3 text-lg font-bold">EstateVista</h3>
          <p className="text-sm text-gray-600">Luxury homes. Smart search. Seamless experience.</p>
        </div>

        <div>
          <h4 className="mb-3 font-semibold">Contact</h4>
          <div className="space-y-2 text-sm text-gray-600">
            <p className="flex items-center gap-2">
              <Phone size={16} /> (908) 556-0475
            </p>
            <p className="flex items-center gap-2">
              <Mail size={16} /> hello@estatevista.com
            </p>
            <p className="flex items-center gap-2">
              <MapPin size={16} /> 107 Laney Dr, Shelby, NC
            </p>
          </div>
        </div>

        <div>
          <h4 className="mb-3 font-semibold">Company</h4>
          <div className="space-y-2 text-sm text-gray-600">
            <a href="/#about" className="block hover:text-black">
              About
            </a>
            <a href="/search" className="block hover:text-black">
              Listings
            </a>
            <a href="/#blog" className="block hover:text-black">
              Blog
            </a>
            <a href="/contact" className="block hover:text-black">
              Contact
            </a>
          </div>
        </div>

        <div>
          <h4 className="mb-3 font-semibold">Legal</h4>
          <div className="space-y-2 text-sm text-gray-600">
            <a href="#" className="block hover:text-black">
              Privacy Policy
            </a>
            <a href="#" className="block hover:text-black">
              Terms of Service
            </a>
          </div>
        </div>
      </div>

      <div className="border-t px-4 py-6 text-center text-sm text-gray-600">
        <p>© 2026 EstateVista. All rights reserved.</p>
      </div>
    </footer>
  )
}
