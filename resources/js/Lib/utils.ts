import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function formatDate(date: string) {
    // Parse the input date string to a Date object
    const inputDate = new Date(date);

    // Define an array of month names
    const monthNames = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
    ];

    // Get the day, month, and year from the Date object
    const day = inputDate.getUTCDate();
    const month = monthNames[inputDate.getUTCMonth()];
    const year = inputDate.getUTCFullYear();

    // Function to add the appropriate suffix to the day
    function getDaySuffix(day: number) {
        if (day >= 11 && day <= 13) {
            return "th";
        }
        switch (day % 10) {
            case 1:
                return "st";
            case 2:
                return "nd";
            case 3:
                return "rd";
            default:
                return "th";
        }
    }

    // Format the date to the desired string format
    return `${month} ${day}${getDaySuffix(day)} ${year}`;
}

export function imagePath(path: string) {
    if (!path) return "";

    if (path.includes("https") || path.includes("http")) return path;

    return `/storage/${path}`;
}
