import { GoogleReview } from 'types';

const GOOGLE_PLACES_API_REVIEWS = (apiKey: string, placeId: string) => {
    return `https://maps.googleapis.com/maps/api/place/details/json?key=${apiKey}&place_id=${placeId}`;
};

export async function getReviews() {
    const apikey = process.env.NEXT_PUBLIC_GOOGLE_PLACE_API_KEY as string;
    const COMPANYGOOGLECODE = process.env.NEXT_PUBLIC_COMPANY_GOOGLE_CODE as string;
    const response = await fetch(GOOGLE_PLACES_API_REVIEWS(apikey, COMPANYGOOGLECODE));
    const data = await response.json();
    const reviews = data.result.reviews as GoogleReview[];

    return reviews;
}
