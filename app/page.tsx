"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Lightbulb, Bot, Calendar } from "lucide-react"

export default function LandingPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle email submission here
    console.log("Email submitted:", email)
    setIsModalOpen(false)
    setEmail("")
  }

  return (
    <div className="min-h-screen bg-[#2C3E50] text-white">
      {/* Header Logo */}
      <header className="pt-8 pb-4">
        <div className="container mx-auto px-4 text-center">
          <div className="w-72 h-30 mx-auto">
            <img src="/images/logo.png" alt="Multi-Content Generator Logo" className="w-full h-full object-contain" />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Stop Staring at a Blank Page. Start Generating Daily Content in 5 Minutes.
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 leading-relaxed">
            Get our free Multi-Content Generator that uses AI to brainstorm, write, and organize a week of social media
            content for you. 100% Free.
          </p>
          <Button
            onClick={() => setIsModalOpen(true)}
            className="bg-[#F1C40F] hover:bg-[#D4AC0D] text-black text-lg px-8 py-4 rounded-lg font-semibold transition-colors duration-300"
          >
            Get the Free Tool Now
          </Button>
        </div>
      </section>

      {/* Demo GIF */}
      <section className="py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <img
              src="https://i.imgur.com/9OoN2i0.gif"
              alt="Multi-Content Generator Demo"
              className="w-full h-auto rounded-xl border-2 border-gray-500 shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Feature 1 */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-[#F1C40F] rounded-full flex items-center justify-center">
                <Lightbulb className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Endless Ideas</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Generate unique angles and topics for your niche on demand.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-[#F1C40F] rounded-full flex items-center justify-center">
                <Bot className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Automated Writing</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Create engaging social media copy, hashtags, and titles in seconds.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-[#F1C40F] rounded-full flex items-center justify-center">
                <Calendar className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Effortless Organization</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Keep all your content perfectly organized inside a simple Google Sheet.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Creator Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <img
              src="/images/sam-stacks-creator.png"
              alt="Sam Stacks - Creator of Multi-Content Generator"
              className="w-full h-auto rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Your Audience is Waiting.</h2>
          <Button
            onClick={() => setIsModalOpen(true)}
            className="bg-[#F1C40F] hover:bg-[#D4AC0D] text-black text-lg px-8 py-4 rounded-lg font-semibold transition-colors duration-300"
          >
            Download Your Free Generator
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-600">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400 mb-4">© 2024 Multi-Content Generator. All rights reserved.</p>
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-gray-400 hover:text-[#F1C40F] transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-[#F1C40F] transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </footer>

      {/* Popup Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="bg-[#2C3E50] border-gray-600 text-white max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-center mb-4">
              Enter Your Best Email to Receive the Multi-Content Generator
            </DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-[#F1C40F]"
            />
            <Button type="submit" className="w-full bg-[#F1C40F] hover:bg-[#D4AC0D] text-black font-semibold py-3">
              Get My Free Generator
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  )
}
