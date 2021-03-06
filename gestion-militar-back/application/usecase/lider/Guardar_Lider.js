const cadenaMando = require('../CadenaMando')
const Lider = require('../../../domain/Lider/Lider')
async function Guardar_Lider(nombre,nacionalidad,cc,autoridad,genero,edad,LiderRepository){

    let liderExist = await LiderRepository.findByCC(cc)
    
    if(liderExist){
        return {errorMessage: "Este lider ya existe en la base de datos"}
    }

    if(cadenaMando.get(autoridad) > 5 ){
        return {errorMessage: "Un lider debe tener como minimo la autoridad de coronel",
                 sucess:null
            }
    }



    const lider = new Lider(null,nombre,nacionalidad,cc,autoridad,genero,edad,false)
    return await LiderRepository.save(lider)

}

module.exports = {Guardar_Lider}