import Counter from "../models/Counter.js"

const generateEmpId = async ()=> {
    const counter = await Counter.findOneAndUpdate(
        { name: 'employee'},
        { $inc: { sequence: 1 } },
        { new: true, upsert: true, }
    )

    return `EMP${String(counter.sequence).padStart(3, '0')}`
}

export default generateEmpId;