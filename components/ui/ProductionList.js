import { Box, Divider, Text, VStack } from '@chakra-ui/react';
import Production from './Production';

const ProductionList = ({ productionData , isLargerThan1150}) => {
    return (
        productionData.length ?
            <Box display='flex'
                flexWrap='wrap'
                alignItems='center'
                justifyContent='center'
                maxW='2xl'>
                <VStack width='100%' align={isLargerThan1150 ? 'flex-start' : 'center'}>
                    <Text fontSize='2xl'>Production Houses</Text>
                    <Divider size='md' />
                    <Box display='flex'
                        flexWrap='wrap'
                        width='100%'
                        gap='1rem'
                        alignItems='center'>
                        {productionData.map(production => <Production production={production} key={production.id} />)}
                    </Box>
                </VStack>
            </Box> : null
    );
}

export default ProductionList;