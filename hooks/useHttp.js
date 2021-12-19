import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then(res => res.json());

const useHttp = (url) => {
    const { data, error } = useSWR(url, fetcher);
    return {
        data,
        loading: !error && !data,
        hasError: error
    };
}

export default useHttp;