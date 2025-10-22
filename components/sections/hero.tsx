"use client"

import { useState } from "react"
import Image from "next/image"
import { MapPin, Calendar } from "lucide-react"

export default function Hero() {
  const [activeTab, setActiveTab] = useState("rent")

  return (
    <section className="relative py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      {/* Background map and decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <Image src="/abstract-map-background.png" alt="" fill className="object-cover" />
      </div>

      {/* Decorative circles */}
      <div className="absolute top-20 right-10 w-16 h-16 bg-secondary rounded-full opacity-20"></div>
      <div className="absolute bottom-40 left-1/2 w-12 h-12 bg-secondary rounded-full opacity-15"></div>
      <div className="absolute top-1/3 right-1/4 w-8 h-8 bg-secondary rounded-full opacity-10"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight">
              Buy, rent, or sell your property easily
            </h1>
            <p className="text-base md:text-lg text-muted-foreground">
              A great platform to buy, sell, or even rent your properties without any commissions.
            </p>

            {/* Stats */}
            <div className="flex gap-8 py-4">
              <div className="border-l-2 border-secondary pl-4">
                <p className="text-3xl md:text-4xl font-bold text-secondary">50k+</p>
                <p className="text-sm text-muted-foreground">renters</p>
              </div>
              <div className="border-l-2 border-secondary pl-4">
                <p className="text-3xl md:text-4xl font-bold text-secondary">10k+</p>
                <p className="text-sm text-muted-foreground">properties</p>
              </div>
            </div>

            {/* Search Tabs */}
            <div className="space-y-4 pt-4">
              <div className="flex gap-4 border-b border-border">
                {["Rent", "Buy", "Sell"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab.toLowerCase())}
                    className={`px-4 py-3 text-sm font-medium border-b-2 transition ${
                      activeTab === tab.toLowerCase()
                        ? "border-secondary text-secondary"
                        : "border-transparent text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Search Form */}
              <div className="space-y-3 bg-white p-4 rounded-lg border border-border">
                <div className="flex flex-col md:flex-row gap-3">
                  <div className="flex-1 flex items-center gap-2 bg-muted rounded px-4 py-3">
                    <MapPin size={18} className="text-muted-foreground flex-shrink-0" />
                    <input
                      type="text"
                      placeholder="Barcelona, Spain"
                      className="flex-1 outline-none text-sm bg-transparent text-foreground placeholder:text-muted-foreground"
                    />
                  </div>
                  <button className="flex items-center gap-2 px-4 py-3 bg-muted rounded text-sm text-muted-foreground hover:bg-muted/80 transition">
                    <Calendar size={18} />
                    <span className="hidden sm:inline">Select Move-in Date</span>
                    <span className="sm:hidden">Date</span>
                  </button>
                </div>
                <button className="w-full bg-secondary text-white py-3 rounded-lg font-medium hover:bg-secondary/90 transition">
                  Browse Properties
                </button>
              </div>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="relative h-96 md:h-full min-h-96 rounded-2xl overflow-hidden">
            {/* Main Image */}
            <div className="relative h-64 bg-muted rounded-2xl overflow-hidden mb-4">
              <Image src="/luxury-property-apartment.jpg" alt="Property showcase" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-transparent" />
            </div>

            {/* Floating Cards */}
            <div className="space-y-4">
              {/* Card 1 - Beverly Springfield */}
              <div className="bg-white rounded-lg shadow-lg p-4 max-w-xs">
                <p className="text-sm text-secondary font-semibold mb-1">$2,700</p>
                <p className="text-base font-bold text-primary mb-1">Beverly Springfield</p>
                <p className="text-xs text-muted-foreground mb-3">2821 Lake Sevilla, Palm Harbor, TX</p>
                <div className="flex gap-3 text-xs text-muted-foreground">
                  <span>4</span>
                  <span>2</span>
                  <span>6x7.5 m²</span>
                </div>
              </div>

              {/* Card 2 - Tarpon Bay */}
              <div className="bg-white rounded-lg shadow-lg p-4 max-w-xs ml-auto">
                <div className="relative h-24 bg-muted rounded mb-3">
                  <Image src="/tarpon-bay-property.jpg" alt="Tarpon Bay" fill className="object-cover rounded" />
                </div>
                <p className="text-sm text-secondary font-semibold mb-1">$1,600</p>
                <p className="text-base font-bold text-primary mb-1">Tarpon Bay</p>
                <p className="text-xs text-muted-foreground">Palm Harbor, TX</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
