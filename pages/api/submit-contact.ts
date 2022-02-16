import { NextApiRequest, NextApiResponse } from 'next';

// You would make a request in a function like getStaticProps to this api, and this api would do some shiz.

const emailServerUrl = '';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const data = JSON.parse(req.body);

    await fetch(emailServerUrl, {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify({ formData: data }),
    });
    res.status(200).json({ success: true });
}
