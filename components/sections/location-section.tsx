"use client"

import { useState } from "react"
import Image from "next/image"
import { Heart } from "lucide-react"

const properties = [
  {
    id: 1,
    image: "/1.png",
    title: "Beachfront Villa",
    location: "Malibu, California, US",
    price: "$4,850,000",
    beds: 5,
    baths: 4,
    sqft: 4500,
    rating: 4.8,
  },
  {
    id: 2,
    image: "/2.png",
    title: "Modern Apartment",
    location: "San Francisco, California, US",
    price: "$2,500,000",
    beds: 3,
    baths: 2,
    sqft: 2200,
    rating: 4.7,
  },
  {
    id: 3,
    image: "/3.png",
    title: "Mountain Retreat",
    location: "Aspen, Colorado, US",
    price: "$3,200,000",
    beds: 4,
    baths: 3,
    sqft: 3500,
    rating: 4.9,
  },
  {
    id: 4,
    image: "/4.png",
    title: "Contemporary Home",
    location: "Miami, Florida, US",
    price: "$2,100,000",
    beds: 3,
    baths: 2,
    sqft: 2800,
    rating: 4.6,
  },
  {
    id: 5,
    image: "/5.png",
    title: "Contemporary Home",
    location: "Miami, Florida, US",
    price: "$2,100,000",
    beds: 3,
    baths: 2,
    sqft: 2800,
    rating: 4.6,
  },
  {
    id: 6,
    image: "/6.png",
    title: "Contemporary Home",
    location: "Miami, Florida, US",
    price: "$2,100,000",
    beds: 3,
    baths: 2,
    sqft: 2800,
    rating: 4.6,
  },
  {
    id: 7,
    image: "/7.png",
    title: "Contemporary Home",
    location: "Miami, Florida, US",
    price: "$2,100,000",
    beds: 3,
    baths: 2,
    sqft: 2800,
    rating: 4.6,
  },
  {
    id: 8,
    image: "/8.png",
    title: "Contemporary Home",
    location: "Miami, Florida, US",
    price: "$2,100,000",
    beds: 3,
    baths: 2,
    sqft: 2800,
    rating: 4.6,
  },
  {
    id: 9,
    image: "/9.png",
    title: "Contemporary Home",
    location: "Miami, Florida, US",
    price: "$2,100,000",
    beds: 3,
    baths: 2,
    sqft: 2800,
    rating: 4.6,
  },
  {
    id: 10,
    image: "/10.png",
    title: "Contemporary Home",
    location: "Miami, Florida, US",
    price: "$2,100,000",
    beds: 3,
    baths: 2,
    sqft: 2800,
    rating: 4.6,
  },
  {
    id: 11,
    image: "/11.png",
    title: "Contemporary Home",
    location: "Miami, Florida, US",
    price: "$2,100,000",
    beds: 3,
    baths: 2,
    sqft: 2800,
    rating: 4.6,
  },
  {
    id: 12,
    image: "/12.png",
    title: "Contemporary Home",
    location: "Miami, Florida, US",
    price: "$2,100,000",
    beds: 3,
    baths: 2,
    sqft: 2800,
    rating: 4.6,
  },
  {
    id: 13,
    image: "/13.png",
    title: "Contemporary Home",
    location: "Miami, Florida, US",
    price: "$2,100,000",
    beds: 3,
    baths: 2,
    sqft: 2800,
    rating: 4.6,
  },
  {
    id: 14,
    image: "/14.png",
    title: "Contemporary Home",
    location: "Miami, Florida, US",
    price: "$2,100,000",
    beds: 3,
    baths: 2,
    sqft: 2800,
    rating: 4.6,
  },
  {
    id: 15,
    image: "/15.png",
    title: "Contemporary Home",
    location: "Miami, Florida, US",
    price: "$2,100,000",
    beds: 3,
    baths: 2,
    sqft: 2800,
    rating: 4.6,
  },
  {
    id: 16,
    image: "/16.png",
    title: "Contemporary Home",
    location: "Miami, Florida, US",
    price: "$2,100,000",
    beds: 3,
    baths: 2,
    sqft: 2800,
    rating: 4.6,
  },
  {
    id: 17,
    image: "/17.png",
    title: "Contemporary Home",
    location: "Miami, Florida, US",
    price: "$2,100,000",
    beds: 3,
    baths: 2,
    sqft: 2800,
    rating: 4.6,
  },
  {
    id: 18,
    image: "/18.png",
    title: "Contemporary Home",
    location: "Miami, Florida, US",
    price: "$2,100,000",
    beds: 3,
    baths: 2,
    sqft: 2800,
    rating: 4.6,
  },
  {
    id: 19,
    image: "/19.png",
    title: "Contemporary Home",
    location: "Miami, Florida, US",
    price: "$2,100,000",
    beds: 3,
    baths: 2,
    sqft: 2800,
    rating: 4.6,
  },
  {
    id: 20,
    image: "/20.png",
    title: "Contemporary Home",
    location: "Miami, Florida, US",
    price: "$2,100,000",
    beds: 3,
    baths: 2,
    sqft: 2800,
    rating: 4.6,
  },
  {
    id: 21,
    image: "/21.png",
    title: "Contemporary Home",
    location: "Miami, Florida, US",
    price: "$2,100,000",
    beds: 3,
    baths: 2,
    sqft: 2800,
    rating: 4.6,
  },
]

export default function LocationSection() {
  const [visibleCount, setVisibleCount] = useState(12) // show 3 rows initially (4 * 3 = 12)

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 12) // load 3 more rows on click
  }

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-start mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-2">
              Based on your location
            </h2>
            <p className="text-muted-foreground">
              Some of our picked properties near your location
            </p>
          </div>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {properties.slice(0, visibleCount).map((property) => (
            <div
              key={property.id}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition"
            >
              <div className="relative h-48 bg-muted overflow-hidden group">
                <Image
                  src={property.image || "/placeholder.svg"}
                  alt={property.title}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-300"
                />
                <button className="absolute top-3 right-3 p-2 bg-white rounded-full shadow hover:bg-gray-50 transition">
                  <Heart size={18} className="text-muted-foreground" />
                </button>
              </div>
              <div className="p-4">
                <p className="text-xs text-muted-foreground mb-1">Featured</p>
                <h3 className="font-bold text-primary mb-1">{property.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">{property.location}</p>
                <p className="text-xl font-bold text-secondary mb-3">{property.price}</p>
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>{property.beds} Beds</span>
                  <span>{property.baths} Baths</span>
                  <span>{property.sqft} sqft</span>
                  <span>⭐ {property.rating}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {visibleCount < properties.length && (
          <div className="flex justify-center mt-10">
            <button
              onClick={handleLoadMore}
              className="px-8 py-3 bg-secondary text-white rounded-lg font-medium hover:bg-secondary/90 transition"
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
