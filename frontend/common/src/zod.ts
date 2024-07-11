import z from "zod"

export const signupInput=z.object({
    email:z.string().email(),
    password:z.string().min(6),
    name:z.string().optional()
})



export const signinInput=z.object({
    email:z.string().email(),
    password:z.string().min(6)
})


export const createPostInput=z.object({
    content:z.string(),
    title:z.string()
})


export const updatePostInput=z.object({
    content:z.string(),
    title:z.string(),
    id:z.string()
})

export type SignupInput=z.infer<typeof signupInput>
export type SigninInput=z.infer<typeof signinInput>
export type UpdatePostInput=z.infer<typeof updatePostInput>
export type CreatePostInput=z.infer<typeof createPostInput>