import { 
    CircleAlert,
    CircleCheckBig,
    FileText,
    Megaphone,
} from 'lucide-react';

export const activityItemData = {
    payroll: {
        bg: "bg-blue-100",
        text: "text-blue-600",
        icon: CircleCheckBig,
    },
    document: {
        bg: "bg-indigo-100",
        text: "text-indigo-600",
        icon: FileText,
    },
    alert: {
        bg: "bg-red-100",
        text: "text-red-600",
        icon: CircleAlert,
    },
    event: {
        bg: "bg-orange-100",
        text: "text-orange-600",
        icon: Megaphone,
    },
};

export const employeeActivityItemData = {
    checkin: {
        bg: "bg-blue-100",
        main: "bg-blue-500",
    },
    leave: {
        bg: "bg-orange-100",
        main: "bg-orange-500",
    },
    payroll: {
        bg: "bg-green-100",
        main: "bg-green-500",
    },
    update: {
        bg: "bg-slate-100",
        main: "bg-slate-500",
    },
}