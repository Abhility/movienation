import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { Button, HStack, IconButton, Tooltip } from '@chakra-ui/react';

const Pagination = ({ noOfPages, currentPage }) => {

    return (
        <HStack
            p={5}
            mx={8}
            gap='2rem'
            flexWrap='wrap'
            >
            <Tooltip label='Previous Page' hasArrow placement='bottom'>
                <IconButton
                    aria-label='Prev Page'
                    size='lg'
                    icon={<ChevronLeftIcon />} />
            </Tooltip>
            {
                Array(noOfPages)
                    .fill(0)
                    .map((_, i) => <Button key={i}>{i}</Button>)
            }
            <Tooltip label='Next Page' hasArrow placement='bottom'>
                <IconButton
                    aria-label='Next Page'
                    size='lg'
                    icon={<ChevronRightIcon />} />
            </Tooltip>
        </HStack>
    );

}

export default Pagination;