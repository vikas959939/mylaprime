import React, { useState, axios } from 'react'
import { useEffect } from 'react'
import { toast } from "react-toastify";


const Freeslots = ({locationCode, locationType, locationName}) => {

    const bays = []

    const [myBays, setMyBays] = useState(3)
    const [inputFeilds, setInputFeils] = useState([])

    for (let i = 1; i <= myBays; i++) {
        bays.push(`Bay ${i}`)
    }
    const halfhours = ['00:00', '00:30', '01:00', '01:30', '02:00', '02:30', '03:00', '03:30', '04:00', '04:30', '05:00', '05:30', '06:00', '06:30', '07:00', '07:30', '08:00', '08:30', '09:00', '09:30', '10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00', '22:30', '23:00', '23:30']

    const list = halfhours;
    const threePartIndex = Math.ceil(list.length / 4);

    const thirdPart = list.splice(-threePartIndex);
    const secondPart = list.splice(-threePartIndex);
    const fourthPart = list.splice(-threePartIndex);
    const firstPart = list;

    console.log(firstPart);  // [1, 2, 3]
    console.log(secondPart); // [4, 5, 6]
    console.log(thirdPart);  // [7, 8, 9]
    console.log(fourthPart);  // [7, 8, 9]

    return (
        <div>
            <div className='container-fluid bg-white p-3' style={{ 'borderRadius': '10px' }}>
                <div className='row'>
                    <div className='col-6'>
                        <div className='row'>
                            <form>
                                <div class="mb-3">
                                    <label class="form-label">Location Code:</label>
                                    <input type="text" value={locationCode} disabled class="form-control" />

                                </div>
                                <div class="mb-3">
                                    <label class="form-label">Location Name</label>
                                    <input type="text" value={locationName} disabled class="form-control" />
                                </div>


                            </form>
                        </div>
                    </div>

                    <div className='col-6'>
                        <form>
                            <div class="mb-3">
                                <label class="form-label">Location Type:</label>
                                <input type="text" value={locationType} disabled class="form-control" />
                            </div>

                        </form>


                    </div>
                </div>




                <div className=''>
                    <button onClick={() => {
                        setMyBays(myBays + 1)

                        setTimeout(() => {
                            toast.success(`Bay ${myBays + 1} Added`, {
                                position: "top-right",
                                autoClose: 1500,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                                progress: undefined,
                                theme: "light",
                            });
                        }, 500);

                    }} className='btn btn-success'>Add New Bay</button>

                    
                </div>




                <div className='row p-3 mt-4' style={{ 'backgroundColor': 'rgb(179 235 232)', 'textAlign': 'center' }}>
                    <div className='fw-bold'>List Of Bays</div>

                </div>

                {
                    bays.map((ele) => {
                        return (
                            <table className='table table-bordered mt-3' style={{ 'overflowX': 'scroll' }}>
                                <tbody>
                                    <tr>
                                        <th colSpan={13}>{ele}</th>

                                    </tr>
                                </tbody>

                                <tbody>
                                    <tr>
                                        <td style={{ 'width': '100px', 'paddingTop': '30px' }} rowSpan={5}>
                                            <tr><input className="form-check-input" type='checkbox' /> Fresh</tr>
                                            <br />
                                            <tr><input className="form-check-input" type='checkbox' /> Active</tr>
                                        </td>

                                    </tr>
                                    <tr>
                                        {
                                            firstPart.map((ele) => {
                                                return (
                                                    <td><input className="form-check-input" type='checkbox' style={{ "border": "1px solid rgba(137,142,148,1)" }}/> &nbsp; <br /> {ele}</td>
                                                )
                                            })
                                        }


                                    </tr>

                                    <tr>
                                        {
                                            secondPart.map((ele) => {
                                                return (
                                                    <td><input className="form-check-input" type='checkbox' style={{ "border": "1px solid rgba(137,142,148,1)" }}/> &nbsp; <br /> {ele}</td>
                                                )
                                            })
                                        }


                                    </tr>

                                    <tr>
                                        {
                                            thirdPart.map((ele) => {
                                                return (
                                                    <td><input className="form-check-input" type='checkbox' style={{ "border": "1px solid rgba(137,142,148,1)" }}/> &nbsp; <br />{ele}</td>
                                                )
                                            })
                                        }


                                    </tr>

                                    <tr>
                                        {
                                            fourthPart.map((ele) => {
                                                return (
                                                    <td><input className="form-check-input" type='checkbox' style={{ "border": "1px solid rgba(137,142,148,1)" }}/> &nbsp; <br />{ele}</td>
                                                )
                                            })
                                        }


                                    </tr>
                                </tbody>
                            </table>
                        )
                    })
                }



            </div>



        </div>
    )
}

export default Freeslots