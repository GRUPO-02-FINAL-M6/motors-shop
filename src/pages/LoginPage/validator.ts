import { z } from "zod";

export const loginSchema = z.object({
    email: z.string().nonempty("Email obrigatório").email({message: "Formato inválido"}),
    password: z.string().nonempty("Senha obrigatória")
})

export type tLogin = z.infer<typeof loginSchema>