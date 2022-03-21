import { useEffect, useState } from "react";
import useCovidFetch from "../customize/covidFetch";

const Covid = () => {
  // const [dataCovid, setDataCovid] = useState([]);

  // //dat bien chi trang thai isLoading
  // const [isLoading, setIsLoading] = useState(true);

  // //dat bien chi error message
  // const [isError, setIsError] = useState(false);

  //goi toi custom hook
  const {
    data: dataCovid,
    isLoading,
    isError,
  } = useCovidFetch(
    "https://api.covid19api.com/country/vietnam?from=2021-10-01T00:00:00Z&to=2021-10-20T00:00:00Z"
  );

  /**
   * Lay API data ve trong class component thi dung componentDidMount()
   * Trong function component(hook) thi dung effect
   * Truyen mang rong trong useEffect de bao rang ham nay chi chay dung mot lan khi get dc du lieu ve(tuong duong componentDidMount())
   * Lan dau tien render chua chay vo useEffect, no se chay vao dom truoc, sau do no se chay vao useEffect r set DATA
   */

  let x = 0;

  return (
    <>
      <h3>Covid 19 tracking in Vietnam!</h3>

      {/* {x > 5 ? <span>I'm greater than 5</span> : <span>I'm less than 5</span>} */}

      {/* {x > 5 && <span>I'm greater than 5</span>}

      {x < 5 && <span>I'm less than 5</span>} */}

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
          {isLoading === false &&
            dataCovid &&
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

          {isError === false && isLoading === true && (
            <tr>
              <td colSpan="5" style={{ textAlign: "center" }}>
                Loading...
              </td>
            </tr>
          )}

          {isError === true && (
            <tr>
              <td colSpan="5" style={{ textAlign: "center", color: "red" }}>
                Something Wrong....
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
};

export default Covid;
