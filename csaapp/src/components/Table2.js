import React from 'react'
import MaterialTable from 'material-table'

export const Table2 =() => {
    const data =[
        {region: "Ontario", fires: 1},
        {region: "British Columbia", fires: 1},
        {region: "Vancouver", fires: 1},
        {region: "Calgary", fires: 1}
    ]

    const columns =[
        {
            title: "Region", field: "region"
        },
        {
            title: "Number of Active Wildfires", field: "fires"
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