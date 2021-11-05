import {useState} from 'react';
import { DataGrid, GridColDef, GridDataContainer, GridSelectionModel } from '@material-ui/data-grid';
import { server_calls } from '../../api';
import { useGetData } from '../../custom-hooks';
import { 
        Button,
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