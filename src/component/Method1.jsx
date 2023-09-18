import React, { useRef, useState } from "react";
import { DownloadTableExcel } from "react-export-table-to-excel";
import { dummydata } from "../util/data";
import axios from "axios";

const Method1 = () => {
  const tableRef = useRef(null);
  const [data, setData] = useState(dummydata);
  const [id, setId] = useState();
  const [billFromDate, setBillFromDate] = useState();
  const [billToDate, setBillToDate] = useState();
  const [portCode, setPortCode] = useState();

  const ApiCall = async () => {
    console.log("called apicall: ");
    const respose = await axios.post(
      "https://testapi.kscan.in/v3/iec-transaction",
      {
        id: id,
        billFromDate: billFromDate,
        billToDate: billToDate,
        portCode: portCode,
      },
      {
        headers: {
          "Content-Type": "application/json",
          "x-karza-key": "pPGWkP2uB4h1Yrhj",
        },
      }
    );
    if (respose) {
      setData(respose.data);
    }
    console.log("response.data: ", data);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    ApiCall();
  };

  let billentry = 0,
    billshipping = 0;
  const resimport = data.result.iecBillOfEntry;
  const resexport = data.result.iecShippingBill;
  resimport.map((e) => (billentry += e.billOfEntryDetails.totalValue));
  resexport.map((e) => (billshipping += e.shippingBillDetails.fobInr));

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="string"
          required
          value={id}
          onChange={(e) => setId(e.target.value)}
          placeholder="ID*"
        ></input>
        <input
          type="date"
          value={billFromDate}
          onChange={(e) => setBillFromDate(e.target.value)}
          placeholder="BillFromDate"
        ></input>
        <input
          type="date"
          value={billToDate}
          onChange={(e) => setBillToDate(e.target.value)}
          placeholder="BillToDate"
        ></input>
        <input
          type="string"
          value={portCode}
          onChange={(e) => setPortCode(e.target.value)}
          placeholder="Portcode"
        ></input>
        <input type="submit" />
      </form>
      <br />
      <DownloadTableExcel
        filename={id ? id : "iec"}
        sheet="iec transaction"
        currentTableRef={tableRef.current}
      >
        <button> Download excel </button>
      </DownloadTableExcel>

      <table ref={tableRef}>
        <thead>
          <tr>
            <th>{"Sr.No."}</th>
            <th>{"Date"}</th>
            <th>{"Challan No"}</th>
            <th>{"Amount"}</th>
          </tr>
        </thead>
        <tbody>
          {resimport &&
            resimport.map((e, id) => {
              return (
                <tr key={id}>
                  <td>{id + 1}</td>
                  <td>{e.billOfEntryDate.slice(0, 10)}</td>
                  <td>{e.billOfEntryDetails.chaNumber}</td>
                  <td>{e.billOfEntryDetails.totalValue}</td>
                </tr>
              );
            })}
          <tr>
            <td></td>
            <td>{"Total Bill"}</td>
            <td></td>
            <td>{billentry}</td>
          </tr>
        </tbody>

        <thead>
          <tr>
            <th>{"Sr.No."}</th>
            <th>{"Date"}</th>
            <th>{"Challan No"}</th>
            <th>{"Amount"}</th>
          </tr>
        </thead>
        <tbody>
          {resexport &&
            resexport.map((e, id) => {
              return (
                <tr key={id}>
                  <td>{id + 1}</td>
                  <td>{e.shippingBillDate.slice(0, 10)}</td>
                  <td>{e.shippingBillDetails.chaNumber}</td>
                  <td>{e.shippingBillDetails.fobInr}</td>
                </tr>
              );
            })}
          <tr>
            <td></td>
            <td>{"Total Bill"}</td>
            <td></td>
            <td>{billshipping}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default Method1;
