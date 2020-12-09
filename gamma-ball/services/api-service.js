/* This cpould've been done inline but is simply an example of abstracting requests...
I could create then have one single method to handle errors, store tokens etc.
This is meant to be a standalone plugin that can be used anywhere */
// import axios from '@nuxtjs/axios';

const ApiService = {
  axios: null,
  async getCompetitions() {
    try {
      const response = await this.axios.get('competitions?areas=2077&plan=TIER_ONE');

      return response.data;
    } catch (error) {
      // handle error here, alert or somthing
    }
    return null;
  },

  async getCompetition(competitionId) {
    try {
      const response = await this.axios.get(`competitions/${competitionId}`);

      return response.data;
    } catch (error) {
      // handle error here, alert or something
    }
    return null;
  },

  async getMatches(competitionId, year, matchday) {
    try {
      const response = await this.axios.get(
        `competitions/${competitionId}/matches?season=${year}&matchday=${matchday}`,
      );

      return response.data;
    } catch (error) {
      // handle error here, alert or something
    }
    return null;
  },

  async getStandings(competitionId) {
    try {
      const response = await this.axios.get(
        `competitions/${competitionId}/standings?standingType=TOTAL`,
      );

      return response.data;
    } catch (error) {
      // handle error here, alert or something
    }
    return null;
  },
};

export default ApiService;
