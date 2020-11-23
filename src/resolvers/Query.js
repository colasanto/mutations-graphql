import { usuarios, perfis } from '../data/db'

export default {
  usuarios() {
    return usuarios
  },

  usuario(_, { id }) {
    const usuarioSelecionado = usuarios
      .filter(user => user.id === id)

    return usuarioSelecionado ? usuarioSelecionado[0] : null
  },

  perfis() {
    return perfis
  },

  perfil(_, { id }) {
    const perfilSelecionado = perfis
      .filter(perfil => perfil.id === id)

    return perfilSelecionado ? perfilSelecionado[0] : null
  }
}
