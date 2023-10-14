import { basicApiUrl } from "../baseUrl";

const searchEmployeePaging = async (searchQuery: string, pageNum: number = 1, pageSize: number = 20) => {
    return basicApiUrl().get(`Employee/paging?searchParams=${searchQuery}&pageNum=${pageNum}&pageSize=${pageSize}`);
}

const EmployeeApi = {
    searchEmployeePaging
};

export default EmployeeApi;