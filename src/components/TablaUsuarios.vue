<template>
    <q-page class="tabla-usuarios-page">
      <q-card class="tabla-usuarios-card">
        <q-card-section>
          <div class="text-h5 text-primary">Usuarios del sistema</div>
        </q-card-section>
  
        <q-separator />
  
        <q-card-section>
          <q-markup-table flat bordered class="tabla-usuarios-table">
            <thead>
              <tr>
                <th class="text-left">Nombre</th>
                <th class="text-left">Correo</th>
                <th class="text-left">Rol</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="usuario in usuarios" :key="usuario.email">
                <td>{{ usuario.nombre }}</td>
                <td>{{ usuario.email }}</td>
                <td>{{ usuario.rol }}</td>
              </tr>
            </tbody>
          </q-markup-table>
        </q-card-section>
      </q-card>
    </q-page>
  </template>
  
  <script setup lang="ts">
  const usuarios = [
    { nombre: 'Ana Pérez', email: 'ana@example.com', rol: 'Admin' },
    { nombre: 'Juan López', email: 'juan@example.com', rol: 'Editor' },
    { nombre: 'Lucía García', email: 'lucia@example.com', rol: 'Viewer' },
    { nombre: 'Pedro Gómez', email: 'pedro@example.com', rol: 'Editor' },
    { nombre: 'Laura Torres', email: 'laura@example.com', rol: 'Admin' },
  ]
  </script>
  
  <style scoped>
  .tabla-usuarios-page {
    background-color: #f0f2f5;
    min-height: 100vh;
    padding: 40px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }
  
  .tabla-usuarios-card {
    width: 100%;
    max-width: 1200px;
    background-color: white;
    border-radius: 12px;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
    padding: 24px;
  }
  
  .tabla-usuarios-table th,
  .tabla-usuarios-table td {
    padding: 12px;
    font-size: 16px;
  }
  </style>
  