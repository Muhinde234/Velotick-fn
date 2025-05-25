import {useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { createSchedule, getSchedules } from "../../api/schedules/schedules_api"

export const useSchedules = () => {
    return useQuery({
        queryKey: ['schedules'],
        queryFn: getSchedules,
    });
}

export const useCreateSchedule = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (scheduleData) => createSchedule(scheduleData),
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ['schedules']});
        }
    })
}