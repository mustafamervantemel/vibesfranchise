
import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title: string;
    description: string;
    canonical?: string;
    keywords?: string;
    image?: string;
}

export default function SEO({
    title,
    description,
    canonical,
    keywords = "sandviç, sandwich, gourmet sandviç, el yapımı sandviç, ekşi mayalı ekmek, Kadıköy sandviç, Çekmeköy sandviç, İstanbul sandviç, vibes sandwich",
    image = "https://vibessandwich.com/hero_sandwich_dynamic.png"
}: SEOProps) {
    const siteUrl = 'https://vibessandwich.com';
    const fullCanonical = canonical ? `${siteUrl}${canonical}` : siteUrl;
    const fullTitle = `${title} | Vibes Sandwich`;

    return (
        <Helmet>
            {/* Primary Meta Tags */}
            <title>{fullTitle}</title>
            <meta name="title" content={fullTitle} />
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <link rel="canonical" href={fullCanonical} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={fullCanonical} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={fullCanonical} />
            <meta property="twitter:title" content={fullTitle} />
            <meta property="twitter:description" content={description} />
            <meta property="twitter:image" content={image} />
        </Helmet>
    );
}
