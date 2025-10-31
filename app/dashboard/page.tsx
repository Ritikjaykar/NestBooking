"use client"

import Link from "next/link"
import { Bell, LogOut, User } from "lucide-react"
import { useState } from "react"

export default function DashboardPage() {
  const [isProfileOpen, setIsProfileOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-purple-700 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">N</span>
            </div>
            <span className="font-bold text-slate-900">Nestbooking</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <span className="text-slate-900 font-semibold">Dashboard</span>
            <Link href="/dashboard/applications" className="text-slate-600 hover:text-slate-900 transition">
              Applications
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <button className="p-2 text-slate-600 hover:text-slate-900 transition">
              <Bell size={20} />
            </button>

            <div className="relative">
              <button
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="flex items-center gap-2 px-3 py-2 bg-purple-100 rounded-lg hover:bg-purple-200 transition"
              >
                <div className="w-7 h-7 bg-gradient-to-r from-purple-600 to-purple-700 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  GI
                </div>
                <span className="text-sm font-semibold text-slate-900">Giovanni</span>
              </button>

              {isProfileOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-slate-200 py-2 z-50">
                  <Link
                    href="#"
                    className="block px-4 py-2 text-slate-900 hover:bg-slate-50 flex items-center gap-2 transition"
                  >
                    <User size={16} /> My Profile
                  </Link>
                  <Link
                    href="#"
                    className="block px-4 py-2 text-slate-900 hover:bg-slate-50 flex items-center gap-2 transition"
                  >
                    <User size={16} /> My Info
                  </Link>
                  <hr className="my-2" />
                  <button className="w-full text-left px-4 py-2 text-slate-900 hover:bg-slate-50 flex items-center gap-2 transition">
                    <LogOut size={16} /> Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-slate-900 mb-2">Welcome back, Giovanni</h1>
          <p className="text-slate-600">Complete your rental application to get started</p>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link
            href="/dashboard/applications"
            className="bg-white border border-slate-200 rounded-lg p-6 hover:shadow-lg transition cursor-pointer group"
          >
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-200 transition">
              <span className="text-2xl">📋</span>
            </div>
            <h3 className="font-semibold text-slate-900 mb-2">Start Application</h3>
            <p className="text-sm text-slate-600">Complete your 4-step tenancy application</p>
          </Link>

          <div className="bg-white border border-slate-200 rounded-lg p-6">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">📄</span>
            </div>
            <h3 className="font-semibold text-slate-900 mb-2">Application Progress</h3>
            <p className="text-2xl font-bold text-slate-900">0%</p>
            <p className="text-xs text-slate-500 mt-1">Not started</p>
          </div>

          <div className="bg-white border border-slate-200 rounded-lg p-6">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">✓</span>
            </div>
            <h3 className="font-semibold text-slate-900 mb-2">Status</h3>
            <p className="text-sm text-green-600 font-medium">Ready to apply</p>
          </div>
        </div>

        {/* Application Steps Info */}
        <div className="mt-12 bg-white border border-slate-200 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Your Application Journey</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold mx-auto mb-3">
                1
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Personal</h3>
              <p className="text-sm text-slate-600">Your details and contact info</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-slate-300 text-slate-600 rounded-full flex items-center justify-center font-bold mx-auto mb-3">
                2
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Employment</h3>
              <p className="text-sm text-slate-600">Employment status</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-slate-300 text-slate-600 rounded-full flex items-center justify-center font-bold mx-auto mb-3">
                3
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Living Arrangements</h3>
              <p className="text-sm text-slate-600">Rental history</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-slate-300 text-slate-600 rounded-full flex items-center justify-center font-bold mx-auto mb-3">
                4
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Documents</h3>
              <p className="text-sm text-slate-600">Upload required files</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
