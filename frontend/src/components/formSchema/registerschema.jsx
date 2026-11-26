import z from "zod";
export const registerschema=z.object({
    username:z.string().min(3,"Name must be contains 3 letters"),
    email:z.string().email("Enter a valid email"),
    password:z.string().min(8,"password must be contains 8 letters"),
    age:z.coerce.number().min(18,"Age must be contains 18"),
})