const Unidad = require('../../domain/Unidad/Unidad');
const UnidadSchema = require('../db/mongo/Schemas/Unidad')
const UnidadRepository = require('../../domain/unidad/UnidadRepository');
const MilitarEschema = require('../db/mongo/Schemas/Militar');

class UnidadRepositoryMongo extends UnidadRepository{

    constructor(){
        super();
    }
    async save(unidad){
        const {tipoUnidad,encargado,asignada} = unidad
        const mongoUnidad = new UnidadSchema({tipoUnidad,encargado,asignada})
        console.log(mongoUnidad)
        await mongoUnidad.save()
        return new Unidad(mongoUnidad._id,mongoUnidad.tipoUnidad,mongoUnidad.encargado,mongoUnidad.asignada,mongoUnidad.militares,mongoUnidad.vehiculos)
    }

    async asignarMilitar(unidadId,militar){
        const unidad = await UnidadSchema.findOne({_id:unidadId})
        unidad.militares.push(militar)
        const militares=  await unidad.save()
       return {message:"Militar asignado correctamente",militares:militares}

    }

    async findById(unidadId){
        const unidad = await UnidadSchema.findOne({_id:unidadId})
        return new Unidad(unidad._id,unidad.tipoUnidad,unidad.encargado,unidad.asignada,unidad.militares,unidad.vehiculos)
    }

    async findAll(){
        const unidades = await UnidadSchema.find({})
        return unidades.map(unidad => new Unidad(unidad._id,unidad.tipoUnidad,unidad.encargado,unidad.asignada,unidad.militares,unidad.vehiculos))
    }

}
module.exports = {UnidadRepositoryMongo}