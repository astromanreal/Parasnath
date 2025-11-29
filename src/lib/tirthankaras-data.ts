
export type Tirthankara = {
  id: string;
  number: number;
  name: string;
  hindi_name: string;
  symbol: string;
  color: string;
  birthplace: string;
  moksha_place: string;
  parents: { father: string; mother: string };
  notable_facts: string[];
  alternative_names?: string[];
  dynasty?: string;
  era?: string;
  life_span?: string;
  height?: string;
  age_at_renunciation?: string;
  age_at_omniscience?: string;
  age_at_moksha?: string;
  key_teachings?: string[];
  associated_temples?: {
    name: string;
    location: string;
    significance: string;
  }[];
  iconography?: {
    emblem: string;
    color?: string;
    posture: string;
    hair?: string;
    associated_deity: string;
    aura?: string;
    guardian_deity?: string;
    features?: string;
  };
  legacy?: {
    cultural: string[];
    literary: string[];
  };
  scriptural_references?: {
    text: string;
    author?: string;
    description?: string;
    language?: string;
    summary?: string;
  }[];
  quotes?: string[];
  media?: {
    images: { url: string; alt: string }[];
  };
  read_more_link?: string;
};


export const tirthankaras: Tirthankara[] = [
  {
    id: "rishabhanatha",
    number: 1,
    name: "Rishabhanatha",
    hindi_name: "ऋषभनाथ (आदिनाथ)",
    alternative_names: ["Adinath", "First Tirthankara"],
    symbol: "Bull",
    color: "Golden",
    birthplace: "Ayodhya (Uttar Pradesh, India)",
    moksha_place: "Mount Ashtapad (Himalayas)",
    parents: {
      father: "King Nabhiraja",
      mother: "Queen Marudevi"
    },
    dynasty: "Ikshvaku",
    era: "Before historical time (believed to be in the pre-historic era)",
    life_span: "8,400,000 purva (according to Jain cosmology)",
    height: "500 dhanusha (enormous, symbolic)",
    age_at_renunciation: "After living as a king and householder for millions of years",
    age_at_omniscience: "After 1,000 years of asceticism",
    age_at_moksha: "After completing 100,000 years post-kevala jnana",
    key_teachings: [
      "Introduced civilization to mankind: agriculture, art, music, cooking, writing",
      "The soul is eternal and independent",
      "Non-violence (Ahimsa) and self-restraint (Sanyam) are the foundation of spiritual progress"
    ],
    notable_facts: [
      "Considered the founder of Jain society and the first law-giver",
      "Had 100 sons including Bharata (first Chakravartin) and Bahubali (renowned yogi)",
      "Goddess Chakreshwari is associated as his Yakshini (protector deity)",
      "Depicted in meditative posture, usually with bull emblem below his seat"
    ],
    associated_temples: [
      {
        name: "Shri Rishabhdevji Temple (Kesariya Ji)",
        location: "Rajasthan, India",
        significance: "Major pilgrimage center for Shwetambara and Digambara sects"
      },
      {
        name: "Shri Adinath Temple",
        location: "Shikharji, Jharkhand",
        significance: "Marks the location where some traditions believe he attained moksha"
      },
      {
        name: "Bahubali Temple (Shravanabelagola)",
        location: "Karnataka",
        significance: "His son Bahubali’s statue honors his legacy"
      }
    ],
    iconography: {
      emblem: "Bull",
      color: "Golden",
      posture: "Padmasana (lotus) or Kayotsarga (standing meditation)",
      hair: "Long locks flowing down",
      associated_deity: "Chakreshwari Devi",
      aura: "Large golden halo behind the head"
    },
    legacy: {
      cultural: [
        "Rishabhanatha is mentioned in Hindu Puranas and also referenced in Rigveda as 'Rishabha Deva'",
        "Associated with Yoga, Jain cosmology, and Dharma foundations"
      ],
      literary: [
        "A detailed biography is found in the Kalpa Sūtra and Ādipurāṇa by Acharya Jinasena"
      ]
    },
    scriptural_references: [
      {
        text: "Ādipurāṇa",
        author: "Acharya Jinasena",
        language: "Sanskrit",
        summary: "Narrates the life of Rishabhanatha and his sons Bharata and Bahubali"
      },
      {
        text: "Kalpa Sūtra",
        description: "Contains detailed lives of major Tirthankaras including Adinath"
      }
    ],
    quotes: [
      "The one who conquers the self is the true conqueror.",
      "A soul, pure and detached, is the greatest wealth one can achieve."
    ],
    media: {
      images: [
        {
          url: "https://upload.wikimedia.org/wikipedia/commons/2/25/Rishabhanatha.jpg",
          alt: "Depiction of Rishabhanatha in meditative pose with bull symbol"
        }
      ]
    },
    read_more_link: "/tirthankaras/rishabhanatha"
  },
  {
    id: "ajitanatha",
    number: 2,
    name: "Ajitanatha",
    hindi_name: "अजितनाथ",
    alternative_names: ["Ajita", "Second Tirthankara"],
    symbol: "Elephant",
    color: "Golden",
    birthplace: "Ayodhya (Uttar Pradesh, India)",
    moksha_place: "Mount Sammed Shikharji (Jharkhand)",
    parents: {
      father: "King Jitashatru",
      mother: "Queen Vijaya"
    },
    dynasty: "Ikshvaku",
    era: "Ancient (post-Adinath, pre-historical)",
    life_span: "72 lakh years (symbolic)",
    height: "450 dhanusha (symbolic)",
    age_at_renunciation: "After long rule as a king",
    age_at_omniscience: "After deep penance and meditation",
    age_at_moksha: "Attained moksha at Shikharji after years of Kevala Jnana",
    key_teachings: [
      "Victory over the inner self is the true Ajita (invincibility)",
      "Practicing silence, compassion, and simplicity leads to liberation",
      "Non-violence in thought, word, and deed is the supreme vow"
    ],
    notable_facts: [
      "Ajitanatha is revered as a gentle and serene Tirthankara who emphasized inner victory",
      "He preached the same eternal dharma as Rishabhanatha, adapted for his era",
      "He had a strong following and is said to have led a sangha of thousands of monks and nuns",
      "Symbolized by the elephant, representing strength controlled by wisdom"
    ],
    associated_temples: [
      {
        name: "Ajitanatha Jain Temple",
        location: "Shri Digambar Jain Siddha Kshetra, Shikharji",
        significance: "Commemorates the site of his nirvana"
      },
      {
        name: "Ajitnath Temple, Deogarh",
        location: "Lalitpur, Uttar Pradesh",
        significance: "Historic temple site with detailed carvings of Ajitanatha"
      }
    ],
    iconography: {
      emblem: "Elephant",
      color: "Golden",
      posture: "Padmasana or Kayotsarga",
      aura: "Radiant calmness with elephant motif",
      associated_deity: "Rohini Devi (Yakshini)",
      guardian_deity: "Yaksha Ajita"
    },
    legacy: {
      cultural: [
        "Known as the silent conqueror, whose emphasis on internal renunciation inspired future monks",
        "Worshipped widely in both Shwetambara and Digambara sects"
      ],
      literary: [
        "Life and teachings referenced in Kalpa Sūtra and Jain Charitras",
        "Featured in Jain cosmological diagrams and sacred texts"
      ]
    },
    scriptural_references: [
      {
        text: "Kalpa Sūtra",
        description: "Chronicles his life, renunciation, and attainment of omniscience"
      },
      {
        text: "Trishashti Shalaka Purusha Charitra",
        author: "Acharya Hemachandra",
        summary: "Narrates the life events of Ajitanatha in detail"
      }
    ],
    quotes: [
      "The one who masters the mind is the true master of the world.",
      "Elephant-like strength is not in the body, but in control over desire."
    ],
    media: {
      images: [
        {
          url: "https://upload.wikimedia.org/wikipedia/commons/1/1f/Ajitanath.jpg",
          alt: "Ajitanatha Tirthankara in meditation with elephant emblem"
        }
      ]
    },
    read_more_link: "/tirthankaras/ajitanatha"
  },
  {
    id: "sambhavanatha",
    number: 3,
    name: "Sambhavanatha",
    hindi_name: "संभवनाथ",
    alternative_names: ["Sambhava Swami", "Third Tirthankara"],
    symbol: "Horse",
    color: "Golden",
    birthplace: "Shravasti (Uttar Pradesh, India)",
    moksha_place: "Mount Sammed Shikharji (Jharkhand)",
    parents: {
      father: "King Jitari",
      mother: "Queen Susena"
    },
    dynasty: "Ikshvaku",
    era: "Ancient (3rd in Jain cosmological time)",
    life_span: "60 lakh years (symbolic)",
    height: "400 dhanusha (symbolic)",
    age_at_renunciation: "After enjoying royal pleasures and performing duties",
    age_at_omniscience: "After intense meditation and self-discipline",
    age_at_moksha: "At Shikharji, following years of teaching after attaining omniscience",
    key_teachings: [
      "Sambhava (equanimity) is the highest spiritual virtue",
      "Peace, contentment, and humility are the keys to self-realization",
      "True freedom comes from detachment, not indulgence"
    ],
    notable_facts: [
      "He radiated serenity and spiritual strength from childhood",
      "Promoted the path of calmness and restraint among rulers and citizens",
      "Symbol (horse) reflects energy, grace, and movement toward liberation",
      "His aura brought peace even to violent beings"
    ],
    associated_temples: [
      {
        name: "Sambhavanatha Temple",
        location: "Shravasti, Uttar Pradesh",
        significance: "Birthplace shrine dedicated to the 3rd Tirthankara"
      },
      {
        name: "Sambhavnath Tonk",
        location: "Shikharji Hill",
        significance: "Marks the location where he attained Nirvana"
      }
    ],
    iconography: {
      emblem: "Horse",
      color: "Golden",
      posture: "Padmasana (seated) or Kayotsarga (standing)",
      associated_deity: "Prajnapthi Devi (Yakshini)",
      guardian_deity: "Trimukha Yaksha",
      features: "Calm facial expression, golden glow, horse emblem at base"
    },
    legacy: {
      cultural: [
        "Regarded as a model for peaceful kingship and spiritual renunciation",
        "Promoted harmony between spiritual seekers and householders"
      ],
      literary: [
        "His life story is preserved in Jain texts like Trishashti Shalaka Purusha Charitra"
      ]
    },
    scriptural_references: [
      {
        text: "Kalpa Sūtra",
        description: "Mentions his life events including birth, renunciation, and moksha"
      },
      {
        text: "Trishashti Shalaka Purusha Charitra",
        author: "Acharya Hemachandra",
        summary: "Contains poetic retellings of Sambhavanatha’s journey to liberation"
      }
    ],
    quotes: [
      "Balance your senses and you shall balance your soul.",
      "The one who walks the path of peace reaches the abode of liberation."
    ],
    media: {
      images: [
        {
          url: "https://jainuniversity.org/wp-content/uploads/2023/08/Sambhavnath.jpg",
          alt: "Idol of Sambhavanatha in golden color with horse symbol"
        }
      ]
    },
    read_more_link: "/tirthankaras/sambhavanatha"
  },
  {
    id: "abhinandananatha",
    number: 4,
    name: "Abhinandananatha",
    hindi_name: "अभिनंदननाथ",
    alternative_names: ["Abhinandan Swami", "Fourth Tirthankara"],
    symbol: "Monkey",
    color: "Golden",
    birthplace: "Ayodhya (Uttar Pradesh, India)",
    moksha_place: "Mount Sammed Shikharji (Jharkhand)",
    parents: {
      father: "King Samvara",
      mother: "Queen Siddhartha"
    },
    dynasty: "Ikshvaku",
    era: "Ancient (fourth era of Jain cosmic cycle)",
    life_span: "50 lakh years (symbolic)",
    height: "350 dhanusha (symbolic)",
    age_at_renunciation: "After fulfilling royal duties",
    age_at_omniscience: "After long penance and spiritual awakening",
    age_at_moksha: "After extensive teaching and guiding spiritual aspirants",
    key_teachings: [
      "Spiritual joy arises from detachment and simplicity",
      "The soul's happiness is not dependent on external wealth",
      "Live ethically, speak truthfully, and act with compassion"
    ],
    notable_facts: [
      "His name ‘Abhinandana’ means ‘delight’ — he was a source of joy and wisdom",
      "His presence brought peace and inspiration to society",
      "He inspired many to embrace monkhood and detachment",
      "His emblem (monkey) symbolizes awareness, agility, and sharpness of mind"
    ],
    associated_temples: [
      {
        name: "Abhinandananatha Jain Temple",
        location: "Ayodhya",
        significance: "Marks his birthplace and is a site of veneration"
      },
      {
        name: "Abhinandan Tonk",
        location: "Shikharji Hill, Jharkhand",
        significance: "Marks the location of his Nirvana"
      }
    ],
    iconography: {
      emblem: "Monkey",
      color: "Golden",
      posture: "Kayotsarga or Padmasana",
      associated_deity: "Vaishnavi Devi (Yakshini)",
      guardian_deity: "Yaksha Vishnudev",
      features: "Golden aura, calm expression, monkey emblem at base"
    },
    legacy: {
      cultural: [
        "Promoted the inner celebration of the soul through spiritual discipline",
        "Revered in Jain literature for his gentleness and joy-filled message"
      ],
      literary: [
        "His life is featured in several Jain narratives like Kalpa Sutra and Purana texts"
      ]
    },
    scriptural_references: [
      {
        text: "Kalpa Sūtra",
        description: "Includes details of his life events, renunciation, and liberation"
      },
      {
        text: "Trishashti Shalaka Purusha Charitra",
        author: "Acharya Hemachandra",
        summary: "Narrates his calm and joyful spiritual path in poetic style"
      }
    ],
    quotes: [
      "The soul’s delight is found not in the palace, but in peace.",
      "Detach with joy, and you shall rise above every sorrow."
    ],
    media: {
      images: [
        {
          url: "https://www.jainuniversity.org/images/tirthankars/Abhinandananath.png",
          alt: "Image of Abhinandananatha with monkey emblem"
        }
      ]
    },
    read_more_link: "/tirthankaras/abhinandananatha"
  },
  {
    id: "sumatinatha",
    number: 5,
    name: "Sumatinatha",
    hindi_name: "सुमतिनाथ",
    alternative_names: ["Sumati Swami", "Fifth Tirthankara"],
    symbol: "Goose (or Curlew)",
    color: "Golden",
    birthplace: "Ayodhya (Uttar Pradesh, India)",
    moksha_place: "Mount Sammed Shikharji (Jharkhand)",
    parents: {
      father: "King Megha",
      mother: "Queen Mangala"
    },
    dynasty: "Ikshvaku",
    era: "Ancient (early phase of Jain cosmological cycle)",
    life_span: "40 lakh years (symbolic)",
    height: "300 dhanusha (symbolic)",
    age_at_renunciation: "After ruling as a noble and peaceful king",
    age_at_omniscience: "Attained after long meditation under a Saal tree",
    age_at_moksha: "Left his physical body at Shikharji in complete liberation",
    key_teachings: [
      "Sumati (pure intellect) is the light that leads the soul to moksha",
      "Purity of thoughts is more powerful than rituals",
      "Practice simplicity, right thinking, and equanimity in all situations"
    ],
    notable_facts: [
      "Known for his serene wisdom and clarity of thought",
      "His teachings emphasized the refinement of intellect and moral behavior",
      "The goose (hamsa) symbolizes purity, discrimination, and graceful detachment",
      "He helped reconcile internal conflicts in many spiritual seekers of his time"
    ],
    associated_temples: [
      {
        name: "Sumatinatha Temple",
        location: "Ayodhya",
        significance: "Birthplace and pilgrimage site dedicated to him"
      },
      {
        name: "Sumatinath Tonk",
        location: "Shikharji Hill, Jharkhand",
        significance: "Site of his nirvana and liberation"
      }
    ],
    iconography: {
      emblem: "Goose (Hamsa)",
      color: "Golden",
      posture: "Padmasana or Kayotsarga",
      associated_deity: "Narayani Devi (Yakshini)",
      guardian_deity: "Yaksha Tumbaru",
      features: "Peaceful expression, goose emblem below, halo behind head"
    },
    legacy: {
      cultural: [
        "A symbol of enlightened intellect and the ideal philosopher-king",
        "Promoted deep thinking and quiet contemplation in Jain tradition"
      ],
      literary: [
        "His life and insights appear in Kalpa Sūtra, Trishashti Shalaka Purusha Charitra, and Jain Purāṇas"
      ]
    },
    scriptural_references: [
      {
        text: "Kalpa Sūtra",
        description: "Contains the traditional life story of Sumatinatha"
      },
      {
        text: "Trishashti Shalaka Purusha Charitra",
        author: "Acharya Hemachandra",
        summary: "Explores his teachings on intellect, conduct, and detachment"
      }
    ],
    quotes: [
      "Right knowledge is the lamp that removes the darkness of delusion.",
      "The swan of wisdom soars above the muddy waters of desire."
    ],
    media: {
      images: [
        {
          url: "https://www.jainuniversity.org/images/tirthankars/Sumatinath.png",
          alt: "Image of Sumatinatha with goose symbol beneath"
        }
      ]
    },
    read_more_link: "/tirthankaras/sumatinatha"
  },
  {
    id: "padmaprabha",
    number: 6,
    name: "Padmaprabha",
    hindi_name: "पद्मप्रभ",
    symbol: "Red Lotus",
    color: "Red",
    birthplace: "Kausambi (Uttar Pradesh, India)",
    moksha_place: "Mount Sammed Shikharji (Jharkhand)",
    parents: { father: "King Dharanendra", mother: "Queen Susima" },
    alternative_names: ["Padmaprabhu Swami", "Sixth Tirthankara"],
    dynasty: "Ikshvaku",
    era: "Ancient Jain cosmic timeline",
    life_span: "30 lakh years (symbolic)",
    height: "250 dhanusha (symbolic)",
    age_at_renunciation: "After ruling justly and fulfilling worldly duties",
    age_at_omniscience: "After deep meditation under a banyan tree",
    age_at_moksha: "Attained moksha at Shikharji after years of teaching",
    key_teachings: [
        "Like the lotus, the soul must rise above material mud to bloom in purity",
        "Non-violence and meditation are the roots of liberation",
        "Inner radiance comes through detachment and compassion"
    ],
    notable_facts: [
      "His name means ‘Lotus Radiance’ and he is often described as having a divine red aura",
      "Associated with profound calm and grace, even in challenging circumstances",
      "Inspired many monks and queens to renounce luxury and pursue moksha",
      "Lotus symbolizes spiritual awakening and inner purity"
    ],
    associated_temples: [
      {
          name: "Padmaprabha Jain Temple",
          location: "Kausambi (U.P.)",
          significance: "Birthplace shrine and historical tirtha"
      },
      {
          name: "Padmaprabha Tonk",
          location: "Shikharji, Jharkhand",
          significance: "Marks the site of moksha"
      },
      {
          name: "Padmaprabha Mandir, Moodabidri",
          location: "Karnataka",
          significance: "Famous temple featuring iconography of the sixth Tirthankara"
      }
    ],
    iconography: {
      emblem: "Red Lotus",
      color: "Red",
      posture: "Padmasana or Kayotsarga",
      associated_deity: "Manovega Devi (Yakshini)",
      guardian_deity: "Shanti Yaksha",
      features: "Lotus below pedestal, serene eyes, red halo around head"
    },
    legacy: {
      cultural: [
          "Serves as a symbol of spiritual resilience and blooming in adversity",
          "Popular among Jain devotees for his graceful teachings"
      ],
      literary: [
          "Revered in Jain scriptures like Kalpa Sutra and Charitra-granthas",
          "His lotus symbolism is widely invoked in Jain poetry and sculpture"
      ]
    },
    scriptural_references: [
      {
          text: "Kalpa Sūtra",
          description: "Details his birth, enlightenment, and liberation"
      },
      {
          text: "Trishashti Shalaka Purusha Charitra",
          author: "Acharya Hemachandra",
          summary: "Chronicles his peaceful rule and renunciation with poetic detail"
      }
    ],
    quotes: [
      "Be like the lotus — untouched by the mud, rooted in purity.",
      "The soul blossoms when freed from the attachments of the world."
    ],
    media: {
      images: [
          {
              url: "https://jainuniversity.org/images/tirthankars/Padmaprabha.png",
              alt: "Padmaprabha Tirthankara in meditative pose with red lotus symbol"
          }
      ]
    },
    read_more_link: "/tirthankaras/padmaprabha"
  },
  {
    id: "suparshvanatha",
    number: 7,
    name: "Suparshvanatha",
    hindi_name: "सुपार्श्वनाथ",
    symbol: "Swastika",
    color: "Golden",
    birthplace: "Varanasi (Kashi), Uttar Pradesh, India",
    moksha_place: "Mount Sammed Shikharji (Jharkhand)",
    parents: { father: "King Pratishta", mother: "Queen Prithvi" },
    alternative_names: ["Suparshva Swami", "Seventh Tirthankara"],
    dynasty: "Ikshvaku",
    era: "Ancient (pre-Parshvanatha)",
    life_span: "20 lakh years (symbolic)",
    height: "200 dhanusha (symbolic)",
    age_at_renunciation: "After fulfilling worldly responsibilities as a king",
    age_at_omniscience: "After deep penance and spiritual discipline",
    age_at_moksha: "Attained moksha on Mount Shikharji after long years of teaching and guiding",
    key_teachings: [
        "The swastika symbolizes the four states of existence — learn to transcend them through right conduct",
        "Control over one’s thoughts and senses leads to liberation",
        "Even in a restless world, peace can be achieved through equanimity"
    ],
    notable_facts: [
      "The Swastika symbol represents the four states of existence (gatis).",
      "Suparshvanatha promoted spiritual restraint and the inner purification of karma",
      "Worshipped for his peaceful and powerful presence",
      "His symbol, the swastika, is one of the most sacred in Jain tradition — representing auspiciousness and spiritual evolution",
      "He had a devoted sangha of monks and nuns who followed the path of strict asceticism"
    ],
    associated_temples: [
      {
          name: "Suparshvanatha Jain Temple",
          location: "Varanasi, Uttar Pradesh",
          significance: "His birthplace and a prominent site for Jain pilgrims"
      },
      {
          name: "Suparshvanatha Tonk",
          location: "Shikharji, Jharkhand",
          significance: "Place of his nirvana, part of the pilgrimage circuit"
      },
      {
          name: "Suparshvanath Temple",
          location: "Moodabidri, Karnataka",
          significance: "Beautiful historic temple featuring his iconography"
      }
    ],
    iconography: {
      emblem: "Swastika",
      color: "Green",
      posture: "Kayotsarga (standing) or Padmasana (seated)",
      associated_deity: "Vajrashrinkhala Devi (Yakshini)",
      guardian_deity: "Yaksha Matanga",
      features: "Green complexion, swastika symbol, calm and balanced expression"
    },
    legacy: {
      cultural: [
          "His teachings helped prepare the spiritual climate that culminated in the 23rd Tirthankara, Parshvanatha",
          "Widely revered in both Digambara and Shwetambara traditions"
      ],
      literary: [
          "His life is chronicled in Kalpa Sūtra and Trishashti Shalaka Purusha Charitra"
      ]
    },
    scriptural_references: [
      {
          text: "Kalpa Sūtra",
          description: "Provides key events from his birth to liberation"
      },
      {
          text: "Trishashti Shalaka Purusha Charitra",
          author: "Acharya Hemachandra",
          summary: "Narrates Suparshvanatha’s journey as a teacher of inner control and right conduct"
      }
    ],
    quotes: [
      "The mind is the greatest battlefield. Victory here is the truest freedom.",
      "In restraint, there is strength; in silence, there is realization."
    ],
    media: {
      images: [
          {
              url: "https://jainuniversity.org/images/tirthankars/Suparshvanath.png",
              alt: "Suparshvanatha Tirthankara with green aura and swastika symbol"
          }
      ]
    },
    read_more_link: "/tirthankaras/suparshvanatha"
  },
  {
    id: "chandraprabha",
    number: 8,
    name: "Chandraprabha",
    hindi_name: "चंद्रप्रभ",
    symbol: "Crescent Moon",
    color: "White",
    birthplace: "Chandrapuri (near Varanasi, Uttar Pradesh, India)",
    moksha_place: "Mount Sammed Shikharji (Jharkhand)",
    parents: { father: "King Mahasena", mother: "Queen Lakshmana" },
    alternative_names: ["Chandraprabhu Swami", "Eighth Tirthankara"],
    dynasty: "Ikshvaku",
    era: "Ancient (within early Jain cosmic age)",
    life_span: "10 lakh years (symbolic)",
    height: "150 dhanusha (symbolic)",
    age_at_renunciation: "After a short yet wise rule as king",
    age_at_omniscience: "After deep tapasya under a Naga tree",
    age_at_moksha: "Attained liberation at Shikharji after a life of spiritual service",
    key_teachings: [
        "Just like the moon shines through darkness, truth dispels ignorance",
        "Peace is the reflection of a mind that is undisturbed by external change",
        "Detachment and purity illuminate the path to liberation"
    ],
    notable_facts: [
      "His name means ‘moonlight’, symbolizing calm radiance",
      "From a young age, he displayed immense wisdom, calmness, and control over desires",
      "His peaceful nature and reflective discourses made him beloved among followers",
      "The moon emblem represents his soothing, reflective qualities"
    ],
    associated_temples: [
      {
          name: "Chandraprabha Jain Temple",
          location: "Chandrapuri (Varanasi)",
          significance: "His birthplace; pilgrimage site for both Jain sects"
      },
      {
          name: "Chandraprabha Tonk",
          location: "Shikharji, Jharkhand",
          significance: "Location where he attained moksha"
      },
      {
          name: "Shri Chandraprabhu Digambar Jain Mandir",
          location: "Delhi",
          significance: "Famous for its historical and artistic legacy"
      }
    ],
    iconography: {
      emblem: "Moon",
      color: "White",
      posture: "Padmasana (seated lotus) or Kayotsarga (standing meditation)",
      associated_deity: "Bhrikuti Devi (Yakshini)",
      guardian_deity: "Yaksha Chandraprabha",
      features: "Radiant white aura, serene moon symbol below his seat"
    },
    legacy: {
      cultural: [
          "Seen as a model of grace, cool-headed leadership, and philosophical clarity",
          "Moon is often used in Jain art and metaphors to represent his influence"
      ],
      literary: [
          "Featured in Kalpa Sūtra and Jain Purāṇas with poetic elaboration of his spiritual journey"
      ]
    },
    scriptural_references: [
      {
          text: "Kalpa Sūtra",
          description: "Records his birth, renunciation, kevalgyan, and moksha"
      },
      {
          text: "Trishashti Shalaka Purusha Charitra",
          author: "Acharya Hemachandra",
          summary: "Celebrates his reflective wisdom and deep serenity"
      }
    ],
    quotes: [
      "Like the moon, let your presence bring coolness to a burning world.",
      "Wisdom does not shout — it shines."
    ],
    media: {
      images: [
          {
              url: "https://jainuniversity.org/images/tirthankars/Chandraprabha.png",
              alt: "Chandraprabha Tirthankara in white posture with moon symbol"
          }
      ]
    },
    read_more_link: "/tirthankaras/chandraprabha"
  },
  {
    id: "pushpadanta",
    number: 9,
    name: "Pushpadanta (Suvidhinath)",
    hindi_name: "पुष्पदंत (सुविधिनाथ)",
    symbol: "Crocodile (or Dolphin)",
    color: "White",
    birthplace: "Kakandi (modern-day Bihar, India)",
    moksha_place: "Mount Sammed Shikharji (Jharkhand)",
    parents: { father: "King Sugriva", mother: "Queen Rama" },
    alternative_names: ["Pushpadanta Swami", "Ninth Tirthankara"],
    dynasty: "Ikshvaku",
    era: "Ancient (before the age of King Bharata)",
    life_span: "8 lakh years (symbolic)",
    height: "100 dhanusha (symbolic)",
    age_at_renunciation: "After fulfilling royal responsibilities with justice",
    age_at_omniscience: "Achieved Kevala Jnana through deep meditation",
    age_at_moksha: "Attained liberation after years of preaching dharma",
    key_teachings: [
        "Live like a flower — beautiful, detached, and spreading fragrance without discrimination",
        "One should conquer pride and cultivate compassion",
        "The body is temporary — realize the imperishable soul through knowledge and right conduct"
    ],
    notable_facts: [
      "Also known as Suvidhinath, as he established righteous conduct (vidhi).",
      "Also known as Pushpadanta, meaning 'flower-toothed', symbolizing purity in thought and speech",
      "The crocodile (makara) represents control over dangerous desires and instincts",
      "He taught in both royal courts and forests, inspiring ascetics and householders alike",
      "Encouraged holistic spiritual development — of intellect, ethics, and meditation"
    ],
    associated_temples: [
      {
          name: "Pushpadanta Jain Temple",
          location: "Kakandi, Bihar",
          significance: "His birthplace, now a Jain pilgrimage site"
      },
      {
          name: "Suvidhinatha Tonk",
          location: "Mount Sammed Shikharji, Jharkhand",
          significance: "Marks the spot of his nirvana"
      },
      {
          name: "Pushpadanta Mandir, Moodabidri",
          location: "Karnataka",
          significance: "Rich in Jain iconography of Tirthankaras"
      }
    ],
    iconography: {
      emblem: "Crocodile (Makara)",
      color: "White",
      posture: "Kayotsarga (standing meditation) or Padmasana (seated lotus)",
      associated_deity: "Manavi Devi (Yakshini)",
      guardian_deity: "Ajita Yaksha",
      features: "Crocodile emblem beneath, calm white aura, gentle expression"
    },
    legacy: {
      cultural: [
          "Popular among Jain artists and poets for his symbol of flower and crocodile balance",
          "Teachings emphasized the taming of one’s base instincts through gentle wisdom"
      ],
      literary: [
          "Referenced in several Jain compositions including Kalpa Sutra and Purana kathas"
      ]
    },
    scriptural_references: [
      {
          text: "Kalpa Sūtra",
          description: "Narrates his life events, spiritual awakening, and moksha"
      },
      {
          text: "Trishashti Shalaka Purusha Charitra",
          author: "Acharya Hemachandra",
          summary: "Detailed poetic account of his path to enlightenment"
      }
    ],
    quotes: [
      "The soul blooms when it is rooted in non-violence and wisdom.",
      "Speak like a flower — soft, fragrant, and pure."
    ],
    media: {
      images: [
          {
              url: "https://jainuniversity.org/images/tirthankars/Pushpadanta.png",
              alt: "Image of Suvidhinatha (Pushpadanta) with crocodile symbol"
          }
      ]
    },
    read_more_link: "/tirthankaras/suvidhinatha"
  },
  {
    id: "shitalanatha",
    number: 10,
    name: "Shitalanatha",
    hindi_name: "शीतलनाथ",
    symbol: "Shrivatsa (or Wishing Tree)",
    color: "Golden",
    birthplace: "Bhadilpur (Present-day Bhadrak, Odisha or Bihar)",
    moksha_place: "Mount Sammed Shikharji (Jharkhand)",
    parents: { father: "King Dridharatha", mother: "Queen Nanda" },
    alternative_names: ["Shital Nath Swami", "Tenth Tirthankara"],
    dynasty: "Ikshvaku",
    era: "Ancient (early Jain time cycle)",
    life_span: "6 lakh years (symbolic)",
    height: "90 dhanusha (symbolic)",
    age_at_renunciation: "After leading an ideal royal life and fulfilling dharma",
    age_at_omniscience: "Gained Kevala Jnana through intense meditation",
    age_at_moksha: "Attained nirvana at Shikharji after years of guiding souls",
    key_teachings: [
        "Peace is born from inner discipline, not outer control",
        "The soul is naturally cool and unshaken — purify it through detachment",
        "True fulfillment is not in desires but in dissolving them"
    ],
    notable_facts: [
      "His presence brought a soothing coolness (Shitalata) to the world.",
      "The name 'Shitalanatha' means 'Lord of Coolness', symbolic of his calm and composed nature",
      "His emblem — the Kalpavriksha — represents wish fulfillment through spiritual realization, not materialism",
      "He promoted ahimsa, patience, and mental clarity as paths to liberation",
      "His life inspired kings and sages alike to abandon ego and cultivate humility"
    ],
    associated_temples: [
      {
          name: "Shitalanatha Jain Temple",
          location: "Bhaddilpur",
          significance: "Birthplace of the 10th Tirthankara"
      },
      {
          name: "Shitalanatha Tonk",
          location: "Mount Sammed Shikharji, Jharkhand",
          significance: "Sacred site of his nirvana"
      },
      {
          name: "Shitalanatha Basadi, Moodabidri",
          location: "Karnataka",
          significance: "Ancient and artistic Digambara temple"
      }
    ],
    iconography: {
      emblem: "Kalpavriksha (Wishing Tree)",
      color: "Golden",
      posture: "Padmasana or Kayotsarga",
      associated_deity: "Ashoka Devi (Yakshini)",
      guardian_deity: "Yaksha Brahma",
      features: "Golden aura, calm face, tree symbol beneath the seat"
    },
    legacy: {
      cultural: [
          "Worshipped as a divine force of coolness and clarity",
          "His name is invoked in Jain prayers seeking inner peace and mental steadiness"
      ],
      literary: [
          "His journey is preserved in Kalpa Sutra and Jain cosmological scriptures",
          "Acharya Hemachandra included him among the 'Shalaka Purushas' (great beings)"
      ]
    },
    scriptural_references: [
      {
          text: "Kalpa Sūtra",
          description: "Accounts of his life, teachings, renunciation, and liberation"
      },
      {
          text: "Trishashti Shalaka Purusha Charitra",
          author: "Acharya Hemachandra",
          summary: "Illustrates the story of his perfect detachment and mental coolness"
      }
    ],
    quotes: [
      "Still the storm within, and the soul shall shine like the moon.",
      "The tree of desire bears sorrow — plant detachment and reap liberation."
    ],
    media: {
      images: [
          {
              url: "https://jainuniversity.org/images/tirthankars/Shitalanatha.png",
              alt: "Shitalanatha Tirthankara in golden color with Kalpavriksha symbol"
          }
      ]
    },
    read_more_link: "/tirthankaras/shitalanatha"
  },
  {
    id: "shreyansanatha",
    number: 11,
    name: "Shreyansanatha",
    hindi_name: "श्रेयांसनाथ",
    symbol: "Rhinoceros",
    color: "Golden",
    birthplace: "Simhapuri",
    moksha_place: "Shikharji",
    parents: { father: "King Vishnu", mother: "Queen Vishna" },
    notable_facts: [
      "He showed the path of ultimate spiritual welfare (Shreyas).",
    ],
    alternative_names: ["Shreyans Nath Swami", "Eleventh Tirthankara"],
    dynasty: "Ikshvaku",
    era: "Ancient Jain era (early half of current time cycle)",
    life_span: "6 lakh years (symbolic)",
    height: "80 dhanusha (symbolic)",
    age_at_renunciation: "After fulfilling duties as an ideal king",
    age_at_omniscience: "Attained Kevala Jnana through deep meditation",
    age_at_moksha: "Liberated at Shikharji after long spiritual guidance",
    key_teachings: [
        "True prosperity comes from detachment, not accumulation",
        "Patience and discipline are greater than power",
        "Conquer inner enemies — anger, pride, deceit, and greed — to attain peace"
    ],
    associated_temples: [
        {
            name: "Shreyansanatha Jain Temple",
            location: "Singhpur, Uttar Pradesh",
            significance: "His birthplace and a revered pilgrimage site"
        },
        {
            name: "Shreyansanatha Tonk",
            location: "Shikharji, Jharkhand",
            significance: "Place of his Nirvana"
        },
        {
            name: "Shri Shreyansnath Mandir",
            location: "Moodabidri, Karnataka",
            significance: "Features large stone carvings of this Tirthankara"
        }
    ],
    iconography: {
        emblem: "Rhinoceros",
        color: "Golden",
        posture: "Kayotsarga or Padmasana",
        associated_deity: "Vajrasrinkhala Devi (Yakshini)",
        guardian_deity: "Yaksha Shreyansa",
        features: "Rhinoceros symbol on pedestal, radiant golden aura, balanced expression"
    },
    legacy: {
        cultural: [
            "Symbol of righteous leadership, moral strength, and disciplined governance",
            "Ideal of spiritual prosperity, invoked by Jain business communities"
        ],
        literary: [
            "His story is found in Kalpa Sutra and Hemachandra's Trishashti Shalaka Purusha Charitra"
        ]
    },
    scriptural_references: [
        {
            text: "Kalpa Sūtra",
            description: "Documents his divine birth, teachings, and liberation"
        },
        {
            text: "Trishashti Shalaka Purusha Charitra",
            author: "Acharya Hemachandra",
            summary: "Narrates his righteous reign and spiritual journey"
        }
    ],
    quotes: [
        "Where there is detachment, there is true prosperity.",
        "The strongest ruler is the one who rules himself."
    ],
    media: {
        images: [
            {
                url: "https://jainuniversity.org/images/tirthankars/Shreyansanatha.png",
                alt: "Shreyansanatha Tirthankara with rhinoceros symbol beneath"
            }
        ]
    },
    read_more_link: "/tirthankaras/shreyansanatha"
  },
  {
    id: "vasupujya",
    number: 12,
    name: "Vasupujya",
    hindi_name: "वासुपूज्य",
    symbol: "Buffalo",
    color: "Red",
    birthplace: "Champapuri",
    moksha_place: "Champapuri",
    parents: { father: "King Vasupujya", mother: "Queen Jaya" },
    notable_facts: [
      "One of the five Tirthankaras whose major life events (kalyanakas) occurred in a single place.",
    ],
    alternative_names: ["Vasupujya Swami", "Dwadash Tirthankara"],
    dynasty: "Ikshvaku",
    era: "Middle phase of the Jain time cycle",
    life_span: "60,000 years (symbolic)",
    height: "70 dhanusha (symbolic)",
    age_at_renunciation: "After a just and peaceful rule as king",
    age_at_omniscience: "Attained Kevala Jnana through deep penance and non-attachment",
    age_at_moksha: "Attained moksha at the same place he was born — a rare occurrence",
    key_teachings: [
        "Victory over the senses is the foundation of spiritual mastery",
        "Conquer pride through humility and violence through forgiveness",
        "Real liberation lies beyond honor and insult, pleasure and pain"
    ],
    associated_temples: [
        {
            name: "Vasupujya Jain Mandir",
            location: "Champapuri, Bihar",
            significance: "Birthplace and moksha site; major Digambara & Shwetambara pilgrimage spot"
        },
        {
            name: "Vasupujya Swami Jain Temple",
            location: "Kolkata",
            significance: "A major temple for urban Jains"
        }
    ],
    iconography: {
        emblem: "Buffalo",
        color: "Red",
        posture: "Kayotsarga or Padmasana",
        associated_deity: "Dharanendra Devi (Yakshini)",
        guardian_deity: "Yaksha Vajra",
        features: "Red aura, powerful yet composed expression, buffalo symbol beneath"
    },
    legacy: {
        cultural: [
            "Symbol of spiritual power mastered through humility",
            "Champapuri hosts grand events during his jayanti (birth anniversary)"
        ],
        literary: [
            "Described in detail in Kalpa Sutra and Hemachandra’s Trishashti Shalaka Purusha Charitra"
        ]
    },
    scriptural_references: [
        {
            text: "Kalpa Sūtra",
            description: "Describes his miraculous birth, renunciation, and moksha"
        },
        {
            text: "Trishashti Shalaka Purusha Charitra",
            author: "Acharya Hemachandra",
            summary: "His life story serves as a lesson in sense-control and spiritual discipline"
        }
    ],
    quotes: [
        "He who conquers his senses conquers all worlds.",
        "Real worship is not in offering flowers, but in living with purity and control."
    ],
    media: {
        images: [
            {
                url: "https://jainuniversity.org/images/tirthankars/Vasupujya.png",
                alt: "Vasupujya Tirthankara with buffalo symbol"
            }
        ]
    },
    read_more_link: "/tirthankaras/vasupujya"
  },
  {
    id: "vimalanatha",
    number: 13,
    name: "Vimalanatha",
    hindi_name: "विमलनाथ",
    symbol: "Boar",
    color: "Golden",
    birthplace: "Kampilya",
    moksha_place: "Shikharji",
    parents: { father: "King Kritavarman", mother: "Queen Shyama" },
    notable_facts: [
      "He taught the path to purify (Vimala) the soul from karmic impurities.",
    ],
    alternative_names: ["Vimal Nath Swami", "Thirteenth Tirthankara"],
    dynasty: "Ikshvaku",
    era: "Ancient Jain era",
    life_span: "6 lakh years (symbolic)",
    height: "60 dhanusha (symbolic)",
    age_at_renunciation: "After a dutiful and dharmic rule",
    age_at_omniscience: "Through deep internal purification and meditation",
    age_at_moksha: "Liberated from worldly cycle at Shikharji after spiritual upliftment of many",
    key_teachings: [
        "Purity of thought is the true purifier of the soul",
        "Renounce deceit, delusion, and desire to reflect the Atman's natural brilliance",
        "Non-violence is not just external — it begins with pure intent"
    ],
    associated_temples: [
        {
            name: "Vimalanatha Jain Temple",
            location: "Kampilya, Uttar Pradesh",
            significance: "Birthplace of the Tirthankara"
        },
        {
            name: "Vimalanatha Tonk",
            location: "Shikharji, Jharkhand",
            significance: "Place of his liberation — part of sacred Shikharji trail"
        },
        {
            name: "Vimalnath Swami Jain Derasar",
            location: "Ahmedabad, Gujarat",
            significance: "Popular city temple dedicated to Vimalanatha"
        }
    ],
    iconography: {
        emblem: "Boar (Varaha)",
        color: "Golden",
        posture: "Padmasana or Kayotsarga",
        associated_deity: "Vajrasrinkhala Devi (Yakshini)",
        guardian_deity: "Yaksha Shyama",
        features: "Peaceful golden aura, boar symbol beneath, serene expression"
    },
    legacy: {
        cultural: [
            "Worshipped as the symbol of absolute purity and inner fearlessness",
            "Frequently invoked in Jain hymns and purification prayers"
        ],
        literary: [
            "Narratives of his life are preserved in Jain Puranas and Hemachandra’s works"
        ]
    },
    scriptural_references: [
        {
            text: "Kalpa Sūtra",
            description: "Mentions his life story, moksha, and spiritual insights"
        },
        {
            text: "Trishashti Shalaka Purusha Charitra",
            author: "Acharya Hemachandra",
            summary: "Details his rule, renunciation, and contributions to dharma"
        }
    ],
    quotes: [
        "Cleanse the mirror of your soul — let your true self shine forth.",
        "Where there is purity, there is liberation."
    ],
    media: {
        images: [
            {
                url: "https://jainuniversity.org/images/tirthankars/Vimalanatha.png",
                alt: "Vimalanatha Tirthankara with boar symbol and golden aura"
            }
        ]
    },
    read_more_link: "/tirthankaras/vimalanatha"
  },
  {
    id: "anantanatha",
    number: 14,
    name: "Anantanatha",
    hindi_name: "अनंतनाथ",
    symbol: "Falcon (or Bear)",
    color: "Golden",
    birthplace: "Ayodhya",
    moksha_place: "Shikharji",
    parents: { father: "King Simhasena", mother: "Queen Suyasha" },
    notable_facts: [
      "He possessed infinite (Ananta) knowledge and vision.",
    ],
    alternative_names: ["Anant Nath Swami", "Fourteenth Tirthankara"],
    dynasty: "Ikshvaku",
    era: "Middle era of the current descending cycle (Avasarpini)",
    life_span: "3 lakh years (symbolic)",
    height: "50 dhanusha (symbolic)",
    age_at_renunciation: "After fulfilling royal duties with detachment",
    age_at_omniscience: "Attained Kevala Jnana through intense meditation and control of desires",
    age_at_moksha: "Liberated at Shikharji after years of teaching the path of truth",
    key_teachings: [
        "Desires are endless — detachment is the only path to peace",
        "The soul is infinite — recognize it by shedding karma, not by gaining possessions",
        "Spiritual clarity comes from fearlessness and restraint"
    ],
    associated_temples: [
        {
            name: "Anantanatha Jain Temple",
            location: "Ayodhya, Uttar Pradesh",
            significance: "His birthplace and revered pilgrimage site"
        },
        {
            name: "Anantanatha Tonk",
            location: "Shikharji, Jharkhand",
            significance: "Location of his moksha"
        },
        {
            name: "Anantanath Basadi",
            location: "Moodabidri, Karnataka",
            significance: "Features rich Digambara iconography of the Tirthankaras"
        }
    ],
    iconography: {
        emblem: "Falcon (or Hawk)",
        color: "Golden",
        posture: "Padmasana or Kayotsarga",
        associated_deity: "Vajra Devi (Yakshini)",
        guardian_deity: "Yaksha Ananta",
        features: "Falcon symbol on pedestal, golden hue, penetrating gaze"
    },
    legacy: {
        cultural: [
            "Invoked in prayers related to inner strength and breaking free from attachments",
            "Represents infinite spiritual potential and limitless compassion"
        ],
        literary: [
            "His life is recorded in the Jain Agamas and works like Trishashti Shalaka Purusha Charitra"
        ]
    },
    scriptural_references: [
        {
            text: "Kalpa Sūtra",
            description: "Narrates his life, teachings, and nirvana in sacred detail"
        },
        {
            text: "Trishashti Shalaka Purusha Charitra",
            author: "Acharya Hemachandra",
            summary: "Explores his enlightenment and spiritual impact"
        }
    ],
    quotes: [
        "The soul knows no bounds — it is the ego that creates walls.",
        "Fly above attachment like the falcon above the world."
    ],
    media: {
        images: [
            {
                url: "https://jainuniversity.org/images/tirthankars/Anantanatha.png",
                alt: "Anantanatha Tirthankara with falcon symbol and golden aura"
            }
        ]
    },
    read_more_link: "/tirthankaras/anantanatha"
  },
  {
    id: "dharmanatha",
    number: 15,
    name: "Dharmanatha",
    hindi_name: "धर्मनाथ",
    symbol: "Vajra (Thunderbolt)",
    color: "Golden",
    birthplace: "Ratnapuri",
    moksha_place: "Shikharji",
    parents: { father: "King Bhanu", mother: "Queen Suvrata" },
    notable_facts: [
      "He was the protector and propagator of Dharma (righteousness).",
    ],
    alternative_names: ["Dharmanath Swami", "Fifteenth Tirthankara"],
    dynasty: "Ikshvaku",
    era: "Middle era of the Avasarpini cycle",
    life_span: "2 lakh years (symbolic)",
    height: "45 dhanusha (symbolic)",
    age_at_renunciation: "After fulfilling his royal duties and embracing detachment",
    age_at_omniscience: "Through inner austerity and profound spiritual realization",
    age_at_moksha: "Attained at Shikharji after leading countless souls to truth",
    key_teachings: [
        "Dharma is the eternal law — not man-made rules, but truth, non-violence, and self-restraint",
        "Power without righteousness is destruction; dharma without compassion is incomplete",
        "The soul’s nature is pure — cleanse it through right knowledge, faith, and conduct"
    ],
    associated_temples: [
        {
            name: "Dharmanatha Jain Temple",
            location: "Ratnapuri (Uttar Pradesh or Bengal)",
            significance: "Believed to be his birthplace; visited by both Digambara and Shwetambara followers"
        },
        {
            name: "Dharmanatha Tonk",
            location: "Shikharji, Jharkhand",
            significance: "Sacred nirvana spot on the pilgrimage trail"
        },
        {
            name: "Dharmanatha Mandir",
            location: "Moodabidri, Karnataka",
            significance: "One of the 1000-pillared temples featuring his iconography"
        }
    ],
    iconography: {
        emblem: "Vajra (Thunderbolt)",
        color: "Golden",
        posture: "Kayotsarga or Padmasana",
        associated_deity: "Vairotya Devi (Yakshini)",
        guardian_deity: "Yaksha Sarvanubhuti",
        features: "Thunderbolt symbol on pedestal, golden glow, calm and majestic expression"
    },
    legacy: {
        cultural: [
            "Remembered for his embodiment of unshakable truth and peaceful strength",
            "His symbol (Vajra) is widely used in Jain prayers for spiritual strength and focus"
        ],
        literary: [
            "Described in Jain scriptures as a spiritual warrior of dharma in both internal and external worlds"
        ]
    },
    scriptural_references: [
        {
            text: "Kalpa Sūtra",
            description: "Highlights his life of righteousness and renunciation"
        },
        {
            text: "Trishashti Shalaka Purusha Charitra",
            author: "Acharya Hemachandra",
            summary: "Narrates his life as a symbol of the indestructible dharma"
        }
    ],
    quotes: [
        "The soul is invincible — sharpen it with the blade of dharma.",
        "Let dharma guide you, and you will fear no thunder."
    ],
    media: {
        images: [
            {
                url: "https://jainuniversity.org/images/tirthankars/Dharmanatha.png",
                alt: "Dharmanatha Tirthankara with vajra symbol and golden aura"
            }
        ]
    },
    read_more_link: "/tirthankaras/dharmanatha"
  },
  {
    id: "shantinatha",
    number: 16,
    name: "Shantinatha",
    hindi_name: "शांतिनाथ",
    symbol: "Deer",
    color: "Golden",
    birthplace: "Hastinapur",
    moksha_place: "Shikharji",
    parents: { father: "King Vishvasena", mother: "Queen Achira" },
    notable_facts: [
      "He was both a Tirthankara and a Chakravartin (world emperor).",
      "His reign brought universal peace (Shanti).",
    ],
    alternative_names: ["Shantinath Swami", "Sixteenth Tirthankara"],
    dynasty: "Ikshvaku",
    era: "Descending cycle (Avasarpini), mid-phase",
    life_span: "1 lakh years (symbolic)",
    height: "40 dhanusha (symbolic)",
    age_at_renunciation: "After ruling peacefully and promoting dharma in his kingdom",
    age_at_omniscience: "Attained Kevala Jnana through serenity and self-mastery",
    age_at_moksha: "Liberated at Shikharji after a life of spiritual guidance",
    key_teachings: [
        "Peace is not the absence of conflict, but the mastery of response",
        "The soul is naturally serene — purify it through self-restraint and compassion",
        "Forgiveness and equanimity are the highest virtues of a spiritual seeker"
    ],
    associated_temples: [
        {
            name: "Shantinath Jain Temple",
            location: "Hastinapur, Uttar Pradesh",
            significance: "His birthplace; major site for Digambara & Shwetambara followers"
        },
        {
            name: "Shantinatha Tonk",
            location: "Shikharji, Jharkhand",
            significance: "Site of his nirvana (liberation)"
        },
        {
            name: "Shantinath Jain Mandir",
            location: "Khajuraho, Madhya Pradesh",
            significance: "Famous for its detailed sculptures and Jain heritage"
        }
    ],
    iconography: {
        emblem: "Deer",
        color: "Golden",
        posture: "Padmasana or Kayotsarga",
        associated_deity: "Narayani Devi (Yakshini)",
        guardian_deity: "Yaksha Kimpurusha",
        features: "Calm golden aura, deer symbol on pedestal, peaceful face"
    },
    legacy: {
        cultural: [
            "Regarded as the embodiment of supreme tranquility and ethical kingship",
            "Worshipped for healing inner turmoil and promoting family harmony"
        ],
        literary: [
            "Featured in Jain scriptures as a peacemaker and enlightened guide"
        ]
    },
    scriptural_references: [
        {
            text: "Kalpa Sūtra",
            description: "Describes his peaceful life, renunciation, and moksha"
        },
        {
            text: "Trishashti Shalaka Purusha Charitra",
            author: "Acharya Hemachandra",
            summary: "Illustrates his peaceful nature and enlightened state"
        }
    ],
    quotes: [
        "A calm soul is mightier than a thousand armies.",
        "Stillness is not weakness — it is the power that transforms karma."
    ],
    media: {
        images: [
            {
                url: "https://jainuniversity.org/images/tirthankars/Shantinatha.png",
                alt: "Shantinatha Tirthankara with deer symbol and golden glow"
            }
        ]
    },
    read_more_link: "/tirthankaras/shantinatha"
  },
  {
    id: "kunthunatha",
    number: 17,
    name: "Kunthunatha",
    hindi_name: "कुन्थुनाथ",
    symbol: "Goat",
    color: "Golden",
    birthplace: "Hastinapur",
    moksha_place: "Shikharji",
    parents: { father: "King Surya", mother: "Queen Shridevi" },
    notable_facts: [
      "He was also a Chakravartin, emphasizing compassion for all living beings (Kunthu means a heap of jewels, signifying virtues).",
    ],
    alternative_names: ["Kunthunath Swami", "Seventeenth Tirthankara"],
    dynasty: "Ikshvaku",
    era: "Avasarpini (Descending Time Cycle)",
    life_span: "95,000 years (symbolic)",
    height: "35 dhanusha (symbolic)",
    age_at_renunciation: "After successfully ruling as a Chakravartin (Universal Monarch)",
    age_at_omniscience: "Through severe austerities and internal detachment",
    age_at_moksha: "Attained moksha at Shikharji after guiding countless beings",
    key_teachings: [
        "Mastery over one’s mind is the highest form of conquest",
        "Conquer desires with discipline, not with suppression",
        "True victory is over ego, attachment, and karma"
    ],
    associated_temples: [
        {
            name: "Kunthunath Jain Temple",
            location: "Hastinapur, Uttar Pradesh",
            significance: "His birthplace and a central Jain pilgrimage site"
        },
        {
            name: "Kunthunatha Tonk",
            location: "Shikharji, Jharkhand",
            significance: "Place of his nirvana (moksha)"
        },
        {
            name: "Kunthunath Derasar",
            location: "Jamnagar, Gujarat",
            significance: "Prominent Swetambara temple with marble idol of the Tirthankara"
        }
    ],
    iconography: {
        emblem: "Goat",
        color: "Golden",
        posture: "Padmasana or Kayotsarga",
        associated_deity: "Chakreshvari Devi (Yakshini)",
        guardian_deity: "Yaksha Gandharva",
        features: "Golden radiance, goat symbol on pedestal, serene facial expression"
    },
    legacy: {
        cultural: [
            "Symbol of inner power and non-violent leadership",
            "Invoked in prayers seeking mastery over passions and discipline"
        ],
        literary: [
            "Praised in scriptures for his transition from world conqueror to soul liberator"
        ]
    },
    scriptural_references: [
        {
            text: "Kalpa Sūtra",
            description: "Describes his Chakravartin life and Tirthankarahood"
        },
        {
            text: "Trishashti Shalaka Purusha Charitra",
            author: "Acharya Hemachandra",
            summary: "Details his renunciation and path to moksha"
        }
    ],
    quotes: [
        "The soul that conquers the self shines brighter than the sun.",
        "Let not power bind you — use it to set yourself free."
    ],
    media: {
        images: [
            {
                url: "https://jainuniversity.org/images/tirthankars/Kunthunatha.png",
                alt: "Kunthunatha Tirthankara with goat symbol and golden halo"
            }
        ]
    },
    read_more_link: "/tirthankaras/kunthunatha"
  },
  {
    id: "aranatha",
    number: 18,
    name: "Aranatha",
    hindi_name: "अरनाथ",
    symbol: "Fish (or Nandyavarta)",
    color: "Golden",
    birthplace: "Hastinapur",
    moksha_place: "Shikharji",
    parents: { father: "King Sudarshana", mother: "Queen Devi" },
    notable_facts: [
      "The third consecutive Tirthankara who was also a Chakravartin.",
      "His teachings focused on breaking the cycle (Ara) of birth and death.",
    ],
    alternative_names: ["Aranath Swami", "Eighteenth Tirthankara"],
    dynasty: "Ikshvaku",
    era: "Avasarpini (Descending Cycle)",
    life_span: "84,000 years (symbolic)",
    height: "30 dhanusha (symbolic)",
    age_at_renunciation: "After ruling as a Chakravartin (Universal Monarch)",
    age_at_omniscience: "Through tapas (austerities) and profound self-restraint",
    age_at_moksha: "Liberated at Shikharji after a life of teaching truth and detachment",
    key_teachings: [
        "Dharma must be defended not by weapons, but by inner purity and right conduct",
        "Balance between worldly duties and spiritual aspirations is the true path",
        "The soul is stronger than any kingdom — rule it with awareness"
    ],
    associated_temples: [
        {
            name: "Aranatha Jain Temple",
            location: "Hastinapur, Uttar Pradesh",
            significance: "Birthplace and major pilgrimage center"
        },
        {
            name: "Aranatha Tonk",
            location: "Shikharji, Jharkhand",
            significance: "His moksha site; part of the 20-tonk pilgrimage trail"
        },
        {
            name: "Aranath Swami Mandir",
            location: "Moodabidri, Karnataka",
            significance: "Home to a prominent idol of Aranatha among the 1000-pillared Jain basadi"
        }
    ],
    iconography: {
        emblem: "Nandavarta",
        color: "Golden",
        posture: "Padmasana or Kayotsarga",
        associated_deity: "Kushmandini Devi (Yakshini)",
        guardian_deity: "Yaksha Yaksheshwara",
        features: "Golden halo, Nandavarta beneath pedestal, calm and majestic expression"
    },
    legacy: {
        cultural: [
            "Embodies the spiritual warrior — one who overcomes the battlefield of the mind",
            "Symbol of universal order through inner law and virtue"
        ],
        literary: [
            "His life and teachings are revered in Jain texts as a symbol of dharma manifesting through action"
        ]
    },
    scriptural_references: [
        {
            text: "Kalpa Sūtra",
            description: "Details his powerful birth, renunciation, and enlightenment"
        },
        {
            text: "Trishashti Shalaka Purusha Charitra",
            author: "Acharya Hemachandra",
            summary: "Narrates his achievements and the dharmic balance he embodied"
        }
    ],
    quotes: [
        "Let your soul be the fortress — unshaken by desire, unmoved by fear.",
        "The true king is he who rules with dharma, not desire."
    ],
    media: {
        images: [
            {
                url: "https://jainuniversity.org/images/tirthankars/Aranatha.png",
                alt: "Aranatha Tirthankara with Nandavarta symbol and golden glow"
            }
        ]
    },
    read_more_link: "/tirthankaras/aranatha"
  },
  {
    id: "mallinatha",
    number: 19,
    name: "Mallinatha",
    hindi_name: "मल्लिनाथ",
    symbol: "Kalasha (Water Pot)",
    color: "Blue",
    birthplace: "Mithila",
    moksha_place: "Shikharji",
    parents: { father: "King Kumbha", mother: "Queen Prajavati" },
    notable_facts: [
      "Recognized as a female Tirthankara, Mallibai, in the Svetambara tradition, symbolizing the spiritual potential of women.",
    ],
    alternative_names: ["Mallinath Swami", "Nineteenth Tirthankara"],
    dynasty: "Ikshvaku",
    era: "Avasarpini (Descending Cycle)",
    life_span: "56,000 years (symbolic)",
    height: "28 dhanusha (symbolic)",
    age_at_renunciation: "Renounced after realizing the futility of worldly enjoyments",
    age_at_omniscience: "Through deep introspection and inner purification",
    age_at_moksha: "Attained moksha at Shikharji after liberating countless souls through her discourses",
    key_teachings: [
        "The body is but a vessel — the soul is the true self",
        "Balance, cleanliness, and mindfulness are essential to spiritual awakening",
        "Self-restraint is the path to self-realization"
    ],
    associated_temples: [
        {
            name: "Mallinath Jain Temple",
            location: "Mithila (Bihar)",
            significance: "Birthplace, revered by both Digambara and Shwetambara traditions"
        },
        {
            name: "Mallinatha Tonk",
            location: "Shikharji, Jharkhand",
            significance: "Place of nirvana"
        },
        {
            name: "Mallinath Jain Mandir",
            location: "Shankheshwar, Gujarat",
            significance: "Shwetambara temple with blue idol of Mallinatha"
        }
    ],
    iconography: {
        emblem: "Kalasha (Water Pot)",
        color: "Blue",
        posture: "Padmasana or Kayotsarga",
        associated_deity: "Aparajita Devi (Yakshini)",
        guardian_deity: "Yaksha Trimukha",
        features: "Blue aura, calm expression, kalasha symbol below pedestal"
    },
    legacy: {
        cultural: [
            "Mallinatha symbolizes balance of inner and outer cleanliness — physical and spiritual",
            "Seen as an icon of gender transcendence in Shwetambara tradition"
        ],
        literary: [
            "Life stories appear in Jain Agamas and Hemachandra’s Trishashti Shalaka Purusha Charitra"
        ]
    },
    scriptural_references: [
        {
            text: "Kalpa Sūtra",
            description: "Describes life events, teachings, and moksha"
        },
        {
            text: "Trishashti Shalaka Purusha Charitra",
            author: "Acharya Hemachandra",
            summary: "Explores the spiritual symbolism of her (or his) life"
        }
    ],
    quotes: [
        "The pot that holds wisdom must first be clean within.",
        "Let go of form — become the formless pure soul."
    ],
    media: {
        images: [
            {
                url: "https://jainuniversity.org/images/tirthankars/Mallinatha.png",
                alt: "Mallinatha Tirthankara with kalasha symbol and blue glow"
            }
        ]
    },
    read_more_link: "/tirthankaras/mallinatha"
  },
  {
    id: "munisuvrata",
    number: 20,
    name: "Munisuvrata",
    hindi_name: "मुनिसुव्रत",
    symbol: "Tortoise",
    color: "Black",
    birthplace: "Rajgir",
    moksha_place: "Shikharji",
    parents: { father: "King Sumitra", mother: "Queen Padmavati" },
    notable_facts: [
      "He emphasized the importance of vows (vratas) for ascetics (munis).",
    ],
    alternative_names: ["Munisuvrat Swami", "Twentieth Tirthankara"],
    dynasty: "Harivamsa",
    era: "Avasarpini (Descending Cycle)",
    life_span: "30,000 years (symbolic)",
    height: "25 dhanusha (symbolic)",
    age_at_renunciation: "Renounced at a young age after deep spiritual realization",
    age_at_omniscience: "Achieved Kevala Jnana through unwavering vows and deep penance",
    age_at_moksha: "Attained moksha at Shikharji after spreading the light of truth for centuries",
    key_teachings: [
      "Slow, steady, and disciplined effort leads to liberation",
      "Silence, vows (vratas), and meditation are pillars of spiritual life",
      "Even the smallest being must not be harmed — ahimsa begins in thought"
    ],
    associated_temples: [
      {
        name: "Munisuvratnath Jain Temple",
        location: "Rajgir, Bihar",
        significance: "Birthplace and sacred pilgrimage spot with ancient cave shrines"
      },
      {
        name: "Munisuvrata Tonk",
        location: "Shikharji, Jharkhand",
        significance: "Site of his nirvana; one of the 20 tonks on Shikharji Hill"
      },
      {
        name: "Munisuvratnath Jain Temple",
        location: "Mehsana, Gujarat",
        significance: "Prominent Shwetambara shrine with black idol of the Tirthankara"
      }
    ],
    iconography: {
      emblem: "Tortoise",
      color: "Black",
      posture: "Padmasana or Kayotsarga",
      associated_deity: "Naradatta Devi (Yakshini)",
      guardian_deity: "Yaksha Varuna",
      features: "Black complexion, calm and composed expression, tortoise symbol below idol"
    },
    legacy: {
      cultural: [
        "Regarded as the ideal of monkhood — gentle, slow, thoughtful, and firm",
        "Devotees pray to him for patience, clarity, and ethical strength"
      ],
      literary: [
        "Celebrated in Jain literature for his intense observance of vows and spiritual endurance"
      ]
    },
    scriptural_references: [
      {
        text: "Kalpa Sūtra",
        description: "Mentions his disciplined path and spiritual renown"
      },
      {
        text: "Trishashti Shalaka Purusha Charitra",
        author: "Acharya Hemachandra",
        summary: "Narrates his journey from royal birth to supreme liberation"
      }
    ],
    quotes: [
      "In stillness, the soul remembers its true nature.",
      "Like the tortoise draws in its limbs, draw your senses inward to find peace."
    ],
    media: {
      images: [
        {
          url: "https://jainuniversity.org/images/tirthankars/Munisuvrata.png",
          alt: "Munisuvrata Tirthankara with tortoise symbol and black aura"
        }
      ]
    },
    read_more_link: "/tirthankaras/munisuvrata"
  },
  {
    id: "naminatha",
    number: 21,
    name: "Naminatha",
    hindi_name: "नमिनाथ",
    symbol: "Blue Lotus",
    color: "Golden",
    birthplace: "Mithila",
    moksha_place: "Shikharji",
    parents: { father: "King Vijaya", mother: "Queen Vipra" },
    notable_facts: [
      "He bowed (Naman) to his own soul, signifying the importance of self-realization.",
    ],
    alternative_names: ["Naminath Swami", "Twenty-first Tirthankara"],
    dynasty: "Ikshvaku",
    era: "Avasarpini (Descending Cycle)",
    life_span: "10,000 years (symbolic)",
    height: "20 dhanusha (symbolic)",
    age_at_renunciation: "Renounced royal life after witnessing the transience of pleasure and prosperity",
    age_at_omniscience: "Attained Kevala Jnana through disciplined sadhana and detachment",
    age_at_moksha: "Attained moksha at Shikharji after enlightening many souls",
    key_teachings: [
      "The soul’s natural state is peace — disturbed only by attachment and ignorance",
      "Detach from outcomes, act with purity, and seek liberation",
      "Truth is not spoken — it is lived through restraint and compassion"
    ],
    associated_temples: [
      {
        name: "Naminath Jain Temple",
        location: "Mithila, Bihar",
        significance: "His birthplace and revered Jain site"
      },
      {
        name: "Naminatha Tonk",
        location: "Shikharji, Jharkhand",
        significance: "Place of liberation (moksha)"
      },
      {
        name: "Shri Naminath Bhagwan Mandir",
        location: "Kumbharia, Gujarat",
        significance: "Popular Shwetambara temple housing his idol"
      }
    ],
    iconography: {
      emblem: "Blue Lotus",
      color: "Golden Yellow",
      posture: "Padmasana or Kayotsarga",
      associated_deity: "Sarvani Devi (Yakshini)",
      guardian_deity: "Yaksha Kukur",
      features: "Peaceful aura, blue lotus symbol, meditative expression"
    },
    legacy: {
      cultural: [
        "Seen as the epitome of calm renunciation and simplicity",
        "His story inspires inward reflection and external harmony"
      ],
      literary: [
        "Revered in the Trishashti Shalaka Purusha Charitra and Kalpa Sūtra",
        "Symbolic narratives highlight his ability to maintain inner peace even amidst worldly chaos"
      ]
    },
    scriptural_references: [
      {
        text: "Kalpa Sūtra",
        description: "Depicts his noble birth and early detachment from worldly affairs"
      },
      {
        text: "Trishashti Shalaka Purusha Charitra",
        author: "Acharya Hemachandra",
        summary: "Narrates his spiritual leadership and calm enlightenment"
      }
    ],
    quotes: [
      "Truth arises when the self no longer clings to illusion.",
      "Be like the lotus — untouched by the mud, blooming in purity."
    ],
    media: {
      images: [
        {
          url: "https://jainuniversity.org/images/tirthankars/Naminatha.png",
          alt: "Naminatha Tirthankara with blue lotus symbol and golden light"
        }
      ]
    },
    read_more_link: "/tirthankaras/naminatha"
  },
  {
    id: "neminatha",
    number: 22,
    name: "Neminatha",
    hindi_name: "नेमिनाथ",
    symbol: "Conch Shell",
    color: "Black",
    birthplace: "Dwarika",
    moksha_place: "Mount Girnar",
    parents: { father: "King Samudravijaya", mother: "Queen Shivadevi" },
    notable_facts: [
      "A cousin of Lord Krishna, he renounced his own wedding upon seeing the caged animals intended for the feast.",
      "His act of compassion is a powerful message of Ahimsa.",
    ],
    alternative_names: ["Aristanemi", "Neminath Swami"],
    dynasty: "Yadava",
    era: "Avasarpini (Descending Cycle)",
    life_span: "1,000 years (symbolic)",
    height: "10 dhanusha (symbolic)",
    age_at_renunciation: "On the day of his wedding after seeing animals crying in slaughter for the feast",
    age_at_omniscience: "After intense penance and compassion-driven detachment",
    age_at_moksha: "Attained liberation at Mount Girnar after guiding many",
    key_teachings: [
      "Compassion is not a choice — it is the nature of a purified soul",
      "Non-violence must extend to thoughts, words, and actions",
      "Let your inner conch sound the call to liberation"
    ],
    associated_temples: [
      {
        name: "Neminath Jain Temples",
        location: "Girnar Hills, Gujarat",
        significance: "His place of moksha; complex of ancient temples for Jain pilgrims"
      },
      {
        name: "Neminath Temple",
        location: "Dwarka, Gujarat",
        significance: "Near his birthplace; associated with his early life and renunciation"
      },
      {
        name: "Neminath Derasar",
        location: "Palitana, Gujarat",
        significance: "One of the central shrines in the Shatrunjaya complex"
      }
    ],
    iconography: {
      emblem: "Conch (Shankha)",
      color: "Black",
      posture: "Padmasana or Kayotsarga",
      associated_deity: "Ambika Devi (Yakshini)",
      guardian_deity: "Yaksha Gomedha",
      features: "Black radiance, deep gaze of compassion, conch symbol beneath"
    },
    legacy: {
      cultural: [
        "Known for compassionate renunciation; revered for rejecting violence and luxury",
        "Often invoked by animal rights and vegetarian movements in Jain philosophy"
      ],
      literary: [
        "Mentioned in Jain Agamas, the Harivamsa Purana, and the Trishashti Shalaka Purusha Charitra"
      ]
    },
    scriptural_references: [
      {
        text: "Kalpa Sūtra",
        description: "Highlights his noble lineage, wedding renunciation, and moksha"
      },
      {
        text: "Harivamsa Purana",
        author: "Acharya Jinasena",
        summary: "Explores his life in connection with Krishna and the Yadava dynasty"
      },
      {
        text: "Trishashti Shalaka Purusha Charitra",
        author: "Acharya Hemachandra",
        summary: "Illustrates his compassionate soul and intense self-discipline"
      }
    ],
    quotes: [
      "Even one tear of a helpless being can drown your soul in karma.",
      "The sound of the conch is not of war — but of awakening."
    ],
    media: {
      images: [
        {
          url: "https://jainuniversity.org/images/tirthankars/Neminatha.png",
          alt: "Neminatha Tirthankara with conch symbol and black radiance"
        }
      ]
    },
    read_more_link: "/tirthankaras/neminatha"
  },
  {
    id: "parshvanatha",
    number: 23,
    name: "Parshvanatha",
    hindi_name: "पार्श्वनाथ",
    symbol: "Serpent",
    color: "Blue",
    birthplace: "Varanasi",
    moksha_place: "Shikharji",
    parents: { father: "King Ashvasena", mother: "Queen Vamadevi" },
    notable_facts: [
      "The most historically attested Tirthankara before Mahavira.",
      "He preached the 'Chaturyama Dharma' (Four-fold restraint): Ahimsa, Satya, Asteya, Aparigraha.",
    ],
    alternative_names: ["Parshva", "Parshvanath Swami"],
    dynasty: "Ikshvaku",
    era: "Avasarpini (Descending Cycle)",
    life_span: "100 years (historically closer to human scale)",
    height: "9 dhanusha (symbolic)",
    age_at_renunciation: "At 30 years, after witnessing the destructiveness of attachments and rituals",
    age_at_omniscience: "After 84 days of intense austerities and inner purification",
    age_at_moksha: "At 100 years, attained liberation at Shikharji",
    key_teachings: [
      "Fourfold Dharma: Ahimsa (Non-violence), Satya (Truth), Asteya (Non-stealing), Aparigraha (Non-possession)",
      "Inner purity is the only true offering to the divine",
      "Protecting life in all forms is the highest spiritual act"
    ],
    associated_temples: [
      {
        name: "Parshvanatha Jain Temple",
        location: "Varanasi, Uttar Pradesh",
        significance: "Birthplace temple; major center of pilgrimage"
      },
      {
        name: "Parshvanatha Tonk",
        location: "Shikharji, Jharkhand",
        significance: "Site of his moksha (liberation)"
      },
      {
        name: "Shri Parshwanath Derasar",
        location: "Ahmedabad, Gujarat",
        significance: "Highly revered Shwetambara shrine"
      }
    ],
    iconography: {
      emblem: "Snake (Usually seven-hooded serpent over his head)",
      color: "Green",
      posture: "Padmasana or Kayotsarga",
      associated_deity: "Padmavati Devi (Yakshini)",
      guardian_deity: "Dharanendra Yaksha",
      features: "Green hue, seven-hooded snake canopy, deeply meditative expression"
    },
    legacy: {
      cultural: [
        "Worshipped by both Digambara and Shwetambara traditions",
        "A central figure in Jain art, temples, and devotional chants",
        "Icon of non-violence movements; invoked in vows of peace and restraint"
      ],
      literary: [
        "Featured in Jain Agamas and Avashyaka Sutra",
        "Biography forms an important part of Jain narrative traditions and folklore"
      ]
    },
    scriptural_references: [
      {
        text: "Kalpa Sūtra",
        description: "Details his birth, renunciation, and path to Kevala Jnana"
      },
      {
        text: "Parshvanath Charitra",
        description: "A detailed poetic biography used in temple recitations"
      }
    ],
    quotes: [
      "Violence begins in thought — purify the mind and the world follows.",
      "The serpent of karma retreats when met with pure intention."
    ],
    media: {
      images: [
        {
          url: "https://jainuniversity.org/images/tirthankars/Parshvanatha.png",
          alt: "Parshvanatha Tirthankara with serpent canopy and green glow"
        }
      ]
    },
    read_more_link: "/tirthankaras/parshvanatha"
  },
  {
    id: "mahavira",
    number: 24,
    name: "Mahavira",
    hindi_name: "महावीर",
    symbol: "Lion",
    color: "Golden",
    birthplace: "Kundagrama (Vaishali)",
    moksha_place: "Pawapuri",
    parents: { father: "King Siddhartha", mother: "Queen Trishala" },
    notable_facts: [
      "The last Tirthankara of the current cosmic cycle.",
      "He consolidated and reformed the teachings of Parshvanatha, adding Brahmacharya (chastity) as the fifth great vow.",
      "His teachings form the basis of Jainism as it is practiced today.",
    ],
    alternative_names: ["Vardhamana", "Vardhaman Mahavira", "Lord Mahavira"],
    dynasty: "Ikshvaku",
    era: "Avasarpini (Descending Cycle)",
    life_span: "72 years (historical figure)",
    height: "7 dhanusha (symbolic, ~14 feet in scriptures)",
    age_at_renunciation: "30 years",
    age_at_omniscience: "After 12.5 years of severe penance and meditation",
    age_at_moksha: "72 years",
    key_teachings: [
      "Ahimsa (non-violence) is the highest religion",
      "Anekantavada (multiplicity of viewpoints) is the key to understanding truth",
      "Aparigraha (non-possessiveness), Satya (truthfulness), Brahmacharya (celibacy), and Asteya (non-stealing) form the five great vows",
      "Self-conquest leads to liberation"
    ],
    associated_temples: [
      {
        name: "Jal Mandir",
        location: "Pavapuri, Bihar",
        significance: "Site of Mahavira’s nirvana; sacred lake temple built where his body was cremated"
      },
      {
        name: "Mahavira Jain Temple",
        location: "Vaishali, Bihar",
        significance: "Commemorates his birth and childhood"
      },
      {
        name: "Shri Mahavirji Temple",
        location: "Karauli, Rajasthan",
        significance: "One of the most important Jain pilgrimage sites dedicated to Mahavira"
      }
    ],
    iconography: {
      emblem: "Lion",
      color: "Golden",
      posture: "Padmasana or Kayotsarga",
      associated_deity: "Siddhayika Devi (Yakshini)",
      guardian_deity: "Yaksha Matanga",
      features: "Golden radiance, lion symbol below, eyes reflecting compassion and detachment"
    },
    legacy: {
      cultural: [
        "Mahavira is revered not only by Jains but also by followers of non-violence and ethical philosophy across the world",
        "He shaped Indian philosophy alongside Buddha, emphasizing inner conquest and peace"
      ],
      literary: [
        "His teachings are preserved in the Jain Agamas, especially by the Shwetambara tradition",
        "He systematized Jain doctrine and revitalized the ancient path of Tirthankaras"
      ]
    },
    scriptural_references: [
      {
        text: "Kalpa Sūtra",
        description: "Details his life, birth dreams of Queen Trishala, and liberation"
      },
      {
        text: "Uttaradhyayana Sutra",
        description: "A collection of Mahavira’s final teachings and discourses"
      },
      {
        text: "Acharanga Sutra",
        description: "Describes his lifestyle, renunciation, and ascetic code"
      }
    ],
    quotes: [
      "Live and let live. Love all beings. Serve all beings.",
      "A soul can only be free when it conquers itself.",
      "Inward purity is the path to eternal bliss."
    ],
    media: {
      images: [
        {
          url: "https://jainuniversity.org/images/tirthankars/Mahavira.png",
          alt: "Mahavira Tirthankara in meditation with lion symbol and golden halo"
        }
      ]
    },
    read_more_link: "/tirthankaras/mahavira"
  },
];
