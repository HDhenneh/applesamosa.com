import Link from 'next/link'
import Image from 'next/image'
import { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Remote Goat - Agentic Hustler Platform',
  description: 'Intent-based hustle matching with multi-agent architecture. Self-improving systems that learn from users, not static lists.',
  keywords: ['hustle', 'remote work', 'side hustle', 'agentic', 'AI', 'freelancing'],
}

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6 tracking-tight">
              Find Your Hustle.
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-500 bg-clip-text">
                Actually Make Money.
              </span>
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-300">
              Agentic hustle matching that learns from you. Not generic lists. Not rule-based. 
              Personalized recommendations from multi-agent architecture.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                href="#products"
                className="px-8 py-4 text-base font-semibold rounded-lg text-white bg-orange-500 hover:bg-orange-600 transition-all duration-200 shadow-lg hover:shadow-orange-500/25"
              >
                Browse Products
              </Link>
              <Link 
                href="#how-it-works"
                className="px-8 py-4 text-base font-semibold rounded-lg text-transparent border-2 border-gray-400 text-white hover:bg-gray-700 transition-all duration-200"
              >
                How It Works
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Agentic Features */}
      <section className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">
              Why Agentic? Not Just Automation.
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Traditional sites give you generic lists. Remote Goat uses multi-agent architecture to 
              understand your goals, match your situation, and improve recommendations over time.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l0 0h7l0-0h7v7h11l11-11V5l0 0h-7l0-0h7V3a2 2 0 012 2 3-3a2 2 0 01-6 6V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Intent-Based Systems</h3>
              <p className="text-gray-300">
                Don't just filter by category. Our agents understand WHY you need money right now and match accordingly.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 3.712c-2.209-.707-2.714-3.052 0-3.497-.877.614-.877 1.236-3.065.694-3.065 1.541 0 2.828 0 6.897 2 6.897s2.628 1.236-2.628 1.236s1.751.462-2.085.462-3.065.694-.877-.877.877-2.085 2.085z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Self-Improving Algorithms</h3>
              <p className="text-gray-300">
                Learn from every user. Recommendations get smarter as more hustlers succeed and fail.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a2 2 0 00-2 2v-2H4a2 2 0 00-2 2v2m3 0h10a2 2 0 012 2 0 14h7a2 2 0 012 2V6h12a2 2 0 012 2 0 10H6a2 2 0 00-2-2V4a2 2 0 01-6 2v-2h10a2 2 0 012 2 0 14H6a2 2 0 00-2 2V4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Multi-Agent Architecture</h3>
              <p className="text-gray-300">
                Specialized agents collaborate: Hustle Finder + ROI Calculator + Content Generator working together.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">
              Launch Products
            </h2>
            <p className="text-gray-400 text-lg">
              Start making money today with agentic systems designed to scale with you.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Product 1: Hustle Finder */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-orange-500/30 hover:border-orange-500/50 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-white">Hustle Finder Agent</h3>
                <span className="text-2xl font-bold text-orange-400">$27.97</span>
              </div>
              <p className="text-gray-300 mb-4">
                AI-powered hustle matching that understands your goals, skills, and experience. 
                Get personalized rankings of 10-20 hustles ranked by YOUR potential, not generic "best of" lists.
              </p>
              <ul className="space-y-2 text-gray-400 mb-6">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-400 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L16 7l-4-4 4-4 2-6 2-4m2 10H7l-5 5-5-5 5-5 2-6 2-6V5a2 2 0 00-2 2v-2H4a2 2 0 00-2 2v-2m3 0h10a2 2 0 012 2 0 14h7a2 2 0 012 2 0 10H6a2 2 0 00-2 2V4z" />
                  </svg>
                  <span>Personalized to your skills, goals, budget</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-400 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L16 7l-4-4 4-4 2-6 2-4m2 10H7l-5 5-5-5 5-5 2-6 2-6V5a2 2 0 00-2 2v-2H4a2 2 0 00-2 2v-2m3 0h10a2 2 0 012 2 0 14h7a2 2 0 012 2 0 10H6a2 2 0 00-2 2V4z" />
                  </svg>
                  <span>Based on real success rates, not theory</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-400 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 2-2-2v6a2 2 0 00-2 2v-2H4a2 2 0 00-2 2v-2m3 0h10a2 2 0 012 2 0 14h7a2 2 0 012 2 0 10H6a2 2 0 00-2 2V4z" />
                  </svg>
                  <span>Quick-start guides + implementation roadmaps</span>
                </li>
              </ul>
              <a 
                href="https://gumroad.com/products/hustle-finder-agent" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 text-base font-semibold rounded-lg text-white bg-orange-500 hover:bg-orange-600 transition-all duration-200"
              >
                Get Hustle Finder Agent
                <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5 5 5H5a2 2 0 00-2 2v-2h4a2 2 0 00-2 2 0 12 2v10a2 2 0 012 2 0 10 0 10H5a2 2 0 00-2 2V7z" />
                </svg>
              </a>
            </div>

            {/* Product 2: ROI Calculator Pack */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-blue-500/30 hover:border-blue-500/50 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-white">ROI Calculator Pack</h3>
                <span className="text-2xl font-bold text-blue-400">$47.97</span>
              </div>
              <p className="text-gray-300 mb-4">
                Don't guess if a hustle will make money. Get precise projections, cost-of-living calculations, 
                and time-to-profit analysis based on REAL market data and your specific situation.
              </p>
              <ul className="space-y-2 text-gray-400 mb-6">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-400 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l-6 6 6-6H6a2 2 0 00-2 2v-2H4a2 2 0 00-2 2v-2m3 0h10a2 2 0 012 2 0 14h7a2 2 0 012 2 0 10H6a2 2 0 00-2 2V4z" />
                  </svg>
                  <span>50+ hustles with real market data</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-400 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l-6 6 6-6H6a2 2 0 00-2 2v-2H4a2 2 0 00-2 2v-2m3 0h10a2 2 0 012 2 0 14h7a2 2 0 012 2 0 10H6a2 2 0 00-2 2V4z" />
                  </svg>
                  <span>Location-specific cost-of-living</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-400 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l-6 6 6-6H6a2 2 0 00-2 2v-2H4a2 0 00-2 2v-2m3 0h10a2 2 0 012 2 0 14h7a2 2 0 012 2 0 10H6a2 2 0 00-2 2V4z" />
                  </svg>
                  <span>Time-to-profit & breakeven analysis</span>
                </li>
              </ul>
              <a 
                href="https://gumroad.com/products/roi-calculator-pack" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 text-base font-semibold rounded-lg text-white bg-blue-500 hover:bg-blue-600 transition-all duration-200"
              >
                Get ROI Calculator Pack
                <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5 5 5H5a2 2 0 00-2 2v-2h4a2 2 0 00-2 2 0 12 2v10a2 2 0 012 2 0 10 0 10H5a2 2 0 00-2 2V7z" />
                </svg>
              </a>
            </div>

            {/* Product 3: Starter Kit Bundle */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-green-500/30 hover:border-green-500/50 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-white">Hustler Starter Kit Bundle</h3>
                <span className="text-2xl font-bold text-green-400">$97-197</span>
              </div>
              <p className="text-gray-300 mb-4">
                Complete onboarding for new hustlers. 90-day action plan, ready-to-use templates, 
                proposal/invoice templates, tool library, and community access.
              </p>
              <ul className="space-y-2 text-gray-400 mb-6">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-400 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 2-2v6a2 2 0 00-2 2v-2H4a2 2 0 00-2 2v-2m3 0h10a2 2 0 012 2 0 14h7a2 2 0 012 2 0 10H6a2 2 0 00-2 2V4z" />
                  </svg>
                  <span>90-day personalized action plan</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-400 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 2-2v6a2 2 0 00-2 2v-2H4a2 2 0 00-2 2v-2m3 0h10a2 2 0 012 2 0 14h7a2 2 0 012 2 0 10H6a2 0 0 00-2 2V4z" />
                  </svg>
                  <span>Proposal, contract, invoice templates</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-400 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 2-2v6a2 2 0 00-2 2v-2H4a2 2 0 00-2 2v-2m3 0h10a2 2 0 012 2 0 14h7a2 2 0 012 2 0 10H6a2 2 0 00-2 2V4z" />
                  </svg>
                  <span>Tool library + quick-start guides</span>
                </li>
              </ul>
              <a 
                href="https://gumroad.com/products/starter-kit-bundle" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 text-base font-semibold rounded-lg text-white bg-green-500 hover:bg-green-600 transition-all duration-200"
              >
                Get Starter Kit Bundle
                <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5 5 5H5a2 2 0 00-2 2v-2h4a2 2 0 00-2 2 0 12 2v10a2 2 0 012 2 0 10 0 10H5a2 2 0 00-2 2V7z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              How It Works: Multi-Agent Architecture
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Not just a website with AI chat. An agentic system with specialized agents collaborating to help you make money.
            </p>
          </div>

          <div className="space-y-12">
            {/* Agent 1 */}
            <div className="flex items-start gap-6 p-6 bg-gray-800 rounded-xl border border-gray-700">
              <div className="w-16 h-16 bg-orange-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-2xl font-bold text-orange-400">1</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Hustle Understanding Agent</h3>
                <p className="text-gray-300 mb-2">
                  <strong>Input:</strong> Your skills, goals, experience, budget, time availability
                </p>
                <p className="text-gray-300 mb-2">
                  <strong>Processing:</strong> Classifies hustler profile (beginner, intermediate, advanced)
                </p>
                <p className="text-gray-300">
                  <strong>Output:</strong> Personalized hustle recommendations
                </p>
                <p className="text-gray-400 text-sm">
                  <strong>Learning:</strong> Tracks which hustles work for which user types
                </p>
              </div>
            </div>

            {/* Agent 2 */}
            <div className="flex items-start gap-6 p-6 bg-gray-800 rounded-xl border border-gray-700">
              <div className="w-16 h-16 bg-blue-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-2xl font-bold text-blue-400">2</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Hustle Finder Agent</h3>
                <p className="text-gray-300 mb-2">
                  <strong>Domain Knowledge:</strong> 5,000+ curated hustles with success data
                </p>
                <p className="text-gray-300 mb-2">
                  <strong>Processing:</strong> Filters hustles by user profile + market conditions
                </p>
                <p className="text-gray-300">
                  <strong>Output:</strong> Top 10-20 hustles ranked by potential for THIS user
                </p>
                <p className="text-gray-400 text-sm">
                  <strong>Learning:</strong> Adjusts rankings based on real user success rates
                </p>
              </div>
            </div>

            {/* Agent 3 */}
            <div className="flex items-start gap-6 p-6 bg-gray-800 rounded-xl border border-gray-700">
              <div className="w-16 h-16 bg-green-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-2xl font-bold text-green-400">3</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">ROI Calculator Agent</h3>
                <p className="text-gray-300 mb-2">
                  <strong>Domain Knowledge:</strong> Freelancing rates, cost of living, remote work economics
                </p>
                <p className="text-gray-300 mb-2">
                  <strong>Processing:</strong> Income projections, cost analysis, time-to-profit models
                </p>
                <p className="text-gray-300">
                  <strong>Output:</strong> Personalized ROI projections
                </p>
                <p className="text-gray-400 text-sm">
                  <strong>Learning:</strong> Becomes more accurate with more market data
                </p>
              </div>
            </div>

            {/* Agent 4 */}
            <div className="flex items-start gap-6 p-6 bg-gray-800 rounded-xl border border-gray-700">
              <div className="w-16 h-16 bg-purple-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-2xl font-bold text-purple-400">4</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Content Generator Agent</h3>
                <p className="text-gray-300 mb-2">
                  <strong>Domain Knowledge:</strong> Hustle frameworks, success stories, market trends
                </p>
                <p className="text-gray-300 mb-2">
                  <strong>Processing:</strong> Generates articles, guides, templates from frameworks
                </p>
                <p className="text-gray-300">
                  <strong>Output:</strong> Personalized content (not generic blog posts)
                </p>
                <p className="text-gray-400 text-sm">
                  <strong>Learning:</strong> Learns what content resonates → creates more of it
                </p>
              </div>
            </div>

            {/* Agent 5 */}
            <div className="flex items-start gap-6 p-6 bg-gray-800 rounded-xl border border-gray-700">
              <div className="w-16 h-16 bg-yellow-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-2xl font-bold text-yellow-400">5</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Community Intelligence Agent</h3>
                <p className="text-gray-300 mb-2">
                  <strong>Domain Knowledge:</strong> User success patterns, market shifts, what works
                </p>
                <p className="text-gray-300 mb-2">
                  <strong>Processing:</strong> Analyzes 1000s of user outcomes
                </p>
                <p className="text-gray-300">
                  <strong>Output:</strong> Improves all other agents' recommendations
                </p>
                <p className="text-gray-400 text-sm">
                  <strong>Learning:</strong> System-wide optimization across all users
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-900 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400 mb-4">
            Built on agentic principles from Marcel Broschk's insights. Not just automation, but autonomy as an operating principle.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 text-sm text-gray-500">
            <span>© 2026 Remote Goat. Built by Femi.</span>
            <span>•</span>
            <span>Agentic hustler platform inspired by enterprise thinking.</span>
          </div>
        </div>
      </footer>
    </main>
  )
}
