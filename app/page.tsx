import { Button } from "@/components/design-system/Button"
import { Card, CardContent } from "@/components/design-system/Card"
import { Badge } from "@/components/design-system/Badge"
import { Avatar } from "@/components/design-system/Avatar"
import {
  Code,
  ChatCircle,
  Target,
  Brain,
  TwitterLogo,
  ChartBar,
  Crosshair,
  Lightning,
  CheckCircle,
  Rocket,
} from "@phosphor-icons/react"

export default function SnowballLandingPage() {
  return (
    <div className="min-h-screen bg-ocoya-background">
      {/* Navigation */}
      <nav className="border-b border-ocoya-border bg-ocoya-background/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="text-xl font-bold text-ocoya-primary">Snowball</div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#features"
                className="text-sm text-ocoya-text-secondary hover:text-ocoya-text-primary transition-colors"
              >
                Features
              </a>
              <a
                href="#pricing"
                className="text-sm text-ocoya-text-secondary hover:text-ocoya-text-primary transition-colors"
              >
                Pricing
              </a>
              <a
                href="#about"
                className="text-sm text-ocoya-text-secondary hover:text-ocoya-text-primary transition-colors"
              >
                About
              </a>
              <Button variant="ghost" size="xs">
                Sign In
              </Button>
              <Button variant="primary" size="xs">
                Start Free
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-ocoya-text-primary mb-6">
            Understand your users
            <span className="block text-ocoya-primary">in 30 seconds.</span>
          </h1>
          <p className="text-lg md:text-xl text-ocoya-text-secondary max-w-3xl mx-auto mb-8 leading-relaxed">
            Snowball is the AI-powered feedback widget that turns quick surveys into actionable product insights — so
            you can build the right features, faster.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="primary" size="md" className="w-full sm:w-auto">
              Try the Demo →
            </Button>
            <Button variant="ghost" size="md" className="w-full sm:w-auto">
              Get Started Free (no credit card)
            </Button>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-ocoya-background-alt">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm text-ocoya-text-muted mb-4">Built with Snowball at</p>
          <div className="flex justify-center items-center space-x-8 opacity-60 mb-8">
            <div className="h-8 w-24 bg-ocoya-text-muted rounded"></div>
            <div className="h-8 w-24 bg-ocoya-text-muted rounded"></div>
            <div className="h-8 w-24 bg-ocoya-text-muted rounded"></div>
            <div className="h-8 w-24 bg-ocoya-text-muted rounded"></div>
          </div>
          <blockquote className="text-base text-ocoya-text-secondary italic max-w-2xl mx-auto">
            "Snowball helped us discover what users really wanted — and ship the right feature in just 2 weeks."
            <cite className="block text-sm text-ocoya-text-muted mt-2 not-italic">— Beta Founder</cite>
          </blockquote>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-ocoya-text-primary mb-4">How It Works</h2>
            <p className="text-lg text-ocoya-text-secondary max-w-2xl mx-auto">
              Six simple steps to transform your user feedback
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="pt-8">
                <div className="w-12 h-12 bg-ocoya-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Code size={24} weight="bold" className="text-white" />
                </div>
                <h3 className="text-lg font-semibold text-ocoya-text-primary mb-4">Embed Instantly</h3>
                <p className="text-sm text-ocoya-text-secondary">
                  Add our widget to any site or app with a single line of code.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-8">
                <div className="w-12 h-12 bg-ocoya-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                  <ChatCircle size={24} weight="bold" className="text-white" />
                </div>
                <h3 className="text-lg font-semibold text-ocoya-text-primary mb-4">Ask Micro-Surveys</h3>
                <p className="text-sm text-ocoya-text-secondary">
                  Launch AI-generated, 30-second surveys that users actually finish.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-8">
                <div className="w-12 h-12 bg-ocoya-accent rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target size={24} weight="bold" className="text-white" />
                </div>
                <h3 className="text-lg font-semibold text-ocoya-text-primary mb-4">Trigger by Behavior</h3>
                <p className="text-sm text-ocoya-text-secondary">
                  Send the right questions after key actions, milestones, or time on page.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-8">
                <div className="w-12 h-12 bg-ocoya-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Brain size={24} weight="bold" className="text-white" />
                </div>
                <h3 className="text-lg font-semibold text-ocoya-text-primary mb-4">Adaptive Questioning</h3>
                <p className="text-sm text-ocoya-text-secondary">
                  AI adjusts follow-up questions based on user responses for higher quality insights.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-8">
                <div className="w-12 h-12 bg-ocoya-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                  <TwitterLogo size={24} weight="bold" className="text-white" />
                </div>
                <h3 className="text-lg font-semibold text-ocoya-text-primary mb-4">Social Listening Layer</h3>
                <p className="text-sm text-ocoya-text-secondary">
                  Capture conversations from Twitter/X, Reddit, and communities in one place.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-8">
                <div className="w-12 h-12 bg-ocoya-accent rounded-full flex items-center justify-center mx-auto mb-6">
                  <ChartBar size={24} weight="bold" className="text-white" />
                </div>
                <h3 className="text-lg font-semibold text-ocoya-text-primary mb-4">AI Insights & Prioritization</h3>
                <p className="text-sm text-ocoya-text-secondary">
                  Automatically cluster feedback, detect sentiment, and highlight what matters most—so you act on
                  signal, not noise.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-12">
            <Button variant="primary" size="md">
              See It in Action
            </Button>
          </div>
        </div>
      </section>

      {/* Why Snowball is Different */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-ocoya-background-alt">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-ocoya-text-primary mb-4">Why Snowball is Different</h2>
            <p className="text-lg text-ocoya-text-secondary max-w-3xl mx-auto mb-8">
              Other feedback tools just collect responses.
              <br />
              <strong className="text-ocoya-text-primary">Snowball thinks with you:</strong>
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card>
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-ocoya-primary rounded-full flex items-center justify-center mb-4">
                  <Brain size={24} weight="bold" className="text-white" />
                </div>
                <h3 className="text-lg font-semibold text-ocoya-text-primary mb-3">Smarter every day</h3>
                <p className="text-sm text-ocoya-text-secondary">Every response makes Snowball more insightful.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-ocoya-secondary rounded-full flex items-center justify-center mb-4">
                  <Crosshair size={24} weight="bold" className="text-white" />
                </div>
                <h3 className="text-lg font-semibold text-ocoya-text-primary mb-3">No guesswork</h3>
                <p className="text-sm text-ocoya-text-secondary">Combines words, behavior, and sentiment.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-ocoya-accent rounded-full flex items-center justify-center mb-4">
                  <Lightning size={24} weight="bold" className="text-white" />
                </div>
                <h3 className="text-lg font-semibold text-ocoya-text-primary mb-3">
                  From feedback to features in minutes
                </h3>
                <p className="text-sm text-ocoya-text-secondary">
                  AI turns insights into PRDs, user stories, and action plans.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center">
            <p className="text-lg font-semibold text-ocoya-primary">
              It's not a tool. It's your product growth partner.
            </p>
          </div>
        </div>
      </section>

      {/* The Wow Moments */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-ocoya-text-primary mb-4">The Wow Moments</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6">
                <Badge variant="info" className="mb-4">
                  Minute 3
                </Badge>
                <h3 className="text-lg font-semibold text-ocoya-text-primary mb-3">
                  Widget live + sample responses generated
                </h3>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <Badge variant="success" className="mb-4">
                  Minute 5
                </Badge>
                <h3 className="text-lg font-semibold text-ocoya-text-primary mb-3">
                  First real feedback → auto-generated PRD in your inbox
                </h3>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <Badge variant="warning" className="mb-4">
                  Week 1
                </Badge>
                <h3 className="text-lg font-semibold text-ocoya-text-primary mb-3">
                  AI sends your first Weekly Insight Dose: one action you can take today to delight your users
                </h3>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Reviews & Stories */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-ocoya-background-alt">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-ocoya-text-primary mb-4">Founder Stories</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6">
                <p className="text-base text-ocoya-text-secondary mb-6 italic">
                  "We saved 2 months of building the wrong thing."
                </p>
                <div className="flex items-center">
                  <Avatar size="sm" alt="Sarah M." />
                  <div className="ml-4">
                    <p className="text-sm font-semibold text-ocoya-text-primary">Sarah M.</p>
                    <p className="text-xs text-ocoya-text-muted">Startup Founder</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <p className="text-base text-ocoya-text-secondary mb-6 italic">
                  "Snowball caught a frustration trend on Reddit before churn spiked."
                </p>
                <div className="flex items-center">
                  <Avatar size="sm" alt="James K." />
                  <div className="ml-4">
                    <p className="text-sm font-semibold text-ocoya-text-primary">James K.</p>
                    <p className="text-xs text-ocoya-text-muted">Product Manager</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <p className="text-base text-ocoya-text-secondary mb-6 italic">
                  "Weekly insights keep our team laser-focused."
                </p>
                <div className="flex items-center">
                  <Avatar size="sm" alt="Lisa R." />
                  <div className="ml-4">
                    <p className="text-sm font-semibold text-ocoya-text-primary">Lisa R.</p>
                    <p className="text-xs text-ocoya-text-muted">Tech Lead</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-ocoya-text-primary mb-4">
            Simple pricing, powerful insights.
          </h2>
          <div className="grid md:grid-cols-2 gap-8 mt-12 max-w-4xl mx-auto">
            <Card>
              <CardContent className="pt-8 text-center">
                <Badge variant="neutral" className="mb-4">
                  Free Forever Plan
                </Badge>
                <h3 className="text-lg font-semibold text-ocoya-text-primary mb-4">Perfect for getting started</h3>
                <ul className="text-left space-y-2 mb-6">
                  <li className="flex items-center text-sm text-ocoya-text-secondary">
                    <CheckCircle size={16} weight="fill" className="text-green-500 mr-2" />
                    50 responses/month
                  </li>
                  <li className="flex items-center text-sm text-ocoya-text-secondary">
                    <CheckCircle size={16} weight="fill" className="text-green-500 mr-2" />
                    Basic dashboard
                  </li>
                  <li className="flex items-center text-sm text-ocoya-text-secondary">
                    <CheckCircle size={16} weight="fill" className="text-green-500 mr-2" />
                    Branded widget
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card variant="elevated">
              <CardContent className="pt-8 text-center">
                <Badge variant="info" className="mb-4">
                  Pro Growth Plan
                </Badge>
                <h3 className="text-lg font-semibold text-ocoya-text-primary mb-4">Best for startups</h3>
                <ul className="text-left space-y-2 mb-6">
                  <li className="flex items-center text-sm text-ocoya-text-secondary">
                    <Rocket size={16} weight="fill" className="text-blue-500 mr-2" />
                    Unlimited responses
                  </li>
                  <li className="flex items-center text-sm text-ocoya-text-secondary">
                    <Rocket size={16} weight="fill" className="text-blue-500 mr-2" />
                    Advanced AI analysis
                  </li>
                  <li className="flex items-center text-sm text-ocoya-text-secondary">
                    <Rocket size={16} weight="fill" className="text-blue-500 mr-2" />
                    Full social listening integrations
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
          <div className="mt-12">
            <Button variant="primary" size="sm">
              Start for free
            </Button>
            <Button variant="ghost" size="md" className="ml-4">
              Get Started Free (no credit card)
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-ocoya-background-alt">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-ocoya-text-primary mb-6">
            The fastest way to know your users.
          </h2>
          <p className="text-lg text-ocoya-text-secondary mb-8">
            In minutes, you'll have a live feedback loop. In days, you'll ship the right product.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="primary" size="sm" className="w-full sm:w-auto">
              Try the Demo
            </Button>
            <Button variant="ghost" size="md" className="w-full sm:w-auto">
              Get Started Free
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-ocoya-border bg-ocoya-background py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-xl font-bold text-ocoya-primary mb-4">Snowball</div>
          <p className="text-sm text-ocoya-text-secondary mb-2">Every answer makes you smarter.</p>
          <p className="text-xs text-ocoya-text-muted">© 2024 Snowball. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
