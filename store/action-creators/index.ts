import * as UiActionCreators from './ui';
import * as UserActionCreators from './user';
import * as HotelsActionCreators from './hotels';

export default {
  ...UiActionCreators,
  ...UserActionCreators,
  ...HotelsActionCreators,
};
