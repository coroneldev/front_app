<template>
  <q-page class="q-pa-md">
    <q-card class="tabla-usuarios-card">
      <q-card-section>
        <div class="text-h5 text-primary">Roles del sistema</div>
      </q-card-section>

      <q-separator />

      <q-card-section>
        <q-markup-table flat bordered class="tabla-usuarios-table">
          <thead>
            <tr>
              <th class="text-left">ID</th>
              <th class="text-left">Nombre</th>
            </tr>
          </thead>
          <tbody>
            <!-- 🟡 Mostrar mensaje si la lista está vacía -->
            <tr v-if="roles.length === 0">
              <td colspan="2" class="text-center">No hay roles disponibles</td>
            </tr>

            <!-- 🟢 Iterar sobre los roles -->
            <tr v-else v-for="rol in roles" :key="rol.id">
              <td>{{ rol.id }}</td>
              <td>{{ rol.nombre }}</td>
            </tr>
          </tbody>
        </q-markup-table>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useRolStore } from '@/stores/useRolStore'

// Instanciamos el store de roles
const rolStore = useRolStore()

// Referencia reactiva a la lista de roles
const roles = rolStore.roles

// Cargar roles al montar el componente
onMounted(async () => {
  // Si no hay roles en localStorage, los cargamos desde la API
  if (roles.length === 0) {
    await rolStore.cargarRoles()
  }
})
</script>
