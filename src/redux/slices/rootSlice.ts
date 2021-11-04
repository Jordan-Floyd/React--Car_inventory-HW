import { createSlice } from '@reduxjs/toolkit';

const rootSlice = createSlice({
    name: "root",
    initialState: {
        make: 'Chevrolet',
        model: 'Silverado',
        color: 'Black',
        max_speed: '145',
        doors: '4',
        horsepower: '450hp',
    },

    reducers: {
        chooseMake: (state, action) => { state.make = action.payload },
        chooseModel: (state, action) => { state.model = action.payload }
    }
})

export const reducer = rootSlice.reducer;
export const { chooseMake, chooseModel, } = rootSlice.actions;

