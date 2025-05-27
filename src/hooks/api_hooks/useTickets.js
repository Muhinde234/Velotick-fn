import {useQuery} from "@tanstack/react-query";
import {getTickets} from "../../api/tickets.js";

export const useTickets = () => {
    return useQuery({
        queryKey: ['tickets'],
        queryFn: getTickets,
    });
}