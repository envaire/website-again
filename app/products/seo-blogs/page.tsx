"use client"

import { FileText } from "lucide-react"
import { ProductPageTemplate } from "@/components/product-page-template"

export default function SEOBlogsPage() {
  return (
    <ProductPageTemplate
      icon={FileText}
      title="SEO Blogs Automation"
      promise="Rank higher and attract inbound leads"
      promiseDetail="Every new blog is a new door for your customers to enter your page in Google."
      color="from-emerald-500 to-green-400"
      uniqueIdentifier="Fast implementation from the first day we are publishing blogs"
      riskReversal="If we don't comply with the promised amount of blog posts, you get a full refund."
      tiers={[
        {
          name: "Tier 1",
          price: "$249/month",
          description: "12 posts per month",
          features: [
            "12 SEO-optimized blog posts/month",
            "Images included",
            "Auto-publishing to your website",
            "Keyword research & targeting",
            "Monthly performance report",
          ],
        },
        {
          name: "Tier 2",
          price: "$399/month",
          description: "30 posts per month",
          highlighted: true,
          features: [
            "30 SEO-optimized blog posts/month",
            "All Tier 1 benefits",
            "Create personalized posts on topics you want",
            "Approval mechanism before publishing",
            "Advanced keyword strategy",
            "Competitor analysis",
          ],
        },
        {
          name: "Enterprise",
          price: "Custom",
          description: "Unlimited posts",
          features: [
            "Unlimited blog posts",
            "All Tier 2 benefits",
            "Dedicated content strategist",
            "Multi-language support",
            "Advanced analytics & reporting",
            "Priority support",
          ],
        },
      ]}
      buyItYourself={{
        price: "$2,500",
        description: "Get the complete SEO blog automation system with all benefits you need. One-time payment, yours forever.",
      }}
    />
  )
}
