export interface EmployeeResModel {
    businessEntityId:            number;
    nationalIdnumber:            string;
    loginId:                     string;
    organizationLevel:           number;
    jobTitle:                    string;
    birthDate:                   Date;
    maritalStatus:               string;
    gender:                      string;
    hireDate:                    Date;
    salariedFlag:                boolean;
    vacationHours:               number;
    sickLeaveHours:              number;
    currentFlag:                 boolean;
    rowguid:                     string;
    modifiedDate:                Date;
    businessEntity:              null;
    employeeDepartmentHistories: any[];
    employeePayHistories:        any[];
    jobCandidates:               any[];
    purchaseOrderHeaders:        any[];
    salesPerson:                 null;
}
