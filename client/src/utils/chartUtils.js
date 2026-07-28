export const departmentPieChartPercentage = (data) =>{
    const total = data.reduce((sum, dept) => sum + dept.value, 0);

    return data.map((dept)=> ({
        ...dept,
        percentage: Math.round((dept.value / total) * 100),
    }));
};