import { ReactNode } from "react";
import { Navigate } from "react-router";
import { UserProps } from "../hooks/User.props";

export const RequireSign = ({ children }: {children: ReactNode}) => {
    const data = JSON.parse(localStorage.getItem('users')!);

    if(data) {
        const user = data?.filter((user: UserProps) => {
            return user.isLogined;
        });
    
        if(user[0]) {
            return children;   
        }
    }
    return <Navigate to='/auth' replace />
}