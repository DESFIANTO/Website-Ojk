<template>
    <!--sidebar -->
    <v-navigation-drawer color="cyan-lighten-4"
        :location="$vuetify.display.mobile ? 'left' : undefined">
        <ListSideBar :items="items"/>
      </v-navigation-drawer>
</template>
<script setup>
import ListSideBar from './ListSideBar.vue';
import { ref } from 'vue';
const items = ref([
        { text: 'Dashboard', icon: 'mdi-view-dashboard' },
        { text: 'Category', icon: 'mdi-view-list' },
        { text: 'News', icon: 'mdi-newspaper-variant-outline' },
        { text: 'Profile', icon: 'mdi-account' },
      ])
</script>