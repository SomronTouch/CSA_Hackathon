import React from 'react'
import MaterialTable from 'material-table'

export const Table2 =() => {
    const data =[
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
    ]

    const columns =[
        {
            title: "Region", field: "region"
        },
        {
            title: "Square metre fire coverage", field: "fires"
        },
        {
            title: "Risk level", field: "risk"
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