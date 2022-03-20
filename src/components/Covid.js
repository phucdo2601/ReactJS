import axios from "axios";
import moment from "moment";
import { useEffect, useState } from "react";

const Covid = () => {
  const [dataCovid, setDataCovid] = useState([]);

  /**
   * Lay API data ve trong class component thi dung componentDidMount()
   * Trong function component(hook) thi dung effect
   * Truyen mang rong trong useEffect de bao rang ham nay chi chay dung mot lan khi get dc du lieu ve(tuong duong componentDidMount())
   * Lan dau tien render chua chay vo useEffect, no se chay vao dom truoc, sau do no se chay vao useEffect r set DATA
   */
  useEffect(async () => {
    let res = await axios.get(
      "https://api.covid19api.com/country/vietnam?from=2021-10-01T00:00:00Z&to=2021-10-20T00:00:00Z"
    );

    let data = res && res.data ? res.data : [];
    if (data && data.length > 0) {
      data.map((item) => {
        item.Date = moment(item.Date).format("DD/MM/YYYY");
      });
    }
    console.log(">>> check set data: ", data);
    setDataCovid(data);
  }, []);

  return (
    <>
      <table>
        {console.log(">>>check dataCovid: ", dataCovid)}
        <thead>
          <tr>
            <th>Date</th>
            <th>Confirmed</th>
            <th>Active</th>
            <th>Deaths</th>
            <th>Recovers</th>
          </tr>
        </thead>
        <tbody>
          {dataCovid &&
            dataCovid.length > 0 &&
            dataCovid.map((item) => {
              return (
                <tr key={item.ID}>
                  <td>{item.Date}</td>
                  <td>{item.Confirmed}</td>
                  <td>{item.Active}</td>
                  <td>{item.Deaths}</td>
                  <td>{item.Recovered}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </>
  );
};

export default Covid;
