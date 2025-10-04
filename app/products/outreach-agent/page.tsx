"use client"

import { Send } from "lucide-react"
import { ProductPageTemplate } from "@/components/product-page-template"

export default function OutreachAgentPage() {
  return (
    <ProductPageTemplate
      icon={Send}
      title="Outreach Agent"
      promise="Fill your calendar with sales opportunities"
      promiseDetail="Every sent message is a new door to a conversation and potential customer."
      color="from-emerald-500 to-green-500"
      uniqueIdentifier="Outreach campaigns go live within 7 days, with daily monitoring to ensure deliverability and response quality"
      riskReversal="If we don't send the promised number of outreach messages in the first month, you get a full refund for that month."
      tiers={[
        {
          name: "Tier 1",
          price: "$349/month",
          description: "500 prospects/month",
          features: [
            "500 qualified prospects/month",
            "Target list sourcing",
            "AI-personalized email sequences",
            "Scheduled sends",
            "Basic reply handling",
            "Monthly performance report",
          ],
        },
        {
          name: "Tier 2",
          price: "$699/month",
          description: "1,000 prospects/month",
          highlighted: true,
          features: [
            "1,000 qualified prospects/month",
            "All Tier 1 benefits",
            "Multichannel sequences (Email + LinkedIn/DMs)",
            "A/B testing campaigns",
            "Reply qualification & handoff",
            "Approval mechanism",
            "Weekly optimization reports",
          ],
        },
        {
          name: "Enterprise",
          price: "Custom",
          description: "Unlimited prospects",
          features: [
            "Unlimited outreach volume",
            "All Tier 2 benefits",
            "Advanced personalization AI",
            "Multi-domain setup",
            "Dedicated account manager",
            "Custom integrations with your CRM",
          ],
        },
      ]}
      buyItYourself={{
        price: "$5,000",
        description: "Own the complete outbound system with one-time full deployment + 60-day managed campaign to perfect your messaging.",
      }}
    />
  )
}
