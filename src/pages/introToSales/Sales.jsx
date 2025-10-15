import { useState } from 'react';
import { Rocket, Target, Phone, Video, Clock, TrendingUp, Award, Sparkles, CheckCircle2, Play, Users, DollarSign, Lightbulb, MessageSquare, Calendar, BarChart3, Zap, Star, Trophy, Brain } from 'lucide-react';

const MOTIVATIONAL_QUOTES = [
  { text: "Every 'no' gets you closer to a 'yes'", author: "Sales Wisdom" },
  { text: "Your network is your net worth", author: "Porter Gale" },
  { text: "Don't sell. Help people buy.", author: "Sales Mantra" },
  { text: "The best time to start was yesterday. The second best time is now.", author: "Chinese Proverb" }
];

const TRAINING_SECTIONS = [
  {
    id: 'welcome',
    title: 'Welcome from Our Founder',
    icon: Rocket,
    color: 'from-purple-500 to-pink-500',
    content: {
      founderMessage: "Welcome to Pixel & Code! I'm thrilled you've joined our mission to transform East African businesses through AI-powered technology. You're not just a sales rep - you're a digital transformation consultant. Every website you sell changes a business owner's life. Let's build something incredible together.",
      vision: "We're building the future of business in Africa - one AI-powered website at a time.",
      yourImpact: [
        "Help SMEs compete with international brands",
        "Bring AI technology to businesses that need it most",
        "Earn 30% commission on every deal you close",
        "Build a career in the fastest-growing tech sector"
      ],
      videoUrl: "https://www.youtube.com/embed/e4hoXwzjU-g"
    }
  },
  {
    id: 'commission',
    title: 'Your Earnings Potential',
    icon: DollarSign,
    color: 'from-green-500 to-emerald-500',
    content: {
      intro: "Let's talk money. You earn 30% commission on every deal. Here's what that means:",
      packages: [
        { name: "Basic Package", price: "KES 150,000", commission: "KES 45,000" },
        { name: "Pro Package", price: "KES 300,000", commission: "KES 90,000" },
        { name: "Enterprise Package", price: "KES 500,000+", commission: "KES 150,000+" }
      ],
      realistic: "Close 3 Pro packages per month = KES 270,000/month = KES 3.24M/year",
      topPerformer: "Our top rep closed 8 deals last month and earned KES 720,000",
      quiz: {
        question: "If you close 2 Basic and 1 Pro package this month, what's your commission?",
        options: [
          "KES 135,000",
          "KES 180,000",
          "KES 225,000",
          "KES 270,000"
        ],
        correct: 1,
        explanation: "(2 × 45K) + (1 × 90K) = KES 180,000"
      }
    }
  },
  {
    id: 'product',
    title: 'What We Sell & Why It Wins',
    icon: Zap,
    color: 'from-blue-500 to-cyan-500',
    content: {
      intro: "You're selling business transformation, not websites. Here's what makes us unbeatable:",
      advantages: [
        "AI Chatbots: Answer customer questions 24/7 - no human needed",
        "Smart Booking Systems: Clients can book services instantly",
        "Mobile-First Design: 70% of African internet is mobile - we dominate here",
        "Fast Loading: Works on slow connections (critical in Kenya)",
        "Analytics Dashboard: Show clients exactly what's working"
      ],
      quiz: {
        question: "A restaurant owner says 'Why do I need AI?' Your best response?",
        options: [
          "It's the latest technology everyone is using",
          "Your competitors already have it",
          "It answers customer questions instantly - even at 2am when someone wants to book a table",
          "It makes your website look modern"
        ],
        correct: 2,
        explanation: "Always focus on THEIR pain point - missed bookings = lost revenue"
      }
    }
  },
  {
    id: 'prospecting',
    title: 'Finding Perfect Clients',
    icon: Target,
    color: 'from-yellow-500 to-orange-500',
    content: {
      intro: "Not everyone is your client. Here's who to target and where to find them:",
      idealClient: [
        "SMEs with 10-100 employees (they have budget)",
        "Businesses with outdated websites or no online presence",
        "Industries: Hospitality, Retail, Professional Services, Healthcare",
        "Decision makers: CEOs, Founders, Marketing Directors"
      ],
      whereToFind: [
        "LinkedIn: Search 'CEO Nairobi', 'Director Kenya', filter by industry",
        "Networking Events: Chamber of Commerce, BNI meetings",
        "Referrals: Ask existing clients for introductions",
        "Google Maps: Search local businesses, check their websites",
        "Facebook Business Groups: Nairobi entrepreneurs"
      ],
      dailyGoal: "Goal: 50 new prospects per week = 10 per day",
      quiz: {
        question: "Which is your BEST prospect?",
        options: [
          "A small kiosk owner with no budget",
          "A restaurant with an ugly website and no online ordering",
          "A large corporation with an IT department",
          "A startup that just launched last week"
        ],
        correct: 1,
        explanation: "Restaurant has clear pain (lost orders) + budget to fix it. Perfect!"
      }
    }
  },
  {
    id: 'coldcall',
    title: 'Cold Calling That Converts',
    icon: Phone,
    color: 'from-red-500 to-pink-500',
    content: {
      intro: "Most people fear cold calling. You're about to master it. Here's your framework:",
      script: [
        "Introduction: 'Hi, this is [Name] from Pixel & Code. Do you have 30 seconds?'",
        "Hook: 'I noticed your website loads slowly on mobile - that's costing you customers'",
        "Value: 'We build AI-powered sites that respond to customer questions 24/7'",
        "Ask: 'Would a quick 15-minute Zoom demo make sense?'"
      ],
      gatekeepers: "Secretary blocks you? 'I'm following up on the digital marketing inquiry - is [Name] available?'",
      voicemail: "'Hi, [Name] - Quick question about your website's mobile experience. Call me back at [number]'",
      timing: "Best times: Tuesday-Thursday, 10am-11am or 2pm-4pm",
      quiz: {
        question: "Prospect says 'We're happy with our current website.' You say:",
        options: [
          "Okay, thanks for your time. Goodbye.",
          "Are you sure? We have great features.",
          "That's great! What's working well? (Then find the gap)",
          "Your competitor just upgraded to AI - you should too"
        ],
        correct: 2,
        explanation: "Never argue. Ask questions to find what's NOT working, then offer solutions"
      }
    }
  },
  {
    id: 'zoom',
    title: 'Zoom Demos That Close',
    icon: Video,
    color: 'from-purple-500 to-indigo-500',
    content: {
      intro: "The demo is where you win or lose. Here's your 15-minute framework:",
      structure: [
        "Mins 0-2: Build rapport - ask about their business challenges",
        "Mins 2-5: Show their competitor's AI website (creates urgency)",
        "Mins 5-12: Demo OUR solution to THEIR specific problem",
        "Mins 12-14: Show pricing with ROI calculation",
        "Min 15: Close - 'When should we start - next week or the week after?'"
      ],
      preCall: [
        "Test your camera, mic, and internet 15 mins before",
        "Have 3 demo sites ready to show",
        "Prepare pricing document",
        "Research their business on LinkedIn"
      ],
      quiz: {
        question: "Client loves the demo but says 'Let me think about it.' You say:",
        options: [
          "Sure, take your time and call me back",
          "What specific concerns do you have? Let's address them now",
          "This offer expires today, you need to decide now",
          "Okay, I'll send you more information"
        ],
        correct: 1,
        explanation: "'Think about it' means they have an objection. Find it and solve it NOW"
      }
    }
  },
  {
    id: 'closing',
    title: 'Closing Techniques That Work',
    icon: Trophy,
    color: 'from-green-500 to-teal-500',
    content: {
      intro: "The close isn't pushy - it's helping them make a decision. Here are your tools:",
      techniques: [
        "Assumptive Close: 'Should we start with the chatbot or booking system first?'",
        "Urgency Close: 'We have one slot next week, after that it's 3 weeks out'",
        "ROI Close: 'If this brings just 5 customers/month at 10K each, it pays for itself'",
        "Choice Close: 'Do you prefer to start Monday or Wednesday?'"
      ],
      objections: [
        "'Too expensive' → 'How much are you losing monthly without online bookings?'",
        "'Need to talk to partner' → 'Great! Should we schedule a call with both of you?'",
        "'Not right now' → 'When IS the right time? Let's schedule for then'"
      ],
      quiz: {
        question: "Client agrees to everything but won't commit. Your move:",
        options: [
          "Ask 'So are we doing this or not?'",
          "Send proposal and wait",
          "Ask 'What's holding you back from moving forward today?'",
          "Offer a discount to sweeten the deal"
        ],
        correct: 2,
        explanation: "Direct question reveals the real objection. Then you can solve it"
      }
    }
  },
  {
    id: 'time',
    title: 'Time Management & Daily Routine',
    icon: Clock,
    color: 'from-orange-500 to-red-500',
    content: {
      intro: "Success in sales = consistent daily action. Here's your winning schedule:",
      schedule: [
        "8am-9am: Review goals, update CRM, plan outreach",
        "9am-12pm: PROSPECTING POWER HOURS - Calls, LinkedIn, emails (50+ touches)",
        "12pm-1pm: Lunch + learn (sales podcasts/videos)",
        "1pm-3pm: Demos and follow-up calls",
        "3pm-5pm: Proposals, contracts, admin work",
        "5pm: Review day, celebrate wins, plan tomorrow"
      ],
      kpis: [
        "Daily: 50 outreach touches (calls/emails/DMs)",
        "Weekly: 10 discovery calls, 5 demos",
        "Monthly: 3-5 closed deals minimum"
      ],
      quiz: {
        question: "It's 10am. What should you be doing?",
        options: [
          "Working on proposals",
          "Making outreach calls and prospecting",
          "Checking social media",
          "Planning your week"
        ],
        correct: 1,
        explanation: "9am-12pm is PROSPECTING TIME. This is where deals are born"
      }
    }
  },
  {
    id: 'scale',
    title: 'Scaling to Top Performer',
    icon: TrendingUp,
    color: 'from-pink-500 to-purple-500',
    content: {
      intro: "Going from good to great means working smarter. Here's how:",
      strategies: [
        "Ask every client for 2 referrals (easiest warm leads)",
        "Build your personal brand on LinkedIn (post 3x/week)",
        "Create content that attracts leads (before/after posts)",
        "Upsell existing clients (maintenance, add-ons)",
        "Partner with complementary businesses (photographers, marketers)"
      ],
      goals: [
        "Week 1-4: Complete training, shadow calls, build prospect list",
        "Month 2: Close first 2 deals (KES 90K+)",
        "Month 3-6: Hit 3-5 deals/month consistently",
        "Month 6+: Top performer status (8+ deals/month, KES 720K)"
      ],
      quiz: {
        question: "Best way to get 10 new leads this week:",
        options: [
          "Post on social media and wait",
          "Ask your last 3 clients for referrals",
          "Attend networking events only",
          "Send mass emails to everyone"
        ],
        correct: 1,
        explanation: "Referrals have 80% close rate vs 10% cold outreach. Always ask!"
      }
    }
  }
];

function SalesDashboard() {
  const [activeSection, setActiveSection] = useState(null);
  const [completedSections, setCompletedSections] = useState({});
  const [quizAnswers, setQuizAnswers] = useState({});
  const [showQuizResults, setShowQuizResults] = useState({});
  const [currentQuote, setCurrentQuote] = useState(0);

  const toggleSection = (id) => {
    setActiveSection(activeSection === id ? null : id);
  };

  const handleQuizAnswer = (sectionId, answerIndex) => {
    setQuizAnswers({ ...quizAnswers, [sectionId]: answerIndex });
    setShowQuizResults({ ...showQuizResults, [sectionId]: true });
    
    const section = TRAINING_SECTIONS.find(s => s.id === sectionId);
    if (section.content.quiz && answerIndex === section.content.quiz.correct) {
      setCompletedSections({ ...completedSections, [sectionId]: true });
    }
  };

  const totalCompleted = Object.keys(completedSections).length;
  const progress = (totalCompleted / TRAINING_SECTIONS.length) * 100;
  const estimatedEarnings = totalCompleted * 45000; // Simulate potential earnings per module

  useState(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % MOTIVATIONAL_QUOTES.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white">
      {/* Hero Section with Stats */}
      <div className="relative overflow-hidden border-b border-purple-500/30">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-pink-600/10 to-cyan-600/10 animate-pulse"></div>
        </div>
        
        <section className="relative py-16 px-4">
          <div className="max-w-7xl mx-auto">
            {/* Rotating Motivational Quote */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-3 bg-yellow-500/20 backdrop-blur-xl border border-yellow-500/50 rounded-full px-6 py-3 mb-6">
                <Star className="w-5 h-5 text-yellow-400 animate-pulse" />
                <span className="text-sm font-bold">Daily Inspiration</span>
              </div>
              <div className="transition-all duration-1000">
                <p className="text-2xl md:text-3xl font-light italic text-gray-300 mb-2">
                  "{MOTIVATIONAL_QUOTES[currentQuote].text}"
                </p>
                <p className="text-sm text-gray-500">— {MOTIVATIONAL_QUOTES[currentQuote].author}</p>
              </div>
            </div>

            {/* Main Title */}
            <div className="text-center mb-12">
              <h1 className="text-5xl md:text-7xl font-black mb-4 leading-tight">
                Welcome to<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400">
                  Pixel & Code Sales
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
                Turn leads into clients. Transform businesses. Earn 30% commission on every deal.
              </p>
            </div>

            {/* Stats Dashboard */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
              <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/20 backdrop-blur-xl border border-purple-500/30 rounded-2xl p-6 text-center hover:scale-105 transition-transform">
                <Award className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                <div className="text-3xl font-black text-white">{totalCompleted}/{TRAINING_SECTIONS.length}</div>
                <div className="text-xs text-gray-400 uppercase tracking-wide">Modules Done</div>
              </div>
              
              <div className="bg-gradient-to-br from-green-500/20 to-green-600/20 backdrop-blur-xl border border-green-500/30 rounded-2xl p-6 text-center hover:scale-105 transition-transform">
                <TrendingUp className="w-8 h-8 text-green-400 mx-auto mb-2" />
                <div className="text-3xl font-black text-white">{Math.round(progress)}%</div>
                <div className="text-xs text-gray-400 uppercase tracking-wide">Progress</div>
              </div>
              
              <div className="bg-gradient-to-br from-yellow-500/20 to-yellow-600/20 backdrop-blur-xl border border-yellow-500/30 rounded-2xl p-6 text-center hover:scale-105 transition-transform">
                <DollarSign className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                <div className="text-3xl font-black text-white">30%</div>
                <div className="text-xs text-gray-400 uppercase tracking-wide">Commission</div>
              </div>
              
              <div className="bg-gradient-to-br from-pink-500/20 to-pink-600/20 backdrop-blur-xl border border-pink-500/30 rounded-2xl p-6 text-center hover:scale-105 transition-transform">
                <Sparkles className="w-8 h-8 text-pink-400 mx-auto mb-2" />
                <div className="text-3xl font-black text-white">KES {estimatedEarnings.toLocaleString()}</div>
                <div className="text-xs text-gray-400 uppercase tracking-wide">Est. Earnings</div>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="max-w-3xl mx-auto mt-8">
              <div className="bg-gray-800/50 backdrop-blur-xl rounded-full h-4 border border-purple-500/30 overflow-hidden">
                <div 
                  className="bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 h-full transition-all duration-1000 ease-out flex items-center justify-end px-2"
                  style={{ width: `${progress}%` }}
                >
                  {progress > 10 && (
                    <span className="text-xs font-bold text-white">{Math.round(progress)}%</span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Training Sections */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black mb-4">Your Sales Mastery Path</h2>
            <p className="text-xl text-gray-400">Complete each module, answer the quiz, and unlock your potential</p>
          </div>

          <div className="space-y-6">
            {TRAINING_SECTIONS.map((section, index) => {
              const Icon = section.icon;
              const isCompleted = completedSections[section.id];
              const isActive = activeSection === section.id;
              const hasQuiz = section.content.quiz;
              const userAnswer = quizAnswers[section.id];
              const showResult = showQuizResults[section.id];
              
              return (
                <div
                  key={section.id}
                  className={`group relative bg-gray-800/40 backdrop-blur-xl border-2 rounded-3xl overflow-hidden transition-all duration-300 ${
                    isCompleted 
                      ? 'border-green-500/60 shadow-2xl shadow-green-500/20' 
                      : 'border-purple-500/30 hover:border-purple-500/60 hover:scale-[1.01]'
                  }`}
                >
                  {/* Module Number Badge */}
                  <div className={`absolute top-4 left-4 w-12 h-12 rounded-full bg-gradient-to-br ${section.color} flex items-center justify-center font-black text-xl z-10 shadow-xl`}>
                    {index + 1}
                  </div>

                  <div className={`absolute inset-0 bg-gradient-to-r ${section.color} opacity-0 group-hover:opacity-5 transition-opacity`}></div>
                  
                  <button
                    onClick={() => toggleSection(section.id)}
                    className="relative w-full flex items-center justify-between p-8 pl-20 text-left"
                  >
                    <div className="flex items-center gap-6 flex-1">
                      <div className={`p-4 rounded-2xl bg-gradient-to-br ${section.color} shadow-2xl`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl md:text-3xl font-bold mb-1">{section.title}</h3>
                        {isCompleted && (
                          <div className="flex items-center gap-2 text-green-400 text-sm font-semibold">
                            <CheckCircle2 className="w-5 h-5" />
                            Completed & Mastered
                          </div>
                        )}
                      </div>
                    </div>
                    <div className={`text-4xl text-gray-400 transition-transform ${isActive ? 'rotate-180' : ''}`}>
                      ↓
                    </div>
                  </button>

                  {isActive && (
                    <div className="border-t-2 border-purple-500/30 bg-gray-900/80 p-8 space-y-8">
                      {/* Founder Message */}
                      {section.id === 'welcome' && (
                        <div className="space-y-6">
                          <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border-2 border-purple-500/30 rounded-2xl p-8">
                            <div className="flex items-center gap-4 mb-6">
                              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-3xl">
                                👋
                              </div>
                              <div>
                                <h4 className="text-2xl font-bold">Message from the Founder</h4>
                                <p className="text-sm text-gray-400">CEO, Pixel & Code</p>
                              </div>
                            </div>
                            <p className="text-xl text-gray-300 leading-relaxed mb-6 italic">
                              "{section.content.founderMessage}"
                            </p>
                            <div className="bg-purple-500/20 border border-purple-500/40 rounded-xl p-4">
                              <p className="text-lg font-semibold text-purple-300">
                                🎯 Our Vision: {section.content.vision}
                              </p>
                            </div>
                          </div>

                          {section.content.videoUrl && (
                            <div>
                              <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                                <Play className="w-6 h-6 text-pink-400" />
                                Watch the Full Welcome Message
                              </h4>
                              <div className="relative rounded-2xl overflow-hidden shadow-2xl" style={{ paddingBottom: '56.25%' }}>
                                <iframe
                                  className="absolute inset-0 w-full h-full"
                                  src={section.content.videoUrl}
                                  title={section.title}
                                  frameBorder="0"
                                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                  allowFullScreen
                                ></iframe>
                              </div>
                            </div>
                          )}

                          <div>
                            <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                              <Sparkles className="w-6 h-6 text-yellow-400" />
                              Your Impact on East Africa
                            </h4>
                            <div className="grid md:grid-cols-2 gap-4">
                              {section.content.yourImpact.map((impact, idx) => (
                                <div key={idx} className="bg-gray-800/50 border border-purple-500/20 rounded-xl p-4 flex items-start gap-3">
                                  <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mt-2"></div>
                                  <span className="text-gray-300">{impact}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Commission Calculator */}
                      {section.id === 'commission' && (
                        <div className="space-y-6">
                          <p className="text-xl text-gray-300 leading-relaxed">{section.content.intro}</p>
                          
                          <div className="grid md:grid-cols-3 gap-4">
                            {section.content.packages.map((pkg, idx) => (
                              <div key={idx} className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border-2 border-green-500/30 rounded-2xl p-6 text-center hover:scale-105 transition-transform">
                                <h5 className="text-lg font-bold mb-2 text-green-400">{pkg.name}</h5>
                                <div className="text-2xl font-black text-white mb-1">{pkg.price}</div>
                                <div className="text-sm text-gray-400 mb-3">Package Price</div>
                                <div className="bg-green-500/20 rounded-lg py-2 px-3">
                                  <div className="text-xl font-black text-green-300">{pkg.commission}</div>
                                  <div className="text-xs text-gray-400">Your Commission (30%)</div>
                                </div>
                              </div>
                            ))}
                          </div>

                          <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border-2 border-yellow-500/40 rounded-2xl p-6">
                            <h5 className="text-xl font-bold mb-3 flex items-center gap-2">
                              <TrendingUp className="w-6 h-6 text-yellow-400" />
                              Realistic Monthly Goal
                            </h5>
                            <p className="text-2xl font-bold text-yellow-300 mb-2">{section.content.realistic}</p>
                            <p className="text-gray-300 text-sm">That's over KES 3.2 Million per year! 🚀</p>
                          </div>

                          <div className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-4">
                            <p className="text-sm text-purple-300">
                              💡 <strong>Success Story:</strong> {section.content.topPerformer}
                            </p>
                          </div>
                        </div>
                      )}

                      {/* Product Advantages */}
                      {section.id === 'product' && (
                        <div className="space-y-6">
                          <p className="text-xl text-gray-300 leading-relaxed">{section.content.intro}</p>
                          <div className="space-y-3">
                            {section.content.advantages.map((advantage, idx) => (
                              <div key={idx} className="bg-cyan-500/10 border border-cyan-500/30 rounded-xl p-4 flex items-start gap-3 hover:bg-cyan-500/20 transition-colors">
                                <Zap className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                                <span className="text-gray-300 text-lg">{advantage}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Prospecting Lists */}
                      {section.id === 'prospecting' && (
                        <div className="space-y-6">
                          <p className="text-xl text-gray-300 leading-relaxed">{section.content.intro}</p>
                          
                          <div>
                            <h5 className="text-xl font-bold mb-4 flex items-center gap-2">
                              <Target className="w-6 h-6 text-yellow-400" />
                              Your Ideal Client Profile
                            </h5>
                            <div className="grid md:grid-cols-2 gap-3">
                              {section.content.idealClient.map((item, idx) => (
                                <div key={idx} className="bg-gray-800/50 border border-yellow-500/20 rounded-lg p-3 flex items-start gap-2">
                                  <CheckCircle2 className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                                  <span className="text-gray-300">{item}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div>
                            <h5 className="text-xl font-bold mb-4 flex items-center gap-2">
                              <Users className="w-6 h-6 text-purple-400" />
                              Where to Find Them
                            </h5>
                            <div className="space-y-2">
                              {section.content.whereToFind.map((place, idx) => (
                                <div key={idx} className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-3 flex items-start gap-2">
                                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                                  <span className="text-gray-300">{place}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 border-2 border-orange-500/40 rounded-xl p-5">
                            <p className="text-lg font-bold text-orange-300">🎯 {section.content.dailyGoal}</p>
                          </div>
                        </div>
                      )}

                      {/* Cold Calling Scripts */}
                      {section.id === 'coldcall' && (
                        <div className="space-y-6">
                          <p className="text-xl text-gray-300 leading-relaxed">{section.content.intro}</p>
                          
                          <div className="bg-gradient-to-br from-red-500/10 to-pink-500/10 border-2 border-red-500/30 rounded-2xl p-6">
                            <h5 className="text-xl font-bold mb-4 flex items-center gap-2">
                              <Phone className="w-6 h-6 text-red-400" />
                              Your Winning Script
                            </h5>
                            <div className="space-y-4">
                              {section.content.script.map((line, idx) => (
                                <div key={idx} className="bg-gray-900/50 border border-red-500/20 rounded-lg p-4">
                                  <div className="text-xs text-red-400 font-bold mb-1 uppercase">Step {idx + 1}</div>
                                  <p className="text-gray-200">{line}</p>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-gray-800/50 border border-purple-500/20 rounded-xl p-4">
                              <h6 className="font-bold text-purple-400 mb-2">🛡️ Handling Gatekeepers</h6>
                              <p className="text-sm text-gray-300">{section.content.gatekeepers}</p>
                            </div>
                            <div className="bg-gray-800/50 border border-purple-500/20 rounded-xl p-4">
                              <h6 className="font-bold text-purple-400 mb-2">📞 Voicemail Template</h6>
                              <p className="text-sm text-gray-300">{section.content.voicemail}</p>
                            </div>
                          </div>

                          <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-4">
                            <p className="text-sm text-blue-300">
                              ⏰ <strong>Best Times to Call:</strong> {section.content.timing}
                            </p>
                          </div>
                        </div>
                      )}

                      {/* Zoom Demo Structure */}
                      {section.id === 'zoom' && (
                        <div className="space-y-6">
                          <p className="text-xl text-gray-300 leading-relaxed">{section.content.intro}</p>
                          
                          <div className="bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border-2 border-indigo-500/30 rounded-2xl p-6">
                            <h5 className="text-xl font-bold mb-4 flex items-center gap-2">
                              <Video className="w-6 h-6 text-indigo-400" />
                              15-Minute Demo Framework
                            </h5>
                            <div className="space-y-3">
                              {section.content.structure.map((step, idx) => (
                                <div key={idx} className="flex items-start gap-4">
                                  <div className="w-10 h-10 rounded-full bg-indigo-500 flex items-center justify-center font-bold text-sm flex-shrink-0">
                                    {idx + 1}
                                  </div>
                                  <div className="flex-1 bg-gray-900/50 border border-indigo-500/20 rounded-lg p-3">
                                    <p className="text-gray-200">{step}</p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div>
                            <h5 className="text-lg font-bold mb-3 flex items-center gap-2">
                              <CheckCircle2 className="w-5 h-5 text-green-400" />
                              Pre-Call Checklist
                            </h5>
                            <div className="grid md:grid-cols-2 gap-3">
                              {section.content.preCall.map((item, idx) => (
                                <div key={idx} className="bg-gray-800/50 border border-green-500/20 rounded-lg p-3 flex items-start gap-2">
                                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
                                  <span className="text-gray-300 text-sm">{item}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Closing Techniques */}
                      {section.id === 'closing' && (
                        <div className="space-y-6">
                          <p className="text-xl text-gray-300 leading-relaxed">{section.content.intro}</p>
                          
                          <div>
                            <h5 className="text-xl font-bold mb-4 flex items-center gap-2">
                              <Trophy className="w-6 h-6 text-yellow-400" />
                              Proven Closing Techniques
                            </h5>
                            <div className="space-y-3">
                              {section.content.techniques.map((technique, idx) => (
                                <div key={idx} className="bg-gradient-to-r from-green-500/10 to-teal-500/10 border border-green-500/30 rounded-xl p-4">
                                  <p className="text-gray-200 text-lg">{technique}</p>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div>
                            <h5 className="text-xl font-bold mb-4 flex items-center gap-2">
                              <MessageSquare className="w-6 h-6 text-orange-400" />
                              Objection Destroyers
                            </h5>
                            <div className="space-y-3">
                              {section.content.objections.map((obj, idx) => (
                                <div key={idx} className="bg-orange-500/10 border border-orange-500/30 rounded-xl p-4">
                                  <p className="text-gray-200">{obj}</p>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Time Management */}
                      {section.id === 'time' && (
                        <div className="space-y-6">
                          <p className="text-xl text-gray-300 leading-relaxed">{section.content.intro}</p>
                          
                          <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 border-2 border-orange-500/30 rounded-2xl p-6">
                            <h5 className="text-xl font-bold mb-4 flex items-center gap-2">
                              <Clock className="w-6 h-6 text-orange-400" />
                              Your Daily Success Schedule
                            </h5>
                            <div className="space-y-3">
                              {section.content.schedule.map((item, idx) => (
                                <div key={idx} className="bg-gray-900/50 border border-orange-500/20 rounded-lg p-3 flex items-start gap-3">
                                  <Clock className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                                  <span className="text-gray-200">{item}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div>
                            <h5 className="text-lg font-bold mb-3 flex items-center gap-2">
                              <BarChart3 className="w-5 h-5 text-pink-400" />
                              Your Success KPIs
                            </h5>
                            <div className="grid md:grid-cols-3 gap-3">
                              {section.content.kpis.map((kpi, idx) => (
                                <div key={idx} className="bg-pink-500/10 border border-pink-500/30 rounded-xl p-4 text-center">
                                  <p className="text-gray-200 font-semibold">{kpi}</p>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Scaling Strategies */}
                      {section.id === 'scale' && (
                        <div className="space-y-6">
                          <p className="text-xl text-gray-300 leading-relaxed">{section.content.intro}</p>
                          
                          <div>
                            <h5 className="text-xl font-bold mb-4 flex items-center gap-2">
                              <Lightbulb className="w-6 h-6 text-yellow-400" />
                              Smart Scaling Strategies
                            </h5>
                            <div className="space-y-3">
                              {section.content.strategies.map((strategy, idx) => (
                                <div key={idx} className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-4 flex items-start gap-3">
                                  <div className="text-2xl">{['🔄', '📱', '✍️', '📈', '🤝'][idx]}</div>
                                  <span className="text-gray-200">{strategy}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border-2 border-purple-500/40 rounded-2xl p-6">
                            <h5 className="text-xl font-bold mb-4 flex items-center gap-2">
                              <TrendingUp className="w-6 h-6 text-purple-400" />
                              Your Growth Timeline
                            </h5>
                            <div className="space-y-4">
                              {section.content.goals.map((goal, idx) => (
                                <div key={idx} className="flex items-start gap-4">
                                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center font-bold flex-shrink-0">
                                    {idx + 1}
                                  </div>
                                  <div className="flex-1 bg-gray-900/50 border border-purple-500/20 rounded-lg p-3">
                                    <p className="text-gray-200">{goal}</p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Quiz Section */}
                      {hasQuiz && (
                        <div className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 border-3 border-yellow-500/50 rounded-2xl p-6 mt-8">
                          <h4 className="text-2xl font-bold mb-4 flex items-center gap-2">
                            <Brain className="w-7 h-7 text-yellow-400" />
                            Knowledge Check
                          </h4>
                          <p className="text-xl text-gray-200 mb-6 font-semibold">{section.content.quiz.question}</p>
                          
                          <div className="space-y-3 mb-6">
                            {section.content.quiz.options.map((option, idx) => {
                              const isCorrect = idx === section.content.quiz.correct;
                              const isSelected = userAnswer === idx;
                              const showColors = showResult;
                              
                              return (
                                <button
                                  key={idx}
                                  onClick={() => !showResult && handleQuizAnswer(section.id, idx)}
                                  disabled={showResult}
                                  className={`w-full text-left p-4 rounded-xl border-2 transition-all ${
                                    showColors
                                      ? isCorrect
                                        ? 'border-green-500 bg-green-500/20'
                                        : isSelected
                                        ? 'border-red-500 bg-red-500/20'
                                        : 'border-gray-600 bg-gray-800/50 opacity-50'
                                      : 'border-yellow-500/30 bg-gray-800/50 hover:border-yellow-500 hover:bg-yellow-500/10'
                                  } ${!showResult && 'cursor-pointer'}`}
                                >
                                  <div className="flex items-center gap-3">
                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                                      showColors && isCorrect
                                        ? 'bg-green-500 text-white'
                                        : showColors && isSelected
                                        ? 'bg-red-500 text-white'
                                        : 'bg-yellow-500/30 text-yellow-300'
                                    }`}>
                                      {String.fromCharCode(65 + idx)}
                                    </div>
                                    <span className="text-gray-200 flex-1">{option}</span>
                                    {showColors && isCorrect && (
                                      <CheckCircle2 className="w-6 h-6 text-green-400" />
                                    )}
                                  </div>
                                </button>
                              );
                            })}
                          </div>

                          {showResult && (
                            <div className={`border-2 rounded-xl p-5 ${
                              userAnswer === section.content.quiz.correct
                                ? 'border-green-500 bg-green-500/10'
                                : 'border-orange-500 bg-orange-500/10'
                            }`}>
                              <p className={`font-bold text-lg mb-2 ${
                                userAnswer === section.content.quiz.correct
                                  ? 'text-green-400'
                                  : 'text-orange-400'
                              }`}>
                                {userAnswer === section.content.quiz.correct
                                  ? '🎉 Correct! You\'ve mastered this module!'
                                  : '💡 Not quite! Here\'s why:'}
                              </p>
                              <p className="text-gray-300">{section.content.quiz.explanation}</p>
                            </div>
                          )}

                          {!showResult && (
                            <p className="text-sm text-gray-400 text-center">
                              Select the best answer to complete this module
                            </p>
                          )}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quick Reference Notes */}
      <section className="py-16 px-4 bg-gradient-to-b from-transparent to-purple-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black mb-4">Your Quick Reference Guide</h2>
            <p className="text-xl text-gray-400">Keep these notes handy for every sales conversation</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-xl border-2 border-cyan-500/30 rounded-2xl p-6 hover:scale-105 transition-transform">
              <div className="flex items-center gap-3 mb-4">
                <Zap className="w-8 h-8 text-cyan-400" />
                <h3 className="text-2xl font-bold">Power Phrases</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-gray-300">
                  <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-sm">"How much are you losing monthly without this?"</span>
                </li>
                <li className="flex items-start gap-2 text-gray-300">
                  <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-sm">"Your competitors are already using AI"</span>
                </li>
                <li className="flex items-start gap-2 text-gray-300">
                  <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-sm">"If this brings just 5 customers, it pays for itself"</span>
                </li>
                <li className="flex items-start gap-2 text-gray-300">
                  <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-sm">"Should we start Monday or Wednesday?"</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-red-500/10 to-pink-500/10 backdrop-blur-xl border-2 border-red-500/30 rounded-2xl p-6 hover:scale-105 transition-transform">
              <div className="flex items-center gap-3 mb-4">
                <Target className="w-8 h-8 text-red-400" />
                <h3 className="text-2xl font-bold">Red Flags</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-gray-300">
                  <div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-sm">No decision maker in meeting</span>
                </li>
                <li className="flex items-start gap-2 text-gray-300">
                  <div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-sm">No clear budget discussed</span>
                </li>
                <li className="flex items-start gap-2 text-gray-300">
                  <div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-sm">"We'll do it for exposure"</span>
                </li>
                <li className="flex items-start gap-2 text-gray-300">
                  <div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-sm">Just exploring with no pain point</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 backdrop-blur-xl border-2 border-green-500/30 rounded-2xl p-6 hover:scale-105 transition-transform">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle2 className="w-8 h-8 text-green-400" />
                <h3 className="text-2xl font-bold">Daily Checklist</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-gray-300">
                  <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-sm">50 outreach touches (calls/emails)</span>
                </li>
                <li className="flex items-start gap-2 text-gray-300">
                  <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-sm">2-3 discovery calls booked</span>
                </li>
                <li className="flex items-start gap-2 text-gray-300">
                  <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-sm">1 demo delivered</span>
                </li>
                <li className="flex items-start gap-2 text-gray-300">
                  <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-sm">Update CRM with all interactions</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="relative bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 rounded-3xl p-12 overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="relative z-10 text-center">
              <Trophy className="w-16 h-16 text-yellow-300 mx-auto mb-6 animate-bounce" />
              <h2 className="text-4xl md:text-5xl font-black mb-4">You're Ready to Dominate</h2>
              <p className="text-xl mb-8 text-white/90">
                Complete all modules. Master the scripts. Start closing deals and earning 30% commissions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-purple-600 font-bold px-8 py-4 rounded-xl hover:shadow-2xl transition-all hover:scale-105 text-lg">
                  Access Sales CRM
                </button>
                <button className="bg-purple-900/50 backdrop-blur-sm text-white border-2 border-white/30 font-bold px-8 py-4 rounded-xl hover:shadow-2xl transition-all hover:scale-105 text-lg">
                  View Client Portfolio
                </button>
              </div>
              <p className="mt-8 text-sm text-white/70">
                Questions? Reach out to your sales manager anytime. We're here to help you succeed.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SalesDashboard;