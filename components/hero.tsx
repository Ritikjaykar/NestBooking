"use client"

import { useState } from "react"
import { Calendar, Search } from "lucide-react"

export default function Hero() {
  const [activeTab, setActiveTab] = useState("rent")

  return (
    <div className="relative min-h-screen pb-12 md:pb-20 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        {/* Map background with grid pattern - only on right side */}
        <svg className="absolute inset-0 w-full h-full opacity-10" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#9CA3AF" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>

        {/* Blue dots scattered on right side like Google Maps */}
        <div className="absolute top-1/4 right-1/3 w-2 h-2 bg-blue-500 rounded-full opacity-60"></div>
        <div className="absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-blue-400 rounded-full opacity-50"></div>
        <div className="absolute top-2/3 right-2/5 w-2 h-2 bg-blue-500 rounded-full opacity-40"></div>
        <div className="absolute bottom-1/3 right-1/2 w-1.5 h-1.5 bg-blue-400 rounded-full opacity-55"></div>
        <div className="absolute top-1/2 right-1/5 w-2 h-2 bg-blue-500 rounded-full opacity-45"></div>
        <div className="absolute bottom-1/4 right-1/3 w-1.5 h-1.5 bg-blue-400 rounded-full opacity-50"></div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-40 right-20 w-3 h-3 bg-purple-400 rounded-full opacity-40"></div>
      <div className="absolute top-64 right-40 w-2 h-2 bg-purple-500 rounded-full"></div>
      <div className="absolute bottom-40 right-32 w-2 h-2 bg-purple-400 rounded-full opacity-60"></div>
      <div className="absolute bottom-20 left-1/3 w-3 h-3 bg-purple-300 rounded-full opacity-40"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 pt-8 md:pt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-start">
          {/* Left Content */}
          <div className="col-span-1 md:col-span-2 lg:col-span-2 space-y-6 md:space-y-8">
            {/* Headline - centered on mobile */}
            <div className="space-y-4 md:space-y-6 text-center md:text-left">
              <h1 className="h1 text-gray-900">Buy, rent, or sell your property easily</h1>
              <p className="body-large-medium text-gray-700">
                A great platform to buy, sell, or even rent your properties without any commissions.
              </p>
            </div>

            {/* Stats - stacked on mobile, side by side on larger screens */}
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 md:gap-16 py-6 md:py-8 justify-center md:justify-start">
              <div className="flex items-center gap-4 md:gap-6 justify-center md:justify-start">
                <div className="flex flex-col items-center md:items-start">
                  <div className="h2 text-purple-600">50k+</div>
                  <div className="body-medium-bold text-gray-600">renters</div>
                  <div className="body-small-regular text-gray-500 mt-1">believe in our service</div>
                </div>
              </div>
              <div className="flex items-center gap-4 md:gap-6 justify-center md:justify-start">
                <div className="flex flex-col items-center md:items-start">
                  <div className="h2 text-purple-600">10k+</div>
                  <div className="body-medium-bold text-gray-600">properties</div>
                  <div className="body-small-regular text-gray-500 mt-1">ready for occupancy</div>
                </div>
              </div>
            </div>

            {/* Tabs and Search */}
            <div className="space-y-4 md:space-y-6">
              {/* Tabs */}
              <div className="flex gap-0 bg-white rounded-t-lg w-fit overflow-x-auto">
                {["Rent", "Buy", "Sell"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab.toLowerCase())}
                    className={`px-4 md:px-8 py-3 md:py-4 body-medium-bold text-sm md:text-base transition whitespace-nowrap ${
                      activeTab === tab.toLowerCase()
                        ? "text-purple-600 border-b-4 border-purple-600 bg-white"
                        : "text-gray-900 border-b border-purple-100 bg-white"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              <div className="bg-white rounded-b-lg rounded-tr-lg shadow-lg p-4 md:p-8 w-full">
                {/* Mobile Search - single input with search button */}
                <div className="md:hidden flex gap-3">
                  <input
                    type="text"
                    placeholder="Search location"
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-lg body-small-regular focus:outline-none focus:border-purple-600"
                  />
                  <button className="px-4 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition">
                    <Search size={20} />
                  </button>
                </div>

                {/* Desktop Search - full form with location, when, and button */}
                <div className="hidden md:flex flex-col md:flex-row gap-4 md:gap-6 md:items-end w-full">
                  {/* Location */}
                  <div className="flex-1 min-w-0">
                    <label className="block body-small-medium text-gray-700 mb-2">Location</label>
                    <div className="body-large-bold text-gray-900 truncate">Barcelona, Spain</div>
                  </div>

                  {/* Divider */}
                  <div className="hidden md:block w-px h-12 bg-purple-100"></div>

                  {/* When */}
                  <div className="flex-1 min-w-0">
                    <label className="block body-small-medium text-gray-700 mb-2">When</label>
                    <div className="flex items-center gap-2 md:gap-3">
                      <div className="body-large-bold text-gray-900 truncate">Select Move-in Date</div>
                      <Calendar size={16} className="text-gray-500 flex-shrink-0" />
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="hidden md:block w-px h-12 bg-purple-100"></div>

                  {/* Button */}
                  <button className="w-full md:w-auto px-6 md:px-8 py-3 bg-purple-600 text-white body-medium-bold rounded-lg hover:bg-purple-700 transition whitespace-nowrap">
                    Browse Properties
                  </button>
                </div>
              </div>
            </div>           
          </div>

          {/* Right Column - Property Cards (hidden on mobile) */}
          <div className="hidden md:block col-span-1 relative h-full">
            {/* Decorative circles */}
            <div className="absolute top-20 right-0 w-12 md:w-14 h-12 md:h-14 bg-purple-200/40 rounded-full border-2 border-purple-400 flex items-center justify-center">
              <div className="w-3 md:w-4 h-3 md:w-4 bg-purple-600 rounded-full"></div>
            </div>
            <div className="absolute bottom-40 right-0 w-10 md:w-12 h-10 md:h-12 bg-purple-300/50 rounded-full"></div>

            {/* Property Cards Stack */}
            <div className="space-y-4 md:space-y-6 mt-16 md:mt-20">
              {/* Card 1 */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-purple-100 w-full hover:shadow-xl transition">
                <div className="h-40 md:h-48 bg-gray-300"></div>
                <div className="p-4 md:p-6 space-y-3 md:space-y-4">
                  <div className="flex items-baseline gap-2">
                    <span className="body-xlarge-bold text-purple-600">$2,700</span>
                    <span className="body-small-regular text-gray-600">/month</span>
                  </div>
                  <div>
                    <h3 className="h4 text-gray-900">Beverly Springfield</h3>
                    <p className="body-small-regular text-gray-600">2821 Lake Sevilla, Palm Harbor, TX</p>
                  </div>
                  <div className="border-t border-purple-100 pt-3 md:pt-4 flex gap-4 md:gap-6 text-xs md:text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-4 md:w-5 h-4 md:h-5 border-2 border-purple-600 rounded"></div>
                      <span className="body-small-medium text-gray-600">4</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 md:w-5 h-4 md:h-5 border-2 border-purple-600 rounded"></div>
                      <span className="body-small-medium text-gray-600">2</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 md:w-5 h-4 md:h-5 border-2 border-purple-600 rounded"></div>
                      <span className="body-small-medium text-gray-600">6x7.5 m²</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 2 - Tarpon Bay - positioned to the right */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden border-2 border-purple-600 w-full hover:shadow-xl transition translate-x-6 md:translate-x-8">
                <div className="h-28 md:h-32 bg-gray-300"></div>
                <div className="p-4 md:p-6 space-y-3 md:space-y-4">
                  <div className="flex items-baseline gap-2">
                    <span className="body-large-bold text-purple-600">$1,600</span>
                    <span className="body-small-regular text-gray-600">/month</span>
                  </div>
                  <div className="space-y-1">
                    <h3 className="h4 text-gray-900">Tarpon Bay</h3>
                    <p className="body-small-regular text-gray-600">Palm Harbor, TX</p>
                  </div>
                  <div className="border-t border-purple-100 pt-2 md:pt-3 flex gap-3 md:gap-4 text-xs">
                    <div className="flex items-center gap-2">
                      <div className="w-3.5 md:w-4 h-3.5 md:h-4 border-1.5 border-purple-600 rounded"></div>
                      <span className="body-small-medium text-gray-600">4</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3.5 md:w-4 h-3.5 md:h-4 border-1.5 border-purple-600 rounded"></div>
                      <span className="body-small-medium text-gray-600">2</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3.5 md:w-4 h-3.5 md:h-4 border-1.5 border-purple-600 rounded"></div>
                      <span className="body-small-medium text-gray-600">6x8 m²</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Location marker */}
            <div className="absolute bottom-32 -left-6 w-12 md:w-14 h-12 md:h-14 bg-purple-600 rounded-full flex items-center justify-center shadow-lg">
              <div className="w-5 md:w-6 h-5 md:h-6 bg-white rounded-full flex items-center justify-center">
                <div className="w-1.5 md:w-2 h-1.5 md:h-2 bg-purple-600 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
