import { Tooltip, Button, useToast } from "@chakra-ui/react";
import { BsBookmarksFill } from "react-icons/bs";
import { BsBookmarks } from "react-icons/bs";

const WatchListButton = ({ movieId }) => {
    const toast = useToast();

    const addMovieToWatchList = () => {
        toast.closeAll();
        toast({
            title: 'Movie Added!',
            position: 'top-right',
            variant: 'solid',
            description: 'This movie is added to your watch list.',
            status: 'success',
            duration: 3000,
            isClosable: true,
        });
    };
    return (
        <Tooltip label='Add this movie to your watch list!' hasArrow placement='bottom'>
            <Button
                border='1px'
                borderColor='#fcba03'
                leftIcon={<BsBookmarks style={{ fill: "#fcba03" }} />}
                onClick={addMovieToWatchList}>
                Add to List
            </Button>
        </Tooltip>
    );
}

export default WatchListButton;