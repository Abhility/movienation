import { ArrowLeftIcon, ArrowRightIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { Button, HStack, IconButton, Tooltip, useMediaQuery } from '@chakra-ui/react';

const Pagination = (props) => {

    const [isLargerThan525] = useMediaQuery('(min-width : 525px)');
    const offset = (Math.floor((props.currentPage - 1) / 10) * 10) + 1;

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
                    leftIcon={<ArrowLeftIcon />}
                    variant='outline'
                    isDisabled={props.currentPage <= 10}
                    onClick={props.prevPageClick}>
                    {!isLargerThan525 && 'Prev'}
                </Button>
            </Tooltip>
            {
                isLargerThan525 && Array(props.noOfPages > 10 ? 10 : props.noOfPages)
                    .fill()
                    .map((_, i) => <Button key={i}
                        variant={props.currentPage != i + offset ? 'outline' : 'solid'}
                        onClick={props.pageClick.bind(null, i + offset)}>{i + offset}
                    </Button>)
            }
            <Tooltip label='Next Page' hasArrow placement='bottom'>
                <Button
                    aria-label='Next Page'
                    size={isLargerThan525 ? 'lg' : 'sm'}
                    rightIcon={<ArrowRightIcon />}
                    variant='outline'
                    isDisabled={props.currentPage >= props.totalPages}
                    onClick={props.nextPageClick}>
                    {!isLargerThan525 && 'Next'}
                </Button>
            </Tooltip>
        </HStack>
    );

}

export default Pagination;