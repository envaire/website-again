"use client"

import { Share2 } from "lucide-react"
import { ProductPageTemplate } from "@/components/product-page-template"

export default function SocialMediaPage() {
  return (
    <ProductPageTemplate
      icon={Share2}
      title="Social Media Automation"
      promise="Keep your brand visible and converting"
      promiseDetail="Every new post is a new touchpoint that can turn followers into customers."
      color="from-green-500 to-emerald-400"
      uniqueIdentifier="AI-generated creative + human QA so posts are ready-to-publish from day one"
      riskReversal="If we don't deliver the promised number of posts in a month, you get a full refund for that month."
      tiers={[
        {
          name: "Tier 1",
          price: "$249/month",
          description: "12 posts per month",
          features: [
            "12 platform-ready posts/month",
            "Images included",
            "Scheduling & auto-publishing to 1 platform (Instagram OR Facebook)",
            "Monthly performance summary",
            "Content calendar planning",
          ],
        },
        {
          name: "Tier 2",
          price: "$399/month",
          description: "30 posts per month",
          highlighted: true,
          features: [
            "30 platform-ready posts/month",
            "All Tier 1 benefits",
            "Request personalized posts on chosen topics",
            "Approval mechanism",
            "Cross-posting to 2 platforms",
            "Basic engagement monitoring",
            "Hashtag research & optimization",
          ],
        },
        {
          name: "Enterprise",
          price: "Custom",
          description: "Unlimited posts",
          features: [
            "Unlimited posts across all platforms",
            "All Tier 2 benefits",
            "Full social media strategy",
            "Community management",
            "Advanced analytics & reporting",
            "Influencer outreach campaigns",
          ],
        },
      ]}
      buyItYourself={{
        price: "$4,900",
        description: "Own the complete social media automation system with all benefits. Full setup, training, and 60 days of optimization included.",
      }}
    />
  )
}
