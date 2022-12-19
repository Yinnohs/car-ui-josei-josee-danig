
function now() {
    const date =  new Date();
    return {
        hour: date.getHours(),
        minute: date.getMinutes(),
        second: date.getSeconds()
    };
}

const updateTimmer=(currentTime)=>{
    return  currentTime
}

function simpleClock(time) {
    const { hour, minute, second } = time;
  
    return hour + ":" + minute + ":" + second;
  }
  
const app= ()=>{

    setInterval(()=>{
        process.stdout.write(simpleClock(now()) + "\n")
    },1000)

}


app()