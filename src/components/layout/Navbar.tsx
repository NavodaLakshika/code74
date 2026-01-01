'use client'

import { useState, useEffect } from 'react'
import { Search, X, ArrowRight } from 'lucide-react'

const navItems = [
  { name: 'HOME', href: '/' },
  { name: 'CEYLON', href: '/tales' },
  { name: 'DESTINATIONS', href: '/destinations' },
  { name: 'EXPERIENCES', href: '/experiences' },
]

// Type definitions for hover details
interface HoverDetailBase {
  title: string;
  description: string;
  featured: {
    title: string;
    subtitle: string;
    description: string;
    image: string;
  };
}

interface TalesDetail extends HoverDetailBase {
  categories: string[];
}

interface DestinationsDetail extends HoverDetailBase {
  cities: string[];
}

interface ExperiencesDetail extends HoverDetailBase {
  activities: string[];
}

type HoverDetail = TalesDetail | DestinationsDetail | ExperiencesDetail;

// Data for hover details (similar to your screenshot showing Colombo)
const hoverDetails: Record<string, HoverDetail> = {
  'CEYLON': {
    title: 'Tales of Ceylon',
    description: 'Discover the rich history and stories of Sri Lanka',
    categories: [
      'Tales of Colombo',
      'Tales of Galle', 
      'Tales of Kandy',
      'Tales of Sigiriya',
      'Tales of Yala',
      'Tales of Nuwara Eliya',
      'Tales of Anuradhapura',
      'Featured Tales'
    ],
    featured: {
      title: 'ANGAMPORA',
      subtitle: "SRI LANKA'S UNIQUE ART OF COMBAT",
      description: 'Discover the ancient martial art of Sri Lanka...',
      image: 'https://images.unsplash.com/photo-1548013146-72479768bada?w=400'
    }
  },
  'DESTINATIONS': {
    title: 'Destinations',
    description: 'Explore amazing places in Sri Lanka',
    cities: [
      'Colombo',
      'Galle',
      'Kandy', 
      'Sigiriya',
      'Yala',
      'Nuwara Eliya',
      'Negombo',
      'Bentota',
      'Jaffna',
      'Pasikudah',
      'Anuradhapura'
    ],
    featured: {
      title: 'COLOMBO',
      subtitle: 'VIBRANT CAPITAL CITY',
      description: 'Colombo has many great places to visit, from museums to modern attractions...',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400'
    }
  },
  'EXPERIENCES': {
    title: 'Experiences',
    description: 'Unique activities and adventures',
    activities: [
      'Whale Watching',
      'Wildlife Safari',
      'Diving and Snorkelling',
      'Surfing in Sri Lanka',
      'Ayurveda',
      'Cultural Tours'
    ],
    featured: {
      title: 'GALLE EXPERIENCES',
      subtitle: 'HISTORIC COASTAL CITY',
      description: 'Galle offers a wide variety of experiences from historic forts to beach activities...',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400'
    }
  }
}

// Type guards
const isTalesDetail = (detail: HoverDetail): detail is TalesDetail => {
  return 'categories' in detail;
};

const isDestinationsDetail = (detail: HoverDetail): detail is DestinationsDetail => {
  return 'cities' in detail;
};

const isExperiencesDetail = (detail: HoverDetail): detail is ExperiencesDetail => {
  return 'activities' in detail;
};

// Helper function to get list items
const getListItems = (detail: HoverDetail): string[] => {
  if (isTalesDetail(detail)) return detail.categories;
  if (isDestinationsDetail(detail)) return detail.cities;
  if (isExperiencesDetail(detail)) return detail.activities;
  return [];
};

const megaMenuData = [
  {
    category: 'HOME',
    items: ['About Us', 'Contact Us', 'Blog']
  },
  {
    category: 'TALES',
    items: [
      'Tales of Colombo',
      'Tales of Galle',
      'Tales of Kandy',
      'Tales of Sigiriya',
      'Tales of Yala',
      'Tales of Nuwara Eliya',
      'Tales of Angampora',
      'Tales of Anuradhapura',
      'Featured Tales'
    ]
  },
  {
    category: 'DESTINATIONS',
    items: [
      'Anuradhapura',
      'Colombo',
      'Galle',
      'Kandy',
      'Sigiriya',
      'Yala',
      'Nuwara Eliya',
      'Bentota',
      'Negombo',
      'Jaffna',
      'Pasikudah'
    ]
  },
  {
    category: 'EXPERIENCES',
    items: [
      'Whale Watching',
      'Wildlife Safari',
      'Diving and Snorkelling',
      'Surfing in Sri Lanka',
      'Ayurveda'
    ]
  },
]

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [hoveredNavItem, setHoveredNavItem] = useState<string | null>(null)
  const [hoverPosition, setHoverPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setHoverPosition({ x: e.clientX, y: e.clientY })
    }
    
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const handleSearchSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    console.log('Searching for:', searchQuery)
    setSearchQuery('')
    setSearchOpen(false)
  }

  const handleSearchKeyPress = (e: { key: string }) => {
    if (e.key === 'Enter') {
      console.log('Searching for:', searchQuery)
      setSearchQuery('')
      setSearchOpen(false)
    }
  }

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  const handleMouseEnter = (itemName: string, e: React.MouseEvent) => {
    setHoveredNavItem(itemName)
  }

  // Calculate position for hover panel
  const getHoverPanelStyle = () => {
    if (!hoveredNavItem) return {}
    
    const panelWidth = 384 // w-96 = 384px
    const navbarHeight = 128 // h-32 = 128px
    
    // Position the panel under the cursor or centered
    let left = hoverPosition.x - (panelWidth / 2)
    
    // Ensure the panel stays within viewport boundaries
    const viewportWidth = window.innerWidth
    left = Math.max(20, left) // Minimum 20px from left
    left = Math.min(left, viewportWidth - panelWidth - 20) // Maximum with 20px margin
    
    return {
      left: `${left}px`,
      top: `${navbarHeight + 8}px`, // Position under navbar with small gap
    }
  }

  return (
    <>
      {/* NAVBAR */}
      <nav
        className={`fixed left-0 z-50 w-full transition-all duration-300 ${
          isMenuOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'
        } ${
          scrolled
            ? 'bg-[#40485e] h-32 backdrop-blur-sm shadow-md'
            : 'bg-transparent h-32'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4">
          <div className="flex items-center justify-between h-20  relative">
            
            {/* Left side - Navigation items with hover effect */}
           <div className="hidden lg:flex items-center space-x-16 mr-auto lg:ml-[-80px] xl:ml-[-100px] mt-4">

  {navItems.map((item) => (
    <div
      key={item.name}
      className="relative group"
      onMouseEnter={(e) => handleMouseEnter(item.name, e)}
      onMouseLeave={() => setHoveredNavItem(null)}
    >
                  <a
                    href={item.href}
                    className="relative text-sm font-medium text-white transition-colors tracking-wide hover:text-amber-400 px-2 py-1"
                  >
                    {/* Animated underline effect */}
                    <span className="relative">
                      {item.name}
                      <span className={`absolute left-0 -bottom-1 h-0.5 bg-amber-400 transition-all duration-300 ${
                        hoveredNavItem === item.name ? 'w-full opacity-100' : 'w-0 opacity-0'
                      }`} />
                    </span>
                    
                    {/* Cursor dot effect */}
                    <div className={`absolute -right-1 -top-1 w-2 h-2 bg-amber-400 rounded-full transition-all duration-200 ${
                      hoveredNavItem === item.name ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
                    }`} />
                  </a>
                  
                  {/* Small indicator arrow */}
                  <div className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 
                    transition-all duration-300 ${
                    hoveredNavItem === item.name ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                  }`}>
                    <div className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-amber-400" />
                  </div>
                </div>
              ))}
            </div>

            {/* Center - Logo */}
            <div className="absolute left-1/2 -translate-x-1/2 ">
              <a href="/" className="group">
                <div className="flex flex-col items-center space-y-2">
                  <div className="w-16 h-16 rounded-full overflow-hidden border border-white/30 shadow-lg group-hover:scale-105 transition-transform duration-300 mt-4">
                    <img
                      src="./IMAGE16.png"
                      alt="Code 74 Logo"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-center leading-tight">
                    <span className="block text-sm font-medium text-white">
                      SOFTWARE SOLUTIONS
                    </span>
                  </div>
                </div>
              </a>
            </div>

            {/* Right side - Search box and hamburger menu */}
          <div className="flex ml-[600px] space-x-6">

              
              {/* Search Box - Desktop */}
              <div className="hidden lg:flex items-center relative ">
                <div className="relative">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyPress={handleSearchKeyPress}
                    placeholder="Search..."
                    className="w-64 px-4 py-3 text-sm rounded-full
                      bg-white/10 backdrop-blur-md
                      text-white placeholder-white/70 font-bold
                      border border-white/20
                      transition-all
                      focus:outline-none focus:ring-1 focus:ring-white/50"
                  />
                  <button
                    onClick={handleSearchSubmit}
                    className="absolute right-3 top-1/2 -translate-y-1/2 transition-colors text-white hover:text-white/80"
                  >
                    <Search className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* Search icon for mobile */}
              <button 
                onClick={() => setSearchOpen(!searchOpen)}
                className="lg:hidden flex items-center text-white hover:text-amber-400 transition-colors"
              >
                <Search className="h-5 w-5" />
              </button>
              
              {/* Hamburger menu */}
              <button
                onClick={toggleMenu}
                className="group relative flex flex-col items-center justify-center w-14 h-14"
              >
                <div className="absolute inset-0 rounded-full  opacity-80 group-hover:opacity-100 transition-opacity duration-300 shadow-lg" />
                
                <div className="relative z-10 flex flex-col items-center justify-center w-8 h-8 space-y-1.5">
                  <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                  <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
                  <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                </div>
                
                <span className="absolute -bottom-6 text-xs font-medium text-white tracking-wide">
                  {isMenuOpen ? 'CLOSE' : ''}
                </span>
              </button>
            </div>
          </div>

          {/* Mobile Search Box */}
          {searchOpen && (
            <div className="lg:hidden pb-4">
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyPress={handleSearchKeyPress}
                  placeholder="Search..."
                  className="w-full px-4 py-3 text-sm bg-white/10 backdrop-blur-md text-white placeholder-white/70 border border-white/20 rounded-full focus:outline-none focus:ring-1 focus:ring-white/50"
                  autoFocus
                />
                <button
                  onClick={handleSearchSubmit}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white hover:text-amber-400"
                >
                  <Search className="h-5 w-5" />
                </button>
              </div>
            </div>
          )}
        </div>

        {/* HOVER DETAILS PANEL - Appears when hovering over nav items */}
        {hoveredNavItem && hoverDetails[hoveredNavItem] && (
          <div 
            className="fixed z-40 w-96 bg-white/95 backdrop-blur-md shadow-2xl rounded-lg border border-gray-200
              transform transition-all duration-300 origin-top"
            style={getHoverPanelStyle()}
            onMouseEnter={() => setHoveredNavItem(hoveredNavItem)}
            onMouseLeave={() => setHoveredNavItem(null)}
          >
            <div className="p-6">
              {/* Header */}
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-slate-800">
                  {hoverDetails[hoveredNavItem].title}
                </h3>
                <p className="text-slate-600 ">
                  {hoverDetails[hoveredNavItem].description}
                </p>
              </div>

              {/* Content Grid */}
              <div className="grid grid-cols-2 gap-6">
                {/* Left column - List */}
                <div>
                  <h4 className="font-semibold text-slate-700 mb-3">EXPLORE</h4>
                  <ul className="space-y-2">
                    {getListItems(hoverDetails[hoveredNavItem])?.slice(0, 6).map((item: string, index: number) => (
                      <li key={index}>
                        <a 
                          href="#" 
                          className="text-slate-600 hover:text-amber-600 transition-colors text-sm flex items-center gap-2"
                        >
                          <div className="w-1.5 h-1.5 bg-amber-400 rounded-full" />
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                  <a 
                    href="#" 
                    className="inline-flex items-center gap-1 mt-4 text-amber-600 font-medium text-sm hover:gap-2 transition-all"
                  >
                    VIEW ALL
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>

                {/* Right column - Featured */}
                <div>
                  <h4 className="font-semibold text-slate-700 mb-3">FEATURED</h4>
                  <div className="bg-gradient-to-br from-slate-50 to-white rounded-lg p-4 border border-slate-200">
                    <div className="w-full h-32 mb-3 rounded overflow-hidden">
                      <img 
                        src={hoverDetails[hoveredNavItem].featured.image} 
                        alt={hoverDetails[hoveredNavItem].featured.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h5 className="font-bold text-slate-800 text-sm">
                      {hoverDetails[hoveredNavItem].featured.title}
                    </h5>
                    <p className="text-xs text-amber-600 font-semibold mt-1">
                      {hoverDetails[hoveredNavItem].featured.subtitle}
                    </p>
                    <p className="text-slate-600 text-xs mt-2 line-clamp-2">
                      {hoverDetails[hoveredNavItem].featured.description}
                    </p>
                    <a 
                      href="#" 
                      className="inline-flex items-center gap-1 mt-3 text-slate-700 font-medium text-xs hover:text-amber-600 transition-colors"
                    >
                      READ MORE
                      <ArrowRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* MEGA MENU */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 overflow-y-auto">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-150905925346-21bda4d32df4?w=1920&q=80"
              alt="Menu Background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-white/90 backdrop-blur-sm" />
          </div>

          <button
            onClick={toggleMenu}
            className="absolute top-8 right-8 z-50 w-12 h-12 flex items-center justify-center rounded-full bg-slate-800/90 hover:bg-slate-700 transition-all duration-300 shadow-lg"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          <div className="relative pt-24 pb-20">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-12">
                {megaMenuData.map((section, index) => (
                  <div key={index} className="space-y-5">
                    <h3 className="text-base font-bold text-slate-800 uppercase tracking-wider pb-3 border-b-2 border-slate-300">
                      {section.category}
                    </h3>
                    <ul className="space-y-3">
                      {section.items.map((item, itemIndex) => (
                        <li key={itemIndex}>
                          <a
                            href={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
                            className="text-slate-700 hover:text-slate-900 transition-colors text-[15px] font-normal block leading-relaxed"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {item}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}