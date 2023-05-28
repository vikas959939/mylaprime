import React, {useState, useEffect} from "react";
import Chart from "react-apexcharts";
import useDarkMode from "@/hooks/useDarkMode";
import useWidth from "@/hooks/useWidth";

const RadialsChart = ({getDate, groupChartData}) => {

  const [myDate, setMyDate] = useState('')
  const gettingDate = getDate.startDate
  
  //console.log(gettingDate , 'radial component')

  function formatDate(string) {
    var options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(string);
  }
  var dateString = gettingDate
  const myNewDatee = formatDate(dateString);
  const date = myNewDatee.toDateString()

  //date === 'Invalid Date' ? setMyDate(new Date()) : setMyDate(date)
  
  console.log(myDate, 'radial component')


  console.log(groupChartData, 'radial chart')

  const [isDark] = useDarkMode();
  const { width, breakpoints } = useWidth();
  //const series = [44, 55, 67];
  const series = groupChartData;
  const options = {
    chart: {
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      radialBar: {
        dataLabels: {
          name: {
            fontSize: "22px",
            color: isDark ? "#CBD5E1" : "#475569",
          },
          value: {
            fontSize: "16px",
            color: isDark ? "#CBD5E1" : "#475569",
          },
          total: {
            show: true,
            label: "Total",
            color: isDark ? "#CBD5E1" : "#475569",
            formatter: function () {
              return groupChartData[0] + groupChartData[1] + groupChartData[2];
            },
          },
        },
        track: {
          background: "#E2E8F0",
          strokeWidth: "97%",
        },
      },
    },
    labels: ["Open-Order Purchase", "Schedule Delivery Appointments", "Requested Appointment Not Approved"],
    colors: ["#4669FA", "#FA916B", "#50C793"],
  };

  return (
    <div>
      <Chart
        options={options}
        series={series}
        type="radialBar"
        height={width > breakpoints.md ? 360 : 250}
      />
    </div>
  );
};

export default RadialsChart;
