"use client"

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
    id: 4,
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
    id: 4,
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
    id: 4,
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
    id: 4,
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
    id: 4,
    image: "/9.png",
    title: "Contemporary Home",
    location: "Miami, Florida, US",
    price: "$2,100,000",
    beds: 3,
    baths: 2,
    sqft: 2800,
    rating: 4.6,
  },  {
    id: 4,
    image: "/10.png",
    title: "Contemporary Home",
    location: "Miami, Florida, US",
    price: "$2,100,000",
    beds: 3,
    baths: 2,
    sqft: 2800,
    rating: 4.6,
  },  {
    id: 4,
    image: "/11.png",
    title: "Contemporary Home",
    location: "Miami, Florida, US",
    price: "$2,100,000",
    beds: 3,
    baths: 2,
    sqft: 2800,
    rating: 4.6,
  },  {
    id: 4,
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
    id: 4,
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
    id: 4,
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
    id: 4,
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
    id: 4,
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
    id: 4,
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
    id: 4,
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
    id: 4,
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
    id: 4,
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
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-start mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-2">Based on your location</h2>
            <p className="text-muted-foreground">Some of our picked properties near you location</p>
          </div>
          <button className="hidden md:block px-6 py-2 bg-secondary text-white rounded-lg font-medium hover:bg-secondary/90 transition">
            Browse more properties
          </button>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {properties.map((property) => (
            <div key={property.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
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

        <button className="md:hidden w-full mt-8 px-6 py-3 bg-secondary text-white rounded-lg font-medium hover:bg-secondary/90 transition">
          Browse more properties
        </button>
      </div>
    </section>
  )
}
