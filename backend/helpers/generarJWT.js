import jwt from "jsonwebtoken";

// Generar webtoken para login
const generarJWT = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET, {
        expiresIn: "30d",
    })
}

export default generarJWT;