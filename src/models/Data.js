import { Schema, model }  from 'mongoose'

const schema = new Schema({
    data: {
        type: String,
        default: 'data',
        required: true,
    },
    superAdmin: {
        type: Array,
        default: [599773731],
        required: true,
    },
    admin: {
        type: Array,
        default: [],
        required: true,
    },
    reebot: {
        type: Number,
        default: 0,
        required: true,
    },
    blockUsers: {
        type: Array,
        default: [],
        required: true,
    },
    heartCount: {
        type: Array,
        default: [],
        required: true,
    },
    value: {
        type: Number,
        default: 0,
        required: true,
    },
    cluster: {
        type: Number,
        default: 0,
        required: true,
    },
    usersInBot: {
        type: Array,
        default: [],
        required: true,
    }
    }, {timestamps: true})

export const Data = model(`Data`, schema)

