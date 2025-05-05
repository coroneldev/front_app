<template>
  <q-layout view="lHh Lpr lFf">
    <!-- Puedes eliminar por completo este q-header si no lo necesitas -->
    <!-- <q-header elevated>
      <q-toolbar>
        <q-toolbar-title>Mi App</q-toolbar-title>
        <q-btn flat label="Inicio" to="/" />
        <q-btn flat label="Usuarios" to="/usuarios" />
        <q-btn flat label="Roles" to="/roles" />
      </q-toolbar>
    </q-header> -->

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
