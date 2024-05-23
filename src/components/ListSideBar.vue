<template>
    <v-list density="compact">
      <v-list-subheader class="my-3 text-h5 text-uppercase">Username</v-list-subheader>

      <v-list-item
        v-for="(item, i) in items"
        :key="i"
        :value="item"
        color="primary"
      >
        <template v-slot:prepend>
          <v-icon :icon="item.icon"></v-icon>
        </template>

        <v-list-item-title >{{ item.text }}</v-list-item-title>
      </v-list-item>
    </v-list>
</template>

<script setup>
defineProps({
    items:{
        type:Object,
        required:true
    }
})
</script>