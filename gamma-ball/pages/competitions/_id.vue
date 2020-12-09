<template>
  <div class="page-body border-none card py-4">
    <!-- This will be better managed in a dynamic fiorm, for now let's hardcode it -->
    <div class="breadcrumbs py-2 mb-3">
      <router-link
        class="fancy-link"
        to="/"
      >All Competitions</router-link>
      <span class="mx-2">/</span>
      <span class="text-muted">{{name}}</span>
    </div>

    <h4 class="text-primary"><strong>{{name}}</strong></h4>

    <div class="row tabs">
      <div class="col-6 d-flex">
        <div
          class="tab"
          :class="{'active': active_tab === 'standings'}"
          @click="setActiveTab('standings')"
        >
          <span class="header">Standings</span>
        </div>
      </div>

      <div class="col-6 d-flex">
        <div
          class="tab"
          :class="{'active': active_tab === 'matches'}"
          @click="setActiveTab('matches')"
        >
          <span class="header">MATCHES</span>
        </div>
      </div>
    </div>

    <div class="tab-body-holder">
      <transition name="fade-right">
        <standings
          @update-name="updateName"
          v-if="active_tab === 'standings'"
        ></standings>
        <matches
          @update-name="updateName"
          v-else
        ></matches>
      </transition>
    </div>
  </div>
</template>
<script>
import Standings from '@/components/Standings.vue';
import Matches from '@/components/Matches.vue';

export default {
  components: {
    Standings,
    Matches,
  },
  data() {
    return {
      active_tab: 'standings',
      name: '',
    };
  },

  methods: {
    setActiveTab(tab) {
      this.active_tab = tab;
    },
    updateName(name) {
      this.name = name;
    },
  },

  mounted() {},
};
</script>
