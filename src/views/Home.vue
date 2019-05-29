<template>
  <main>
    <h2>Get your stomach running 👍🏽</h2>
    <p>Welcome to our fine collection of restaurants that cook the most scrumptuous meals!</p>
    <p>🥧 Click the <b>Food</b> link to view some of our chefs 👩🏼‍🍳 and fans 👯‍</p>
    <br>
    <br>
    <router-link class="view-food" to="/food">View Chefs 🏖</router-link>
  </main>
</template>

<script lang="js">
export default {
  name: 'Home'
}
</script>

<style lang="scss" scoped>
main {
  height: 400px;
  overflow-y: scroll;

  .view-food {
    padding: 10px 20px;
    margin-top: 20px;
    background: #61056d;
    color: #fff;
    text-decoration: none;
    border-radius: 5px;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
  }
}
</style>
