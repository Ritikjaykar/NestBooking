import Link from "next/link"
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-white border-t border-border">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">N</span>
              </div>
              <span className="font-bold text-primary">Nestbooking</span>
            </div>
          </div>

          {/* Sell a Home */}
          <div>
            <h4 className="font-bold text-primary text-sm mb-4">SELL A HOME</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition">
                  Request an offer
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition">
                  Reviews
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition">
                  Stories
                </Link>
              </li>
            </ul>
          </div>

          {/* Buy a Home */}
          <div>
            <h4 className="font-bold text-primary text-sm mb-4">BUY A HOME</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition">
                  Buy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition">
                  Finance
                </Link>
              </li>
            </ul>
          </div>

          {/* Buy, Rent and Sell */}
          <div>
            <h4 className="font-bold text-primary text-sm mb-4">BUY, RENT AND SELL</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition">
                  Buy and sell properties
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition">
                  Rent home
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition">
                  Builder trade-up
                </Link>
              </li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="font-bold text-primary text-sm mb-4">ABOUT</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition">
                  Company
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition">
                  How it works
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition">
                  Investors
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Terms & Privacy and Resources Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Empty column for alignment */}
          <div></div>

          {/* Terms & Privacy */}
          <div>
            <h4 className="font-bold text-primary text-sm mb-4">TERMS & PRIVACY</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition">
                  Trust & Safety
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Empty column */}
          <div></div>

          {/* Resources */}
          <div>
            <h4 className="font-bold text-primary text-sm mb-4">RESOURCES</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition">
                  Guides
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition">
                  Help Center
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-border bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">© 2021 Nestbooking. All rights reserved</p>
            <div className="flex gap-4">
              <Link href="#" className="text-muted-foreground hover:text-primary transition">
                <Facebook size={20} />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition">
                <Instagram size={20} />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition">
                <Twitter size={20} />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition">
                <Linkedin size={20} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
