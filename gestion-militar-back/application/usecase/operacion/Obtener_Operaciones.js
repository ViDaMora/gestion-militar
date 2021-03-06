const Operacion = require('../../../domain/Operacion/Operacion')


// OP NO TRIVIAL
async function Obtener_Operaciones(OperacionRepository){
    let operaciones = await OperacionRepository.findAll()
    return operaciones.map(operacion => new Operacion(operacion._id,operacion.unidadId,operacion.lider,operacion.descripcion,operacion.pais,operacion.nombre))
}
module.exports = {Obtener_Operaciones}