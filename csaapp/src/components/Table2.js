import React from 'react'
import MaterialTable from 'material-table'

export const Table2 =() => {
    const data =[
<<<<<<< HEAD
        {region: "Northwest Territories", fires: "1.7e+10 m^2", risk: "high"},
        {region: "Nunavut", fires: "1.58e+10 m^2", risk: "high"},
        {region: "Yukon", fires: "2.11e+10", risk: "very high"},
        {region: "British Columbia", fires: "1.06e+9", risk: "low"},
        {region: "Alberta", fires: "3.64e+8 m^2", risk: "low"},
        {region: "Saskatchewan", fires: "5.6e+7 m^2", risk: "low"},
        {region: "Manitoba", fires: "2.45e+8", risk: "low"},
        {region: "Ontario", fires: "0", risk: "no risk"},
        {region: "Quebec", fires: "0", risk: "no risk"},
        {region: "Nova Scotia", fires: "0", risk: "no risk"},
        {region: "Prince Edward Island", fires: "0", risk: "no risk"},
=======
        {region: "Northwest Territories", fires: "1.70Ex10 m^2", risk:"high"},
        {region: "Nunavut", fires: "1.58E+10 m^2", risk: "high"},
        {region: "Yukon", fires: "2.06E+10 m^2", risk:"high"},
        {region: "British Columbia", fires: "5.12E+9 m^2", risk: "medium"},
        {region: "Alberta", fires: "5.78E+9 m^2", risk:"medium"},
        {region: "Saskatchewan", fires: "5.22E+9 m^2", risk: "medium"},
        {region: "Manitoba", fires: "7.47E+9 m^2", risk:"medium"},
        {region: "Ontario", fires: "1.25E+10 m^2", risk: "high"},
        {region: "Quebec", fires: "5.179E+10 m^2", risk:"high"},
        {region: "Newfoundland and Labrador", fires: "8.46E+9 m^2", risk: "medium"},
>>>>>>> 6f2cb7ba6c12c100b5f446a0bcbda8c0579b097c
    ]

    const columns =[
        {
            title: "Region", field: "region"
        },
        {
            title: "Square metre fire coverage", field: "fires"
        },
        {
<<<<<<< HEAD
            title: "Risk of Fire", field: "risk"
=======
            title: "Risk level", field: "risk"
>>>>>>> 6f2cb7ba6c12c100b5f446a0bcbda8c0579b097c
        }
    ]
    return(<div>
        <MaterialTable title = "Database Table"
            data ={data}
            columns ={columns}
        />
    </div>

    )
}
export default Table2;