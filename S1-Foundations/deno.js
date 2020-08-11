const food = Deno.args[0];
const parent = Deno.args[1];

// Create my first deno program
if (food === "Love" && parent === "Ryan") {
    console.log("🦕...Deno is born!");
} else {
    console.log("🥚...This egg need some love!");
}

// deno run deno.js 'Love' 'Ryan'

// Metrics
setTimeout(() => {
    console.log("Check");
    console.log(Deno.metrics());
}, 1000)

// console.log(Deno.metrics());

// console.log(window);