import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useInView, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  ArrowDown,
  Star,
  Quotes,
  CaretLeft,
  CaretRight,
  WhatsappLogo,
  FirstAid,
  Briefcase,
  Leaf,
  ShieldCheck,
  CheckCircle,
} from '@phosphor-icons/react';
import PageTransition from '../components/PageTransition';
import siteData from '../data/siteData';


/* ================================================================
   ANIMATED COUNTER
   ================================================================ */
function AnimatedCounter({ target, suffix = '', duration = 2 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  const numericTarget = parseInt(String(target).replace(/[^0-9]/g, ''), 10) || 0;

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const increment = numericTarget / (duration * 60);
    const timer = setInterval(() => {
      start += increment;
      if (start >= numericTarget) {
        setCount(numericTarget);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [inView, numericTarget, duration]);

  return (
    <span ref={ref}>
      {inView ? count.toLocaleString() : '0'}{suffix}
    </span>
  );
}


/* ================================================================
   1. HERO — Fresh green/white with clean imagery
   ================================================================ */
function HeroSection() {
  const { hero } = siteData;
  const containerRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const heroImages = hero.backgroundImages.map(img => img.url);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 6500);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  return (
    <section ref={containerRef} className="relative h-screen min-h-[700px] overflow-hidden" style={{ background: '#052e16' }}>
      {/* BG carousel */}
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <AnimatePresence mode="sync">
          <motion.img
            key={currentSlide}
            src={heroImages[currentSlide]}
            alt={hero.backgroundImages[currentSlide]?.alt}
            className="absolute inset-0 w-full h-[130%] object-cover object-center"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
            loading="eager"
          />
        </AnimatePresence>
        <div className="absolute inset-0 z-[1]" style={{ background: 'linear-gradient(to bottom, rgba(5,46,22,0.85), rgba(5,46,22,0.60), rgba(5,46,22,0.90))' }} />
        <div className="absolute inset-0 z-[1]" style={{ background: 'linear-gradient(to right, rgba(5,46,22,0.70), transparent, rgba(5,46,22,0.40))' }} />
      </motion.div>

      {/* Noise */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none z-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '128px 128px',
        }}
      />

      {/* Green accent line */}
      <div className="absolute top-[20%] left-0 w-20 sm:w-28 h-[2px] z-20" style={{ background: '#4ade80' }} />

      {/* Slide indicators */}
      <div className="absolute right-5 sm:right-8 top-1/2 -translate-y-1/2 z-30 flex flex-col gap-3">
        {heroImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            className="w-[3px] transition-all duration-500"
            style={{
              height: i === currentSlide ? '2rem' : '1rem',
              background: i === currentSlide ? '#4ade80' : 'rgba(255,255,255,0.15)',
            }}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Content */}
      <motion.div
        className="relative z-20 flex flex-col justify-center h-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12"
        style={{ y: textY, opacity }}
      >
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          className="w-12 h-[3px] mb-6 origin-left"
          style={{ background: '#4ade80' }}
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex items-center gap-3 mb-8"
        >
          <Leaf size={16} style={{ color: '#4ade80' }} />
          <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.25em]" style={{ color: '#86efac' }}>
            {hero.badge}
          </span>
        </motion.div>

        {/* Giant stacked text */}
        <div className="overflow-hidden">
          {['CLEAN', '/', 'STARTS', '/', 'HERE.'].map((word, i) => (
            <motion.div
              key={`${word}-${i}`}
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <h1
                className="font-heading font-bold leading-[0.88] tracking-tight"
                style={{
                  fontSize: word === '/' ? 'clamp(1rem, 4vw, 3rem)' : 'clamp(2.5rem, 10vw, 8rem)',
                  color: word === 'HERE.' ? '#4ade80' : word === '/' ? 'rgba(255,255,255,0.05)' : '#ffffff',
                  fontWeight: word === '/' ? 300 : 700,
                }}
              >
                {word}
              </h1>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.1 }}
          className="text-white/40 text-sm sm:text-base lg:text-lg max-w-lg mt-8 leading-relaxed font-light"
        >
          {hero.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.3 }}
          className="flex flex-wrap gap-4 mt-8 sm:mt-10"
        >
          <Link
            to="/contact"
            className="group inline-flex items-center gap-3 text-white px-7 py-3.5 sm:py-4 font-heading text-sm sm:text-base uppercase tracking-wider font-semibold transition-all duration-300 hover:shadow-xl"
            style={{ background: '#16A34A' }}
          >
            {hero.ctaPrimary}
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            to="/services"
            className="group inline-flex items-center gap-3 border border-white/20 text-white px-7 py-3.5 sm:py-4 font-heading text-sm sm:text-base uppercase tracking-wider font-semibold transition-all duration-300 hover:border-white/40 hover:bg-white/5"
          >
            {hero.ctaSecondary}
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="text-white/20 text-[10px] uppercase tracking-[0.3em] font-heading">Scroll</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}>
          <ArrowDown size={16} style={{ color: 'rgba(74,222,128,0.4)' }} />
        </motion.div>
      </motion.div>
    </section>
  );
}


/* ================================================================
   2. MARQUEE
   ================================================================ */
function MarqueeTicker() {
  const items = ['SANITISERS', 'DISINFECTANTS', 'ECO-FRIENDLY', 'HOSPITAL GRADE', 'HACCP COMPLIANT', 'WASHROOM', 'FOOD SAFE', 'PEST CONTROL'];
  const repeated = [...items, ...items, ...items, ...items];

  return (
    <section className="bg-white border-y py-4 sm:py-5 overflow-hidden" style={{ borderColor: 'rgba(22,163,74,0.1)' }}>
      <div className="animate-marquee flex whitespace-nowrap">
        {repeated.map((item, i) => (
          <span key={i} className="flex items-center gap-4 sm:gap-6 mx-4 sm:mx-6">
            <span className="font-heading text-lg sm:text-2xl font-bold uppercase tracking-wider" style={{ color: '#16A34A' }}>
              {item}
            </span>
            <span className="text-lg" style={{ color: 'rgba(22,163,74,0.2)' }}>&bull;</span>
          </span>
        ))}
      </div>
    </section>
  );
}


/* ================================================================
   3. ABOUT SPLIT — Fresh light approach
   ================================================================ */
function AboutSplit() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="bg-white py-24 sm:py-32 lg:py-40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className="w-10 h-[3px] mb-6" style={{ background: '#16A34A' }} />
            <p className="text-sm uppercase tracking-[0.3em] mb-6 font-light" style={{ color: 'rgba(22,163,74,0.5)' }}>About Elpro</p>
            <h2
              className="font-heading font-bold leading-[0.92] mb-8"
              style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', color: '#052e16' }}
            >
              HYGIENE<br />
              <span style={{ color: '#16A34A' }}>WITHOUT</span><br />
              COMPROMISE.
            </h2>
            <p className="text-sm sm:text-base leading-relaxed mb-6 max-w-lg" style={{ color: 'rgba(5,46,22,0.5)' }}>
              Founded in 2017, Elpro Hygienics was built to fill a critical gap in Zimbabwe's supply chain.
              Hospitals, hotels, and food processors needed certified hygiene products they could rely on.
              Not imports with unpredictable lead times. Not local alternatives with unverified efficacy.
            </p>
            <p className="text-sm leading-relaxed max-w-lg" style={{ color: 'rgba(5,46,22,0.35)' }}>
              We started with hand sanitisers and surface disinfectants. Today, our range exceeds 150 products
              across healthcare, commercial, food industry, and eco-friendly categories. Over 500 facilities
              trust Elpro as their hygiene partner.
            </p>

            <div className="w-full h-px my-8" style={{ background: 'rgba(5,46,22,0.05)' }} />

            <div className="flex gap-8 sm:gap-12">
              <div>
                <div className="font-heading text-3xl sm:text-4xl font-bold" style={{ color: '#16A34A' }}>2017</div>
                <div className="text-xs uppercase tracking-wider mt-1" style={{ color: 'rgba(5,46,22,0.3)' }}>Founded</div>
              </div>
              <div>
                <div className="font-heading text-3xl sm:text-4xl font-bold" style={{ color: '#16A34A' }}>500+</div>
                <div className="text-xs uppercase tracking-wider mt-1" style={{ color: 'rgba(5,46,22,0.3)' }}>Facilities</div>
              </div>
              <div>
                <div className="font-heading text-3xl sm:text-4xl font-bold" style={{ color: '#16A34A' }}>150+</div>
                <div className="text-xs uppercase tracking-wider mt-1" style={{ color: 'rgba(5,46,22,0.3)' }}>Products</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="relative"
          >
            <div className="relative">
              <div className="overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1584813539890-30373c796e72?w=800&q=80"
                  alt="Professional cleaning products"
                  className="w-full aspect-[4/5] object-cover object-center"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-8 -left-6 sm:-left-10 w-[45%] overflow-hidden border-4 border-white shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1563453392212-326f5e854473?w=600&q=80"
                  alt="Clean facility"
                  className="w-full aspect-square object-cover object-center"
                  loading="lazy"
                />
              </div>
              <div className="absolute -top-4 -right-4 sm:-right-6 text-white p-4 sm:p-6 shadow-2xl" style={{ background: '#16A34A' }}>
                <div className="text-center">
                  <ShieldCheck size={28} weight="fill" className="mx-auto mb-1" />
                  <div className="text-[10px] sm:text-xs uppercase tracking-wider font-semibold text-white/80">
                    HACCP &<br />ISO Cert.
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


/* ================================================================
   4. SERVICES — Cards on green-dark bg
   ================================================================ */
function ServicesGrid() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const { servicesPreview } = siteData;

  const serviceImages = [
    'https://images.unsplash.com/photo-1584813539890-30373c796e72?w=600&q=80',
    'https://images.unsplash.com/photo-1563453392212-326f5e854473?w=600&q=80',
    'https://images.unsplash.com/photo-1584813539890-30373c796e72?w=600&q=80',
    'https://images.unsplash.com/photo-1563453392212-326f5e854473?w=600&q=80',
    'https://images.unsplash.com/photo-1584813539890-30373c796e72?w=600&q=80',
    'https://images.unsplash.com/photo-1563453392212-326f5e854473?w=600&q=80',
  ];

  return (
    <section ref={ref} className="py-24 sm:py-32 lg:py-40" style={{ background: '#052e16' }}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-14"
        >
          <div className="w-10 h-[3px] mb-6" style={{ background: '#4ade80' }} />
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <h2 className="font-heading font-bold text-white leading-[0.92]" style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)' }}>
              WHAT WE <span style={{ color: '#4ade80' }}>SUPPLY</span>
            </h2>
            <Link
              to="/services"
              className="group text-white/25 text-sm uppercase tracking-wider font-heading flex items-center gap-2 hover:text-white/60 transition-colors"
            >
              All Products
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {servicesPreview.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.08 * i }}
            >
              <Link
                to={`/services/${siteData.services?.items?.[i]?.slug || '#'}`}
                className="group relative block overflow-hidden aspect-[3/4]"
              >
                <img
                  src={serviceImages[i]}
                  alt={service.title}
                  className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-[1.2s] group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(5,46,22,0.95), rgba(22,163,74,0.15), transparent)' }} />

                <div className="absolute top-5 right-5 z-10">
                  <span className="text-white/8 font-heading text-5xl font-bold">{String(i + 1).padStart(2, '0')}</span>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                  <h3 className="font-heading text-white text-lg sm:text-xl font-bold uppercase tracking-wide mb-2">
                    {service.title}
                  </h3>
                  <p className="text-white/0 group-hover:text-white/50 text-sm leading-relaxed transition-all duration-700 max-h-0 group-hover:max-h-24 overflow-hidden font-light">
                    {service.desc}
                  </p>
                  <div className="flex items-center gap-2 mt-3 opacity-0 group-hover:opacity-60 translate-y-2 group-hover:translate-y-0 transition-all duration-500" style={{ color: '#4ade80' }}>
                    <span className="text-xs uppercase tracking-wider font-heading font-semibold">Explore</span>
                    <ArrowRight size={12} />
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-[2px] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-10" style={{ background: '#4ade80' }} />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


/* ================================================================
   5. STATS BAND — Light green bg
   ================================================================ */
function StatsBand() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  const stats = siteData.stats;

  return (
    <section ref={ref} className="relative overflow-hidden" style={{ background: '#f0fdf4' }}>
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(22,163,74,0.15), transparent)' }} />
      <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(22,163,74,0.15), transparent)' }} />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-16 sm:py-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="font-heading font-bold leading-none" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: '#052e16' }}>
                <AnimatedCounter target={stat.number} duration={2} />
                {stat.suffix && <span style={{ color: '#16A34A' }}>{stat.suffix}</span>}
              </div>
              <div className="text-xs sm:text-sm uppercase tracking-[0.2em] font-heading mt-2 sm:mt-3" style={{ color: 'rgba(5,46,22,0.3)' }}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


/* ================================================================
   6. WHY CHOOSE US — Features grid
   ================================================================ */
function WhyChooseUsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const { whyChooseUs } = siteData;

  return (
    <section ref={ref} className="bg-white py-24 sm:py-32 lg:py-40">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <div className="w-10 h-[3px] mx-auto mb-6" style={{ background: '#16A34A' }} />
          <h2 className="font-heading font-bold leading-[0.92]" style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)', color: '#052e16' }}>
            WHY <span style={{ color: '#16A34A' }}>ELPRO</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyChooseUs.points.map((point, i) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * i }}
              className="text-center p-6"
            >
              <div className="w-14 h-14 mx-auto mb-5 flex items-center justify-center" style={{ background: 'rgba(22,163,74,0.08)' }}>
                <CheckCircle size={28} weight="duotone" style={{ color: '#16A34A' }} />
              </div>
              <h3 className="font-heading text-base sm:text-lg font-bold uppercase tracking-wide mb-3" style={{ color: '#052e16' }}>
                {point.title}
              </h3>
              <p className="text-sm leading-relaxed font-light" style={{ color: 'rgba(5,46,22,0.45)' }}>
                {point.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


/* ================================================================
   7. TESTIMONIALS
   ================================================================ */
function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const { homeTestimonials } = siteData;
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const next = useCallback(() => {
    setActive((prev) => (prev + 1) % homeTestimonials.length);
  }, [homeTestimonials.length]);

  const prev = useCallback(() => {
    setActive((prev) => (prev - 1 + homeTestimonials.length) % homeTestimonials.length);
  }, [homeTestimonials.length]);

  useEffect(() => {
    const timer = setInterval(next, 7000);
    return () => clearInterval(timer);
  }, [next]);

  const t = homeTestimonials[active];

  return (
    <section ref={ref} className="py-24 sm:py-32 lg:py-40 overflow-hidden" style={{ background: '#f0fdf4' }}>
      <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <Quotes size={36} weight="fill" className="mx-auto mb-10" style={{ color: 'rgba(22,163,74,0.1)' }} />

          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <blockquote className="text-lg sm:text-xl lg:text-2xl leading-relaxed font-light italic mb-10 font-heading" style={{ color: 'rgba(5,46,22,0.7)' }}>
                &ldquo;{t.text}&rdquo;
              </blockquote>

              <div className="flex flex-col items-center gap-2">
                <div className="w-8 h-[2px] mb-2" style={{ background: '#16A34A' }} />
                <div className="font-heading text-sm uppercase tracking-wider font-bold" style={{ color: '#052e16' }}>
                  {t.name}
                </div>
                <div className="text-xs uppercase tracking-wider" style={{ color: 'rgba(5,46,22,0.4)' }}>
                  {t.role}
                </div>
                <div className="flex items-center gap-0.5 mt-1">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={12} weight="fill" style={{ color: '#16A34A' }} />
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-center gap-6 mt-10">
            <button
              onClick={prev}
              className="w-10 h-10 flex items-center justify-center transition-colors"
              style={{ border: '1px solid rgba(5,46,22,0.1)', color: 'rgba(5,46,22,0.25)' }}
              aria-label="Previous"
            >
              <CaretLeft size={16} />
            </button>
            <div className="flex gap-2">
              {homeTestimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className="h-[3px] transition-all duration-300"
                  style={{
                    width: i === active ? '2rem' : '0.75rem',
                    background: i === active ? '#16A34A' : 'rgba(5,46,22,0.1)',
                  }}
                  aria-label={`Testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 flex items-center justify-center transition-colors"
              style={{ border: '1px solid rgba(5,46,22,0.1)', color: 'rgba(5,46,22,0.25)' }}
              aria-label="Next"
            >
              <CaretRight size={16} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


/* ================================================================
   8. CTA — Full-bleed with dark green overlay
   ================================================================ */
function CTASection() {
  const { business, homeCta } = siteData;
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  return (
    <section ref={ref} className="relative py-28 sm:py-36 lg:py-44 overflow-hidden">
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <img src={homeCta.backgroundImage} alt={homeCta.backgroundAlt} className="w-full h-[130%] object-cover object-center" loading="lazy" />
        <div className="absolute inset-0" style={{ background: 'rgba(5,46,22,0.80)' }} />
      </motion.div>

      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none z-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '128px 128px',
        }}
      />

      <div className="relative z-20 max-w-5xl mx-auto px-5 sm:px-8 lg:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-heading font-bold text-white leading-[0.88] mb-8" style={{ fontSize: 'clamp(2.5rem, 8vw, 7rem)' }}>
            CLEAN<br />
            <span style={{ color: '#4ade80' }}>STARTS</span> HERE.
          </h2>

          <p className="text-white/40 text-sm sm:text-base lg:text-lg max-w-lg mx-auto mb-10 leading-relaxed">
            {homeCta.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 text-white px-8 py-4 font-heading text-sm sm:text-base uppercase tracking-wider font-semibold transition-all duration-300 hover:shadow-xl"
              style={{ background: '#16A34A' }}
            >
              {homeCta.ctaPrimary}
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href={`https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(homeCta.whatsappText)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 border border-green-400/40 text-green-300 px-8 py-4 font-heading text-sm sm:text-base uppercase tracking-wider font-semibold transition-all duration-300 hover:bg-green-500/10 hover:border-green-400/60"
            >
              <WhatsappLogo size={20} weight="fill" />
              WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


/* ================================================================
   HOME
   ================================================================ */
function Home() {
  return (
    <PageTransition>
      <HeroSection />
      <MarqueeTicker />
      <AboutSplit />
      <ServicesGrid />
      <StatsBand />
      <WhyChooseUsSection />
      <TestimonialsSection />
      <CTASection />
    </PageTransition>
  );
}

export default Home;
