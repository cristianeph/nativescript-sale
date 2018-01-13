import {Injectable} from '@angular/core';
import {Subscription} from "rxjs/Subscription";
import {Subject} from "rxjs/Subject";
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import {Message} from "../interfaces/message.interface";

type MessageCallback = (payload: any) => void;

@Injectable()
export class BusService {

    private handler;

    constructor() {
        this.handler = new Subject<Message>()
    }

    broadcast(type: string, payload: any) {
        this.handler.next({type, payload});
    }

    subscribe(type: string, callback: MessageCallback): Subscription {
        return this.handler
            .filter(message => message.type === type)
            .map(message => message.payload)
            .subscribe(callback);
    }

}
