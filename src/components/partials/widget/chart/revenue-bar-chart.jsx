import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import useDarkMode from "@/hooks/useDarkMode";
import useRtl from "@/hooks/useRtl";

const RevenueBarChart = ({ height = 400, getDate, setGroupChartData }) => {
  const [currDate, setCurrDate] = useState(new Date())
  const [isDark] = useDarkMode();
  const [isRtl] = useRtl();



  const myDates = getDate.startDate
  const myEndDate = getDate.endDate

  function formatDate(string) {
    var options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(string);
  }

  var dateString = myDates
  var endDateString = myEndDate
  let myNewDatee = formatDate(dateString);
  const myEndDatee = formatDate(endDateString)

  const [checkstartDate , setStartDate] = useState(formatDate(dateString))
  const [checkendDate, setEndDate] = useState(formatDate(endDateString))

  const curDate = new Date().setDate(new Date().getDate() + 6)
  let todayDate = new Date()
  const currEndDate = (new Date(curDate))
  
  console.log(checkstartDate , 'cheking dates')
  console.log( checkendDate , 'cheking end dates')


  console.log(myDates)

  
  const categories = []

  if(myDates == undefined){
    while(todayDate <= curDate){
      categories.push(todayDate.toDateString())

      let incDate = todayDate.setDate(todayDate.getDate() + 1)
      todayDate = new Date(incDate)
    }
  }else{
    while(myNewDatee <= myEndDatee) {
      console.log(myNewDatee.toDateString())
      categories.push(myNewDatee.toDateString())
  
      let incDate = myNewDatee.setDate(myNewDatee.getDate() + 1)
      myNewDatee = new Date(incDate)
      
    }
  }

  const barData = [
    {
      name: "Open-Order Purchase",
      data: 20,
      date: 'Wed Apr 19 2023'
    },

    {
      name: "Open-Order Purchase",
      data: 14,
      date: 'Thu Apr 20 2023'
    },

    {
      name: "Open-Order Purchase",
      data: 5,
      date: 'Fri Apr 21 2023'
    },

    {
      name: "Open-Order Purchase",
      data: 7,
      date: 'Sat Apr 22 2023'
    },

    {
      name: "Open-Order Purchase",
      data: 10,
      date: 'Sun Apr 23 2023'
    },

    {
      name: "Open-Order Purchase",
      data: 12,
      date: 'Mon Apr 24 2023'
    },

    {
      name: "Open-Order Purchase",
      data: 17,
      date: 'Tue Apr 25 2023'
    },

    {
      name: "Open-Order Purchase",
      data: 17,
      date: 'Wed Apr 26 2023'
    },

    {
      name: "Open-Order Purchase",
      data: 17,
      date: 'Thu Apr 27 2023'
    },

    {
      name: "Open-Order Purchase",
      data: 17,
      date: 'Fri Apr 28 2023'
    },

    {
      name: "Open-Order Purchase",
      data: 17,
      date: 'Sat Apr 29 2023'
    },

    {
      name: "Open-Order Purchase",
      data: 17,
      date: 'Sun Apr 30 2023'
    },

    {
      name: "Open-Order Purchase",
      data: 17,
      date: 'Mon May 01 2023'
    },

    {
      name: "Open-Order Purchase",
      data: 17,
      date: 'Tue May 02 2023'
    },

    {
      name: "Open-Order Purchase",
      data: 17,
      date: 'Wed May 03 2023'
    },

    {
      name: "Open-Order Purchase",
      data: 17,
      date: 'Thu May 04 2023'
    },

    {
      name: "Open-Order Purchase",
      data: 17,
      date: 'Fri May 05 2023'
    },

    {
      name: "Open-Order Purchase",
      data: 17,
      date: 'Sat May 06 2023'
    },

    {
      name: "Open-Order Purchase",
      data: 17,
      date: 'Sun May 07 2023'
    },

    {
      name: "Open-Order Purchase",
      data: 17,
      date: 'Mon May 08 2023'
    },

    {
      name: "Open-Order Purchase",
      data: 17,
      date: 'Tue May 09 2023'
    },

    {
      name: "Open-Order Purchase",
      data: 17,
      date: 'Wed May 10 2023'
    },

    {
      name: "Open-Order Purchase",
      data: 17,
      date: 'Thu May 11 2023'
    },

    {
      name: "Open-Order Purchase",
      data: 17,
      date: 'Fri May 12 2023'
    },

    {
      name: "Open-Order Purchase",
      data: 17,
      date: 'Sat May 13 2023'
    },

    {
      name: "Open-Order Purchase",
      data: 17,
      date: 'Sun May 14 2023'
    },

    {
      name: "Open-Order Purchase",
      data: 17,
      date: 'Mon May 15 2023'
    },

    {
      name: "Open-Order Purchase",
      data: 17,
      date: 'Tue May 16 2023'
    },
    

    {
      name: "Schedule Delivery Appointments",
      data: 14,
      date: 'Wed Apr 19 2023'
    },

    {
      name: "Schedule Delivery Appointments",
      data: 17,
      date: 'Thu Apr 20 2023'
    },

    {
      name: "Schedule Delivery Appointments",
      data: 12,
      date: 'Fri Apr 21 2023'
    },

    {
      name: "Schedule Delivery Appointments",
      data: 17,
      date: 'Sat Apr 22 2023'
    },

    {
      name: "Schedule Delivery Appointments",
      data: 12,
      date: 'Sun Apr 23 2023'
    },

    {
      name: "Schedule Delivery Appointments",
      data: 18,
      date: 'Mon Apr 24 2023'
    },

    {
      name: "Schedule Delivery Appointments",
      data: 20,
      date: 'Tue Apr 25 2023'
    },

    {
      name: "Schedule Delivery Appointments",
      data: 20,
      date: 'Wed Apr 26 2023'
    },

    {
      name: "Schedule Delivery Appointments",
      data: 20,
      date: 'Thu Apr 27 2023'
    },

    {
      name: "Schedule Delivery Appointments",
      data: 20,
      date: 'Fri Apr 28 2023'
    },

    {
      name: "Schedule Delivery Appointments",
      data: 20,
      date: 'Sat Apr 29 2023'
    },

    {
      name: "Schedule Delivery Appointments",
      data: 20,
      date: 'Sun Apr 30 2023'
    },

    {
      name: "Schedule Delivery Appointments",
      data: 20,
      date: 'Mon May 01 2023'
    },

    {
      name: "Schedule Delivery Appointments",
      data: 20,
      date: 'Tue May 02 2023'
    },

    {
      name: "Schedule Delivery Appointments",
      data: 20,
      date: 'Wed May 03 2023'
    },

    {
      name: "Schedule Delivery Appointments",
      data: 20,
      date: 'Thu May 04 2023'
    },

    {
      name: "Schedule Delivery Appointments",
      data: 20,
      date: 'Fri May 05 2023'
    },

    {
      name: "Schedule Delivery Appointments",
      data: 20,
      date: 'Sat May 06 2023'
    },

    {
      name: "Schedule Delivery Appointments",
      data: 20,
      date: 'Sun May 07 2023'
    },

    {
      name: "Schedule Delivery Appointments",
      data: 20,
      date: 'Mon May 08 2023'
    },

    {
      name: "Schedule Delivery Appointments",
      data: 20,
      date: 'Tue May 09 2023'
    },

    {
      name: "Schedule Delivery Appointments",
      data: 20,
      date: 'Wed May 10 2023'
    },

    {
      name: "Schedule Delivery Appointments",
      data: 20,
      date: 'Thu May 11 2023'
    },

    {
      name: "Schedule Delivery Appointments",
      data: 20,
      date: 'Fri May 12 2023'
    },

    {
      name: "Schedule Delivery Appointments",
      data: 20,
      date: 'Sun May 14 2023'
    },

    {
      name: "Schedule Delivery Appointments",
      data: 20,
      date: 'Mon May 15 2023'
    },

    

    {
      name: "Requested Appointment Not Approved",
      data: 14,
      date: 'Wed Apr 19 2023'
    },

    {
      name: "Requested Appointment Not Approved",
      data: 17,
      date: 'Thu Apr 20 2023'
    },

    {
      name: "Requested Appointment Not Approved",
      data: 12,
      date: 'Fri Apr 21 2023'
    },

    {
      name: "Requested Appointment Not Approved",
      data: 17,
      date: 'Sat Apr 22 2023'
    },

    {
      name: "Requested Appointment Not Approved",
      data: 12,
      date: 'Sun Apr 23 2023'
    },

    {
      name: "Requested Appointment Not Approved",
      data: 18,
      date: 'Mon Apr 24 2023'
    },

    {
      name: "Requested Appointment Not Approved",
      data: 20,
      date: 'Tue Apr 25 2023'
    },

    {
      name: "Requested Appointment Not Approved",
      data: 20,
      date: 'Wed Apr 26 2023'
    },

    {
      name: "Requested Appointment Not Approved",
      data: 20,
      date: 'Thu Apr 27 2023'
    },

    {
      name: "Requested Appointment Not Approved",
      data: 20,
      date: 'Fri Apr 28 2023'
    },

    {
      name: "Requested Appointment Not Approved",
      data: 20,
      date: 'Sat Apr 29 2023'
    },

    {
      name: "Requested Appointment Not Approved",
      data: 20,
      date: 'Sun Apr 30 2023'
    },

    {
      name: "Requested Appointment Not Approved",
      data: 20,
      date: 'Mon May 01 2023'
    },

    {
      name: "Requested Appointment Not Approved",
      data: 20,
      date: 'Tue May 02 2023'
    },

    {
      name: "Requested Appointment Not Approved",
      data: 20,
      date: 'Wed May 03 2023'
    },

    {
      name: "Requested Appointment Not Approved",
      data: 20,
      date: 'Thu May 04 2023'
    },

    {
      name: "Requested Appointment Not Approved",
      data: 20,
      date: 'Fri May 05 2023'
    },

    {
      name: "Requested Appointment Not Approved",
      data: 20,
      date: 'Sat May 06 2023'
    },

    {
      name: "Requested Appointment Not Approved",
      data: 20,
      date: 'Sun May 07 2023'
    },

    {
      name: "Requested Appointment Not Approved",
      data: 20,
      date: 'Mon May 08 2023'
    },

    {
      name: "Requested Appointment Not Approved",
      data: 20,
      date: 'Tue May 09 2023'
    },

    {
      name: "Requested Appointment Not Approved",
      data: 20,
      date: 'Wed May 10 2023'
    },

    {
      name: "Requested Appointment Not Approved",
      data: 20,
      date: 'Thu May 11 2023'
    },

    {
      name: "Requested Appointment Not Approved",
      data: 20,
      date: 'Fri May 12 2023'
    },

    {
      name: "Requested Appointment Not Approved",
      data: 20,
      date: 'Mon May 15 2023'
    },


  ]

  const barGraph = barData.filter((ele) => ele.name === 'Open-Order Purchase' && categories.find(el=> el === ele.date))
  const barGraph2 = barData.filter((ele) => ele.name === 'Schedule Delivery Appointments' && categories.find(el=> el === ele.date))
  const barGraph3 = barData.filter((ele) => ele.name === 'Requested Appointment Not Approved' && categories.find(el=> el === ele.date))

  let Open_Order_Purchase = 0;
  let Schedule_Delivery = 0;
  let Requested_Appointment = 0;


  for(let i = 0; i<= barGraph.length-1; i++){
    Open_Order_Purchase = barGraph[i].data + Open_Order_Purchase
  }

  for(let i = 0; i<= barGraph2.length-1; i++){
    Schedule_Delivery = barGraph2[i].data + Schedule_Delivery
  }

  for(let i = 0; i<= barGraph3.length-1; i++){
    Requested_Appointment = barGraph2[i].data + Requested_Appointment
  }
  console.log(Open_Order_Purchase)
  console.log(Schedule_Delivery)
  console.log(Requested_Appointment)

  useEffect(() => {
    setGroupChartData([Open_Order_Purchase, Schedule_Delivery, Requested_Appointment])
  }, [myDates])
  
  

  const series = [
    {
      name: "Open-Order Purchase",
      data: barGraph.map(ele=> ele.data)
      //data: [12,43,56,45,67]
    },
    {
      name: "Schedule Delivery Appointments",
      data: barGraph2.map(ele=> ele.data)
    },
    {
      name: "Requested Appointment Not Approved",
      data: barGraph3.map(ele=> ele.data)
    },
  ];
  const options = {

    plotOptions: {
      bar: {
        horizontal: false,
        endingShape: "rounded",
        columnWidth: "45%",
      },
    },
    legend: {
      show: true,
      position: "top",
      horizontalAlign: "right",
      fontSize: "12px",
      fontFamily: "Inter",
      offsetY: -30,
      markers: {
        width: 8,
        height: 8,
        offsetY: -1,
        offsetX: -5,
        radius: 12,
      },
      labels: {
        colors: isDark ? "#CBD5E1" : "#475569",
      },
      itemMargin: {
        horizontal: 18,
        vertical: 0,
      },
    },
    title: {
      text: "AVIS",
      align: "left",

      offsetX: isRtl ? "0%" : 0,
      offsetY: 13,
      floating: false,
      style: {
        fontSize: "20px",
        fontWeight: "500",
        fontFamily: "Inter",
        color: isDark ? "#fff" : "#0f172a",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    yaxis: {
      opposite: isRtl ? true : false,
      labels: {
        style: {
          colors: isDark ? "#CBD5E1" : "#475569",
          fontFamily: "Inter",
        },
      },
    },
    xaxis: {
      categories,
      labels: {
        style: {
          colors: isDark ? "#CBD5E1" : "#475569",
          fontFamily: "Inter",
        },
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },

    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return val;
        },
      },
    },
    colors: ["#4669FA", "#0CE7FA", "#FA916B"],
    grid: {
      show: true,
      borderColor: isDark ? "#334155" : "#E2E8F0",
      strokeDashArray: 10,
      position: "back",
    },
    
  };
  return (
    <div style={{'overflow':'scroll'}}>
      <Chart options={options} series={series} type="bar" height={height} />
    </div>
  );
};

export default RevenueBarChart;