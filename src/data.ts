export interface ValueItem {
  id: string;
  titleAr: string;
  titleEn: string;
  descriptionAr: string;
  descriptionEn: string;
  icon: string;
}

export interface ServiceItem {
  id: string;
  titleAr: string;
  titleEn: string;
  descriptionAr: string;
  descriptionEn: string;
  tagsAr: string[];
  tagsEn: string[];
  icon: string;
}

export interface GoalItem {
  id: string;
  titleAr: string;
  titleEn: string;
  descriptionAr: string;
  descriptionEn: string;
  icon: string;
}

export interface PackageItem {
  id: string;
  titleAr: string;
  titleEn: string;
  descriptionAr: string;
  descriptionEn: string;
  isPopular?: boolean;
  metrics: {
    labelAr: string;
    labelEn: string;
    value: number; // percentage
    color: string;
  }[];
}

export const VALUES_DATA: ValueItem[] = [
  {
    id: "simplicity",
    titleAr: "البساطة",
    titleEn: "Simplicity",
    descriptionAr: "تبسيط الإجراءات المعقدة وجعل الحلول الاستشارية قابلة للتطبيق بمرونة تامة.",
    descriptionEn: "Simplifying complex procedures and making consulting solutions highly practical and easy to execute.",
    icon: "Feather",
  },
  {
    id: "partnership",
    titleAr: "الشراكة",
    titleEn: "Partnership",
    descriptionAr: "العمل كشريك حقيقي ومسؤول جنباً إلى جنب مع عملائنا وليس مجرد مستشار خارجي.",
    descriptionEn: "Working as a real, responsible partner side-by-side with our clients, not just an external advisor.",
    icon: "Handshake",
  },
  {
    id: "innovation",
    titleAr: "الابتكار",
    titleEn: "Innovation",
    descriptionAr: "دمج الحلول التقنية الحديثة والذكاء الاصطناعي لخلق ميزة تنافسية مستدامة.",
    descriptionEn: "Integrating modern technological solutions and AI to create a sustainable competitive advantage.",
    icon: "Lightbulb",
  },
  {
    id: "reliability",
    titleAr: "الموثوقية",
    titleEn: "Reliability",
    descriptionAr: "اللتزام بأعلى معايير الحوكمة والامتثال والسرية التامة لحماية مصالح شركائنا.",
    descriptionEn: "Commitment to the highest standards of governance, compliance, and absolute confidentiality to protect partners' interests.",
    icon: "ShieldCheck",
  },
  {
    id: "impact",
    titleAr: "الأثر ملموس",
    titleEn: "Tangible Impact",
    descriptionAr: "تركيز كافة جهودنا لتقديم مخرجات وحلول تنعكس إيجاباً على أرباح وإنتاجية المنشأة.",
    descriptionEn: "Focusing all our efforts on delivering outcomes and solutions that reflect positively on profitability and productivity.",
    icon: "TrendingUp",
  },
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "ops",
    titleAr: "التميز التشغيلي وتطوير الأعمال",
    titleEn: "Operational Excellence & Business Dev",
    descriptionAr: "تحليل وتطوير دورة العمل التشغيلية لتقليل الهدر المالي والزمني، ووضع خطط استراتيجية للتوسع الجغرافي والنوعي.",
    descriptionEn: "Analyzing and developing the operational lifecycle to minimize financial and time waste, and establishing strategic plans for expansion.",
    tagsAr: ["إعادة هندسة العمليات", "تحسين الكفاءة", "تطوير الأعمال"],
    tagsEn: ["Process Re-engineering", "Efficiency Optimization", "Business Growth"],
    icon: "Zap",
  },
  {
    id: "gov",
    titleAr: "الحوكمة والامتثال النظامي",
    titleEn: "Governance & Regulatory Compliance",
    descriptionAr: "بناء هياكل الحوكمة وإعداد السياسات والإجراءات ولوائح الصلاحيات التي تضمن توافق المنشأة مع الأنظمة والتشريعات المحلية لتجنب المخالفات.",
    descriptionEn: "Building governance structures and preparing policies, procedures, and delegation charts that ensure compliance with local regulations.",
    tagsAr: ["إدارة المخاطر", "اللوائح الداخلية", "الامتثال والشفافية"],
    tagsEn: ["Risk Management", "Internal Regulations", "Compliance & Transparency"],
    icon: "Scale",
  },
  {
    id: "hr",
    titleAr: "الموارد البشرية وهيكلة الإدارات",
    titleEn: "Human Resources & Structuring",
    descriptionAr: "تصميم الهياكل التنظيمية المرنة، كتابة الأوصاف الوظيفية الدقيقة، وبناء مؤشرات قياس الأداء (KPIs) لرفع كفاءة الاستثمار في الكادر البشري.",
    descriptionEn: "Designing flexible organizational charts, writing accurate job descriptions, and building KPIs to optimize human capital investments.",
    tagsAr: ["الهياكل التنظيمية", "توصيف الوظائف", "تقييم الأداء والمكافآت"],
    tagsEn: ["Org Structures", "Job Descriptions", "Performance & Rewards"],
    icon: "Users",
  },
  {
    id: "digital",
    titleAr: "التحول الرقمي والأتمتة",
    titleEn: "Digital Transformation & Automation",
    descriptionAr: "تحويل الإجراءات الورقية واليدوية البطيئة إلى أنظمة رقمية متكاملة تضمن دقة وسرعة تدفق البيانات وتكاملها بين الإدارات المختلفة.",
    descriptionEn: "Converting manual and paper-based workflows into integrated digital systems, guaranteeing swift and accurate cross-departmental data flows.",
    tagsAr: ["أتمتة العمليات", "الأنظمة السحابية", "التكامل التقني"],
    tagsEn: ["Workflow Automation", "Cloud Platforms", "System Integration"],
    icon: "Cpu",
  },
  {
    id: "ai",
    titleAr: "حلول الذكاء الاصطناعي وتحليل البيانات",
    titleEn: "AI Solutions & Data Analytics",
    descriptionAr: "توظيف تقنيات التعلم الآلي والذكاء الاصطناعي التوليدي والتحليل الإحصائي لبناء نماذج ذكية تساهم في التنبؤ بالسوق ودعم اتخاذ القرارات الاستراتيجية.",
    descriptionEn: "Employing machine learning, generative AI, and advanced analytics to build intelligent models for predictive forecasting and decision support.",
    tagsAr: ["ذكاء الأعمال", "التعلم الآلي", "لوحات البيانات الذكية"],
    tagsEn: ["Business Intelligence", "Machine Learning", "Smart Dashboards"],
    icon: "BrainCircuit",
  },
  {
    id: "legal",
    titleAr: "الاستشارات القانونية وصياغة العقود",
    titleEn: "Legal Consulting & Contract Drafting",
    descriptionAr: "تقديم المساندة القانونية الوقائية وصياغة الاتفاقيات التجارية وعقود العمل واللوائح التنظيمية الداخلية بما يضمن حماية الكيان القانوني للمنشأة وشركائها.",
    descriptionEn: "Providing preventive legal support and drafting commercial agreements, employment contracts, and internal policies to safeguard the enterprise.",
    tagsAr: ["صياغة العقود", "حماية الملكية", "التوافق القانوني"],
    tagsEn: ["Contract Drafting", "IP Protection", "Legal Alignment"],
    icon: "Gavel",
  },
];

export const GOALS_DATA: GoalItem[] = [
  {
    id: "compliance",
    titleAr: "التوافق النظامي الأقصى",
    titleEn: "Regulatory Alignment",
    descriptionAr: "ضمان عمل المنشأة تحت مظلة نظامية آمنة ومحدثة بالكامل مع التشريعات السعودية لتجنب العقوبات والمخاطر القانونية.",
    descriptionEn: "Ensuring the enterprise operates under a fully secure regulatory umbrella updated with Saudi laws to avoid penalties.",
    icon: "FileCheck2",
  },
  {
    id: "waste",
    titleAr: "تقليل الهدر التشغيلي",
    titleEn: "Operational Waste Reduction",
    descriptionAr: "تحسين تكاليف التشغيل المباشرة وغير المباشرة بنسب ملموسة عبر أتمتة الإجراءات وإعادة هندسة تدفق العمليات.",
    descriptionEn: "Optimizing direct and indirect operational costs through smart automation and workflow re-engineering.",
    icon: "BadgePercent",
  },
  {
    id: "talent",
    titleAr: "رفع كفاءة الكوادر الوطنية",
    titleEn: "Human Capital Efficiency",
    descriptionAr: "تمكين الموظفين بأدوات عمل رقمية مريحة ومهام وهياكل واضحة تضمن زيادة إنتاجيتهم وشغفهم بالعمل اليومي.",
    descriptionEn: "Empowering employees with clear structures and digital tools to raise their daily productivity and engagement.",
    icon: "UserCheck",
  },
  {
    id: "decision",
    titleAr: "دعم اتخاذ القرار بالبيانات",
    titleEn: "Data-Driven Decisions",
    descriptionAr: "تحويل البيانات التشغيلية الصامتة إلى لوحات معلومات (Dashboards) تفاعلية تمنح القادة رؤية استباقية دقيقة لاتخاذ قرارات حكيمة.",
    descriptionEn: "Transforming passive business data into smart interactive dashboards that provide leaders with clear strategic insight.",
    icon: "BarChart3",
  },
];

export const PACKAGES_DATA: PackageItem[] = [
  {
    id: "foundation",
    titleAr: "باقة التأسيس",
    titleEn: "Foundation Package",
    descriptionAr: "مثالية للمنشآت الناشئة لبناء ركائز العمل الإداري والقانوني السليم وتفادي تعثر البدايات.",
    descriptionEn: "Ideal for startups to establish sound administrative and legal pillars and avoid early stage pitfalls.",
    metrics: [
      { labelAr: "زيادة الإنتاجية", labelEn: "Productivity Boost", value: 25, color: "#bb984c" },
      { labelAr: "تقليص التكاليف", labelEn: "Cost Reduction", value: 15, color: "#bf652d" },
      { labelAr: "الامتثال والحوكمة", labelEn: "Compliance Score", value: 85, color: "#10b981" },
      { labelAr: "مستوى الأتمتة والتحول", labelEn: "Automation Level", value: 20, color: "#3b82f6" },
    ],
  },
  {
    id: "organization",
    titleAr: "باقة التنظيم وإعادة الهيكلة",
    titleEn: "Structuring & Org Package",
    descriptionAr: "مصممة للمنشآت القائمة التي تواجه تشتتاً إدارياً أو ارتفاعاً في التكاليف التشغيلية وترغب بإعادة ترتيب البيت الداخلي.",
    descriptionEn: "Designed for established enterprises facing administrative clutter or high operational costs, wishing to optimize internal setups.",
    metrics: [
      { labelAr: "زيادة الإنتاجية", labelEn: "Productivity Boost", value: 45, color: "#bb984c" },
      { labelAr: "تقليص التكاليف", labelEn: "Cost Reduction", value: 30, color: "#bf652d" },
      { labelAr: "الامتثال والحوكمة", labelEn: "Compliance Score", value: 98, color: "#10b981" },
      { labelAr: "مستوى الأتمتة والتحول", labelEn: "Automation Level", value: 40, color: "#3b82f6" },
    ],
  },
  {
    id: "smart_transform",
    titleAr: "باقة التحول الذكي والابتكار",
    titleEn: "Smart Transformation Package",
    isPopular: true,
    descriptionAr: "الباقة الأكثر طلباً للمنشآت التي تسعى للمستقبل عبر تفعيل أتمتة الإجراءات بالكامل ودمج الذكاء الاصطناعي في عملياتها.",
    descriptionEn: "Our most popular package for enterprises looking forward, fully automating workflows, and embedding AI into their operations.",
    metrics: [
      { labelAr: "زيادة الإنتاجية", labelEn: "Productivity Boost", value: 80, color: "#bb984c" },
      { labelAr: "تقليص التكاليف", labelEn: "Cost Reduction", value: 50, color: "#bf652d" },
      { labelAr: "الامتثال والحوكمة", labelEn: "Compliance Score", value: 95, color: "#10b981" },
      { labelAr: "مستوى الأتمتة والتحول", labelEn: "Automation Level", value: 90, color: "#3b82f6" },
    ],
  },
  {
    id: "partner",
    titleAr: "باقة الشريك التشغيلي",
    titleEn: "Operational Partner Package",
    descriptionAr: "شراكة استراتيجية طويلة الأجل تقدم فيها 'رصانة' إشرافاً مستمراً ودعماً استشارياً وتنفيذياً متكاملاً على مدار العام.",
    descriptionEn: "Long-term strategic alliance where 'Rasana' provides ongoing oversight and integrated executive advisory throughout the year.",
    metrics: [
      { labelAr: "زيادة الإنتاجية", labelEn: "Productivity Boost", value: 70, color: "#bb984c" },
      { labelAr: "تقليص التكاليف", labelEn: "Cost Reduction", value: 40, color: "#bf652d" },
      { labelAr: "الامتثال والحوكمة", labelEn: "Compliance Score", value: 100, color: "#10b981" },
      { labelAr: "مستوى الأتمتة والتحول", labelEn: "Automation Level", value: 75, color: "#3b82f6" },
    ],
  },
];

export const PARTNERS_DATA = [
  { nameAr: "إيه إف إيه وشركاؤه للمحاماة", nameEn: "AFA & Partners Law Firm", logoText: "AFA" },
  { nameAr: "هامات الرائدة للاستثمار", nameEn: "Hamat Leading Investment", logoText: "HAMAT" },
  { nameAr: "فندق جولدن توليب العالمية", nameEn: "Golden Tulip Hotels", logoText: "GT" },
  { nameAr: "الخليجي الطبية المحدودة", nameEn: "Al-Khaleeji Medical Co.", logoText: "KM" }
];
