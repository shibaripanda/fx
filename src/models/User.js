import { Schema, model }  from 'mongoose'
import { fix } from '../../fix.js'

const schema = new Schema({
    id: {
        type: Number,
        required: true,
    },
    username: {
        type: String,
        default: 'noname',
        required: true,
    },
    lengCode: {
        type: String,
        default: 'en',
        required: true,
    },
    topMessage: {
        type: Array,
        default: [],
        required: true,
    },
    downMessage: {
        type: Number,
        default: 0,
        required: true,
    },
    indexMessage: {
        type: Number,
        default: 0,
        required: true,
    },
    free: {
        type: Boolean,
        default: true,
        required: true,
    },
    readDoneRights: {
        type: Boolean,
        default: false,
        required: true,
    },
    have18years: {
        type: Boolean,
        default: false,
        required: true,
    },
    block: {
        type: Boolean,
        default: false,
        required: true,
    },
    media: {
        type: Array,
        default: [],
        required: true,
    },
    mediaTemp: {
        type: Array,
        default: [],
        required: true,
    },
    statusAdmin: {
        type: Boolean,
        default: true,
        required: true,
    },
    statusUser: {
        type: Boolean,
        default: false,
        required: true,
    },
    g: {
        type: Number,
        default: 0,
        required: true,
    },
    viewProfiles: {
        type: Array,
        default: [],
        required: true,
    },
    year: {
        type: Number,
        default: 0,
        required: true,
    },
    mounth: {
        type: Number,
        default: 0,
        required: true,
    },
    day: {
        type: Number,
        default: 0,
        required: true,
    },
    name: {
        type: String,
        default: 'noname',
        required: true,
    },
    info: {
        type: String,
        default: 'empty',
        required: true,
    },
    city: {
        type: String,
        default: 'empty',
        required: true,
    },
    sex: {
        type: String,
        default: 'empty',
        required: true,
    },
    sexFind: {
        type: String,
        default: 'empty',
        required: true,
    },
    maxDistance: {
        type: Number,
        default: 10000,
        required: true,
    },
    maxAge: {
        type: Number,
        default: 75,
        required: true,
    },
    minAge: {
        type: Number,
        default: 18,
        required: true,
    },
    like: {
        type: Array,
        default: [],
        required: true,
    },
    upDateField: {
        type: String,
        default: 'empty',
        required: true,
    },
    dialoges: {
        type: Array,
        default: [],
        required: true,
    },
    lastActiv: {
        type: Number,
        default: 0,
        required: true,
    },
    deleteReqest: {
        type: Boolean,
        default: false,
        required: true,
    },
    deleteDialogReqest: {
        type: Boolean,
        default: false,
        required: true,
    },
    friendsArray: {
        type: Array,
        default: [],
        required: true,
    },
    hearts: {
        type: Number,
        default: 9,
        required: true,
    },
    unhearts: {
        type: Number,
        default: 9,
        required: true,
    },
    heartsUpTime: {
        type: Number,
        default: 0,
        required: true,
    },
    currentUser: {
        type: Array,
        default: [],
        required: true,
    },
    watchedAds: {
        type: Array,
        default: [],
        required: true,
    },
    botActiv: {
        type: Boolean,
        default: false,
        required: true,
    },
    help: {
        type: Boolean,
        default: true,
        required: true,
    },
    refLink: {
        type: String,
        default: 'empty',
        required: true,
    },
    refStartLink: {
        type: Array,
        default: [],
        required: true,
    },
    activTime: {
        type: Array,
        default: [],
        required: true,
    },
    balance: {
        type: Number,
        default: 0,
        required: true,
    },
    startRefPage: {
        type: Number,
        default: 1,
        required: true,
    },
    mobil: {
        type: String,
        default: 'empty',
        required: true,
    },
    iban: {
        type: String,
        default: 'empty',
        required: true,
    },
    onPay: {
        type: Boolean,
        default: false,
        required: true,
    },
    outPayReqest: {
        type: Number,
        default: 0,
        required: true,
    },
    profit: {
        type: Number,
        default: 0,
        required: true,
    },
    payInApp: {
        type: Number,
        default: 0,
        required: true,
    },
    historyPayment: {
        type: Array,
        default: [],
        required: true,
    },
    welcomPayUsers: {
        type: Array,
        default: [],
        required: true,
    },
    howItWork: {
        type: Boolean,
        default: true,
        required: true,
    },
    fake: {
        type: Boolean,
        default: false,
        required: true,
    }
}, {timestamps: true})

export const User = model(`User`, schema)



