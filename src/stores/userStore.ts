import { defineStore } from 'pinia';
import User from 'src/domain/entity/user';
import { ref } from 'vue';

export const useUserStore = defineStore('user', () => {
  const user = ref<User | null>(null);
  const users = ref<User[]>([]);

  const createUser = (name: string, email: string, password: string) => {
    const newUser = new User(name, email, password);
    users.value.push(newUser);
  };
});
