<template>
  <div>
    <Header />
    <main role="main">
      <Nuxt />
    </main>
  </div>
</template>

<script>
import Header from '~/components/common/header.vue'
export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html {
  font-size: 10px;
}

body {
  font-family: cursive, 'Courier New', Courier, monospace;
  position: relative;
  z-index: 1;
  font-size: 16px;
  background: rgb(19, 15, 70);
  height: 100vh;
  max-height: 100vh;
}

main {
  & > :not(.homeBg)  {
    padding-top: 12vh;
  }
  background: rgb(19, 15, 70);
}

section {
  padding: 0 3vh;
  h1 {
    color: rgb(204, 122, 16);
    font-size: 3.2rem;
    border-bottom: 4px solid rgb(204, 122, 16);
  }
}
.link {
  cursor: pointer;
  &:hover {
    color: rgb(204, 122, 16);
  }
}
.error {
  background: rgb(255, 89, 89);
  color: #fff;
  padding: .8rem 1.2rem;
  width: auto;
  max-width: 100%;
  position: absolute;
  top: 5vh;
  transform: translateX(-50%);
  left: 50%;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.loading {
  text-align: center;
  height: 20vh;
  line-height: 20vh;
}

@media (min-width: 1200px) {
  main {
    max-width: 120rem;
    margin: 0 auto;
  }
}
</style>
