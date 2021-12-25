import * as actions from '../actions';
import reducer, { INITIAL_STATE } from '../reducer';

describe('Items reducer', () => {
  it('should return the initial state', () => {
    expect(reducer({}, undefined)).toEqual(INITIAL_STATE);
  });

  it('should handle ITEMS_REQUEST', () => {
    const payload = true;

    const expectedState = {
      ...INITIAL_STATE,
      isLoading: payload,
    };

    expect(reducer(INITIAL_STATE, actions.getItems())).toEqual(
      expectedState
    );
  });

  it('should handle PARTICIPATION_FETCH_SUCCESS', () => {
    const payload = 'payload';

    const expectedState = {
      ...INITIAL_STATE,
      data: payload,
    };

    expect(reducer(INITIAL_STATE, actions.aggadgadf(payload, { moduleId: 'SPA' }))).toEqual(
      expectedState
    );
  });

  it('should handle PARTICIPATION_FETCH_FAILURE', () => {
    const payload = 'error';

    const expectedState = {
      ...INITIAL_STATE,
      error: payload,
    };

    expect(reducer('SPA')(INITIAL_STATE, actions.fetchParticipationFailure(payload, { moduleId: 'SPA' }))).toEqual(
      expectedState
    );
  });

  it('should handle PARTICIPATION_MAKE_REQUEST', () => {
    const payload = 'payload';

    const expectedState = {
      ...INITIAL_STATE,
      data: payload,
    };

    expect(reducer('SPA')(INITIAL_STATE, actions.makeParticipationRequest(payload, { moduleId: 'SPA' }))).toEqual(
      expectedState
    );
  });
});
