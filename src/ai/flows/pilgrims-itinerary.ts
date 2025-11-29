
'use server';
/**
 * @fileOverview Generates a personalized pilgrimage itinerary for Shikharji based on user inputs.
 *
 * - generatePilgrimageItinerary - A function that generates the pilgrimage itinerary.
 * - PilgrimageItineraryInput - The input type for the generatePilgrimageItinerary function.
 * - PilgrimageItineraryOutput - The return type for the generatePilgrimageItinerary function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PilgrimageItineraryInputSchema = z.object({
  trekSupport: z.string().describe('The type of trekking support the pilgrim will use (e.g., Walking, Doli/Palanquin, Bike Support).'),
  duration: z.string().describe('The available duration for the pilgrimage (e.g., Half Day, 1-Day, 2-Day).'),
  spiritualFocus: z.string().describe("The pilgrim's primary spiritual goals and interests (e.g., darshan of all Tonks, meditation, seva, history)."),
  physicalCapabilities: z
    .string()
    .describe(
      'Describe the pilgrims physical capabilities (e.g., average fitness, knee problems, etc.)'
    ),
  interests: z
    .string()
    .describe(
      'Describe any other interests related to the pilgrimage (e.g., specific temples, history, photography).'
    ),
  timeConstraints: z
    .string()
    .describe(
      'Describe the pilgrims time constraints and other notes (e.g., must return by 6 PM, traveling with elderly parents).'
    ),
});
export type PilgrimageItineraryInput = z.infer<
  typeof PilgrimageItineraryInputSchema
>;

const PilgrimageItineraryOutputSchema = z.object({
  itinerary: z
    .string()
    .describe(
      'A detailed, day-by-day pilgrimage itinerary in Markdown format. It should be well-structured with headings, bullet points, and bold text for emphasis. Include timings, locations, activities, estimated durations, recommendations (like what to see or do), and specific warnings (like potential difficulties or what to avoid). The plan must be practical and account for all user inputs.'
    ),
});
export type PilgrimageItineraryOutput = z.infer<
  typeof PilgrimageItineraryOutputSchema
>;

export async function generatePilgrimageItinerary(
  input: PilgrimageItineraryInput
): Promise<PilgrimageItineraryOutput> {
  return generatePilgrimageItineraryFlow(input);
}

const prompt = ai.definePrompt({
  name: 'pilgrimageItineraryPrompt',
  input: {schema: PilgrimageItineraryInputSchema},
  output: {schema: PilgrimageItineraryOutputSchema},
  prompt: `You are an expert pilgrimage planner for Shikharji, the holiest pilgrimage site for Jains. Your task is to generate a personalized, practical, and spiritually enriching itinerary in MARKDOWN FORMAT based on the user's specific inputs.

**User's Pilgrimage Details:**
*   **Trekking Support:** {{{trekSupport}}}
*   **Available Duration:** {{{duration}}}
*   **Spiritual Focus & Interests:** {{{spiritualFocus}}} and {{{interests}}}
*   **Physical Capabilities:** {{{physicalCapabilities}}}
*   **Other Constraints/Notes:** {{{timeConstraints}}}

**Your Task:**
Generate a detailed, well-structured itinerary in **Markdown format**. The itinerary must be:
1.  **Practical:** Timings must be realistic. Consider the chosen trek support. A 'Doli' plan will be different from a 'Walking' plan.
2.  **Personalized:** The plan must directly address the user's spiritual focus, interests, and physical limitations. If they mention knee problems, include suggestions for rest or using the Doli. If they mention meditation, allocate specific time for it at a serene Tonk.
3.  **Well-Structured:** Use Markdown headings for days or sections (e.g., '### Day 1: The Ascent'). Use bullet points for steps in the plan. Use **bold text** for key locations or actions.
4.  **Comprehensive:** Include:
    *   **Start Time:** A recommended early start time (e.g., 3:00 AM).
    *   **Route:** Mention which route is best (e.g., Madhuban path).
    *   **Sequence:** A logical sequence of Tonks and landmarks to visit.
    *   **Timings & Durations:** Estimated time for each leg of the journey and duration of stops.
    *   **Recommendations:** What to do at key places (e.g., "At Gautam Swami Tonk, offer your first prayer").
    *   **Warnings:** Practical advice (e.g., "The path to Chandraprabhu Tonk is steep, proceed slowly" or "Food and water are scarce after Jal Mandir, carry supplies.").

**Example Structure (for a 1-day plan):**

### Your Personalized 1-Day Shikharji Journey

**Morning (The Ascent)**
*   **3:00 AM:** Start your journey from Madhuban.
*   **4:30 AM:** Reach Gautam Swami Tonk. Spend 15 minutes in prayer.
...

**Afternoon (The Summit & Descent)**
*   **12:00 PM:** Reach Jal Mandir. *Recommendation: This is a great place for a 30-minute rest and lunch break.*
*   **1:00 PM:** Begin your descent. *Warning: The descent can be tough on the knees. If you have a Doli, use it for this part.*

Now, create the personalized itinerary based on the user's inputs provided above.
`,
});

const generatePilgrimageItineraryFlow = ai.defineFlow(
  {
    name: 'generatePilgrimageItineraryFlow',
    inputSchema: PilgrimageItineraryInputSchema,
    outputSchema: PilgrimageItineraryOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
