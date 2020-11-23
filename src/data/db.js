let id = 1
export function proximoId() {
  return id++
}

export const usuarios = [
  {
    id: proximoId(),
    nome: 'Fulano da Silva',
    email: 'fulano@gmail.com',
    nascimento: '1988-08-30T00:00:00.000Z',
    salario: 1420.40,
    vip: false,
    status: 'INATIVO',
    perfil_id: 1
  },
  {
    id: proximoId(),
    nome: 'Ciclano Rodrigues',
    email: 'ciclano@wmail.com',
    nascimento: '2003-05-17T00:00:00.000Z',
    salario: 5785.10,
    vip: true,
    status: 'BLOQUEADO',
    perfil_id: 1
  },
  {
    id: proximoId(),
    nome: 'Fulana Ciclana',
    email: 'fciclana@tmail.com',
    nascimento: '1996-03-01T00:00:00.000Z',
    salario: 3700.10,
    vip: true,
    status: 'ATIVO',
    perfil_id: 2
  }
]

export const perfis = [
  { id: 1, nome: 'Administrador' },
  { id: 2, nome: 'Comum' }
]
