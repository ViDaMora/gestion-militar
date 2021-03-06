import { ADD_VEHICULO, GET_VEHICULO, GET_VEHICULO_ERROR } from '../types/VehiculoTypes';

const initialState = {
    vehiculos: [],
    error: null,
}

export default function VehiculosInfo(state = initialState, action) {
    switch (action.type) {
        case GET_VEHICULO:
            return {
                ...state,
                vehiculos: action.payload
            }
        case GET_VEHICULO_ERROR:
            return { ...state, error: action.payload, loading: false };
        case ADD_VEHICULO:
            return { ...state, vehiculos: [...state.vehiculos, action.payload] };
        default:
            return state
    }
}