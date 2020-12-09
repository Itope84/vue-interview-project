import ApiService from '@/services/api-service';

describe('API Service', () => {
  test('axios is not null', () => {
    const axios = { ApiService };
    expect(axios).toBeTruthy();
  });
  test('fetches list of valid competitions', (done) => {
    function callback(data) {
      const desiredObject = {
        id: 1,
        code: '',
        name: '',
        area: {
          name: '',
        },
      };

      if (data.length > 0) {
        try {
          expect(data).toBe(expect.arrayContaining(expect.toMatchObject(desiredObject)));
          done();
        } catch (error) {
          done(error);
        }
      }
    }

    ApiService.getCompetitions(callback);
  });
});
