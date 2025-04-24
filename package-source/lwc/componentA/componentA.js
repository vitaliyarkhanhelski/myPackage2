import { LightningElement } from 'lwc';

export default class ComponentA extends LightningElement {
    message = 'Hello from Component A';

    renderedCallback() {
        const message = event.target.value;

        const selectEvent = new CustomEvent('ready', {
            detail: {
                componentName: 'c-component-a',
                eventName: 'customevent1'
            },
            bubbles: true
        });
        this.dispatchEvent(selectEvent);
    }

    handleClick() {
        this.message = 'Button clicked in Component A';
        const message = event.target.value;

        const selectEvent = new CustomEvent('customevent1', {
            detail: 'Hello from Component A',
            bubbles: true
        });
        this.dispatchEvent(selectEvent);
    }
}