import { Schema, model }  from 'mongoose'

const schema = new Schema({
    text: {
        type: Array,
        default: [],
        required: true,
    },
    users: {
        type: Array,
        default: [],
        required: true,
    },
    crypto: {
        type: Boolean,
        default: false,
        required: true,
    }
    }, {timestamps: true})

export const Dialog = model(`Dialog`, schema)

