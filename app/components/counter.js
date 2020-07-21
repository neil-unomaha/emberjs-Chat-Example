import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class CounterComponent extends Component {
  // This property is tracked, so everytime it changes, any component that uses it is updated
  @tracked count = 0;

  // getters are special
  // you don't need @action on getters
  // they are already tracking variables they depend on
  get total() {
    return this.count * this.args.multiple;
  }


  @action
  double() {
    this.args.updateMultiple(this.args.multiple * 2);
  }

  @action
  change(amount) {
    this.count = this.count + amount;
  }



}
