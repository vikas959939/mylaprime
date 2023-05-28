import React, { useState, useMemo, useEffect, useRef } from "react";
import { DownloadTableExcel } from 'react-export-table-to-excel';
// import {advancedTable} from "../../constant/table-data"
// import { advancedTable } from "../../../constant/table-data";
import Card from "@/components/ui/Card";
import Icon from "@/components/ui/Icon";
import Dropdown from "@/components/ui/Dropdown";
import { Menu } from "@headlessui/react";
import { Link } from "react-router-dom";

import {
  useTable,
  useRowSelect,
  useSortBy,
  useGlobalFilter,
  usePagination,
} from "react-table";

// import GlobalFilter from "./GlobalFilter";
// import GlobalFilter from "../table/react-tables/GlobalFilter";
import GlobalFilter from "../../table/react-tables/GlobalFilter";
import axios from "axios";


const TodoPage = ({ PoItems, setPoItemDetails }) => {
  const tableRef = useRef(null);


  const [registeredUser, setRegisteredUser] = useState([])
  const [getMonth, setMonth] = useState()

  const getRegisteredUser = () => {
    axios.get('http://localhost:5555/enroll').then((res) => {
      setRegisteredUser(res.data)
    })
  }

  useEffect(() => {
    getRegisteredUser()
  }, [])

  const TableHeader = ['Name', 'Aadhar Number', 'Enrollment Number', 'Start Date', 'Validity Ends', 'Date of Registration']
  const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']


  const myMonth = registeredUser.map(ele => new Date(ele.Dateof_Registration).getMonth())


  console.log(myMonth)

  const gettingData = registeredUser.filter(el => (new Date(el.Dateof_Registration).getMonth()) === getMonth)



  return (
    <>
      <Card noborder>

        <div className="row">
          <div className="col-md-4 col-sm-12">

          </div>

          <div className="col-md-4 col-sm-12">

          </div>

          <div className="col-md-4 col-sm-12">
            <select class="form-select" onChange={(e) => setMonth(e.target.value)} aria-label="Default select example">
              <option >Select month</option>
              {
                month.map((ele, i) => {
                  return (
                    <option value={i}>{ele}</option>
                  )
                })
              }


            </select>
          </div>

        </div>
        <table
          className="min-w-full divide-y divide-slate-100 mt-4 table-fixed dark:divide-slate-700"
          ref={tableRef}
        >
          <thead className=" border-t border-slate-100 dark:border-slate-800" style={{ 'backgroundColor': 'rgb(179 235 232)' }}>

            <tr>
              {TableHeader.map((column) => (
                <th scope="col" className=" table-th ">
                  {column}
                </th>
              ))}
            </tr>

          </thead>
          <tbody

          >


            {
              registeredUser.filter(el => (new Date(el.Dateof_Registration).getMonth().toString()).includes(getMonth)).map((ele, i) => {
                return (
                  <tr key={i}>
                    <td className="table-td">{ele.Name}</td>
                    <td className="table-td">{ele.Aadhar}</td>
                    <td className="table-td">{ele.Enrollment}</td>
                    <td className="table-td">{ele.Start_Date}</td>
                    <td className="table-td">{ele.End_Date}</td>
                    <td className="table-td">{ele.Dateof_Registration}</td>

                  </tr>
                )
              })
            }
          </tbody>
        </table>



        <DownloadTableExcel
          filename="users table"
          sheet="users"
          currentTableRef={tableRef.current}
        >

          <div className="row mt-3" style={{ 'textAlign': 'center' }}>
            <button className="btn btn-success">
              Export CSV
            </button>
          </div>

        </DownloadTableExcel>
      </Card>
    </>
  )
}

export default TodoPage