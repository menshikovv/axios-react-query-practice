import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const FIRST_API_URL = 'https://catfact.ninja/fact';

const getFacts = async () => {
    return axios.get(`${FIRST_API_URL}`);
}

export function useFacts() {
    const { data, isLoading } = useQuery({
        queryKey: ['facts'],
        queryFn: getFacts,
        select: (data) => data.data,
    })

    return { data, isLoading }
}