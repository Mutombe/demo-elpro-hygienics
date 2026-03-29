export const designTokens = {
  heroStyle: "parallax",
  typography: {
    heading: "Sora",
    body: "DM Sans",
    display: "Outfit",
  },
  effects: {
    noise: true,
    glassmorphism: "none",
    floatingShapes: false,
    scrollProgress: false,
    meshGradient: false,
    gradientBorders: false,
    cursorGlow: false,
  },
  animationPreset: "smooth",
  serviceCardStyle: "icon-top",
  projectGridStyle: "grid-3",
  testimonialStyle: "cards",
  statsStyle: "minimal",
  bgPattern: "none",
  homeSectionOrder: [
    "hero", "marquee", "about", "services", "stats", "testimonials", "cta"
  ],
};

const siteData = {
  business: {
    name: "Elpro Hygienics",
    legalName: "Elpro Hygienics (Pvt) Ltd",
    tagline: "Clean Starts Here",
    description:
      "Zimbabwe's trusted supplier of professional hygiene products and cleaning solutions. Industrial-grade sanitisers, cleaning chemicals, dispensing systems, and washroom hygiene products for hospitals, hotels, offices, and food processing facilities.",
    phone: "+263 77 110 3633",
    phoneRaw: "+263771103633",
    whatsappNumber: "263771103633",
    email: "info@elprohygienics.co.zw",
    address: "Harare, Zimbabwe",
    country: "Zimbabwe",
    city: "Harare",
    rating: 4.7,
    ratingRounded: 5,
    reviewCount: 29,
    established: "2017",
    yearsExperience: "8+",
    projectsCompleted: "500+",
    employees: "20+",
    coordinates: { lat: -17.8292, lng: 31.0522 },
    hours: [
      { day: "Monday - Friday", time: "7:30 AM - 5:00 PM" },
      { day: "Saturday", time: "8:00 AM - 12:00 PM" },
      { day: "Sunday", time: "Closed" },
    ],
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3798.5!2d31.0522!3d-17.8292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDQ5JzQ1LjEiUyAzMcKwMDMnMDcuOSJF!5e0!3m2!1sen!2szw!4v1700000000000!5m2!1sen!2szw",
    cookieConsentKey: "elpro-hygienics-cookie-consent",
    socialLinks: {
      facebook: "https://www.facebook.com/elprohygienics",
      instagram: "#",
      linkedin: "#",
    },
  },

  navbar: {
    logoImage: null,
    logoLine1: "ELPRO",
    logoLine2: "HYGIENICS",
  },

  hero: {
    badge: "Professional Hygiene Solutions",
    titleParts: [
      { text: "Clean " },
      { text: "Starts Here.", highlight: true },
    ],
    subtitle:
      "500+ facilities supplied. Hospital-grade sanitisers, industrial cleaning chemicals, and complete washroom hygiene systems. Because clean is not optional. It is the standard.",
    ctaPrimary: "Request a Quote",
    ctaSecondary: "Our Products",
    trustBadge: "HACCP & ISO Compliant Products",
    backgroundImages: [
      { url: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1920&q=80", alt: "Professional cleaning and hygiene" },
      { url: "https://images.unsplash.com/photo-1563453392212-326f5e854473?w=1920&q=80", alt: "Clean facility environment" },
    ],
  },

  stats: [
    { number: "500", suffix: "+", label: "Facilities Supplied" },
    { number: "8", suffix: "+", label: "Years in Industry" },
    { number: "150", suffix: "+", label: "Product Range" },
    { number: "20", suffix: "+", label: "Specialists" },
  ],

  servicesPreview: [
    {
      iconName: "FirstAid",
      title: "Healthcare Hygiene",
      desc: "Hospital-grade disinfectants, surgical hand wash, surface sanitisers, and medical waste management products. WHO and HACCP compliant.",
    },
    {
      iconName: "Briefcase",
      title: "Commercial Cleaning",
      desc: "Floor care, glass cleaners, degreasing agents, and multi-surface solutions. Formulated for offices, malls, and commercial spaces.",
    },
    {
      iconName: "CookingPot",
      title: "Food Industry",
      desc: "Food-safe sanitisers, kitchen degreasers, conveyor belt cleaners, and CIP solutions for food processing and catering.",
    },
    {
      iconName: "Leaf",
      title: "Eco-Friendly Range",
      desc: "Biodegradable cleaning products, plant-based sanitisers, and recycled packaging. Clean that does not cost the planet.",
    },
    {
      iconName: "Briefcase",
      title: "Washroom Systems",
      desc: "Soap dispensers, paper towel units, air fresheners, and sanitary bins. Complete washroom hygiene solutions with refill service.",
    },
    {
      iconName: "ShieldCheck",
      title: "Pest Control",
      desc: "Insecticides, rodenticides, and integrated pest management solutions for commercial and agricultural applications.",
    },
  ],

  featuredProjects: [
    {
      image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80",
      title: "Parirenyatwa Hospital Supply",
      category: "Healthcare",
    },
    {
      image: "https://images.unsplash.com/photo-1563453392212-326f5e854473?w=800&q=80",
      title: "Rainbow Towers Hotel",
      category: "Hospitality",
    },
    {
      image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80",
      title: "Innscor Food Processing",
      category: "Food Industry",
    },
  ],

  whyChooseUs: {
    titleParts: [
      { text: "Hygiene " },
      { text: "Without", highlight: true },
      { text: " Compromise." },
    ],
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80",
    imageAlt: "Elpro Hygienics products and solutions",
    experienceYears: "500+",
    experienceLabel: "Facilities Supplied",
    points: [
      {
        title: "Certified Products",
        desc: "Every product meets HACCP, ISO, and WHO standards. We supply hospitals, food factories, and hotels that cannot afford to cut corners.",
      },
      {
        title: "Technical Support",
        desc: "Our hygiene consultants audit your facility, recommend the right products, and train your staff on correct usage and dilution ratios.",
      },
      {
        title: "Reliable Supply Chain",
        desc: "Warehoused locally in Harare. Weekly delivery schedules. Emergency orders fulfilled within 24 hours. No stockouts.",
      },
      {
        title: "Eco-Conscious",
        desc: "Our growing range of biodegradable and plant-based products proves that professional-grade clean does not have to harm the environment.",
      },
    ],
  },

  homeCta: {
    backgroundImage: "https://images.unsplash.com/photo-1563453392212-326f5e854473?w=1920&q=80",
    backgroundAlt: "Clean professional environment",
    titleParts: [
      { text: "Clean " },
      { text: "Starts", highlight: true },
      { text: " Here." },
    ],
    subtitle:
      "Request a free hygiene audit for your facility. Our team will assess your needs, recommend the right products, and set up a supply schedule that works for your operation.",
    ctaPrimary: "Get a Free Audit",
    whatsappText: "Hi Elpro Hygienics! I would like to request a hygiene audit for my facility.",
  },

  homeTestimonials: [
    {
      name: "Dr. Simba Mataranyika",
      role: "Infection Control, Parirenyatwa Hospital",
      text: "Elpro supplies our entire infection control product range. The hand sanitisers and surface disinfectants meet WHO standards. Delivery is always on time, which in a hospital environment, is non-negotiable.",
      rating: 5,
    },
    {
      name: "Patricia Hwata",
      role: "Housekeeping Manager, Rainbow Towers",
      text: "We switched to Elpro two years ago and the difference in product quality is visible. Rooms smell cleaner, surfaces stay sanitised longer, and the washroom dispensing systems drastically reduced product waste.",
      rating: 5,
    },
    {
      name: "Tatenda Mvere",
      role: "Quality Manager, Innscor Foods",
      text: "In food processing, hygiene compliance is not optional. Elpro's food-safe sanitisers and CIP solutions helped us pass our last three HACCP audits with zero non-conformances. Reliable partner.",
      rating: 5,
    },
  ],

  about: {
    heroTitle: [
      { text: "Clean That " },
      { text: "Protects.", highlight: true },
    ],
    heroSubtitle:
      "Elpro Hygienics was founded on the belief that professional hygiene should be accessible, reliable, and compliant. We supply the products that keep Zimbabwe's facilities safe.",
    storyImage: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80",
    storyImageAlt: "Elpro Hygienics product range",
    storyProjectCount: "500+",
    storyProjectLabel: "Facilities Supplied",
    storyTitle: "From One Product Line to Zimbabwe's Hygiene Standard.",
    storyParagraphs: [
      "Elpro Hygienics was founded in 2017 to address a clear gap: Zimbabwe's hospitals, hotels, and food processors needed reliable access to certified hygiene products without depending on expensive imports or inconsistent local alternatives.",
      "We started with a focused range of hand sanitisers and surface disinfectants. Quality was our differentiator from day one. Every product was formulated to meet international standards, tested independently, and backed by technical support that most competitors could not offer.",
      "Today, our product range exceeds 150 SKUs across healthcare, commercial, food industry, and eco-friendly categories. We supply over 500 facilities with regular delivery schedules, emergency fulfilment, and on-site training. Elpro is not just a supplier. We are a hygiene partner.",
    ],
    mission:
      "To make professional-grade hygiene accessible to every Zimbabwean facility. Clean environments save lives. We take that responsibility seriously.",
    vision:
      "To be Southern Africa's most trusted hygiene solutions provider. Known for certified quality, technical expertise, and the supply reliability that critical facilities depend on.",
    values: [
      { iconName: "ShieldCheck", title: "Quality", desc: "Every product is certified, tested, and traceable. We do not sell anything we would not use ourselves." },
      { iconName: "Leaf", title: "Sustainability", desc: "Our eco-friendly range proves that clean does not have to be wasteful. We are expanding this line every year." },
      { iconName: "Handshake", title: "Reliability", desc: "Scheduled deliveries, stocked warehouse, 24-hour emergency orders. We never let a facility run out." },
      { iconName: "Heart", title: "Partnership", desc: "We audit, recommend, train, and supply. We are invested in your hygiene outcomes, not just your orders." },
    ],
    team: [
      { name: "Sales Team", role: "Hygiene Consultants", image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&q=80" },
      { name: "Logistics Team", role: "Supply & Distribution", image: "https://images.unsplash.com/photo-1563453392212-326f5e854473?w=400&q=80" },
    ],
    milestones: [
      { year: "2017", title: "Founded", desc: "Launched with hand sanitisers and surface disinfectants. First hospital client within 3 months." },
      { year: "2018", title: "50 Clients", desc: "Expanded into commercial cleaning products. Reached 50 regular supply clients." },
      { year: "2020", title: "Pandemic Response", desc: "Scaled production to meet COVID-19 demand. Supplied 100+ healthcare facilities with sanitiser." },
      { year: "2022", title: "Eco-Friendly Launch", desc: "Introduced our biodegradable cleaning range. First eco-certified products in our market." },
      { year: "2024", title: "500+ Facilities", desc: "Surpassed 500 active supply accounts. Added pest control and food industry divisions." },
    ],
    ctaTitle: "Partner With Us",
    ctaSubtitle: "Request a free facility hygiene audit. We will recommend the right products and set up a supply schedule that works for you.",
    ctaCta: "Request an Audit",
  },

  services: {
    heroTitle: [
      { text: "Complete " },
      { text: "Hygiene.", highlight: true },
    ],
    heroSubtitle:
      "Six product categories covering every hygiene need. From hospital wards to hotel rooms, food factories to office buildings. Certified, stocked, and delivered on schedule.",
    items: [
      {
        iconName: "FirstAid",
        title: "Healthcare Hygiene",
        slug: "healthcare-hygiene",
        image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80",
        desc: "Hospital-grade disinfectants, antiseptic hand wash, instrument sterilisers, and surface sanitisers. Formulated for healthcare environments where infection control is life or death.",
        features: [
          "WHO-compliant alcohol-based hand sanitisers",
          "Broad-spectrum surface disinfectants",
          "Surgical hand scrub solutions",
          "Medical instrument sterilisation products",
          "Clinical waste management chemicals",
          "Infection control training support",
        ],
      },
      {
        iconName: "Briefcase",
        title: "Commercial Cleaning",
        slug: "commercial-cleaning",
        image: "https://images.unsplash.com/photo-1563453392212-326f5e854473?w=800&q=80",
        desc: "Professional-grade floor care, glass cleaners, multi-surface solutions, and degreasing agents. Designed for offices, shopping centres, schools, and public buildings.",
        features: [
          "Floor polish, strippers, and maintainers",
          "Streak-free glass and mirror cleaners",
          "Multi-surface spray and wipe solutions",
          "Heavy-duty degreasing agents",
          "Carpet shampoo and stain removers",
          "Industrial scrubber machine chemicals",
        ],
      },
      {
        iconName: "CookingPot",
        title: "Food Industry Solutions",
        slug: "food-industry",
        image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80",
        desc: "Food-safe sanitisers, kitchen degreasers, conveyor cleaners, and CIP solutions. HACCP-compliant products for food processing, catering, and cold chain facilities.",
        features: [
          "Food-contact surface sanitisers",
          "Kitchen and fryer degreasers",
          "Conveyor belt and production line cleaners",
          "CIP (Clean-in-Place) solutions",
          "Drain and grease trap treatments",
          "HACCP compliance documentation",
        ],
      },
      {
        iconName: "Leaf",
        title: "Eco-Friendly Range",
        slug: "eco-friendly",
        image: "https://images.unsplash.com/photo-1563453392212-326f5e854473?w=800&q=80",
        desc: "Biodegradable, plant-based cleaning products that deliver professional results without environmental harm. Recycled packaging and concentrated formulas that reduce waste.",
        features: [
          "Plant-based all-purpose cleaners",
          "Biodegradable floor and surface products",
          "Concentrated formulas: less packaging, less waste",
          "Eco-certified hand wash and sanitiser",
          "Recycled and recyclable packaging",
          "Carbon footprint reduction reporting",
        ],
      },
      {
        iconName: "Briefcase",
        title: "Washroom Hygiene Systems",
        slug: "washroom-systems",
        image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80",
        desc: "Complete washroom solutions: soap dispensers, paper towel systems, air fresheners, sanitary bins, and toilet seat sanitisers. Hardware plus refill supply service.",
        features: [
          "Touchless soap and sanitiser dispensers",
          "Paper towel and tissue dispensing systems",
          "Automatic and manual air fresheners",
          "Sanitary bin supply and servicing",
          "Toilet seat sanitiser dispensers",
          "Scheduled refill and maintenance service",
        ],
      },
      {
        iconName: "ShieldCheck",
        title: "Pest Control Solutions",
        slug: "pest-control",
        image: "https://images.unsplash.com/photo-1563453392212-326f5e854473?w=800&q=80",
        desc: "Professional insecticides, rodenticides, and fumigation products. Integrated pest management solutions for commercial, agricultural, and public health applications.",
        features: [
          "Commercial-grade insecticides and sprays",
          "Rodent bait stations and monitoring",
          "Fumigation and fogging chemicals",
          "Flying insect control solutions",
          "Agricultural pest management products",
          "IPM programme design and support",
        ],
      },
    ],
    ctaTitle: "Clean Starts With a Call",
    ctaSubtitle: "Request a product catalogue, schedule a facility audit, or place your first order. Our team is ready.",
  },

  projects: {
    heroTitle: [
      { text: "Facilities We " },
      { text: "Supply", highlight: true },
    ],
    heroSubtitle:
      "500+ hospitals, hotels, food factories, and commercial buildings trust Elpro for their hygiene needs. Here are some of the facilities we serve.",
    categories: ["All", "Healthcare", "Hospitality", "Food Industry", "Commercial", "Government"],
    items: [
      {
        id: 1,
        title: "Parirenyatwa Hospital Infection Control",
        category: "Healthcare",
        location: "Harare, Zimbabwe",
        year: "2024",
        image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80",
        desc: "Complete infection control product supply for Zimbabwe's largest referral hospital. Hand sanitisers, surface disinfectants, and clinical waste chemicals across 20+ departments.",
        services: ["Healthcare Hygiene"],
      },
      {
        id: 2,
        title: "Rainbow Towers Washroom Overhaul",
        category: "Hospitality",
        location: "Harare, Zimbabwe",
        year: "2023",
        image: "https://images.unsplash.com/photo-1563453392212-326f5e854473?w=800&q=80",
        desc: "Full washroom system installation and cleaning product supply for Harare's premier conference hotel. 200+ rooms, 15 conference facilities, and public washrooms.",
        services: ["Washroom Hygiene Systems", "Commercial Cleaning"],
      },
      {
        id: 3,
        title: "Innscor Food Processing Compliance",
        category: "Food Industry",
        location: "Harare, Zimbabwe",
        year: "2024",
        image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80",
        desc: "HACCP-compliant cleaning chemical supply for one of Zimbabwe's largest food processing companies. CIP solutions, food-safe sanitisers, and pest control integration.",
        services: ["Food Industry Solutions", "Pest Control Solutions"],
      },
    ],
  },

  contact: {
    heroTitle: [
      { text: "Get " },
      { text: "Clean.", highlight: true },
    ],
    heroSubtitle: "Request a product catalogue, schedule a facility audit, or place an order. Our team responds within 24 hours.",
    formTitle: "Contact Us",
    subjects: [
      "Product Catalogue Request",
      "Facility Hygiene Audit",
      "Washroom System Enquiry",
      "Bulk Order Pricing",
      "Eco-Friendly Products",
      "General Enquiry",
    ],
  },

  reviews: {
    heroTitle: "What Our Clients Say",
    heroSubtitle: "Real feedback from businesses and individuals we've served.",
    overallRating: 4.8,
    totalReviews: 12,
    ratingBreakdown: { 5: 8, 4: 3, 3: 1, 2: 0, 1: 0 },
    items: [
      { name: "Tendai Moyo", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face", role: "Business Owner", text: "Exceptional service from start to finish. Professional, reliable, and delivered exactly what was promised. Highly recommend.", rating: 5, date: "2025-11-15", projectType: "Commercial" },
      { name: "Sarah Ncube", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face", role: "Operations Manager", text: "Outstanding quality and attention to detail. The team went above and beyond our expectations.", rating: 5, date: "2025-10-22", projectType: "Residential" },
      { name: "James Mutasa", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face", role: "Director", text: "Professional approach and excellent communication throughout the project. Would definitely work with them again.", rating: 5, date: "2025-09-18", projectType: "Commercial" },
      { name: "Grace Chikwanha", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face", role: "Homeowner", text: "Great value for money. The quality exceeded what we expected at this price point.", rating: 4, date: "2025-08-30", projectType: "Residential" },
      { name: "Peter Dube", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face", role: "Project Manager", text: "Reliable and efficient. They completed the work on time and within budget.", rating: 5, date: "2025-07-14", projectType: "Commercial" },
      { name: "Rudo Mapfumo", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face", role: "CEO", text: "Impressed by their professionalism and the quality of their work. A trusted partner.", rating: 5, date: "2025-06-20", projectType: "Industrial" },
      { name: "David Chirume", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face", role: "Facility Manager", text: "Solid work, good communication, fair pricing. Everything you want in a service provider.", rating: 4, date: "2025-05-11", projectType: "Commercial" },
      { name: "Linda Sithole", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face", role: "Property Developer", text: "They understood our vision and delivered beautifully. The attention to detail was remarkable.", rating: 5, date: "2025-04-28", projectType: "Residential" },
      { name: "Michael Banda", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop&crop=face", role: "Engineer", text: "Technical expertise is top-notch. They solved problems we didnt even know we had.", rating: 5, date: "2025-03-15", projectType: "Industrial" },
      { name: "Nyasha Gumbo", image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&h=100&fit=crop&crop=face", role: "Procurement Officer", text: "Responsive, professional, and competitively priced. Our go-to provider.", rating: 4, date: "2025-02-08", projectType: "Commercial" },
      { name: "Robert Zvobgo", image: "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=100&h=100&fit=crop&crop=face", role: "Contractor", text: "Reliable partner. They deliver what they promise, every time.", rating: 5, date: "2025-01-22", projectType: "Construction" },
      { name: "Chiedza Mapondera", image: "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?w=100&h=100&fit=crop&crop=face", role: "School Administrator", text: "Wonderful experience. The team was courteous, professional, and efficient.", rating: 5, date: "2024-12-10", projectType: "Institutional" },
    ],
  },
};

export default siteData;
