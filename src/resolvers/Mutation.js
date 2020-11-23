import { usuarios, proximoId } from '../data/db'

export default {
  // { nome, email, nascimento, salario, vip, perfil_id, status}
  novoUsuario(_, args) {
    const emailExistente = usuarios
      .some(user => user.email === args.email)

    if (emailExistente) {
      throw new Error("E-mail já cadastrado!")
    }

    const novoUsuario = {
      id: proximoId(),
      ...args
    }

    usuarios.push(novoUsuario)
    return novoUsuario
  }
}