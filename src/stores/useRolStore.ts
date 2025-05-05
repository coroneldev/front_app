// src/stores/useRolStore.ts
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { getRoles } from '@/services/rolService'

export const useRolStore = defineStore('rol', () => {
  const roles = ref([])

  // Verificar si ya tenemos datos en localStorage
  const loadRolesFromStorage = () => {
    const storedRoles = localStorage.getItem('roles')
    if (storedRoles) {
      roles.value = JSON.parse(storedRoles)  // Cargar los roles desde localStorage
    }
  }

  // Cargar roles desde el backend y almacenarlos en localStorage
  const cargarRoles = async () => {
    try {
      const data = await getRoles()
      roles.value = data

      // Guardar los roles en localStorage para persistencia
      localStorage.setItem('roles', JSON.stringify(roles.value))
    } catch (error) {
      console.error('Error al cargar roles:', error)
    }
  }

  // Cargar roles desde localStorage al montar el componente
  loadRolesFromStorage()

  return { roles, cargarRoles }
})
