import React, { useState, useMemo } from "react";
import Card from "@/components/ui/Card";
import Icon from "@/components/ui/Icon";
import { Link, useNavigate } from "react-router-dom";
import Select from "@/components/ui/Select";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { toast } from "react-toastify";


import {
  useTable,
  useRowSelect,
  useSortBy,
  useGlobalFilter,
  usePagination,
} from "react-table";
import { useEffect } from "react";

// import GlobalFilter from "../table/react-tables/GlobalFilter";

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
    label: "	PO Number",
    field: "po_number",
  },
  {
    label: "Po. Date",
    field: "po_date",
  },

  {
    label: "Delivery Location",
    field: "delivery_location",
  },
  {
    label: " Delivery Date",
    field: "delivery_date"
  }
];


const my_data = [
  {
    id: 1,
    po_number: "PO#509090",
    po_date: "31-Mar-23",
    delivery_location: "Ambient DC",
    delivery_date: "02-Apr-23"
  }
  ,
  {
    id: 2,
    po_number: "PO#509176",
    po_date: "01-Apr-23",
    delivery_location: "Ambient DC",
    delivery_date: "03-Apr-23"
  },
  {
    id: 3,
    po_number: "PO#509182",
    po_date: "02-Apr-23",
    delivery_location: "Frozen DC",
    delivery_date: "04-Apr-23"
  },

]

const COLUMNS = [

  {
    Header: "Po. Number",
    accessor: "po_number",
    Cell: (row) => {
      return <span>#{row?.cell?.value}</span>;
    },
  },


  {
    Header: "Po Date",
    accessor: "po_date",
    Cell: (row) => {
      return <span>{row?.cell?.value}</span>;
    },
  },
  {
    Header: "Delivery Location",
    accessor: "delivery_location",
    Cell: (row) => {
      return <span>{row?.cell?.value}</span>;
    },
  },
  {
    Header: "Delivery Date",
    accessor: "delivery_date",
    Cell: (row) => {
      return <span>{row?.cell?.value}</span>;
    },
  },

];



const ChatPage = ({ setPoItems, setPoLocation, setLocId, baseUrl, setPoItemDetails, setPoHeaders }) => {

  const Navigate = useNavigate()

  const [value, setValue] = useState("");
  const [value2, setValue2] = useState("");
  const [value3, setValue3] = useState("");
  const [value4, setValue4] = useState("")




  const [checked, setChecked] = useState(false)



  const [disableBttn, setDisableBttn] = useState('disable')
  const IndeterminateCheckbox = React.forwardRef(
    ({ indeterminate, ...rest }, ref) => {
      const defaultRef = React.useRef();
      const resolvedRef = ref || defaultRef;

      React.useEffect(() => {
        resolvedRef.current.indeterminate = indeterminate;
        console.log(indeterminate)

      }, [resolvedRef, indeterminate]);

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
              {/* <input type="checkbox" className="form-check-input" style={{ "border": "1px solid rgba(137,142,148,1)" }}/> */}
            </div>
          ),
          Cell: ({ row }) => (
            <div>
              <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />
              {/* <input type="checkbox" className="form-check-input" style={{ "border": "1px solid rgba(137,142,148,1)" }}/> */}
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

  //getPurshaseOrderHeaders

  const [getOrderDetail, setOrderDetail] = useState([])
  const [selectedBuid, setSelectedBuid] = useState([])

  const getLocationMasterAPI = async (Data) => {

    var config = {
      method: 'post',
      url: `${baseUrl}getPoHeaders`,

      headers: {
        'Authorization': "Bearer " + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJidUlkIjoiMTAxIiwic3ViIjoiamF2YSIsImV4cCI6MTY4MzAzOTMwMywiaWF0IjoxNjgzMDAzMzAzfQ.YKgIauq2Oxv1ImVANEmVf3lI_PriIUYwGf2tPo7omvE',
        'Content-Type': 'application/json'
      },


    };

    try {
      return axios(config).then((res) => {
        console.log(res.data, 'myData')
        setOrderDetail(res.data)
      })

    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getLocationMasterAPI()
  }, [])

  useEffect(() => {
    console.log(value, 'value')
    const BUID = getOrderDetail.filter(ele => ele.poDelLoc === value2)

    setSelectedBuid(BUID)
    console.log(BUID)

  }, [value2])

  //post PO number




  console.log(selectedBuid)




  // handling checkboxes in grid

  const [tableData, setTableData] = useState([])

  useEffect(() => {
    setTableData(my_data)
  }, [])

  const handleCheckboxes = () => {
    const { name, checked } = e.target;
    if (name === 'allSelect') {
      let tempUser = getOrderDetail.map((user) => {
        return { ...user, isChecked: checked }
      })
      setTableData(tempUser)
    }

    else {
      let tempUser = getOrderDetail.map((user) => {
        user.poValue === name ? { ...user, isChecked: checked } : user
      });
      setTableData(tempUser)
    }

  }

  const [userinfos, setUserInfos] = useState({
    languages: [],
    response: [],
  });

  const handleSlotTime = (e) => {

    const { value, checked } = e.target;
    const { languages } = userinfos;

    console.log(`${value} is ${checked} hello ticked`);


    const timeValue = value
    console.log(timeValue, 'timeValue')

    if (checked) {
      setUserInfos({
        languages: [...languages, timeValue],
        response: [...languages, timeValue],
      });
    }


    else {
      setUserInfos({
        languages: languages.filter((e) => e !== timeValue),
        response: languages.filter((e) => e !== timeValue),
      });
    }
  }

  const poNumber = userinfos.languages

  console.log(userinfos)

  console.log(poNumber, 'poNumber')
  let Obj = {}
  const myPoNumber = []
  for (let i = 0; i < poNumber.length; i++) {

    Obj['poValue'] = poNumber[i]
    myPoNumber.push(Obj)
  }
  console.log(myPoNumber)



  const postPONumber = async (Data) => {

    var config = {
      method: 'post',
      url: `${baseUrl}poNumber`,

      headers: {
        'Authorization': "Bearer " + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJidUlkIjoiMTAxIiwic3ViIjoiamF2YSIsImV4cCI6MTY4MzAzOTMwMywiaWF0IjoxNjgzMDAzMzAzfQ.YKgIauq2Oxv1ImVANEmVf3lI_PriIUYwGf2tPo7omvE',
        'Content-Type': 'application/json'
      },
      data: myPoNumber


    };

    try {
      return axios(config).then((res) => {
        console.log(res.data, 'getpoInfosss')
        setPoItems(res.data)
        setOrderDetail(res.data)
      })

    } catch (error) {
      console.error(error)
    }
  }

  console.log(userinfos.languages)


  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(startDate)
  const [name, setName] = useState('')
  const [aadhar, setAadhar] = useState('')
  const [enroll, setEnroll] = useState('')


  const uploadData = (e) => {
    e.preventDefault()
    axios.post('http://localhost:5555/enroll', {
      Name: name,
      Aadhar: aadhar,
      Start_Date: startDate.toDateString(),
      End_Date: endDate.toDateString(),
      Enrollment: enroll
    }).then((res) => {
      console.log(res.data, 'user registered')
      if(res.data.mssg == 'data saved successfully'){
        toast.success('User registered Scuccess', {
          position: "top-right",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
      });
      setTimeout(() => {
        window.location.reload()
      }, 1500);
        
      }
    }).catch((err)=>{
      console.log(err.message)
      if(err.message == 'Request failed with status code 422'){
        toast.error('Enrollment Number Already Registered', {
          position: "top-right",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
      });
      setTimeout(() => {
        window.location.reload()
      }, 1500);
      }
    })
  }


  return (
    <>
      <Card title="Enroll Student" noborder>

        <form>
          <div class="mb-3">
            <label class="form-label">Name</label>
            <input type="text" onChange={(e) => setName(e.target.value)} class="form-control" />

          </div>
          <div class="mb-3">
            <label class="form-label">Aadhar Number</label>
            <input type="number" onChange={(e) => setAadhar(e.target.value)} class="form-control" />
          </div>

          <div class="mb-3">
            <label class="form-label">Start Date</label>
            <DatePicker selected={startDate} className="form-control" dateFormat="MMMM d, yyyy" onChange={(date) => setStartDate(date)} />
          </div>

          <div class="mb-3">
            <label class="form-label">End Date</label>
            <DatePicker selected={endDate} className="form-control" dateFormat="MMMM d, yyyy" onChange={(date) => setEndDate(date)} />
          </div>

          <div class="mb-3">
            <label class="form-label">Enrollment Number</label>
            <input type="text" onChange={(e) => setEnroll(e.target.value)} class="form-control" />
          </div>

          <button type="submit" onClick={uploadData} class="btn btn-primary">Submit</button>
      </form>

    </Card >
    </>
  )
}

export default ChatPage