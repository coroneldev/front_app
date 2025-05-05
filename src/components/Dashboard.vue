<template>
  <q-layout view="hHh Lpr lff" container style="height: 100vh; width: 100vw;">

    <!-- Header -->
    <q-header elevated>
      <q-toolbar>
        <q-btn flat @click="drawer = !drawer" round dense icon="=" />
        <q-toolbar-title>Menu</q-toolbar-title> 
      </q-toolbar>
    </q-header>

    <!-- Sidebar Drawer -->
    <q-drawer v-model="drawer" show-if-above :width="230" :breakpoint="500" bordered>
      <q-scroll-area class="fit">
        <q-list>
          <!-- Menu Items -->
          <q-item clickable @click="link = 'home'" :active="link === 'home'" to="/home">
            <!--<q-item-section avatar><q-icon name="home" /></q-item-section>-->
            <q-item-section>Inicio</q-item-section>  <!-- Opción en Español -->
          </q-item>
          

          <q-item clickable @click="link = 'usuarios'" :active="link === 'usuarios'" to="/usuarios">
            <!--<q-item-section avatar><q-icon name="people" /></q-item-section>-->
            <q-item-section>Usuarios</q-item-section>  <!-- Opción en Español -->
          </q-item>

          <q-item clickable @click="link = 'roles'" :active="link === 'roles'" to="/roles">
            <!--<q-item-section avatar><q-icon name="security" /></q-item-section>-->
            <q-item-section>Roles</q-item-section>  <!-- Opción en Español -->
          </q-item>
          
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <!-- Page Container -->
    <q-page-container>
      <q-page padding>
        <router-view />
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
export default {
  name: 'Dashboard',
  data() {
    return {
      drawer: false,
      link: 'home',
    };
  },
};
</script>

<style scoped>
/* Puedes agregar estilos si es necesario */
</style>
