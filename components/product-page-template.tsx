"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowLeft, Check, Shield, Zap, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Tier {
  name: string
  price: string
  description: string
  features: string[]
  highlighted?: boolean
}

interface ProductPageProps {
  icon: React.ElementType
  title: string
  promise: string
  promiseDetail: string
  tiers: Tier[]
  buyItYourself?: {
    price: string
    description: string
  }
  uniqueIdentifier: string
  riskReversal: string
  color: string
}

export function ProductPageTemplate({
  icon: Icon,
  title,
  promise,
  promiseDetail,
  tiers,
  buyItYourself,
  uniqueIdentifier,
  riskReversal,
  color,
}: ProductPageProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div className="min-h-screen bg-white text-black relative overflow-hidden">
      {/* Enhanced mouse glow effect */}
      <div
        className="fixed hidden md:block pointer-events-none z-30 w-96 h-96 rounded-full opacity-40 transition-opacity duration-300"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
          background:
            "radial-gradient(circle, rgba(34, 197, 94, 0.8) 0%, rgba(34, 197, 94, 0.4) 25%, rgba(34, 197, 94, 0.2) 50%, rgba(16, 185, 129, 0.1) 70%, transparent 90%)",
          filter: "blur(60px)",
        }}
      />

      {/* Background pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#999_1px,transparent_1px)] bg-[size:20px_20px] opacity-50 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.35)_0,transparent_70%)] pointer-events-none" />
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-emerald-500/40 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/3 -right-20 w-[500px] h-[500px] bg-green-500/40 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="container mx-auto px-4 py-8 relative z-10">
        {/* Back button */}
        <div className="mb-8">
          <Link href="/#services">
            <Button variant="ghost" className="text-black hover:text-emerald-600 p-0">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Solutions
            </Button>
          </Link>
        </div>

        {/* Hero Section */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="flex items-start gap-6 mb-8">
            <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${color} p-5 flex-shrink-0`}>
              <Icon className="w-full h-full text-white" />
            </div>
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-black to-emerald-800 bg-clip-text text-transparent">
                {title}
              </h1>
              <p className="text-2xl md:text-3xl text-emerald-700 font-semibold mb-4">{promise}</p>
              <p className="text-lg text-gray-700">{promiseDetail}</p>
            </div>
          </div>

          {/* Key Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/60 border-2 border-emerald-500/30 rounded-2xl p-6">
              <Zap className="w-12 h-12 text-emerald-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Fast Implementation</h3>
              <p className="text-gray-700">{uniqueIdentifier}</p>
            </div>
            <div className="bg-white/60 border-2 border-emerald-500/30 rounded-2xl p-6">
              <Shield className="w-12 h-12 text-emerald-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Risk-Free Guarantee</h3>
              <p className="text-gray-700">{riskReversal}</p>
            </div>
            <div className="bg-white/60 border-2 border-emerald-500/30 rounded-2xl p-6">
              <TrendingUp className="w-12 h-12 text-emerald-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Clear Deliverables</h3>
              <p className="text-gray-700">Transparent pricing with defined outcomes every month.</p>
            </div>
          </div>
        </div>

        {/* Pricing Tiers */}
        <div className="max-w-7xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Choose Your Tier</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tiers.map((tier, index) => (
              <div
                key={index}
                className={`relative bg-gradient-to-br from-white/80 to-white/60 backdrop-blur-lg rounded-3xl p-8 border-2 transition-all duration-300 hover:scale-105 ${
                  tier.highlighted
                    ? "border-emerald-500 shadow-2xl shadow-emerald-500/20"
                    : "border-gray-300 hover:border-emerald-400"
                }`}
              >
                {tier.highlighted && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-emerald-600 to-green-500 text-white px-6 py-2 rounded-full text-sm font-bold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                  <p className="text-gray-600 mb-4">{tier.description}</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold bg-gradient-to-r from-emerald-700 to-green-600 bg-clip-text text-transparent">
                      {tier.price}
                    </span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full text-lg py-6 rounded-full ${
                    tier.highlighted
                      ? "bg-gradient-to-r from-emerald-600 to-green-500 hover:from-emerald-700 hover:to-green-600 text-white"
                      : "bg-white border-2 border-emerald-500 text-emerald-700 hover:bg-emerald-50"
                  }`}
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: "smooth" })
                    setTimeout(() => {
                      const bookingElement = document.getElementById("contact")
                      if (bookingElement) {
                        bookingElement.scrollIntoView({ behavior: "smooth" })
                      } else {
                        window.location.href = "/#contact"
                      }
                    }, 100)
                  }}
                >
                  Get Started
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* Buy It Yourself Option */}
        {buyItYourself && (
          <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-gradient-to-br from-emerald-500/20 to-green-500/20 border-2 border-emerald-500 rounded-3xl p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div>
                  <h3 className="text-3xl font-bold mb-4">Own It Completely</h3>
                  <p className="text-lg text-gray-700 mb-4">{buyItYourself.description}</p>
                  <p className="text-5xl font-bold bg-gradient-to-r from-emerald-700 to-green-600 bg-clip-text text-transparent">
                    {buyItYourself.price}
                  </p>
                  <p className="text-gray-600 mt-2">One-time payment</p>
                </div>
                <Button
                  className="bg-gradient-to-r from-emerald-600 to-green-500 hover:from-emerald-700 hover:to-green-600 text-white px-12 py-8 text-xl rounded-full whitespace-nowrap"
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: "smooth" })
                    setTimeout(() => {
                      const bookingElement = document.getElementById("contact")
                      if (bookingElement) {
                        bookingElement.scrollIntoView({ behavior: "smooth" })
                      } else {
                        window.location.href = "/#contact"
                      }
                    }, 100)
                  }}
                >
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* Footer */}
        <footer className="mt-16 border-t border-gray-300 pt-8">
          <div className="max-w-4xl mx-auto flex justify-center items-center gap-4">
            <Link href="/terms" className="text-gray-600 hover:text-emerald-600 transition-colors">
              Terms of Service
            </Link>
            <Link href="/privacy" className="text-gray-600 hover:text-emerald-600 transition-colors">
              Privacy Policy
            </Link>
          </div>
        </footer>
      </div>
    </div>
  )
}
