import { useQuery } from "@tanstack/react-query";
import { getBuses } from "../../api/buses/buses_api";

export const useBuses = () => {
    return useQuery({
        queryKey: ['buses'],
        queryFn: getBuses,
    });
}