"use client"

import Image from "next/image"
import { Heart, Bed, Bath, Maximize2 } from "lucide-react"

const sponsoredProperties = [
  {
    id: 1,
    image: "/22.png",
    title: "Palm Harbor",
    location: "2699 Green Valley, Highland Lake, FL",
    price: "$2,095",
    priceType: "/month",
    beds: 3,
    baths: 2,
    sqft: "5x7 m²",
    popular: true,
  },
  {
    id: 2,
    image: "/23.png",
    title: "Beverly Springfield",
    location: "2821 Lake Sevilla, Palm Harbor, TX",
    price: "$2,700",
    priceType: "/month",
    beds: 4,
    baths: 2,
    sqft: "6x7.5 m²",
    popular: true,
  },
  {
    id: 3,
    image: "/24.png",
    title: "Faulkner Ave",
    location: "909 Woodland St, Michigan, IN",
    price: "$4,550",
    priceType: "/month",
    beds: 4,
    baths: 3,
    sqft: "8x10 m²",
    popular: true,
  },
  {
    id: 4,
    image: "/25.png",
    title: "St. Crystal",
    location: "210 US Highway, Highland Lake, FL",
    price: "$2,400",
    priceType: "/month",
    beds: 4,
    baths: 2,
    sqft: "6x8 m²",
    popular: false,
  },
  {
    id: 5,
    image: "/13.png",
    title: "Cove Red",
    location: "243 Curlew Road, Palm Harbor, TX",
    price: "$1,500",
    priceType: "/month",
    beds: 2,
    baths: 1,
    sqft: "5x7.5 m²",
    popular: false,
  },
  {
    id: 6,
    image: "/12.png",
    title: "Tarpon Bay",
    location: "103 Lake Shores, Michigan, IN",
    price: "$1,600",
    priceType: "/month",
    beds: 3,
    baths: 1,
    sqft: "5x7 m²",
    popular: false,
  },
]

export default function SponsoredSection() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-purple-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-2">Sponsored Properties</h2>
            <p className="text-muted-foreground">Some of our picked properties near you location.</p>
          </div>
          <button className="px-6 py-2 bg-secondary text-white rounded-lg font-medium hover:bg-secondary/90 transition whitespace-nowrap">
            Browse more properties
          </button>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sponsoredProperties.map((property) => (
            <div key={property.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
              {/* Image Container */}
              <div className="relative h-48 bg-muted overflow-hidden group">
                <Image
                  src={property.image || "/placeholder.svg"}
                  alt={property.title}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-300"
                />
                {/* Popular Badge */}
                {property.popular && (
                  <div className="absolute top-3 left-3 px-3 py-1 bg-secondary text-white text-xs font-bold rounded flex items-center gap-1">
                    <span>✦</span> POPULAR
                  </div>
                )}
                {/* Heart Button */}
                <button className="absolute top-3 right-3 p-2 bg-white rounded-full shadow hover:bg-gray-50 transition">
                  <Heart size={18} className="text-muted-foreground" />
                </button>
              </div>

              {/* Content */}
              <div className="p-4">
                <div className="flex items-baseline gap-1 mb-2">
                  <p className="text-lg font-bold text-secondary">{property.price}</p>
                  <p className="text-xs text-muted-foreground">{property.priceType}</p>
                </div>
                <h3 className="font-bold text-primary text-base mb-1">{property.title}</h3>
                <p className="text-xs text-muted-foreground mb-4">{property.location}</p>

                {/* Property Details */}
                <div className="flex gap-4 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Bed size={16} className="text-secondary" />
                    <span>{property.beds} Beds</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Bath size={16} className="text-secondary" />
                    <span>{property.baths} Bathrooms</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Maximize2 size={16} className="text-secondary" />
                    <span>{property.sqft}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
