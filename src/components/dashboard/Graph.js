import React from "react";
import { Chart } from "react-google-charts";

const Graph = ({bills}) => {

    const getDateFormat = (n) => {
        const today = new Date()
        const year = today.toLocaleString('default',{year:'numeric'})
        const month = today.toLocaleString('default',{month : '2-digit'})
        const day = today.toLocaleString('default',{day : '2-digit'})
        let newDay = String(day-n)
        if( newDay.length === 1 ){
            return `${year}-${month}-0${newDay}`
        }else{
            return `${year}-${month}-${newDay}`
        }
    }

    const filterBillDay = (date) => {
        const result = bills.filter((ele) => {
            if(ele.createdAt.slice(0,10) === date){
                return ele
            }
        })
        return result
    }

    const filterBillByToday = filterBillDay(getDateFormat(0))
    const filterBillByToday_Minus_one = filterBillDay(getDateFormat(1))
    const filterBillByToday_Minus_two = filterBillDay(getDateFormat(2))
    const filterBillByToday_Minus_three = filterBillDay(getDateFormat(3))
    const filterBillByToday_Minus_four = filterBillDay(getDateFormat(4))

    const totalIncomeDayWise = (filteredData) => {
        const result = filteredData.reduce((previousValue, currentValue) => {
            return previousValue + currentValue.total
        },0)
        return result
    }
    
    const data = [
        ["Day", "Sales"],
        [getDateFormat(6), totalIncomeDayWise(filterBillByToday_Minus_four)],
        [getDateFormat(5), totalIncomeDayWise(filterBillByToday_Minus_four)],
        [getDateFormat(4), totalIncomeDayWise(filterBillByToday_Minus_four)],
        [getDateFormat(3), totalIncomeDayWise(filterBillByToday_Minus_three)], 
        [getDateFormat(2), totalIncomeDayWise(filterBillByToday_Minus_two)],
        [getDateFormat(1),totalIncomeDayWise(filterBillByToday_Minus_one)], 
        [getDateFormat(0), totalIncomeDayWise(filterBillByToday)], 
      ];

  return (
    <Chart chartType="ColumnChart" width="90%" height="400px" data={data} />
  );
};

export default Graph;
