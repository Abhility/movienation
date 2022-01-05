import { Box, HStack, Image, Text, VStack } from "@chakra-ui/react"
import Lottie from "lottie-web";
import { useEffect, useRef } from "react";
import { animations, imageUrls } from "../../constants/global";

const DeveloperSection = () => {

    const developerAnimation = useRef();

    useEffect(() => {
        Lottie.loadAnimation({
            container: developerAnimation.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: animations.DEVELOPER
        });
    }, []);

    return (
        <VStack width='100%' align='center'>
            <Text fontSize='4xl' fontWeight='700'>Developed By</Text>
            <HStack justify='space-evenly'width='100%'>
                <div className='developer-animation' ref={developerAnimation}></div>
                <VStack>
                    <Image
                        src={imageUrls.OTHER.abhility}
                        borderRadius='xl'
                        fit='fill'
                        alt='abhility' />
                    <Text fontSize='3xl' fontWeight='bold' fontStyle='italic'> Abhishek</Text>
                </VStack>
            </HStack>
        </VStack>
    )
}

export default DeveloperSection;
