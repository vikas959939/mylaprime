import React, { useState } from "react";
import Icon from "@/components/ui/Icon";
import dayjs from "dayjs";
import Datepicker from "react-tailwindcss-datepicker";

const HomeBredCurbs = ({ title, setDate }) => {
  const [value, setValue] = useState(new Date());
  setDate(value)
  console.log(value, 'value')
  return (
    <div className="flex justify-between flex-wrap items-center mb-6">
      <h4 className="font-medium lg:text-2xl text-xl capitalize text-slate-900 inline-block ltr:pr-4 rtl:pl-4">
        {title}
      </h4>
      <div className="flex sm:space-x-4 space-x-2 sm:justify-end items-center rtl:space-x-reverse">
        <div className="date-range-custom relative">
          <Datepicker
            value={value}
            inputClassName="input-class"
            containerClassName="container-class"
            onChange={(e)=> setValue(e)}
          />

          
        </div>
        <div className="date-range-custom2 relative">
          <Datepicker
            value={value}
            asSingle={true}
            inputClassName="input-class"
            //displayFormat="mm/dd/yyyy"
            containerClassName="container-class"
            onChange={(e)=> setValue(e)}
          />
          
        </div>
      </div>
    </div>
  );
};

export default HomeBredCurbs;
