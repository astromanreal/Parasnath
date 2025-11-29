
'use server';

import { generatePilgrimageItinerary, type PilgrimageItineraryInput, type PilgrimageItineraryOutput } from '@/ai/flows/pilgrims-itinerary';
import { getSampleItinerary, type ItineraryDuration } from './sample-itineraries';

export type { PilgrimageItineraryInput, PilgrimageItineraryOutput };

export async function createItineraryAction(input: PilgrimageItineraryInput): Promise<{ success: boolean; data?: PilgrimageItineraryOutput, error?: string }> {
  try {
    // Call the Genkit AI flow
    const output = await generatePilgrimageItinerary(input);
    
    // The AI can sometimes return an empty string if it fails to generate a plan.
    // If it fails, we fall back to a sample itinerary.
    if (!output || !output.itinerary.trim()) {
      console.warn("AI itinerary generation failed or returned empty. Falling back to sample itinerary.");
      const sampleItinerary = getSampleItinerary(input.duration as ItineraryDuration);
      return { success: true, data: { itinerary: sampleItinerary } };
    }

    return { success: true, data: output };
  } catch (error) {
    console.error("AI action failed, falling back to sample itinerary:", error);
    // If the AI service call fails entirely, provide a sample itinerary as a fallback.
    try {
      const sampleItinerary = getSampleItinerary(input.duration as ItineraryDuration);
      return { success: true, data: { itinerary: sampleItinerary } };
    } catch (fallbackError) {
       const errorMessage = fallbackError instanceof Error ? fallbackError.message : "An unknown error occurred during fallback.";
       return { success: false, error: `Failed to generate itinerary. Please try again. Error: ${errorMessage}` };
    }
  }
}
