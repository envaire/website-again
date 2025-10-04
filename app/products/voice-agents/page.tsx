"use client"

import { Phone } from "lucide-react"
import { ProductPageTemplate } from "@/components/product-page-template"

export default function VoiceAgentsPage() {
  return (
    <ProductPageTemplate
      icon={Phone}
      title="AI Voice Agents"
      promise="Never miss a revenue opportunity"
      promiseDetail="Every handled call is a chance to convert a lead or save a sale."
      color="from-emerald-600 to-green-500"
      uniqueIdentifier="Rapid deployment: first calls handled from launch day with continuous training loop"
      riskReversal="If the agent is not live and answering calls according to the agreed tier you receive a full refund."
      tiers={[
        {
          name: "Tier 1",
          price: "$599/month",
          description: "1 voice agent",
          features: [
            "1 custom voice agent",
            "Custom voice personality",
            "Information saved to CRM/Calendar",
            "Up to 500 answered interactions/month",
            "Call transcriptions available",
            "Monthly analytics dashboard",
          ],
        },
        {
          name: "Tier 2",
          price: "$1,199/month",
          description: "2 voice agents",
          highlighted: true,
          features: [
            "2 custom voice agents",
            "All Tier 1 benefits per agent",
            "Multilingual support",
            "Advanced call routing",
            "Up to 2,500 interactions/month",
            "Weekly analytics & refinement",
            "Priority response times",
          ],
        },
        {
          name: "Enterprise",
          price: "Custom",
          description: "Unlimited agents",
          features: [
            "Unlimited voice agents",
            "All Tier 2 benefits",
            "24/7 dedicated support",
            "Custom integrations",
            "Advanced AI training",
            "White-label options",
          ],
        },
      ]}
      buyItYourself={{
        price: "$7,500",
        description: "Complete voice agent system with one-time full deployment + 30 days premium tuning. Own it forever with all features included.",
      }}
    />
  )
}
