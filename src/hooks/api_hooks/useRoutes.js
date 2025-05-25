import { useQuery } from "@tanstack/react-query";
import { getAllRoutes } from "../../api/routes/routes_api";


export const useRoutes = () => {
    return useQuery({
        queryKey: ['routes'],
        queryFn: getAllRoutes,
    });
}