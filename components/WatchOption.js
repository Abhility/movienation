import { useEffect, useRef, useState } from "react";
import {
    Button, Popover, PopoverContent, PopoverBody,
    PopoverTrigger, PopoverArrow, PopoverCloseButton, PopoverHeader, HStack,
    Text, VStack, Avatar, Divider, Tooltip, Tag, Link, TagLabel, TagRightIcon, PopoverFooter, Skeleton
} from '@chakra-ui/react';
import { userLocation } from "../helpers/common";
import { ExternalLinkIcon, ViewIcon } from "@chakra-ui/icons";

const WatchOption = ({ movieId }) => {
    const [watchOptions, setWatchOptions] = useState(null);
    const [loading, setLoading] = useState(true);
    const country = useRef(null);

    const fetchWatchOptions = async () => {
        const location = await userLocation();
        const response = await fetch(`http://localhost:5000/movie-info/movie/${movieId}/watch`);
        const data = await response.json();
        const watchOptions = data[location.countryCode];
        country.current = location.country;
        setWatchOptions(watchOptions);
        setLoading(false);
    };

    useEffect(() => {
        fetchWatchOptions();
    }, [movieId]);

    const rentOptions = watchOptions?.rent;
    const streamingOptions = watchOptions?.flatrate;
    const buyOptions = watchOptions?.buy;

    const Options = ({ options, header }) => (
        <VStack gap={2}>
            <Text>{header}</Text>
            <HStack flexWrap='wrap' gap={4} justifyContent='center'>
                {
                    options.map(option => (
                        <Tooltip key={option.provider_id} label={option.provider_name} hasArrow placement='bottom'>
                            <Avatar
                                size='sm'
                                name={option.provider_name}
                                src={`https://image.tmdb.org/t/p/w500${option.logo_path}`}
                            />
                        </Tooltip>
                    ))
                }
            </HStack>
            <Divider />
        </VStack>
    );


    const WatchOptionContainer = () => {
        return (
            watchOptions ?
                <Popover>
                    <PopoverTrigger>
                        <Button
                            leftIcon={<ViewIcon />}
                            variant='outline'
                            size='xs'
                            p={4}
                            colorScheme='blue'>
                            Watch
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent>
                        <PopoverArrow />
                        <PopoverCloseButton />
                        <PopoverHeader>
                            <Text>Available Options for {country.current}</Text>
                        </PopoverHeader>
                        <PopoverBody>
                            <VStack gap={3}>
                                <Link href={watchOptions.link} isExternal>
                                    <Tag colorScheme='blue' color='white'>
                                        <TagLabel>Watch Here</TagLabel>
                                        <TagRightIcon as={ExternalLinkIcon} />
                                    </Tag>
                                </Link>
                                {streamingOptions && <Options options={streamingOptions} header={'Streaming On'} />}
                                {rentOptions && <Options options={rentOptions} header={'Rent On'} />}
                                {buyOptions && <Options options={buyOptions} header={'Buy On'} />}
                            </VStack>
                        </PopoverBody>
                        <PopoverFooter>
                            <HStack justifyContent='flex-end'>
                                <Text fontSize='xs'>Powered By</Text>
                                <Link href='https://www.justwatch.com/' isExternal>
                                    <Tag colorScheme='yellow'>
                                        <TagLabel>Just Watch</TagLabel>
                                        <TagRightIcon as={ExternalLinkIcon} />
                                    </Tag>
                                </Link>
                            </HStack>
                        </PopoverFooter>
                    </PopoverContent>
                </Popover> :
                null
        );
    };

    return (
        loading ? <Skeleton width='80px' height='25px' /> : <WatchOptionContainer />
    );
};


export default WatchOption;