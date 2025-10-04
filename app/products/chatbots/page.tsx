"use client"

import { MessageSquare } from "lucide-react"
import { ProductPageTemplate } from "@/components/product-page-template"

export default function ChatbotsPage() {
  return (
    <ProductPageTemplate
      icon={MessageSquare}
      title="AI Chatbots"
      promise="Automate conversations across all platforms"
      promiseDetail="Every automated conversation is an opportunity to convert or retain a customer."
      color="from-green-600 to-emerald-500"
      uniqueIdentifier="We can have your chatbot trained and answering customers in under 48 hours."
      riskReversal="If your chatbot doesn't resolve the expected amount of inquiries in the first month, you get your money back."
      tiers={[
        {
          name: "Tier 1 - Basic Bot",
          price: "$249/month",
          description: "Single platform",
          features: [
            "1 platform (Website chat OR WhatsApp OR Facebook Messenger)",
            "Trained on your FAQ + 10 intents",
            "Auto-respond & fallback to human",
            "Monthly conversation logs",
            "Basic analytics dashboard",
          ],
        },
        {
          name: "Tier 2 - Multichannel",
          price: "$499/month",
          description: "Up to 3 platforms",
          highlighted: true,
          features: [
            "Integration to 3 platforms total",
            "All Tier 1 benefits",
            "CRM integration & data sync",
            "30 custom intents",
            "Approval mechanism",
            "Monthly optimization & training",
            "Advanced conversation routing",
          ],
        },
        {
          name: "Tier 3 - Enterprise",
          price: "Custom",
          description: "Full omnichannel",
          features: [
            "Email + WhatsApp + Social DMs + Website chat",
            "All Tier 2 benefits",
            "Advanced NLU & sentiment analysis",
            "Personalized flows per user segment",
            "Priority support",
            "Custom integrations",
          ],
        },
      ]}
      buyItYourself={{
        price: "$3,500",
        description: "Own the complete chatbot system with one-time custom build + initial training. Includes all platforms and unlimited intents.",
      }}
    />
  )
}
