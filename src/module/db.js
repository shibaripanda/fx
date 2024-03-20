import { mongoose } from "mongoose"
export const db = async () => {
    var status = false
    await mongoose.connect('mongodb+srv://panda:E7lPec8rq6RBrXqo@cluster0.dmr6t.mongodb.net/fxtest?retryWrites=true&w=majority')
    .then((res) => {
        console.log(`# connect to DB`)
        status = true
    })
    .catch(async (error) => {
        console.log('connecting...')
        await db()
    })
    return status
}