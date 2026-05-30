export default function manifest() {
    return {
        name: 'The Neko Workshop',
        short_name: 'The Neko Workshop Web app',
        description: 'The Neko Workshop is a part of TheFlightSims Labs to validate software before publishing globally',
        start_url: '/',
        display: 'standalone',
        background_color: 'white',
        theme_color: 'white',
        icons: [
            {
                src: '/favicon.ico',
                sizes: '256x256',
                type: 'image/x-icon',
            }
        ],
        categories: ["productivity", "utilities", "social", "tech"],
        screenshots: [
            {
                "src": "screenshots/main.jpg",
                "sizes": "1280x720",
                "type": "image/jpg",
                "form_factor": "wide",
                "label": "The Neko Workshop home page"
            }
        ]
    }
}