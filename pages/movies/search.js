import { VStack } from "@chakra-ui/react";
import Search from "../../components/Search";

const SearchPage = () => {
    return (
        <VStack gap={3} mx={5} my={5}>
           <Search/>
        </VStack>
    )
};

export default SearchPage;