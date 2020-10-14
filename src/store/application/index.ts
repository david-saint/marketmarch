import {persist} from 'mobx-persist';
import {observable, action} from 'mobx';

export default class ApplicationStore {
  @observable isLoading: boolean = true;
  @persist @observable boarded: boolean = false;

  @action setLoading = (condition: boolean) => (this.isLoading = condition);
  @action hasBoarded = () => this.boarded;
  @action board() {
    this.boarded = true;
  }
}
