<template>
  <main>
    <h4>{{title}}</h4>
    <div class="main">
      <transition name="poop" mode="out-in">
      <div v-show="showGetMore" class="no-more">
        <h2>Oops! 😂</h2>
        <p>Looks like you hate your chefs. Click '<b>Get More Chefs</b>' to request more chefs. 🎉</p>
        <button class="request-more" @click="getMoreUsers()">Get More Chefs</button>
      </div>
    </transition>
    <comment :users="usersArray" @deleteUser="deleteUser"/>
    </div>
  </main>
</template>
<script lang="js">
import Comment from '../components/Comment'

export default {
  name: 'Food',
  components: {
    Comment
  },
  data () {
    return {
      title: 'Look at our awesome chefs!',
      showGetMore: false
    }
  },
  computed: {
    usersArray () {
      return this.$store.getters.getAllUsers
    }
  },
  watch: {
    usersArray (newValue, oldValue) {
      if (newValue.length === 0) {
        this.showGetMore = true
      } else {
        this.showGetMore = false
      }
    }
  },
  methods: {
    deleteUser (user) {
      console.log(user)
      this.$store.commit({
        type: 'DELETE_USER',
        user
      })
    },
    getMoreUsers () {
      this.$store.dispatch({
        type: 'getUsers'
      })
    }
  },
  beforeMount () {
    console.log('Users array', this.usersArray)
    if ((!this.usersArray) || (this.usersArray && !this.usersArray.length)) {
      this.getMoreUsers()
    }
  }
}
</script>

<style lang="scss" scoped>

.main {
  height: 350px;
  overflow-y: scroll;
  padding: 10px;
}

.request-more {
  background: #14be55;
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
</style>
