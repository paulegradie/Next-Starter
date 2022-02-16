import fs from 'fs';
import path from 'path';

const galleryDirectory = path.join(process.cwd(), 'public', 'gallery');

export function getGalleryPhotos() {
    const files = fs.readdirSync(galleryDirectory);

    const galleryPhotoList = files.map((file: string) => {
        return {
            original: `/gallery/${file}`,
            thumbnail: `/gallery/${file}`,
            thumbnailWidth: "25%",

        };
    });

    return galleryPhotoList;
}
