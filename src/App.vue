<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title>Mi App</q-toolbar-title>
        <q-btn flat label="Inicio" to="/" />
        <q-btn flat label="Usuarios" to="/usuarios" />
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
