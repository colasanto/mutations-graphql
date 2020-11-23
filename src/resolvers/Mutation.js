import { usuarios, proximoId } from '../data/db'

export default {
  novoUsuario(_, { nome, email, nascimento, salario, vip, perfil_id, status}) {
    const novoUsuario = {
      id: proximoId(),
      nome, email, nascimento, salario, vip, perfil_id, status
    }

    usuarios.push(novoUsuario)
    return novoUsuario
  }
}