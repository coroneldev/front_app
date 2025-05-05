
import http from '@/http-common'

export const getRoles = async () => {
  try {
    const response = await http.get('/roles')

    // Imprimir los datos que se reciben desde la API
    console.log("Datos recibidos desde la API: ", response.data)

    // Retornar solo los datos (array de roles)
    return response.data
  } catch (error) {
    console.error('Error al cargar los roles:', error)
  }
}
