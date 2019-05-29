<template>
  <div id="app">
    <img class="img-logo" src="./assets/la-du-zi.svg">
    <h1>LA DU ZI | 拉肚子 💩</h1>
    <div class="app-links">
      <div class="link"><router-link to="/">Home</router-link></div>
      <div class="link"><router-link to="/food">Food</router-link></div>
    </div>

    <keep-alive>
      <transition name="poop" mode="out-in">
        <router-view />
      </transition>
    </keep-alive>

  </div>
</template>

<script lang="js">
export default {
  name: 'App',
  created () {
    this.$store.dispatch({
      type: 'getUsers'
    })
  }
}
</script>

<style lang="scss">
#app {

  .img-logo {
    width: 240px;
  }

  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 30px;
}
.poop-enter-active,
.poop-leave-active {
  transition: opacity 0.2s;
}

.poop-enter,
.poop-leave-to {
  opacity: 0;
}

.app-links {
  display: flex;
  justify-content: center;
  margin: 10px;

  .link {
    margin: 10px;
    font-weight: 700;

    a {
      background: purple;
      color: white;
      text-decoration: none;
      padding: 8px 12px;
      border-radius: 3px;
    }
  }
}
</style>
