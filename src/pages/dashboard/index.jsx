import React, { useState } from "react";
import Card from "@/components/ui/Card";
import ImageBlock1 from "@/components/partials/widget/block/image-block-1";
import GroupChart1 from "@/components/partials/widget/chart/group-chart-1";
import RevenueBarChart from "@/components/partials/widget/chart/revenue-bar-chart";
import RadialsChart from "@/components/partials/widget/chart/radials";
import SelectMonth from "@/components/partials/SelectMonth";
import CompanyTable from "@/components/partials/Table/company-table";
import RecentActivity from "@/components/partials/widget/recent-activity";
import MostSales from "../../components/partials/widget/most-sales";
import RadarChart from "../../components/partials/widget/chart/radar-chart";
import Calculation from "../../components/partials/widget/chart/Calculation";
import HomeBredCurbs from "./HomeBredCurbs";
import Donut from "../chart/appex-chart/Donut"
const Dashboard = () => {
  const [filterMap, setFilterMap] = useState("usa");

  const [getDate, setDate] = useState('')
  const [groupChartData, setGroupChartData] = useState([])
  console.log(groupChartData)

  console.log(getDate, 'getDates')
  return (
    <div>
      <HomeBredCurbs setDate={setDate} title="Dashboard" />

      <div className="row gap-5 mb-5 ">
        <div className="col-12">
          <div className="2xl:col-span-12 lg:col-span-8 col-span-12">
            <Card bodyClass="p-4">
              <div className="grid md:grid-cols-3 col-span-1 gap-4 ">
                <GroupChart1 groupChartData={groupChartData} />
              </div>
            </Card>
          </div>
        </div>
      </div>

      

      <div className="row gap-5 mb-5">

      <div className="col-md-12">
          <Card>
            <div className="legend-ring">
              <RevenueBarChart  getDate={getDate} setGroupChartData={setGroupChartData}/>
            </div>
          </Card>
        </div>
        <div className="col-md-7">
          <Card>
            <div className="legend-ring">
              <RevenueBarChart  getDate={getDate} setGroupChartData={setGroupChartData}/>
            </div>
          </Card>
        </div>

        <div className="col-md-4">
          <Card title="Overview" headerslot={<SelectMonth />}>
            <RadialsChart getDate={getDate} groupChartData={groupChartData}/>
          </Card>
        </div>
      </div>

      <div className="row mb-5">
        <div className="col">
          <Card title="Pie Chart" headerslot={<SelectMonth />} noborder>
            <Calculation />
          </Card>
        </div>

        <div className="col">
          <Card title="Donut" headerslot={<SelectMonth />} noborder>
            <Donut />
          </Card>
        </div>
      </div>


      <div className="row gap-5">
       
        <div className="col-md-7">
          <Card title="All Company" headerslot={<SelectMonth />} noborder>
            <CompanyTable />
          </Card>
        </div>

        <div className="col-md-4 ">
          <Card title="Recent Activity" headerslot={<SelectMonth />}>
            <RecentActivity />
          </Card>
        </div>


        <div className="col-md-7 col-span-12">
          <Card
            title="Most Sales"
            headerslot={
              <div className="border border-slate-200 dark:border-slate-700 dark:bg-slate-900 rounded p-1 flex items-center">
                <span
                  className={` flex-1 text-sm font-normal px-3 py-1 transition-all duration-150 rounded cursor-pointer
                ${filterMap === "global"
                      ? "bg-slate-900 text-white dark:bg-slate-700 dark:text-slate-300"
                      : "dark:text-slate-300"
                    }  
                `}
                  onClick={() => setFilterMap("global")}
                >
                  Global
                </span>
                <span
                  className={` flex-1 text-sm font-normal px-3 py-1 rounded transition-all duration-150 cursor-pointer
                  ${filterMap === "usa"
                      ? "bg-slate-900 text-white dark:bg-slate-700 dark:text-slate-300"
                      : "dark:text-slate-300"
                    }
              `}
                  onClick={() => setFilterMap("usa")}
                >
                  USA
                </span>
              </div>
            }
          >
            <MostSales filterMap={filterMap} />
          </Card>
        </div>
        <div className="col-md-4 col-span-12">
          <Card title="Overview" headerslot={<SelectMonth />}>
            <RadarChart />
            <div className="bg-slate-50 dark:bg-slate-900 rounded p-4 mt-8 flex justify-between flex-wrap">
              <div className="space-y-1">
                <h4 className="text-slate-600 dark:text-slate-200 text-xs font-normal">
                  Invested amount
                </h4>
                <div className="text-sm font-medium text-slate-900 dark:text-white">
                  $8264.35
                </div>
                <div className="text-slate-500 dark:text-slate-300 text-xs font-normal">
                  +0.001.23 (0.2%)
                </div>
              </div>

              <div className="space-y-1">
                <h4 className="text-slate-600 dark:text-slate-200 text-xs font-normal">
                  Invested amount
                </h4>
                <div className="text-sm font-medium text-slate-900 dark:text-white">
                  $8264.35
                </div>
              </div>

              <div className="space-y-1">
                <h4 className="text-slate-600 dark:text-slate-200 text-xs font-normal">
                  Invested amount
                </h4>
                <div className="text-sm font-medium text-slate-900 dark:text-white">
                  $8264.35
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
