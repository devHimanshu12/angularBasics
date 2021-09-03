
import {Component} from "@angular/core";

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'

})
export class ServerComponent{

    localHost = 4200;
    browser = 'Google Chrome';
    port(){
        return 4500;
    }
}