interface DubbingSample {
  id: number
  title: string
  description: string
  videoUrl: string
  thumbnail: string
}
export const dubbingSamples: DubbingSample[] = [
  {
    id: 1,
    title: "All Male Characters (Fevicol Advertisement)",
    description: "A dynamic range of masculine voices bringing humor and energy to the iconic Fevicol advertisement.",
    videoUrl: "https://pub-f1f1657027f947e2ab76b33dcfab6b53.r2.dev/Dubbing/lv_0_20250409220713.mp4",
    thumbnail: "https://pub-f1f1657027f947e2ab76b33dcfab6b53.r2.dev/Thumbnail%20Images/Screenshot%202025-04-16%20235048.png"
  },
  {
    id: 2,
    title: "Mickey Mouse English",
    description: "A cheerful, high-pitched voice bringing Mickey Mouse’s timeless optimism to life in English.",
    videoUrl: "https://pub-f1f1657027f947e2ab76b33dcfab6b53.r2.dev/Dubbing/lv_0_20250411085123.mp4",
    thumbnail: "https://pub-f1f1657027f947e2ab76b33dcfab6b53.r2.dev/Thumbnail%20Images/Screenshot%202025-04-16%20235336.png"
  },
  {
    id: 3,
    title: "Venom (Tom Hardy) English",
    description: "A menacing, guttural tone as Venom, echoing Tom Hardy’s intensity in English.",
    videoUrl: "https://pub-f1f1657027f947e2ab76b33dcfab6b53.r2.dev/Dubbing/lv_0_20250413134134.mp4",
    thumbnail: "https://pub-f1f1657027f947e2ab76b33dcfab6b53.r2.dev/Thumbnail%20Images/Screenshot%202025-04-16%20235545.png"
  },
  {
    id: 4,
    title: "Paresh Rawal (Hungama) Hindi",
    description: "A hilarious, exaggerated Hindi performance mimicking Paresh Rawal’s comedic flair from Hungama.",
    videoUrl: "https://pub-f1f1657027f947e2ab76b33dcfab6b53.r2.dev/Dubbing/lv_0_20250409231608.mp4",
    thumbnail: "https://pub-f1f1657027f947e2ab76b33dcfab6b53.r2.dev/Thumbnail%20Images/Screenshot%202025-04-16%20235248.png"
  },
  {
    id: 5,
    title: "Painty the Pirate/Mr. Krabs (SpongeBob)",
    description: "A hearty, pirate-inspired voice as Painty and the gruff / lovable Mr. Krabs from SpongeBob.",
    videoUrl: "https://pub-f1f1657027f947e2ab76b33dcfab6b53.r2.dev/Dubbing/lv_0_20250411004021.mp4",
    thumbnail: "https://pub-f1f1657027f947e2ab76b33dcfab6b53.r2.dev/Thumbnail%20Images/Screenshot%202025-04-16%20235405.png"
  },
  {
    id: 6,
    title: "Pops (The Regular Show) English",
    description: "A whimsical, soft-spoken voice as Pops, radiating innocence and charm in English.",
    videoUrl: "https://pub-f1f1657027f947e2ab76b33dcfab6b53.r2.dev/Dubbing/lv_0_20250411093142.mp4",
    thumbnail: "https://pub-f1f1657027f947e2ab76b33dcfab6b53.r2.dev/Thumbnail%20Images/Screenshot%202025-04-16%20235314.png"
  },
  {
    id: 7,
    title: "Batman English",
    description: "A deep, gritty voice embodying the Dark Knight’s intensity in English.",
    videoUrl: "https://pub-f1f1657027f947e2ab76b33dcfab6b53.r2.dev/Dubbing/lv_0_20250410234119.mp4",
    thumbnail: "https://pub-f1f1657027f947e2ab76b33dcfab6b53.r2.dev/Thumbnail%20Images/Screenshot%202025-04-16%20235420.png"
  },
  {
    id: 8,
    title: "Dory’s Dad (Finding Dory) Hindi",
    description: "A warm, fatherly tone in Hindi, capturing Dory’s dad’s heartfelt emotion from Finding Dory.",
    videoUrl: "https://pub-f1f1657027f947e2ab76b33dcfab6b53.r2.dev/Dubbing/lv_0_20250419234811.mp4",
    thumbnail: "https://pub-f1f1657027f947e2ab76b33dcfab6b53.r2.dev/Thumbnail%20Images/Screenshot%202025-04-16%20235504.png"
  },
  {
    id: 9,
    title: "Kratos (God of War 3) English",
    description: "A commanding, gravelly voice channeling Kratos’ raw power from God of War 3 in English.",
    videoUrl: "https://pub-f1f1657027f947e2ab76b33dcfab6b53.r2.dev/Dubbing/lv_0_20250410234640.mp4",
    thumbnail: "https://pub-f1f1657027f947e2ab76b33dcfab6b53.r2.dev/Thumbnail%20Images/Screenshot%202025-04-16%20235444.png"
  },
  {
    id: 10,
    title: "Maui (Moana) English",
    description: "A bold, charismatic performance as Maui, filled with charm and strength in English.",
    videoUrl: "https://pub-f1f1657027f947e2ab76b33dcfab6b53.r2.dev/Dubbing/lv_0_20250413235225.mp4",
    thumbnail: "https://pub-f1f1657027f947e2ab76b33dcfab6b53.r2.dev/Thumbnail%20Images/Screenshot%202025-04-16%20235528.png"
  },
  {
    id: 11,
    title: "Nick the Fox (Zootopia) Hindi",
    description: "A sly, witty tone in Hindi, perfectly capturing Nick the Fox’s cunning charm from Zootopia.",
    videoUrl: "https://pub-f1f1657027f947e2ab76b33dcfab6b53.r2.dev/Dubbing/lv_0_20250410085841.mp4",
    thumbnail: "https://pub-f1f1657027f947e2ab76b33dcfab6b53.r2.dev/Thumbnail%20Images/Screenshot%202025-04-16%20235156.png"
  },
] 


interface Featured {
  id: number
  cardType: string
  title: string
  description?: string
  contentUrl: string
  visualUrl: string
  language?:string
  type?:string
}
export const featured:Featured[] = [
  {
    cardType: "dubbing",
    id: 1,
    title: "All Male Characters (Fevicol Advertisement)",
    description: "A dynamic range of masculine voices bringing humor and energy to the iconic Fevicol advertisement.",
    contentUrl: "https://pub-f1f1657027f947e2ab76b33dcfab6b53.r2.dev/Dubbing/lv_0_20250409220713.mp4",
    visualUrl: "https://pub-f1f1657027f947e2ab76b33dcfab6b53.r2.dev/Thumbnail%20Images/Screenshot%202025-04-16%20235048.png"
  },
  {
    cardType: "voice-over",
    id: 2,
    title: "Poem Hindi",
    language: "Hindi",
    type: "Poem",
    contentUrl: "https://pub-f1f1657027f947e2ab76b33dcfab6b53.r2.dev/VOs/Poem Hindi.mp3"
    , visualUrl: "https://pub-f1f1657027f947e2ab76b33dcfab6b53.r2.dev/Images/poemstory.png"
  },
  {
    cardType: "dubbing",
    id: 3,
    title: "Mickey Mouse English",
    description: "A cheerful, high-pitched voice bringing Mickey Mouse’s timeless optimism to life in English.",
    contentUrl: "https://pub-f1f1657027f947e2ab76b33dcfab6b53.r2.dev/Dubbing/lv_0_20250411085123.mp4",
    visualUrl: "https://pub-f1f1657027f947e2ab76b33dcfab6b53.r2.dev/Thumbnail%20Images/Screenshot%202025-04-16%20235336.png"
  },
  {
    id: 4,
    title: "Aircel Advertisement Hindi",
    cardType: "voice-over",
    language: "Hindi",
    type: "Advertisement",
    contentUrl: "https://pub-f1f1657027f947e2ab76b33dcfab6b53.r2.dev/VOs/Aircel%20Advertisement%20Hindi.mp3"
    , visualUrl: "https://pub-f1f1657027f947e2ab76b33dcfab6b53.r2.dev/Images/Aircel_Logo.svg.png"
  },
  {
    cardType: "dubbing",
    id: 5,
    title: "Venom (Tom Hardy) English",
    description: "A menacing, guttural tone as Venom, echoing Tom Hardy’s intensity in English.",
    contentUrl: "https://pub-f1f1657027f947e2ab76b33dcfab6b53.r2.dev/Dubbing/lv_0_20250413134134.mp4",
    visualUrl: "https://pub-f1f1657027f947e2ab76b33dcfab6b53.r2.dev/Thumbnail%20Images/Screenshot%202025-04-16%20235545.png"
  },
  {
    id: 6,
    title: "HoneyBee E-learning English",
    cardType: "voice-over",
    language: "English",
    type: "E-learning",
    contentUrl: "https://pub-f1f1657027f947e2ab76b33dcfab6b53.r2.dev/VOs/HoneyBee E-learning English.mp3"
    , visualUrl: "https://pub-f1f1657027f947e2ab76b33dcfab6b53.r2.dev/Images/Honey Bee.png"
  },
  {
    cardType: "dubbing",
    id: 7,
    title: "Paresh Rawal (Hungama) Hindi",
    description: "A hilarious, exaggerated Hindi performance mimicking Paresh Rawal’s comedic flair from Hungama.",
    contentUrl: "https://pub-f1f1657027f947e2ab76b33dcfab6b53.r2.dev/Dubbing/lv_0_20250409231608.mp4",
    visualUrl: "https://pub-f1f1657027f947e2ab76b33dcfab6b53.r2.dev/Thumbnail%20Images/Screenshot%202025-04-16%20235248.png"
  },
  {
    id: 8,
    title: "Breaking News English",
    cardType: "voice-over",
    language: "English",
    type: "Breaking News",
    contentUrl: "https://pub-f1f1657027f947e2ab76b33dcfab6b53.r2.dev/VOs/Breaking News English.mp3"
    , visualUrl: "https://pub-f1f1657027f947e2ab76b33dcfab6b53.r2.dev/Images/breaking-news-red-3d-text-free-png.png"
  },
  {
    cardType: "dubbing",
    id: 9,
    title: "Painty the Pirate/Mr. Krabs (SpongeBob)",
    description: "A hearty, pirate-inspired voice as Painty and the gruff / lovable Mr. Krabs from SpongeBob.",
    contentUrl: "https://pub-f1f1657027f947e2ab76b33dcfab6b53.r2.dev/Dubbing/lv_0_20250411004021.mp4",
    visualUrl: "https://pub-f1f1657027f947e2ab76b33dcfab6b53.r2.dev/Thumbnail%20Images/Screenshot%202025-04-16%20235405.png"
  },
  {
    id: 10,
    title: "Reliance Advertisement Hindi",
    cardType: "voice-over",
    language: "Hindi",
    type: "Advertisement",
    contentUrl: "https://pub-f1f1657027f947e2ab76b33dcfab6b53.r2.dev/VOs/Reliance Advertisment Hindi.mp3"
    , visualUrl: "https://pub-f1f1657027f947e2ab76b33dcfab6b53.r2.dev/Images/reliance.png"
  },
  {
    cardType: "dubbing",
    id: 11,
    title: "Pops (The Regular Show) English",
    description: "A whimsical, soft-spoken voice as Pops, radiating innocence and charm in English.",
    contentUrl: "https://pub-f1f1657027f947e2ab76b33dcfab6b53.r2.dev/Dubbing/lv_0_20250411093142.mp4",
    visualUrl: "https://pub-f1f1657027f947e2ab76b33dcfab6b53.r2.dev/Thumbnail%20Images/Screenshot%202025-04-16%20235314.png"
  },
  {
    id: 12,
    title: "Bus Announcement English",
    cardType: "voice-over",
    language: "English",
    type: "Announcement",
    contentUrl: "https://pub-f1f1657027f947e2ab76b33dcfab6b53.r2.dev/VOs/Bus Announcement English.mp3"
    , visualUrl: "https://pub-f1f1657027f947e2ab76b33dcfab6b53.r2.dev/Images/School Bus PNG Free Download - 960x960.png"
  },
  {
    id: 13,
    title: "Tata Motors Corporate English",
    cardType: "voice-over",
    language: "English",
    type: "Corporate",
    contentUrl: "https://pub-f1f1657027f947e2ab76b33dcfab6b53.r2.dev/VOs/Tata Motors Corporate English.mp3"
    , visualUrl: "https://pub-f1f1657027f947e2ab76b33dcfab6b53.r2.dev/Images/tata-motors.png"
  },
  {
    id: 14,
    title: "Tsunami Documentary Hindi",
    cardType: "voice-over",
    language: "Hindi",
    type: "Documentary",
    contentUrl: "https://pub-f1f1657027f947e2ab76b33dcfab6b53.r2.dev/VOs/Tsunami Documentary Hindi.mp3"
    , visualUrl: "https://pub-f1f1657027f947e2ab76b33dcfab6b53.r2.dev/Images/Tsunami.png"
  },
  {
    id: 15,
    title: "Invitation English",
    cardType: "voice-over",
    language: "English",
    type: "Invitation",
    contentUrl: "https://pub-f1f1657027f947e2ab76b33dcfab6b53.r2.dev/VOs/Invitation English.mp3"
    , visualUrl: "https://pub-f1f1657027f947e2ab76b33dcfab6b53.r2.dev/Images/imageedit_1_7191124503.png"
  },
  {
    id: 16,
    title: "Short Story English",
    cardType: "voice-over",
    language: "English",
    type: "Story",
    contentUrl: "https://pub-f1f1657027f947e2ab76b33dcfab6b53.r2.dev/VOs/Short Story English.mp3"
    , visualUrl: "https://pub-f1f1657027f947e2ab76b33dcfab6b53.r2.dev/Images/poemstory.png"
  },
]