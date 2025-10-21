"use client"
import Link from "next/link"
import Image from "next/image"
import { ChevronDown, Menu, X } from "lucide-react"
import { useState } from "react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="w-full bg-white/40 backdrop-blur-2xl border-b border-purple-100 z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 md:py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
  <Image
    src="/image.png"
    alt="Nestbooking Logo"
    width={40}      // adjust size as needed
    height={40}
    className="rounded-full"
  />
  <span className="text-lg md:text-xl font-bold text-gray-900">
    Nestbooking
  </span>
</div>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 hover:bg-purple-100 rounded-lg transition">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Navigation - Desktop */}
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

        {/* Auth Buttons - Desktop */}
        <div className="hidden md:flex items-center gap-4">
          <button className="px-6 py-2 body-medium-bold text-gray-900 border-2 border-purple-100 rounded-lg hover:border-purple-300 transition">
            Login
          </button>
          <button className="px-6 py-2 bg-purple-600 text-white body-medium-bold rounded-lg hover:bg-purple-700 transition">
            Sign up
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-purple-100 bg-white/95 backdrop-blur-xl">
          <nav className="flex flex-col gap-4 px-4 py-6">
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
            <div className="flex gap-3 pt-4 border-t border-purple-100">
              <button className="flex-1 px-4 py-2 body-medium-bold text-gray-900 border-2 border-purple-100 rounded-lg hover:border-purple-300 transition">
                Login
              </button>
              <button className="flex-1 px-4 py-2 bg-purple-600 text-white body-medium-bold rounded-lg hover:bg-purple-700 transition">
                Sign up
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
