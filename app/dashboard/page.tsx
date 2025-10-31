"use client"

import Link from "next/link"


export default function DashboardPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#FFFFFF" }}>
      <div style={{ backgroundColor: "#FFFFFF" }} className="border-b border-[#E5E6EB] px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">

        </div>
      </div>

      <div style={{ backgroundColor: "#FFFFFF" }} className="border-b border-[#E5E6EB] px-6 py-4">
        <div className="max-w-5xl mx-auto flex flex-wrap gap-3">
          <button className="px-4 py-2 border-2 border-white text-[#000929] rounded-lg hover:bg-[#F9FAFB] transition font-bold text-lg bg-white">
            Manage Properties
          </button>
          <button className="px-4 py-2 border-2 border-white text-[#000929] rounded-lg hover:bg-[#F9FAFB] transition font-bold text-lg bg-white">
            Claim your Properties
          </button>
          <button className="px-4 py-2 border-2 border-white text-[#000929] rounded-lg hover:bg-[#F9FAFB] transition font-bold text-lg bg-white">
            Search
          </button>
          <button className="px-4 py-2 border-2 border-white text-[#000929] rounded-lg hover:bg-[#F9FAFB] transition font-bold text-lg bg-white ml-auto">
            Back to Home
          </button>
        </div>
      </div>

      <main className="px-6 py-8">
        <div className="max-w-7xl mx-auto">
          {/* Stats Grid */}
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <Link
            href="/total_Prop"
            className="border rounded-2xl p-6 hover:shadow-md transition transform hover:-translate-y-1"
              style={{ backgroundColor: "#F9FAFB", borderColor: "#E5E6EB" }}
            >
            <div style={{ backgroundColor: "#F9FAFB", borderColor: "#E5E6EB" }} className="border rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <div
                  style={{ backgroundColor: "#F0EFFB" }}
                  className="w-10 h-10 rounded-lg flex items-center justify-center text-[#6366F1] text-lg font-bold"
                >
                  📦
                </div>
                <span className="text-[#6C727F] text-sm font-medium">
                  Total
                  <br />
                  Properties
                </span>
              </div>
              <p className="text-2xl font-bold text-[#000929]">0</p>
            </div>
            </Link>

            <div style={{ backgroundColor: "#F9FAFB", borderColor: "#E5E6EB" }} className="border rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <div
                  style={{ backgroundColor: "#F0EFFB" }}
                  className="w-10 h-10 rounded-lg flex items-center justify-center text-[#6366F1] text-lg font-bold"
                >
                  ⭐
                </div>
                <span className="text-[#6C727F] text-sm font-medium">
                  Rented
                  <br />
                  Properties
                </span>
              </div>
              <p className="text-2xl font-bold text-[#000929]">0</p>
            </div>

            <div style={{ backgroundColor: "#F9FAFB", borderColor: "#E5E6EB" }} className="border rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <div
                  style={{ backgroundColor: "#F0EFFB" }}
                  className="w-10 h-10 rounded-lg flex items-center justify-center text-[#6366F1] text-lg font-bold"
                >
                  💎
                </div>
                <span className="text-[#6C727F] text-sm font-medium">For Sale</span>
              </div>
              <p className="text-2xl font-bold text-[#000929]">0</p>
            </div>

            <div style={{ backgroundColor: "#F9FAFB", borderColor: "#E5E6EB" }} className="border rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <div
                  style={{ backgroundColor: "#F0EFFB" }}
                  className="w-10 h-10 rounded-lg flex items-center justify-center text-[#6366F1] text-lg font-bold"
                >
                  💰
                </div>
                <span className="text-[#6C727F] text-sm font-medium">Revenue</span>
              </div>
              <p className="text-2xl font-bold text-[#000929]">0 Rs</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div style={{ backgroundColor: "#F9FAFB", borderColor: "#E5E6EB" }} className="border rounded-2xl p-6">
              <h2 className="text-[#000929] text-lg font-bold mb-8">Property Status</h2>
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div
                    style={{ borderColor: "#E5E6EB" }}
                    className="w-32 h-32 mx-auto mb-4 rounded-full border-4 flex items-center justify-center"
                  >
                    <span className="text-3xl font-bold text-[#6366F1]">0</span>
                  </div>
                  <p className="text-[#000929] font-medium">Booked</p>
                </div>
                <div className="text-center">
                  <div
                    style={{ borderColor: "#E5E6EB" }}
                    className="w-32 h-32 mx-auto mb-4 rounded-full border-4 flex items-center justify-center"
                  >
                    <span className="text-3xl font-bold text-[#6366F1]">0</span>
                  </div>
                  <p className="text-[#000929] font-medium">Registered</p>
                </div>
                <div className="text-center">
                  <div
                    style={{ borderColor: "#E5E6EB" }}
                    className="w-32 h-32 mx-auto mb-4 rounded-full border-4 flex items-center justify-center"
                  >
                    <span className="text-3xl font-bold text-[#6366F1]">0</span>
                  </div>
                  <p className="text-[#000929] font-medium">Delivered</p>
                </div>
              </div>
            </div>

            <div style={{ backgroundColor: "#F9FAFB", borderColor: "#E5E6EB" }} className="border rounded-2xl p-6">
              <h2 className="text-[#000929] text-lg font-bold mb-6">Total Investment</h2>
              <div className="space-y-4">
                <div style={{ backgroundColor: "#FFFFFF", borderColor: "#E5E6EB" }} className="border rounded-xl p-4">
                  <p className="text-[#9EA3AE] text-sm">Investment 1</p>
                </div>
                <div style={{ backgroundColor: "#FFFFFF", borderColor: "#E5E6EB" }} className="border rounded-xl p-4">
                  <p className="text-[#9EA3AE] text-sm">Investment 2</p>
                </div>
                <div style={{ backgroundColor: "#FFFFFF", borderColor: "#E5E6EB" }} className="border rounded-xl p-4">
                  <p className="text-[#9EA3AE] text-sm">Investment 3</p>
                </div>
              </div>
            </div>

            <div style={{ backgroundColor: "#F9FAFB", borderColor: "#E5E6EB" }} className="border rounded-2xl p-6">
              <h2 className="text-[#000929] text-lg font-bold mb-6">Payment History</h2>
              <div className="space-y-4">
                <div style={{ backgroundColor: "#FFFFFF", borderColor: "#E5E6EB" }} className="border rounded-xl p-4">
                  <p className="text-[#9EA3AE] text-sm">Payment Record 1</p>
                </div>
                <div style={{ backgroundColor: "#FFFFFF", borderColor: "#E5E6EB" }} className="border rounded-xl p-4">
                  <p className="text-[#9EA3AE] text-sm">Payment Record 2</p>
                </div>
                <div style={{ backgroundColor: "#FFFFFF", borderColor: "#E5E6EB" }} className="border rounded-xl p-4">
                  <p className="text-[#9EA3AE] text-sm">Payment Record 3</p>
                </div>
              </div>
            </div>

            <div style={{ backgroundColor: "#F9FAFB", borderColor: "#E5E6EB" }} className="border rounded-2xl p-6">
              <h2 className="text-[#000929] text-lg font-bold mb-6">Builder's Update</h2>
              <div className="space-y-4">
                <div style={{ backgroundColor: "#FFFFFF", borderColor: "#E5E6EB" }} className="border rounded-xl p-4">
                  <p className="text-[#9EA3AE] text-sm">Update 1</p>
                </div>
                <div style={{ backgroundColor: "#FFFFFF", borderColor: "#E5E6EB" }} className="border rounded-xl p-4">
                  <p className="text-[#9EA3AE] text-sm">Update 2</p>
                </div>
                <div style={{ backgroundColor: "#FFFFFF", borderColor: "#E5E6EB" }} className="border rounded-xl p-4">
                  <p className="text-[#9EA3AE] text-sm">Update 3</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
