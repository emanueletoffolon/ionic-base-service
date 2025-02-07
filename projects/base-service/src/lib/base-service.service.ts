import { Injectable } from '@angular/core';
import { Network } from '@capacitor/network';

@Injectable({
  providedIn: 'root',
})
export class BaseService {
  constructor() {}

  async isOffline(): Promise<boolean> {
    const status = await Network.getStatus();
    return !status.connected;
  }
}
