<template>
  <section class="users">
    <div class="user" :key="index" v-for="(user, index) in users">
      <div class="user-data">
        <p><b>{{user.name}}</b></p>
        <p>{{user.email}}</p>
        <p>{{user.phone}}</p>
      </div>
      <button class="user-delete" @click="deleteMe(user)"> Delete </button>
    </div>
  </section>
</template>

<script lang="js">
export default {
  name: 'Comment',
  props: ['users'],
  methods: {
    deleteMe (option) {
      console.log('deleting user', option)
      this.$emit('deleteUser', option)
    }
  }
}
</script>

<style lang="scss">

.users {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width:50vw;

  .user {
    position: relative;
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    padding: 15px 25px 15px 15px;
    animation: fadeIn 0.5s ease-in;
    animation-fill-mode: both;

    .user-data {
      text-align: left;
      margin-right: auto;

      p {
        line-height: 1em;
        margin: 2px 0;
      }
    }

    .user-delete {
      background: #dc3545;
      color: #fff;
      border-radius: 3px;
      padding: 8px 12px;
      font-size: 0.9em;
      border: none;
      box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);

      &:focus {
        outline: none;
      }
    }
  }
}

// Set delay per List Item
@for $i from 1 through 10 {
  .user:nth-child(#{$i}) {
    animation-delay: 0.1s * $i;
  }
}

@keyframes fadeIn {
  0% {
    opacity: 0;
    top: 100px;
  }
  75% {
    opacity: 0.5;
    top: 0px;
  }
  100% {
    opacity: 1;
  }
}

@media (max-width: 767.98px) {
  .main {
    .users {
      width: auto;
      padding: 0 16px;
    }
  }
}

</style>
