import { perfis } from '../data/db'

export default {
  idade(parent) {
    const diferencaEmMs = Date.now() - new Date(parent.nascimento).getTime()
    const nascimento = new Date(diferencaEmMs)
    return Math.abs(nascimento.getUTCFullYear() - 1970)
  },

  salario(parent) {
    return parent.salario_real 
      ? parent.salario_real 
      : parent.salario
  },

  perfil(usuario) {
    const perfiLSelecionado = perfis
      .filter(perfil => perfil.id === usuario.perfil_id)
    
    return perfiLSelecionado ? perfiLSelecionado[0] : null
  }
}
