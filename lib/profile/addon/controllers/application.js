import Controller from '@ember/controller';
import moment from 'moment';

export default Controller.extend({
  userName: moment().calendar(),
});
