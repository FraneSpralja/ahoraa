import GastoDiario from "../models/GastoDiario.js"

const agregarGasto = async (req, res) => {
    const gasto = new GastoDiario(req.body);
    gasto.user = req.user._id;
    try {
        const gastoGuardado = await gasto.save();
        res.json({gastoGuardado});
    } catch (error) {
        console.log(error)
    } 
}

const obtenerGasto = async (req, res) => {
    const gastos = await GastoDiario.find().where("user").equals(req.user);

    res.json({gastos})
}

export {
    agregarGasto,
    obtenerGasto
}