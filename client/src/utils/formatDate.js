export const formatCurrentDate = () =>{
    return new Date().toLocaleDateString('en-GB', {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
    });
}