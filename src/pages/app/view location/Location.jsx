import React, { useState, useMemo } from "react";
import Card from "@/components/ui/Card";
import Icon from "@/components/ui/Icon";
import { Link, useNavigate } from "react-router-dom";
import Select from "@/components/ui/Select";
import Datepicker from "react-tailwindcss-datepicker";
import axios from "axios";


import {
  useTable,
  useRowSelect,
  useSortBy,
  useGlobalFilter,
  usePagination,
} from "react-table";

// import GlobalFilter from "../table/react-tables/GlobalFilter";

import GlobalFilter from "../../table/react-tables/GlobalFilter";
import { useEffect } from "react";
const options = [
  {
    value: "PO#509090",
    label: "PO#509090",
  },
  {
    value: "PO#509176",
    label: "PO#509176",
  },
  {
    value: "PO#509182",
    label: "PO#509182",
  },
];

const option2 = [
  {
    value: "Ambient DC",
    label: "Ambient DC",
  },
  {
    value: "Frozen DC",
    label: "Frozen DC",
  },

]

const option3 = [
  {
    value: "	31-Mar-23",
    label: "01-Apr-23",
  },
  {
    value: "01-Apr-23",
    label: "01-Apr-23"
  },
  {
    value: " 02-Apr-23",
    label: " 02-Apr-23"
  }
]

const option4 = [
  {
    value: '02-Apr-23',
    label: "02-Apr-23"
  },
  {
    value: '	03-Apr-23',
    label: "	03-Apr-23"
  },
  {
    value: '04-Apr-23',
    label: "04-Apr-23"
  }
]


const Columns = [
  {
    label: "Location Code",
    field: "Location_Code",
  },
  {
    label: "Name",
    field: "Name",
  },

  {
    label: "Address",
    field: "Address",
  },
  {
    label: " Start Date",
    field: "Start_Date"
  },

  {
    label: " Bays Exists",
    field: "Bays_Exists"
  },

  
];




const COLUMNS = [

  {
    Header: "Location Code",
    accessor: "Location_Code",
    Cell: (row) => {
      return <span>{row?.cell?.value}</span>;
    },
  },


  {
    Header: "Name",
    accessor: "Name",
    Cell: (row) => {
      return <span>{row?.cell?.value}</span>;
    },
  },
  {
    Header: "Address",
    accessor: "Address",
    Cell: (row) => {
      return <span>{row?.cell?.value}</span>;
    },
  },
  {
    Header: "Start Date",
    accessor: "Start_Date",
    Cell: (row) => {
      return <span>{row?.cell?.value}</span>;
    },
  },

  {
    Header: "Bays Exists",
    accessor: "Bays_Exists",
    Cell: (row) => {
      return <span>{row?.cell?.value}</span>;
    },
  },

];



const Location = ({setLocationCode, setLocationName, setLocationType}) => {

  //New Location Component

  const [getLocationTypeValue, setLocationTypeValue] = useState('')
  const [mylocation, setLocation] = useState('')
  const [locationName, setLocationNam] = useState('')
  const [getLocationMaster, setLocationMaster] = useState([])
  const [getLocationTypeMaster, setLocationTypeMaster] = useState([])
  const [tableChecked, setTableChecked] = useState([])

  setLocationCode(mylocation)
  setLocationType(getLocationTypeValue)
  setLocationName(locationName)

  console.log(tableChecked, 'tableChecked')
  const locationCodes = [
    {
      location:'Delhi',
      locationCode:'#Dl123',
      locationType:'WH1 - S002',
      locationNumber : ['L2', 'L3', 'L12']
    },

    {
      location:'Delhi',
      locationCode:'#Dl456',
      locationType:'WH1 - S001',
      locationNumber : ['L1', 'L4', 'L7']
    },

    {
      location:'Bangalore',
      locationCode:'#Bl123',
      locationType:'WH1 - S003',
      locationNumber : ['L3', 'L4', 'L5']
    },

    {
      location:'Bangalore',
      locationCode:'#BL456',
      locationType:'WH2 - S001',
      locationNumber : ['L3', 'L4', 'L5']
    },

    {
      location:'Bangalore',
      locationCode:'#BL456',
      locationType:'WH2 - S001',
      locationNumber : ['L12', 'L15', 'L16']
    },
  
    {
      location:'noida',
      locationCode:'#Noida456',
      locationType:'WH4 - S003',
      locationNumber : ['L1', 'L2', 'L3']
    },
  ]

  const locationNumber = ['L1', 'L2', 'L3']

  const locationCod = locationCodes.filter(ele=> ele.locationType === getLocationTypeValue)
  const getLocationNumber = locationCodes.filter(ele=> ele.locationCode === mylocation)

  console.log(locationCod, 'locationCod')

  //getting location master Api

  const getLocationAPI = async (Data) => {

    var config = {
        method: 'get',
        url: `http://17.224.91.181:8082/getLocationMaster`,

        headers: {
            'Authorization': "Bearer " + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJidUlkIjoiMTAxIiwic3ViIjoiamF2YSIsImV4cCI6MTY4MjYxNDIxNiwiaWF0IjoxNjgyNTc4MjE2fQ.N0rwGpIMn7YdsTkIBIrWK6a8Dn_cxil-eRGwPS7_xw4',
            'Content-Type': 'application/json'
        },
        

    };

    try {
        return axios(config).then((res) => {
            console.log(res.data, 'myData')
            setLocationMaster(res.data)
        })

    } catch (error) {
        console.error(error)
    }
}

const getLocationMasterAPI = async (Data) => {

  var config = {
      method: 'get',
      url: `http://17.224.91.181:8082/getLocationTypeMaster`,

      headers: {
          'Authorization': "Bearer " + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJidUlkIjoiMTAxIiwic3ViIjoiamF2YSIsImV4cCI6MTY4MjYxNDIxNiwiaWF0IjoxNjgyNTc4MjE2fQ.N0rwGpIMn7YdsTkIBIrWK6a8Dn_cxil-eRGwPS7_xw4',
          'Content-Type': 'application/json'
      },
      

  };

  try {
      return axios(config).then((res) => {
          console.log(res.data, 'myData')
          setLocationTypeMaster(res.data)
      })

  } catch (error) {
      console.error(error)
  }
}

useEffect(() => {
  getLocationAPI()
  getLocationMasterAPI()
}, [])

console.log(getLocationMaster, 'getLocationMaster')
console.log(getLocationTypeMaster, 'getLocationTypeMaster')

const getLocationCode = getLocationMaster.filter(ele=> ele.destType === getLocationTypeValue)
const getDetailsLocMas = getLocationMaster.filter(ele=> ele.locTypeMst.locTypeCode === mylocation)

console.log(getDetailsLocMas, 'getDetailsLocMas')

let my_data = [

  // {
  //   id: 2,
  //   po_number: "PO#509176",
  //   po_date: "01-Apr-23",
  //   delivery_location: "Ambient DC",
  //   delivery_date: "03-Apr-23"
  // },
  // {
  //   id: 3,
  //   po_number: "PO#509182",
  //   po_date: "02-Apr-23",
  //   delivery_location: "Frozen DC",
  //   delivery_date: "04-Apr-23"
  // },

]

for(let i = 0; i<=getDetailsLocMas.length - 1; i++){
  let obj = {}

  obj['Location_Code'] = getDetailsLocMas[i].locTypeMst.locTypeCode
  obj['Name'] = getDetailsLocMas[i].locTypeMst.locTypeName
  obj['Address'] = getDetailsLocMas[i].address1
  my_data.push(obj)
}

console.log(my_data, 'my_data')

  

  const Navigate = useNavigate()

  const [value, setValue] = useState(new Date());
  const [value2, setValue2] = useState("");
  const [value3, setValue3] = useState("");
  const [value4, setValue4] = useState("")


  console.log(value)

  const [disableBttn, setDisableBttn] = useState(true)
const IndeterminateCheckbox = React.forwardRef(
  ({ indeterminate, ...rest }, ref) => {
    const defaultRef = React.useRef();
    const resolvedRef = ref || defaultRef;
    
    React.useEffect(() => {
      resolvedRef.current.indeterminate = indeterminate;
      console.log(indeterminate)

    }, [resolvedRef, indeterminate]);

    indeterminate ? setDisableBttn(false) : null
    

    return (
      <>
        <input
          type="checkbox"
          ref={resolvedRef}
          {...rest}
          className="table-checkbox"
          
        />
      </>
    );
  }
);

console.log(disableBttn)


  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleChange2 = (e) => {
    setValue2(e.target.value);
  };

  const handleChange3 = (e) => {
    setValue3(e.target.value);
  }

  const handleChange4 = (e) => {
    setValue4(e.target.value);
  }

  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => my_data, []);


  const tableInstance = useTable(
    {
      columns,
      data,
    },

    useGlobalFilter,
    useSortBy,
    usePagination,
    useRowSelect,

    (hooks) => {
      hooks.visibleColumns.push((columns) => [
        {
          id: "selection",
          Header: ({ getToggleAllRowsSelectedProps }) => (
            <div>
              <IndeterminateCheckbox {...getToggleAllRowsSelectedProps()} />
            </div>
          ),
          Cell: ({ row }) => (
            <div>
              <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />
            </div>
          ),
        },
        ...columns,
      ]);
    }
  );
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    footerGroups,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    state,
    gotoPage,
    pageCount,
    setPageSize,
    setGlobalFilter,
    prepareRow,
  } = tableInstance;

  const { globalFilter, pageIndex, pageSize } = state;
  

  const handleCheckBox=(e)=>{
    console.log(e, 'on checked')
  }
  
  

  return (
    <>
      <Card title="View Location Data" noborder>

      <div className=" grid xl:grid-cols-2 grid-cols-1 gap-5">
          <div className="row">

            <form>
              <div class="mb-3">
                <label className="form-label">Location code </label>
                <Select
                  placeholder="Select Location Code"
                  options= {getLocationCode.map(ele=> ele.locTypeMst.locTypeCode)}
                  onChange={(e) => setLocation(e.target.value)}
                  value={mylocation}
                />

              </div>

              <div className="mb-3">
                <label className="form-label">Location Type</label>
                <Select
                  placeholder="Select Location Type"
                  options={getLocationTypeMaster.map(ele=> ele.locType)}
                  onChange={(e) => setLocationTypeValue(e.target.value)}
                  value={getLocationTypeValue}
                />
              </div>

            </form>



          </div>
          <form>
            <div class="mb-3">
              <label className="form-label">Location Name</label>
              <Select
                placeholder="Select Location Name"
                options={getLocationCode.map(ele=> ele.locTypeMst.locTypeName)}
                onChange={(e) => setLocationNam(e.target.value)}
                value={mylocation}
              />

            </div>

            

          </form>

        </div>



        <div className="overflow-x-auto -mx-6">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden ">
              

              <table className="table mt-4 p-4 table-bordered">
                  <thead className=" border-t border-slate-100 dark:border-slate-800" style={{'backgroundColor':'rgb(179 235 232)'}}>
                      <tr className="">
                        <th></th>
                        <th>Location Code</th>
                        <th>Name</th>
                        <th>Address</th>
                        
                        <th>Bays Exists</th>
                      </tr>
                  </thead>

                  <tbody>
                    {
                      my_data.length == 0 ?
                      <tr style={{'padding':'20px', 'fontSize':'20px'}}>No records Found</tr>
                      :
                      my_data.map((ele, i)=>{
                        return(
                          <tr key={i}>
                            <td><input className="form-check-input" onChange={()=> setTableChecked(ele)} type="checkbox"/></td>
                            <td>{ele.Location_Code}</td>
                            <td>{ele.Name}</td>
                            <td>{ele.Address}</td>
                          </tr>
                        )
                      })
                    }
                  </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="md:flex md:space-y-0 space-y-5 justify-between mt-6 items-center">
          <div className=" flex items-center space-x-3 rtl:space-x-reverse">
            <span className=" flex space-x-2  rtl:space-x-reverse items-center">
              <span className=" text-sm font-medium text-slate-600 dark:text-slate-300">
                Go
              </span>
              <span>
                <input
                  type="number"
                  className=" form-control py-2"
                  defaultValue={pageIndex + 1}
                  onChange={(e) => {
                    const pageNumber = e.target.value
                      ? Number(e.target.value) - 1
                      : 0;
                    gotoPage(pageNumber);
                  }}
                  style={{ width: "50px" }}
                />
              </span>
            </span>
            <span className="text-sm font-medium text-slate-600 dark:text-slate-300">
              Page{" "}
              <span>
                {pageIndex + 1} of {pageOptions.length}
              </span>
            </span>
          </div>
          <ul className="flex items-center  space-x-3  rtl:space-x-reverse">
            <li className="text-xl leading-4 text-slate-900 dark:text-white rtl:rotate-180">
              <button
                className={` ${!canPreviousPage ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                onClick={() => previousPage()}
                disabled={!canPreviousPage}
              >
                <Icon icon="heroicons-outline:chevron-left" />
              </button>
            </li>
            {pageOptions.map((page, pageIdx) => (
              <li key={pageIdx}>
                <button
                  href="#"
                  aria-current="page"
                  className={` ${pageIdx === pageIndex
                    ? "bg-slate-900 dark:bg-slate-600  dark:text-slate-200 text-white font-medium "
                    : "bg-slate-100 dark:bg-slate-700 dark:text-slate-400 text-slate-900  font-normal  "
                    }    text-sm rounded leading-[16px] flex h-6 w-6 items-center justify-center transition-all duration-150`}
                  onClick={() => gotoPage(pageIdx)}
                >
                  {page + 1}
                </button>
              </li>
            ))}
            <li className="text-xl leading-4 text-slate-900 dark:text-white rtl:rotate-180">
              <button
                className={` ${!canNextPage ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                onClick={() => nextPage()}
                disabled={!canNextPage}
              >
                <Icon icon="heroicons-outline:chevron-right" />
              </button>
            </li>
          </ul>
        </div>


        <div className='row' >
          <div className='col'>

          </div>

          <div className='col mt-3' style={{ 'textAlign': 'center' }}>
            <div className="row">
              <div className="col">
                <Link to='/freeslots'  style={{'backgroundColor':'rgb(179 235 232)'}} className='btn btn' >View Detail</Link>&nbsp;
              </div>

              
            </div>


          </div>

          <div className='col'>

          </div>


        </div>

      </Card>
    </>
  )
}

export default Location