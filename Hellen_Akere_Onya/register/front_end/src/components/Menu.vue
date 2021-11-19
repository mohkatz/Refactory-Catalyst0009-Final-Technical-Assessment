<template>


    <v-app-bar flat short tile color="secondary" app>

      <v-toolbar-items class="">
        <v-btn text
          class="text-capitalize secondary"
          v-for="item in menuItems"
          :key="item.title"
          :to="item.path">
          
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
            <v-spacer></v-spacer>

    </v-app-bar>
</template>
<script>
export default {
  name: "Menu",
  data(){
    return {
      appTitle: 'StudReg',
      dialog: false,
      sidebar: false,
      menuItems: [
          { title: 'Home', path: '/', icon: 'face' },
          { title: 'Students', path: '/students', icon: 'face' },
     ]
    }
  },
};
</script>