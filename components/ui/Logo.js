import { HStack, Icon, Text } from "@chakra-ui/react";
import Lottie from "lottie-web";
import { useEffect, useRef } from "react";

const Logo = () => {
    let logo = useRef();

    useEffect(() => {
        Lottie.loadAnimation({
            container: logo.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: 'https://assets9.lottiefiles.com/packages/lf20_tieji6qu.json'
        });
    }, []);

    return (
        <HStack align='center'>
            <div className='logo' ref={logo} />
            <Text fontSize='xl'>Movienation</Text>
        </HStack>
    )
};

export default Logo;