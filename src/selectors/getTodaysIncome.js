import { format } from 'date-fns'

export const getTodaysIncome = (bills) => {
    const result = bills.filter((ele) => {
        return ele.date.slice(0,10) === format(new Date(), 'yyyy-MM-dd')
    })
    return result
}