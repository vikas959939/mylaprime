import React, { useState, useMemo, useEffect } from "react";
import Card from "@/components/ui/Card";
import Icon from "@/components/ui/Icon";
import { Link } from "react-router-dom";
import Select from "@/components/ui/Select";


import {
  useTable,
  useRowSelect,
  useSortBy,
  useGlobalFilter,
  usePagination,
} from "react-table";

// import GlobalFilter from "../table/react-tables/GlobalFilter";


import axios from "axios";

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


const IndeterminateCheckbox = React.forwardRef(
  ({ indeterminate, ...rest }, ref) => {
    const defaultRef = React.useRef();
    const resolvedRef = ref || defaultRef;

    React.useEffect(() => {
      resolvedRef.current.indeterminate = indeterminate;
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

const deliveryDays = ['SUN', 'MON', 'TUE', 'WED', 'FRI', 'SAT']
const deliverySlot = ['First-Quater', 'Second-Quater', 'Third-Quater', 'Fourth-Quater', 'Fifth-Quater', 'Sixth-Quater', 'Seventh-Quater', 'Eighth-Quater']
const deliverySlot2 = ['First-Quater', 'Second-Quater', 'Third-Quater', 'Fourth-Quater']
const deliveryTime2 = ['00:00 - 06:00', '06:00 - 12:00', '12:00 - 18:00', '18:00 - 00:00']
const deliveryTime = ['00:00 - 04:00', '04:00 - 08:00', '08:00 - 12:00', '12:00 - 16:00', '16:00 - 20:00', '20:00 - 00:00']

const location = ['Noida', 'Gurugram', 'Delhi', 'Banglore']


const Setupdata = ({setEnrollMentValue}) => {

  const [value3, setValue3] = useState("");

  const handleChange3 = (e) => {
    setValue3(e.target.value);
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

    state,


  } = tableInstance;



  const { globalFilter, pageIndex, pageSize } = state;
  const [getDeliveryDay, setDeliveryDay] = useState([])

  const [userinfo, setUserInfo] = useState({
    languages: [],
    response: [],
  });

  const handleChange = (e) => {

    const { value, checked } = e.target;
    const { languages } = userinfo;

    console.log(`${value} is ${checked} hello ticked`);


    if (checked) {
      setUserInfo({
        languages: [...languages, value],
        response: [...languages, value],
      });
    }


    else {
      setUserInfo({
        languages: languages.filter((e) => e !== value),
        response: languages.filter((e) => e !== value),
      });
    }
  }

  console.log(userinfo.languages)

  // getting slot time 

  const [userinfos, setUserInfos] = useState({
    languages: [],
    response: [],
  });

  const handleSlotTime = (e) => {

    const { value, checked } = e.target;
    const { languages } = userinfos;

    console.log(`${value} is ${checked} hello ticked`);

    const indexValue = deliverySlot.indexOf(value)
    const timeValue = deliveryTime[indexValue]
    console.log(timeValue, 'timeValue')

    if (checked) {
      setUserInfos({
        languages: [...languages, timeValue],
        response: [...languages, timeValue],
      });
    }


    else {
      setUserInfo({
        languages: languages.filter((e) => e !== timeValue),
        response: languages.filter((e) => e !== timeValue),
      });
    }
  }

  console.log(userinfos.languages)

  const [vendorCode, setVendorCode] = useState('aashish-V001')
  const [mylocation, setLocation] = useState('')
  const [leadDays, setLeadDays] = useState('')

  const uploadVendorData = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5555/vendorrouter', {
      vendorCode: vendorCode,
      LeadDays: leadDays,
      location: mylocation,
      preferedDay: userinfo.languages,
      preferedSlot: userinfos.languages

    }).then((res) => {
      console.log('data saves')
      console.log('data saved successfully')
      setTimeout(() => {
        window.location.reload()
      }, 500);

    })
  }

  const [getEnroll, setEnroll] = useState([])
  const [enrollvalue, setEnrollValue] = useState('') 

  const getData=()=>{
    axios.get('http://localhost:5555/enroll').then((res)=>{
      setEnroll(res.data)
    })
  }

  useEffect(() => {
    getData()
  }, [])

  console.log(getEnroll)

  const getDataWithValue = getEnroll.filter(ele=> ele.Enrollment === enrollvalue)
  return (
    <>
      <Card title="Attandence" noborder>

        <div className="row">
          <div className="col-md-4">

          </div>

          <div className="col-md-4">
            <form>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Enrollment Number</label>
                <input type="text" onChange={(e)=> setEnrollValue(e.target.value)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                  
              </div>

              <Link to='/kanban' style={{ 'backgroundColor': 'rgb(179 235 232)' }} onClick={()=>{
                setEnrollMentValue(enrollvalue)

              }}  class="btn btn">Submit</Link>
            </form>
          </div>

          <div className="col-md-4">

          </div>

          
        </div>



        


       

      </Card>
    </>
  )
}

export default Setupdata