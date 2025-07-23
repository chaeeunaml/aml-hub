import React, { useState } from 'react';
import { 
  Home, 
  Building2, 
  FileText, 
  Newspaper, 
  TrendingUp, 
  Play, 
  MessageSquare, 
  PenTool, 
  ExternalLink, 
  Info,
  Globe,
  Menu,
  X,
  ArrowLeft
} from 'lucide-react';

const AMLCompliancePlatform = () => {
  const [language, setLanguage] = useState('ko');
  const [currentPage, setCurrentPage] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const translations = {
    ko: {
      title: "AML 컴플라이언스 허브",
      subtitle: "자금세탁방지 및 컴플라이언스 전문가를 위한 통합 플랫폼",
      home: "홈",
      directory: "회사/툴 디렉토리",
      laws: "법령 & AI 요약",
      news: "뉴스 피드",
      cases: "사례 연구",
      videos: "영상 라이브러리",
      community: "커뮤니티",
      blog: "개인 블로그",
      links: "유용한 링크",
      about: "소개"
    },
    en: {
      title: "AML Compliance Hub",
      subtitle: "Integrated Platform for Anti-Money Laundering & Compliance Professionals",
      home: "Home",
      directory: "Company/Tool Directory",
      laws: "Laws & AI Summary",
      news: "News Feed",
      cases: "Case Studies",
      videos: "Video Library",
      community: "Community",
      blog: "Personal Blog",
      links: "Useful Links",
      about: "About"
    }
  };

  const t = translations[language];

  const menuItems = [
    { id: 'home', icon: Home, label: t.home },
    { id: 'directory', icon: Building2, label: t.directory },
    { id: 'laws', icon: FileText, label: t.laws },
    { id: 'news', icon: Newspaper, label: t.news },
    { id: 'cases', icon: TrendingUp, label: t.cases },
    { id: 'videos', icon: Play, label: t.videos },
    { id: 'community', icon: MessageSquare, label: t.community },
    { id: 'blog', icon: PenTool, label: t.blog },
    { id: 'links', icon: ExternalLink, label: t.links },
    { id: 'about', icon: Info, label: t.about }
  ];

  const HomePage = () => (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              {t.title}
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              {t.subtitle}
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {menuItems.slice(1).map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.id}
                onClick={() => setCurrentPage(item.id)}
                className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer border border-gray-100 hover:border-blue-200 hover:-translate-y-2"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {item.label}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.id === 'directory' && (language === 'ko' ? 'AML/컴플라이언스 관련 회사, 도구, 사이트를 한 곳에서 확인하세요.' : 'Find AML/Compliance companies, tools, and sites in one place.')}
                    {item.id === 'laws' && (language === 'ko' ? 'AI가 요약한 최신 법령과 규정을 쉽게 이해하세요.' : 'Understand the latest laws and regulations with AI summaries.')}
                    {item.id === 'news' && (language === 'ko' ? '실시간으로 업데이트되는 최신 AML/컴플라이언스 뉴스' : 'Real-time updates on the latest AML/Compliance news')}
                    {item.id === 'cases' && (language === 'ko' ? '실제 사례를 통해 배우는 컴플라이언스 실무' : 'Learn compliance practices through real cases')}
                    {item.id === 'videos' && (language === 'ko' ? '전문가 강의와 교육 영상 라이브러리' : 'Expert lectures and educational video library')}
                    {item.id === 'community' && (language === 'ko' ? '전문가들과 소통하고 지식을 공유하세요.' : 'Connect with experts and share knowledge.')}
                    {item.id === 'blog' && (language === 'ko' ? '개인적인 인사이트와 경험을 공유하는 블로그' : 'Share personal insights and experiences')}
                    {item.id === 'links' && (language === 'ko' ? '엄선된 유용한 외부 리소스 모음' : 'Curated collection of useful external resources')}
                    {item.id === 'about' && (language === 'ko' ? '플랫폼 소개 및 사용 가이드' : 'Platform introduction and user guide')}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );

  const DirectoryPage = () => {
    const amlSolutions = [
      {
        name: "NICE Actimize",
        url: "https://www.niceactimize.com",
        features: language === 'ko' 
          ? "Tier-1 은행 표준, 트랜잭션 모니터링, PEP/Sanctions Screening, AI 기반 이상탐지, 통합 Case Management"
          : "Tier-1 bank standard, Transaction monitoring, PEP/Sanctions screening, AI-based anomaly detection, Integrated case management",
        category: "Enterprise",
        color: "from-blue-500 to-blue-600"
      },
      {
        name: "ComplyAdvantage",
        url: "https://www.complyadvantage.com",
        features: language === 'ko'
          ? "실시간 KYC/AML API, PEP/Sanctions Screening, Adverse Media 모니터링, 빠른 구축, 핀테크 최적화"
          : "Real-time KYC/AML API, PEP/Sanctions screening, Adverse media monitoring, Quick deployment, Fintech optimized",
        category: "API-First",
        color: "from-green-500 to-green-600"
      },
      {
        name: "Chainalysis",
        url: "https://www.chainalysis.com",
        features: language === 'ko'
          ? "블록체인 분석, 암호화폐 트래킹, 제재 스크리닝, 사이버범죄 수사, DeFi 모니터링"
          : "Blockchain analysis, Cryptocurrency tracking, Sanctions screening, Cybercrime investigation, DeFi monitoring",
        category: "Crypto",
        color: "from-purple-500 to-purple-600"
      },
      {
        name: "LexisNexis Risk Solutions",
        url: "https://risk.lexisnexis.com",
        features: language === 'ko'
          ? "신원 확인, 디지털 신원 인텔리전스, 사기 방지, KYC 자동화, 행동 분석"
          : "Identity verification, Digital identity intelligence, Fraud prevention, KYC automation, Behavioral analytics",
        category: "Identity",
        color: "from-red-500 to-red-600"
      },
      {
        name: "Thomson Reuters",
        url: "https://www.thomsonreuters.com",
        features: language === 'ko'
          ? "World-Check 데이터베이스, 규제 인텔리전스, 컴플라이언스 관리, 리스크 평가"
          : "World-Check database, Regulatory intelligence, Compliance management, Risk assessment",
        category: "Data & Intelligence",
        color: "from-indigo-500 to-indigo-600"
      },
      {
        name: "Refinitiv (LSEG)",
        url: "https://www.refinitiv.com",
        features: language === 'ko'
          ? "글로벌 제재 리스트, PEP 데이터베이스, Adverse Media 스크리닝, 실시간 업데이트"
          : "Global sanctions lists, PEP databases, Adverse media screening, Real-time updates",
        category: "Data Provider",
        color: "from-orange-500 to-orange-600"
      }
    ];

    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <button
            onClick={() => setCurrentPage('home')}
            className="inline-flex items-center px-4 py-2 text-blue-600 hover:text-blue-800 hover:bg-blue-50 rounded-lg transition-colors mb-6"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            {language === 'ko' ? '홈으로 돌아가기' : 'Back to Home'}
          </button>
          
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {language === 'ko' ? '글로벌 AML 솔루션 디렉토리' : 'Global AML Solutions Directory'}
            </h1>
            <p className="text-xl text-gray-600">
              {language === 'ko' 
                ? '전세계 주요 AML/컴플라이언스 솔루션 제공업체를 한눈에'
                : 'Leading AML/Compliance solution providers worldwide at a glance'
              }
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {amlSolutions.map((solution, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className={`h-2 bg-gradient-to-r ${solution.color}`}></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {solution.name}
                  </h3>
                  <span className="inline-block px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full mb-4">
                    {solution.category}
                  </span>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {solution.features}
                  </p>
                  <a
                    href={solution.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                  >
                    {language === 'ko' ? '공식 사이트' : 'Official Site'}
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  const NewsPage = () => {
    const newsData = [
      {
        title: language === 'ko' 
          ? "미국 FinCEN, 가상자산 서비스 제공업체에 대한 새로운 AML 규정 발표"
          : "US FinCEN Announces New AML Regulations for Virtual Asset Service Providers",
        summary: language === 'ko'
          ? "미국 금융범죄수사청(FinCEN)이 가상자산 서비스 제공업체(VASP)에 대한 강화된 AML/CFT 규정을 발표했습니다. 새 규정은 고객 실사(CDD) 강화와 의심거래 보고(STR) 의무를 포함하며, 2025년 하반기부터 시행됩니다."
          : "The US Financial Crimes Enforcement Network (FinCEN) announced enhanced AML/CFT regulations for Virtual Asset Service Providers (VASPs). The new regulations include strengthened Customer Due Diligence (CDD) and Suspicious Transaction Reporting (STR) obligations, effective from H2 2025.",
        source: "Reuters",
        category: "Crypto AML",
        date: "2025-01-23",
        region: "🇺🇸 Americas"
      },
      {
        title: language === 'ko'
          ? "EU, 제6차 자금세탁방지 지침(6AMLD) 최종 승인"
          : "EU Gives Final Approval to Sixth Anti-Money Laundering Directive (6AMLD)",
        summary: language === 'ko'
          ? "유럽연합이 제6차 자금세탁방지 지침을 최종 승인했습니다. 새 지침은 암호화폐 거래소와 NFT 플랫폼에 대한 규제를 강화하고, 실질적 소유자(UBO) 확인 요구사항을 확대합니다."
          : "The European Union has given final approval to the Sixth Anti-Money Laundering Directive. The new directive strengthens regulations for cryptocurrency exchanges and NFT platforms, expanding Ultimate Beneficial Owner (UBO) verification requirements.",
        source: "Financial Times",
        category: "Regulation",
        date: "2025-01-22",
        region: "🇪🇺 Europe"
      },
      {
        title: language === 'ko'
          ? "HSBC, 러시아 제재 위반으로 12억 달러 벌금 부과"
          : "HSBC Fined $1.2 Billion for Russia Sanctions Violations",
        summary: language === 'ko'
          ? "HSBC가 러시아 제재 위반과 관련된 자금세탁 활동으로 12억 달러의 벌금을 부과받았습니다. 이는 영국 금융감독청(FCA)이 부과한 역대 최대 규모의 벌금입니다."
          : "HSBC has been fined $1.2 billion for money laundering activities related to Russia sanctions violations. This is the largest fine ever imposed by the UK Financial Conduct Authority (FCA).",
        source: "Bloomberg",
        category: "Sanctions",
        date: "2025-01-21",
        region: "🇬🇧 UK"
      },
      {
        title: language === 'ko'
          ? "싱가포르 MAS, 핀테크 기업 대상 AML 감독 강화"
          : "Singapore MAS Strengthens AML Oversight for Fintech Firms",
        summary: language === 'ko'
          ? "싱가포르 통화청(MAS)이 핀테크 기업들에 대한 AML/CFT 감독을 강화한다고 발표했습니다. 특히 디지털 결제 서비스와 P2P 대출 플랫폼에 대한 모니터링이 강화됩니다."
          : "The Monetary Authority of Singapore (MAS) announced strengthened AML/CFT oversight for fintech companies. Enhanced monitoring will particularly focus on digital payment services and P2P lending platforms.",
        source: "CoinDesk",
        category: "Fintech",
        date: "2025-01-21",
        region: "🇸🇬 Singapore"
      }
    ];

    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <button
            onClick={() => setCurrentPage('home')}
            className="inline-flex items-center px-4 py-2 text-blue-600 hover:text-blue-800 hover:bg-blue-50 rounded-lg transition-colors mb-6"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            {language === 'ko' ? '홈으로 돌아가기' : 'Back to Home'}
          </button>
          
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {language === 'ko' ? 'AML/컴플라이언스 뉴스 피드' : 'AML/Compliance News Feed'}
            </h1>
            <p className="text-xl text-gray-600">
              {language === 'ko' 
                ? '전세계 자금세탁방지, 컴플라이언스, 제재 관련 최신 뉴스'
                : 'Latest news on anti-money laundering, compliance, and sanctions worldwide'
              }
            </p>
          </div>

          <div className="space-y-6">
            {newsData.map((news, index) => (
              <article
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                      {news.category}
                    </span>
                    <span className="text-sm text-gray-500">{news.region}</span>
                    <span className="text-sm text-gray-500">•</span>
                    <span className="text-sm text-gray-500">{news.date}</span>
                  </div>
                  
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                    {news.title}
                  </h2>
                  
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {news.summary}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-900">{news.source}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    );
  };

  const PlaceholderPage = ({ title, icon: IconComponent }) => (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <button
          onClick={() => setCurrentPage('home')}
          className="inline-flex items-center px-4 py-2 text-blue-600 hover:text-blue-800 hover:bg-blue-50 rounded-lg transition-colors mb-6"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          {language === 'ko' ? '홈으로 돌아가기' : 'Back to Home'}
        </button>
        <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl flex items-center justify-center mx-auto mb-8">
          <IconComponent className="w-12 h-12 text-white" />
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{title}</h1>
        <p className="text-xl text-gray-600">
          {language === 'ko' ? '곧 출시 예정입니다!' : 'Coming Soon!'}
        </p>
      </div>
    </div>
  );

  const renderCurrentPage = () => {
    if (currentPage === 'home') {
      return <HomePage />;
    }
    
    if (currentPage === 'directory') {
      return <DirectoryPage />;
    }
    
    if (currentPage === 'news') {
      return <NewsPage />;
    }
    
    const currentItem = menuItems.find(item => item.id === currentPage);
    return <PlaceholderPage title={currentItem?.label} icon={currentItem?.icon} />;
  };

  return (
    <div className="min-h-screen bg-white">
      <nav className="bg-white shadow-lg border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div 
              className="flex items-center cursor-pointer"
              onClick={() => setCurrentPage('home')}
            >
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center mr-3">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">AML Hub</span>
            </div>

            <div className="hidden lg:flex items-center space-x-1">
              {menuItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => setCurrentPage(item.id)}
                    className={`flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      currentPage === item.id
                        ? 'bg-blue-100 text-blue-700'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                    }`}
                  >
                    <IconComponent className="w-4 h-4 mr-2" />
                    {item.label}
                  </button>
                );
              })}
            </div>

            <div className="flex items-center space-x-3">
              <button
                onClick={() => setLanguage(language === 'ko' ? 'en' : 'ko')}
                className="flex items-center px-3 py-2 rounded-lg text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
              >
                <Globe className="w-4 h-4 mr-1" />
                {language === 'ko' ? 'EN' : '한글'}
              </button>

              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {isMenuOpen && (
            <div className="lg:hidden border-t border-gray-200 bg-white">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {menuItems.map((item) => {
                  const IconComponent = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => {
                        setCurrentPage(item.id);
                        setIsMenuOpen(false);
                      }}
                      className={`flex items-center w-full px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                        currentPage === item.id
                          ? 'bg-blue-100 text-blue-700'
                          : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                      }`}
                    >
                      <IconComponent className="w-4 h-4 mr-3" />
                      {item.label}
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </nav>

      {renderCurrentPage()}
    </div>
  );
};

export default AMLCompliancePlatform;
