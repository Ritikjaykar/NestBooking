"use client"

import { useState } from "react"
import Link from "next/link"
import { Heart, MapPin, Bed, Bath, Ruler as Ruler2, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { propertiesData } from "@/app/lib/properties-data"

export default function PropertiesPage() {
  const [currentPage, setCurrentPage] = useState(1)
  const [favorites, setFavorites] = useState<number[]>([])
  const itemsPerPage = 6
  const totalPages = Math.ceil(propertiesData.length / itemsPerPage)
  const startIdx = (currentPage - 1) * itemsPerPage
  const displayedProperties = propertiesData.slice(startIdx, startIdx + itemsPerPage)

  const toggleFavorite = (id: number) => {
    setFavorites((prev) => (prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]))
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-accent"></div>
              <span className="text-lg font-bold text-foreground">Nestbooking</span>
            </div>
            <nav className="hidden gap-8 md:flex">
              <a href="#" className="text-sm font-medium text-foreground hover:text-accent">
                Rent
              </a>
              <a href="#" className="text-sm font-medium text-foreground hover:text-accent">
                Buy
              </a>
              <a href="#" className="text-sm font-medium text-foreground hover:text-accent">
                Sell
              </a>
              <a href="#" className="text-sm font-medium text-foreground hover:text-accent">
                Manage Property
              </a>
              <a href="#" className="text-sm font-medium text-foreground hover:text-accent">
                Resources
              </a>
            </nav>
<div className="flex gap-2">
  <Link href="/login" passHref>
    <Button variant="outline" size="sm">
      Login
    </Button>
  </Link>
  <Link href="/signup" passHref>
    <Button size="sm" className="bg-accent text-accent-foreground hover:bg-accent/90">
      Sign up
    </Button>
  </Link>
</div>
          </div>
        </div>
      </header>

      {/* Search Section */}
      <section className="border-b border-border bg-card py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="mb-6 text-3xl font-bold text-foreground">Search properties to rent</h1>
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:gap-3">
            <div className="flex-1">
              <label className="mb-2 block text-sm font-medium text-foreground">Location</label>
              <Input
                placeholder="New York, USA"
                className="bg-input text-foreground placeholder:text-muted-foreground"
              />
            </div>
            <div className="flex-1">
              <label className="mb-2 block text-sm font-medium text-foreground">When</label>
              <Input placeholder="Select Move-in Date" type="date" className="bg-input text-foreground" />
            </div>
            <div className="flex-1">
              <label className="mb-2 block text-sm font-medium text-foreground">Price</label>
              <Select>
                <SelectTrigger className="bg-input text-foreground">
                  <SelectValue placeholder="$500 - $2,500" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="500-1000">$500 - $1,000</SelectItem>
                  <SelectItem value="1000-2000">$1,000 - $2,000</SelectItem>
                  <SelectItem value="2000-3000">$2,000 - $3,000</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex-1">
              <label className="mb-2 block text-sm font-medium text-foreground">Property type</label>
              <Select>
                <SelectTrigger className="bg-input text-foreground">
                  <SelectValue placeholder="Houses" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="houses">Houses</SelectItem>
                  <SelectItem value="apartments">Apartments</SelectItem>
                  <SelectItem value="condos">Condos</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90 lg:w-auto">Search</Button>
          </div>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {displayedProperties.map((property) => (
              <Link key={property.id} href={`/properties/${property.id}`}>
                <div className="overflow-hidden rounded-lg border border-border bg-card transition-shadow hover:shadow-lg cursor-pointer">
                  <div className="relative">
                    <img
                      src={property.image || "/placeholder.svg"}
                      alt={property.title}
                      className="h-48 w-full object-cover"
                    />
                    {property.popular && (
                      <div className="absolute left-3 top-3 rounded bg-accent px-2 py-1 text-xs font-semibold text-accent-foreground">
                        POPULAR
                      </div>
                    )}
                    <button
                      onClick={(e) => {
                        e.preventDefault()
                        toggleFavorite(property.id)
                      }}
                      className="absolute right-3 top-3 rounded-full bg-background p-2 text-foreground hover:bg-muted"
                    >
                      <Heart size={20} className={favorites.includes(property.id) ? "fill-current text-red-500" : ""} />
                    </button>
                  </div>
                  <div className="p-4">
                    <div className="mb-2 flex items-baseline gap-2">
                      <span className="text-2xl font-bold text-[#7065F0]">${property.price}</span>
                      <span className="text-sm text-muted-foreground">/month</span>
                    </div>
                    <h3 className="mb-1 text-lg font-semibold text-foreground">{property.title}</h3>
                    <p className="mb-4 flex items-center gap-1 text-sm text-muted-foreground">
                      <MapPin size={16} />
                      {property.location}
                    </p>
                    <div className="flex gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Bed size={16} />
                        {property.beds} Beds
                      </div>
                      <div className="flex items-center gap-1">
                        <Bath size={16} />
                        {property.baths} Bathrooms
                      </div>
                      <div className="flex items-center gap-1">
                        <Ruler2 size={16} />
                        {property.sqft} sqft
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-12 flex items-center justify-center gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
            >
              <ChevronLeft size={20} />
            </Button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <Button
                key={page}
                variant={currentPage === page ? "default" : "outline"}
                size="sm"
                onClick={() => setCurrentPage(page)}
                className={currentPage === page ? "bg-accent text-accent-foreground hover:bg-accent/90" : ""}
              >
                {page}
              </Button>
            ))}
            <Button
              variant="outline"
              size="icon"
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
            >
              <ChevronRight size={20} />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
            <div>
              <div className="mb-4 flex items-center gap-2">
                <div className="h-6 w-6 rounded bg-accent"></div>
                <span className="font-bold text-foreground">Nestbooking</span>
              </div>
            </div>
            <div>
              <h4 className="mb-4 font-semibold text-foreground">SELL A HOME</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground">
                    Request an offer
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground">
                    Reviews
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 font-semibold text-foreground">BUY, RENT AND SELL</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground">
                    Buy and sell properties
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground">
                    Rent home
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 font-semibold text-foreground">ABOUT</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground">
                    Company
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground">
                    How it works
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 font-semibold text-foreground">RESOURCES</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground">
                    Guides
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>© 2025 Nestbooking. All rights reserved</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
