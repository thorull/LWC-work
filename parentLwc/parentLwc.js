import { LightningElement, track} from 'lwc';

export default class ParentLwc extends LightningElement {
    @track valueFromChild = '';

    handleClickEvent(event) {
        this.valueFromChild = event.detail;
    }
}