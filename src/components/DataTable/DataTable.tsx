import React, {useState} from 'react';
import { DataGrid, GridColDef, GridDataContainer, GridSelectionModel } from '@material-ui/data-grid';
import { server_calls } from '../../api';
import { useGetData } from '../../custom-hooks';
import { Button,
        Dialog,
        DialogActions,
        DialogContent,
        DialogContentText,
        DialogTitle } from '@material-ui/core';
import { CarForm } from '../../components/CarForm';


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
        field: 'color',
        headerName: 'Color',
        width: 110
    },
    {
        field: 'max_speed',
        headerName: 'Max Speed',
        width: 160
    },
    {
        field: 'doors',
        headerName: 'Doors',
        width: 150
    },
    {
        field: 'horsepower',
        headerName: 'Horsepower',
        width: 140
    },

];


// const rows = [
//     { id: 1, make: 'Chevrolet', model: 'Silverado', year: 2011, horsepower: 450, mileage: 130310, msrp: 20000},
//     { id: 2, make: 'Ford', model: 'Mustang', year: 2020, horsepower: 350, mileage: 92130, msrp: 35000},
//     { id: 3, make: 'Subaru', model: 'Imprezza', year: 2007, horsepower: 235, mileage: 75350, msrp: 7000},
//     { id: 4, make: 'Ford', model: 'Escort', year: 1993, horsepower: 180, mileage: 125789, msrp: 1500},
//     { id: 5, make: 'Chevrolet', model: 'Impala', year: 2001, horsepower: 300, mileage: 113400, msrp: 9590},
//     { id: 6, make: 'Toyota', model: 'Tundra', year: 2012, horsepower: 430, mileage: 122810, msrp: 15310},
//     { id: 7, make: 'Audi', model: 'RS4', year: 2021, horsepower: 680, mileage: 1000, msrp: 85999},
//     { id: 8, make: 'Jeep', model: 'Liberty', year: 2003, horsepower: 200, mileage: 139680, msrp: 11999},
//     { id: 9, make: 'Toyota', model: 'Camry', year: 2020, horsepower: 300, mileage: 15000, msrp: 25000},
//     { id: 10, make: 'Volkswagon', model: 'Rabbit', year: 1991, horsepower: 550, mileage: 121320, msrp: 10000}
// ]




interface gridData{
    data:{
        id?:string;
    }
};



export const DataTable= () => {
    let { carData, getData } = useGetData();
    let [open, setOpen] = useState(false);
    let [gridData, setData] = useState<gridData>({data: {}})
    const [selectionModel, setSelectionModel] = useState<any>([])


    let handleOpen = () => {
        setOpen(true)
    };

    let handleClose = () => {
        setOpen(false)
    };

    let deleteData = () => {
        server_calls.delete(selectionModel)
        getData()
        console.log('deleted selection!', selectionModel)
      };

    
        return (
            <div style={{ height: 450, width: '100%'}}>
                <h1> Car Inventory </h1>
                <DataGrid 
                rows={ carData } 
                columns={columns} 
                pageSize={5} 
                checkboxSelection 
                onSelectionModelChange ={ (item) =>{
                    setSelectionModel(item)
                }}
                {...carData}
                />
                <Button onClick={handleOpen}>Update</Button>
                <Button variant="contained" color="secondary" onClick={deleteData}>Delete</Button>
                <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Update a Car</DialogTitle>
                    <DialogContent>
                        <DialogContentText>Car id: {selectionModel}</DialogContentText>
                        <CarForm id={`${selectionModel}`} />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} color="primary">Cancel</Button>
                        <Button onClick={handleClose} color="primary">Done</Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
};