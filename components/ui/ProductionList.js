import { Box, Divider, Text, VStack } from '@chakra-ui/react';
import Production from './Production';

const ProductionList = ({ productionData }) => {
    return (
        productionData.length ?
            <Box display='flex'
                flexWrap='wrap'
                alignItems='center'
                justifyContent='center'
                width='100%'
            >
                <VStack width='100%' align='flex-start'>
                    <Text fontSize='2xl'>Production Houses</Text>
                    <Divider size='md'/>
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