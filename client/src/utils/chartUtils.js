export const departmentPieChartPercentage = (data) =>{
    const total = data.reduce((sum, dept) => sum + dept.value, 0);

    return data.map((dept)=> ({
        ...dept,
        percentage: Math.round((dept.value / total) * 100),
    }));
};

export const leaveStatisticsBarPercentage = (data) =>{
    const total = data.reduce((sum, leave)=> sum + leave.count, 0);

    return data.map((leave)=> ({
        ...leave,
        percentage: Math.round((leave.count/total) * 100),
    }));
}