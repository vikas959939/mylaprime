import React, { useState } from 'react'
import Card from "@/components/ui/Card";
import Select from "@/components/ui/Select";
import { Link } from "react-router-dom";

const Suplierlogistics = () => {
    const [value, setValue] = useState("")


const timeSlots = ['00:00 - 03:00', '03:00 - 06:00', '06:00 - 09:00', '09:00 - 12:00', '12:00 - 15:00', '15:00 - 18:00', '18:00 - 21:00', '21:00 - 00:00']


    const columns = [
        {
            label: "Mon",
            field: "mon",
        },
        {
            label: "Tue",
            field: "tue",
        },

        {
            label: "Wed",
            field: "wed",
        },
        {
            label: "thu",
            field: "thu",
        },

        {
            label: "fri",
            field: "fri",
        },
        {
            label: "Sat",
            field: "sat",
        }, {
            label: "Sun",
            field: "sun",
        },
    ];
    return (
        <div>
            <Card title="Create Supplier Logistic" noborder>
                <div className='row'>


                    <div className='col-md-6 col-sm-12'>
                        <div className="space-y-3 mb-5 fw-bolder fs-5"  >
                            <form>
                                <div class="mb-3">
                                    <label class="form-label">Location</label>
                                    <input type="text" class="form-control" />

                                </div>

                                <div class="mb-3">
                                    <label class="form-label">Lead Days</label>
                                    <input type="number" min={0} class="form-control w-40" />

                                </div>

                            </form>
                        </div>
                    </div>

                    <div className='col-md-6 col-sm-12'>
                        <div class="mb-3">
                            <label class="form-label">Supplier</label>
                            <input type="text" class="form-control" />
                        </div>
                    </div>
                </div>



                <Card border >
                    <div className="space-y-3" >
                        <div className='row mb-3' >



                            <div className='col-md-4'>
                                {value}
                            </div>


                            <div className='col-6'>

                            </div>

                            <div className='col-1'>

                            </div>

                        </div>



                        <div className='row' >
                            <div className='overflow-auto'>
                                <table className="min-w-full divide-y divide-slate-100  table-bordered" border={2}>
                                    <thead className=" border-t border-slate-100 dark:border-slate-800 " style={{ backgroundColor: "rgba(36, 219, 225, 0.32)" }} >
                                        <tr>
                                            <th scope="col" className=" table-th ">

                                            </th>
                                            {columns.map((column, i) => (
                                                <th key={i} scope="col" className=" table-th">
                                                    {column.label}
                                                </th>
                                            ))}

                                        </tr>


                                    </thead>
                                    <tbody className="bg-white divide-y divide-slate-100 dark:bg-slate-800 dark:divide-slate-700 ">

                                        <tr >

                                            <td className=" table-th">
                                                <p>Potential Delivery Days</p>

                                            </td>

                                            {columns.map((column, i) => (
                                                <td className="table-td">
                                                    <div className="mb-3 form-check">
                                                        <input type="checkbox" className="form-check-input" style={{ "border": "1px solid rgba(137,142,148,1)" }} />
                                                    </div>
                                                </td>
                                            ))}




                                        </tr>


                                        <tr style={{ backgroundColor: "rgba(36, 219, 225, 0.32)" }} >
                                            <th></th>
                                            {columns.map((column, i) => (
                                                <th key={i} scope="col" className=" table-th ">
                                                    {column.label}
                                                </th>
                                            ))}
                                        </tr>


                                        <tr >

                                            <td className=" table-th">Potential Order Days</td>
                                            {columns.map((column, i) => (
                                                <td className="table-td">
                                                    <div className="mb-3 form-check">
                                                        <input type="checkbox" style={{ "border": "1px solid rgba(137,142,148,1)" }} className="form-check-input" />
                                                    </div>
                                                </td>
                                            ))}


                                        </tr>

                                        


                                    </tbody>
                                </table>


                                <br/>
                                <table className=" min-w-full divide-y divide-slate-100 table-fixed dark:divide-slate-700  table-bordered">
                                    
                                    <tbody className="bg-white divide-y divide-slate-100 dark:bg-slate-800 dark:divide-slate-700 ">

                                        <tr >

                                            <td className=" table-th">Time Slot</td>
                                            {timeSlots.map((column, i) => (
                                                <td className="table-td">
                                                    <div className="mb-3 form-check">
                                                        <input type="checkbox" style={{ "border": "1px solid rgba(137,142,148,1)" }} className="form-check-input" /> {column}
                                                    </div>
                                                </td>
                                            ))}


                                        </tr>

                                        


                                    </tbody>
                                </table>
                            </div>

                            <div className='row'>

                                <div className='col-md-4'>

                                </div>

                                <div className='col-md-4 col-sm-12 mt-4' style={{ 'textAlign': 'center' }}>
                                    <Link to='#' className='btn btn ' style={{ 'backgroundColor': '#b3f5f2' }}>Submit</Link>
                                </div>

                                <div className='col-md-4'>

                                </div>

                            </div>





                        </div>
                    </div>
                </Card>

            </Card>
        </div>
    )
}

export default Suplierlogistics