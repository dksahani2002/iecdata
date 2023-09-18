import React from 'react'
// resimport.map((e,id)=>{
//   // console.log("e: ",id,": ",e.billOfEntryDetails.totalValue)
//   console.log("eimport: ",id,": ",e.billOfEntryDetails.chaNumber,"  ",e.billOfEntryDate,"   ",e.billOfEntryDetails.totalValue)
//   billentry+=e.billOfEntryDetails.totalValue;
// })
// console.log("billentry: ",billentry);
// resexport.map((e,id)=>{
//   // console.log("e: ",id,": ",e.billOfEntryDetails.totalValue)
//   console.log("eexport: ",id,": ",": ",e.shippingBillDetails.chaNumber,"   ",e.shippingBillDate,"   ",e.shippingBillDetails.fobInr)
//   billshipping+=e.shippingBillDetails.fobInr;
// })
// console.log("shippingbill: ",billshipping);

const RowData = ({prop}) => {
    console.log("prop:",prop)
    
    const result=[];
    for(let i=0;i<prop.length;i++){
        result.push(<td>{prop[i]}</td>)
    }
  return (
    <>
     {result}
    </>
  )
}

export default RowData