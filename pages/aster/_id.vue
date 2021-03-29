<template>
  <section class="aster_describ">
    <p class="link backpage" @click="backPage()">
      <span class="material-icons">
        keyboard_backspace
      </span>
      <span>Retour</span>
    </p>
    <h1>{{ aster.name }}</h1>
    <!-- <p>{{ aster }}</p> -->
    <ul class="characteristic">
      <li v-if="aster.mass">
        <span>Masse : </span>
        <span v-html="asterCalcul(aster.mass)" />
      </li>
      <li v-if="aster.vol">
        <span>Volume : </span>
        <span v-html="asterCalcul(aster.vol)" />
      </li>
      <li v-if="aster.inclination">
        <span>inclination : </span>
        <span>{{ aster.inclination }}</span>
      </li>
      <li v-if="aster.meanRadius">
        <span>Rayon moyen : </span>
        <span>{{ aster.meanRadius }} km</span>
      </li>
      <li v-if="aster.equaRadius">
        <span>Rayon équatorial : </span>
        <span>{{ aster.equaRadius }} km</span>
      </li>
      <li v-if="aster.polarRadius">
        <span>Rayon polaire : </span>
        <span>{{ aster.polarRadius }} km</span>
      </li>
      <li v-if="aster.density">
        <span>Densité : </span>
        <span>{{ aster.density }}</span>
      </li>
      <li v-if="aster.gravity">
        <span>Gravité : </span>
        <span>{{ aster.gravity }}</span>
      </li>
      <li v-if="aster.eccentricity">
        <span>Excentricité : </span>
        <span>{{ aster.eccentricity }}</span>
        <span class="tooltip">L’excentricité orbitale définit, en mécanique céleste et en mécanique spatiale, la forme des orbites des objets célestes.</span>
      </li>
      <li v-if="aster.sideralOrbit">
        <span>Période de révolution sidérale :</span>
        <span>{{ sideralOrbitYears(aster.sideralOrbit) }}</span>
        <span class="tooltip">La période de révolution, aussi appelée période orbitale, est la durée mise par un astre pour accomplir une révolution complète autour d’un autre astre (par exemple une planète autour du Soleil ou un satellite autour d’une planète).
Cette période correspond à la durée mise par l'astre concerné pour revenir au même point par rapport à un point donné, ce dernier pouvant être une étoile fixe (période de révolution sidérale), le point équinoxial...</span>
      </li>
      <li v-if="aster.sideralRotation">
        <span>Période de rotation sidérale :</span>
        <span>{{ aster.sideralRotation }} heures</span>
        <span class="tooltip">La période de rotation est soit la durée mise par un astre (étoile, planète, astéroïde) pour faire un tour sur lui-même (environ 23 h 56 min 4,3 s pour la Terre, par exemple), soit la durée au bout de laquelle une planète retrouve la même orientation par rapport à son étoile (24 h en moyenne pour la Terre, par exemple).</span>
      </li>
      <li v-if="aster.moons">
        <span>Lunes :</span>
        <ul>
          <li
            v-for="moon in aster.moons"
            :key="moon.rel"
          >
            <span
              class="link"
              @click="linkMoon(moon.rel)"
            >
              {{ moon.moon }}
            </span>
          </li>
        </ul>
      </li>
      <li v-if="aster.discoveredBy && aster.discoveryDate">
        <span>Découvert par {{ aster.discoveredBy }}</span>
        <br>
        <span>Le {{ aster.discoveryDate }}</span>
      </li>
    </ul>
  </section>
</template>

<script>

export default {
  name: 'Aster',
  async asyncData ({ params, $axios }) {
    const getAster = await $axios.get(`https://api.le-systeme-solaire.net/rest/bodies/${params.id}`)
    const aster = getAster.data
    return { aster }
  },
  methods: {
    linkMoon (rel) {
      const moonId = rel.split('bodies/')[1]
      this.$router.push(`/aster/${moonId}`)
    },
    backPage () {
      this.$router.go(-1)
    },
    sideralOrbitYears (sideralOrbit) {
      const parsedSideralOrbit = Math.round((parseInt(sideralOrbit, 10) / 366))
      return parsedSideralOrbit + ' années'
    },
    asterCalcul (data) {
      const keys = Object.keys(data)
      const dataValue = data[keys[0]]
      const dataExponent = '<sup>' + data[keys[1]] + '</sup>'

      return `${dataValue} * 10 ${dataExponent} kg`
    }
  }
}
</script>

<style lang="scss">
.aster_describ {
  color: #fff;
  h1 {
    margin-bottom: 2rem;
  }
}
.backpage {
  padding-top: 2rem;
  display: inline-block;
  transition: .4s all ease;
  & > * {
    vertical-align: middle;
  }
  &:hover {
    margin-left: 1.2rem;
  }
}
.characteristic {
  list-style: none;
  ul li {
    margin-left: 2rem;
  }
  & > li {
    position: relative;
    line-height: 2;
    .tooltip {
      position: absolute;
      top: 100%;
      left: -100vw;
      background: rgb(19, 15, 70);
      border: 1px solid rgb(204, 122, 16);
      width: auto;
      height: max-content;
      max-width: 60vw;
      padding: 1.2rem;
      z-index: 1;
      transition: .7s opacity ease,
      .5s left ease;
      opacity: 0;
    }
    & > span:first-of-type:hover ~ .tooltip {
        display: block;
        opacity: 1;
        left: 0;
    }
  }
}
</style>
