// default format
export const formatCurrentDate = () =>{
    return new Date().toLocaleDateString('en-GB', {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
    });
};

// Birthday format returning month and date combined
export const formatBirthday = (date) =>{

    const d = new Date(date);

    const month = d.toLocaleDateString('en-GB', {
        month: "short",
    });

    return `${month} ${d.getDate()}`;
};

// for filtering only upcoming 3 days birthday based on date 
export const isUpcomingBirthday =  (birthday, days=3) =>{
    const today = new Date();

    const nextBirthday = new Date(birthday);

    nextBirthday.setFullYear(today.getFullYear());

    today.setHours(0, 0, 0, 0);
    nextBirthday.setHours(0, 0, 0, 0);

    if(nextBirthday < today){
        nextBirthday.setFullYear(today.getFullYear() + 1);
    }

    const diffInDays = Math.ceil(
        (nextBirthday - today) / (1000 * 60 * 60 * 24)
    );

    return diffInDays >= 0 && diffInDays <= days
}

export const isTodayBirthday = (birthday) => {
    return formatBirthday(new Date()) === formatBirthday(birthday);
}

// basic format returning month and date separately
export const formatDateAndMonth = (date) =>{
    const d = new Date(date);

    return {
        month : d.toLocaleDateString('en-GB', {
            month: "short",
        }),
        day: d.getDate(),
    };
}

// for filtering only upcoming dates with limit
export const isUpcomingDate = (date, days)=>{
    const today = new Date();
    const targetDate = new Date(date);

    today.setHours(0, 0, 0, 0);
    targetDate.setHours(0, 0, 0, 0);

    const diffInDays = Math.ceil(
        (targetDate - today) / (1000 * 60 * 60 * 24)
    );

    return diffInDays >= 0 && diffInDays <= days;
};

// for cheking the date is today
export const isToday = (date) =>{
    const today = new Date();
    const target = new Date(date);

    return (
        today.getDate() === target.getDate() &&
        today.getMonth() === target.getMonth() &&
        today.getFullYear() === target.getFullYear()
    );
};