export class EventEmitter {
    constructor() {
        this.events = {};
    }
    on(eventName, listener) {
        if (typeof eventName != "string")
            return;
        if (!this.events[eventName]) {
            this.events[eventName] = [];
        }
        this.events[eventName].push(listener);
    }
    emit(eventName) {
        if (typeof eventName != "string")
            return;
        if (!this.events[eventName])
            return;
        this.events[eventName].forEach(l => l());
    }
}
