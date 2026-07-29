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