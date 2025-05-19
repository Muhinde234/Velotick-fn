import { useQuery } from "@tanstack/react-query"
import { getSchedules } from "../../api/schedules/schedules_api"

export const useSchedules = () => {
    return useQuery({
        queryKey: ['schedules'],
        queryFn: getSchedules,
    });
}