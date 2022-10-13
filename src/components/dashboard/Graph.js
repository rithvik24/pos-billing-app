import React from "react";
import { Chart } from "react-google-charts";
import getIncomesByDay from "../../selectors/getIncomesByDay";

const Graph = ({bills}) => {
    
    const options = {
        title : 'Last 7 days income',
        hAxis: { title: "Days"},
        vAxis: { title: "Income"},
        legend : 'none'
    }
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

    const getDatesArr = (dateFormat) => {
        const date = []
        for(let i=0; i<7; i++){
            date.push(dateFormat(i))
        }
        return date
    }
    const datesArray = getDatesArr(getDateFormat).reverse()

    const data = [
        ["Day", "Income ₹" ,{role : 'style'}]
      ];
    
    datesArray.map((ele) => {
        return data.push([ele])
      })
    
      getIncomesByDay(bills,getDateFormat).map((ele,i) => {
        return data[i+1].push(ele, 'color : #00b8d4')
    })
    
  return (
    <Chart chartType="ColumnChart" options={options} width="80%" height="350px" data={data} />
  );
};

export default Graph;
