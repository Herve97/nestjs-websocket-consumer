/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable, OnModuleInit } from '@nestjs/common';
import { io, Socket } from 'socket.io-client';

@Injectable()
export class SocketClient implements OnModuleInit {
  public socketClient: Socket;

  constructor() {
    this.socketClient = io('http://localhost:9001');
  }

  onModuleInit() {
    this.registerConsumerEvent();
    //
  }

  private registerConsumerEvent() {
    // this.socketClient.emit('newMessage', { msg: 'Hey there!' });
    this.socketClient.on('connect', () => {
      console.log('connected to Gateway');
    });

    this.socketClient.on('onMessage', (payload: any) => {
      console.warn('The payload: ', payload);
    });
  }
}
