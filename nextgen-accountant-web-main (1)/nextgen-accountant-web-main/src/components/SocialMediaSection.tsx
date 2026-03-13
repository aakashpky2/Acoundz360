
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Facebook, Instagram, Linkedin, Heart, MessageCircle, Share2, ExternalLink } from "lucide-react";

const socialPosts = [{
  platform: "facebook",
  icon: Facebook,
  platformName: "Facebook",
  author: "Acoundz 360",
  time: "2 hours ago",
  content: "🎉 Congratulations to our latest batch of students who secured placements in top accounting firms! Our AI-enabled training program continues to deliver 100% placement success. #AccountingJobs #PlacementSuccess #Acoundz360",
  image: null,
  likes: 45,
  comments: 12,
  shares: 8,
  bgColor: "bg-blue-50",
  iconColor: "text-blue-600"
}, {
  platform: "instagram",
  icon: Instagram,
  platformName: "Instagram",
  author: "acoundz360",
  time: "5 hours ago",
  content: "Behind the scenes at our AI-powered accounting lab! 💻✨ Students learning advanced Excel, Tally, and ChatGPT integration for modern accounting practices.",
  image: "/acoundz360-logo.png",
  likes: 128,
  comments: 23,
  shares: 15,
  bgColor: "bg-pink-50",
  iconColor: "text-pink-600"
}, {
  platform: "linkedin",
  icon: Linkedin,
  platformName: "LinkedIn",
  author: "Acoundz 360 Training Institute",
  time: "1 day ago",
  content: "The future of accounting is here! Our students are mastering AI tools like ChatGPT, Copilot, and Gamma alongside traditional accounting software. Join our next batch and be part of the accounting revolution. #FutureOfAccounting #AITraining #CareerGrowth",
  image: null,
  likes: 89,
  comments: 34,
  shares: 42,
  bgColor: "bg-blue-50",
  iconColor: "text-blue-700"
}];

const SocialMediaSection = () => {
  return <section className="bg-muted/30 py-0">
      
    </section>;
};

export default SocialMediaSection;
