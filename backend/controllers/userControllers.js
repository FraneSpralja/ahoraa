import generarJWT from "../helpers/generarJWT.js";
import User from "../models/User.js";

// Registrar usuario 
const registrar = async(req, res) => {
    const { email } = req.body;

    // Buscar usuario en db
    const userExist = await User.findOne({ email });

    // Si el correo existe
    if(userExist){
        const error = new Error('El usuario no ha podido ser creado o ya existe');
        return res.status(400).json({ msg: error.message });
    }

    // Guardar usuario en db
    try {
        const user = new User(req.body);
        const userSave = await user.save();

        res.json(userSave);
    } catch (error) {
        console.log(error)
    }
};

// get perfil usuario ya autenticado
const perfil = (req, res) => {
    const  { user } = req;
    res.json({ user });
}

// Confirmar usaurio creado
const confirmar = async(req, res) => {

    // get token único y confirmar dentro de db
    const { token } = req.params;
    const user = await User.findOne({ token });


    // Si no existe token
    if(!user) {
        const error = new Error('Lo sentimos, el link ha caducado o ha sido confirmado');
        return res.status(404).json({ msg: error.message })
    }

    // Confirmar usuario dentro de db
    try {
        user.token = null;
        user.confirmado = true;
        user.save();

        res.json({ msg: "El usuario ha sido confirmado" })
    } catch (error) {
        console.log(error);
    }
}

// Autenticar usuario en login
const autenticar = async(req, res) => {
    // get email y password
    const  { email, password } = req.body;

    // confirmar usaurio a través de email único
    const user = await User.findOne({ email });

    // Si no existe usuario
    if(!user) {
        const error = new Error('usuario no existe');
        return res.status(403).json({ msg: error.message })
    }

    // Si usuario no ha sido confirmado
    if(!user.confirmado) {
        const error = new Error('el usuario no ha sido confirmado');
        return res.status(403).json({ msg: error.message })
    }

    // Comparar password enviada con password hasheada
    if(await user.comprobarPassword(password)) {
        res.json({ token: generarJWT(user.id) })
    } else {
        const error = new Error('Usuario o contraseña son incorrectos');
        return res.status(403).json({ msg: error.message })
    }
}

export { 
    registrar,
    perfil,
    confirmar,
    autenticar
};