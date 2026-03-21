interface PortfolioItem {
  id: number;
  title: string;
  description: string;
  videoUrl: string;
  thumbnail: string;
  courtesy?: string;
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: 0,
    title: "How Fiber Affects Your Gut",
    description: "How Fiber Affects Your Gut",
    videoUrl:
      "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/syzygy/how-fiber-affects-your-gut.mp4",
    thumbnail:
      "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/syzygy/how-fiber-affects-your-gut.mp4",
    courtesy: "TheDiaryofACEO",
  },
  {
    id: 2,
    title: "Money Reel Sample",
    description: "Creative reel production and visual storytelling",
    videoUrl:
      "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/syzygy/money-reel-sample.mp4",
    thumbnail:
      "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/syzygy/money-reel-sample.mp4",
  },
  {
    id: 3,
    title: "Michael Jackson Sample",
    description: "High-quality video post-production and editing",
    videoUrl:
      "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/syzygy/michael-jackson-sample.mp4",
    thumbnail:
      "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/syzygy/michael-jackson-sample.mp4",
  },
  {
    id: 4,
    title: "Lukka chuppi",
    description: "Lukka chuppi",
    videoUrl:
      "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/syzygy/lukka-chuppi-sample.mp4",
    thumbnail:
      "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/syzygy/lukka-chuppi-sample.mp4",
  },
  {
    id: 5,
    title: "Honey Bee Learning Sample",
    description: "Educational content production for e-learning platforms",
    videoUrl:
      "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/syzygy/honey-bee-learning-sample.mp4",
    thumbnail:
      "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/syzygy/honey-bee-learning-sample.mp4",
  },
  {
    id: 6,
    title: "Silent nation",
    description: "Silent nation",
    videoUrl:
      "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/syzygy/silent-nation-sample.mp4",
    thumbnail:
      "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/syzygy/silent-nation-sample.mp4",
  },
  {
    id: 7,
    title: "Data Protection Sample",
    description:
      "Professional video editing showcasing data protection concepts",
    videoUrl:
      "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/syzygy/data-protection-sample.mp4",
    thumbnail:
      "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/syzygy/data-protection-sample.mp4",
  },
  {
    id: 8,
    title: "tere hawaale",
    description: "tere hawaale",
    videoUrl:
      "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/syzygy/tere-hawale.mp4",
    thumbnail:
      "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/syzygy/tere-hawale.mp4",
  },
  {
    id: 9,
    title: "Abhi tujh me kabhi",
    description: "Abhi tujh me kabhi",
    videoUrl:
      "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/syzygy/abhi-mujhe-me-kabhi-sample.mp4",
    thumbnail:
      "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/syzygy/abhi-mujhe-me-kabhi-sample.mp4",
  },
  {
    id: 10,
    title: "When party is over",
    description: "When party is over",
    videoUrl:
      "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/syzygy/when-party-over-sample.mp4",
    thumbnail:
      "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/syzygy/when-party-over-sample.mp4",
  },
];

export const heroVideos = [
  {
    id: 1,
    videoUrl:
      "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/syzygy/gut-microbes-comparison.mp4",
    alt: "gut-microbes-comparison",
  },
  {
    id: 2, 
    videoUrl: "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/syzygy/color-grading.mp4",
    alt: "color-grading"
  },
  {
    id: 3,
    videoUrl: "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/syzygy/green-screen-removal.mp4",
    alt: "green-screen-removal"
  }
];

export const services = [
  {
    category: "Video Editing",
    items: [
      {
        title: "Short-Form Video Editing",
        description: "Editing for reels, shorts, and other vertical videos optimized for social media platforms."
      },
      {
        title: "Long-Form Video Editing",
        description: "Editing for YouTube videos, interviews, podcasts, presentations, and educational content."
      },
      {
        title: "Talking-Head Video Editing",
        description: "Clean and structured edits for educational, commentary, or presentation-style videos with improved pacing and clarity."
      },
      {
        title: "Subtitles & Captions",
        description: "Clear, readable captions designed for social media viewing and accessibility."
      },
      {
        title: "Content Trimming & Pacing",
        description: "Removing pauses, filler sections, and unnecessary footage to improve flow and watchability."
      }
    ]
  },
  {
    category: "Visual Enhancement",
    items: [
      {
        title: "Color Correction & Basic Grading",
        description: "Balancing exposure, colors, and tone for a clean and consistent visual look."
      },
      {
        title: "Audio Cleanup",
        description: "Improving dialogue clarity by reducing background noise and balancing sound levels."
      },
      {
        title: "Green Screen Editing",
        description: "Clean background replacement and compositing for presentation or educational videos."
      }
    ]
  },
  {
    category: "Motion & Visual Elements",
    items: [
      {
        title: "Motion Graphics Integration",
        description: "Simple animated elements such as titles, lower thirds, icons, and highlight graphics."
      },
      {
        title: "Animated Subtitles",
        description: "Dynamic captions designed to improve readability and viewer attention."
      },
      {
        title: "Brand Elements",
        description: "Integrating logos, colors, and brand visuals into your videos for consistency."
      }
    ]
  },
  {
    category: "Social Media Content Formats",
    items: [
      {
        title: "Podcast Clip Creation",
        description: "Converting podcast recordings into short clips for social media distribution."
      },
      {
        title: "Educational Micro-Content",
        description: "Transforming long explanations into short, clear educational videos."
      },
      {
        title: "Multi-Platform Formatting",
        description: "Preparing videos for vertical, square, or horizontal platforms."
      }
    ]
  },
  {
    category: "Advanced Editing Tools",
    items: [
      {
        title: "Masking & Object Tracking",
        description: "Highlighting or isolating specific elements within a frame for better visual explanation."
      },
      {
        title: "Selective Rotoscoping",
        description: "Cutting out subjects or objects for simple visual effects or emphasis."
      },
      {
        title: "Screen Recording Integration",
        description: "Editing tutorials, demos, or presentations with screen capture footage."
      }
    ]
  },
  {
    category: "Content Repurposing",
    items: [
      {
        title: "Long-to-Short Video Repurposing",
        description: "Turning long videos into multiple short clips for social media."
      },
      {
        title: "Multi-Clip Content Packages",
        description: "Creating several pieces of content from a single recording session."
      }
    ]
  }
];
