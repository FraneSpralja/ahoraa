import User from "../models/User.js";

const registrar = async(req, res) => {
    const { nombre, email } = req.body;

    const userExist = await User.findOne({ email });

    if(userExist){
        const error = new Error('El usuario no ha podido ser creado o ya existe');
        return res.status(400).json({ msg: error.message });
    }

    try {
        const user = new User(req.body);

        const userSave = await user.save();

        res.json(userSave);
    } catch (error) {
        console.log(error)
    }
};

export { 
    registrar
};