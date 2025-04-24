import { LightningElement } from 'lwc';
import ComponentA from 'c/componentA';
import ComponentB from 'c/componentB';

export default class DynamicLwc extends LightningElement {
    dynamicComponent;
    childMessage;

    loadComponentA() {
        this.childMessage = null;
        this.dynamicComponent = ComponentA;
    }

    loadComponentB() {
        this.childMessage = null;
        this.dynamicComponent = ComponentB;
        /*import('c/componentB')
            .then(({default:ctor}) => this.dynamicComponent = ctor)
            .catch(err => console.log(err))*/
    }

    reset() {
        this.dynamicComponent = null;
        this.childMessage = null;
    }

    handleChildEvent(event) {
        this.childMessage = event.detail;
    }

    handleChildReady(event) {
        const childComponentName = event.detail.componentName;
        const eventName = event.detail.eventName;
        this.template.querySelector(childComponentName).addEventListener(eventName, this.handleChildEvent.bind(this));

    }

}