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

    const removeFromWatchList = () => {
        toast.closeAll();
        toast({
            title: 'Movie Removed!',
            position: 'top-right',
            variant: 'solid',
            description: 'This movie is removed from your watch list.',
            status: 'error',
            duration: 3000,
            isClosable: true,
        });
    };

    const AddToWatchListButton = () => {
        return (
            <Tooltip label='Add this movie to your watch list!' hasArrow placement='bottom'>
                <Button
                    border='1px'
                    borderColor='#fcba03'
                    variant='outline'
                    leftIcon={<BsBookmarks style={{ fill: "#fcba03" }} />}
                    onClick={addMovieToWatchList}>
                    Watchlist
                </Button>
            </Tooltip>
        );
    };

    const RemoveFromWatchListButton = () => {
        return (
            <Tooltip label='Remove this movie from your watch list!' hasArrow placement='bottom'>
                <Button
                    border='1px'
                    borderColor='#fcba03'
                    leftIcon={<BsBookmarksFill style={{ fill: "#fcba03" }} />}
                    onClick={removeFromWatchList}>
                    Watchlisted
                </Button>
            </Tooltip>
        );
    };

    return (
       <AddToWatchListButton/>
    );
}

export default WatchListButton;