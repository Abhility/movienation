import { Tooltip, Button } from "@chakra-ui/react";
import { AiOutlinePlus } from "react-icons/ai";

const WatchListButton = ({ movieId }) => {
    return (
        <Tooltip label='Add this movie to your watch list!' hasArrow placement='bottom'>
            <Button leftIcon={<AiOutlinePlus />}
                title='Add to watchlist' >
                Add to List
            </Button>
        </Tooltip>
    );
}

export default WatchListButton;