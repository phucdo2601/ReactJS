import axios from "axios";
import moment from "moment";
import { useEffect, useState } from "react";

const Covid = () => {
  const [dataCovid, setDataCovid] = useState([]);

  //dat bien chi trang thai
  const [loading, setLoading] = useState(true);

  /**
   * Lay API data ve trong class component thi dung componentDidMount()
   * Trong function component(hook) thi dung effect
   * Truyen mang rong trong useEffect de bao rang ham nay chi chay dung mot lan khi get dc du lieu ve(tuong duong componentDidMount())
   * Lan dau tien render chua chay vo useEffect, no se chay vao dom truoc, sau do no se chay vao useEffect r set DATA
   */

  useEffect(async () => {
    setTimeout(async () => {
      let res = await axios.get(
        "https://api.covid19api.com/country/vietnam?from=2021-10-01T00:00:00Z&to=2021-10-20T00:00:00Z"
      );

      let data = res && res.data ? res.data : [];

      if (data && data.length > 0) {
        data.map((item) => {
          item.Date = moment(item.Date).format("DD/MM/YYYY");
        });

        data = data.reverse();
      }
      console.log(">>> check set data: ", data);
      setDataCovid(data);
      setLoading(false);
    }, 5000);
  }, []);

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
          {loading === false &&
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

          {loading === true && (
            <tr>
              <td colSpan="5" style={{ textAlign: "center" }}>
                Loading...
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
};

export default Covid;
