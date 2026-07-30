import { 
    LayoutDashboard, 
    Users, 
    Building2, 
    CalendarCheck, 
    CalendarX2, 
    CreditCard, 
    FileText, 
    Settings 
} from 'lucide-react';

export const sidebarLinks = [
    {
        title: "Dashboard",
        path: "/dashboard",
        icon: LayoutDashboard,
        roles: ["admin", "employee"],
    },
    {
        title: "Employees",
        path: "/employees",
        icon: Users,
        roles: ["admin"],
    },
    {
        title: "Departments",
        path: "/departments",
        icon: Building2,
        roles: ["admin"],
    },
    {
        title: "Attendance",
        path: "/attendance",
        icon: CalendarCheck,
        roles: ["admin", "employee"],
    },
    {
        title: "Leave",
        path: "/leave",
        icon: CalendarX2,
        roles: ["admin", "employee"],
    },
    {
        title: "Payroll",
        path: "/payroll",
        icon: CreditCard,
        roles: ["admin", "employee"],
    },
    {
        title: "Reports",
        path: "/reports",
        icon: FileText,
        roles: ["admin"],
    },
    {
        title: "Settings",
        path: "/settings",
        icon: Settings,
        roles: ["admin", "employee"],
    },
];