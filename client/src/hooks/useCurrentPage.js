import { useLocation } from "react-router-dom";
import { sidebarLinks } from "../constants/sidebarLinks";

export const useCurrentPage = ()=>{
    const {pathname} = useLocation();

    return (
        sidebarLinks.find((link)=> link.path === pathname) || {
            title: "StaffSync",
        }
    );
};