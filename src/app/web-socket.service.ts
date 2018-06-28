import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import * as socketIo from 'socket.io-client';

const SERVER_URL = 'http://localhost:8080';

@Injectable()
export class WebSocketService {
    private socket;

    public initSocket(): void {
        this.socket = socketIo(SERVER_URL);
    }

    public send(message: String): void {
        this.socket.emit('message', message);
    }

    public onMessage(): Observable<String> {
        return new Observable<String>(observer => {
            this.socket.on('stayAwake', (data: String) => observer.next(data));
        });
    }

    public onEvent(event: Event): Observable<any> {
        return new Observable<Event>(observer => {
            this.socket.on(event, () => observer.next());
        });
    }
}