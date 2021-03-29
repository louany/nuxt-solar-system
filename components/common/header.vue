<template>
  <header
    id="header"
    :class="[ toggle ? 'open' : 'close']"
  >
    <div
      id="toggle-wrapper"
      @click="toggleNav"
    >
      <span id="toggleNav" />
    </div>
    <nav id="navigationBar">
      <ul>
        <li>
          <nuxt-link to="/">
            Accueil
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/asters">
            Liste des astres
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/favourites">
            Mes favoris
          </nuxt-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import { ref } from '@nuxtjs/composition-api'

export default {

  setup () {
    const toggle = ref(false)

    const toggleNav = () => {
      toggle.value = !toggle.value
    }

    return { toggle, toggleNav }
  }
}
</script>

<style lang="scss">
#header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
}
#header.open {
  #navigationBar {
    left: 0;
  }
  #toggleNav {
    width: 0;
    min-width: 0;
    &::before {
      transform: translateY(-13px) rotate(-45deg);
      width: 5rem;
    }
    &::after {
      transform: translateY(17px) rotate(45deg);
      width: 5rem;
    }
  }
}
#toggle-wrapper {
  position: absolute;
  padding: 2rem;
  top: 0;
  left: 0;
  min-width: 10rem;
  width: 10vw;
  height: 8rem;
  z-index: 40;
  cursor: pointer;
}
#toggleNav {
  position: relative;
  margin-top: 1.5rem;
  width: 100%;
  background: rgb(204, 122, 16);
  width: 5vw;
  &,
  &::before,
  &::after {
    transition: .4s all ease;
    height: 4px;
    min-width: 5rem;
    display: block;
  }
  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 5rem;
  }
  &::before {
    top: 1.5rem;
    background: rgb(23, 255, 178);
    width: 6vw;
  }
  &::after {
    top: -1.5rem;
    width: 4vw;
    background: rgb(149, 0, 207);
  }
}
#navigationBar {
  position: absolute;
  overflow: hidden;
  top: 0;
  bottom: 0;
  left: -30rem;
  height: 100vh;
  z-index: 1;
  transition: .4s all ease;
  width: 30rem;
  border-right: 4px solid rgb(204, 122, 16);
  background: rgba(19, 15, 70,.8);
  padding: 12rem 2rem 2rem;
  a {
      text-decoration: none;
      color: rgb(255, 255, 255);
  }
  ul {
    list-style-type: none;
    a {
      &:hover,
      &:focus,
      &:active,
      &.nuxt-link-exact-active {
        color:  rgb(23, 255, 178);
        &:after {
          width: 100%;
        }
      }
      &:after {
        content: '';
        width: 0;
        height: 4px;
        display: block;
        background:rgb(149, 0, 207) ;
        transition: .4s all ease;;
      }
    }
  }

  li {
    margin-bottom: 1.6rem;
    font-size: 2.4rem;
    display: inline-block;
  }

}
</style>
