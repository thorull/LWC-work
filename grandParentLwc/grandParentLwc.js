import { LightningElement, track} from 'lwc';

export default class GrandParentLwc extends LightningElement {
    @track valueFromGrandChild = '';
    handleGrandChildClick=(event) =>{
        this.valueFromGrandChild = event.detail;
    }
}