import React from 'react';
import { DataGrid, GridColDef } from '@material-ui/data-grid'


const columns: GridColDef[] = [
    { 
        field: 'id',
        headerName: 'ID',
        width: 100
    },
    {
        field: 'make',
        headerName: 'Make',
        width: 130
    },
    {
        field: 'model',
        headerName: 'Model',
        width: 130
    },
    {
        field: 'year',
        headerName: 'Year',
        width: 110
    },
    {
        field: 'horsepower',
        headerName: 'Horsepower',
        width: 160
    },
    {
        field: 'mileage',
        headerName: 'Mileage',
        width: 150
    },
    {
        field: 'msrp',
        headerName: 'MSRP',
        width: 140
    },

];


const rows = [
    { id: 1, make: 'Chevrolet', model: 'Silverado', year: 2011, horsepower: 450, mileage: 130310, msrp: 20000},
    { id: 2, make: 'Ford', model: 'Mustang', year: 2020, horsepower: 350, mileage: 92130, msrp: 35000},
    { id: 3, make: 'Subaru', model: 'Imprezza', year: 2007, horsepower: 235, mileage: 75350, msrp: 7000},
    { id: 4, make: 'Ford', model: 'Escort', year: 1993, horsepower: 180, mileage: 125789, msrp: 1500},
    { id: 5, make: 'Chevrolet', model: 'Impala', year: 2001, horsepower: 300, mileage: 113400, msrp: 9590},
    { id: 6, make: 'Toyota', model: 'Tundra', year: 2012, horsepower: 430, mileage: 122810, msrp: 15310},
    { id: 7, make: 'Audi', model: 'RS4', year: 2021, horsepower: 680, mileage: 1000, msrp: 85999},
    { id: 8, make: 'Jeep', model: 'Liberty', year: 2003, horsepower: 200, mileage: 139680, msrp: 11999},
    { id: 9, make: 'Toyota', model: 'Camry', year: 2020, horsepower: 300, mileage: 15000, msrp: 25000},
    { id: 10, make: 'Volkswagon', model: 'Rabbit', year: 1991, horsepower: 550, mileage: 121320, msrp: 10000}
]






export const DataTable= () => {
    return (
        <div style={{ height: 450, width: '100%'}}>
            <h1> Car Inventory </h1>
            <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
        </div>
    )
};