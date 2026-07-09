import { Mail, Phone, MapPin } from 'lucide-react'

export const metadata = {
  title: 'Contact Us | EstateVista',
}

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="mb-2 text-3xl font-bold">Contact EstateVista</h1>
      <p className="mb-8 text-gray-600">We’re here to help you find your next home.</p>

      <div className="grid gap-12 md:grid-cols-2">
        <div>
          <h2 className="mb-4 text-xl font-bold">Get in Touch</h2>
          <div className="mb-8 space-y-4">
            <div className="flex items-center gap-3">
              <Phone size={20} />
              <div>
                <p className="font-semibold">Phone</p>
                <a href="tel:9085560475" className="text-gray-600">
                  (908) 556-0475
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Mail size={20} />
              <div>
                <p className="font-semibold">Email</p>
                <a href="mailto:hello@estatevista.com" className="text-gray-600">
                  hello@estatevista.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <MapPin size={20} />
              <div>
                <p className="font-semibold">Office</p>
                <p className="text-gray-600">107 Laney Dr, Shelby, NC 28152</p>
              </div>
            </div>
          </div>

          <h2 className="mb-4 text-xl font-bold">Business Hours</h2>
          <div className="space-y-1 text-sm text-gray-600">
            <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
            <p>Saturday: 10:00 AM - 4:00 PM</p>
            <p>Sunday: Closed</p>
          </div>
        </div>

        <div>
          <h2 className="mb-4 text-xl font-bold">Visit Our Office</h2>
          <div className="overflow-hidden rounded-lg border">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3256.5!2d-81.5!3d35.3!2m3!1f0!2f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8856e5a1a1a1a1a1%3A0x1a1a1a1a1a1a!2s107%20Laney%20Dr%2C%20Shelby%2C%20NC%2028152!5e0!3m2!1sen!2sus!4v1234567890"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
