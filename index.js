let hrs
let mins
let secs
let span
let start_btn
let micro_secs

// windows.onLoad = function(){
//     hrs = 0
//     mins = 0
//     secs = 0
//     micro_secs = 0
//     span = document.getElementsByTagName("span")
//     start_btn = document.getElementById("start")
     
// }
// function initwatch(){
//     micro_secs += 1
//     if(micro_secs == 60){
//         micro_secs = 0
//         secs += 1 
//     }
//     if(secs == 60){
//         secs = 0
//         mins +=1
//     }
//     if(mins == 60){
//         mins = 0
//        hrs += 1
//     }
    span[0].innerHTML = hrs + "hrs"
    span[1].innerHTML = mins + "mins"
    span[2].innerHTML = secs + "secs"
// }

function startWatch(){
    let time;
     time = setInterval(
        ,100)
    //  start_btn.disabled = true
}