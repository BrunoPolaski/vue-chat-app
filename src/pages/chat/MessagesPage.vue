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
import Message from 'src/domain/entity/message';
import { ref } from 'vue';

const messages = ref<Message[]>([]);
const message = ref<string>('');

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
