
import { Footprints, Mountain, Landmark, LucideIcon } from "lucide-react";

export interface TourStop {
  id: string;
  tonkNumber: number;
  title: string;
  tirthankara: string;
  icon: LucideIcon;
  audio: {
    duration: string;
    url_en: string;
    url_hi: string;
    url_gu: string;
  };
  content: {
    description: string;
    history: string;
    mantra: string;
  };
}

export const tourData: TourStop[] = [
  {
    id: "gautam-swami-tonk",
    tonkNumber: 1,
    title: "Gautam Swami Tonk",
    tirthankara: "Gautam Swami",
    icon: Footprints,
    audio: {
      duration: "3:15 min",
      url_en: "/audio/en/gautam_swami.mp3",
      url_hi: "/audio/hi/gautam_swami.mp3",
      url_gu: "/audio/gu/gautam_swami.mp3",
    },
    content: {
      description: "This is the first sacred Tonk on the pilgrimage route. It marks the beginning of the holy ascent and is dedicated to Gautam Swami, the chief disciple (Ganadhara) of Lord Mahavira. Pilgrims offer their first prayers here, seeking blessings for a successful journey.",
      history: "Gautam Swami was a Brahmin scholar who, after realizing the depth of Mahavira's teachings, became his most devoted follower. This Tonk symbolizes the power of wisdom and devotion in overcoming ego and embracing the path of truth.",
      mantra: "ॐ ह्रीं श्रीं गौतमस्वामिने नमः।"
    }
  },
  {
    id: "kunthunath-tonk",
    tonkNumber: 2,
    title: "Kunthunath Tonk",
    tirthankara: "Lord Kunthunath",
    icon: Landmark,
    audio: {
      duration: "4:30 min",
      url_en: "/audio/en/kunthunath.mp3",
      url_hi: "/audio/hi/kunthunath.mp3",
      url_gu: "/audio/gu/kunthunath.mp3",
    },
    content: {
      description: "The second Tonk is dedicated to the 17th Tirthankara, Lord Kunthunath. He was also a Chakravartin (world emperor) who renounced his kingdom to pursue liberation. This site represents the victory of spiritual discipline over worldly power.",
      history: "Lord Kunthunath's reign was marked by peace and prosperity. His renunciation teaches that true and lasting peace can only be found by conquering the inner self, not by ruling external territories. He attained moksha here after intense penance.",
      mantra: "ॐ ह्रीं श्रीं कुन्थुनाथाय नमः।"
    }
  },
  {
    id: "parshvanatha-tonk",
    tonkNumber: 20,
    title: "Parshvanatha Tonk",
    tirthankara: "Lord Parshvanatha",
    icon: Mountain,
    audio: {
      duration: "5:00 min",
      url_en: "/audio/en/parshvanatha.mp3",
      url_hi: "/audio/hi/parshvanatha.mp3",
      url_gu: "/audio/gu/parshvanatha.mp3",
    },
    content: {
      description: "This is one of the highest and most significant Tonks on the hill, dedicated to the 23rd Tirthankara, Lord Parshvanatha. The entire hill range is named after him. Pilgrims feel a profound sense of peace and spiritual energy at this summit.",
      history: "Lord Parshvanatha preached the four-fold restraint (Ahimsa, Satya, Asteya, Aparigraha). His most famous story involves protecting two serpents from a fire, who were later reborn as the serpent deities Dharanendra and Padmavati, his protectors. He achieved moksha at this very peak.",
      mantra: "ॐ ह्रीं श्रीं पार्श्वनाथाय नमः।"
    }
  },
  {
    id: "rishabhanatha-tonk",
    tonkNumber: 21,
    title: "Rishabhanatha Tonk",
    tirthankara: "Lord Rishabhanatha (Adinath)",
    icon: Landmark,
    audio: {
      duration: "4:45 min",
      url_en: "/audio/en/rishabhanatha.mp3",
      url_hi: "/audio/hi/rishabhanatha.mp3",
      url_gu: "/audio/gu/rishabhanatha.mp3",
    },
    content: {
      description: "This Tonk honors the first Tirthankara, Lord Rishabhanatha, also known as Adinath. Although his primary place of moksha is considered to be Mount Ashtapad in the Himalayas, his presence is venerated on Shikharji, the eternal 'Tirthraj' (King of Pilgrimages).",
      history: "Lord Rishabhanatha was the founder of the current era's civilization, teaching mankind agriculture, arts, and governance. His path of renunciation laid the foundation for the entire Jain tradition. This Tonk reminds pilgrims of the ancient roots of their faith.",
      mantra: "ॐ ह्रीं श्रीं ऋषभनाथाय नमः।"
    }
  }
];
