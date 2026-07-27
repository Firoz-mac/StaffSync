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
    },
    {
        title: "Employees",
        path: "/employees",
        icon: Users,
    },
    {
        title: "Departments",
        path: "/departments",
        icon: Building2,
    },
    {
        title: "Attendance",
        path: "/attendance",
        icon: CalendarCheck,
    },
    {
        title: "Leave",
        path: "/leave",
        icon: CalendarX2,
    },
    {
        title: "Payroll",
        path: "/payroll",
        icon: CreditCard,
    },
    {
        title: "Reports",
        path: "/reports",
        icon: FileText,
    },
    {
        title: "Settings",
        path: "/settings",
        icon: Settings,
    },
]