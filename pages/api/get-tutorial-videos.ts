import { VideoMap } from '@components/pages/Tutorial/TutorialPage';
import { NextApiRequest, NextApiResponse } from 'next';
import { PlaylistItemsResource } from 'pages/tutorial';

// You would make a requrest in a function like getStaticProps to this api, and this api would do some shiz.

const emailServerUrl = '';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        const videoMap = await GetVideoMap();
        res.status(200).json(videoMap);
    }
}

const GetVideoMap = async (): Promise<VideoMap[]> => {
    const youtube_api_key = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY as string;
    if (!youtube_api_key === undefined) return [];

    const playlistId = 'PL8zxShANCblyyabbAD7EQS-isVCI3EaF_';
    const playlistItemsUrl = (apikey: string, playlistId: string) =>
        `https://www.googleapis.com/youtube/v3/playlistItems?key=${apikey}&maxResults=50&part=contentDetails,snippet&playlistId=${playlistId}`;
    const playlistItemsResponse = await fetch(playlistItemsUrl(youtube_api_key, playlistId));
    const data = await playlistItemsResponse.json();

    const videoMetas = data.items
        .map((x: PlaylistItemsResource) => {
            return {
                videoId: x.contentDetails.videoId,
                title: x.snippet.title,
                description: x.snippet.description,
            };
        })
        .filter((x: VideoMap) => x.title !== 'Private video');
    return videoMetas as VideoMap[];
};
