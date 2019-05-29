<template>
  <div class="user">
    <div class="user-data">
      <p><b>{{user.name}}</b></p>
      <p>{{user.email}}</p>
      <p>{{user.phone}}</p>
    </div>
    <button class="user-delete" @click="deleteMe(user)"> Delete </button>
  </div>
</template>

<script>
export default {
  name: 'User',
  props: ['user'],
  methods: {
    deleteMe (option) {
      this.$emit('deleteUser', option)
    }
  }
}
</script>
