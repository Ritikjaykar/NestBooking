"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronDown, Menu, X } from "lucide-react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">N</span>
            </div>
            <span className="font-bold text-lg text-primary hidden sm:inline">Nestbooking</span>
          </Link>

          {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-12">
          <Link href="#" className="body-medium-bold text-gray-900 hover:text-purple-600 transition">
            Rent
          </Link>
          <Link href="#" className="body-medium-bold text-gray-900 hover:text-purple-600 transition">
            Buy
          </Link>
          <Link href="#" className="body-medium-bold text-gray-900 hover:text-purple-600 transition">
            Sell
          </Link>
          <div className="flex items-center gap-1 body-medium-bold text-gray-900 hover:text-purple-600 transition cursor-pointer">
            <span>Manage Property</span>
            <ChevronDown size={16} />
          </div>
          <div className="flex items-center gap-1 body-medium-bold text-gray-900 hover:text-purple-600 transition cursor-pointer">
            <span>Resources</span>
            <ChevronDown size={16} />
          </div>
        </nav>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Link href="#" className="text-sm text-foreground hover:text-secondary transition">
              Login
            </Link>
            <Link
              href="#"
              className="px-6 py-2 bg-secondary text-white rounded-lg text-sm font-medium hover:bg-secondary/90 transition"
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden pb-4 space-y-2">
            <Link href="#" className="block px-4 py-2 text-sm text-foreground hover:bg-muted rounded">
              Rent
            </Link>
            <Link href="#" className="block px-4 py-2 text-sm text-foreground hover:bg-muted rounded">
              Buy
            </Link>
            <Link href="#" className="block px-4 py-2 text-sm text-foreground hover:bg-muted rounded">
              Sell
            </Link>
            <Link href="#" className="block px-4 py-2 text-sm text-foreground hover:bg-muted rounded">
              Manage Property
            </Link>
            <Link href="#" className="block px-4 py-2 text-sm text-foreground hover:bg-muted rounded">
              Resources
            </Link>
            <div className="flex gap-2 pt-2">
              <Link href="#" className="flex-1 px-4 py-2 text-sm text-foreground hover:bg-muted rounded text-center">
                Login
              </Link>
              <Link
                href="#"
                className="flex-1 px-4 py-2 bg-secondary text-white rounded text-sm font-medium text-center"
              >
                Sign Up
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
