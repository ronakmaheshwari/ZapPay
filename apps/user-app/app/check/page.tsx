"use client"

import {useBalance} from "@repo/store/usebalance"

export default function Headers(){
    const {balance} = useBalance();
    return(
        <h1>
            Current Balance: ₹{balance}
        </h1>
    )
}