import { useQuery } from "@tanstack/react-query";
import { getName } from "shared/api/users/queries";

export const useUsersMeApi = () => {
    const { data, isLoading, error } = useQuery({
        queryKey: ["user"],
        queryFn: getName,
    });

    return { data, isLoading, error };
};
