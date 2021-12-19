import { Button, VStack, Text } from "@chakra-ui/react";
import Lottie from "lottie-web";
import Link from "next/link";
import { useEffect, useRef } from 'react';

const PageNotFound = () => {
    const notFoundAnimation = useRef();
    const notFoundText = useRef();

    useEffect(() => {
        Lottie.loadAnimation({
            container: notFoundAnimation.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: 'https://assets8.lottiefiles.com/packages/lf20_uvgjmjf2.json'
        });
        Lottie.loadAnimation({
            container: notFoundText.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: 'https://assets4.lottiefiles.com/packages/lf20_GrGBqA.json'
        });

    }, []);

    return (
        <VStack>
            <div ref={notFoundAnimation} />
            <div className="not-found-text-animation" ref={notFoundText} />
            <Text fontSize='2xl'>We&apos;re sorry, the page you requested is not found. Please go back to homepage</Text>
            <Link href='/' passHref><Button>Go Home</Button></Link>
        </VStack>
    )
}

export default PageNotFound;