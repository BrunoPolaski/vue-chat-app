<template>
  <q-page class="column bg-primary justify-between q-pa-xl">
    <div>
      <q-chat-message
        v-for="message in messages"
        :key="message.id"
        :name="message.name"
        :avatar="message.avatar"
        :text="[message.text]"
        :sent="message.sent"
        :date="message.date"
        :label="formatDate(message.date)"
      />
    </div>
    <q-page-sticky expand>
      <q-input class="bg-white" v-model="message" />
      <q-btn @click="sendMessage" label="Send" />
    </q-page-sticky>
  </q-page>
</template>
<script setup lang="ts">
import { date } from 'quasar';
import { ref } from 'vue';

const messages = ref([
  {
    id: 1,
    name: 'John Cena',
    avatar:
      'https://cdn.oantagonista.com/uploads/2024/07/john-cena_wwe-retirement-2024-07-215e75976d9fe625fd8897191ab20dd0.webp',
    text: "You can't see me!",
    sent: true,
    date: '2021-09-01T12:00:00',
  },
  {
    id: 2,
    name: 'Michael Scott',
    avatar:
      'https://i.pinimg.com/736x/1b/34/39/1b3439272614867efae272ed60b08697.jpg',
    text: "That's what she said!",
    sent: false,
    date: '2021-09-01T12:00:00',
  },
  {
    id: 3,
    name: 'Akita',
    avatar:
      'https://www.infoq.com/images/profiles/zDdlagNsRtArnva80YsOo70X0CrGzqVd.jpg',
    text: 'Ermmm, actually, that is not correct.',
    sent: true,
    date: '2021-09-01T12:00:00',
  },
]);

const message = ref('');

const formatDate = (dateString: string) =>
  date.formatDate(dateString, 'ss:mm:HH DD-MM-YYYY');
const sendMessage = () => {
  messages.value.push({
    id: messages.value.length + 1,
    name: 'John Cena',
    avatar:
      'https://cdn.oantagonista.com/uploads/2024/07/john-cena_wwe-retirement-2024-07-215e75976d9fe625fd8897191ab20dd0.webp',
    text: message.value,
    sent: true,
    date: new Date().toISOString(),
  });
  message.value = '';
};
</script>
