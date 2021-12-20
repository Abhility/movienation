import { VscStarFull, VscStarHalf } from "react-icons/vsc";
import { Box, HStack, Tag, TagLabel, Tooltip } from "@chakra-ui/react";
import React from "react";
const Rating = ({ rating }) => {
    const finalRating = Math.floor(rating / 2);
    return (
        <Tooltip label={`Rating : ${rating}/10`} hasArrow placement='bottom'>
            <HStack>
                {finalRating ? Array(5)
                    .fill(0)
                    .map((_, i) => (
                        <VscStarFull
                            key={i}
                            size={25}
                            style={{ fill: i < finalRating ? "#fcba03" : "#525252" }}
                        />
                    ))
                    :
                    <Tag size='sm' colorScheme='red' borderRadius='full'>
                        <TagLabel>Unrated</TagLabel>
                    </Tag>
                }
            </HStack>
        </Tooltip>
    );
}

export default React.memo(Rating);