import {
    UsersRound,
    CircleCheck,
    Building2,
    CalendarCheck,
    Clock3,
    UserRoundX,
    ClipboardClock,
} from "lucide-react";

export const adminSummaryCards = [
    {
        id: 1,
        title: "Total Employees",
        value: 1240,
        icon: UsersRound,
        iconVariant: "blue",
        trendValue: "2.4%",
        trendDirection: "positive"
    },
    {
        id: 2,
        title: "Present Today",
        value: 1185,
        icon: CalendarCheck,
        iconVariant: "success",
        tag: "Daily",
    },
    {
        id: 3,
        title: "Absent Today",
        value: 60,
        icon: UserRoundX,
        iconVariant: "danger",
        tag: "Daily",
    },
    {
        id: 4,
        title: "Leave Requests",
        value: 12,
        icon: ClipboardClock,
        iconVariant: "amber",
    },
]