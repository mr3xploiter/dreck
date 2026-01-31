'use client'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ArrowRight, Calendar, MapPin, Users, Sparkles, Clock, Gift, Zap } from 'lucide-react'
import Link from 'next/link'

export default function EventPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/20 bg-background/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <div className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            DRECK EVENT
          </div>
          <div className="hidden md:flex items-center gap-8">
            <Link href="#about" className="text-sm text-muted-foreground hover:text-foreground transition">
              About
            </Link>
            <Link href="#schedule" className="text-sm text-muted-foreground hover:text-foreground transition">
              Schedule
            </Link>
            <Link href="#speakers" className="text-sm text-muted-foreground hover:text-foreground transition">
              Speakers
            </Link>
            <Link href="https://stored-worth-newark-assured.trycloudflare.com" target="_blank">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                Register Now
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 border-b border-border/20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-secondary/10 px-3 py-1 rounded-full mb-6 border border-secondary/20">
              <Sparkles className="w-4 h-4 text-secondary" />
              <span className="text-xs text-secondary">DreckShop - এক্সক্লুসিভ লয়্যালটি প্রোগ্রাম</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6 text-balance">
              DreckShop এক্সক্লুসিভ ইভেন্ট
            </h1>
            <p className="text-lg text-muted-foreground mb-4 max-w-lg">
              <span className="font-semibold text-foreground">Sir/Ma'am,</span> আমাদের DreckShop থেকে জানানো যাচ্ছে যে, যারা আমাদের পুরোনো কাস্টমার, তাদের জন্য থাকছে একটি <span className="text-primary font-semibold">এক্সক্লুসিভ ইভেন্টে অ্যাক্সেস</span>।
            </p>
            <p className="text-lg text-muted-foreground mb-8 max-w-lg">
              এই ইভেন্টে রয়েছে অনেকগুলো এক্সাইটিং রিওয়ার্ড, যা সম্পূর্ণভাবে আপনার ভাগ্যের উপর নির্ভর করবে!
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="https://stored-worth-newark-assured.trycloudflare.com" target="_blank" className="w-full sm:w-auto">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 w-full">
                  এখনই যোগ দিন
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link href="https://stored-worth-newark-assured.trycloudflare.com" target="_blank" className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="w-full border-border hover:bg-muted/20 bg-transparent">
                  বিস্তারিত জানুন
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 to-primary/20 rounded-3xl blur-3xl"></div>
            <div className="relative bg-gradient-to-br from-secondary/10 to-primary/10 border border-secondary/20 rounded-3xl p-8 backdrop-blur-sm">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Sparkles className="w-6 h-6 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">স্ট্যাটাস</p>
                    <p className="text-lg font-semibold">চলমান - Deadline : 30 min</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Gift className="w-6 h-6 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">পুরস্কার পুল</p>
                    <p className="text-lg font-semibold">সীমাহীন রিওয়ার্ড</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="w-6 h-6 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">পুরোনো কাস্টমারদের জন্য</p>
                    <p className="text-lg font-semibold">সম্পূর্ণ বিনামূল্যে অ্যাক্সেস</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Zap className="w-6 h-6 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">প্রতিদিন নতুন</p>
                    <p className="text-lg font-semibold">Daily Quests ও পুরস্কার</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rewards Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b border-border/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">আপনার জন্য কী অপেক্ষা করছে?</h2>
          <p className="text-lg text-muted-foreground mb-12">এক্সক্লুসিভ পুরস্কার এবং রিওয়ার্ড যা সম্পূর্ণভাবে ভাগ্যের উপর নির্ভর করে</p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Daily Free Quest',
                description: 'প্রতিদিন নতুন কোয়েস্ট সম্পূর্ণ করুন এবং পয়েন্ট অর্জন করুন',
                icon: '⚡'
              },
              {
                title: 'Weekly Discord Avatar',
                description: 'প্রতি সপ্তাহে এক্সক্লুসিভ Discord Avatar Decoration জিতে নিন',
                icon: '🎨'
              },
              {
                title: 'Discord Nitro',
                description: 'ভাগ্যবান বিজয়ীরা পাবেন বিনামূল্যে Discord Nitro সাবস্ক্রিপশন',
                icon: '👑'
              },
              {
                title: 'DreckShop Credit',
                description: 'ডিসকাউন্ট ভাউচার এবং DreckShop ক্রেডিট জেতার সুযোগ',
                icon: '💳'
              },
              {
                title: 'বিশেষ ব্যাজ',
                description: 'লিডারবোর্ডে শীর্ষে থাকুন এবং এক্সক্লুসিভ ব্যাজ পান',
                icon: '🏆'
              },
              {
                title: 'আরও অনেক কিছু',
                description: 'নিয়মিত নতুন এবং সারপ্রাইজ রিওয়ার্ড যোগ করা হচ্ছে',
                icon: '🎁'
              }
            ].map((item, i) => (
              <Card key={i} className="bg-card border-border/20 p-6 hover:border-primary/50 transition">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Tier Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b border-border/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center">অ্যাক্সেস লেভেল</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            সব স্তরের সদস্যদের জন্য সম্পূর্ণ বিনামূল্যে অ্যাক্সেস
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'নতুন সদস্য',
                price: 'বিনামূল্যে',
                popular: false,
                features: ['Daily Free Quest অ্যাক্সেস', 'মাসিক পুরস্কারের সুযোগ', 'কমিউনিটি অ্যাক্সেস', 'ডিসকর্ড চ্যানেল অ্যাক্সেস']
              },
              {
                name: 'পুরোনো কাস্টমার',
                price: 'বিনামূল্যে',
                popular: true,
                features: ['সব Daily Quest অ্যাক্সেস', 'সাপ্তাহিক পুরস্কার নিশ্চিত', 'Discord Avatar রিওয়ার্ড', 'প্রাধিমূলক অ্যাক্সেস', 'লিডারবোর্ড ট্র্যাকিং', 'বিশেষ ব্যাজ']
              },
              {
                name: 'ভিআইপি সদস্য',
                price: 'বিনামূল্যে',
                popular: false,
                features: ['অতিরিক্ত Daily Quest', 'ডিসকর্ড Nitro সুযোগ', 'এক্সক্লুসিভ ইভেন্ট', 'প্রাথমিক রিওয়ার্ড অ্যাক্সেস', 'কাস্টম ব্যাজ', '২৪/৭ সাপোর্ট']
              }
            ].map((plan, i) => (
              <Card
                key={i}
                className={`p-8 relative border transition ${
                  plan.popular
                    ? 'border-primary bg-gradient-to-b from-primary/10 to-background ring-2 ring-primary'
                    : 'border-border/20'
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <span className="bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
                      সবচেয়ে জনপ্রিয়
                    </span>
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="mb-6">
                  <span className="text-4xl font-bold text-primary">{plan.price}</span>
                </p>
                <Link href="https://stored-worth-newark-assured.trycloudflare.com" target="_blank" className="block">
                  <Button
                    className={`w-full mb-6 ${
                      plan.popular
                        ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                        : 'border border-border hover:bg-muted/20'
                    }`}
                  >
                    এখনই শুরু করুন
                  </Button>
                </Link>
                <ul className="space-y-3">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-secondary/10 to-primary/10 border-y border-border/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">এক্সক্লুসিভ রিওয়ার্ড জিতে নিন</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            এখনই যোগ দিন এবং Daily Quest, Discord Nitro, এবং আরও অনেক রিওয়ার্ড জেতার সুযোগ পান। এটি সম্পূর্ণ বিনামূল্যে!
          </p>
          <Link href="https://stored-worth-newark-assured.trycloudflare.com" target="_blank">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              এখনই শুরু করুন
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-border/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold mb-4">DRECK SHOP</h4>
              <p className="text-sm text-muted-foreground">এক্সক্লুসিভ লয়্যালটি প্রোগ্রাম - পুরোনো কাস্টমারদের জন্য বিশেষ রিওয়ার্ড</p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">দ্রুত লিঙ্ক</h5>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="#" className="hover:text-foreground transition">হোম</Link></li>
                <li><Link href="#" className="hover:text-foreground transition">রিওয়ার্ড</Link></li>
                <li><Link href="#" className="hover:text-foreground transition">লিডারবোর্ড</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">আইনি</h5>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="#" className="hover:text-foreground transition">গোপনীয়তা নীতি</Link></li>
                <li><Link href="#" className="hover:text-foreground transition">শর্তাবলী</Link></li>
                <li><Link href="#" className="hover:text-foreground transition">নিয়ম ও শর্তাবলী</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">যোগাযোগ করুন</h5>
              <p className="text-sm text-muted-foreground">
                <a href="tel:+8801335739855" className="hover:text-primary transition">+880 133 573 9855</a>
              </p>
              <p className="text-sm text-muted-foreground">
                <a href="mailto:info@dreckshop.com" className="hover:text-primary transition">info@dreckshop.com</a>
              </p>
            </div>
          </div>
          <div className="border-t border-border/20 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2025 DRECK SHOP. সর্বাধিকার সংরক্ষিত। এক্সক্লুসিভ লয়্যালটি প্রোগ্রাম</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
