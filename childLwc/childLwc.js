import { LightningElement, track } from 'lwc';

export default class ChildLwc extends LightningElement {
@track txtBoxVal= '';
@track teststring = 'hi';
handleChange(event) {
    this.txtBoxVal = event.target.value;

}
handleClick() {
    const txtBoxValue = this.txtBoxVal;
    const inputText = new CustomEvent('inputtext', {
        bubbles: true,
        composed: true,
    detail : txtBoxValue
    }
    )
    this.dispatchEvent(inputText);
}

}