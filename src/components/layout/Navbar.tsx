'use client'

import { useState, useEffect, useRef } from 'react'
import { Search, X, ArrowRight } from 'lucide-react'

const navItems = [
  { name: 'HOME', href: '#home' },
  { name: 'ABOUT', href: '#about' },
  { name: 'SERVICES', href: '#services' },
  { name: 'CONTACT', href: '#contact' },
]

const servicesDetails = {
  title: 'Our Services',
  description: 'Comprehensive software solutions for your business needs',
  categories: [
    'Web Development',
    'Mobile Applications',
    'Desktop Software',
    'ERP Solutions',
    'Cloud Services',
    'API Development',
    'Custom Software',
    'Digital Strategy'
  ],
  featured: {
    title: 'CUSTOM SOLUTIONS',
    subtitle: 'TAILORED FOR YOUR BUSINESS',
    description: 'We create bespoke software solutions that align perfectly with your business objectives and workflow requirements...',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400'
  }
}

const megaMenuData = [
  {
    category: 'HOME',
    items: ['Home Section']
  },
  {
    category: 'ABOUT',
    items: ['About Us', 'Our Mission', 'Our Team']
  },
  {
    category: 'SERVICES',
    items: [
      'Web Development',
      'Mobile Applications',
      'Desktop Software',
      'ERP Solutions',
      'Cloud Services',
      'API Development',
      'Custom Software',
      'Digital Strategy'
    ]
  },
  {
    category: 'CONTACT',
    items: [
      'Get in Touch',
      'Schedule a Call',
      'Request a Quote'
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
  const lastScrollY = useRef(0)
  const [isHidden, setIsHidden] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      // Update scrolled state for background color
      setScrolled(currentScrollY > 10)
      
      // Hide/show navbar logic - don't hide if menu is open
      if (!isMenuOpen) {
        if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
          // Scrolling down & past 100px - hide navbar
          setIsHidden(true)
        } else if (currentScrollY < lastScrollY.current) {
          // Scrolling up - show navbar
          setIsHidden(false)
        }
      }
      
      lastScrollY.current = currentScrollY
    }
    
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isMenuOpen])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setHoverPosition({ x: e.clientX, y: e.clientY })
    }
    
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isMenuOpen && menuRef.current && !menuRef.current.contains(event.target as Node)) {
        closeMenu()
      }
    }

    // Handle Escape key
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isMenuOpen) {
        closeMenu()
      }
    }

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      document.addEventListener('keydown', handleEscapeKey)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleEscapeKey)
    }
  }, [isMenuOpen])

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

  const getHoverPanelStyle = () => {
    if (!hoveredNavItem) return {}
    
    const panelWidth = 384
    const navbarHeight = 128
    
    let left = hoverPosition.x - (panelWidth / 2)
    const viewportWidth = window.innerWidth
    left = Math.max(20, left)
    left = Math.min(left, viewportWidth - panelWidth - 20)
    
    return {
      left: `${left}px`,
      top: `${navbarHeight + 8}px`,
    }
  }

  return (
    <>
      {/* Main Navbar - Hidden when scrolling down */}
      <nav
        className={`fixed left-0 z-40 w-full transition-all duration-300 ${
          isHidden && !isMenuOpen ? '-translate-y-full' : 'translate-y-0'
        } ${
          scrolled
            ? 'bg-[#40485e] h-32 backdrop-blur-sm shadow-md'
            : 'bg-transparent h-32'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4">
          <div className="flex items-center justify-between h-20 relative">
            
            <div className="hidden lg:flex items-center space-x-6 mr-auto mt-4">
              {navItems.map((item) => (
                <div
                  key={item.name}
                  className="relative group"
                  onMouseEnter={(e) => handleMouseEnter(item.name, e)}
                  onMouseLeave={() => setHoveredNavItem(null)}
                >
                  <a
                    href={item.href}
                    className="relative text-sm font-medium text-white transition-colors tracking-wide hover:text-blue-400 px-2 py-1"
                  >
                    <span className="relative">
                      {item.name}
                      <span className={`absolute left-0 -bottom-1 h-0.5 bg-blue-400 transition-all duration-300 ${
                        hoveredNavItem === item.name ? 'w-full opacity-100' : 'w-0 opacity-0'
                      }`} />
                    </span>
                    
                    <div className={`absolute -right-1 -top-1 w-2 h-2 bg-blue-400 rounded-full transition-all duration-200 ${
                      hoveredNavItem === item.name ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
                    }`} />
                  </a>
                  
                  <div className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 
                    transition-all duration-300 ${
                    hoveredNavItem === item.name ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                  }`}>
                    <div className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-blue-400" />
                  </div>
                </div>
              ))}
            </div>

            <div className="absolute left-1/2 -translate-x-1/2">
              <a href="#home" className="group">
                <div className="flex flex-col items-center space-y-2">
                  <div className="w-16 h-16 rounded-full overflow-hidden border border-white/30 shadow-lg group-hover:scale-105 transition-transform duration-300 mt-4">
                    <img
                      src="./IMAGE16.png"
                      alt="Code 74 Logo"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-center leading-tight">
                 <span className="block text-[8px] tracking-[0.6em] text-white">
  CODE 74
</span>

                    <span className="block text-sm font-medium text-white">
                      SOFTWARE SOLUTIONS
                    </span>
                  </div>
                </div>
              </a>
            </div>

            <div className="flex space-x-6">
              <div className="hidden lg:flex items-center relative">
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

              <button 
                onClick={() => setSearchOpen(!searchOpen)}
                className="lg:hidden flex items-center text-white hover:text-blue-400 transition-colors"
              >
                <Search className="h-5 w-5" />
              </button>
              
              {/* Hamburger Button in Navbar */}
              <button
                onClick={toggleMenu}
                className="group relative flex flex-col items-center justify-center w-14 h-14 z-40"
                aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              >
                <div className="absolute inset-0 rounded-full opacity-80 group-hover:opacity-100 transition-opacity duration-300 shadow-lg" />
                
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
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white hover:text-blue-400"
                >
                  <Search className="h-5 w-5" />
                </button>
              </div>
            </div>
          )}
        </div>

        {hoveredNavItem === 'SERVICES' && (
          <div 
            className="fixed z-40 w-96 bg-white/95 backdrop-blur-md shadow-2xl rounded-lg border border-gray-200
              transform transition-all duration-300 origin-top"
            style={getHoverPanelStyle()}
            onMouseEnter={() => setHoveredNavItem('SERVICES')}
            onMouseLeave={() => setHoveredNavItem(null)}
          >
            <div className="p-6">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-slate-800">
                  {servicesDetails.title}
                </h3>
                <p className="text-slate-600">
                  {servicesDetails.description}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-slate-700 mb-3">SERVICES</h4>
                  <ul className="space-y-2">
                    {servicesDetails.categories.slice(0, 6).map((item, index) => (
                      <li key={index}>
                        <a 
                          href="#services" 
                          className="text-slate-600 hover:text-blue-600 transition-colors text-sm flex items-center gap-2"
                        >
                          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                  <a 
                    href="#services" 
                    className="inline-flex items-center gap-1 mt-4 text-blue-600 font-medium text-sm hover:gap-2 transition-all"
                  >
                    VIEW ALL
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>

                <div>
                  <h4 className="font-semibold text-slate-700 mb-3">FEATURED</h4>
                  <div className="bg-gradient-to-br from-slate-50 to-white rounded-lg p-4 border border-slate-200">
                    <div className="w-full h-32 mb-3 rounded overflow-hidden">
                      <img 
                        src={servicesDetails.featured.image} 
                        alt={servicesDetails.featured.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h5 className="font-bold text-slate-800 text-sm">
                      {servicesDetails.featured.title}
                    </h5>
                    <p className="text-xs text-blue-600 font-semibold mt-1">
                      {servicesDetails.featured.subtitle}
                    </p>
                    <p className="text-slate-600 text-xs mt-2 line-clamp-2">
                      {servicesDetails.featured.description}
                    </p>
                    <a 
                      href="#services" 
                      className="inline-flex items-center gap-1 mt-3 text-slate-700 font-medium text-xs hover:text-blue-600 transition-colors"
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

      {/* Floating Hamburger Button when navbar is hidden */}
      {isHidden && !isMenuOpen && (
        <button
          onClick={toggleMenu}
          className="fixed top-4 right-4 z-50 group flex flex-col items-center justify-center w-14 h-14 rounded-full bg-[#40485e]/90 backdrop-blur-md hover:bg-[#40485e] transition-all duration-300 shadow-lg"
          aria-label="Open menu"
        >
          <div className="relative z-10 flex flex-col items-center justify-center w-8 h-8 space-y-1.5">
            <span className="block h-0.5 w-6 bg-white" />
            <span className="block h-0.5 w-6 bg-white" />
            <span className="block h-0.5 w-6 bg-white" />
          </div>
          <span className="absolute -bottom-6 text-xs font-medium text-white tracking-wide">
            MENU
          </span>
        </button>
      )}

      {/* Menu Overlay - Only shows when isMenuOpen is true */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1920&q=80"
              alt="Menu Background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-white/90 backdrop-blur-sm" />
          </div>

          {/* Menu Content with ref */}
          <div ref={menuRef} className="relative">
            {/* Close Button - Fixed position */}
            <button
              ref={closeButtonRef}
              onClick={closeMenu}
              className="fixed top-8 right-8 z-60 w-12 h-12 flex items-center justify-center rounded-full bg-slate-800/90 hover:bg-slate-700 transition-all duration-300 shadow-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
              aria-label="Close menu"
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
                              href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                              className="text-slate-700 hover:text-slate-900 transition-colors text-[15px] font-normal block leading-relaxed"
                              onClick={closeMenu}
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

          {/* Click outside to close overlay */}
          <div 
            className="absolute inset-0 z-40"
            onClick={closeMenu}
            aria-hidden="true"
          />
        </div>
      )}
    </>
  )
}