import {
    UsersRound,
    CircleCheck,
    Building2,
    CalendarCheck,
    Clock3,
} from "lucide-react";

export const adminSummaryCards = [
    {
        id: 1,
        title: "Total Employees",
        value: 1240,
        icon: UsersRound,
        trendValue: "2.4%",
        trendDirection: "positive"
    },
    {
        id: 2,
        title: "Present Today",
        value: 1185,
        icon: CalendarCheck,
        tag: "Daily",
    },
    {
        id: 3,
        title: "Pending Requests",
        value: 16,
        icon: Clock3,
        trendValue: "-4.1%",
        trendDirection: "negative"
    },
    {
        id: 4,
        title: "Departments",
        value: 12,
        icon: Building2,
    },
    {
        id: 5,
        title: "Departments",
        value: 12,
        icon: Building2,
        trendValue: "1.2%",
        trendDirection: "positive"
    },
    {
        id: 6,
        title: "Departments",
        value: 12,
        icon: Building2,
        trendValue: "1.2%",
        trendDirection: "positive"
    },
]