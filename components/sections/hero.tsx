"use client"

import { useState } from "react"
import Image from "next/image"
import { MapPin, Calendar, Search } from "lucide-react"

export default function Hero() {
  const [activeTab, setActiveTab] = useState("rent")

  return (
    <section className="relative py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-purple-50 overflow-hidden ">
      <div className="absolute inset-y-0 right-0 w-full md:w-1/2 opacity-50">
        <Image
          src="/map.png"
          alt="Map background"
          fill
          className="object-cover object-center md:object-right"
          priority
        />
      </div>

      {/* <div className="absolute top-20 right-10 w-14 h-14">
  <Image src="/marker.svg" alt="Map marker" width={56} height={56} />
</div> */}

      {/* <div className="absolute bottom-40 left-1/2 w-14 h-14">
  <Image src="/marker.svg" alt="Map marker" width={56} height={56} />
</div> */}

      {/* Map blue markers (SVG) */}
      <div className="absolute top-20 right-10 w-7 h-7 bg-secondary rounded-full opacity-70"></div>
      <div className="absolute bottom-30 left-1/2 w-5 h-5 bg-secondary rounded-full opacity-40"></div>
      <div className="absolute top-1 right-1/3 w-3 h-3 bg-secondary rounded-full opacity-50"></div>
      {/* <div className="absolute top-1/3 right-1/4 w-4 h-4 bg-secondary rounded-full ">
      
      </div> */}
      <div className="absolute top-1/3 right-1/4 w-14 h-14">
        <Image src="/marker.svg" alt="Map marker" width={56} height={56} /></div>
      <div className="absolute top-1/4 right-1/8 w-6 h-6 bg-secondary rounded-full opacity-30"></div>
      <div className="absolute top-1/2 right-1/8 w-2 h-2 bg-secondary rounded-full opacity-50"></div>
      <div className="absolute bottom-40 right-1/13 w-5 h-5 bg-secondary rounded-full opacity-80"></div>




      <div className="max-w-7xl mx-auto relative z-10 ">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary leading-tight">
              Buy, rent, or sell your property easily
            </h1>
            <p className="text-base md:text-xl font-semibold ">
              A great platform to buy, sell, or even rent your properties without any commissions.
            </p>

            <div className="flex gap-10 py-6">
              <div className="border-l-2 border-secondary pl-4">
                <p className="text-3xl md:text-4xl font-bold text-secondary">50k+</p>
                <p className="text-sm font-bold text-muted-foreground">renters</p>
              </div>
              <div className="border-l-2 border-secondary pl-4">
                <p className="text-3xl md:text-4xl font-bold text-secondary">10k+</p>
                <p className="text-sm font-bold text-muted-foreground">properties</p>
              </div>
            </div>

            <div className="space-y-4 md:space-y-0">
              <div className="flex gap-0 font-bold bg-white rounded-t-lg w-fit overflow-x-auto">
                {["Rent", "Buy", "Sell"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab.toLowerCase())}
                    className={`px-4 md:px-8 py-3 md:py-4 body-medium-bold text-sm md:text-base transition whitespace-nowrap ${activeTab === tab.toLowerCase()
                      ? "text-purple-600 border-b-4 border-purple-600 bg-white"
                      : "text-gray-900 border-b border-purple-100 bg-white"
                      }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              <div className="bg-white rounded-b-lg rounded-tr-lg shadow-lg p-4 md:p-8 w-full">
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

                <div className="hidden md:flex gap-4 md:gap-6 items-end w-full">
                  <div className="flex-1 min-w-0">
                    <label className="block body-small-medium text-gray-700 mb-2">Location</label>
                    <div className="body-large-bold font-bold text-gray-900 truncate">Barcelona, Spain</div>
                  </div>

                  <div className="hidden md:block w-px h-12 bg-purple-100"></div>

                  <div className="flex-1 min-w-0">
                    <label className="block body-small-medium text-gray-700 mb-2">When</label>
                    <div className="flex items-center gap-2 md:gap-3">
                      <div className="body-large-bold font-bold text-gray-900 truncate">Select Move-in Date</div>
                      <Calendar size={16} className="text-gray-500 flex-shrink-0" />
                    </div>
                  </div>

                  <div className="hidden md:block w-px h-12 bg-purple-100"></div>

                  <button className="w-full md:w-auto px-6 md:px-8 py-3 bg-secondary text-white body-medium-bold rounded-lg hover:bg-secondary/90 transition whitespace-nowrap">
                    Browse Properties
                  </button>
                </div>
              </div>
            </div>
          </div>

<div className="relative h-96 md:h-full rounded-2xl overflow-hidden">
  <div className="space-y-4">

    {/* Beverly Springfield Card - Fixed */}
    <div className="bg-white rounded-lg shadow-lg p-1 w-80">
      <div className="relative h-50 bg-muted rounded mb-4 w-full">
        <Image src="/24.png" alt="Beverly Springfield" fill className="object-cover rounded" />
      </div>
      <p className="text-xl text-secondary font-semibold mb-2">$2,700 / month</p>
      <p className="text-2xl font-bold text-primary mb-2">Beverly Springfield</p>
      <p className="text-m text-muted-foreground font-semibold mb-1">2821 Lake Sevilla, Palm Harbor, TX</p>
      <div className="flex items-center justify-between text-xs text-muted-foreground mb-5">
        <span>4</span>
        <span>2</span>
        <span>6×7.5 m²</span>
      </div>
    </div>

    {/* Tarpon Bay Card - Already good */}
    <div className="bg-white rounded-lg shadow-lg p-3 ml-auto w-fit">
      <div className="relative h-40 bg-muted rounded mb-2 w-48">
        <Image src="/22.png" alt="Tarpon Bay" fill className="object-cover rounded" />
      </div>
      <p className="text-sm text-secondary font-semibold mb-1">$1,600 /month</p>
      <p className="text-base font-bold text-primary mb-1">Tarpon Bay</p>
      <p className="text-xs text-muted-foreground font-semibold mb-2">Palm Harbor, TX</p>
      <div className="flex items-center justify-between text-xs text-muted-foreground">
        <span>4</span>
        <span>2</span>
        <span>6×8 m²</span>
      </div>
    </div>
  </div>
</div>
        </div>
      </div>
    </section>
  )
}
