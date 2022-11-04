import React from "react";
import Btn from "./btn";
import Editamount from "./editamount";
import { useSelector } from "react-redux";

const Expenditure =()=> {
    const amount = useSelector(state=>state.amount)
    return(
        <div className="flex flex-col items-center min-h-screen font-bold">
            <span className="text-slate-200 h-30 w-80 rounded-md p-4 bg-slate-600 my-20 text-center">Current Balance: {amount}</span>
            <div className="flex w-2/4 justify-between">
                <Editamount label="Spend"/>
                <Editamount label="Receive"/>
            </div>
            <div className="flex w-2/4 justify-between my-20">
                <Btn label="EMI" amount="20000"/>
                <Btn label="Salary" amount="60000"/>
            </div>
        </div>
    )
}

export default Expenditure;