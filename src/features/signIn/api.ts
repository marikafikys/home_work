import { useMutation } from "@tanstack/react-query";
import { signIn } from "shared/api/auth/queries";
import { SignInRequest } from "shared/api/auth/types";

export const useSignInApi = () => {
    const { mutateAsync, isPending } = useMutation({
        mutationFn: (params: SignInRequest) => signIn(params),
    });

    return { mutateAsync, isPending };
};
