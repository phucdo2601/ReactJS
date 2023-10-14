import React, { useState } from "react";
import SearchAppBar from "../components/general/SearchAppBar";
import FooterComp from "../components/general/FooterComp";
import DataDisplayGrid from "../components/general/DataDisplayGrid";
import { EmployeeResModel } from "../models/base/EmployeeResModel";

const SearchEmployeePage = () => {
  const [listEmployee, setListEmployee] = useState<EmployeeResModel[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const setListEmployeeData = (data: any) => {
    setListEmployee(data);
  };

  const setLoadingStatus = (data: boolean) => {
    setLoading(data);
  };

  return (
    <>
      <SearchAppBar
        setListEmployee={setListEmployeeData}
        setLoadingStatus={setLoadingStatus}
      />
      <DataDisplayGrid listEmployee={listEmployee} loading={loading} />
      <FooterComp />
    </>
  );
};

export default SearchEmployeePage;
