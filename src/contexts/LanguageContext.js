import React, { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

const translations = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      projects: "Projects",
      resume: "Resume",
      blog: "Blog"
    },
    home: {
      greeting: "Hi There!",
      introduction: "LET ME INTRODUCE MYSELF",
      aboutMe: "I'm passionate about artificial intelligence and its potential to solve real-world problems! 🤖",
      languages: "I specialize in programming languages like",
      interests: "My field of interests are building innovative",
      aiSolutions: "AI Solutions and Machine Learning Models",
      nlp: "Natural Language Processing and Large Language Models.",
      tools: "Whenever possible, I also apply my passion for developing AI applications with",
      frameworks: "Modern AI Frameworks and Tools",
      findMe: "FIND ME ON",
      connect: "Feel free to connect with me"
    },
    about: {
      title: "Know Who I'M",
      introduction: "Hi Everyone, I am",
      from: "from",
      currentRole: "I am currently a third-year Artificial Intelligence student at University of Science (VNUHCM-US) with a strong expertise in natural language processing (NLP), machine learning, and large language model (LLM) integration.",
      founder: "I am also the Founder & Content Creator of Learning AI with Losers, an AI education platform with 5,000+ followers.",
      activities: "Apart from AI research and development, some other activities that I love to do!",
      activity1: "Creating AI Content & Podcasts",
      activity2: "Participating in AI Hackathons",
      activity3: "Contributing to Open Source AI Projects",
      activity4: "Writing Technical Blogs",
      quote: "Passionate about advancing NLP research and building impactful AI solutions!",
      skillset: "Professional Skillset",
      tools: "Tools I use",
      achievements: "Recent Achievements"
    },
    projects: {
      title: "My Recent Research & Application Projects",
      subtitle: "Here are some AI/ML projects I've been working on, including research collaborations and practical applications."
    },
    resume: {
      title: "My Resume",
      download: "Download CV",
      english: "English",
      vietnamese: "Vietnamese"
    }
  },
  vi: {
    nav: {
      home: "Trang Chủ",
      about: "Giới Thiệu",
      projects: "Dự Án",
      resume: "Hồ Sơ",
      blog: "Blog"
    },
    home: {
      greeting: "Xin Chào!",
      introduction: "HÃY ĐỂ TÔI TỰ GIỚI THIỆU",
      aboutMe: "Tôi đam mê trí tuệ nhân tạo và tiềm năng của nó trong việc giải quyết các vấn đề thực tế! 🤖",
      languages: "Tôi chuyên về các ngôn ngữ lập trình như",
      interests: "Lĩnh vực quan tâm của tôi là xây dựng các",
      aiSolutions: "Giải Pháp AI và Mô Hình Học Máy",
      nlp: "Xử Lý Ngôn Ngữ Tự Nhiên và Mô Hình Ngôn Ngữ Lớn.",
      tools: "Khi có thể, tôi cũng áp dụng đam mê phát triển ứng dụng AI với",
      frameworks: "Các Framework và Công Cụ AI Hiện Đại",
      findMe: "TÌM TÔI TRÊN",
      connect: "Hãy kết nối với tôi"
    },
    about: {
      title: "Tìm Hiểu Về TÔI",
      introduction: "Xin chào mọi người, tôi là",
      from: "đến từ",
      currentRole: "Tôi hiện là sinh viên năm ba ngành Trí tuệ Nhân tạo tại Đại học Khoa học Tự nhiên (ĐHQG-HCM) với chuyên môn mạnh về xử lý ngôn ngữ tự nhiên (NLP), học máy và tích hợp mô hình ngôn ngữ lớn (LLM).",
      founder: "Tôi cũng là Người sáng lập & Người tạo nội dung của Learning AI with Losers, một nền tảng giáo dục AI với hơn 5.000 người theo dõi.",
      activities: "Ngoài nghiên cứu và phát triển AI, một số hoạt động khác mà tôi yêu thích!",
      activity1: "Tạo Nội dung AI & Podcast",
      activity2: "Tham gia các Hackathon AI",
      activity3: "Đóng góp cho các Dự án AI Mã nguồn Mở",
      activity4: "Viết Blog Kỹ thuật",
      quote: "Đam mê thúc đẩy nghiên cứu NLP và xây dựng các giải pháp AI có tác động!",
      skillset: "Bộ Kỹ Năng Chuyên Nghiệp",
      tools: "Công cụ tôi sử dụng",
      achievements: "Thành Tựu Gần Đây"
    },
    projects: {
      title: "Các Dự Án Nghiên Cứu & Ứng Dụng Gần Đây",
      subtitle: "Đây là một số dự án AI/ML tôi đang thực hiện, bao gồm các dự án nghiên cứu hợp tác và ứng dụng thực tế."
    },
    resume: {
      title: "Hồ Sơ Của Tôi",
      download: "Tải CV",
      english: "Tiếng Anh",
      vietnamese: "Tiếng Việt"
    }
  }
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  const t = (key) => {
    const keys = key.split('.');
    let value = translations[language];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    return value || key;
  };

  const changeLanguage = (lang) => {
    setLanguage(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

