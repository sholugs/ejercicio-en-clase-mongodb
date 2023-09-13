import mongoose from "mongoose";

const collection = 'estudiantes'

const estudiantesSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },

    apellido: {
        type: String,
        required: true
    },

    edad: {
        type: String,
        required: true
    },

    dni: {
        type: String,
        required: true
    },

    curso: {
        type: String,
        required: true
    },

    nota: {
        type: Number,
        required: true
    }
}) 

export const estudiantesModel = mongoose.model(collection, estudiantesSchema)