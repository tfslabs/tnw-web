import { headers } from "next/headers"

export default async function sitemap() {
    const headerList = await headers();
    const domain = headerList.get('host');

    return [
        {
            url: domain,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1
        }
    ]
}