import {
  selectForgeryDateIsExpired,
  selectParticipationError,
  selectParticipationData,
  selectParticipationIsLoading,
} from '../selectors';

const state = {
  forgery: {
    moduleState: {
      isExpired: false,
    },
  },
  participation: {
    data: [],
    isLoading: false,
    error: null,
  },
};

describe('Forgery selectors test', () => {
  it('checks the return value of selectForgeryDateIsExpired function', () => {
    expect(selectForgeryDateIsExpired(state)).toEqual(false);
  });
});

describe('SPA selectors test', () => {
  it('checks the return value of selectParticipationError function', () => {
    expect(selectParticipationError(state)).toEqual(null);
  });

  it('checks the return value of selectParticipationIsLoading function', () => {
    expect(selectParticipationIsLoading(state)).toEqual(false);
  });

  it('checks the return value of selectParticipationData function', () => {
    expect(selectParticipationData(state)).toEqual([]);
  });
});
