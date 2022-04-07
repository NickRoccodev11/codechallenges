function Stopwatch() {
   
    let running, duration = 0, startTime, stopTime
    
    this.start = function () {
        if (running === true) {
            throw new Error("stopwatch is already running")
        } else {
            running = true;
            startTime = new Date();
        }
    },

        this.stop = function () {
            if (running !== true) {
                throw new Error('Stopwatch is already stopped')
            } else {
                running = false
                stopTime = new Date();
                const elapsed = (stopTime.getTime() - startTime.getTime())/1000
                duration += elapsed;
            }
        },

        this.reset = function () {
            startTime = null;
            stopTime = null;
            duration = 0;
            running = false;
        },

    Object.defineProperty(this, "duration", {
        get: function () { return duration }
    })
}

const sw = new Stopwatch();
