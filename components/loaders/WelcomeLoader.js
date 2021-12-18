import Lottie from "lottie-web";
import { useRef, useState, useEffect } from "react";

const WelcomeLoader = (props) => {
    const welcomeLoader = useRef();
    const welcomeLoaderText = useRef();
    const [showLoader, setShowLoader] = useState(true);

    useEffect(() => {
        Lottie.loadAnimation({
            container: welcomeLoader.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: 'https://assets3.lottiefiles.com/private_files/lf30_bb9bkg1h.json'
        });

        Lottie.loadAnimation({
            container: welcomeLoaderText.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: 'https://assets7.lottiefiles.com/packages/lf20_AUWyVL.json'
        });

        const welcomeTimer = setTimeout(() => setShowLoader(false), 5000);
        return () => {
            clearTimeout(welcomeTimer);
        }
    }, []);

    return (
        showLoader &&
        <div className="welcome-loader-container">
            <div className="welcome-loader" ref={welcomeLoader}></div>
            <h3 className="welcome-loader-text" ref={welcomeLoaderText}></h3>
        </div>
    );

}

export default WelcomeLoader;