
export type Temple = {
  id: string;
  name: string;
  location: string;
  importance: string;
  image: string;
  imageHint: string;
  type?: ('Shwetambara' | 'Digambara')[];
  era?: 'Ancient' | 'Medieval' | 'Modern';
  region: 'india' | 'pakistan' | 'other' | 'ancient-asia';
};

export type Region = {
  id: string;
  name: string;
  description: string;
  image: string;
  imageHint: string;
};

export const pilgrimageRegions: Region[] = [
    { 
        id: 'india', 
        name: 'India', 
        description: 'Explore the holiest Jain tirths and temples across the sacred land of India.',
        image: 'https://i.pinimg.com/1200x/ca/f2/c7/caf2c7f463d9cd221e6ee1a6ac940b2b.jpg',
        imageHint: 'indian temple',
    },
    { 
        id: 'pakistan', 
        name: 'Pakistan', 
        description: 'Discover the ancient Jain heritage and historic temple sites in Pakistan.',
        image: 'https://i.pinimg.com/736x/4f/a7/a1/4fa7a151f97ec01a81072a4a61df5d92.jpg',
        imageHint: 'ancient ruins',
    },
    { 
        id: 'ancient-asia', 
        name: 'Ancient Asian Temples', 
        description: 'Journey through the historic Jain temples of Myanmar, Sri Lanka, and Nepal.',
        image: 'https://i.pinimg.com/736x/08/70/f8/0870f8f98795a70155ad46e868c97637.jpg',
        imageHint: 'asian temple',
    },
    { 
        id: 'other', 
        name: 'Global Jain Centers', 
        description: 'Find modern Jain temples and spiritual centers across the world.',
        image: 'https://i.pinimg.com/1200x/c0/ba/da/c0bada3a7f1c24ff02571423ff2b48e4.jpg',
        imageHint: 'modern architecture',
    },
];

const allTemples: Temple[] = [
  // --- India ---
  {
    id: "shree-shankheshwar-parshwanath-jain-temple-gummileru",
    name: "Shree Shankheshwar Parshwanath Jain Temple, Gummileru",
    location: "Andhra Pradesh, India",
    importance: "A significant Jain pilgrimage site in Andhra Pradesh, revered by devotees.",
    image: "https://placehold.co/600x400.png",
    imageHint: "temple architecture",
    region: "india"
  },
  {
    id: "hrinkar-teerth-nh-5-namburu",
    name: "Hrinkar Teerth, NH 5, Namburu",
    location: "Andhra Pradesh, India",
    importance: "An important Jain Tirth located on the national highway, attracting pilgrims from all over.",
    image: "https://placehold.co/600x400.png",
    imageHint: "temple entrance",
    region: "india"
  },
  {
    id: "siddalakona-cave-temple",
    name: "Siddalakona cave temple",
    location: "Andhra Pradesh, India",
    importance: "An ancient cave temple reflecting the deep history of Jainism in the region.",
    image: "https://placehold.co/600x400.png",
    imageHint: "cave temple",
    region: "india"
  },
  {
    id: "undavalli-caves",
    name: "Undavalli Caves",
    location: "Andhra Pradesh, India",
    importance: "A monolithic example of Indian rock-cut architecture and a significant historical site.",
    image: "https://placehold.co/600x400.png",
    imageHint: "rock caves",
    region: "india"
  },
  {
    id: "ambapuram-cave-temple",
    name: "Ambapuram cave temple",
    location: "Andhra Pradesh, India",
    importance: "A serene cave temple known for its spiritual ambiance and historical carvings.",
    image: "https://placehold.co/600x400.png",
    imageHint: "cave entrance",
    region: "india"
  },
  {
    id: "bodhikonda-and-ghanikonda-caves",
    name: "Bodhikonda and Ghanikonda Caves",
    location: "Andhra Pradesh, India",
    importance: "These caves are noted for their historical significance in the context of Jain asceticism.",
    image: "https://placehold.co/600x400.png",
    imageHint: "ancient caves",
    region: "india"
  },
  {
    id: "danavulapadu-jain-temple",
    name: "Danavulapadu Jain temple",
    location: "Andhra Pradesh, India",
    importance: "An archaeological site featuring the remains of a 10th-century Jain temple.",
    image: "https://placehold.co/600x400.png",
    imageHint: "temple ruins",
    region: "india"
  },
  {
    id: "jain-temple-in-tihu",
    name: "Jain Temple in Tihu",
    location: "Assam, India",
    importance: "A place of worship for the Jain community in Assam, known for its peaceful atmosphere.",
    image: "https://placehold.co/600x400.png",
    imageHint: "serene temple",
    region: "india"
  },
  {
    id: "sri-surya-pahar",
    name: "Sri Surya Pahar",
    location: "Assam, India",
    importance: "An archaeological site with remains of Hindu, Buddhist, and Jain traditions.",
    image: "https://placehold.co/600x400.png",
    imageHint: "hill carvings",
    region: "india"
  },
  {
    id: "jal-mandir-pawapuri",
    name: "Jal Mandir, Pawapuri",
    location: "Bihar, India",
    importance: "A sacred temple where Lord Mahavira attained Moksha (liberation).",
    image: "https://placehold.co/600x400.png",
    imageHint: "temple lake",
    region: "india"
  },
  {
    id: "gaon-mandir-pawapuri",
    name: "Gaon mandir, Pawapuri",
    location: "Bihar, India",
    importance: "A village temple in the holy city of Pawapuri, significant to local devotees.",
    image: "https://placehold.co/600x400.png",
    imageHint: "village temple",
    region: "india"
  },
  {
    id: "jain-temple-kundalpur",
    name: "Jain temple, Kundalpur",
    location: "Bihar, India",
    importance: "Believed to be the birthplace of Lord Mahavira, a major pilgrimage center.",
    image: "https://placehold.co/600x400.png",
    imageHint: "historic temple",
    region: "india"
  },
  {
    id: "naulakha-mandir-rajgir",
    name: "Naulakha Mandir, Rajgir",
    location: "Bihar, India",
    importance: "A beautiful temple in the ancient city of Rajgir, known for its intricate architecture.",
    image: "https://placehold.co/600x400.png",
    imageHint: "ornate temple",
    region: "india"
  },
  {
    id: "son-bhandar-caves",
    name: "Son Bhandar Caves",
    location: "Bihar, India",
    importance: "Ancient caves believed to have been used by Jain ascetics, shrouded in mystery.",
    image: "https://placehold.co/600x400.png",
    imageHint: "stone caves",
    region: "india"
  },
  {
    id: "rajgir",
    name: "Rajgir",
    location: "Bihar, India",
    importance: "An ancient city holy to both Jains and Buddhists, with numerous temples and historical sites.",
    image: "https://placehold.co/600x400.png",
    imageHint: "ancient city",
    region: "india"
  },
  {
    id: "champapuri",
    name: "Champapuri",
    location: "Bihar, India",
    importance: "The birthplace of the 12th Tirthankara, Vasupujya, and a major Tirth.",
    image: "https://placehold.co/600x400.png",
    imageHint: "pilgrimage site",
    region: "india"
  },
  {
    id: "lachhuar-jain-temple-jamui",
    name: "Lachhuar Jain temple, Jamui",
    location: "Bihar, India",
    importance: "A historical Jain temple known for its serene environment and spiritual significance.",
    image: "https://placehold.co/600x400.png",
    imageHint: "quiet temple",
    region: "india"
  },
  {
    id: "kamaldah-jain-temple-pataliputra",
    name: "Kamaldah Jain temple, Pataliputra",
    location: "Bihar, India",
    importance: "An ancient temple complex in the historic city of Pataliputra (modern Patna).",
    image: "https://placehold.co/600x400.png",
    imageHint: "ancient architecture",
    region: "india"
  },
  {
    id: "vikramashila",
    name: "Vikramashila",
    location: "Bihar, India",
    importance: "An ancient learning center with evidence of Jain influence and presence.",
    image: "https://placehold.co/600x400.png",
    imageHint: "university ruins",
    region: "india"
  },
  {
    id: "mandargiri",
    name: "Mandargiri",
    location: "Bihar, India",
    importance: "A sacred hill associated with the penance of the 12th Tirthankara, Vasupujya.",
    image: "https://placehold.co/600x400.png",
    imageHint: "sacred hill",
    region: "india"
  },
  {
    id: "parashanatha-temple-arrah",
    name: "Parashanatha Temple, Arrah",
    location: "Bihar, India",
    importance: "A well-known temple dedicated to Lord Parshvanatha in the city of Arrah.",
    image: "https://placehold.co/600x400.png",
    imageHint: "city temple",
    region: "india"
  },
  {
    id: "44-jain-temples-arrah",
    name: "44 Jain temples, Arrah",
    location: "Bihar, India",
    importance: "A complex of numerous Jain temples, making Arrah a significant pilgrimage destination.",
    image: "https://placehold.co/600x400.png",
    imageHint: "temple complex",
    region: "india"
  },
  {
    id: "terracota-bhand-dewal-temple-arang",
    name: "Terracota Bhand Dewal temple, Arang",
    location: "Chhattisgarh, India",
    importance: "A unique 11th-century temple known for its terracotta ornamentation.",
    image: "https://placehold.co/600x400.png",
    imageHint: "terracotta temple",
    region: "india"
  },
  {
    id: "kevalya-dham-jain-tirth-kumhari",
    name: "Kevalya Dham Jain Tirth, Kumhari",
    location: "Chhattisgarh, India",
    importance: "A major Jain pilgrimage center known for its large temple complex.",
    image: "https://placehold.co/600x400.png",
    imageHint: "modern temple",
    region: "india"
  },
  {
    id: "uwasaggaharam-parshwa-teerth-durg",
    name: "Uwasaggaharam Parshwa Teerth, Durg",
    location: "Chhattisgarh, India",
    importance: "A healing Tirth dedicated to Lord Parshvanatha, attracting many devotees.",
    image: "https://placehold.co/600x400.png",
    imageHint: "healing shrine",
    region: "india"
  },
  {
    id: "arang-jain-temples",
    name: "Arang Jain temples",
    location: "Chhattisgarh, India",
    importance: "A group of ancient temples that highlight the rich history of Jainism in the region.",
    image: "https://placehold.co/600x400.png",
    imageHint: "historic ruins",
    region: "india"
  },
  {
    id: "jain-temple-inside-nani-daman-fort",
    name: "Jain Temple inside Nani Daman Fort",
    location: "Daman and Diu, India",
    importance: "A historic Jain temple located within the protective walls of the Nani Daman Fort.",
    image: "https://placehold.co/600x400.png",
    imageHint: "fort temple",
    region: "india"
  },
  {
    id: "jain-temple-daman-fort",
    name: "Jain Temple, Daman Fort",
    location: "Daman and Diu, India",
    importance: "An ancient temple showcasing Jain heritage within a historic fort complex.",
    image: "https://placehold.co/600x400.png",
    imageHint: "stone temple",
    region: "india"
  },
  {
    id: "shri-atma-vallabh-jain-smarak",
    name: "Shri Atma Vallabh Jain Smarak",
    location: "Delhi, India",
    importance: "A memorial and temple dedicated to the Jain saint Acharya Vallabhsuri.",
    image: "https://placehold.co/600x400.png",
    imageHint: "memorial tower",
    region: "india"
  },
  {
    id: "naya-mandir-dharampura",
    name: "Naya Mandir, Dharampura",
    location: "Delhi, India",
    importance: "A historic temple in Old Delhi known for its fine architecture and spiritual significance.",
    image: "https://placehold.co/600x400.png",
    imageHint: "old delhi temple",
    region: "india"
  },
  {
    id: "shri-padmavati-purwal-digamber-jain-mandir",
    name: "Shri Padmavati Purwal Digamber Jain Mandir",
    location: "Delhi, India",
    importance: "A prominent Digambar Jain temple dedicated to Goddess Padmavati.",
    image: "https://placehold.co/600x400.png",
    imageHint: "goddess shrine",
    region: "india"
  },
  {
    id: "sri-digambar-jain-lal-mandir",
    name: "Sri Digambar Jain Lal Mandir",
    location: "Delhi, India",
    importance: "The oldest and best-known Jain temple in Delhi, located opposite the Red Fort.",
    image: "https://placehold.co/600x400.png",
    imageHint: "red temple",
    region: "india"
  },
  {
    id: "ahinsa-sthal-mehrauli",
    name: "Ahinsa Sthal, Mehrauli",
    location: "Delhi, India",
    importance: "A site with a large statue of Lord Mahavira, promoting the message of non-violence.",
    image: "https://placehold.co/600x400.png",
    imageHint: "large statue",
    region: "india"
  },
  {
    id: "dadabadi-mehrauli",
    name: "Dādābadī, Mehrauli",
    location: "Delhi, India",
    importance: "A shrine dedicated to the Jain saint Jinadatta Suri, a place of peace and worship.",
    image: "https://placehold.co/600x400.png",
    imageHint: "serene shrine",
    region: "india"
  },
  {
    id: "neminath-jain-basti-bandivade",
    name: "Neminath Jain Basti, Bandivade",
    location: "Goa, India",
    importance: "The only active ancient Jain temple in Goa, dedicated to Lord Neminath.",
    image: "https://placehold.co/600x400.png",
    imageHint: "ancient basti",
    region: "india"
  },
  {
    id: "cudnem-jain-temple",
    name: "Cudnem Jain Temple",
    location: "Goa, India",
    importance: "The site of a 10th-century Jain temple, highlighting the religion's history in Goa.",
    image: "https://placehold.co/600x400.png",
    imageHint: "temple ruins",
    region: "india"
  },
  {
    id: "narve-jain-temple-ruins",
    name: "Narve Jain Temple Ruins",
    location: "Goa, India",
    importance: "The ruins of a Jain temple from the Vijayanagara period, an important archaeological site.",
    image: "https://placehold.co/600x400.png",
    imageHint: "ancient ruins",
    region: "india"
  },
  {
    id: "ajitnath-temple",
    name: "Ajitnath Temple",
    location: "Gujarat, India",
    importance: "A beautiful temple dedicated to the second Tirthankara, Ajitnath.",
    image: "https://placehold.co/600x400.png",
    imageHint: "marble temple",
    region: "india"
  },
  {
    id: "vasai-jain-temple",
    name: "Vasai Jain Temple",
    location: "Gujarat, India",
    importance: "A significant historical Jain temple located in Kutch, known for its architecture.",
    image: "https://placehold.co/600x400.png",
    imageHint: "kutch temple",
    region: "india"
  },
  {
    id: "girnar",
    name: "Girnar",
    location: "Gujarat, India",
    importance: "A major pilgrimage site where the 22nd Tirthankara, Neminath, attained Nirvana.",
    image: "https://placehold.co/600x400.png",
    imageHint: "holy mountain",
    region: "india"
  },
  {
    id: "samovsaran-mandir-palitana",
    name: "Samovsaran Mandir, Palitana",
    location: "Gujarat, India",
    importance: "A unique temple depicting the Samovsaran, the divine preaching hall of a Tirthankara.",
    image: "https://placehold.co/600x400.png",
    imageHint: "divine hall",
    region: "india"
  },
  {
    id: "pavagadh-jain-temples",
    name: "Pavagadh Jain temples",
    location: "Gujarat, India",
    importance: "A complex of Jain temples on the sacred Pavagadh hill.",
    image: "https://placehold.co/600x400.png",
    imageHint: "hilltop temple",
    region: "india"
  },
  {
    id: "neminatha-temple-kumbharia",
    name: "Neminatha temple, Kumbharia",
    location: "Gujarat, India",
    importance: "Part of the Kumbharia Jain temples, famous for its intricate marble carvings.",
    image: "https://placehold.co/600x400.png",
    imageHint: "marble carving",
    region: "india"
  },
  {
    id: "bava-pyara-caves",
    name: "Bava Pyara Caves",
    location: "Gujarat, India",
    importance: "Ancient man-made caves with influences of Buddhist and Jain architecture.",
    image: "https://placehold.co/600x400.png",
    imageHint: "ancient cave",
    region: "india"
  },
  {
    id: "dhank-caves",
    name: "Dhank Caves",
    location: "Gujarat, India",
    importance: "Rock-cut caves with Jain carvings dating back to the Western Kshatrapa period.",
    image: "https://placehold.co/600x400.png",
    imageHint: "rock cave",
    region: "india"
  },
  {
    id: "talaja-caves",
    name: "Talaja Caves",
    location: "Gujarat, India",
    importance: "A group of around 30 caves with Jain and Buddhist architectural elements.",
    image: "https://placehold.co/600x400.png",
    imageHint: "cave group",
    region: "india"
  },
  {
    id: "palitana-tirtha",
    name: "Palitana Tirtha",
    location: "Gujarat, India",
    importance: "A major pilgrimage complex with hundreds of temples on the Shatrunjaya hill.",
    image: "https://placehold.co/600x400.png",
    imageHint: "temple city",
    region: "india"
  },
  {
    id: "shri-shankeshwar-tirth",
    name: "Shri Shankeshwar Tirth",
    location: "Gujarat, India",
    importance: "A highly revered Tirth, especially for the idol of Lord Parshvanatha.",
    image: "https://placehold.co/600x400.png",
    imageHint: "revered shrine",
    region: "india"
  },
  {
    id: "taranga-jain-temple",
    name: "Taranga Jain temple",
    location: "Gujarat, India",
    importance: "A 12th-century temple known for its stunning architecture and serene location.",
    image: "https://placehold.co/600x400.png",
    imageHint: "hill temple",
    region: "india"
  },
  {
    id: "hutheesing-jain-temple",
    name: "Hutheesing Jain Temple",
    location: "Gujarat, India",
    importance: "An elegant temple in Ahmedabad built in 1848, dedicated to Dharmanatha.",
    image: "https://placehold.co/600x400.png",
    imageHint: "elegant temple",
    region: "india"
  },
  {
    id: "mahudi-jain-temple",
    name: "Mahudi Jain Temple",
    location: "Gujarat, India",
    importance: "Famous for the idol of Ghantakarna Mahavir and the Sukhdi prasad.",
    image: "https://placehold.co/600x400.png",
    imageHint: "famous temple",
    region: "india"
  },
  {
    id: "shantinath-jain-temple-kothara-kutch",
    name: "Shantinath Jain temple, Kothara, Kutch",
    location: "Gujarat, India",
    importance: "One of the five revered Jain temples of Abdasa, Kutch.",
    image: "https://placehold.co/600x400.png",
    imageHint: "kutch architecture",
    region: "india"
  },
  {
    id: "kumbharia-jain-temples",
    name: "Kumbharia Jain temples",
    location: "Gujarat, India",
    importance: "A complex of five marble temples known for their exquisite carvings.",
    image: "https://placehold.co/600x400.png",
    imageHint: "marble complex",
    region: "india"
  },
  {
    id: "panchasara-parshwanath-temple-patan",
    name: "Panchasara Parshwanath temple, Patan",
    location: "Gujarat, India",
    importance: "A historic temple with an idol of Parshvanatha from the ancient city of Panchasara.",
    image: "https://placehold.co/600x400.png",
    imageHint: "historic patan",
    region: "india"
  },
  {
    id: "songadh-tirtha",
    name: "Songadh Tirtha",
    location: "Gujarat, India",
    importance: "A pilgrimage site for Kanji Swami followers, focusing on Digambara traditions.",
    image: "https://placehold.co/600x400.png",
    imageHint: "digambar shrine",
    region: "india"
  },
  {
    id: "vataman",
    name: "Vataman",
    location: "Gujarat, India",
    importance: "A serene Jain pilgrimage site known for its peaceful environment.",
    image: "https://placehold.co/600x400.png",
    imageHint: "peaceful pilgrimage",
    region: "india"
  },
  {
    id: "jain-temples-abhapur",
    name: "Jain temples, Abhapur",
    location: "Gujarat, India",
    importance: "A cluster of ruined 15th-century Jain temples, an important archaeological site.",
    image: "https://placehold.co/600x400.png",
    imageHint: "ruined temples",
    region: "india"
  },
  {
    id: "trimandir-adalaj-gandhinagar",
    name: "Trimandir, Adalaj, Gandhinagar",
    location: "Gujarat, India",
    importance: "A unique temple complex housing idols of Jainism, Shaivism, and Vaishnavism together.",
    image: "https://placehold.co/600x400.png",
    imageHint: "modern complex",
    region: "india"
  },
  {
    id: "shri-pavagadh-tirth",
    name: "Shri Pavagadh Tirth",
    location: "Gujarat, India",
    importance: "A sacred pilgrimage site on Pavagadh hill with several Jain temples.",
    image: "https://placehold.co/600x400.png",
    imageHint: "sacred hill",
    region: "india"
  },
  {
    id: "naliya-jain-derasar",
    name: "Naliya Jain Derasar",
    location: "Gujarat, India",
    importance: "One of the five revered Jain temples of Abdasa, Kutch, with a rich history.",
    image: "https://placehold.co/600x400.png",
    imageHint: "kutch derasar",
    region: "india"
  },
  {
    id: "simandhar-swami-jain-derasar-mehsana",
    name: "Simandhar Swami Jain Derasar, Mehsana",
    location: "Gujarat, India",
    importance: "A magnificent temple dedicated to the living Tirthankara, Simandhar Swami.",
    image: "https://placehold.co/600x400.png",
    imageHint: "magnificent derasar",
    region: "india"
  },
  {
    id: "pallaviya-parshwanath-temple-palanpur",
    name: "Pallaviya Parshwanath Temple, Palanpur",
    location: "Gujarat, India",
    importance: "A historic temple dedicated to Lord Parshvanatha in the city of Palanpur.",
    image: "https://placehold.co/600x400.png",
    imageHint: "city derasar",
    region: "india"
  },
  {
    id: "vardhman-shahs-temple-jamnagar",
    name: "Vardhman Shah's Temple, Jamnagar",
    location: "Gujarat, India",
    importance: "A part of the Chandi Bazaar Jain temple complex, known for its beauty.",
    image: "https://placehold.co/600x400.png",
    imageHint: "bazaar temple",
    region: "india"
  },
  {
    id: "chintamani-jain-temple-surat",
    name: "Chintamani Jain Temple, Surat",
    location: "Gujarat, India",
    importance: "A 400-year-old temple known for its vegetable dye paintings and intricate woodwork.",
    image: "https://placehold.co/600x400.png",
    imageHint: "woodwork temple",
    region: "india"
  },
  {
    id: "shri-talaja-tirth",
    name: "Shri Talaja Tirth",
    location: "Gujarat, India",
    importance: "A pilgrimage site on Talaja hill with numerous caves and temples.",
    image: "https://placehold.co/600x400.png",
    imageHint: "hill caves",
    region: "india"
  },
  {
    id: "simandhar-swami-jain-derasar-bhilad",
    name: "Simandhar Swami Jain Derasar, Bhilad",
    location: "Gujarat, India",
    importance: "A large, modern temple complex dedicated to Simandhar Swami.",
    image: "https://placehold.co/600x400.png",
    imageHint: "modern derasar",
    region: "india"
  },
  {
    id: "vijapur-derasar",
    name: "Vijapur Derasar",
    location: "Gujarat, India",
    importance: "A historical Jain temple known for its architecture and spiritual ambience.",
    image: "https://placehold.co/600x400.png",
    imageHint: "historical derasar",
    region: "india"
  },
  {
    id: "chandaprabhu-digambar-jain-bavan-jinalya-bhiloda",
    name: "Chandaprabhu Digambar Jain Bavan Jinalya, Bhiloda",
    location: "Gujarat, India",
    importance: "A 'Bavan Jinalya' (52 shrines) temple, a unique architectural style.",
    image: "https://placehold.co/600x400.png",
    imageHint: "jinalya temple",
    region: "india"
  },
  {
    id: "rajgadhi-timbo",
    name: "Rajgadhi Timbo",
    location: "Gujarat, India",
    importance: "An archaeological mound with ruins of ancient structures, including Jain temples.",
    image: "https://placehold.co/600x400.png",
    imageHint: "archaeological mound",
    region: "india"
  },
  {
    id: "trimandir-godhra",
    name: "Trimandir, Godhra",
    location: "Gujarat, India",
    importance: "A temple promoting non-sectarianism by housing deities of Jainism, Shaivism, and Vaishnavism.",
    image: "https://placehold.co/600x400.png",
    imageHint: "non-sectarian temple",
    region: "india"
  },
  {
    id: "shri-suthri-jain-derasar-suthari",
    name: "Shri Suthri Jain Derasar, Suthari",
    location: "Gujarat, India",
    importance: "One of the five revered Jain temples in Abdasa, Kutch, known for its history.",
    image: "https://placehold.co/600x400.png",
    imageHint: "kutch architecture",
    region: "india"
  },
  {
    id: "jain-derasar-of-tera-kutch",
    name: "Jain Derasar of Tera, Kutch",
    location: "Gujarat, India",
    importance: "A historical temple in the Tera village of Kutch, significant for local Jains.",
    image: "https://placehold.co/600x400.png",
    imageHint: "village derasar",
    region: "india"
  },
  {
    id: "jain-temples-in-ghogha",
    name: "Jain temples in Ghogha",
    location: "Gujarat, India",
    importance: "A cluster of ancient Jain temples in the port town of Ghogha.",
    image: "https://placehold.co/600x400.png",
    imageHint: "port temples",
    region: "india"
  },
  {
    id: "pushpagiri-sonkatch",
    name: "Pushpagiri, Sonkatch",
    location: "Gujarat, India",
    importance: "A Jain pilgrimage site with temples and facilities for devotees.",
    image: "https://placehold.co/600x400.png",
    imageHint: "pilgrim center",
    region: "india"
  },
  {
    id: "hansi-jain-temple",
    name: "Hansi Jain temple",
    location: "Haryana, India",
    importance: "An ancient temple with archaeological significance, housing rare artifacts.",
    image: "https://placehold.co/600x400.png",
    imageHint: "archaeological temple",
    region: "india"
  },
  {
    id: "siddhant-tirth-kshetra-shikohpur",
    name: "Siddhant Tirth Kshetra Shikohpur",
    location: "Haryana, India",
    importance: "A Digambar Jain Tirth dedicated to the principles (Siddhant) of Jainism.",
    image: "https://placehold.co/600x400.png",
    imageHint: "digambar tirth",
    region: "india"
  },
  {
    id: "gupti-dham",
    name: "Gupti Dham",
    location: "Haryana, India",
    importance: "A serene and secluded Jain pilgrimage site.",
    image: "https://placehold.co/600x400.png",
    imageHint: "secluded dham",
    region: "india"
  },
  {
    id: "ranila-jain-temple",
    name: "Ranila Jain temple",
    location: "Haryana, India",
    importance: "A historical temple from which ancient Jain idols have been discovered.",
    image: "https://placehold.co/600x400.png",
    imageHint: "historic discovery",
    region: "india"
  },
  {
    id: "punyoday-tirth",
    name: "Punyoday Tirth",
    location: "Haryana, India",
    importance: "A modern Tirth focused on spiritual merit (Punya) and service.",
    image: "https://placehold.co/600x400.png",
    imageHint: "modern tirth",
    region: "india"
  },
  {
    id: "ambika-mata-temple-kangra-fort",
    name: "Ambika mata temple, Kangra fort",
    location: "Himachal Pradesh, India",
    importance: "A temple dedicated to the Jain Yakshini Ambika, located within the historic Kangra Fort.",
    image: "https://placehold.co/600x400.png",
    imageHint: "fortress temple",
    region: "india"
  },
  {
    id: "kangra-svetambara-jain-temple",
    name: "Kangra Śvetāmbara Jain temple",
    location: "Himachal Pradesh, India",
    importance: "A Shwetambar Jain temple with an idol of Lord Adinath, having historical roots.",
    image: "https://placehold.co/600x400.png",
    imageHint: "mountain temple",
    region: "india"
  },
  {
    id: "jal-mandir",
    name: "Jal Mandir",
    location: "Jharkhand, India",
    importance: "A beautiful temple located in the middle of a pond, a serene place of worship.",
    image: "https://placehold.co/600x400.png",
    imageHint: "lake temple",
    region: "india"
  },
  {
    id: "shri-sammed-shikharji",
    name: "Shri Sammed Shikharji",
    location: "Jharkhand, India",
    importance: "The most sacred Jain pilgrimage site where 20 of the 24 Tirthankaras attained Moksha.",
    image: "https://placehold.co/600x400.png",
    imageHint: "sacred mountain",
    region: "india"
  },
  {
    id: "gommateshwara-statue-shravanabelagola",
    name: "Gommateshwara statue, Shravanabelagola",
    location: "Karnataka, India",
    importance: "A colossal monolithic statue of Bahubali, a major icon of Jainism.",
    image: "https://placehold.co/600x400.png",
    imageHint: "colossal statue",
    region: "india"
  },
  {
    id: "kamal-basadi-belgaum-fort",
    name: "Kamal Basadi, Belgaum Fort",
    location: "Karnataka, India",
    importance: "A 10th-century temple known for its unique lotus-shaped dome (Kamal).",
    image: "https://placehold.co/600x400.png",
    imageHint: "lotus temple",
    region: "india"
  },
  {
    id: "shantinatha-basadi",
    name: "Shantinatha Basadi",
    location: "Karnataka, India",
    importance: "A prominent temple dedicated to the 16th Tirthankara, Shantinatha.",
    image: "https://placehold.co/600x400.png",
    imageHint: "peace shrine",
    region: "india"
  },
  {
    id: "akkana-basadi",
    name: "Akkana Basadi",
    location: "Karnataka, India",
    importance: "A 12th-century temple noted for its intricate carvings and Hoysala architecture.",
    image: "https://placehold.co/600x400.png",
    imageHint: "hoysala architecture",
    region: "india"
  },
  {
    id: "parshvanatha-basadi-halebidu",
    name: "Parshvanatha Basadi, Halebidu",
    location: "Karnataka, India",
    importance: "A beautiful temple dedicated to Parshvanatha, part of the Halebidu temple complex.",
    image: "https://placehold.co/600x400.png",
    imageHint: "halebidu temple",
    region: "india"
  },
  {
    id: "chaturmukha-basadi",
    name: "Chaturmukha Basadi",
    location: "Karnataka, India",
    importance: "A symmetrical temple with four entrances, a unique architectural style.",
    image: "https://placehold.co/600x400.png",
    imageHint: "symmetrical temple",
    region: "india"
  },
  {
    id: "chandragiri-complex-shravanbelgola",
    name: "Chandragiri Complex, Shravanbelgola",
    location: "Karnataka, India",
    importance: "A hill with numerous small temples (basadis) and historical significance.",
    image: "https://placehold.co/600x400.png",
    imageHint: "hill complex",
    region: "india"
  },
  {
    id: "humcha",
    name: "Humcha",
    location: "Karnataka, India",
    importance: "An ancient pilgrimage center dedicated to the goddess Padmavati.",
    image: "https://placehold.co/600x400.png",
    imageHint: "goddess temple",
    region: "india"
  },
  {
    id: "badami-cave-temples",
    name: "Badami cave temples",
    location: "Karnataka, India",
    importance: "A complex of caves, one of which is dedicated to Jainism with a statue of Bahubali.",
    image: "https://placehold.co/600x400.png",
    imageHint: "badami caves",
    region: "india"
  },
  {
    id: "aihole-cave-temple",
    name: "Aihole cave temple",
    location: "Karnataka, India",
    importance: "An ancient cave temple that is part of the larger Aihole temple complex.",
    image: "https://placehold.co/600x400.png",
    imageHint: "aihole cave",
    region: "india"
  },
  // --- Pakistan ---
  {
    id: "ancient-jain-temple-taxila",
    name: "Ancient Jain Temple, Taxila",
    location: "Sirkap, Taxila, Punjab, Pakistan",
    importance: "A historical site located within the ancient city of Taxila.",
    image: "https://placehold.co/600x400.png",
    imageHint: "ancient ruins",
    region: "pakistan"
  },
  {
    id: "jain-temple-dunga-bunga",
    name: "Jain Temple, Dunga Bunga",
    location: "Dunga Bunga, Punjab, Pakistan",
    importance: "A historic site of Jain worship.",
    image: "https://placehold.co/600x400.png",
    imageHint: "historic temple",
    region: "pakistan"
  },
  {
    id: "jain-svetambara-temple-lahore",
    name: "Jain Śvetāmbara Temple with Shikhar",
    location: "Thari Bhabrian, Lahore, Pakistan",
    importance: "A historical Shwetambara temple featuring a shikhar (spire).",
    image: "https://placehold.co/600x400.png",
    imageHint: "temple spire",
    region: "pakistan"
  },
  {
    id: "jain-digambar-temple-lahore",
    name: "Jain Digambar Temple with Shikhar",
    location: "Thari Bhabrian, Lahore, Pakistan",
    importance: "A historical Digambar temple featuring a shikhar (spire).",
    image: "https://placehold.co/600x400.png",
    imageHint: "old temple",
    region: "pakistan"
  },
  {
    id: "jain-dada-wadi-lahore",
    name: "Jain Śvetāmbara Dada Wadi",
    location: "Guru Mangat, Lahore Cantt, Pakistan",
    importance: "A mini temple (Dada Wadi) with sacred footprints in stone.",
    image: "https://placehold.co/600x400.png",
    imageHint: "sacred footprints",
    region: "pakistan"
  },
  {
    id: "jain-mandir-chowk-lahore",
    name: "Jain Digambar Temple, Anarkali",
    location: "Jain Mandir Chowk, Old Anarkali, Lahore, Pakistan",
    importance: "Once a major temple, it was destroyed in 1992 and the site is now used as an Islamic school.",
    image: "https://placehold.co/600x400.png",
    imageHint: "historic site",
    region: "pakistan"
  },
  {
    id: "jain-temple-thar",
    name: "Jain Digambar Temple, Thar",
    location: "Thar, Sindh, Pakistan",
    importance: "An important Digambar temple in the Sindh region.",
    image: "https://placehold.co/600x400.png",
    imageHint: "desert temple",
    region: "pakistan"
  },
  {
    id: "jain-temple-multan",
    name: "Jain Digambar Temple, Multan",
    location: "Bohar Gate, Multan, Pakistan",
    importance: "A historic Jain temple in the ancient city of Multan.",
    image: "https://placehold.co/600x400.png",
    imageHint: "city temple",
    region: "pakistan"
  },
  {
    id: "gori-temple-nagarparkar",
    name: "Gori Temple, Nagarparkar",
    location: "Nagarparkar, Sindh, Pakistan",
    importance: "A major pilgrimage site, believed to be the original location of Godiji Parshwanath. It features 52 domes.",
    image: "https://placehold.co/600x400.png",
    imageHint: "domed temple",
    region: "pakistan"
  },
  {
    id: "ancient-jain-temple-nagarparkar",
    name: "Ancient Jain Temple, Nagarparkar",
    location: "Nagarparkar, Sindh, Pakistan",
    importance: "Part of the rich Nagarparkar Jain heritage cluster.",
    image: "https://placehold.co/600x400.png",
    imageHint: "stone ruins",
    region: "pakistan"
  },
  {
    id: "virawah-jain-temple",
    name: "Virawah Jain Temple",
    location: "Virawah, Sindh, Pakistan",
    importance: "A historical temple in the Virawah area.",
    image: "https://placehold.co/600x400.png",
    imageHint: "ancient structure",
    region: "pakistan"
  },
  {
    id: "jain-temple-bhodesar",
    name: "Jain Temple of Bhodesar",
    location: "Bhodesar, Sindh, Pakistan",
    importance: "A significant historical Jain temple in Bhodesar.",
    image: "https://placehold.co/600x400.png",
    imageHint: "historic architecture",
    region: "pakistan"
  },
  {
    id: "karoonjar-mountain-temple",
    name: "Karoonjar Mountain Temple",
    location: "Karoonjar Hills, Nagarparkar, Pakistan",
    importance: "A temple located in the scenic Karoonjar Hills.",
    image: "https://placehold.co/600x400.png",
    imageHint: "mountain shrine",
    region: "pakistan"
  },
  {
    id: "nagarparkar-jain-temples",
    name: "Nagarparkar Jain Temples",
    location: "Nagarparkar, Sindh, Pakistan",
    importance: "A cluster of Jain temples that are a testament to the region's rich Jain history.",
    image: "https://placehold.co/600x400.png",
    imageHint: "temple cluster",
    region: "pakistan"
  },
  {
    id: "jain-shwetamber-temple-karachi",
    name: "Jain Shwetamber Temple",
    location: "Ranchod Line, Karachi, Pakistan",
    importance: "A Shwetambar temple with a Shikhar in the heart of Karachi.",
    image: "https://placehold.co/600x400.png",
    imageHint: "urban temple",
    region: "pakistan"
  },
  {
    id: "jain-shwetamber-temple-hyderabad",
    name: "Jain Shwetamber Temple",
    location: "Hyderabad, Sindh, Pakistan",
    importance: "A historical Shwetambar temple in Hyderabad, Sindh.",
    image: "https://placehold.co/600x400.png",
    imageHint: "city architecture",
    region: "pakistan"
  },
  // --- Ancient Asia ---
  {
    id: "shree-jain-shwetamber-murtipujak-temple-myanmar",
    name: "Shree Jain Shwetamber Murtipujak Temple",
    location: "Yangon, Myanmar",
    importance: "One of the oldest Jain temples in Southeast Asia, reflecting historic trade routes and Jain diaspora.",
    image: "https://placehold.co/600x400.png",
    imageHint: "historic asian temple",
    region: "ancient-asia"
  },
  {
    id: "jain-temple-kathmandu-nepal",
    name: "Jain Temple, Kathmandu",
    location: "Kathmandu, Nepal",
    importance: "Central place of worship for the Jain community in Nepal.",
    image: "https://placehold.co/600x400.png",
    imageHint: "himalayan temple",
    region: "ancient-asia"
  },
  // --- Other (Global) ---
  {
    id: "jain-temple-melbourne-australia",
    name: "Jain Temple, Melbourne",
    location: "Moorabbin, Victoria, Australia",
    importance: "A key spiritual center for the Śvetāmbara Jain community in Victoria.",
    image: "https://placehold.co/600x400.png",
    imageHint: "modern temple",
    region: "other"
  },
  {
    id: "jain-temple-sydney-seven-hill-australia",
    name: "Jain Temple, Sydney (Seven Hill)",
    location: "Seven Hill, Sydney, Australia",
    importance: "Serving the Jain community in Sydney, organized by the Sydney Jain Mandal.",
    image: "https://placehold.co/600x400.png",
    imageHint: "community temple",
    region: "other"
  },
  {
    id: "vitraag-jain-sangh-sydney-australia",
    name: "Jain Temple, Sydney (Girraween)",
    location: "Girraween, Sydney, Australia",
    importance: "A place of worship for the Vitraag Jain Śvetāmbara Sangh in New South Wales.",
    image: "https://placehold.co/600x400.png",
    imageHint: "prayer hall",
    region: "other"
  },
  {
    id: "jain-temple-antwerp-belgium",
    name: "Jain Temple, Antwerp",
    location: "Wilrijk, Antwerp, Belgium",
    importance: "A significant Jain temple in Europe, serving the large Jain community in Antwerp's diamond district.",
    image: "https://placehold.co/600x400.png",
    imageHint: "european temple",
    region: "other"
  },
  {
    id: "brampton-jain-temple-canada",
    name: "Brampton Jain Temple",
    location: "Brampton, Canada",
    importance: "A major center for the Jain community in the Greater Toronto Area.",
    image: "https://placehold.co/600x400.png",
    imageHint: "canadian temple",
    region: "other"
  },
  {
    id: "jain-society-toronto-temple-canada",
    name: "Jain Society of Toronto Temple",
    location: "Toronto, Canada",
    importance: "A unified place of worship for both Śvetāmbara and Digambara Jains in Toronto.",
    image: "https://placehold.co/600x400.png",
    imageHint: "community center",
    region: "other"
  },
  {
    id: "digambar-temple-toronto-canada",
    name: "Digambar Temple Shri Jain Mandir",
    location: "Toronto, Canada",
    importance: "A dedicated Digambar Jain temple serving the community in Toronto.",
    image: "https://placehold.co/600x400.png",
    imageHint: "modern mandir",
    region: "other"
  },
  {
    id: "shree-hong-kong-jain-sangh-hong-kong",
    name: "Shree Hong Kong Jain Sangh",
    location: "Tsim Sha Tsui, Hong Kong",
    importance: "The central hub for the Jain community in Hong Kong, located in Tsim Sha Tsui.",
    image: "https://placehold.co/600x400.png",
    imageHint: "city temple",
    region: "other"
  },
  {
    id: "mahavir-swami-jain-temple-kobe-japan",
    name: "Mahavir Swami Jain Temple",
    location: "Kobe, Japan",
    importance: "A unique Jain temple in Japan, serving the local and expatriate community.",
    image: "https://placehold.co/600x400.png",
    imageHint: "asian temple",
    region: "other"
  },
  {
    id: "mombasa-jain-temple-kenya",
    name: "Mombasa Jain Temple",
    location: "Mombasa, Kenya",
    importance: "An important spiritual center for the historic Jain community in Mombasa.",
    image: "https://placehold.co/600x400.png",
    imageHint: "african temple",
    region: "other"
  },
  {
    id: "nairobi-jain-temple-kenya",
    name: "Nairobi Jain Temple",
    location: "Nairobi, Kenya",
    importance: "The main Jain temple in Kenya's capital, serving a large and active community.",
    image: "https://placehold.co/600x400.png",
    imageHint: "capital city temple",
    region: "other"
  },
  {
    id: "thika-jain-temple-kenya",
    name: "Thika Jain Temple",
    location: "Thika, Kenya",
    importance: "A community temple serving the Jain population in the industrial town of Thika.",
    image: "https://placehold.co/600x400.png",
    imageHint: "community prayer",
    region: "other"
  },
  {
    id: "nakuru-jain-temple-kenya",
    name: "Nakuru Jain Temple",
    location: "Nakuru, Kenya",
    importance: "A center for Jain worship and community activities in the Rift Valley region.",
    image: "https://placehold.co/600x400.png",
    imageHint: "regional temple",
    region: "other"
  },
  {
    id: "eldoret-jain-temple-kenya",
    name: "Eldoret Jain Temple",
    location: "Eldoret, Kenya",
    importance: "A place of worship for the Jain community in the western part of Kenya.",
    image: "https://placehold.co/600x400.png",
    imageHint: "local temple",
    region: "other"
  },
  {
    id: "first-shikhar-bandhi-jain-derasar-malaysia",
    name: "First Shikhar Bandhi Jain Derasar",
    location: "Ipoh, Malaysia",
    importance: "The first Shikharbandhi temple in Malaysia, dedicated to Shri Chintamani Parshvanath.",
    image: "https://placehold.co/600x400.png",
    imageHint: "southeast asian temple",
    region: "other"
  },
  {
    id: "kualalumpur-swetamber-jain-temple-malaysia",
    name: "Kualalumpur Swetamber Jain Temple",
    location: "Kuala Lumpur, Malaysia",
    importance: "The main Śvetāmbara Jain temple in Malaysia's capital city.",
    image: "https://placehold.co/600x400.png",
    imageHint: "modern derasar",
    region: "other"
  },
  {
    id: "jain-temple-singapore",
    name: "Jain Temple",
    location: "Singapore",
    importance: "A central place of worship for the Jain community in Singapore.",
    image: "https://placehold.co/600x400.png",
    imageHint: "singapore temple",
    region: "other"
  },
  {
    id: "shree-jain-sangh-tanzania",
    name: "Shree Jain Sangh",
    location: "Dar es Salaam, Tanzania",
    importance: "The main Jain community center in Dar es Salaam.",
    image: "https://placehold.co/600x400.png",
    imageHint: "african community",
    region: "other"
  },
  {
    id: "jain-derasar-arusha-tanzania",
    name: "Jain Derasar, Arusha",
    location: "Arusha, Tanzania",
    importance: "A place of worship for the Jain community in Arusha.",
    image: "https://placehold.co/600x400.png",
    imageHint: "local derasar",
    region: "other"
  },
  {
    id: "zanzibar-derasar-tanzania",
    name: "Zanzibar Derasar",
    location: "Zanzibar, Tanzania",
    importance: "A historic Jain derasar in Zanzibar.",
    image: "https://placehold.co/600x400.png",
    imageHint: "historic temple",
    region: "other"
  },
  {
    id: "jain-temple-dubai-uae",
    name: "Jain Temple, Dubai",
    location: "Dubai, United Arab Emirates",
    importance: "A significant place of worship for the Jain community in the UAE.",
    image: "https://placehold.co/600x400.png",
    imageHint: "modern temple",
    region: "other"
  },
  {
    id: "oshwal-mahajanwadi-croydon-uk",
    name: "Oshwal Mahajanwadi",
    location: "Croydon, United Kingdom",
    importance: "A community hall and center for the Oshwal Jain community.",
    image: "https://placehold.co/600x400.png",
    imageHint: "community hall",
    region: "other"
  },
  {
    id: "the-jain-centre-leicester-uk",
    name: "The Jain Centre, Leicester",
    location: "Leicester, United Kingdom",
    importance: "One of the first consecrated Jain temples in the Western world.",
    image: "https://placehold.co/600x400.png",
    imageHint: "western temple",
    region: "other"
  },
  {
    id: "shree-mahavir-swami-jain-temple-harrow-uk",
    name: "Shree Mahavir Swami Jain Temple",
    location: "Harrow, London, United Kingdom",
    importance: "A community temple dedicated to Lord Mahavir.",
    image: "https://placehold.co/600x400.png",
    imageHint: "london temple",
    region: "other"
  },
  {
    id: "jain-samaj-manchester-uk",
    name: "Jain Samaj Manchester",
    location: "Manchester, United Kingdom",
    importance: "A hub for the Jain community in Manchester and the North of England.",
    image: "https://placehold.co/600x400.png",
    imageHint: "uk community",
    region: "other"
  },
  {
    id: "jain-samaj-leicester-and-temple-uk",
    name: "Jain Samaj Leicester and Temple",
    location: "Leicester, United Kingdom",
    importance: "An important center for Jain worship and cultural activities in Leicester.",
    image: "https://placehold.co/600x400.png",
    imageHint: "uk temple",
    region: "other"
  },
  {
    id: "jain-samaj-wellingborough-and-temple-uk",
    name: "Jain Samaj Wellingborough and Temple",
    location: "Wellingborough, United Kingdom",
    importance: "A Jain community center and temple serving the East Midlands.",
    image: "https://placehold.co/600x400.png",
    imageHint: "community center",
    region: "other"
  },
  {
    id: "jain-samaj-thornton-heath-croydon-uk",
    name: "Jain Samaj Thornton Heath",
    location: "Croydon, United Kingdom",
    importance: "A community organization for Jains in the Croydon area.",
    image: "https://placehold.co/600x400.png",
    imageHint: "local samaj",
    region: "other"
  },
  {
    id: "jain-samaj-potters-bar-uk",
    name: "Jain Samaj Potters Bar",
    location: "Potters Bar, United Kingdom",
    importance: "A community centre and temple serving the Jain community.",
    image: "https://placehold.co/600x400.png",
    imageHint: "community temple",
    region: "other"
  },
  {
    id: "kailash-giri-jain-temple-london-uk",
    name: "Kailash Giri Jain Temple",
    location: "London, United Kingdom",
    importance: "A place for Jain worship and spiritual activities in London.",
    image: "https://placehold.co/600x400.png",
    imageHint: "london temple",
    region: "other"
  },
  {
    id: "oshwal-centre-hertfordshire-uk",
    name: "Oshwal Centre",
    location: "Hertfordshire, United Kingdom",
    importance: "The first Jain temple built on virgin ground in Europe, a major landmark.",
    image: "https://placehold.co/600x400.png",
    imageHint: "european landmark",
    region: "other"
  },
  {
    id: "shrimad-rajchandra-mission-dharampur-london-uk",
    name: "Shrimad Rajchandra Mission Dharampur",
    location: "Bushey, London, United Kingdom",
    importance: "A spiritual centre dedicated to the teachings of Shrimad Rajchandra.",
    image: "https://placehold.co/600x400.png",
    imageHint: "spiritual mission",
    region: "other"
  },
  {
    id: "institute-of-jainology-london-uk",
    name: "Institute of Jainology",
    location: "Greenford, London, United Kingdom",
    importance: "An international organization promoting Jain principles and learning.",
    image: "https://placehold.co/600x400.png",
    imageHint: "academic building",
    region: "other"
  },
  {
    id: "jain-center-of-greater-phoenix-usa",
    name: "Jain Center of Greater Phoenix (JCGP)",
    location: "Phoenix, Arizona, USA",
    importance: "A spiritual and community center for Jains in Arizona.",
    image: "https://placehold.co/600x400.png",
    imageHint: "american temple",
    region: "other"
  },
  {
    id: "hindu-jain-temple-pennsylvania-usa",
    name: "Hindu Jain Temple",
    location: "Monroeville, Pennsylvania, USA",
    importance: "A temple serving both Hindu and Jain communities in Pennsylvania.",
    image: "https://placehold.co/600x400.png",
    imageHint: "shared temple",
    region: "other"
  },
  {
    id: "st-louis-jain-temple-usa",
    name: "St. Louis Jain Temple",
    location: "St. Louis, USA",
    importance: "A center for the Jain community in St. Louis.",
    image: "https://placehold.co/600x400.png",
    imageHint: "midwest temple",
    region: "other"
  },
  {
    id: "siddhachalam-new-jersey-usa",
    name: "Siddhachalam",
    location: "New Jersey, USA",
    importance: "A major Jain tirtha and ashram in North America.",
    image: "https://placehold.co/600x400.png",
    imageHint: "jain ashram",
    region: "other"
  },
  {
    id: "jain-center-of-america-usa",
    name: "Jain Center of America",
    location: "New York, USA",
    importance: "One of the oldest Jain centers in the United States.",
    image: "https://placehold.co/600x400.png",
    imageHint: "ny temple",
    region: "other"
  },
  {
    id: "jain-center-of-southern-california-usa",
    name: "Jain Center of Southern California",
    location: "Buena Park, CA, USA",
    importance: "A large and active Jain center serving Southern California.",
    image: "https://placehold.co/600x400.png",
    imageHint: "california temple",
    region: "other"
  },
  {
    id: "siddhayatan-usa",
    name: "Siddhayatan",
    location: "Texas, USA",
    importance: "A Jain tirth and spiritual retreat center in Texas.",
    image: "https://placehold.co/600x400.png",
    imageHint: "retreat center",
    region: "other"
  },
  {
    id: "jain-society-of-san-diego-usa",
    name: "Jain Society of San Diego",
    location: "Vista, CA, USA",
    importance: "A community center for Jains in the San Diego area.",
    image: "https://placehold.co/600x400.png",
    imageHint: "san diego temple",
    region: "other"
  },
  {
    id: "jain-center-of-northern-california-usa",
    name: "Jain Center of Northern California",
    location: "Milpitas, CA, USA",
    importance: "Serving the Jain community in the San Francisco Bay Area.",
    image: "https://placehold.co/600x400.png",
    imageHint: "bay area temple",
    region: "other"
  },
  {
    id: "jain-sangh-of-new-england-usa",
    name: "Jain Sangh of New England",
    location: "Burlington, MA, USA",
    importance: "A center for the Jain community in the New England area.",
    image: "https://placehold.co/600x400.png",
    imageHint: "new england temple",
    region: "other"
  },
  {
    id: "jain-society-of-chicago-usa",
    name: "Jain Society of Chicago",
    location: "Illinois, USA",
    importance: "A large Jain center serving the metropolitan Chicago area.",
    image: "https://placehold.co/600x400.png",
    imageHint: "chicago temple",
    region: "other"
  },
  {
    id: "jain-society-of-greater-atlanta-usa",
    name: "Jain Society of Greater Atlanta",
    location: "Atlanta, USA",
    importance: "A community center for Jains in the Atlanta metropolitan area.",
    image: "https://placehold.co/600x400.png",
    imageHint: "atlanta temple",
    region: "other"
  },
  {
    id: "jain-society-of-seattle-usa",
    name: "Jain Society of Seattle",
    location: "Seattle, USA",
    importance: "Serving the Jain community in the Pacific Northwest.",
    image: "https://placehold.co/600x400.png",
    imageHint: "seattle temple",
    region: "other"
  },
  {
    id: "jain-society-of-greater-cleveland-usa",
    name: "Jain Society of Greater Cleveland",
    location: "Cleveland, USA",
    importance: "A spiritual and cultural center for Jains in Cleveland.",
    image: "https://placehold.co/600x400.png",
    imageHint: "cleveland temple",
    region: "other"
  },
  {
    id: "jain-religion-center-of-wisconsin-usa",
    name: "Jain Religion Center of Wisconsin",
    location: "Wisconsin, USA",
    importance: "A center for the Jain community in Wisconsin.",
    image: "https://placehold.co/600x400.png",
    imageHint: "wisconsin temple",
    region: "other"
  },
  {
    id: "jain-temple-of-greater-detroit-usa",
    name: "Jain Temple of Greater Detroit",
    location: "Farmington Hills, Michigan, USA",
    importance: "Serving the Jain community in the Detroit metropolitan area.",
    image: "https://placehold.co/600x400.png",
    imageHint: "detroit temple",
    region: "other"
  },
  {
    id: "franklin-township-derasar-new-jersey-usa",
    name: "Franklin Township Derasar",
    location: "New Jersey, USA",
    importance: "A prominent derasar for the Jain community in New Jersey.",
    image: "https://placehold.co/600x400.png",
    imageHint: "new jersey derasar",
    region: "other"
  },
  {
    id: "jain-society-of-metropolitan-chicago-usa",
    name: "Jain Society of Metropolitan Chicago",
    location: "Bartlett, Illinois, USA",
    importance: "A large, well-established Jain center in the Chicago suburbs.",
    image: "https://placehold.co/600x400.png",
    imageHint: "chicago suburbs temple",
    region: "other"
  },
  {
    id: "jain-temple-of-pennsauken-township-new-jersey-usa",
    name: "Jain Temple of Pennsauken Township",
    location: "Cherry Hill, New Jersey, USA",
    importance: "Serving the Jain community in the Cherry Hill area of New Jersey.",
    image: "https://placehold.co/600x400.png",
    imageHint: "cherry hill temple",
    region: "other"
  }
];


export const getTemplesByRegion = (regionId: string): Temple[] => {
    return allTemples.filter(temple => temple.region === regionId);
};

export const getTempleById = (templeId: string): Temple | undefined => {
  return allTemples.find(temple => temple.id === templeId);
}
