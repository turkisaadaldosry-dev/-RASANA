import React from "react";
import { 
  X, 
  BookOpen
} from "lucide-react";

interface CompanyProfileProps {
  isOpen: boolean;
  onClose: () => void;
  lang: "ar" | "en";
}

export default function CompanyProfile({ isOpen, onClose, lang }: CompanyProfileProps) {
  // Shared component for Page 1: Cover
  const CoverPage = () => (
    <div className="a4-page p-8 md:p-12 relative flex flex-col justify-between items-center bg-[#141a2e] text-center overflow-hidden border border-white/5">
      <div className="absolute top-0 inset-x-0 h-3 bg-gradient-to-l from-[#141a2e] via-[#bb984c] to-[#bf652d] z-10" />
      <div className="absolute bottom-0 inset-x-0 h-3 bg-gradient-to-l from-[#141a2e] via-[#bb984c] to-[#bf652d] z-10" />

      {/* Background pattern grid */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{
        backgroundImage: `linear-gradient(#bb984c 1px, transparent 1px), linear-gradient(to right, #bb984c 1px, transparent 1px)`,
        backgroundSize: '40px 40px'
      }} />

      {/* Logo emblem */}
      <div className="my-auto flex flex-col items-center justify-center relative z-10 space-y-10">
        <div className="w-40 h-40 rounded-full bg-[#141a2e] border-2 border-[#bb984c]/40 flex items-center justify-center shadow-[0_0_50px_rgba(187,152,76,0.15)] relative">
          <svg viewBox="0 0 24 24" fill="none" stroke="#bb984c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-20 h-20 text-gold">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            <path d="M12 16V8" />
            <path d="M8 12l4-4 4 4" />
          </svg>
        </div>

        <div className="space-y-3">
          <h1 className="text-5xl font-black text-white tracking-wide font-tajawal">
            رَصَانَة
          </h1>
          <h2 className="text-xl font-bold tracking-[0.4em] text-[#bb984c] font-outfit uppercase">
            RASANA
          </h2>
        </div>

        <div className="w-20 h-1 bg-[#bf652d] rounded-full mx-auto" />

        <div className="space-y-2">
          <h3 className="text-2xl md:text-3xl font-bold text-white font-tajawal">
            {lang === "ar" ? "الملف التعريفي الشامل" : "Corporate Profile"}
          </h3>
          <p className="text-xs tracking-widest text-gray-400 font-outfit uppercase">
            Management & Digital Governance Advisory
          </p>
        </div>
      </div>

      <div className="w-full flex justify-between items-center border-t border-white/10 pt-6 relative z-10 text-xs text-gray-400 font-semibold">
        <span>{lang === "ar" ? "إصدار ٢٠٢٦" : "2026 Edition"}</span>
        <span>RASANA CONSULTING</span>
      </div>
    </div>
  );

  // Shared component for Page 2: About Us
  const AboutPage = () => (
    <div className="a4-page p-8 md:p-12 relative flex flex-col justify-between bg-[#141a2e] text-right overflow-hidden border border-white/5" dir="rtl">
      <div className="absolute top-0 inset-x-0 h-3 bg-gradient-to-l from-[#141a2e] via-[#bb984c] to-[#bf652d] z-10" />
      
      <header className="flex justify-between items-center border-b border-white/10 pb-4 mb-8">
        <div className="flex items-center gap-2">
          <span className="font-bold text-white text-xs font-tajawal">رصانة للاستشارات</span>
        </div>
        <span className="text-gold font-bold text-xs tracking-wider">01 / من نحن</span>
      </header>

      <div className="my-auto space-y-8 relative z-10">
        <div className="space-y-4 font-tajawal">
          <h3 className="text-2xl md:text-3xl font-black text-white flex items-center gap-3">
            <span className="w-9 h-9 rounded-lg bg-[#bf652d]/10 border border-[#bf652d]/20 flex items-center justify-center text-[#bf652d]">
              ✦
            </span>
            نحن رصانة
          </h3>
          <p className="text-gray-200 text-base leading-loose text-justify font-tajawal">
            رصانة هي كيان استشاري وتنفيذي وطني متكامل، متخصص في تحسين كفاءة المنشآت الصغيرة والمتوسطة ووضع الأطر التنظيمية المستقرة. نمتلك شراكات مميزة وخبرات عميقة في صياغة لوائح الحوكمة، هندسة وتطوير العمليات الإدارية والموارد البشرية، والتحول الرقمي المدعوم بأدوات الذكاء الاصطناعي لتطوير أداء المنشآت الوطنية.
          </p>
          <p className="text-gray-400 text-sm leading-relaxed text-justify font-tajawal">
            نعمل في رصانة على ترجمة احتياجات عملائنا إلى حلول عملية مستدامة تدعم تطلعاتهم نحو النمو والتميز التشغيلي، وتقليل الهدر الإداري والمالي لتعظيم القيمة المضافة ومواكبة رؤية المملكة ٢٠٣٠.
          </p>
        </div>

        {/* Philosophy block */}
        <div className="bg-[#141a2e] border-r-4 border-[#bb984c] bg-gradient-to-l from-[#bb984c]/5 to-transparent rounded-l-xl p-6 space-y-2 shadow-inner">
          <span className="text-3xl text-[#bb984c] font-serif leading-none">“</span>
          <p className="text-white italic text-sm md:text-base leading-relaxed -mt-4 font-tajawal">
            "نجاح الأعمال لا يعتمد على الجهد فقط، بل يستند إلى مسار واضح، وإجراءات فعالة، وتقنيات ذكية تدعم اتخاذ القرار وتصنع فارقاً مستداماً."
          </p>
          <span className="text-xs text-[#bb984c] font-bold block text-left font-tajawal">— الفلسفة التشغيلية لرصانة</span>
        </div>
      </div>

      <div className="text-center pt-8 border-t border-white/5">
        <h4 className="text-xl md:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-l from-[#bb984c] to-[#bf652d] font-tajawal">
          "نحول التحديات إلى حلول ذكية"
        </h4>
      </div>
    </div>
  );

  // Shared component for Page 3: Strategic Direction
  const StrategyPage = () => (
    <div className="a4-page p-8 md:p-12 relative flex flex-col justify-between bg-[#141a2e] text-right overflow-hidden border border-white/5" dir="rtl">
      <div className="absolute top-0 inset-x-0 h-3 bg-gradient-to-l from-[#141a2e] via-[#bb984c] to-[#bf652d] z-10" />
      
      <header className="flex justify-between items-center border-b border-white/10 pb-4 mb-8">
        <div className="flex items-center gap-2">
          <span className="font-bold text-white text-xs font-tajawal">رصانة للاستشارات</span>
        </div>
        <span className="text-gold font-bold text-xs tracking-wider">02 / التوجه الاستراتيجي</span>
      </header>

      <div className="my-auto space-y-8 relative z-10">
        {/* Vision & Mission grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#1d2542]/40 rounded-xl p-6 border border-white/5 space-y-3 shadow-md">
            <div className="text-[#bb984c] font-bold flex items-center gap-2">
              <span>👁️</span>
              <h4 className="text-base font-bold text-[#bb984c] font-tajawal">{lang === "ar" ? "الرؤية الاستراتيجية" : "Our Vision"}</h4>
            </div>
            <p className="text-xs md:text-sm text-gray-200 leading-relaxed font-tajawal">
              أن نكون الكيان الاستشاري والمنفذ المفضل للمنشآت الإدارية والخدمية في المملكة في التحول الذكي والتميز الحقيقي بتقديم حلول مرنة ملموسة الأثر.
            </p>
          </div>

          <div className="bg-[#1d2542]/40 rounded-xl p-6 border border-white/5 space-y-3 shadow-md">
            <div className="text-[#bf652d] font-bold flex items-center gap-2">
              <span>🎯</span>
              <h4 className="text-base font-bold text-[#bf652d] font-tajawal">{lang === "ar" ? "الرسالة السامية" : "Our Mission"}</h4>
            </div>
            <p className="text-xs md:text-sm text-gray-200 leading-relaxed font-tajawal">
              مساعدة المنشآت على بناء أنظمة داخلية بالغة الاستقرار والكفاءة عبر دمج الممارسات التنظيمية المتكاملة مع الأنظمة الذكية الحديثة.
            </p>
          </div>
        </div>

        {/* Values System */}
        <div className="bg-[#141a2e] border border-white/5 rounded-xl p-6 space-y-4">
          <h4 className="text-base font-bold text-white border-b border-white/5 pb-2 font-tajawal">
            🌟 قيمنا الجوهرية (ميزان رصانة)
          </h4>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-tajawal">
            <div className="space-y-1">
              <span className="font-bold text-[#bb984c]">البساطة</span>
              <p className="text-gray-400 font-tajawal">تحويل الإجراءات المعقدة إلى مسارات ميسرة وواضحة.</p>
            </div>
            <div className="space-y-1">
              <span className="font-bold text-[#bb984c]">الشراكة</span>
              <p className="text-gray-400 font-tajawal">نلتزم بنجاح عملائنا كشركاء عمل حقيقيين في مسار البناء.</p>
            </div>
            <div className="space-y-1">
              <span className="font-bold text-[#bb984c]">الابتكار</span>
              <p className="text-gray-400 font-tajawal">تبني وتطوير التقنيات السحابية والحلول الذكية والذكاء الاصطناعي.</p>
            </div>
            <div className="space-y-1">
              <span className="font-bold text-[#bb984c]">الموثوقية</span>
              <p className="text-gray-400 font-tajawal">تقديم استشارات دقيقة مدعومة بأطر قانونية وحوكمة ممتثلة.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-1" />
    </div>
  );

  // Shared component for Page 4: Services
  const ServicesPage = () => (
    <div className="a4-page p-8 md:p-12 relative flex flex-col justify-between bg-[#141a2e] text-right overflow-hidden border border-white/5" dir="rtl">
      <div className="absolute top-0 inset-x-0 h-3 bg-gradient-to-l from-[#141a2e] via-[#bb984c] to-[#bf652d] z-10" />
      
      <header className="flex justify-between items-center border-b border-white/10 pb-4 mb-6">
        <div className="flex items-center gap-2">
          <span className="font-bold text-white text-xs font-tajawal">رصانة للاستشارات</span>
        </div>
        <span className="text-gold font-bold text-xs tracking-wider">03 / خدماتنا الشاملة</span>
      </header>

      <div className="my-auto space-y-6 relative z-10">
        <h3 className="text-xl font-black text-white font-tajawal">خدماتنا الاستشارية والتنفيذية المتكاملة:</h3>
        
        <div className="grid grid-cols-2 gap-4 text-xs md:text-sm font-tajawal">
          <div className="bg-[#1d2542]/35 p-4 rounded-xl border border-white/5 space-y-1.5">
            <h4 className="font-bold text-[#bb984c]">⚙️ التميز التشغيلي</h4>
            <p className="text-[11px] text-gray-400 leading-relaxed">إعادة هندسة الإجراءات وسلاسل القيمة للقضاء على الهدر والازدواجية.</p>
          </div>
          <div className="bg-[#1d2542]/35 p-4 rounded-xl border border-white/5 space-y-1.5">
            <h4 className="font-bold text-[#bb984c]">⚖️ الحوكمة والامتثال</h4>
            <p className="text-[11px] text-gray-400 leading-relaxed">صياغة اللوائح الأساسية وحوكمة الصلاحيات لضمان أمن المنشأة التجاري والقانوني.</p>
          </div>
          <div className="bg-[#1d2542]/35 p-4 rounded-xl border border-white/5 space-y-1.5">
            <h4 className="font-bold text-[#bb984c]">👥 الموارد البشرية</h4>
            <p className="text-[11px] text-gray-400 leading-relaxed">تطوير الهياكل التنظيمية، صياغة لوائح العمل، وبناء مؤشرات تقييم الأداء المتزنة.</p>
          </div>
          <div className="bg-[#1d2542]/35 p-4 rounded-xl border border-white/5 space-y-1.5">
            <h4 className="font-bold text-[#bb984c]">💻 التحول الرقمي</h4>
            <p className="text-[11px] text-gray-400 leading-relaxed">أتمتة العمليات وتتصميم وبناء لوحات تحكم ديناميكية ذكية لربط الإدارات سحابياً.</p>
          </div>
          <div className="bg-[#1d2542]/35 p-4 rounded-xl border border-white/5 space-y-1.5">
            <h4 className="font-bold text-[#bb984c]">🧠 الذكاء الاصطناعي</h4>
            <p className="text-[11px] text-gray-400 leading-relaxed">دمج حلول الذكاء الاصطناعي والتحليل التنبئي للمساهمة في دعم اتخاذ القرارات.</p>
          </div>
          <div className="bg-[#1d2542]/35 p-4 rounded-xl border border-white/5 space-y-1.5">
            <h4 className="font-bold text-[#bb984c]">📄 استشارات قانونية</h4>
            <p className="text-[11px] text-gray-400 leading-relaxed">صياغة وتدقيق العقود التجارية وصحائف الامتثال لحماية الموقف القانوني للمنشأة.</p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-[#bb984c]/10 to-transparent p-4 rounded-xl border border-[#bb984c]/20 text-[11px] text-gray-300 font-tajawal">
          <span className="font-bold text-white block mb-1">🎯 الأثر الملموس للخدمات:</span>
          تقليص التكاليف التشغيلية بنسبة تصل لـ ٢٠٪، تحسين كفاءة الموارد البشرية، وحماية تامة ضد المخاطر النظامية والقانونية.
        </div>
      </div>

      <div className="w-full h-1" />
    </div>
  );

  // Shared component for Page 5: Packages
  const PackagesPage = () => (
    <div className="a4-page p-8 md:p-12 relative flex flex-col justify-between bg-[#141a2e] text-right overflow-hidden border border-white/5" dir="rtl">
      <div className="absolute top-0 inset-x-0 h-3 bg-gradient-to-l from-[#141a2e] via-[#bb984c] to-[#bf652d] z-10" />
      
      <header className="flex justify-between items-center border-b border-white/10 pb-4 mb-8">
        <div className="flex items-center gap-2">
          <span className="font-bold text-white text-xs font-tajawal">رصانة للاستشارات</span>
        </div>
        <span className="text-gold font-bold text-xs tracking-wider">04 / الباقات الاستراتيجية</span>
      </header>

      <div className="my-auto space-y-6 relative z-10">
        <h3 className="text-xl font-black text-white font-tajawal">باقات صُممت لتناسب نمو وتطلعات منشأتك:</h3>
        
        <div className="grid grid-cols-2 gap-4 text-[11px] md:text-xs font-tajawal">
          <div className="bg-[#141a2e] p-5 rounded-xl border border-white/5 space-y-2">
            <h4 className="font-bold text-white text-sm">١. باقة التأسيس</h4>
            <p className="text-[#bf652d] font-semibold">للمنشآت الناشئة (Startups)</p>
            <p className="text-gray-400 leading-relaxed">لوضع الهياكل الإدارية، القانونية، والتقنية الأساسية للانطلاق بثقة واستقرار تام.</p>
          </div>

          <div className="bg-[#141a2e] p-5 rounded-xl border border-white/5 space-y-2">
            <h4 className="font-bold text-white text-sm">٢. باقة التنظيم</h4>
            <p className="text-[#bf652d] font-semibold">للمنشآت القائمة (SMEs)</p>
            <p className="text-gray-400 leading-relaxed">إعادة هيكلة وتطوير وتطبيق لوائح الحوكمة وسياسات الموارد البشرية والامتثال.</p>
          </div>

          <div className="bg-[#141a2e] p-5 rounded-xl border border-[#bb984c] relative overflow-hidden space-y-2">
            <div className="absolute top-0 left-0 bg-[#bb984c] text-navy-dark text-[8px] px-2 py-0.5 font-bold rounded-br-lg">موصى بها</div>
            <h4 className="font-bold text-[#bb984c] text-sm font-tajawal">٣. التحول الذكي</h4>
            <p className="text-white font-semibold">للمستقبل والتميز</p>
            <p className="text-gray-300 leading-relaxed">نقل العمليات التقليدية لبيئة مؤتمتة رقمية بالكامل بالاعتماد على الأنظمة السحابية المتقدمة والذكاء الاصطناعي.</p>
          </div>

          <div className="bg-[#141a2e] p-5 rounded-xl border border-white/5 space-y-2">
            <h4 className="font-bold text-white text-sm">٤. الشريك التشغيلي</h4>
            <p className="text-[#bf652d] font-semibold">شراكة طويلة الأمد</p>
            <p className="text-gray-400 leading-relaxed">دعم استشاري دائم يشمل الإشراف الفني على العمليات، الموارد البشرية، الحوكمة، وتخفيض الهدر.</p>
          </div>
        </div>
      </div>

      <div className="w-full h-1" />
    </div>
  );

  // Shared component for Page 6: Partners & Contact
  const PartnersPage = () => (
    <div className="a4-page p-8 md:p-12 relative flex flex-col justify-between bg-[#141a2e] text-right overflow-hidden border border-white/5" dir="rtl">
      <div className="absolute top-0 inset-x-0 h-3 bg-gradient-to-l from-[#141a2e] via-[#bb984c] to-[#bf652d] z-10" />
      
      <header className="flex justify-between items-center border-b border-white/10 pb-4 mb-6">
        <div className="flex items-center gap-2">
          <span className="font-bold text-white text-xs font-tajawal">رصانة للاستشارات</span>
        </div>
        <span className="text-gold font-bold text-xs tracking-wider">05 / شركاؤنا والتواصل</span>
      </header>

      <div className="my-auto space-y-6 relative z-10">
        <div>
          <h4 className="text-sm font-bold text-gray-400 tracking-wider mb-3 font-tajawal">🤝 نعتز بشراكتنا الاستراتيجية مع:</h4>
          <div className="grid grid-cols-2 gap-3 text-xs text-center font-bold font-tajawal">
            <div className="bg-[#1d2542]/30 p-3 rounded-lg border border-white/5 text-gray-200">AFA وشركاؤه للاستشارات</div>
            <div className="bg-[#1d2542]/30 p-3 rounded-lg border border-white/5 text-gray-200">هامات الرائدة العقارية</div>
            <div className="bg-[#1d2542]/30 p-3 rounded-lg border border-white/5 text-gray-200 font-outfit">Golden Tulip Hotels</div>
            <div className="bg-[#1d2542]/30 p-3 rounded-lg border border-white/5 text-gray-200 font-tajawal">الخليجي الطبية القابضة</div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-6 text-center space-y-4 font-tajawal">
          <h3 className="text-lg md:text-xl font-black text-white">تواصل معنا الآن لبدء مسار النمو</h3>
          <p className="text-xs text-gray-400 max-w-sm mx-auto">شريكك الوطني الموثوق لبناء الأعمال المستدامة وقيادة التحول التشغيلي الممتثل.</p>
          
          <div className="flex justify-center gap-6 pt-2 text-xs font-bold">
            <div className="space-y-1">
              <span className="text-gray-400 block font-normal">البريد الإلكتروني:</span>
              <span className="text-white font-outfit">rasana2030@gmail.com</span>
            </div>
            <div className="space-y-1">
              <span className="text-gray-400 block font-normal">الواتساب المباشر:</span>
              <span className="text-white font-outfit" dir="ltr">+966 53 051 4632</span>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 pt-4 text-center text-[10px] text-gray-400 font-tajawal">
        <p className="font-bold">رَصَانَة للاستشارات وتطوير الأعمال</p>
        <p className="mt-1">جميع الحقوق محفوظة &copy; ٢٠٢٦</p>
      </div>
    </div>
  );

  return (
    <>
      {/* 1. SCREEN MODAL VIEW (Only rendered when isOpen is true) */}
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/90 backdrop-blur-md flex flex-col no-print font-sans">
          
          {/* Top sticky control bar */}
          <div className="sticky top-0 z-30 flex items-center justify-between px-6 py-4 bg-navy-dark/95 border-b border-white/10 backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full flex items-center justify-center bg-gold/10 text-gold border border-gold/20">
                <BookOpen className="w-5 h-5" />
              </div>
              <div className="text-right">
                <h2 className="text-sm md:text-base font-bold text-white font-tajawal">
                  {lang === "ar" ? "الملف التعريفي للشركة" : "Company Corporate Profile"}
                </h2>
                <p className="text-[10px] text-gold/80 font-medium font-tajawal">
                  {lang === "ar" ? "رصانة للاستشارات وتطوير الأعمال" : "Rasana Consulting & Business Development"}
                </p>
              </div>
            </div>

            {/* Close Button Only */}
            <div className="flex items-center gap-3 font-tajawal">
              <button
                onClick={onClose}
                className="px-5 py-2.5 rounded-full bg-gold hover:bg-gold-light text-navy-dark text-xs font-extrabold flex items-center gap-1.5 cursor-pointer transition-all shadow-md"
              >
                <span>{lang === "ar" ? "إغلاق الملف" : "Close Profile"}</span>
              </button>
            </div>
          </div>

          {/* Main Preview stage */}
          <div className="flex-grow p-4 md:p-8 flex flex-col items-center justify-start space-y-12 max-w-4xl mx-auto w-full pb-24">
            {/* Screens Preview */}
            <CoverPage />
            <AboutPage />
            <StrategyPage />
            <ServicesPage />
            <PackagesPage />
            <PartnersPage />
          </div>
        </div>
      )}
    </>
  );
}
