const getIncomesByDay = (bills, getDateFormat) => {
  let result1 = 0,result2 = 0,result3 = 0,result4 = 0,result5 = 0,result6 = 0,result7 = 0;
  bills.forEach((ele) => {
    if (getDateFormat(0) === ele.createdAt.slice(0, 10)) {
      result1 += ele.total;
    }
    if (getDateFormat(1) === ele.createdAt.slice(0, 10)) {
      result2 += ele.total;
    }
    if (getDateFormat(2) === ele.createdAt.slice(0, 10)) {
      result3 += ele.total;
    }
    if (getDateFormat(3) === ele.createdAt.slice(0, 10)) {
      result4 += ele.total;
    }
    if (getDateFormat(4) === ele.createdAt.slice(0, 10)) {
      result5 += ele.total;
    }
    if (getDateFormat(5) === ele.createdAt.slice(0, 10)) {
      result6 += ele.total;
    }
    if (getDateFormat(6) === ele.createdAt.slice(0, 10)) {
      result7 += ele.total;
    }
  });
  return [
    result1,
    result2,
    result3,
    result4,
    result5,
    result6,
    result7,
  ].reverse();
};

export default getIncomesByDay