<template>
  <div class="aster_filter">
    <span @click="filterEmit('all')">Tout</span>
    <span @click="filterEmit('isPlanet')">Planètes</span>
    <span @click="filterEmit('withMoon')">Astres possédant une lune</span>
  </div>
</template>

<script>
export default {
  emits: ['filter'],
  setup (_, context) {
    function filterEmit (filterName) {
      context.emit('filter', filterName)
    }

    return {
      filterEmit
    }
  }
}
</script>

<style lang="scss">
.aster_filter {
  padding-top: 1.2rem;
  white-space: nowrap;
  overflow: auto;
  span {
    padding: .8rem 1.2rem;
    display: inline-block;
    background: rgb(45, 37, 151);
    margin-bottom: 1.2rem;
    cursor: pointer;
    &:not(:last-of-type) {
      margin-right: 1.2rem;
    }
    &:target,
    &:focus,
    &:active,
    &:hover {
      background: rgb(204, 122, 16);
    }
  }
}
</style>
