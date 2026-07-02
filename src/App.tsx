import React, { useState, useEffect } from "react";
import { 
  Zap, 
  Scale, 
  Users, 
  Cpu, 
  BrainCircuit, 
  Gavel, 
  Feather, 
  Handshake, 
  Lightbulb, 
  ShieldCheck, 
  TrendingUp, 
  FileCheck2, 
  BadgePercent, 
  UserCheck, 
  BarChart3, 
  Mail, 
  Phone, 
  ArrowLeft, 
  ArrowRight, 
  Check, 
  Globe, 
  Sparkles, 
  Briefcase, 
  Building, 
  Send, 
  MessageSquare, 
  FileText, 
  Calculator,
  ChevronDown,
  Info,
  Calendar,
  Clock,
  Lock,
  RefreshCw,
  Printer,
  Download,
  Eye,
  BookOpen
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import CompanyProfile from "./components/CompanyProfile";
import { 
  VALUES_DATA, 
  SERVICES_DATA, 
  GOALS_DATA, 
  PACKAGES_DATA, 
  PARTNERS_DATA,
  ValueItem,
  ServiceItem,
  PackageItem
} from "./data";

export default function App() {
  // Localization: 'ar' (default Arabic) or 'en' (English)
  const [lang, setLang] = useState<"ar" | "en">("ar");

  // Interactive state for Values Board
  const [selectedValue, setSelectedValue] = useState<string>("partnership");

  // Interactive state for Packages Section (Active package details & interactive bar chart)
  const [selectedPackage, setSelectedPackage] = useState<string>("smart_transform");

  // Active service filter
  const [activeServiceTab, setActiveServiceTab] = useState<string>("all");

  // Booking Modal State
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [bookingName, setBookingName] = useState("");
  const [bookingCompany, setBookingCompany] = useState("");
  const [bookingPhone, setBookingPhone] = useState("");
  const [bookingEmail, setBookingEmail] = useState("");
  const [bookingDate, setBookingDate] = useState("");
  const [bookingTime, setBookingTime] = useState("");
  const [bookingDetails, setBookingDetails] = useState("");
  const [dateError, setDateError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);

  // Scroll position indicator for navbar
  const [activeSection, setActiveSection] = useState("hero");

  // Fetch Google Sheets CSV
  const [sheetBookings, setSheetBookings] = useState<{ date: string; time: string }[]>([]);
  const [isLoadingBookings, setIsLoadingBookings] = useState(false);

  const fetchBookings = async () => {
    setIsLoadingBookings(true);
    try {
      const response = await fetch("https://docs.google.com/spreadsheets/d/e/2PACX-1vSSK8XuIpAsj8QDM1C7618Oy5lfnYZf_hdaUm0gqkmy5xx6pZ8TQNSPP5U0hABdw16voihgZLMC8itY/pub?gid=0&single=true&output=csv");
      const text = await response.text();
      
      const lines = text.split("\n");
      const bookingsList: { date: string; time: string }[] = [];
      
      for (let i = 1; i < lines.length; i++) {
        const line = lines[i].trim();
        if (!line) continue;
        
        const cols = line.split(",");
        if (cols.length >= 8) {
          const date = cols[cols.length - 2]?.replace(/["'\r]/g, "").trim();
          const time = cols[cols.length - 1]?.replace(/["'\r]/g, "").trim();
          
          if (date && time && date.match(/^\d{4}-\d{2}-\d{2}$/) && time.match(/^\d{2}:\d{2}$/)) {
            bookingsList.push({ date, time });
          }
        }
      }
      setSheetBookings(bookingsList);
    } catch (error) {
      console.error("Failed to fetch sheet bookings:", error);
    } finally {
      setIsLoadingBookings(false);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  useEffect(() => {
    if (isBookingModalOpen) {
      fetchBookings();
    }
  }, [isBookingModalOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "identity", "services", "packages", "partners-contact"];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Helper translations for structural UI elements
  const t = {
    brandName: lang === "ar" ? "رَصَانَة" : "RASANA",
    brandTitle: lang === "ar" ? "رَصَانَة | للاستشارات" : "RASANA | Consulting",
    slogan: lang === "ar" ? "نحول التحديات إلى حلول ذكية، ونبني أعمالاً مستدامة." : "We transform challenges into smart solutions, and build sustainable businesses.",
    navHero: lang === "ar" ? "الرئيسية" : "Home",
    navIdentity: lang === "ar" ? "هويتنا" : "Identity",
    navServices: lang === "ar" ? "خدماتنا" : "Services",
    navPackages: lang === "ar" ? "الباقات الاستراتيجية" : "Strategic Packages",
    navContact: lang === "ar" ? "الشركاء والتواصل" : "Partners & Contact",
    companyProfile: lang === "ar" ? "الملف التعريفي" : "Company Profile",
    viewProfile: lang === "ar" ? "تصفح الملف التعريفي" : "Browse Company Profile",
    savePdf: lang === "ar" ? "حفظ كملف PDF" : "Save as PDF",
    closeProfile: lang === "ar" ? "إغلاق الملف" : "Close Profile",
    downloadProfile: lang === "ar" ? "تحميل الملف" : "Download Profile",
    langToggle: lang === "ar" ? "English" : "العربية",
    moreDetails: lang === "ar" ? "المزيد من التفاصيل" : "More Details",
    discoverServices: lang === "ar" ? "اكتشف خدماتنا" : "Discover Our Services",
    bookConsultation: lang === "ar" ? "طلب استشارة مباشرة" : "Book a Consultation",
    philosophyTitle: lang === "ar" ? "فلسفة رصانة العمليّة" : "Rasana's Business Philosophy",
    whoAreWe: lang === "ar" ? "من نحن" : "Who We Are",
    vision: lang === "ar" ? "رؤيتنا" : "Our Vision",
    mission: lang === "ar" ? "رسالتنا" : "Our Mission",
    valuesTitle: lang === "ar" ? "منظومة القيم الجوهرية (ميزان التميز)" : "Core Values System (The Balance of Excellence)",
    valuesSub: lang === "ar" ? "انقر على القيمة لاستكشاف ميزان تفاعلها التشغيلي" : "Click on a value to explore its operational balance and integration",
    servicesTitle: lang === "ar" ? "حلولنا الاستشارية المتكاملة" : "Our Integrated Consulting Solutions",
    servicesSub: lang === "ar" ? "خدمات تخصصية مصممة لتمكين المنشآت ورفع الكفاءة التشغيلية" : "Specialized services tailored to empower enterprises and maximize efficiency",
    allServices: lang === "ar" ? "كل الخدمات" : "All Services",
    strategicGoals: lang === "ar" ? "الأهداف الاستراتيجية المنعكسة في خدماتنا" : "Strategic Goals Reflected in Our Services",
    goalsSub: lang === "ar" ? "كيف نترجم خدماتنا الاستشارية إلى عوائد وقيمة تشغيلية حقيقية" : "How we translate consulting services into tangible operational value",
    packagesTitle: lang === "ar" ? "الباقات الاستراتيجية المتدرجة" : "Graduated Strategic Packages",
    packagesSub: lang === "ar" ? "اختر المستوى الملائم لتطلعات منشأتك الحالية، واطلع على الأثر التشغيلي المتوقع" : "Choose the right tier for your enterprise, and monitor the expected operational impact",
    mostPopular: lang === "ar" ? "الأكثر طلباً" : "Most Popular",
    expectedImpactTitle: lang === "ar" ? "مؤشر الأثر التشغيلي المتوقع للباقة" : "Expected Operational Impact Index",
    impactMetricInfo: lang === "ar" ? "يتم قياس الأثر بناءً على متوسط نتائج عملاء رصانة السابقين في نفس القطاع" : "Impact metrics are based on average historical results of Rasana's clients in similar sectors",
    partnersTitle: lang === "ar" ? "شركاء النجاح" : "Partners in Success",
    partnersSub: lang === "ar" ? "نفخر بثقة منشآت رائدة شاركناها مسيرة البناء والتنظيم والنمو" : "Proud of the trust of leading organizations that shared our growth journey",
    contactTitle: lang === "ar" ? "مستشار المقترحات والاستفسارات الذكي" : "Smart Proposal & Inquiry Assistant",
    contactSub: lang === "ar" ? "صمم خارطة طريق منشأتك الاستكشافية فوراً واحصل على تحليل مقترح مجاني" : "Generate your exploratory roadmap immediately and get a free initial analysis",
    formCompName: lang === "ar" ? "اسم المنشأة / الشركة" : "Enterprise / Company Name",
    formCompNamePlHolder: lang === "ar" ? "مثال: شركة رصانة الرائدة" : "e.g., Rasana Leading Co.",
    formCompSize: lang === "ar" ? "حجم المنشأة الحالي" : "Current Enterprise Size",
    sizeStartup: lang === "ar" ? "منشأة ناشئة (Startup)" : "Startup Entity",
    sizeSme: lang === "ar" ? "منشأة متوسطة/صغيرة (SME)" : "Small/Medium Enterprise",
    sizeCorporate: lang === "ar" ? "مجموعة / شركة كبرى (Corporate)" : "Large Corporate Group",
    formChallenge: lang === "ar" ? "التحدي التشغيلي الأبرز لديك" : "Primary Operational Challenge",
    challengeDigital: lang === "ar" ? "التحول الرقمي وأتمتة الإجراءات" : "Digital Transformation & Automation",
    challengeGovernance: lang === "ar" ? "الحوكمة والامتثال وغياب اللوائح" : "Governance, Compliance & Lack of Policies",
    challengeCosts: lang === "ar" ? "ارتفاع التكاليف التشغيلية والهدر المالي" : "High Operational Costs & Waste",
    challengeHr: lang === "ar" ? "تشتت الهيكل التنظيمي وضعف الأداء البشري" : "Unstructured Org & Low Human Performance",
    challengeLegal: lang === "ar" ? "الحاجة لاستشارات قانونية وصياغة عقود تجارية" : "Need for Legal Advisory & Commercial Contracts",
    formPackage: lang === "ar" ? "الباقة المستهدفة للاهتمام" : "Target Package of Interest",
    generateProposalBtn: lang === "ar" ? "توليد مقترح خارطة الطريق" : "Generate Roadmap Proposal",
    proposalResultTitle: lang === "ar" ? "مسودة مقترح خارطة الطريق لشركة:" : "Exploratory Roadmap Proposal Draft for:",
    recommendedApproach: lang === "ar" ? "المنهجية المقترحة من مستشاري رصانة:" : "Proposed Methodology by Rasana Consultants:",
    whatsappConsultation: lang === "ar" ? "إرسال المقترح وتأكيد موعد استشارة عبر الواتساب" : "Send Proposal & Book Consultation via WhatsApp",
    emailConsultation: lang === "ar" ? "إرسال الطلب عبر البريد الإلكتروني" : "Send Inquiry via Email",
    successMsg: lang === "ar" ? "تم إرسال طلبك بنجاح! سيقوم مستشارونا بالاتصال بك خلال 24 ساعة." : "Your inquiry has been submitted successfully! Our consultants will reach out in 24 hours.",
    legalRights: lang === "ar" ? "جميع الحقوق محفوظة © ٢٠٢٦ شركة رصانة للاستشارات." : "All Rights Reserved © 2026 Rasana Consulting Company.",
    sloganFooter: lang === "ar" ? "نبني كيانات مستقرة، نصنع حلولاً رصينة." : "Building stable entities, crafting steadfast solutions."
  };

  // Icon mapping helper
  const renderIcon = (iconName: string, className = "w-6 h-6 text-gold") => {
    switch (iconName) {
      case "Zap": return <Zap className={className} />;
      case "Scale": return <Scale className={className} />;
      case "Users": return <Users className={className} />;
      case "Cpu": return <Cpu className={className} />;
      case "BrainCircuit": return <BrainCircuit className={className} />;
      case "Gavel": return <Gavel className={className} />;
      case "Feather": return <Feather className={className} />;
      case "Handshake": return <Handshake className={className} />;
      case "Lightbulb": return <Lightbulb className={className} />;
      case "ShieldCheck": return <ShieldCheck className={className} />;
      case "TrendingUp": return <TrendingUp className={className} />;
      case "FileCheck2": return <FileCheck2 className={className} />;
      case "BadgePercent": return <BadgePercent className={className} />;
      case "UserCheck": return <UserCheck className={className} />;
      case "BarChart3": return <BarChart3 className={className} />;
      default: return <Sparkles className={className} />;
    }
  };

  // Booking Slot & Calendar Helpers
  const AVAILABLE_SLOTS = ["19:00", "19:30", "20:00", "20:30"];

  const isSlotBooked = (dateStr: string, timeStr: string) => {
    return sheetBookings.some(b => b.date === dateStr && b.time === timeStr);
  };

  const getNextBusinessDays = () => {
    const days: Date[] = [];
    const current = new Date();
    // Move starting day forward if we want, but today is fine
    let checked = 0;
    while (days.length < 10 && checked < 30) {
      const dayOfWeek = current.getDay(); // 0 = Sunday, 1 = Monday, ..., 5 = Friday, 6 = Saturday
      if (dayOfWeek !== 5 && dayOfWeek !== 6) {
        days.push(new Date(current));
      }
      current.setDate(current.getDate() + 1);
      checked++;
    }
    return days;
  };

  const formatDateISO = (date: Date) => {
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, "0");
    const d = String(date.getDate()).padStart(2, "0");
    return `${y}-${m}-${d}`;
  };

  const getDayName = (date: Date, locale: "ar" | "en") => {
    return date.toLocaleDateString(locale === "ar" ? "ar-EG" : "en-US", { weekday: "long" });
  };

  const getFormattedDateLabel = (date: Date, locale: "ar" | "en") => {
    return date.toLocaleDateString(locale === "ar" ? "ar-EG" : "en-US", { month: "short", day: "numeric" });
  };

  // Date validation: No Friday (5) or Saturday (6)
  const handleDateChange = (val: string) => {
    const date = new Date(val);
    const day = date.getDay();
    if (day === 5 || day === 6) {
      setDateError(true);
      setBookingDate("");
    } else {
      setDateError(false);
      setBookingDate(val);
    }
  };

  // Booking Form Submission & Calendar/Email sync
  const handleBookingSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const payload = {
      name: bookingName,
      company: bookingCompany,
      phone: bookingPhone,
      email: bookingEmail,
      date: bookingDate,
      time: bookingTime,
      details: bookingDetails
    };

    const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwUhDyAMwJyuvl6rrVjMYiSbs3xkUWpzA7V9HkXWY3h95mE_epBh0Vo1YjQSjt_YoTQGg/exec';

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors', // To avoid CORS block
        body: JSON.stringify(payload)
      });
      
      setBookingSuccess(true);
      setSheetBookings(prev => [...prev, { date: bookingDate, time: bookingTime }]);
      
      // Auto-open calendar link and mailto links in new tabs as per request
      const cleanDate = bookingDate.replace(/-/g, "");
      const cleanTime = bookingTime.replace(/:/g, "") + "00";
      const startDateTime = `${cleanDate}T${cleanTime}`;
      
      let endHour = parseInt(bookingTime.split(":")[0]);
      let endMin = parseInt(bookingTime.split(":")[1]) + 30;
      if (endMin >= 60) {
        endMin = endMin - 60;
        endHour = endHour + 1;
      }
      const endHourStr = String(endHour).padStart(2, "0");
      const endMinStr = String(endMin).padStart(2, "0");
      const endDateTime = `${cleanDate}T${endHourStr}${endMinStr}00`;

      const calendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
        lang === "ar" ? "استشارة رصانة الاستراتيجية" : "Rasana Strategic Consultation"
      )}&dates=${startDateTime}/${endDateTime}&ctz=Asia/Riyadh&details=${encodeURIComponent(
        `طلب الاستشارة المقدم عبر رصانة:\n- الاسم: ${bookingName}\n- الجوال: ${bookingPhone}\n- الشركة: ${bookingCompany || "لا يوجد"}\n- التفاصيل: ${bookingDetails || "لا يوجد"}`
      )}`;

      const mailtoUrl = `mailto:rasana2030@gmail.com?subject=${encodeURIComponent(
        lang === "ar" ? `طلب حجز موعد استشارة - ${bookingName}` : `Consultation Booking Confirmation - ${bookingName}`
      )}&body=${encodeURIComponent(
        `الاسم: ${bookingName}\nالشركة: ${bookingCompany || "لا يوجد"}\nالجوال: ${bookingPhone}\nالبريد الإلكتروني: ${bookingEmail || "لا يوجد"}\nالتاريخ: ${bookingDate}\nالوقت: ${bookingTime}\nالتفاصيل: ${bookingDetails || "لا يوجد"}`
      )}`;

      window.open(calendarUrl, "_blank");
      window.open(mailtoUrl, "_blank");

    } catch (error) {
      console.error('Submission error', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Filtered services
  const filteredServices = activeServiceTab === "all" 
    ? SERVICES_DATA 
    : SERVICES_DATA.filter(s => s.id === activeServiceTab);

  const selectedPkgData = PACKAGES_DATA.find(p => p.id === selectedPackage) || PACKAGES_DATA[2];

  return (
    <div className="min-h-screen bg-navy-dark text-white font-sans selection:bg-gold selection:text-navy-dark overflow-x-hidden relative" dir={lang === "ar" ? "rtl" : "ltr"}>
      
      {/* 1. Global Interactive/Print Company Profile Controller */}
      <CompanyProfile isOpen={isProfileModalOpen} onClose={() => setIsProfileModalOpen(false)} lang={lang} />

      {/* 2. Main App Screen Layout Wrapper (hidden automatically during printing) */}
      <div className="app-main-layout">
        {/* Decorative ambient blobs */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[120px] pointer-events-none -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute top-[40%] right-0 w-[600px] h-[600px] bg-copper/5 rounded-full blur-[140px] pointer-events-none translate-x-1/3" />
        <div className="absolute bottom-0 left-1/3 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[120px] pointer-events-none" />

      {/* FLOATING HEADER */}
      <header className="sticky top-4 z-50 max-w-7xl mx-auto px-4 md:px-6">
        <nav className="neu-flat rounded-full px-6 py-4 flex items-center justify-between backdrop-blur-md bg-opacity-90 border border-white/5 transition-all duration-300">
          
          {/* Logo / Brand Name */}
          <a href="#hero" className="hover:opacity-95 transition-opacity">
            <div className="flex items-center gap-3 md:gap-3.5 group cursor-pointer">
              {/* Text on left */}
              <div className="flex flex-col text-right select-none">
                <span className="font-tajawal font-extrabold text-xl md:text-2xl leading-none text-white tracking-wide">
                  رَصَانَة
                </span>
                <span className="font-outfit font-bold text-[9px] md:text-[10px] text-gold tracking-[0.25em] mt-1.5 leading-none uppercase">
                  RASANA
                </span>
              </div>
              
              {/* Icon on right */}
              <div className="w-11 h-11 md:w-12 md:h-12 rounded-2xl bg-navy-dark/60 border border-white/10 flex items-center justify-center shadow-md relative group-hover:border-gold/30 transition-all duration-300">
                <svg 
                  className="w-6 h-6 md:w-6.5 md:h-6.5 text-gold stroke-[2]" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  {/* Shield */}
                  <path d="M12 3 L19 5 v6 c0 4.5 -3.5 8.5 -7 10 c-3.5 -1.5 -7 -5.5 -7 -10 V5 Z" />
                  {/* Upward Arrow */}
                  <path d="M12 16 V8" />
                  <path d="M9 11 l3-3 3 3" />
                </svg>
              </div>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-6 text-sm font-medium">
            <a 
              href="#hero" 
              className={`transition-colors duration-200 ${activeSection === "hero" ? "text-gold font-bold" : "text-muted-blue hover:text-white"}`}
            >
              {t.navHero}
            </a>
            <a 
              href="#identity" 
              className={`transition-colors duration-200 ${activeSection === "identity" ? "text-gold font-bold" : "text-muted-blue hover:text-white"}`}
            >
              {t.navIdentity}
            </a>
            <a 
              href="#services" 
              className={`transition-colors duration-200 ${activeSection === "services" ? "text-gold font-bold" : "text-muted-blue hover:text-white"}`}
            >
              {t.navServices}
            </a>
            <a 
              href="#packages" 
              className={`transition-colors duration-200 ${activeSection === "packages" ? "text-gold font-bold" : "text-muted-blue hover:text-white"}`}
            >
              {t.navPackages}
            </a>
            <a 
              href="#partners-contact" 
              className={`transition-colors duration-200 ${activeSection === "partners-contact" ? "text-gold font-bold" : "text-muted-blue hover:text-white"}`}
            >
              {t.navContact}
            </a>
            <button 
              onClick={() => setIsProfileModalOpen(true)}
              className="text-muted-blue hover:text-gold transition-colors duration-200 text-sm font-semibold flex items-center gap-1.5 cursor-pointer"
            >
              <FileText className="w-4 h-4 text-gold" />
              <span>{t.companyProfile}</span>
            </button>
          </div>

          {/* Controls: Language and CTA */}
          <div className="flex items-center gap-3">
            <button 
              id="lang-toggle-btn"
              onClick={() => setLang(lang === "ar" ? "en" : "ar")}
              className="neu-button px-4 py-2 rounded-full text-xs font-semibold text-gold flex items-center gap-2 hover:text-white border border-white/5"
            >
              <Globe className="w-4 h-4" />
              <span>{t.langToggle}</span>
            </button>
            <button 
              onClick={() => setIsBookingModalOpen(true)}
              className="hidden sm:inline-flex neu-button-gold text-navy-dark px-5 py-2 rounded-full text-xs font-bold cursor-pointer"
            >
              {t.bookConsultation}
            </button>
          </div>
        </nav>
      </header>

      {/* SECTION 1: HERO SECTION */}
      <section id="hero" className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-12 px-4 md:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
          
          {/* Main Hero Copy */}
          <div className="lg:col-span-7 flex flex-col space-y-8 text-center lg:text-right" style={{ textAlign: lang === "ar" ? "right" : "left" }}>
            
            {/* Tagline Badge */}
            <div className={`self-center lg:self-start flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 text-gold text-xs font-semibold border border-gold/20 tracking-wider ${lang === "en" ? "font-outfit" : ""}`}>
              <Sparkles className="w-4 h-4 animate-pulse text-gold" />
              <span>{lang === "ar" ? "الريادة في الاستشارات والتحول التشغيلي" : "Leadership in Advisory & Operational Transformation"}</span>
            </div>

            {/* Display Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-white">
              {lang === "ar" ? (
                <>
                  نحول <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-copper">التحديات</span> إلى حلول ذكية، ونبني أعمالاً <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-copper">مستدامة</span>.
                </>
              ) : (
                <>
                  We transform <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-copper">Challenges</span> into smart solutions, and build <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-copper">Sustainable</span> businesses.
                </>
              )}
            </h1>

            {/* Subtitle */}
            <p className="text-muted-blue text-base md:text-lg max-w-2xl leading-relaxed">
              {t.brandTitle} — {t.slogan} {lang === "ar" ? "رصانة هي شريككم الاستراتيجي المميز لتطوير الأعمال والتميز التشغيلي، لتمكين منشأتكم من تحقيق أعلى معدلات الكفاءة والامتثال والنمو المستدام." : "We stand as your elite operational advisor, re-engineering core functions to drive ultimate productivity and eliminate structural waste."}
            </p>

            {/* Call to Actions */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <a 
                href="#services" 
                className="neu-button-gold text-navy-dark px-8 py-4 rounded-xl text-sm font-bold text-center flex items-center justify-center gap-2"
              >
                <span>{t.discoverServices}</span>
                {lang === "ar" ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
              </a>
              <button 
                onClick={() => setIsBookingModalOpen(true)}
                className="neu-button px-8 py-4 rounded-xl text-sm font-semibold text-center text-white border border-white/5 hover:border-gold/30 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>{t.bookConsultation}</span>
              </button>
              <button 
                onClick={() => setIsProfileModalOpen(true)}
                className="neu-button px-8 py-4 rounded-xl text-sm font-semibold text-center text-gold border border-gold/30 hover:bg-gold/5 flex items-center justify-center gap-2 cursor-pointer"
              >
                <FileText className="w-4 h-4 text-gold animate-bounce" />
                <span>{t.companyProfile}</span>
              </button>
            </div>

            {/* Dynamic quote card */}
            <div className="pt-6">
              <div className="neu-flat rounded-2xl p-6 relative border border-white/5 max-w-xl">
                <span className="absolute -top-4 right-6 text-6xl text-gold/20 font-serif select-none">“</span>
                <p className="text-gold/90 text-sm md:text-base italic leading-relaxed z-10 relative">
                  {lang === "ar" 
                    ? "نجاح الأعمال لا يعتمد على الجهد فقط، بل يستند إلى مسار واضح، وإجراءات فعالة، وتقنيات ذكية تدعم اتخاذ القرار."
                    : "Business success does not rely on effort alone; it stands on a clear path, efficient procedures, and smart technologies that support decision-making."
                  }
                </p>
                <div className="mt-3 flex items-center justify-end gap-2 text-xs text-muted-blue">
                  <span className="w-6 h-[1px] bg-gold" />
                  <span className="font-semibold">{lang === "ar" ? "الفلسفة التشغيلية لرصانة" : "Rasana's Core Philosophy"}</span>
                </div>
              </div>
            </div>

          </div>

          {/* Visual Neumorphic Column (Brand Emblem Mock) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-72 h-72 md:w-80 md:h-80 flex items-center justify-center">
              {/* Outer Neumorphic ring */}
              <div className="absolute inset-0 rounded-full bg-navy-dark shadow-[10px_10px_30px_rgba(0,0,0,0.5),-10px_-10px_30px_rgba(255,255,255,0.035)] border border-white/5 flex items-center justify-center animate-spin-slow">
                <div className="w-[85%] h-[85%] rounded-full bg-navy-dark shadow-[inset_6px_6px_12px_rgba(0,0,0,0.5),inset_-6px_-6px_12px_rgba(255,255,255,0.03)] border border-white/5" />
              </div>

              {/* Middle interactive ring representing clockwork consulting */}
              <div className="absolute w-[60%] h-[60%] rounded-full bg-gradient-to-br from-navy-light to-navy-dark shadow-md flex items-center justify-center p-2 border border-gold/10">
                <div className="text-center">
                  <span className="font-outfit font-black text-2xl md:text-3xl tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-gold to-copper block">RASANA</span>
                  <span className="text-[9px] text-muted-blue tracking-widest uppercase font-mono">{lang === "ar" ? "تطوير مستدام" : "STABLE ROOTS"}</span>
                </div>
              </div>

              {/* Floating strategic tags orbit */}
              <div className="absolute -top-4 -right-4 bg-navy-light px-4 py-2 rounded-xl text-xs font-bold border border-gold/20 shadow-lg text-gold flex items-center gap-2">
                <Zap className="w-3.5 h-3.5" />
                <span>{lang === "ar" ? "أثر ملموس" : "Tangible Impact"}</span>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-navy-light px-4 py-2 rounded-xl text-xs font-bold border border-copper/30 shadow-lg text-copper flex items-center gap-2">
                <BrainCircuit className="w-3.5 h-3.5" />
                <span>{lang === "ar" ? "أتمتة ذكية" : "AI Powered"}</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 2: IDENTITY SECTION (هويتنا الاستراتيجية) */}
      <section id="identity" className="py-24 px-4 md:px-8 bg-navy-dark relative border-t border-white/5">
        <div className="max-w-6xl mx-auto space-y-16">
          
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              {lang === "ar" ? "هويتنا الاستراتيجية والريادة" : "Our Strategic Identity & Pillars"}
            </h2>
            <p className="text-muted-blue text-sm md:text-base">
              {lang === "ar" ? "نحن كيان استشاري وتنفيذي متخصص في صياغة الأنظمة وتطوير الكفاءات لتمكين منشآت الوطن." : "A specialized entity shaping stable administrative ecosystems, driving governance and modernization."}
            </p>
            <div className="w-16 h-1 bg-gradient-to-r from-gold to-copper mx-auto rounded" />
          </div>

          {/* Tri-fold Identity Grid: Who we are, Vision, Mission */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Who we are */}
            <div className="neu-flat rounded-2xl p-8 border border-white/5 hover:border-gold/20 transition-colors duration-300 flex flex-col space-y-4">
              <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center border border-gold/20 text-gold shadow-md">
                <Briefcase className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">{t.whoAreWe}</h3>
              <p className="text-muted-blue text-sm leading-relaxed">
                {lang === "ar" 
                  ? "رصانة هي كيان استشاري وتنفيذي وطني متخصص في هندسة العمليات ورفع كفاءة المنشآت الإدارية والتشغيلية عبر حلول استراتيجية متكاملة لتقليل التكاليف ورفع الطاقة الإنتاجية." 
                  : "An executive consulting boutique dedicated to optimizing commercial and governmental entities via tailored restructuring, cost reduction, and business growth mechanisms."
                }
              </p>
            </div>

            {/* Vision */}
            <div className="neu-flat rounded-2xl p-8 border border-white/5 hover:border-copper/20 transition-colors duration-300 flex flex-col space-y-4">
              <div className="w-12 h-12 rounded-xl bg-copper/10 flex items-center justify-center border border-copper/20 text-copper shadow-md">
                <Lightbulb className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">{t.vision}</h3>
              <p className="text-muted-blue text-sm leading-relaxed">
                {lang === "ar" 
                  ? "أن نكون الشريك الاستشاري والمنفذ المفضل للمنشآت في المملكة العربية السعودية في رحلة التحول الرقمي والذكي بتقديم حلول مرنة ذات أثر ملموس وقيمة مضافة تدوم طويلاً." 
                  : "To remain the partner of choice for smart transformation and governance in Saudi Arabia, building legacies with high-performance operational architectures."
                }
              </p>
            </div>

            {/* Mission */}
            <div className="neu-flat rounded-2xl p-8 border border-white/5 hover:border-gold/20 transition-colors duration-300 flex flex-col space-y-4">
              <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center border border-gold/20 text-gold shadow-md">
                <Send className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">{t.mission}</h3>
              <p className="text-muted-blue text-sm leading-relaxed">
                {lang === "ar" 
                  ? "تمكين قطاع المنشآت الصغيرة والمتوسطة من بناء كيانات إدارية منظمة ومستقرة، بتوظيف أحدث الممارسات التنظيمية والتقنية والذكاء الاصطناعي لتحسين الأداء." 
                  : "Empowering businesses through structured governance, technology deployment, and advanced administrative practices, fostering operational agility."
                }
              </p>
            </div>

          </div>

          {/* INTERACTIVE VALUES SYSTEM / BALANCE BOARD */}
          <div className="neu-flat rounded-3xl p-8 border border-white/5 shadow-2xl relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Values Copy / Description on active selection */}
              <div className="lg:col-span-6 space-y-6">
                <div className="space-y-2">
                  <span className="text-xs font-bold text-gold tracking-widest uppercase font-mono block">OUR PILLARS</span>
                  <h3 className="text-2xl md:text-3xl font-bold text-white">
                    {t.valuesTitle}
                  </h3>
                  <p className="text-muted-blue text-xs md:text-sm">
                    {t.valuesSub}
                  </p>
                </div>

                {/* Animated value detail view */}
                <div className="p-6 rounded-2xl bg-navy-light/40 border border-white/5 shadow-inner min-h-[140px] relative">
                  <AnimatePresence mode="wait">
                    {VALUES_DATA.map((val) => {
                      if (val.id !== selectedValue) return null;
                      return (
                        <motion.div 
                          key={val.id}
                          initial={{ opacity: 0, x: lang === "ar" ? 20 : -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: lang === "ar" ? -20 : 20 }}
                          transition={{ duration: 0.2 }}
                          className="space-y-3"
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center text-gold border border-gold/10">
                              {renderIcon(val.icon, "w-5 h-5")}
                            </div>
                            <h4 className="text-lg font-bold text-gold">
                              {lang === "ar" ? val.titleAr : val.titleEn}
                            </h4>
                          </div>
                          <p className="text-white text-sm leading-relaxed pt-1">
                            {lang === "ar" ? val.descriptionAr : val.descriptionEn}
                          </p>
                          <div className="text-[11px] text-muted-blue flex items-center gap-2 pt-2">
                            <Info className="w-3.5 h-3.5 text-copper" />
                            <span>
                              {lang === "ar" 
                                ? "هذه القيمة متكاملة تشغيلياً لضمان وزن واستقرار الهيكل الاستشاري لعملائنا."
                                : "This value integrates operationally to guarantee stability for our clients."
                              }
                            </span>
                          </div>
                        </motion.div>
                      );
                    })}
                  </AnimatePresence>
                </div>

                {/* Legend or strategic insight */}
                <div className="flex gap-4 p-4 rounded-xl border border-white/5 bg-navy-dark/40 text-xs text-muted-blue">
                  <div className="flex-shrink-0 text-gold font-bold">💡 {lang === "ar" ? "الأثر:" : "Impact:"}</div>
                  <div>
                    {lang === "ar" 
                      ? "رصانة تلتزم بتحقيق توازن دقيق بين بساطة الحل وقوته التنظيمية لضمان سرعة الاستجابة والنمو." 
                      : "We guarantee a meticulous balance between practical simplicity and strict compliance to accelerate growth."
                    }
                  </div>
                </div>
              </div>

              {/* The "Balance Scale" Interactive visual component */}
              <div className="lg:col-span-6 flex flex-col items-center justify-center py-6">
                <div className="relative w-72 h-72 md:w-80 md:h-80 flex items-center justify-center">
                  
                  {/* Central Node / Anchor */}
                  <div className="absolute w-24 h-24 rounded-full bg-navy-light shadow-[inset_4px_4px_10px_rgba(0,0,0,0.6)] border-2 border-gold/30 z-20 flex flex-col items-center justify-center text-center">
                    <span className="font-outfit font-black text-xs text-gold">RASANA</span>
                    <span className="text-[9px] text-muted-blue tracking-tighter mt-0.5">{lang === "ar" ? "ميزان الأداء" : "Operational Balance"}</span>
                  </div>

                  {/* Balanced values around the anchor */}
                  {VALUES_DATA.map((val, idx) => {
                    const total = VALUES_DATA.length;
                    const angle = (idx * 2 * Math.PI) / total;
                    const radius = 105; // orbit distance
                    const x = Math.cos(angle) * radius;
                    const y = Math.sin(angle) * radius;
                    const isActive = val.id === selectedValue;

                    return (
                      <button
                        key={val.id}
                        onClick={() => setSelectedValue(val.id)}
                        style={{
                          transform: `translate(${x}px, ${y}px)`,
                        }}
                        className={`absolute w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 z-10 ${
                          isActive 
                            ? "bg-navy-light border-2 border-gold text-gold shadow-[0_0_15px_rgba(187,152,76,0.3)] scale-110" 
                            : "neu-flat text-muted-blue hover:text-white border border-white/5 hover:border-gold/20"
                        }`}
                        title={lang === "ar" ? val.titleAr : val.titleEn}
                      >
                        {renderIcon(val.icon, `w-6 h-6 ${isActive ? "text-gold" : "text-muted-blue"}`)}
                        
                        {/* Outer floating label */}
                        <span className={`absolute whitespace-nowrap text-[10px] font-bold tracking-tight bg-navy-light px-2 py-1 rounded-md border border-white/5 shadow-md transition-all ${
                          isActive ? "text-gold opacity-100 scale-100" : "text-muted-blue/80 opacity-0 scale-90"
                        }`} style={{ top: y > 0 ? "110%" : "auto", bottom: y <= 0 ? "110%" : "auto" }}>
                          {lang === "ar" ? val.titleAr : val.titleEn}
                        </span>
                      </button>
                    );
                  })}

                  {/* Orbital decorative guide lines */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none stroke-white/[0.04] fill-none">
                    <circle cx="50%" cy="50%" r="105" strokeDasharray="4,4" />
                    <circle cx="50%" cy="50%" r="60" />
                  </svg>
                </div>

                {/* Interactive scale weights indicator */}
                <div className="flex gap-4 mt-6 text-xs text-muted-blue font-semibold">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-gold" />
                    <span>{lang === "ar" ? "رصينة وموثوقة" : "Sage & Steadfast"}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-copper" />
                    <span>{lang === "ar" ? "مبتكرة وذكية" : "Tech & Smart"}</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* COMPANY PROFILE PROMO CARD */}
          <div className="neu-flat rounded-3xl p-8 md:p-10 border border-gold/30 shadow-2xl relative overflow-hidden bg-gradient-to-br from-navy-dark via-navy-light/20 to-navy-dark">
            <div className="absolute inset-0 bg-pattern opacity-5 pointer-events-none"></div>
            <div className="absolute -right-16 -bottom-16 w-64 h-64 rounded-full bg-gold/5 blur-3xl pointer-events-none" />
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              {/* Text Description */}
              <div className="lg:col-span-7 space-y-6 text-right" style={{ textAlign: lang === "ar" ? "right" : "left" }}>
                <span className="bg-gold/10 text-gold px-3.5 py-1.5 rounded-full text-xs font-bold border border-gold/20 inline-flex items-center gap-1.5 uppercase font-outfit">
                  <BookOpen className="w-3.5 h-3.5 animate-pulse" />
                  <span>{lang === "ar" ? "الملف التعريفي الرسمي ٢٠٢٦" : "Official Company Profile 2026"}</span>
                </span>
                
                <h3 className="text-2xl md:text-3xl font-extrabold text-white leading-tight font-tajawal">
                  {lang === "ar" 
                    ? "تصفح واستكشف الملف التعريفي الشامل لشركة رصانة" 
                    : "Browse & Explore Rasana's Corporate Profile Document"
                  }
                </h3>
                
                <p className="text-muted-blue text-sm md:text-base leading-relaxed font-tajawal">
                  {lang === "ar" 
                    ? "مستند تعريفي متكامل ومنظم طبقاً للمواصفات الاستشارية الممتازة. يحتوي على فلسفتنا التشغيلية، توجهنا الاستراتيجي، تفاصيل الخدمات البينية، وباقات الشراكة لتلبية نمو وتطلعات منشأتك." 
                    : "An executive brochure curated to showcase our structural frameworks, strategic pillars, service architectures, and engagement packages."
                  }
                </p>

                <div className="flex flex-wrap gap-4 pt-2">
                  <button
                    onClick={() => setIsProfileModalOpen(true)}
                    className="neu-button-gold text-navy-dark px-8 py-4 rounded-xl text-sm font-bold flex items-center gap-2 cursor-pointer shadow-md font-tajawal"
                  >
                    <Eye className="w-4 h-4" />
                    <span>{lang === "ar" ? "تصفح واستعراض الملف التعريفي التفاعلي" : "View & Browse Interactive Profile"}</span>
                  </button>
                </div>
              </div>

              {/* Decorative Document Mockup Preview */}
              <div className="lg:col-span-5 flex justify-center items-center">
                <div 
                  onClick={() => setIsProfileModalOpen(true)}
                  className="group cursor-pointer relative w-60 h-80 rounded-2xl bg-navy-dark/80 border border-gold/20 p-6 flex flex-col justify-between shadow-2xl hover:border-gold/50 transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gold/5 opacity-50 group-hover:opacity-100 transition-opacity" />
                  
                  {/* Top Badge */}
                  <div className="flex justify-between items-center text-[10px] text-muted-blue">
                    <span className="font-outfit tracking-widest font-bold">RASANA</span>
                    <span className="bg-gold/10 text-gold font-bold px-2 py-0.5 rounded-full uppercase">INFO</span>
                  </div>

                  {/* Logo Center */}
                  <div className="flex flex-col items-center justify-center py-6 text-center">
                    <div className="w-16 h-16 rounded-full bg-navy-light border border-gold/20 flex items-center justify-center text-gold group-hover:scale-110 transition-transform duration-300">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8 text-gold">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                        <path d="M12 16V8" />
                        <path d="M8 12l4-4 4 4" />
                      </svg>
                    </div>
                    <span className="font-tajawal font-black text-lg text-white mt-3">رَصَانَة</span>
                    <span className="font-outfit text-[8px] tracking-widest text-gold -mt-1">RASANA</span>
                  </div>

                  {/* Title Bottom */}
                  <div className="border-t border-white/5 pt-4 text-center">
                    <span className="text-xs font-bold text-white block font-tajawal">{lang === "ar" ? "الملف التعريفي الشامل" : "Corporate Profile"}</span>
                    <span className="text-[10px] text-muted-blue block mt-0.5">2026 Edition</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* SECTION 3: SERVICES (خدماتنا الشاملة) */}
      <section id="services" className="py-24 px-4 md:px-8 relative bg-navy-light/20 border-t border-white/5">
        <div className="max-w-6xl mx-auto space-y-16">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold text-gold tracking-widest uppercase font-mono block">OUR SERVICES</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              {t.servicesTitle}
            </h2>
            <p className="text-muted-blue text-sm md:text-base max-w-xl mx-auto">
              {t.servicesSub}
            </p>
            <div className="w-16 h-1 bg-gradient-to-r from-gold to-copper mx-auto rounded" />
          </div>

          {/* Interactive Navigation Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => setActiveServiceTab("all")}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all ${
                activeServiceTab === "all" 
                  ? "bg-gold text-navy-dark shadow-md" 
                  : "neu-button text-muted-blue hover:text-white"
              }`}
            >
              {t.allServices}
            </button>
            {SERVICES_DATA.map((serv) => (
              <button
                key={serv.id}
                onClick={() => setActiveServiceTab(serv.id)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all ${
                  activeServiceTab === serv.id 
                    ? "bg-gold text-navy-dark shadow-md" 
                    : "neu-button text-muted-blue hover:text-white"
                }`}
              >
                {lang === "ar" ? serv.titleAr : serv.titleEn}
              </button>
            ))}
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredServices.map((service, index) => {
                const isFocused = activeServiceTab === service.id;
                return (
                  <motion.div
                    layout
                    key={service.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3, delay: isFocused ? 0 : index * 0.05 }}
                    className={`neu-flat-light rounded-2xl p-6 border transition-all duration-300 relative overflow-hidden flex flex-col justify-between ${
                      isFocused 
                        ? "border-gold/60 shadow-[0_0_20px_rgba(187,152,76,0.15)] bg-navy-light" 
                        : "border-white/5 hover:border-gold/20"
                    }`}
                  >
                    {/* Top corner gradient glow */}
                    <div className="absolute top-0 right-0 w-24 h-24 bg-gold/5 rounded-bl-full pointer-events-none" />

                    <div className="space-y-4">
                      {/* Icon Container */}
                      <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center text-gold border border-gold/10">
                        {renderIcon(service.icon)}
                      </div>

                      {/* Header */}
                      <h3 className="text-lg font-bold text-white group-hover:text-gold transition-colors duration-200">
                        {lang === "ar" ? service.titleAr : service.titleEn}
                      </h3>

                      {/* Description */}
                      <p className="text-muted-blue text-xs md:text-sm leading-relaxed">
                        {lang === "ar" ? service.descriptionAr : service.descriptionEn}
                      </p>
                    </div>

                    {/* Focus Areas Tags */}
                    <div className="pt-6 mt-6 border-t border-white/[0.03] space-y-2">
                      <span className="text-[10px] text-gold/80 block font-bold">
                        {lang === "ar" ? "مجالات التركيز:" : "Focus Areas:"}
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {lang === "ar" ? (
                          service.tagsAr.map((tag, tIdx) => (
                            <span key={tIdx} className="text-[10px] px-2.5 py-1 rounded bg-navy-dark text-muted-blue border border-white/5">
                              {tag}
                            </span>
                          ))
                        ) : (
                          service.tagsEn.map((tag, tIdx) => (
                            <span key={tIdx} className="text-[10px] px-2.5 py-1 rounded bg-navy-dark text-muted-blue border border-white/5">
                              {tag}
                            </span>
                          ))
                        )}
                      </div>
                    </div>

                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* SUB-SECTION: STRATEGIC GOALS (أهدافنا الاستراتيجية المنعكسة في خدماتنا) */}
          <div className="pt-12 border-t border-white/5">
            <div className="space-y-12">
              <div className="text-center max-w-2xl mx-auto space-y-2">
                <h3 className="text-2xl font-bold text-white">
                  {t.strategicGoals}
                </h3>
                <p className="text-muted-blue text-xs md:text-sm">
                  {t.goalsSub}
                </p>
              </div>

              {/* Grid with metrics and indicators */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {GOALS_DATA.map((goal) => {
                  let badge = "";
                  let accentColor = "";
                  if (goal.id === "compliance") {
                    badge = "100%";
                    accentColor = "text-emerald-400";
                  } else if (goal.id === "waste") {
                    badge = "-30%";
                    accentColor = "text-rose-400";
                  } else if (goal.id === "talent") {
                    badge = "+40%";
                    accentColor = "text-gold";
                  } else {
                    badge = "100%";
                    accentColor = "text-sky-400";
                  }

                  return (
                    <div key={goal.id} className="neu-flat rounded-2xl p-6 border border-white/5 space-y-4 hover:border-white/10 transition-all flex flex-col justify-between">
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-gold">
                            {renderIcon(goal.icon, "w-5 h-5 text-gold")}
                          </div>
                          <span className={`text-lg font-bold font-outfit ${accentColor}`}>
                            {badge}
                          </span>
                        </div>
                        <h4 className="text-sm md:text-base font-bold text-white">
                          {lang === "ar" ? goal.titleAr : goal.titleEn}
                        </h4>
                        <p className="text-muted-blue text-xs leading-relaxed">
                          {lang === "ar" ? goal.descriptionAr : goal.descriptionEn}
                        </p>
                      </div>
                      <div className="pt-3 border-t border-white/[0.02]">
                        <span className="text-[10px] text-gold font-bold">● {lang === "ar" ? "مستهدف تشغيلي" : "Operational Target"}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 4: STRATEGIC PACKAGES (الباقات الاستراتيجية) */}
      <section id="packages" className="py-24 px-4 md:px-8 bg-navy-dark relative border-t border-white/5">
        <div className="max-w-6xl mx-auto space-y-16">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold text-gold tracking-widest uppercase font-mono block">STRATEGIC PACKAGES</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              {t.packagesTitle}
            </h2>
            <p className="text-muted-blue text-sm md:text-base">
              {t.packagesSub}
            </p>
            <div className="w-16 h-1 bg-gradient-to-r from-gold to-copper mx-auto rounded" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Packages Selection List - Col span 7 */}
            <div className="lg:col-span-7 space-y-6">
              {PACKAGES_DATA.map((pkg) => {
                const isSelected = pkg.id === selectedPackage;
                return (
                  <div
                    key={pkg.id}
                    onClick={() => setSelectedPackage(pkg.id)}
                    className={`neu-flat-light rounded-2xl p-6 border cursor-pointer transition-all duration-300 relative overflow-hidden ${
                      isSelected 
                        ? "border-gold/60 shadow-[4px_4px_16px_rgba(0,0,0,0.5)] scale-102 bg-navy-light/80" 
                        : "border-white/5 hover:border-gold/20"
                    }`}
                  >
                    {/* Selected Indicator Banner */}
                    {pkg.isPopular && (
                      <div className="absolute top-0 left-0 bg-gradient-to-r from-gold to-copper text-navy-dark text-[10px] font-bold px-4 py-1 rounded-br-xl flex items-center gap-1">
                        <Sparkles className="w-3 h-3" />
                        <span>{t.mostPopular}</span>
                      </div>
                    )}

                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div className="space-y-2">
                        <h3 className="text-lg font-bold text-white flex items-center gap-2">
                          <span className={`w-2.5 h-2.5 rounded-full ${isSelected ? "bg-gold" : "bg-muted-blue"}`} />
                          {lang === "ar" ? pkg.titleAr : pkg.titleEn}
                        </h3>
                        <p className="text-muted-blue text-xs md:text-sm leading-relaxed">
                          {lang === "ar" ? pkg.descriptionAr : pkg.descriptionEn}
                        </p>
                      </div>

                      <div className="flex-shrink-0 self-end sm:self-center">
                        <button
                          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                            isSelected 
                              ? "bg-gold text-navy-dark" 
                              : "neu-button text-muted-blue hover:text-white"
                          }`}
                        >
                          {lang === "ar" ? "عرض الأثر والمقاييس" : "View Impact"}
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* DYNAMIC NEUMORPHIC BAR CHART - Col span 5 */}
            <div className="lg:col-span-5 sticky top-28">
              <div className="neu-flat rounded-3xl p-6 border border-white/5 shadow-2xl space-y-6">
                
                {/* Chart Header */}
                <div className="space-y-1">
                  <span className="text-[10px] font-mono font-bold text-gold uppercase tracking-widest block">ANALYSIS SYSTEM</span>
                  <h4 className="text-base font-bold text-white flex items-center gap-2">
                    <BarChart3 className="w-4.5 h-4.5 text-gold" />
                    <span>{t.expectedImpactTitle}</span>
                  </h4>
                  <p className="text-[11px] text-muted-blue">
                    {lang === "ar" 
                      ? `باقة: ${selectedPkgData.titleAr}`
                      : `Selected: ${selectedPkgData.titleEn}`}
                  </p>
                </div>

                {/* Simulated Custom Bar Chart with Beautiful Transitions */}
                <div className="space-y-5 py-2">
                  {selectedPkgData.metrics.map((metric, idx) => {
                    return (
                      <div key={idx} className="space-y-2">
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-semibold text-white">
                            {lang === "ar" ? metric.labelAr : metric.labelEn}
                          </span>
                          <span className="font-mono font-bold text-gold">
                            {metric.value}%
                          </span>
                        </div>
                        
                        {/* Bar track */}
                        <div className="h-3 rounded-full bg-navy-dark border border-white/5 overflow-hidden shadow-inner relative">
                          
                          {/* Inner glowing bar */}
                          <motion.div 
                            initial={{ width: 0 }}
                            animate={{ width: `${metric.value}%` }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            style={{ backgroundColor: metric.color }}
                            className="h-full rounded-full shadow-[inset_-2px_0_4px_rgba(0,0,0,0.3)] relative"
                          >
                            {/* Accent highlight */}
                            <div className="absolute inset-y-0 right-0 w-1.5 bg-white/30 rounded-r-full" />
                          </motion.div>

                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Explanatory Footer inside Chart container */}
                <div className="p-4 rounded-xl bg-navy-light/40 border border-white/5 text-[10px] text-muted-blue flex items-start gap-2">
                  <Info className="w-4 h-4 text-copper flex-shrink-0 mt-0.5" />
                  <p>{t.impactMetricInfo}</p>
                </div>

                {/* Immediate Order CTA */}
                <button
                  onClick={() => {
                    setBookingDetails(
                      lang === "ar"
                        ? `أود الحصول على باقة: ${selectedPkgData.titleAr}`
                        : `I am interested in: ${selectedPkgData.titleEn}`
                    );
                    setIsBookingModalOpen(true);
                  }}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-gold to-copper text-navy-dark text-xs font-bold text-center flex items-center justify-center gap-2 hover:brightness-110 transition-all cursor-pointer"
                >
                  <Calculator className="w-4 h-4" />
                  <span>
                    {lang === "ar" 
                      ? `احجز استشارة لباقة: ${selectedPkgData.titleAr}`
                      : `Book consultation for: ${selectedPkgData.titleEn}`}
                  </span>
                </button>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 5: SUCCESS PARTNERS & CONTACT (شركاء النجاح والتواصل) */}
      <section id="partners-contact" className="py-24 px-4 md:px-8 relative bg-navy-light/20 border-t border-white/5">
        <div className="max-w-6xl mx-auto space-y-20">
          
          {/* Partners Sub-Section */}
          <div className="space-y-12">
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <span className="text-xs font-bold text-gold tracking-widest uppercase font-mono block">TRUSTED BY</span>
              <h2 className="text-3xl font-bold text-white">
                {t.partnersTitle}
              </h2>
              <p className="text-muted-blue text-sm md:text-base">
                {t.partnersSub}
              </p>
              <div className="w-16 h-1 bg-gradient-to-r from-gold to-copper mx-auto rounded" />
            </div>

            {/* Partners Logos Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {PARTNERS_DATA.map((partner, index) => {
                return (
                  <div key={index} className="neu-flat rounded-2xl p-6 border border-white/5 flex flex-col items-center justify-center text-center space-y-3 hover:border-gold/20 transition-all duration-300 group">
                    <div className="w-14 h-14 rounded-full bg-navy-light flex items-center justify-center border border-white/5 text-gold font-bold font-outfit text-sm group-hover:text-copper transition-colors duration-200">
                      {partner.logoText}
                    </div>
                    <div>
                      <h4 className="text-xs md:text-sm font-bold text-white group-hover:text-gold transition-colors duration-200">
                        {lang === "ar" ? partner.nameAr : partner.nameEn}
                      </h4>
                      <span className="text-[10px] text-muted-blue block">
                        {lang === "ar" ? "شريك استراتيجي" : "Strategic Partner"}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* فريق الخبراء (The Experts Team) */}
          <div className="border-t border-white/5 pt-16">
            <div className="max-w-4xl mx-auto neu-flat p-8 md:p-12 text-center relative border border-white/5 overflow-hidden rounded-3xl">
              {/* Decorative backgrounds */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-bl-full pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-copper/5 rounded-tr-full pointer-events-none" />
              
              <div className="space-y-6">
                <span className="text-xs font-bold text-gold tracking-widest uppercase font-mono block">
                  {lang === "ar" ? "نخبة الكفاءات الوطنية" : "ELITE ADVISORS"}
                </span>
                
                <h3 className="text-2xl md:text-3xl font-bold text-white flex items-center justify-center gap-3">
                  <span className="w-6 h-[2px] bg-gradient-to-r from-gold to-copper rounded hidden sm:inline" />
                  {lang === "ar" ? (
                    <>
                      فريق <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-copper">الخبراء</span>
                    </>
                  ) : (
                    <>
                      Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-copper">Experts Team</span>
                    </>
                  )}
                  <span className="w-6 h-[2px] bg-gradient-to-r from-copper to-gold rounded hidden sm:inline" />
                </h3>
                
                <p className="text-gray-300 text-sm md:text-base leading-loose max-w-3xl mx-auto font-sans">
                  {lang === "ar" ? (
                    "نضم نخبة من المستشارين والخبراء متعددي التخصصات، نجمع بين الخبرة العميقة في الأنظمة العدلية والتجارية، وبين الاحترافية في التحليل المالي، هندسة الموارد البشرية، وتطوير الأنظمة البرمجية. فريقنا يعمل بعقلية ابتكارية تضمن تقديم حلول استثنائية تفوق التوقعات."
                  ) : (
                    "We comprise an elite group of multi-disciplinary consultants, blending deep expertise in judicial and commercial systems with high professionalism in financial analysis, human resources engineering, and software systems development. Our team works with an innovative mindset that ensures delivering exceptional solutions exceeding expectations."
                  )}
                </p>

                <div className="pt-4 flex justify-center">
                  <button 
                    onClick={() => setIsBookingModalOpen(true)}
                    className="neu-button-gold text-navy-dark px-8 py-3 rounded-full text-xs font-bold hover:opacity-95 transition-all cursor-pointer shadow-md"
                  >
                    {lang === "ar" ? "طلب استشارة مباشرة" : "Book a Consultation"}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Info Grid for Footnotes */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 border-t border-white/5">
            <div className="neu-flat rounded-2xl p-6 border border-white/5 flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-gold/5 flex items-center justify-center text-gold border border-gold/10">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] text-muted-blue block">{lang === "ar" ? "البريد الإلكتروني المباشر" : "Direct Email"}</span>
                <a href="mailto:rasana2030@gmail.com" className="text-xs md:text-sm font-bold text-white hover:text-gold transition-colors">
                  rasana2030@gmail.com
                </a>
              </div>
            </div>

            <div className="neu-flat rounded-2xl p-6 border border-white/5 flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-gold/5 flex items-center justify-center text-gold border border-gold/10">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] text-muted-blue block">{lang === "ar" ? "رقم الواتساب الرسمي" : "Official WhatsApp"}</span>
                <a href="https://api.whatsapp.com/send?phone=530514632" target="_blank" rel="noreferrer" className="text-xs md:text-sm font-bold text-white hover:text-gold transition-colors">
                  +966 53 051 4632
                </a>
              </div>
            </div>

            <div className="neu-flat rounded-2xl p-6 border border-white/5 flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-gold/5 flex items-center justify-center text-gold border border-gold/10">
                <Globe className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] text-muted-blue block">{lang === "ar" ? "موقع تقديم الخدمة" : "Operational Coverage"}</span>
                <span className="text-xs md:text-sm font-bold text-white">
                  {lang === "ar" ? "الرياض، المملكة العربية السعودية" : "Riyadh, Kingdom of Saudi Arabia"}
                </span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-navy-dark py-12 px-4 md:px-8 border-t border-white/5 text-center relative overflow-hidden">
        <div className="max-w-6xl mx-auto flex flex-col items-center justify-center space-y-6">
          <a href="#hero" className="hover:opacity-95 transition-opacity">
            <div className="flex items-center gap-3 md:gap-3.5 group cursor-pointer">
              {/* Text on left */}
              <div className="flex flex-col text-right select-none">
                <span className="font-tajawal font-extrabold text-xl md:text-2xl leading-none text-white tracking-wide">
                  رَصَانَة
                </span>
                <span className="font-outfit font-bold text-[9px] md:text-[10px] text-gold tracking-[0.25em] mt-1.5 leading-none uppercase">
                  RASANA
                </span>
              </div>
              
              {/* Icon on right */}
              <div className="w-11 h-11 md:w-12 md:h-12 rounded-2xl bg-navy-dark/60 border border-white/10 flex items-center justify-center shadow-md relative group-hover:border-gold/30 transition-all duration-300">
                <svg 
                  className="w-6 h-6 md:w-6.5 md:h-6.5 text-gold stroke-[2]" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  {/* Shield */}
                  <path d="M12 3 L19 5 v6 c0 4.5 -3.5 8.5 -7 10 c-3.5 -1.5 -7 -5.5 -7 -10 V5 Z" />
                  {/* Upward Arrow */}
                  <path d="M12 16 V8" />
                  <path d="M9 11 l3-3 3 3" />
                </svg>
              </div>
            </div>
          </a>
          <p className="text-muted-blue text-xs max-w-md leading-relaxed">
            {t.sloganFooter} {lang === "ar" ? "استشارات إدارية وقانونية وذكاء اصطناعي للارتقاء بأداء المنشآت الوطنية نحو رؤية المملكة ٢٠٣٠." : "Management, governance, and technology consulting empowering Saudi vision 2030."}
          </p>
          <div className="text-[11px] text-muted-blue/60 pt-4 border-t border-white/[0.03] w-full">
            {t.legalRights}
          </div>
        </div>
      </footer>

      {/* Booking Modal */}
      <AnimatePresence>
        {isBookingModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-navy-dark/80 backdrop-blur-sm px-4"
          >
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              className={`neu-flat w-full ${bookingSuccess ? "max-w-lg" : "max-w-4xl"} p-6 md:p-8 relative max-h-[95vh] lg:max-h-[90vh] overflow-y-auto border border-gold/20 shadow-2xl rounded-3xl`}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button 
                onClick={() => {
                  setIsBookingModalOpen(false);
                  setBookingSuccess(false);
                }} 
                className="absolute top-6 left-6 w-8 h-8 rounded-full flex items-center justify-center text-muted-blue hover:text-gold transition-colors border border-white/5 bg-navy-dark shadow-md cursor-pointer z-10"
              >
                ✕
              </button>
              
              {!bookingSuccess ? (
                <>
                  <h3 className="text-2xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-gold to-copper">
                    {lang === "ar" ? "احجز موعد استشارتك" : "Book Your Consultation"}
                  </h3>
                  <p className="text-muted-blue text-sm mb-6">
                    {lang === "ar" 
                      ? "يمكنكم حجز موعد عبر الموقع الإلكتروني، حيث سيقوم فريقنا بترتيب الدعم اللازم."
                      : "You can book an appointment via our platform, and our team will arrange the required support."}
                  </p>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    
                    {/* Main Form Block */}
                    <div className="lg:col-span-7 space-y-5">
                      {/* Tags */}
                      <div className="flex flex-wrap gap-2.5 mb-2 border-b border-white/5 pb-4">
                        <span className="bg-navy-dark px-3 py-1.5 rounded-full text-[11px] font-bold text-white flex items-center gap-1.5 border border-white/5">
                          ⏱️ <span>{lang === "ar" ? "30 دقيقة" : "30 Mins"}</span>
                        </span>
                        <span className="bg-navy-dark px-3 py-1.5 rounded-full text-[11px] font-bold text-white flex items-center gap-1.5 border border-white/5">
                          📹 <span>{lang === "ar" ? "جوجل ميت" : "Google Meet"}</span>
                        </span>
                        <span className="bg-navy-dark px-3 py-1.5 rounded-full text-[11px] font-bold text-white flex items-center gap-1.5 border border-white/5">
                          💎 <span>{lang === "ar" ? "مجاني" : "Free"}</span>
                        </span>
                      </div>

                      <form onSubmit={handleBookingSubmit} className="space-y-4 text-right" style={{ textAlign: lang === "ar" ? "right" : "left" }}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs font-bold text-white mb-1">
                              {lang === "ar" ? "الاسم *" : "Name *"}
                            </label>
                            <input 
                              type="text" 
                              required 
                              value={bookingName}
                              onChange={(e) => setBookingName(e.target.value)}
                              className="w-full px-4 py-3 rounded-xl bg-navy-dark border border-white/5 focus:border-gold text-sm text-white focus:outline-none"
                              placeholder={lang === "ar" ? "الاسم الكريم" : "Your full name"}
                            />
                          </div>
                          <div>
                            <label className="block text-xs font-bold text-white mb-1">
                              {lang === "ar" ? "اسم الشركة (اختياري)" : "Company Name (Optional)"}
                            </label>
                            <input 
                              type="text" 
                              value={bookingCompany}
                              onChange={(e) => setBookingCompany(e.target.value)}
                              className="w-full px-4 py-3 rounded-xl bg-navy-dark border border-white/5 focus:border-gold text-sm text-white focus:outline-none"
                              placeholder={lang === "ar" ? "اسم شركتك" : "Company name"}
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs font-bold text-white mb-1">
                              {lang === "ar" ? "رقم الجوال *" : "Phone Number *"}
                            </label>
                            <input 
                              type="tel" 
                              required 
                              value={bookingPhone}
                              onChange={(e) => setBookingPhone(e.target.value)}
                              className="w-full px-4 py-3 rounded-xl bg-navy-dark border border-white/5 focus:border-gold text-sm text-white focus:outline-none"
                              placeholder="05xxxxxxxx"
                            />
                          </div>
                          <div>
                            <label className="block text-xs font-bold text-white mb-1">
                              {lang === "ar" ? "البريد الإلكتروني (اختياري)" : "Email Address (Optional)"}
                            </label>
                            <input 
                              type="email" 
                              value={bookingEmail}
                              onChange={(e) => setBookingEmail(e.target.value)}
                              className="w-full px-4 py-3 rounded-xl bg-navy-dark border border-white/5 focus:border-gold text-sm text-white focus:outline-none"
                              placeholder="email@domain.com"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="md:col-span-2">
                            <label className="block text-xs font-bold text-white mb-1">
                              {lang === "ar" ? "تاريخ الموعد *" : "Date *"}
                            </label>
                            <input 
                              type="date" 
                              required 
                              value={bookingDate}
                              onChange={(e) => handleDateChange(e.target.value)}
                              className="w-full px-4 py-3 rounded-xl bg-navy-dark border border-white/5 focus:border-gold text-sm text-white focus:outline-none [color-scheme:dark]"
                            />
                            {dateError && (
                              <p className="text-red-400 text-[10px] mt-1 leading-relaxed">
                                {lang === "ar" 
                                  ? "نعتذر، المواعيد متاحة من الأحد للخميس فقط."
                                  : "Sorry, sessions are available Sunday to Thursday only."}
                              </p>
                            )}
                          </div>
                        </div>

                        {/* Available Slots Grid */}
                        <div className="space-y-2">
                          <label className="block text-xs font-bold text-white mb-1">
                            {lang === "ar" ? "الوقت المتاح (مساءً) *" : "Available Time (PM) *"}
                          </label>
                          {!bookingDate ? (
                            <div className="p-4 text-center rounded-xl bg-navy-dark/40 border border-white/5 text-xs text-muted-blue leading-relaxed">
                              {lang === "ar" ? "يرجى تحديد تاريخ من المخطط أو إدخاله يدوياً لعرض الأوقات المتاحة" : "Please select a date from the explorer or enter it manually to view available times"}
                            </div>
                          ) : (
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                              {AVAILABLE_SLOTS.map((slot) => {
                                const booked = isSlotBooked(bookingDate, slot);
                                const isSelected = bookingTime === slot;
                                
                                return (
                                  <button
                                    key={slot}
                                    type="button"
                                    disabled={booked}
                                    onClick={() => setBookingTime(slot)}
                                    className={`py-3 px-2 rounded-xl text-xs font-bold transition-all border flex flex-col items-center justify-center gap-1 cursor-pointer ${
                                      booked
                                        ? "bg-red-500/10 border-red-500/20 text-red-400 cursor-not-allowed opacity-60"
                                        : isSelected
                                        ? "bg-gradient-to-r from-gold to-copper border-gold text-navy-dark shadow-md"
                                        : "bg-navy-dark border-white/5 text-gray-300 hover:border-gold/50"
                                    }`}
                                  >
                                    <span className="font-mono text-sm">
                                      {slot === "19:00" ? "7:00 PM" : slot === "19:30" ? "7:30 PM" : slot === "20:00" ? "8:00 PM" : "8:30 PM"}
                                    </span>
                                    <span className="text-[10px] font-sans">
                                      {booked 
                                        ? (lang === "ar" ? "مشغول 🔴" : "Busy 🔴") 
                                        : (lang === "ar" ? "متاح 🟢" : "Available 🟢")}
                                    </span>
                                  </button>
                                );
                              })}
                            </div>
                          )}
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-white mb-1">
                            {lang === "ar" ? "تفاصيل الطلب باختصار (اختياري)" : "Brief Details (Optional)"}
                          </label>
                          <textarea 
                            rows={2} 
                            value={bookingDetails}
                            onChange={(e) => setBookingDetails(e.target.value)}
                            className="w-full px-4 py-3 rounded-xl bg-navy-dark border border-white/5 focus:border-gold text-sm text-white focus:outline-none"
                            placeholder={lang === "ar" ? "اكتب نبذة عن استشارتك..." : "Write a brief about your inquiry..."}
                          />
                        </div>

                        <div className="pt-4">
                          <button 
                            type="submit" 
                            disabled={isSubmitting || !bookingTime || !bookingDate}
                            className={`w-full py-3.5 rounded-xl bg-gradient-to-r from-gold to-copper text-navy-dark text-sm font-bold flex justify-center items-center gap-2 hover:opacity-95 transition-all shadow-md cursor-pointer ${
                              (!bookingTime || !bookingDate) ? "opacity-50 cursor-not-allowed" : ""
                            }`}
                          >
                            {isSubmitting ? (
                              <div className="w-5 h-5 border-2 border-navy-dark border-t-transparent rounded-full animate-spin" />
                            ) : (
                              <span>{lang === "ar" ? "تأكيد حجز الموعد" : "Confirm Appointment"}</span>
                            )}
                          </button>
                        </div>
                      </form>
                    </div>

                    {/* Schedule Explorer Sidebar */}
                    <div className="lg:col-span-5 border-t lg:border-t-0 lg:border-l border-white/5 pt-6 lg:pt-0 lg:pl-6 flex flex-col space-y-4" style={{ direction: lang === "ar" ? "rtl" : "ltr" }}>
                      <div className="flex items-center justify-between">
                        <div className="space-y-1 text-right" style={{ textAlign: lang === "ar" ? "right" : "left" }}>
                          <h4 className="text-sm font-bold text-gold flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-gold" />
                            <span>{lang === "ar" ? "مستكشف المواعيد الذكي" : "Smart Schedule Explorer"}</span>
                          </h4>
                          <p className="text-[11px] text-muted-blue">
                            {lang === "ar" ? "اضغط على أي يوم لتحديده وتعديل أوقاته" : "Click on any day to select it"}
                          </p>
                        </div>
                        <button
                          type="button"
                          onClick={fetchBookings}
                          disabled={isLoadingBookings}
                          className="p-2 rounded-lg bg-navy-dark border border-white/5 text-muted-blue hover:text-gold hover:border-gold/30 transition-all cursor-pointer"
                          title={lang === "ar" ? "تحديث جدول المواعيد" : "Refresh Schedule"}
                        >
                          <RefreshCw className={`w-3.5 h-3.5 ${isLoadingBookings ? "animate-spin" : ""}`} />
                        </button>
                      </div>

                      <div className="space-y-2.5 overflow-y-auto max-h-[350px] pr-1 scrollbar-thin">
                        {getNextBusinessDays().map((day) => {
                          const dateStr = formatDateISO(day);
                          const isSelected = bookingDate === dateStr;
                          
                          // Calculate booked slots
                          const bookedCount = AVAILABLE_SLOTS.filter(slot => isSlotBooked(dateStr, slot)).length;
                          const vacantCount = 4 - bookedCount;
                          
                          return (
                            <button
                              key={dateStr}
                              type="button"
                              onClick={() => {
                                setBookingDate(dateStr);
                                setDateError(false);
                              }}
                              className={`w-full p-3.5 rounded-2xl text-right flex items-center justify-between border transition-all cursor-pointer ${
                                isSelected
                                  ? "bg-gold/10 border-gold/60 text-white"
                                  : "bg-navy-dark border-white/5 text-gray-300 hover:border-gold/30"
                              }`}
                            >
                              {/* Left side: slot indicators */}
                              <div className="flex items-center gap-3">
                                <div className="flex gap-1">
                                  {AVAILABLE_SLOTS.map((slot) => {
                                    const booked = isSlotBooked(dateStr, slot);
                                    return (
                                      <span 
                                        key={slot}
                                        className={`w-2 h-2 rounded-full ${
                                          booked ? "bg-red-500" : "bg-emerald-500"
                                        }`}
                                        title={`${slot === "19:00" ? "7:00 PM" : slot === "19:30" ? "7:30 PM" : slot === "20:00" ? "8:00 PM" : "8:30 PM"} : ${booked ? (lang === "ar" ? "مشغول" : "Busy") : (lang === "ar" ? "شاغر" : "Available")}`}
                                      />
                                    );
                                  })}
                                </div>
                                <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
                                  vacantCount === 0 
                                    ? "bg-red-500/10 text-red-400 border border-red-500/20" 
                                    : vacantCount === 4
                                    ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                                    : "bg-amber-500/10 text-amber-400 border border-amber-500/20"
                                }`}>
                                  {vacantCount === 0 
                                    ? (lang === "ar" ? "مكتمل 🔴" : "Full 🔴") 
                                    : (lang === "ar" ? `${vacantCount} شاغر 🟢` : `${vacantCount} Vacant 🟢`)}
                                </span>
                              </div>

                              {/* Right side: Day information */}
                              <div className="text-right space-y-0.5">
                                <span className="text-xs font-bold block text-white">
                                  {getDayName(day, lang)}
                                </span>
                                <span className="text-[10px] text-muted-blue block">
                                  {getFormattedDateLabel(day, lang)}
                                </span>
                              </div>
                            </button>
                          );
                        })}
                      </div>

                      {/* Quick legend info */}
                      <div className="p-3 rounded-xl bg-navy-dark/40 border border-white/5 flex items-center justify-between text-[10px] text-muted-blue">
                        <span className="flex items-center gap-1">
                          <span className="w-2 h-2 rounded-full bg-emerald-500" />
                          <span>{lang === "ar" ? "موعد شاغر" : "Vacant Slot"}</span>
                        </span>
                        <span className="flex items-center gap-1">
                          <span className="w-2 h-2 rounded-full bg-red-500" />
                          <span>{lang === "ar" ? "موعد مشغول" : "Busy Slot"}</span>
                        </span>
                        <span className="text-gold/80 font-semibold">
                          {lang === "ar" ? "مزامنة فورية" : "Realtime Sync"}
                        </span>
                      </div>
                    </div>

                  </div>
                </>
              ) : (
                <div className="text-center space-y-6 py-8">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center text-emerald-400 text-3xl mx-auto">
                    ✓
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-emerald-400">
                      {lang === "ar" ? "تم تأكيد طلب الحجز بنجاح!" : "Appointment Confirmed Successfully!"}
                    </h3>
                    <p className="text-muted-blue text-xs md:text-sm leading-relaxed max-w-sm mx-auto">
                      {lang === "ar" 
                        ? "لقد قمنا بتسجيل طلب حجز موعدك المبدئي بنجاح. لإكمال المزامنة والتأكيد الفوري مع مستشاري رصانة، يرجى تفعيل الروابط التالية:"
                        : "We have successfully registered your booking request. To complete direct calendar sync and advisory setup, please click the links below:"}
                    </p>
                  </div>

                  {/* Calendar & Email Quick Actions */}
                  <div className="space-y-3 pt-4">
                    <button
                      onClick={() => {
                        const cleanDate = bookingDate.replace(/-/g, "");
                        const cleanTime = bookingTime.replace(/:/g, "") + "00";
                        const startDateTime = `${cleanDate}T${cleanTime}`;
                        let endHour = parseInt(bookingTime.split(":")[0]);
                        let endMin = parseInt(bookingTime.split(":")[1]) + 30;
                        if (endMin >= 60) {
                          endMin = endMin - 60;
                          endHour = endHour + 1;
                        }
                        const endHourStr = String(endHour).padStart(2, "0");
                        const endMinStr = String(endMin).padStart(2, "0");
                        const endDateTime = `${cleanDate}T${endHourStr}${endMinStr}00`;

                        const calendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
                          lang === "ar" ? "استشارة رصانة الاستراتيجية" : "Rasana Strategic Consultation"
                        )}&dates=${startDateTime}/${endDateTime}&ctz=Asia/Riyadh&details=${encodeURIComponent(
                          `طلب الاستشارة المقدم عبر رصانة:\n- الاسم: ${bookingName}\n- الجوال: ${bookingPhone}\n- الشركة: ${bookingCompany || "لا يوجد"}\n- التفاصيل: ${bookingDetails || "لا يوجد"}`
                        )}`;
                        window.open(calendarUrl, "_blank");
                      }}
                      className="w-full py-3 rounded-xl bg-blue-500 hover:bg-blue-600 text-white text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md"
                    >
                      📅 <span>{lang === "ar" ? "أضف الموعد إلى تقويم Google" : "Add to Google Calendar"}</span>
                    </button>

                    <button
                      onClick={() => {
                        const mailtoUrl = `mailto:rasana2030@gmail.com?subject=${encodeURIComponent(
                          lang === "ar" ? `طلب حجز موعد استشارة - ${bookingName}` : `Consultation Booking Confirmation - ${bookingName}`
                        )}&body=${encodeURIComponent(
                          `الاسم: ${bookingName}\nالشركة: ${bookingCompany || "لا يوجد"}\nالجوال: ${bookingPhone}\nالبريد الإلكتروني: ${bookingEmail || "لا يوجد"}\nالتاريخ: ${bookingDate}\nالوقت: ${bookingTime}\nالتفاصيل: ${bookingDetails || "لا يوجد"}`
                        )}`;
                        window.open(mailtoUrl, "_blank");
                      }}
                      className="w-full py-3 rounded-xl bg-navy-light hover:bg-opacity-80 text-white text-xs font-bold flex items-center justify-center gap-2 transition-all border border-white/5 cursor-pointer"
                    >
                      ✉️ <span>{lang === "ar" ? "إرسال تأكيد بالبريد الإلكتروني" : "Send Confirmation Email"}</span>
                    </button>

                    <button
                      onClick={() => {
                        setIsBookingModalOpen(false);
                        setBookingSuccess(false);
                      }}
                      className="w-full py-2.5 rounded-xl text-xs font-semibold text-muted-blue hover:text-white transition-colors cursor-pointer"
                    >
                      {lang === "ar" ? "إغلاق النافذة" : "Close"}
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      </div> {/* End of app-main-layout */}
    </div>
  );
}
