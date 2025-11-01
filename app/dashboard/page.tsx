"use client"

import Link from "next/link"
import { Home, TrendingUp, DollarSign, Package, Star, Building2, History, Bell } from "lucide-react"

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation Section */}
      <div className="border-b border-gray-200 px-6 py-4 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Left - Logo */}
          <div className="flex items-center gap-2 md:w-[200px]">
            <div
              style={{ backgroundColor: "#6366f1" }}
              className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-md"
            >
              N
            </div>
            <span className="font-bold text-gray-900 text-xl">Nestbooking</span>
          </div>

          {/* Center - Buttons */}
          <div className="flex flex-wrap justify-center gap-8 w-full md:w-auto">
            <button className="text-gray-700 hover:text-accent transition font-semibold text-base">
              Manage Properties
            </button>
            <button className="text-gray-700 hover:text-accent transition font-semibold text-base">
              Claim your Properties
            </button>
            <button className="text-gray-700 hover:text-accent transition font-semibold text-base">
              Search
            </button>
          </div>

          {/* Right - Back to Home */}
          <div className="md:w-[200px] flex justify-end">
            <Link href="/" passHref>
              <button className="text-gray-700 hover:text-accent transition font-bold text-base">
                Back to Home
              </button>
            </Link>
          </div>
        </div>
      </div>

      <main className="px-6 py-8">
        <div className="max-w-7xl mx-auto">
          {/* Dashboard Title */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard Overview</h1>
            <p className="text-gray-600">Welcome back! Here's what's happening with your properties.</p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Link
              href="/total_Prop"
              className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div
                    style={{ backgroundColor: "#EEF2FF" }}
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                  >
                    <Package size={24} style={{ color: "#6366f1" }} />
                  </div>
                </div>
                <TrendingUp size={20} className="text-green-500" />
              </div>
              <p className="text-gray-600 text-sm font-medium mb-1">Total Properties</p>
              <p className="text-3xl font-bold text-gray-900">0</p>
            </Link>

            <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div
                    style={{ backgroundColor: "#FEF3F2" }}
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                  >
                    <Home size={24} style={{ color: "#EF4444" }} />
                  </div>
                </div>
                <TrendingUp size={20} className="text-green-500" />
              </div>
              <p className="text-gray-600 text-sm font-medium mb-1">Rented Properties</p>
              <p className="text-3xl font-bold text-gray-900">0</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div
                    style={{ backgroundColor: "#FEF9C3" }}
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                  >
                    <Star size={24} style={{ color: "#EAB308" }} />
                  </div>
                </div>
                <TrendingUp size={20} className="text-green-500" />
              </div>
              <p className="text-gray-600 text-sm font-medium mb-1">For Sale</p>
              <p className="text-3xl font-bold text-gray-900">0</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div
                    style={{ backgroundColor: "#D1FAE5" }}
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                  >
                    <DollarSign size={24} style={{ color: "#10B981" }} />
                  </div>
                </div>
                <TrendingUp size={20} className="text-green-500" />
              </div>
              <p className="text-gray-600 text-sm font-medium mb-1">Total Revenue</p>
              <p className="text-3xl font-bold text-gray-900">₹0</p>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Property Status */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-gray-900 text-xl font-bold">Property Status</h2>
                <button className="text-sm text-indigo-600 hover:text-indigo-700 font-semibold">View All</button>
              </div>
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="relative w-28 h-28 mx-auto mb-4">
                    <svg className="w-full h-full transform -rotate-90">
                      <circle
                        cx="56"
                        cy="56"
                        r="52"
                        stroke="#E5E7EB"
                        strokeWidth="8"
                        fill="none"
                      />
                      <circle
                        cx="56"
                        cy="56"
                        r="52"
                        stroke="#6366f1"
                        strokeWidth="8"
                        fill="none"
                        strokeDasharray="326.73"
                        strokeDashoffset="326.73"
                        strokeLinecap="round"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-2xl font-bold text-gray-900">0</span>
                    </div>
                  </div>
                  <p className="text-gray-700 font-semibold text-sm">Booked</p>
                </div>
                <div className="text-center">
                  <div className="relative w-28 h-28 mx-auto mb-4">
                    <svg className="w-full h-full transform -rotate-90">
                      <circle
                        cx="56"
                        cy="56"
                        r="52"
                        stroke="#E5E7EB"
                        strokeWidth="8"
                        fill="none"
                      />
                      <circle
                        cx="56"
                        cy="56"
                        r="52"
                        stroke="#10B981"
                        strokeWidth="8"
                        fill="none"
                        strokeDasharray="326.73"
                        strokeDashoffset="326.73"
                        strokeLinecap="round"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-2xl font-bold text-gray-900">0</span>
                    </div>
                  </div>
                  <p className="text-gray-700 font-semibold text-sm">Registered</p>
                </div>
                <div className="text-center">
                  <div className="relative w-28 h-28 mx-auto mb-4">
                    <svg className="w-full h-full transform -rotate-90">
                      <circle
                        cx="56"
                        cy="56"
                        r="52"
                        stroke="#E5E7EB"
                        strokeWidth="8"
                        fill="none"
                      />
                      <circle
                        cx="56"
                        cy="56"
                        r="52"
                        stroke="#EAB308"
                        strokeWidth="8"
                        fill="none"
                        strokeDasharray="326.73"
                        strokeDashoffset="326.73"
                        strokeLinecap="round"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-2xl font-bold text-gray-900">0</span>
                    </div>
                  </div>
                  <p className="text-gray-700 font-semibold text-sm">Delivered</p>
                </div>
              </div>
            </div>

            {/* Total Investment */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-gray-900 text-xl font-bold flex items-center gap-2">
                  <TrendingUp size={20} className="text-indigo-600" />
                  Total Investment
                </h2>
                <button className="text-sm text-indigo-600 hover:text-indigo-700 font-semibold">View All</button>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between">
                    <p className="text-gray-600 font-medium">Investment 1</p>
                    <span className="text-gray-400 text-sm">--</span>
                  </div>
                </div>
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between">
                    <p className="text-gray-600 font-medium">Investment 2</p>
                    <span className="text-gray-400 text-sm">--</span>
                  </div>
                </div>
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between">
                    <p className="text-gray-600 font-medium">Investment 3</p>
                    <span className="text-gray-400 text-sm">--</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Payment History */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-gray-900 text-xl font-bold flex items-center gap-2">
                  <History size={20} className="text-indigo-600" />
                  Payment History
                </h2>
                <button className="text-sm text-indigo-600 hover:text-indigo-700 font-semibold">View All</button>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between">
                    <p className="text-gray-600 font-medium">Payment Record 1</p>
                    <span className="text-gray-400 text-sm">--</span>
                  </div>
                </div>
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between">
                    <p className="text-gray-600 font-medium">Payment Record 2</p>
                    <span className="text-gray-400 text-sm">--</span>
                  </div>
                </div>
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between">
                    <p className="text-gray-600 font-medium">Payment Record 3</p>
                    <span className="text-gray-400 text-sm">--</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Builder's Update */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-gray-900 text-xl font-bold flex items-center gap-2">
                  <Bell size={20} className="text-indigo-600" />
                  Builder's Update
                </h2>
                <button className="text-sm text-indigo-600 hover:text-indigo-700 font-semibold">View All</button>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between">
                    <p className="text-gray-600 font-medium">Update 1</p>
                    <span className="text-gray-400 text-sm">--</span>
                  </div>
                </div>
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between">
                    <p className="text-gray-600 font-medium">Update 2</p>
                    <span className="text-gray-400 text-sm">--</span>
                  </div>
                </div>
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between">
                    <p className="text-gray-600 font-medium">Update 3</p>
                    <span className="text-gray-400 text-sm">--</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}