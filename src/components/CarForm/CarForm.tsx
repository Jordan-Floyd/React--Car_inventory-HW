import { useDispatch, useSelector, useStore } from 'react-redux';
import { useForm } from 'react-hook-form';
import { chooseMake } from '../../redux/slices/rootSlice';
import { Input } from '../sharedComponents/Input';
import { Button } from '@material-ui/core';
import { server_calls } from '../../api';
import { useGetData } from '../../custom-hooks';




interface CarFormProps {
    id?:string;
    data?:{}
};

interface CarState {
    make: string;
    model: string;
};



export const CarForm = (props:CarFormProps) => {
    
    const dispatch = useDispatch();
    let { carData, getData } = useGetData();
    const store = useStore();
    const make = useSelector<CarState>(state=> state.make)
    const { register, handleSubmit } = useForm({ })


    const onSubmit = async (data:any, event:any) => {
        console.log(props.id)

        if(props.id!) {
            await server_calls.update(props.id!, data)
            console.log(`Updated:${data} ${props.id}`)
            window.location.reload()
            event.target.reset();
        }else {
            dispatch(chooseMake(data.make))
            await server_calls.create(store.getState())
            window.location.reload()
        }
    }
    return (
        <div>
            <form onSubmit = {handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="make">Make</label>
                    <Input {...register('make')} name="make" placeholder='Make' />
                </div>

                <div>
                    <label htmlFor="model">Model</label>
                    <Input {...register('model')} name="model" placeholder='Model' />
                </div>

                <div>
                    <label htmlFor="color">Color</label>
                    <Input {...register('color')} name="color" placeholder='Color' />
                </div>

                <div>
                    <label htmlFor="max_speed">Max Speed</label>
                    <Input {...register('max_speed')} name="max_speed" placeholder='Max Speed' />
                </div>

                <div>
                    <label htmlFor="doors">Doors</label>
                    <Input {...register('doors')} name="doors" placeholder='Doors' />
                </div>

                <div>
                    <label htmlFor="horsepower">Horsepower</label>
                    <Input {...register('horsepower')} name="horsepower" placeholder='Horsepower' />
                </div>
                <Button type='submit'>Submit</Button>
            </form>
        </div>
    )
};

