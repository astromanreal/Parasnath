
export type ItineraryDuration = 'half-day' | '1-day' | '2-day' | '3-day';

const sampleItineraries: Record<ItineraryDuration, string> = {
    '1-day': `
### Sample 1-Day Itinerary: The Determined Pilgrim

**This is a sample plan. For a personalized journey, please fill out the form with more details.**

**Morning (The Ascent)**
*   **3:00 AM:** Begin your journey from Madhuban. The cool, quiet morning is ideal for the ascent.
*   **4:30 AM:** Reach Gautam Swami Tonk. This is the first major stop. Offer your prayers and spend about 15 minutes here.
*   **7:00 AM:** Arrive at Chandraprabhu Tonk. The path here can be steep. This is a good place for a short rest.
*   **10:00 AM:** Reach Jal Mandir. A serene spot, perfect for a 30-minute break. Replenish your water and have a light snack.

**Afternoon (The Summit & Descent)**
*   **12:30 PM:** Arrive at the Parshvanath Tonk, the highest point. Absorb the spiritual energy and offer your main prayers.
*   **1:30 PM:** Begin your descent. Be cautious as the path downwards can be tough on the knees.
*   **4:00 PM:** Take another break at Jal Mandir.
*   **6:30 PM:** Aim to return to Madhuban before it gets dark.

***Warning:*** *This is a strenuous trek. If you have any health concerns, consider using Doli support for part or all of the journey.*
    `,
    '2-day': `
### Sample 2-Day Itinerary: The Reflective Journey

**This is a sample plan. For a personalized journey, please fill out the form with more details.**

**Day 1: Ascent & Spiritual Immersion**
*   **5:00 AM:** Start your trek from Madhuban. A slightly later start for a more relaxed pace.
*   **7:00 AM:** Reach Gautam Swami Tonk. Spend 30 minutes in prayer and meditation.
*   **11:00 AM:** Proceed towards Jal Mandir, visiting several Tonks along the way. Take your time at each one.
*   **2:00 PM:** Arrive at a designated Dharamshala near the Jal Mandir area for your overnight stay.
*   **Evening:** Participate in evening prayers (aarti) and rest.

**Day 2: The Summit & Peaceful Descent**
*   **5:00 AM:** Start the trek towards the Parshvanath Tonk.
*   **7:30 AM:** Reach the summit. Spend ample time in meditation and prayer.
*   **10:00 AM:** Begin your descent, visiting any remaining Tonks on the way down.
*   **1:00 PM:** Stop for a lunch break at a suitable spot.
*   **5:00 PM:** Return to Madhuban, feeling spiritually rejuvenated.

***Recommendation:*** *A 2-day plan is excellent for those who wish to spend more time in meditation and avoid rushing through the pilgrimage.*
    `,
    'half-day': `
### Sample Half-Day Itinerary: Express Darshan

**This is a sample plan. For a personalized journey, please fill out the form with more details.**

**This plan relies on using Bike Support for the ascent and descent.**

*   **6:00 AM:** Take a bike from Madhuban to the designated drop-off point on the mountain.
*   **7:30 AM:** From the drop-off, begin your walk towards the main Tonks. This will significantly reduce your walking time.
*   **8:30 AM:** Visit Gautam Swami Tonk and Chandraprabhu Tonk.
*   **10:00 AM:** Reach the Parshvanath Tonk for your main darshan.
*   **11:00 AM:** Begin your walk back to the bike pick-up point.
*   **12:30 PM:** Take the bike back down to Madhuban.

***Warning:*** *This express plan means you will miss many of the smaller Tonks. It is designed for those with extreme time constraints or physical limitations who still wish to have the darshan of the main summit.*
    `,
    '3-day': `
### Sample 3-Day Itinerary: The Deep Dive

**This is a sample plan. For a personalized journey, please fill out the form with more details.**

**Day 1: Lower Hill Exploration**
*   **6:00 AM:** Start from Madhuban and focus on the cluster of Tonks on the lower part of the eastern route.
*   **Objective:** Spend quality time at each of the first 10-12 Tonks. Engage in chanting and reading scriptures.
*   **Afternoon:** Have a packed lunch and spend time in meditation at a quiet spot.
*   **4:00 PM:** Return to your Dharamshala in Madhuban for rest and evening prayers.

**Day 2: The Summit Journey**
*   **4:00 AM:** Take a Doli or bike part-way up the mountain to save energy.
*   **Objective:** Focus on reaching the upper Tonks, including Jal Mandir and the Parshvanath Tonk.
*   **Overnight:** Stay in a Dharamshala on the mountain to experience the serene night atmosphere.
*   **Evening:** Participate in special prayers and satsang if available.

**Day 3: Final Darshan & Descent**
*   **5:00 AM:** Visit any remaining Tonks on the western side of the summit.
*   **8:00 AM:** Begin your final, relaxed descent back to Madhuban.
*   **Afternoon:** Arrive back in Madhuban for rest and reflection on your profound journey.

***Recommendation:*** *This plan is ideal for those focused on deep spiritual practice, seva, and historical exploration, allowing ample time at each sacred spot.*
    `
};

/**
 * Returns a sample itinerary based on the selected duration.
 * If the requested duration doesn't have a specific sample, it defaults to the 1-day plan.
 * @param duration The selected duration for the pilgrimage.
 * @returns A markdown string of the sample itinerary.
 */
export function getSampleItinerary(duration: ItineraryDuration): string {
    return sampleItineraries[duration] || sampleItineraries['1-day'];
}
