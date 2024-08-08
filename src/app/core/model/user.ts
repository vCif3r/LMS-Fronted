import { Role } from "./role"

export interface User{
    id: string,
    name: string,
    lastname: string
    email: string
    phone_number: string
    is_active: Boolean
    address: string
    profile_picture: string
    role: Role
    date_of_birth: Date
    nationality: String
}