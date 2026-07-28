export const formatCurrentDate = () =>{
    return new Date().toLocaleDateString('en-GB', {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
    });
};

export const formatBirthday = (date) =>{

    const d = new Date(date);

    const month = d.toLocaleDateString('en-GB', {
        month: "short",
    });

    return `${month} ${d.getDate()}`;
};

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