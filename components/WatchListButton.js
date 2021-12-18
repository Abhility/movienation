import { Tooltip, Button } from "@chakra-ui/react";
import { BsBookmarksFill } from "react-icons/bs";
import { BsBookmarks } from "react-icons/bs";

const WatchListButton = ({ movieId }) => {
    return (
        <Tooltip label='Add this movie to your watch list!' hasArrow placement='bottom'>
            <Button border='1px' borderColor='#fcba03' leftIcon={<BsBookmarks style={{ fill: "#fcba03" }} />}>Add to List</Button>
        </Tooltip>
    );
}

export default WatchListButton;