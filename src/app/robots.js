import { headers } from "next/headers"

export default async function robots() {
    const headerList = await headers();
    const domain = headerList.get('host');
    const protocol = headerList.get('x-forwarded-proto') || 'http';

    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: '/status',
        },
        sitemap: `${protocol}://${domain}/sitemap.xml`,
    }
}