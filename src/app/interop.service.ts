import { Injectable } from "@angular/core";
import { IOConnectStore } from "@interopio/ng";

@Injectable({
  providedIn: 'root'
})
export class InteropService {

    constructor(private readonly ioConnectStore: IOConnectStore) { }

    public get ioConnectAvailable() {
        return !this.ioConnectStore.getInitError();
    }

    public registerMethod(name: string, callback: () => void): Promise<void> {
        if (!this.ioConnectAvailable) {
            return Promise.reject("io.Connect wasn't initialized.");
        }
        return this.ioConnectStore.getIOConnect().interop.register(name, callback);
    }
}