export const filterEmployees = (employees, filters) =>{

    const { search, department, role } = filters;

    return employees.filter((employee) => {
        const matchesSearch =
            employee.name.toLowerCase().includes(search.toLowerCase()) ||
            employee.empId.toLowerCase().includes(search.toLowerCase());
        
        const matchesDepartment = 
            !department || employee.department === department;
        
        const matchesRole =
            !role || employee.position === role;

        return matchesSearch && matchesDepartment && matchesRole;
    })
};