import React from 'react'
import MaterialTable from 'material-table'

export const Table2 =() => {
    const data =[
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
    ]

    const columns =[
        {
            title: "Region", field: "region"
        },
        {
            title: "Square metre fire coverage", field: "fires"
        },
        {
            title: "Risk of Fire", field: "risk"
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