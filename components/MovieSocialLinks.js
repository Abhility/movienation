import { HStack, Link, Text, Tooltip } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook, FaTwitter, FaImdb } from "react-icons/fa";
import { SocialLinks } from "../helpers/common";
import Circle from "./loaders/skeletons/Circle";


const MovieSocialLinks = ({ movieId }) => {
    const [socialLinks, setSocialLinks] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchSocialLinks = async () => {
        const response = await fetch(`http://localhost:5000/movie-info/movie/${movieId}/socialLinks`);
        const data = await response.json();
        setSocialLinks(data);
        setLoading(false);
    };

    useEffect(() => {
        fetchSocialLinks();
    }, [movieId]);

    const getDataForSocialLink = (socialLink) => {
        const { name, linkId } = socialLink;

        switch (name) {
            case SocialLinks.FACEBOOK.name:
                return {
                    icon: <FaFacebook size={25} style={{ fill: "#1778F2" }} />,
                    link: `${SocialLinks.FACEBOOK.link}/${linkId}`
                }
            case SocialLinks.INSTAGRAM.name:
                return {
                    icon: <AiFillInstagram size={25} style={{ fill: "#DD2A7B" }} />,
                    link: `${SocialLinks.INSTAGRAM.link}/${linkId}`
                }
            case SocialLinks.TWITTER.name:
                return {
                    icon: <FaTwitter size={25} style={{ fill: "#1DA1F2" }} />,
                    link: `${SocialLinks.TWITTER.link}/${linkId}`
                }
            case SocialLinks.IMDB.name:
                return {
                    icon: <FaImdb size={25} style={{ fill: "#DBA506" }} />,
                    link: `${SocialLinks.IMDB.link}/${linkId}`
                }
        }

    };

    const SocialLinksContainer = () => (
        socialLinks ?
            <HStack gap={3} flexWrap="wrap" mx='0 !important'>
                {
                    socialLinks.map(socialLink => {
                        const { icon, link } = getDataForSocialLink(socialLink);
                        return (
                            <Tooltip label={socialLink.name} key={socialLink.name} hasArrow placement='bottom'>
                                <Link href={link} isExternal>
                                    {icon}
                                </Link>
                            </Tooltip>
                        );
                    })
                }
            </HStack>
            : null
    );

    return (
        loading ? <Circle count={4} /> : <SocialLinksContainer/>
    );
}

export default MovieSocialLinks;