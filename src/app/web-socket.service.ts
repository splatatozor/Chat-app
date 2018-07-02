import {EventEmitter, Injectable, Output} from '@angular/core';
import { Observable } from 'rxjs/Observable';

import * as socketIo from 'socket.io-client';

const SERVER_URL = '192.168.1.188:3000';

@Injectable()
export class WebSocketService {
    private socket;
    public isInit = false;
    public hasChanged = false;

    public initSocket(): void {
        if (!this.isInit) {
            this.socket = socketIo(SERVER_URL);
            this.isInit = true;
        }
    }

    public connect(username, token): void {
        this.socket.emit('custom_connect', {username: username, token: token});
    }

    public getFriends(): void {
        this.socket.emit('getConnectedFriends');
    }

    public onConnectedFriends(): Observable<any> {
        return new Observable<any>(observer => {
            this.socket.on('connectedFriends', (data: String) => observer.next(data));
        });
    }

    public onStayAwake(): Observable<String> {
        return new Observable<String>(observer => {
            this.socket.on('stayAwake', () => observer.next());
        });
    }

    public onGetDiscussion(): Observable<any> {
        return new Observable<Event>(observer => {
            this.socket.on('getDiscussion', (data: any) => observer.next(data));
        });
    }

    public sendDiscussionMessage(data){
        this.socket.emit('addDiscussionMessage', data);
    }

    public close(){
        this.socket.close();
    }

    /*public onEvent(event: Event): Observable<any> {
        return new Observable<Event>(observer => {
            this.socket.on(event, () => observer.next());
        });
    }*/
}