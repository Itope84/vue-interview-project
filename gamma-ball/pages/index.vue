<template>
  <div class="page-body border-none card py-4">
    <h4><strong>All Competitions</strong></h4>

    <div class="row">
      <loading v-if="!competitions.length"></loading>

      <div
        class="col-sm-6 mb-4"
        v-for="competition in competitions"
        :key="competition.id"
      >
        <nuxt-link
          :to="`/competitions/${competition.id}`"
          class="competition--link"
        >
          <div class="px-4 py-4 shadow-lg rounded-sm competition">
            <div class="competition--emblem">
              <img
                :src="
                    competition.emblemUrl ||
                      emblems[competition.code] ||
                      emblems['default']
                  "
                alt=""
                class="img-fluid"
              />
            </div>
            <div class="competition--details">
              <h4 class="h5 mb-1">
                <strong>{{ competition.name }}</strong>
              </h4>
              <span class="small h6">{{ competition.area.name }}</span>
            </div>
          </div>
        </nuxt-link>
      </div>

    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import ApiService from '@/services/api-service';
import emblems from '@/utils/emblems';
import Loading from '@/components/Loading.vue';

// const c_response = {
//   count: 10,
//   filters: { areas: [2077], plan: "TIER_ONE" }
// };

export default {
  name: 'home',
  components: {
    Loading,
  },

  data() {
    return {
      competitions: [],
      emblems,
    };
  },

  mounted() {
    ApiService.axios = this.$axios;
    ApiService.getCompetitions().then((response) => {
      this.competitions = response.competitions || [];
    });
  },
};
</script>

<style>
</style>
