/**
 * Componente SEO reutilizable.
 * React 19 sube automáticamente <title>, <meta> y <link> al <head>,
 * así cada página puede tener su propio título y descripción únicos.
 */

const SITE_URL = 'https://www.industriasodinox.com';
const DEFAULT_IMAGE =
    'https://res.cloudinary.com/dygrpoblt/image/upload/v1772325594/WhatsApp_Image_2026-02-28_at_18.39.45_hzwbgl.jpg';

const Seo = ({ title, description, path = '/', image = DEFAULT_IMAGE }) => {
    const url = `${SITE_URL}${path}`;

    return (
        <>
            <title>{title}</title>
            <meta name="description" content={description} />
            <link rel="canonical" href={url} />

            {/* Open Graph */}
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:type" content="website" />
            <meta property="og:url" content={url} />
            <meta property="og:site_name" content="Industrias Odinox" />
            <meta property="og:locale" content="es_SV" />
            <meta property="og:image" content={image} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />
        </>
    );
};

export default Seo;
