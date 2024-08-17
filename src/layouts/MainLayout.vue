<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />
      </q-toolbar>
    </q-header>

    <q-drawer bordered v-model="leftDrawerOpen" show-if-above>
      <q-list>
        <q-item v-for="link in links" :key="link.to" clickable :to="link.to">
          <q-item-section>
            <q-item-label class="jersey-10-medium">{{
              link.label
            }}</q-item-label>
          </q-item-section>
          <q-item-section side>
            <q-avatar rounded :src="link.img" v-if="link.img" />
          </q-item-section>
        </q-item>
      </q-list>
      <div class="row full-width flex-center">
        <q-btn
          rounded
          :icon="$q.dark.isActive ? 'light_mode' : 'dark_mode'"
          @click="changeTheme"
        />
      </div>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useQuasar } from 'quasar';

const links = [
  {
    label: 'John Cena',
    to: '/messages',
    img: 'https://cdn.oantagonista.com/uploads/2024/07/john-cena_wwe-retirement-2024-07-215e75976d9fe625fd8897191ab20dd0.webp',
  },
  {
    label: 'Michael Scott',
    to: '/messages',
  },
  {
    label: 'Akita',
    to: '/messages',
  },
];

const $q = useQuasar();
const changeTheme = () => $q.dark.toggle();

const leftDrawerOpen = ref(false);
const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value;
};
</script>
