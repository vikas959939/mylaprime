import React, { useState, useEffect, forwardRef } from "react";
import axios from "axios";
import {Link} from 'react-router-dom'






const KanbanPage = ({EnrollMentValue}) => {

    const [getEnroll, setEnroll] = useState([])
    const Header = ['Name', 'Enrollment Number', 'Start Date', 'End Date']

    const getData = () => {
        axios.get('http://localhost:5555/enroll').then((res) => {
           const filteredUser = res.data.filter(ele=> ele.Enrollment === EnrollMentValue)
            setEnroll(filteredUser)
        })
    }

    useEffect(() => {
        getData()
      }, [])

      const currDate = new Date()
      const getExpireDate = getEnroll.map(ele=> ele.End_Date)
      const validityDate = new Date(getExpireDate[0])
      console.log(validityDate == currDate)

      const getName = getEnroll.map(ele=> ele.Name)
      const getEnrollment = getEnroll.map(ele=> ele.Enrollment)
      const getEndDate = getEnroll.map(ele=> ele.End_Date)
      


      const InOutTime=()=>{
        axios.post('http://localhost:5555/record', {
            Name:getName[0],
            EnrollMent:getEnrollment[0],
            Validity:getEndDate[0],
            Out_time:''
        }).then((res)=>{
            console.log(res.data)
            
        })
      }

      const [getCheckin, setCheckin] = useState([])
      const [getCheckInTime, setCheckInTime] = useState('')
      const [outTime, setOutTime] = useState('')

      const getRecordData =()=>{
        axios.get('http://localhost:5555/record').then((res)=>{
            console.log(res.data)
            const getFilteredChekinData = res.data.filter(ele=> ele.date === (new Date().toDateString()) && ele.EnrollMent === EnrollMentValue)
            setCheckin(getFilteredChekinData)
        })
      }

     useEffect(() => {
        getRecordData()
        
     }, [])

     const myCheckInTime = getCheckin[getCheckin.length - 1] 
    console.log(myCheckInTime)

    setTimeout(() => {
        setCheckInTime(myCheckInTime._id)
        setOutTime(myCheckInTime.Out_time)
    }, 500);
     
    const uploadOutTime=()=>{
        axios.put(`http://localhost:5555/record/${getCheckInTime}`, {
            Out_time:(new Date().toTimeString())
        }).then((res)=>{
            console.log(res.data)
        })
    }

    console.log(outTime)
     
    return (
        <div className="container">
            <div>
                <div className="row">
                    <div className="col-md-4">
                        <h3>Hii {getEnroll.map(ele=> ele.Name)}</h3>
                        <p className="text-danger mt-3">Validity Expires on - {getEnroll.map(ele=> ele.End_Date)}</p>
                    </div>

                    <div className="col-md-4">

                    </div>

                    <div className="col-md-4" style={{ 'textAlign': 'center' }}>
                        {
                            validityDate < currDate ? 
                            
                            
                            <button disabled className="btn btn-secondary">Check in</button>
                            :

                            myCheckInTime && outTime == '' ?
                            <a href='/setup' onClick={()=>{
                                uploadOutTime()
                               //window.location.reload()
                            }} className="btn btn-danger">Check out</a>
                            :
                            <a href='/setup' onClick={()=>{
                                InOutTime()
                               //window.location.reload()
                            }} className="btn btn-success">Check in</a>
                            

                            
                        }
                        
                    </div>
                </div>

                <div className="overflow-x-auto -mx-6 mt-4">
                    <div className="inline-block min-w-full align-middle">
                        <div className="overflow-hidden ">
                            <table
                                className="min-w-full divide-y divide-slate-100 table-fixed dark:divide-slate-700"

                            >
                                <thead className=" border-t border-slate-100 dark:border-slate-800" style={{ 'backgroundColor': 'rgb(179 235 232)' }}>

                                    <tr>
                                        {Header.map((column) => (
                                            <th scope="col" className=" table-th ">
                                                {column}
                                            </th>
                                        ))}
                                    </tr>

                                </thead>
                                <tbody

                                >


                                    {
                                        getEnroll.length == 0 ?
                                        <tr>No User Found</tr>
                                        :
                                        getEnroll.map((ele, i) => {
                                            return (
                                                <tr key={i}>
                                                    <td className="table-td">{ele.Name}</td>
                                                    <td className="table-td">{ele.Enrollment}</td>
                                                    <td className="table-td">{ele.Start_Date}</td>
                                                    <td className="table-td">{ele.End_Date}</td>   
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default KanbanPage;
