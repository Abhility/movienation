export const userLocation = async () => {
    try {
        const response = await fetch('https://ipinfo.io/json');
        const data = await response.json();
        return data;
    } catch (err) {
        console.log(err);
        return null;
    }
}

export const SocialLinks = {
    FACEBOOK: {
        name: 'facebook',
        link: 'https://www.facebook.com'
    },
    INSTAGRAM: {
        name: 'instagram',
        link: 'https://www.instagram.com'
    },
    TWITTER: {
        name: 'twitter',
        link: 'https://twitter.com'
    },
    IMDB: {
        name: 'imdb',
        link: 'https://www.imdb.com/title'
    }
}