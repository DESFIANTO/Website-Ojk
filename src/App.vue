<template>

    <v-layout>

      
      <SideBar v-model="drawer"/>
      <!-- Navbar -->
      <v-app-bar
        color="cyan-lighten-4"
        prominent>
        <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

        <v-toolbar-title>Admin</v-toolbar-title>

        <v-spacer></v-spacer>

        <template v-if="$vuetify.display.mdAndUp">
          <v-btn icon="mdi mdi-logout" variant="text" color="red"></v-btn>
        </template>

      </v-app-bar>

      <!-- Main -->
      <v-main style="height: 500px;">
        <v-card-text>
          The navigation drawer will appear from the bottom on smaller size screens.
        </v-card-text>
      </v-main>
    </v-layout>
</template>


<script setup>
import { ref } from 'vue';
import SideBar from './components/SideBar.vue';
const drawer = ref(false)

</script>