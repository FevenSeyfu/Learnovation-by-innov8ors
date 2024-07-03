import {    add,
    eachDayOfInterval,
    endOfMonth,
    endOfWeek,
    format,
    isDate,
    getDay,
    isSameMonth,
    isToday,
    parse,
    startOfToday,
    startOfWeek,
    isEqual
} from "date-fns";
import { useState } from "react";

function StreakTracker() {
    const today = startOfToday();
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const colStartClasses = [
        "",
        "col-start-2",
        "col-start-3",
        "col-start-4",
        "col-start-5",
        "col-start-6",
        "col-start-7",
    ];

    const [currMonth, setCurrMonth] = useState(() => format(today, "MMM-yyyy"));
    let firstDayOfMonth = parse(currMonth, "MMM-yyyy", new Date());

    const daysInMonth = eachDayOfInterval({
        start: startOfWeek(firstDayOfMonth),
        end: endOfWeek(endOfMonth(firstDayOfMonth)),
    });

    const getPrevMonth = (event) => {
        event.preventDefault();
        const firstDayOfPrevMonth = add(firstDayOfMonth, { months: -1 });
        setCurrMonth(format(firstDayOfPrevMonth, "MMM-yyyy"));
    };

    const getNextMonth = (event) => {
        event.preventDefault();
        const firstDayOfNextMonth = add(firstDayOfMonth, { months: 1 });
        setCurrMonth(format(firstDayOfNextMonth, "MMM-yyyy"));
    };

    return (
        <div className="p-8 w-screen h-screen flex items-center justify-center dark:bg-gray-900 dark:text-white dark:border-neutral-800">
            <div className="w-[900px] h-[600px]">
                <div className="flex items-center justify-between">
                    <p className="font-semibold text-xl">
                        {format(firstDayOfMonth, "MMMM yyyy")}
                    </p>
                    <div className="flex items-center justify-evenly gap-6 sm:gap-12">
                        <svg onClick={getPrevMonth} class="w-6 h-6 cursor-pointer text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m15 19-7-7 7-7"/>
                        </svg>

                        <svg onClick={getNextMonth} class="w-6 h-6 cursor-pointer text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 5 7 7-7 7"/>
                        </svg>
                    </div>
                </div>
                <hr className="my-6" />
                <div className="grid grid-cols-7 gap-6 sm:gap-12 place-items-center">
                    {days.map((day, idx) => {
                        return (
                            <div key={idx} className="font-semibold">
                                {day}
                            </div>
                        );
                    })}
                </div>
                <div className="grid grid-cols-7 gap-6 sm:gap-12 mt-8 place-items-center dark:bg-gray-900 dark:text-white dark:border-neutral-800">
                    {daysInMonth.map((day, idx) => {
                        return (
                            <div key={idx} className={colStartClasses[getDay(day)]} class="">
                                <p
                                    className={`flex items-center justify-center font-semibold h-8 w-8 rounded-lg   ${
                                        isSameMonth(day, today) ? "text-gray-900 dark:text-white" : "text-gray-400"
                                    }  ${
                                        isToday(day) && "bg-gradient-to-br from-violet-500 to-pink-500 text-white"
                                    } ${isEqual(getDay(day), new Date(2024, 7, 2)) && "bg-gradient-to-br from-violet-500 to-pink-500 text-white"
                                    }`}
                                >
                                    {format(day, "d")}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default StreakTracker;

