import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import * as socketIo from 'socket.io-client';

const SERVER_URL = ':3000';

@Injectable()
export class WebSocketService {
    private socket;
    public isInit = false;

    public initSocket(): void {
        if (!this.isInit) {
            this.socket = socketIo(SERVER_URL);
            this.isInit = true;
        }
    }

    public connect(username, token): void {
        this.socket.emit('custom_connect', {username: username, token: token});
    }

    public send(message: String): void {
        this.socket.emit('message', message);
    }

    public getFriends(): void {
        this.socket.emit('getConnectedFriends');
    }

    public onConnectedFriends(): Observable<String> {
        return new Observable<String>(observer => {
            this.socket.on('connectedFriends', (data: String) => observer.next(data));
        });
    }

    public onStayAwake(): Observable<String> {
        return new Observable<String>(observer => {
            this.socket.on('stayAwake', () => observer.next());
        });
    }

    /*public onEvent(event: Event): Observable<any> {
        return new Observable<Event>(observer => {
            this.socket.on(event, () => observer.next());
        });
    }*/
}