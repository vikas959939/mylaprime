import React, { useState, forwardRef, useEffect, useRef } from "react";
import Card from "@/components/ui/Card";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import { DownloadTableExcel } from 'react-export-table-to-excel';


const CalenderPage = () => {

  const tableRef = useRef(null);

  const [startDate, setStartDate] = useState(new Date());
  const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
    <button className="btn btn-danger" onClick={onClick} ref={ref}>
      {value}
    </button>
  ));

  const tableHeader = ['Name', 'Enrollment number', 'validity', 'date', 'Check-in', 'Check-Out']

  const [getDetails, setDetails] = useState([])

  const getStatusData = () => {
    axios.get('http://localhost:5555/record').then((res) => {
      setDetails(res.data)
    })
  }

  useEffect(() => {
    getStatusData()
  }, [])


  return (
    <div className="dashcode-calender">
      <Card noborder>

        <div className="row">
          <div className="col-md-4 col-sm-12">

          </div>

          <div className="col-md-4 col-sm-12">

          </div>

          <div className="col-md-4 col-sm-12" style={{ 'textAlign': 'center' }}>

            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              customInput={<ExampleCustomInput />}
            />


          </div>

        </div>
        <table
          className="min-w-full divide-y divide-slate-100 mt-4 table-fixed dark:divide-slate-700"
          ref={tableRef}
        >
          <thead className=" border-t border-slate-100 dark:border-slate-800" style={{ 'backgroundColor': 'rgb(179 235 232)' }}>

            <tr>
              {tableHeader.map((column) => (
                <th scope="col" className=" table-th ">
                  {column}
                </th>
              ))}
            </tr>

          </thead>
          <tbody

          >


            {
              getDetails.filter(el => el.date.includes(startDate.toDateString())).map((ele, i) => {
                return (
                  <tr key={i}>
                    <td className="table-td">{ele.Name}</td>
                    <td className="table-td">{ele.EnrollMent}</td>
                    <td className="table-td">{ele.Validity}</td>
                    <td className="table-td">{ele.date}</td>
                    <td className="table-td">{ele.In_time}</td>
                    <td className="table-td">{ele.Out_time}</td>

                  </tr>
                )
              })
            }
          </tbody>
        </table>



        <div className="row">
          <div className="col-md-4 col-sm-12">

          </div>

          <div className="col-md-4 col-sm-12">
            <DownloadTableExcel
              filename="Daily attendence"
              sheet="users"
              currentTableRef={tableRef.current}
            >

              <div className="row mt-3" style={{ 'textAlign': 'center' }}>
                <button className="btn btn-success">
                  Export CSV
                </button>
              </div>

            </DownloadTableExcel>
          </div>

          <div className="col-md-4 col-sm-12">

          </div>
        </div>
      </Card>
    </div>
  );
};

export default CalenderPage;
