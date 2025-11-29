
export type Saint = {
  id: string;
  name: string;
  lifespan: string;
  era: string;
  type: string;
  core_themes: string[];
  short_description: string;
  full_story: {
    biography: { [key: string]: string };
    key_teachings: string[];
    legacy: { [key: string]: string };
  };
  associated_places: {
    place_name: string;
    relation: string;
  }[];
  quotes: string[];
  media: {
    images: { url: string; alt: string }[];
    videos?: { url: string; title: string }[];
  };
  tags: string[];
  related_stories: string[];
  read_more_link: string;
  image?: string; 
  imageHint?: string;
};

export const saints: Saint[] = [
  {
    id: "acharya-vidyasagar-ji-maharaj",
    name: "Acharya Vidyasagar Ji Maharaj",
    lifespan: "1946 – 2024",
    era: "Modern",
    type: "Acharya",
    core_themes: ["Compassion", "Ahimsa", "Spiritual Discipline", "Swadeshi"],
    short_description: "Discover the life of a modern-day saint whose austerity and deep compassion have inspired millions on the path of non-violence.",
    full_story: {
      biography: {
        "Early Life": "Born as Vidyadhar Jain in Sadalga, Karnataka, in 1946, Acharya Vidyasagar Ji Maharaj displayed a deep spiritual inclination and detachment from worldly desires from a very young age.",
        "Initiation": "In 1968, he was initiated as a Digambara monk by Acharya Gyansagar Ji Maharaj. His diksha marked the beginning of a lifelong journey of intense austerity, celibacy, and spiritual practice.",
        "Spiritual Practice": "He strictly adhered to the Digambara traditions, emphasizing non-possession, non-violence, and deep meditation. His lifestyle reflected the ideal of complete detachment from material comforts.",
        "Social Contribution": "Acharya Vidyasagar advocated for the use of Swadeshi (indigenous) products and emphasized education in one's mother tongue. He motivated communities to adopt ethical living and support traditional knowledge systems.",
        "Discourse Style": "His pravachans (discourses), delivered in a simple yet deeply philosophical manner, attracted people across age groups, castes, and educational backgrounds, making Jain teachings accessible to all."
      },
      key_teachings: [
        "The path to peace is inward.",
        "True wealth is not in possessions but in the purity of the soul.",
        "Ahimsa (non-violence) is the highest dharma."
      ],
      legacy: {
        "Spiritual Impact": "He revitalized the Digambara Jain tradition in the modern era and inspired thousands of monks, nuns, and laypeople to pursue a spiritually centered life.",
        "Infrastructure": "Under his guidance, numerous temples, Jain schools, gurukuls, and community centers were established, especially in rural India.",
        "Global Influence": "His teachings are studied and followed by Jain communities globally, and his words continue to resonate through books, recorded lectures, and social platforms.",
        "Remembrance": "After his departure in 2024, lakhs of devotees and followers paid tribute to his extraordinary life of renunciation, wisdom, and compassion."
      }
    },
    associated_places: [
      {
        place_name: "Sadalga, Karnataka",
        relation: "Birthplace"
      },
      {
        place_name: "Chhattisgarh, Madhya Pradesh (various cities)",
        relation: "Regions of spiritual activity and discourse"
      }
    ],
    quotes: [
      "The path to peace is inward.",
      "True wealth is not in possessions but in the purity of the soul.",
      "Ahimsa is the highest dharma."
    ],
    media: {
      images: [
        {
          url: "https://placehold.co/800x400.png",
          alt: "Acharya Vidyasagar Ji Maharaj"
        }
      ],
      videos: [
        {
          url: "https://example.com/videos/vidyasagar-discourse.mp4",
          title: "Acharya Vidyasagar Ji’s Discourse on Ahimsa"
        }
      ]
    },
    tags: ["Jain Saints", "Digambara", "Modern Jainism", "Ahimsa", "Swadeshi"],
    related_stories: [
      "acharya-kundakunda",
      "sthulabhadra",
      "acharya-hemachandra"
    ],
    read_more_link: "/saints/acharya-vidyasagar-ji-maharaj",
    image: 'https://placehold.co/800x400.png',
    imageHint: 'indian monk',
  },
  {
    id: "acharya-kundakunda",
    name: "Acharya Kundakunda",
    lifespan: "c. 1st century BCE",
    era: "Ancient",
    type: "Scholar",
    core_themes: ["Wisdom", "Self-realization", "Metaphysics", "Right Conduct"],
    short_description: "Journey back in time to understand the profound teachings of Acharya Kundakunda on the nature of the soul and reality.",
    full_story: {
      biography: {
        "early_life": "Acharya Kundakunda was born as Padmanandi in South India, likely in the region of Kondakunde (present-day Andhra Pradesh), from where he derives his name. Though historical details are limited, he is revered as a profound thinker and spiritual guide.",
        "spiritual_contributions": "He was a Digambara monk and a master of Jain metaphysics, expressing deep insight through his numerous philosophical works. He wrote primarily in Prakrit, making Jain teachings accessible yet spiritually rich.",
        "literary_works": "His most influential texts include *Samayasara* (Essence of the Self), *Pravachanasara* (Essence of Discourse), *Niyamasara* (Essence of Discipline), *Ashta Pahuda*, and others. These works systematically present core Jain ideas such as dualism, karma, and liberation."
      },
      key_teachings: [
        "The self (Atman) is pure, eternal, and separate from the body and karma.",
        "The soul’s real nature is obscured by karma, and true knowledge removes this ignorance.",
        "Right faith (Samyak Darshan), right knowledge (Samyak Jnana), and right conduct (Samyak Charitra) are the path to moksha."
      ],
      legacy: {
        "spiritual_impact": "Acharya Kundakunda is considered one of the most authoritative teachers in Digambara Jainism. His works have shaped the doctrinal foundations of the sect and are studied by monks, scholars, and laypersons to this day.",
        "philosophical_importance": "His presentation of Jain metaphysics and epistemology brought clarity to concepts like the real vs. the practical (nishchaya vs. vyavahara naya), and the distinction between jiva and ajiva.",
        "lasting_relevance": "He is often called the 'Light of the Jain Order' (*Jaina Shasana Pradipa*) and his interpretations remain essential for understanding Jain spirituality and ethics."
      }
    },
    associated_places: [
      {
        place_name: "Kondakunde (likely in Andhra Pradesh)",
        relation: "Birthplace"
      },
      {
        place_name: "South India",
        relation: "Region of activity and teaching"
      }
    ],
    quotes: [
      "The self is eternal, pure, and untouched by karma.",
      "One who sees the soul as distinct from the body knows the truth.",
      "Liberation is achieved by the three jewels: right faith, right knowledge, and right conduct."
    ],
    media: {
      images: [
        {
          url: "https://placehold.co/800x400.png",
          alt: "Statue of Acharya Kundakunda"
        }
      ],
      videos: [
        {
          url: "https://example.com/videos/kundakunda-teachings.mp4",
          title: "Essence of Samayasara – Kundakunda’s Vision"
        }
      ]
    },
    tags: ["Jain Saints", "Digambara", "Jain Philosophy", "Samayasara", "Atman"],
    related_stories: [
      "acharya-vidyasagar-ji-maharaj",
      "acharya-hemachandra",
      "sthulabhadra"
    ],
    read_more_link: "/saints/acharya-kundakunda",
    image: 'https://placehold.co/800x400.png',
    imageHint: 'ancient scroll',
  },
  {
    id: "sthulabhadra",
    name: "Sthulabhadra",
    lifespan: "c. 3rd century BCE",
    era: "Ancient",
    type: "Acharya",
    core_themes: ["Detachment", "Preservation of Scripture", "Spiritual Discipline"],
    short_description: "A tale of immense self-control and detachment, showcasing the power of will in overcoming worldly temptations.",
    full_story: {
      biography: {
        "early_life": "Sthulabhadra was born into a wealthy and influential family, the son of a minister in the royal court of the Nanda Kingdom. Surrounded by luxury and power, he lived a life of comfort and prestige in his early years.",
        "renunciation": "Deeply moved by the teachings of Jain monks, he eventually renounced all worldly attachments and became a disciple of the legendary Acharya Bhadrabahu. His decision to leave a life of indulgence shocked the kingdom and inspired many.",
        "leadership_during_famine": "During the great 12-year famine, Acharya Bhadrabahu led a group of monks to the south. Sthulabhadra, however, stayed behind to guide and preserve the Jain community in the north with strict discipline and unwavering commitment.",
        "role_in_scripture_preservation": "After the famine, a council was convened at Pataliputra to recompile the sacred Jain scriptures, known as the Agamas. Sthulabhadra, known for his phenomenal memory and clarity of understanding, played a central role in the recitation of the 11 Angas, thereby safeguarding the essence of Lord Mahavira’s teachings."
      },
      key_teachings: [
        "True strength lies not in physical power but in mastery over one's senses and desires.",
        "Spiritual detachment from worldly pleasures is essential for inner liberation.",
        "A disciplined mind is the gateway to remembering and living dharma."
      ],
      legacy: {
        "scriptural_contribution": "Sthulabhadra is honored as a key figure in the preservation of Jain Agamas. His accurate and devoted recitation during the Pataliputra council ensured the survival of Mahavira's words for future generations.",
        "spiritual_symbolism": "His life symbolizes the possibility of radical transformation—from luxury to liberation—through willpower, renunciation, and commitment.",
        "continued_inspiration": "Monks, scholars, and laypeople regard him as a role model for self-restraint, spiritual leadership, and the responsibility to uphold sacred knowledge."
      }
    },
    associated_places: [
      {
        place_name: "Nanda Kingdom (Ancient India)",
        relation: "Birthplace and early life"
      },
      {
        place_name: "Pataliputra (modern-day Patna)",
        relation: "Location of the Jain scripture council"
      }
    ],
    quotes: [
      "True strength is not of the body but of the spirit.",
      "Only through detachment can the soul rise above worldly illusion.",
      "What is remembered with discipline becomes eternal."
    ],
    media: {
      images: [
        {
          url: "https://placehold.co/800x400.png",
          alt: "Depiction of Sthulabhadra in meditation"
        }
      ],
      videos: [
        {
          url: "https://example.com/videos/sthulabhadra-legacy.mp4",
          title: "Legacy of Acharya Sthulabhadra – The Guardian of Jain Scriptures"
        }
      ]
    },
    tags: ["Jain Saints", "Scripture Preservation", "Acharya", "Agamas", "Renunciation"],
    related_stories: [
      "acharya-kundakunda",
      "acharya-vidyasagar-ji-maharaj",
      "acharya-hemachandra"
    ],
    read_more_link: "/saints/sthulabhadra",
    image: 'https://placehold.co/800x400.png',
    imageHint: 'ancient scripture',
  },
    {
    id: "acharya-hemachandra",
    name: "Acharya Hemachandra",
    lifespan: "1088 – 1173 CE",
    era: "Medieval",
    type: "Scholar",
    core_themes: ["Wisdom", "Anekantavada", "Knowledge", "Cultural Renaissance"],
    short_description: "Explore the life of the polymath Hemachandra, a Jain scholar who made monumental contributions to logic, grammar, and philosophy.",
    full_story: {
      biography: {
        "early_life": "Acharya Hemachandra was born as Changadeva in present-day Gujarat in 1088 CE. Recognized early for his sharp intellect, he was ordained into Jain monkhood and given the name Somachandra, later known as Hemachandra.",
        "monkhood_and_scholarship": "He soon rose as a spiritual and scholarly figure of great influence. Hemachandra authored authoritative works in various disciplines including Sanskrit and Prakrit grammar, logic, poetics, lexicography, astrology, and history.",
        "role_in_royal_court": "He became a respected advisor in the court of King Kumarapala of Gujarat. Under his influence, the king adopted Jain principles such as non-violence and supported the flourishing of Jain culture across the region.",
        "major_works": "His magnum opus, *Trishashti-Shalaka-Purusha-Charitra* (Lives of the 63 Illustrious Beings), is a monumental Jain hagiographical epic detailing the stories of Tirthankaras and other spiritual heroes. He also compiled the *Siddha-Hemashabdanushasana*, a renowned grammar treatise."
      },
      key_teachings: [
        "Knowledge, when combined with right conduct, leads to true liberation.",
        "Anekantavada (the doctrine of many-sidedness) is essential for understanding complex truths.",
        "True wisdom embraces intellectual humility and compassion."
      ],
      legacy: {
        "title_and_reputation": "He was honored with the title *kalikālasarvajña* – 'the all-knowing one of the Kali Yuga' for his vast erudition and spiritual stature.",
        "cultural_impact": "Acharya Hemachandra played a key role in making Gujarat a major center of Jain learning, literature, and culture. His legacy continues to influence Indian scholastic and ethical thought.",
        "secular_and_spiritual_integration": "Hemachandra bridged the worlds of governance and spirituality, offering guidance not just on religious matters but also on ethical administration, thus exemplifying Jain values in practical life."
      }
    },
    associated_places: [
      {
        place_name: "Gujarat, India",
        relation: "Birthplace and region of spiritual activity"
      },
      {
        place_name: "Patan (Anhilwad), Gujarat",
        relation: "Center of teaching and royal patronage"
      }
    ],
    quotes: [
      "Right knowledge without right conduct is like a lamp without oil.",
      "Truth is manifold; to understand it, one must embrace Anekantavada.",
      "Wisdom is measured by humility and service, not just intellect."
    ],
    media: {
      images: [
        {
          url: "https://placehold.co/800x400.png",
          alt: "Illustration of Acharya Hemachandra"
        }
      ],
      videos: [
        {
          url: "https://example.com/videos/hemachandra-teachings.mp4",
          title: "Acharya Hemachandra: The Scholar-Saint of Gujarat"
        }
      ]
    },
    tags: ["Jain Saints", "Anekantavada", "Grammar", "Jain History", "Philosophy"],
    related_stories: [
      "acharya-kundakunda",
      "sthulabhadra",
      "acharya-vidyasagar-ji-maharaj"
    ],
    read_more_link: "/saints/acharya-hemachandra",
    image: 'https://placehold.co/800x400.png',
    imageHint: 'royal court',
  },
  {
    id: "acharya-bhadrabahu",
    name: "Acharya Bhadrabahu",
    lifespan: "c. 4th century BCE",
    era: "Ancient",
    type: "Acharya",
    core_themes: ["Scriptural Preservation", "Renunciation", "Leadership", "Prophecy"],
    short_description: "The last Shrutkevali of Jainism, Acharya Bhadrabahu preserved Jain scriptures during the great famine and guided Chandragupta Maurya toward renunciation.",
    full_story: {
      biography: {
        "early_life": "Acharya Bhadrabahu was a highly revered Jain Acharya believed to have lived in the 4th century BCE. He was the last Shrutkevali — one who had complete knowledge of all Jain scriptures (Shrutajnana).",
        "historical_significance": "During his time, a severe 12-year famine struck northern India. To preserve the ascetic lifestyle and scriptures, he led a migration of Jain monks to South India. His leadership ensured continuity in the monastic lineage and practice.",
        "connection_with_chandragupta": "It is believed that Chandragupta Maurya, the founder of the Mauryan Empire, abdicated his throne under Bhadrabahu’s influence and became a Jain monk. Both are said to have spent their final years in meditation at Shravanabelagola, Karnataka."
      },
      key_teachings: [
        "Preservation of true knowledge requires both memory and moral strength.",
        "Renunciation is the path to peace — even kings must one day walk away from power.",
        "Spiritual truth transcends all worldly status and position."
      ],
      legacy: {
        "scriptural_impact": "Bhadrabahu is credited with preserving the Jain Agamas and tradition during a critical historical transition. His oral transmission helped keep the teachings of Mahavira alive.",
        "monastic_lineage": "He is seen as the spiritual predecessor to both major Jain sects. His southern migration eventually contributed to the development of the Digambara tradition.",
        "cultural_memory": "His cave (Bhadrabahu Gufa) at Shravanabelagola is still revered by pilgrims. His story is remembered for its sacrifice, foresight, and commitment to dharma."
      }
    },
    associated_places: [
      {
        place_name: "Pataliputra (modern-day Patna)",
        relation: "Region from which monks migrated during famine"
      },
      {
        place_name: "Shravanabelagola, Karnataka",
        relation: "Place of meditation and final abode"
      }
    ],
    quotes: [
      "Even kings bow to the truth of renunciation.",
      "Famine may shake the land, but not the resolve of the soul.",
      "Sacred knowledge must be protected — even at great cost."
    ],
    media: {
      images: [
        {
          url: "https://placehold.co/800x400.png",
          alt: "Bhadrabahu Gufa at Shravanabelagola"
        }
      ],
      videos: [
        {
          url: "https://example.com/videos/bhadrabahu-legacy.mp4",
          title: "The Legacy of Acharya Bhadrabahu – A Guardian of Jain Scriptures"
        }
      ]
    },
    tags: ["Jain Saints", "Shrutkevali", "Ancient Jainism", "Renunciation", "Famine Era"],
    related_stories: [
      "chandragupta-maurya",
      "sthulabhadra",
      "acharya-kundakunda"
    ],
    read_more_link: "/saints/acharya-bhadrabahu",
    image: 'https://placehold.co/800x400.png',
    imageHint: 'ancient cave',
  },
  {
    id: "rajimati",
    name: "Rajimati",
    lifespan: "6th century BCE (Time of Mahavira)",
    era: "Ancient",
    type: "Nun",
    core_themes: ["Chastity", "Renunciation", "Spiritual Strength"],
    short_description: "Rajimati, once betrothed to Mahavira, became a powerful symbol of female asceticism and unwavering spiritual resolve.",
    full_story: {
      biography: {
        "early_life": "Rajimati was a princess, once engaged to Vardhamana (later known as Mahavira). After his renunciation, Rajimati too turned away from royal life and took diksha to pursue the path of liberation.",
        "spiritual_path": "Despite societal pressures and temptations, Rajimati maintained her vow of celibacy and walked the path of a Jain sadhvi with unmatched conviction.",
        "legacy_in_literature": "Her life is recorded in Jain texts as a shining example of feminine strength and spiritual independence. She is often mentioned in plays and poetry highlighting her resistance to worldly temptation."
      },
      key_teachings: [
        "Spiritual love is higher than worldly attachment.",
        "Celibacy and self-control empower the soul.",
        "Renunciation purifies even those born into luxury."
      ],
      legacy: {
        "symbolic_impact": "Rajimati is honored as one of the earliest and most inspirational Jain nuns. Her story is often taught to highlight the possibility of liberation for all, regardless of gender.",
        "cultural_presence": "Her name appears in devotional literature and is often cited during sermons on female ascetics and chastity."
      }
    },
    associated_places: [
      {
        place_name: "Vaishali (ancient capital)",
        "relation": "Region of birth and royal life"
      }
    ],
    quotes: [
      "The jewel of renunciation shines brighter than a royal crown.",
      "My soul belongs not to the world, but to liberation.",
      "I do not seek a husband, I seek the eternal truth."
    ],
    media: {
      images: [
        {
          url: "https://placehold.co/800x400.png",
          alt: "Illustration of Rajimati in ascetic robes"
        }
      ]
    },
    tags: ["Jain Women", "Ancient Saints", "Spiritual Renunciation", "Mahavira"],
    related_stories: [
      "acharya-bhadrabahu",
      "chandragupta-maurya",
      "gyanmati-mataji"
    ],
    read_more_link: "/saints/rajimati",
    image: 'https://placehold.co/800x400.png',
    imageHint: 'royal princess',
  },
  {
    id: "chandragupta-maurya",
    name: "Chandragupta Maurya",
    lifespan: "340 – 297 BCE",
    era: "Ancient",
    type: "Royal Monk",
    core_themes: ["Renunciation", "Transformation", "Austerity"],
    short_description: "Founder of the Mauryan Empire, Chandragupta gave up his throne to follow Acharya Bhadrabahu and embrace the life of a Jain monk.",
    full_story: {
      biography: {
        "early_life": "Chandragupta rose from humble beginnings to establish the mighty Mauryan Empire. He united much of the Indian subcontinent under a single rule.",
        "spiritual_turn": "Later in life, inspired by Acharya Bhadrabahu and disillusioned with political life, he renounced his empire and embraced Jain monkhood.",
        "final_years": "He spent his last days in Shravanabelagola, Karnataka, practicing deep meditation and penance. He is believed to have performed *Sallekhana* — the Jain vow of voluntary peaceful death."
      },
      key_teachings: [
        "Even emperors must bow before the truth of impermanence.",
        "The soul’s journey is greater than any empire.",
        "Peace lies in renunciation, not possession."
      ],
      legacy: {
        "influence": "Chandragupta's renunciation was a landmark moment that helped establish Jainism in South India.",
        "symbolism": "He represents the ideal of *tyāga* (sacrifice) — giving up everything for spiritual truth.",
        "commemoration": "His cave and meditation site at Shravanabelagola are still revered by Jain pilgrims."
      }
    },
    associated_places: [
      {
        "place_name": "Pataliputra",
        "relation": "Capital of his empire"
      },
      {
        place_name: "Shravanabelagola",
        relation: "Place of meditation and *Sallekhana*"
      }
    ],
    quotes: [
      "A soul liberated is greater than a kingdom won.",
      "In silence and hunger, I found a truth no throne could offer.",
      "Bhadrabahu’s words broke my attachment to the world."
    ],
    media: {
      images: [
        {
          url: "https://placehold.co/800x400.png",
          "alt": "Depiction of Chandragupta in ascetic life"
        }
      ]
    },
    tags: ["Royal Saints", "Digambara", "Sallekhana", "Bhadrabahu", "South India"],
    related_stories: [
      "acharya-bhadrabahu",
      "rajimati",
      "acharya-kundakunda"
    ],
    read_more_link: "/saints/chandragupta-maurya",
    image: 'https://placehold.co/800x400.png',
    imageHint: 'ancient king',
  },
  {
    id: "gyanmati-mataji",
    name: "Aryika Shri 105 Gyanmati Mataji",
    lifespan: "1941 – Present",
    era: "Modern",
    type: "Nun-Scholar",
    core_themes: ["Women in Jainism", "Spiritual Leadership", "Scriptural Revival"],
    short_description: "One of the foremost Jain women scholars of the modern era, Gyanmati Mataji has authored hundreds of texts and revitalized Jain pilgrimage sites and literature.",
    full_story: {
      biography: {
        "early_life": "Born in 1941 in Uttar Pradesh, she showed spiritual inclination from childhood. She renounced worldly life in her youth and became a Digambara nun (Aryika).",
        "spiritual_and_scholarly_work": "Over the decades, she has authored and translated hundreds of Jain texts, including *Tatvartha Sutra*, *Puranas*, and commentaries in Hindi, Sanskrit, and Prakrit.",
        "contributions_to_infrastructure": "She initiated and led the construction of the *Jambudweep Complex* in Hastinapur — a large-scale educational and spiritual center visualizing Jain cosmology in architecture."
      },
      key_teachings: [
        "Knowledge must be shared to uplift society.",
        "Jain dharma can be modern without losing its essence.",
        "A woman’s penance and wisdom can guide thousands."
      ],
      legacy: {
        "leadership": "She is regarded as a torchbearer for Jain women’s education and renunciation, inspiring many to take diksha.",
        "spiritual_presence": "She travels and gives pravachans across India, continuing to teach Jain ethics, cosmology, and meditation.",
        "architectural vision": "The Jambudweep center stands as a lasting legacy to her vision of Jainism in accessible, visual, and intellectual form."
      }
    },
    associated_places: [
      {
        place_name: "Hastinapur, Uttar Pradesh",
        "relation": "Center of her spiritual and educational activities"
      },
      {
        place_name: "Baraut (birthplace)",
        "relation": "Region of early life"
      }
    ],
    quotes: [
      "Scripture is the voice of the Tirthankaras — preserve it.",
      "True renunciation is the silence of the ego.",
      "A woman's wisdom is the wealth of dharma."
    ],
    media: {
      images: [
        {
          "url": "https://placehold.co/800x400.png",
          "alt": "Portrait of Gyanmati Mataji"
        }
      ],
      videos: [
        {
          "url": "https://example.com/videos/gyanmati-pravachan.mp4",
          "title": "Gyanmati Mataji on Tatvartha Sutra"
        }
      ]
    },
    tags: ["Women Saints", "Modern Jainism", "Scriptural Commentary", "Hastinapur", "Jambudweep"],
    related_stories: [
      "rajimati",
      "acharya-hemachandra",
      "acharya-kundakunda"
    ],
    read_more_link: "/saints/gyanmati-mataji",
    image: 'https://placehold.co/800x400.png',
    imageHint: 'female monk',
  },
  {
    id: "acharya-haribhadra-suri",
    name: "Acharya Haribhadra Suri",
    lifespan: "c. 8th century CE",
    era: "Medieval",
    type: "Scholar",
    core_themes: ["Tolerance", "Logic", "Philosophy", "Comparative Religion"],
    short_description: "Acharya Haribhadra was a prolific Śvetāmbara scholar who authored texts on logic, ethics, and comparative philosophy, advocating harmony across spiritual paths.",
    full_story: {
      biography: {
        "early_life": "Haribhadra was born into a Brahmin family and was initially a scholar of Vedic philosophy. After a debate with a Jain monk, he converted to Jainism and later became a monk himself.",
        "intellectual_legacy": "He composed more than 140 works including *Ṣaḍdarśanasamuccaya*, a comparative treatise analyzing six Indian philosophical schools with balance and objectivity.",
        "philosophy_of_tolerance": "He was among the earliest voices to promote the idea that different paths can lead to the same truth — aligning with Jainism’s core principle of Anekantavada (non-absolutism)."
      },
      key_teachings: [
        "All religions teach morality — we must honor every seeker’s path.",
        "True philosophy is rooted in humility, not argument.",
        "The pursuit of knowledge must never eclipse compassion."
      ],
      legacy: {
        "academic_contribution": "His works are studied in Jain, Buddhist, and Hindu academic circles. He opened the door for interfaith dialogue within Jain philosophy.",
        "lasting message": "Haribhadra’s teachings on tolerance and inclusivity remain highly relevant in a pluralistic world."
      }
    },
    associated_places: [
      {
        place_name: "Gujarat, India",
        relation: "Region of activity and scholarship"
      }
    ],
    quotes: [
      "Truth wears many garments, but the body beneath is one.",
      "A sage does not conquer others in debate — he conquers himself.",
      "All paths walked with honesty lead to light."
    ],
    media: {
      images: [
        {
          url: "https://placehold.co/800x400.png",
          alt: "Depiction of Acharya Haribhadra Suri teaching disciples"
        }
      ]
    },
    tags: ["Jain Scholars", "Anekantavada", "Śvetāmbara Saints", "Comparative Religion"],
    related_stories: [
      "acharya-kundakunda",
      "acharya-hemachandra",
      "gyanmati-mataji"
    ],
    read_more_link: "/saints/acharya-haribhadra-suri",
    image: 'https://placehold.co/800x400.png',
    imageHint: 'scholar teaching',
  },
  {
    id: "acharya-jinasena",
    name: "Acharya Jinasena",
    lifespan: "c. 9th century CE",
    era: "Medieval",
    type: "Acharya",
    core_themes: ["Scripture", "Royal Influence", "Jain Cosmology"],
    short_description: "Acharya Jinasena was a renowned Digambara monk and author of the *Adi Purana*, detailing Jain cosmology and the lives of the Tirthankaras.",
    full_story: {
      biography: {
        "early_life": "Jinasena was born into a Brahmin family and became a Digambara monk under the guidance of Acharya Virasena.",
        "literary_genius": "He co-authored the *Adi Purana* with his disciple Gunabhadra, presenting detailed accounts of the lives of Rishabhanatha and other heroes. His works also elaborated on karma theory and spiritual discipline.",
        "royal_patronage": "Jinasena was supported by Rashtrakuta king Amoghavarsha I, who adopted Jain ethics and governance practices under his spiritual influence."
      },
      key_teachings: [
        "Knowledge of cosmology leads to detachment from illusion.",
        "Monks and kings must serve dharma in their own ways.",
        "A well-written scripture is a mirror of truth for generations."
      ],
      legacy: {
        "textual_contribution": "His *Adi Purana* remains one of the most influential Jain texts, frequently referenced in philosophy and literature.",
        "religio-political influence": "Jinasena helped Jainism flourish in royal courts, shaping ethics in public life."
      }
    },
    associated_places: [
      {
        place_name: "Karnataka, India",
        relation: "Region of royal patronage and teaching"
      }
    ],
    quotes: [
      "The soul’s journey begins when the ego bows to wisdom.",
      "In the vastness of the cosmos lies the story of the self.",
      "Scripture is not mere text, but a living fire of knowledge."
    ],
    media: {
      images: [
        {
          url: "https://placehold.co/800x400.png",
          alt: "Acharya Jinasena with royal disciples"
        }
      ]
    },
    tags: ["Digambara Saints", "Adi Purana", "Jain Cosmology", "Rashtrakutas"],
    related_stories: [
      "acharya-kundakunda",
      "gyanmati-mataji",
      "acharya-bhadrabahu"
    ],
    read_more_link: "/saints/acharya-jinasena",
    image: 'https://placehold.co/800x400.png',
    imageHint: 'royal scholar',
  },
  {
    id: "acharya-akalanka",
    name: "Acharya Akalanka",
    lifespan: "c. 8th century CE",
    era: "Medieval",
    type: "Scholar",
    core_themes: ["Logic", "Epistemology", "Digambara Philosophy"],
    short_description: "Acharya Akalanka was a Digambara philosopher renowned for formalizing Jain logic and defending its doctrines through precise intellectual reasoning.",
    full_story: {
      biography: {
        "early_life": "Akalanka was born in Karnataka and became a monk of the Digambara tradition. From an early age, he showed remarkable capacity for logic and debate.",
        "philosophical_contribution": "He authored *Tattvārtha Rājavārtika*, *Nyāyavinishchaya*, and *Astashati*, where he presented Jain epistemology in systematic detail, defending Jain doctrines against Buddhist and Hindu criticism.",
        "debates_and_defense": "His debates with rival schools earned him the title 'Bhattaraka'. He is considered the foundational figure of Jain Nyaya (logic)."
      },
      key_teachings: [
        "Clarity in reasoning leads to clarity in living.",
        "Truth must be defended with both intellect and humility.",
        "Logic is not cold thought, but a tool for self-realization."
      ],
      legacy: {
        "title": "Akalanka is known as the 'Master of Jain Logic'. His works remain part of monastic training and philosophical studies today.",
        "impact": "He helped secure Jainism’s position in India's intellectual landscape by offering a rigorous defense of its doctrines."
      }
    },
    associated_places: [
      {
        place_name: "Karnataka, India",
        relation: "Region of activity and influence"
      }
    ],
    quotes: [
      "A mind untrained in logic is a traveler without a map.",
      "Do not fear doubt — fear ignorance of inquiry.",
      "Every soul is a thinker on the path to truth."
    ],
    media: {
      images: [
        {
          url: "https://placehold.co/800x400.png",
          alt: "Acharya Akalanka debating with rival scholars"
        }
      ]
    },
    tags: ["Jain Logic", "Digambara Saints", "Philosophy", "Nyaya"],
    related_stories: [
      "acharya-jinasena",
      "acharya-haribhadra-suri",
      "acharya-kundakunda"
    ],
    read_more_link: "/saints/acharya-akalanka",
    image: 'https://placehold.co/800x400.png',
    imageHint: 'ancient debate',
  },
  {
    id: "acharya-pushpdant-sagar",
    name: "Acharya Shri 108 Pushpdant Sagar Ji Maharaj",
    lifespan: "1948 – Present",
    era: "Modern",
    type: "Acharya",
    core_themes: ["Compassion", "Scriptural Revival", "Modern Spiritual Guidance"],
    short_description: "A revered Digambara Jain Acharya, known for his powerful oratory, scriptural mastery, and influence over millions of devotees across India and abroad.",
    full_story: {
      biography: {
        "early_life": "Acharya Shri Pushpdant Sagar Ji Maharaj was born in 1948 in Karnataka. Drawn toward spirituality early in life, he was initiated as a monk in the lineage of Acharya Shantisagar Ji’s revival movement.",
        "spiritual_path": "He became an Acharya in 1992 and has since traveled across India spreading Jain philosophy, emphasizing non-violence, compassion, and character building. His discourses combine traditional Jain principles with solutions for modern life dilemmas.",
        "teaching_style": "He is known for logical clarity, emotional depth, and his ability to explain ancient Jain teachings in relatable language, often drawing huge audiences."
      },
      key_teachings: [
        "Live simply, live truthfully — the soul is your only true possession.",
        "You do not need to escape the world to live spiritually — you need to transform your intentions.",
        "Control over anger, greed, and ego leads to true freedom."
      ],
      legacy: {
        "spiritual_influence": "Under his leadership, numerous Jain temples, study centers, and educational institutions have been established. Thousands have taken vows of self-discipline due to his teachings.",
        "initiations": "He has initiated many disciples into monkhood, ensuring continuity in the Digambara tradition.",
        "social_messages": "He actively promotes Ahimsa, vegetarianism, ethical living, and scriptural study among laypeople."
      }
    },
    associated_places: [
      {
        place_name: "Karnataka",
        relation: "Birthplace and early life"
      },
      {
        "place_name": "North &amp; Central India",
        "relation": "Regions of major spiritual activity and tours"
      }
    ],
    quotes: [
      "Do not count your problems, count your blessings — they are infinite when the soul is awake.",
      "If you can master your tongue and temper, you can master life.",
      "True religion is not just rituals, but transformation of the heart."
    ],
    media: {
      images: [
        {
          url: "https://placehold.co/800x400.png",
          alt: "Acharya Pushpdant Sagar Ji Maharaj during discourse"
        }
      ],
      videos: [
        {
          url: "https://example.com/videos/pushpdant-sagar-discourse.mp4",
          title: "Acharya Pushpdant Sagar Ji – Discourse on Jain Ethics"
        }
      ]
    },
    tags: ["Modern Jain Saints", "Digambara Acharyas", "Spiritual Leaders", "India"],
    related_stories: [
      "acharya-vidyasagar-ji-maharaj",
      "gyanmati-mataji",
      "acharya-shantisagar"
    ],
    read_more_link: "/saints/acharya-pushpdant-sagar",
    image: 'https://placehold.co/800x400.png',
    imageHint: 'modern monk',
  },
  {
    id: "muni-tarunsagar",
    name: "Muni Shri Tarunsagar Ji Maharaj",
    lifespan: "1967 – 2018",
    era: "Modern",
    type: "Muni",
    core_themes: ["Bold Teachings", "Social Reform", "Spiritual Awakening"],
    short_description: "A dynamic and fearless Digambara monk, Muni Tarunsagar Ji brought Jain teachings to public platforms with his impactful pravachans known as 'Kadve Pravachan' (Bitter Discourses).",
    full_story: {
      biography: {
        "early_life": "Born as Pawan Kumar Jain in Guhanchi, Madhya Pradesh, he was initiated as a Digambara muni at the age of 13. His spiritual charisma and bold expression attracted massive audiences across India.",
        "public_impact": "He addressed legislative assemblies, inspired youth, and connected ancient Jain ethics with modern issues. His ‘Kadve Pravachan’ series became famous for their sharp moral clarity and reformist tone.",
        "style": "He spoke courageously on issues like corruption, anger, ego, politics, and dharma without fear or hesitation, often quoting real-life examples with spiritual depth."
      },
      key_teachings: [
        "Religion is not escapism — it's responsibility.",
        "Don’t just worship the idol; become like the idol.",
        "Truth often tastes bitter — but it heals the soul."
      ],
      legacy: {
        "mass influence": "He brought Jain monks out of only temples and into large public stages, spreading dharma among laypeople, politicians, and youth.",
        "social_change": "He criticized social evils, uplifted moral values, and simplified Jain thought for the masses.",
        "writings": "His discourses were compiled into best-selling books like *Kadve Pravachan*, *Yuva Path*, and *Rashtra Dharam*."
      }
    },
    associated_places: [
      {
        place_name: "Madhya Pradesh",
        relation: "Birthplace and initial preaching"
      },
      {
        place_name: "Delhi, Gujarat, Maharashtra",
        relation: "Regions where mass pravachans were held"
      }
    ],
    quotes: [
      "Kadva bolta hoon, par saccha bolta hoon. (I speak bitter, but I speak truth.)",
      "Jain dharma is not for escape — it’s for action with purity.",
      "If your mind is clean, every path becomes sacred."
    ],
    media: {
      images: [
        {
          url: "https://placehold.co/800x400.png",
          alt: "Muni Tarunsagar Ji Maharaj giving discourse"
        }
      ],
      videos: [
        {
          url: "https://example.com/videos/kadve-pravachan.mp4",
          title: "Kadve Pravachan – Truth Beyond Comfort"
        }
      ]
    },
    tags: ["Kadve Pravachan", "Digambara Monk", "Modern Jainism", "Youth Icon"],
    related_stories: [
      "acharya-vidyasagar-ji-maharaj",
      "acharya-pushpdant-sagar",
      "gyanmati-mataji"
    ],
    read_more_link: "/saints/muni-tarunsagar",
    image: 'https://placehold.co/800x400.png',
    imageHint: 'modern monk',
  },
  {
    id: "acharya-vishuddh-sagar",
    name: "Acharya Shri 108 Vishuddh Sagar Ji Maharaj",
    lifespan: "1967 – Present",
    era: "Modern",
    type: "Acharya",
    core_themes: ["Tapasya", "Discipline", "Silent Strength", "Penance"],
    short_description: "Acharya Vishuddh Sagar Ji is a present-day Digambara Acharya known for his deep spiritual penance, strict discipline, and revival of ancient Jain austerity.",
    full_story: {
      biography: {
        "early_life": "Born in Madhya Pradesh, he was inspired by Acharya Vidyasagar Ji Maharaj and chose the path of renunciation at a young age. He became an Acharya in the Digambara tradition and is now followed by thousands.",
        "spiritual_depth": "He is known for intense penance (*tapasya*), meditative silence, and spreading the message of Jain values with quiet power rather than public display.",
        "lifestyle": "He travels entirely on foot, eats once a day, and strictly adheres to Digambara codes — wearing no clothes and owning no possessions."
      },
      key_teachings: [
        "Penance purifies not just the body, but the soul.",
        "A true monk is not known by words but by silence and sacrifice.",
        "Discipline is the highest form of freedom."
      ],
      legacy: {
        "monastic lineage": "He has inspired the initiation of dozens of new monks and nuns, strengthening the Digambara order.",
        "temples and tirths": "Several temples and spiritual centers have been built in his presence, emphasizing simplicity and spirituality.",
        "silent inspiration": "Though not often on media, his very presence in tirths inspires devotion and reflection among devotees."
      }
    },
    associated_places: [
      {
        "place_name": "Bundelkhand, MP",
        "relation": "Place of early spiritual journey"
      },
      {
        "place_name": "Jain pilgrimage circuits across India",
        "relation": "Regions of ongoing padayatra"
      }
    ],
    quotes: [
      "Discipline in conduct is more powerful than discourse in words.",
      "The body is not the soul — don’t be bound by it.",
      "True saints don’t speak much — their silence speaks volumes."
    ],
    media: {
      images: [
        {
          "url": "https://placehold.co/800x400.png",
          "alt": "Acharya Vishuddh Sagar Ji walking barefoot"
        }
      ]
    },
    tags: ["Modern Saints", "Silent Monk", "Digambara Austerity", "Spiritual Discipline"],
    related_stories: [
      "acharya-vidyasagar-ji-maharaj",
      "acharya-pushpdant-sagar",
      "acharya-kundakunda"
    ],
    read_more_link: "/saints/acharya-vishuddh-sagar",
    image: 'https://placehold.co/800x400.png',
    imageHint: 'monk walking',
  }
];

    