import { ArrowLeftIcon, ArrowRightIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { Button, HStack, IconButton, Tooltip, useMediaQuery } from '@chakra-ui/react';

const Pagination = ({ noOfPages, currentPage }) => {

    const [isLargerThan525] = useMediaQuery('(min-width : 525px)');

    return (
        <HStack
            p={5}
            mx={8}
            gap='2rem'
            flexWrap='wrap'
        >
            <Tooltip label='Previous Page' hasArrow placement='bottom'>
                <Button
                    aria-label='Prev Page'
                    size={isLargerThan525 ? 'lg' : 'sm'}
                    leftIcon={<ArrowLeftIcon />}>
                    {!isLargerThan525 && 'Prev'}
                </Button>
            </Tooltip>
            {
                isLargerThan525 && Array(noOfPages)
                    .fill(0)
                    .map((_, i) => <Button key={i}>{i+1}</Button>)
            }
            <Tooltip label='Next Page' hasArrow placement='bottom'>
                <Button
                    aria-label='Next Page'
                    size={isLargerThan525 ? 'lg' : 'sm'}
                    rightIcon={<ArrowRightIcon />} >
                    {!isLargerThan525 && 'Next'}
                </Button>
            </Tooltip>
        </HStack>
    );

}

export default Pagination;