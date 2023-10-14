import { EmployeeResModel } from "../base/EmployeeResModel";

export interface PagingEmployeeResModel {
    data: {
        employees: EmployeeResModel[];
        currentPage: number;
        pageSizes: number;
        pages: number;
        totalRecords: number;
    }
    
}