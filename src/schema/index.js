import projectSchema from "./project.schema.js";
import userSchema from "./users.schema.js";
import advanceSchema from "./advance.schema.js";
import inscriptionSchema from "./inscription.schema.js";
export default[
    ...projectSchema,
    ...userSchema,
    ...advanceSchema,
    ...inscriptionSchema
    
]

    