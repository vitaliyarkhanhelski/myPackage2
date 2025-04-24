import { LightningElement } from 'lwc';

export default class ComponentB extends LightningElement {
    selectedColor;

    colorOptions = [
        { label: 'Red', value: 'red' },
        { label: 'Green', value: 'green' },
        { label: 'Blue', value: 'blue' },
        { label: 'Yellow', value: 'yellow' },
        { label: 'Purple', value: 'purple' }
    ];

    renderedCallback() {
        const selectEvent = new CustomEvent('ready', {
            detail: {
                componentName: 'c-component-b',
                eventName: 'customevent2'
            },
            bubbles: true
        });
        this.dispatchEvent(selectEvent);
    }

    handleColorChange(event) {
        this.selectedColor = event.detail.value;
        const message = event.target.value;

        const selectEvent = new CustomEvent('customevent2', {
            detail: `Hello from Component B, selected color: ${this.selectedColor}`,
            bubbles: true
        });
        this.dispatchEvent(selectEvent);
    }

    get colorStyle() {
        return `height: 80px; margin-top: 20px; background-color: ${this.selectedColor}; border-radius: 8px;`;
    }
}