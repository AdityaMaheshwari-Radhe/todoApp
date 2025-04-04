const zod = require('zod');

const Schema = zod.object({
    title : zod.string(),
    description : zod.string()
})

const  updateSchema = zod.object({
    id : zod.string()
})

module.exports = {
    Schema : Schema,
    updateSchema : updateSchema 
}