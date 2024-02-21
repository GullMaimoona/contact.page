// pages/contact.js
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline';

export default function ContactPage() {
  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center px-6 pt-8 pb-12">
      <div className="max-w-4xl mx-auto p-8 bg-white rounded-xl shadow-2xl">
        <div className="md:flex md:items-start md:justify-between space-y-6 md:space-y-0 md:space-x-6">
          <div className="md:w-1/2 lg:w-2/5 space-y-4">
            <h2 className="text-4xl font-bold text-gray-800 mt-7 mb-10">Get in Touch</h2>
            <div className="space-y-20">
              
              <div className="flex items-center text-gray-700">
                <PhoneIcon className="h-7 w-7 flex-shrink-0 text-indigo-500 mr-4" />
                <p className="text-lg">+1 (555) 123-4567</p>
              </div>
              <div className="flex items-center text-gray-700">
                <EnvelopeIcon className="h-7 w-7 flex-shrink-0 text-indigo-500 mr-4" />
                <p className="text-lg">support@business.com</p>
              </div>
              <div className="flex items-center text-gray-700">
                <MapPinIcon className="h-7 w-7 flex-shrink-0 text-indigo-500 mr-4" />
                <p className="text-lg">123 Business Avenue, San Francisco, CA</p>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-md md:w-1/2 lg:w-3/5">
            <form action="#" method="POST" className="grid grid-cols-1 gap-y-6">
              <div>
                <label htmlFor="full_name" className="sr-only">Full name</label>
                <input type="text" name="full_name" id="full_name" autoComplete="name" className="block w-full bg-opacity-50 border border-gray-400 border-opacity-75 shadow-sm py-3 px-4 placeholder-gray-400 rounded-md" placeholder="Full name" required />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">Email</label>
                <input type="email" name="email" id="email" autoComplete="email" className="block w-full bg-opacity-50 border border-gray-400 border-opacity-75 shadow-sm py-3 px-4 placeholder-gray-400  rounded-md" placeholder="Email" required />
              </div>
              <div>
                <label htmlFor="phone" className="sr-only">Phone</label>
                <input type="text" name="phone" id="phone" autoComplete="tel" className="block w-full bg-opacity-50 border border-gray-400 border-opacity-75 shadow-sm py-3 px-4 placeholder-gray-400 rounded-md" placeholder="Phone" required />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">Message</label>
                <textarea name="message" id="message" rows="4" className="block w-full bg-opacity-50 border border-gray-400 border-opacity-75 shadow-sm py-3 px-4 placeholder-gray-400 rounded-md" placeholder="Message" required></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-lg font-medium rounded-md text-white bg-red-500 hover:bg-white hover:text-black hover:border-red-500 w-full transition duration-150 ease-in-out"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
