import Usuario from '../models/Usuario.js'
import { crearTokenJWT } from '../middlewares/JWT.js'

export const registro = async (req, res) => {
  try {
    const faltantes = ['nombre','apellido','email','password'].filter(c => !req.body[c])
    if (faltantes.length) return res.status(400).json({ msg: `Faltan campos: ${faltantes.join(', ')}` })
    if (await Usuario.findOne({ email: req.body.email })) return res.status(400).json({ msg: 'El email ya está registrado' })
    const u = new Usuario(req.body)
    u.password = await u.encryptPassword(req.body.password)
    u.token    = u.createToken()
    await u.save()
    res.status(201).json({ msg: 'Usuario registrado correctamente', usuario: { _id: u._id, nombre: u.nombre, apellido: u.apellido, email: u.email } })
  } catch (e) { res.status(500).json({ msg: `Error en el servidor: ${e.message}` }) }
}

export const perfil = (req, res) => res.status(200).json({ msg: 'Perfil del usuario', usuario: req.usuarioBDD })
