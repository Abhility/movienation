import { VStack } from "@chakra-ui/react";
import Explore from "../../components/Explore";
import SearchBar from "../../components/SearchBar";

const MoviesExplorePage = () => {

    return (
        <VStack gap={3} mx={5} my={5}> 
        {/* <SearchBar/> */}
        <Explore/>
       </VStack>
    );

};

export default MoviesExplorePage;