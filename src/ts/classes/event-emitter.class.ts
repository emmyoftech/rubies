export class EventEmitter<T> {
    private events: {[key: string]: Array<any>} = {}

    on(eventName: T, listener: () => void){
        if(typeof eventName != "string") return

        if(!this.events[eventName]){
            this.events[eventName] = []
        }

        this.events[eventName].push(listener)
    }

    emit(eventName: T) {
        if(typeof eventName != "string") return

        if(!this.events[eventName]) return

        this.events[eventName].forEach(l => l())
    }
}