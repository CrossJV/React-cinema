import { ReactNode, useContext } from "react";
import { UserContext } from "../../contexts/user.context";
import { Navigate } from "react-router";

export const AuthLayout = ({ children }: {children: ReactNode}) => {
    const { user } = useContext(UserContext);

    if(!user) {
        return <Navigate to='/auth' replace />
    }
    return children;
}