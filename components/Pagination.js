import { ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons';
import { Badge, Button, HStack, Tooltip, useMediaQuery, VStack } from '@chakra-ui/react';

const Pagination = (props) => {

    const [isLargerThan525] = useMediaQuery('(min-width : 525px)');

    const nextPageClick = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
        props.pageChange(props.currentPage + 1);
    };

    const prevPageClick = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
        props.pageChange(props.currentPage - 1);
    };

    return (
        <VStack>
            <HStack
                p={5}
                mx={8}
                gap='2rem'
                flexWrap='wrap'
            >
                <Tooltip label='Previous Page' hasArrow placement='bottom'>
                    <Button
                        aria-label='Prev Page'
                        size={isLargerThan525 ? 'md' : 'sm'}
                        leftIcon={<ArrowLeftIcon />}
                        variant='outline'
                        isDisabled={props.currentPage <= 1}
                        onClick={prevPageClick}>
                        {'Prev'}
                    </Button>
                </Tooltip>
                <Tooltip label='Next Page' hasArrow placement='bottom'>
                    <Button
                        aria-label='Next Page'
                        size={isLargerThan525 ? 'md' : 'sm'}
                        rightIcon={<ArrowRightIcon />}
                        variant='outline'
                        isDisabled={props.currentPage >= props.noOfPages}
                        onClick={nextPageClick}>
                        {'Next'}
                    </Button>
                </Tooltip>
            </HStack>
            <Badge
                colorScheme='blue'
                py={2}
                px={4}
                variant='outline'
                color='white'
                borderRadius='full'>
                {`Page ${props.currentPage} of ${props.noOfPages}`}
            </Badge>
        </VStack>
    );

}

export default Pagination;