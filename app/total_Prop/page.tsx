"use client"

import Link from "next/link"
import Image from "next/image"

export default function DashboardPage() {
  // Sample property data
  const properties = [
    {
      id: 1,
      image: "/4.png",
      title: "Beverly Springfield",
      location: "2821 Lake Sevilla, Palm Harbor, TX",
      price: "35000",
      beds: 4,
      baths: 2,
      sqft: "6×7.5",
    },
    {
      id: 2,
      image: "/5.png",
      title: "Tarpon Bay",
      location: "Palm Harbor, TX",
      price: "35000",
      beds: 4,
      baths: 2,
      sqft: "6×8",
    },
    {
      id: 3,
      image: "/6.png",
      title: "Contemporary Home",
      location: "Miami, Florida, US",
      price: "35000",
      beds: 3,
      baths: 2,
      sqft: "6×7.5",
    },
    {
      id: 4,
      image: "/7.png",
      title: "Modern Villa",
      location: "Los Angeles, CA",
      price: "35000",
      beds: 4,
      baths: 3,
      sqft: "6×8",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Top Navigation Section */}
      <div className="border-b border-[#E5E6EB] px-6 py-4 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Left - Logo */}
          <div className="flex items-center gap-2">
            <div
              style={{ backgroundColor: "#6366f1" }}
              className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold"
            >
              N
            </div>
            <span className="font-bold text-[#000929] text-lg">Nestbooking</span>
          </div>

          {/* Center - Buttons */}
          <div className="flex flex-wrap justify-center gap-10 w-full md:w-auto">
            <button className="px-4 py-2 border-2 border-white text-[#000929] rounded-lg bg-white hover:bg-[#F9FAFB] transition font-bold text-lg">
              Manage Properties
            </button>
            <button className="px-4 py-2 border-2 border-white text-[#000929] rounded-lg bg-white hover:bg-[#F9FAFB] transition font-bold text-lg">
              Claim your Properties
            </button>
            <button className="px-4 py-2 border-2 border-white text-[#000929] rounded-lg bg-white hover:bg-[#F9FAFB] transition font-bold text-lg">
              Search
            </button>
          </div>

          {/* Right - Back to Home */}
          <Link href="/" passHref>
            <button className="px-4 py-2 border-2 border-white text-[#000929] rounded-lg bg-white hover:bg-[#F9FAFB] transition font-bold text-lg">
              Back to Home
            </button>
          </Link>
        </div>
      </div>

      {/* Filter Buttons Section */}
      <div className="border-b border-[#E5E6EB] px-6 py-4 bg-white">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center gap-3">
          <button className="px-4 py-2 text-[#000929] rounded-lg bg-white border-2 border-white hover:bg-[#F9FAFB] transition font-bold text-m">
            All (4)
          </button>
          <button className="px-4 py-2 text-[#000929] rounded-lg bg-white border-2 border-white hover:bg-[#F9FAFB] transition font-bold text-m">
            Claim (0)
          </button>
          <button className="px-4 py-2 text-[#000929] rounded-lg bg-white border-2 border-white hover:bg-[#F9FAFB] transition font-bold text-m">
            Booked (0)
          </button>
          <button className="px-4 py-2 text-[#000929] rounded-lg bg-white border-2 border-white hover:bg-[#F9FAFB] transition font-bold text-m">
            Registered (2)
          </button>
          <button className="px-4 py-2 text-[#000929] rounded-lg bg-white border-2 border-white hover:bg-[#F9FAFB] transition font-bold text-m">
            Delivered (0)
          </button>
          <button className="px-4 py-2 text-[#000929] rounded-lg bg-white border-2 border-white hover:bg-[#F9FAFB] transition font-bold text-m">
            In Rent (0)
          </button>
          <button className="px-4 py-2 text-[#000929] rounded-lg bg-white border-2 border-white hover:bg-[#F9FAFB] transition font-bold text-m">
            For Rent (2)
          </button>
          <button className="px-4 py-2 text-[#000929] rounded-lg bg-white border-2 border-white hover:bg-[#F9FAFB] transition font-bold text-m">
            Sale (0)
          </button>
        </div>
      </div>

      {/* Main Content - Property Cards */}
      <main className="px-6 py-8 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Property Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {properties.map((property) => (
              <div
                key={property.id}
                style={{ 
                  borderColor: "#192126",
                  backgroundColor: "#192126"
                }}
                className="border-2 rounded-2xl p-6 hover:shadow-lg transition"
              >
                <div className="flex gap-6">
                  {/* Property Image */}
                  <div 
                    style={{ backgroundColor: "#2a3640" }}
                    className="relative w-48 h-48 flex-shrink-0 rounded-xl overflow-hidden"
                  >
                    <Image
                      src={property.image}
                      alt={property.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Property Details */}
                  <div className="flex-1 flex flex-col justify-between text-white">
                    {/* Title Section */}
                    <div>
                      <div 
                        style={{ backgroundColor: "#6366f1" }}
                        className="text-white px-4 py-2 rounded-lg inline-block mb-3 font-bold"
                      >
                        Property Title
                      </div>

                      <div className="flex gap-3 mb-3">
                        <div 
                          style={{ backgroundColor: "#2a3640" }}
                          className="px-3 py-1 rounded"
                        ></div>
                        <div 
                          style={{ backgroundColor: "#2a3640" }}
                          className="px-3 py-1 rounded"
                        ></div>
                      </div>

                      <div 
                        style={{ backgroundColor: "#2a3640" }}
                        className="px-3 py-2 rounded mb-3 w-full"
                      ></div>

                      <div 
                        style={{ backgroundColor: "#2a3640" }}
                        className="text-white px-4 py-2 rounded-lg inline-block font-bold"
                      >
                        {property.price}/- Per Month
                      </div>
                    </div>

                    {/* Bottom Section */}
                    <div className="flex justify-between items-center mt-4">
                      <div className="text-sm font-semibold">Payment Detail</div>
                      <div className="text-sm font-semibold">View All</div>
                    </div>

                    <div className="space-y-2 mt-2">
                      <div 
                        style={{ backgroundColor: "#FFFFFF" }}
                        className="h-8 rounded"
                      ></div>
                      <div 
                        style={{ backgroundColor: "#FFFFFF" }}
                        className="h-8 rounded"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          <div className="flex justify-center">
            <button 
              style={{ 
                borderColor: "#6366f1",
                backgroundColor: "#6366f1"
              }}
              className="border-2 text-white px-32 py-4 rounded-xl hover:opacity-90 transition font-bold text-xl"
            >
              Load More
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}