import bcrypt from "bcryptjs";

export const createPasswordHash = async (password) => {
    const passwordHash = bcrypt.hash(password, 8)
    return passwordHash
}

export const checkPassword = (user, password) => 
    bcrypt.compare(password, user.password)

