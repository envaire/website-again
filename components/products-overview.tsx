"use client"

import Link from "next/link"
import { FileText, Share2, Phone, MessageSquare, Send, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ProductsOverview() {
  const products = [
    {
      icon: FileText,
      title: "SEO Blogs Automation",
      description: "Rank higher and attract inbound leads with consistent, SEO-optimized blogs generated & published automatically.",
      startingPrice: "$249/month",
      slug: "seo-blogs",
      color: "from-emerald-500 to-green-400",
    },
    {
      icon: Share2,
      title: "Social Media Automation",
      description: "Keep your brand visible with consistent, platform-ready posts that engage your audience and drive actions.",
      startingPrice: "$249/month",
      slug: "social-media",
      color: "from-green-500 to-emerald-400",
    },
    {
      icon: Phone,
      title: "AI Voice Agents",
      description: "A human-like voice agent that answers calls, qualifies leads and books meetings 24/7.",
      startingPrice: "$599/month",
      slug: "voice-agents",
      color: "from-emerald-600 to-green-500",
    },
    {
      icon: MessageSquare,
      title: "AI Chatbots",
      description: "Automate customer conversations across your chosen platforms so inquiries are answered instantly.",
      startingPrice: "$249/month",
      slug: "chatbots",
      color: "from-green-600 to-emerald-500",
    },
    {
      icon: Send,
      title: "Outreach Agent",
      description: "Automated, personalized outreach that starts real conversations with qualified prospects.",
      startingPrice: "$349/month",
      slug: "outreach-agent",
      color: "from-emerald-500 to-green-500",
    },
  ]

  return (
    <section id="services" className="container mx-auto px-4 py-16 md:py-24 relative z-10">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-black to-emerald-800 bg-clip-text text-transparent">
          Productized AI Automation Solutions
        </h2>
        <p className="max-w-3xl mx-auto text-gray-700 text-xl mb-8">
          Ready-to-deploy AI automation solutions that work from day one. No complex setup, no endless meetings—just powerful automation that drives results.
        </p>
        <p className="max-w-2xl mx-auto text-gray-600 text-lg">
          Choose your tier, launch fast, and scale your business while our AI handles the repetitive work. Each solution comes with clear deliverables, transparent pricing, and a money-back guarantee.
        </p>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => {
            const Icon = product.icon
            return (
              <Link
                key={index}
                href={`/products/${product.slug}`}
                className="group relative bg-gradient-to-br from-white/60 to-white/40 backdrop-blur-lg border-2 border-gray-300 hover:border-emerald-500 rounded-3xl p-8 transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 to-green-500/0 group-hover:from-emerald-500/5 group-hover:to-green-500/5 rounded-3xl transition-all duration-300" />

                <div className="relative z-10">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${product.color} p-4 mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="w-full h-full text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-black mb-3 group-hover:text-emerald-700 transition-colors">
                    {product.title}
                  </h3>

                  <p className="text-gray-700 leading-relaxed mb-4 min-h-[80px]">
                    {product.description}
                  </p>

                  <div className="flex items-center justify-between mt-6">
                    <div>
                      <p className="text-sm text-gray-600">Starting at</p>
                      <p className="text-2xl font-bold bg-gradient-to-r from-emerald-700 to-green-600 bg-clip-text text-transparent">
                        {product.startingPrice}
                      </p>
                    </div>

                    <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center group-hover:bg-emerald-600 transition-colors">
                      <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Not sure which solution fits your needs?
          </p>
          <Button
            onClick={() => {
              const bookingElement = document.getElementById("contact")
              if (bookingElement) {
                bookingElement.scrollIntoView({ behavior: "smooth" })
              } else {
                window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" })
              }
            }}
            className="bg-gradient-to-r from-emerald-600 to-green-500 hover:from-emerald-700 hover:to-green-600 text-white px-8 py-6 text-lg rounded-full"
          >
            Book a Free Consultation
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
