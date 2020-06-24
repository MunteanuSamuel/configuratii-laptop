

//Constructor function
function Configuratie (a, b, c, d) {
    this.procesor = a;
    this.memorieRam = b;
    this.placaVideo = c;
    this.capacitateStocare = d;
}
//console.log(Object.keys(Configuratie));

function pretConfiguratie (){
   let rams = document.querySelector("#selectRam").value;
    // console.log(rams);
   let video = document.querySelector("#selectVideo").value;
    // console.log(video);
   let CPU = document.querySelector("#selectCPU").value;
    // console.log(CPU);
   let stocare = document.querySelector("#selectMemory").value;
    // console.log(stocare);
    let configuratieUser = new Configuratie (rams, video, CPU, stocare);
    // console.log(configuratieUser);
    document.querySelector("#trimitePret").innerHTML = "Configuratia selectata a fost aleasa.";
    return configuratieUser;
}


function afiseazaPret() {
    let confAleasa = Object.values(pretConfiguratie());
    //console.log(confAleasa);
    let pret = 1000;
    for (let i=0; i<confAleasa.length; i++){
        pret += Number.parseInt(confAleasa[i]);
        // console.log(pret);
    }
    document.querySelector("#afiseazaPret").innerHTML = "Pretul configuratiei alese este: " + pret + " Ron.";
    return pret;
}

function reseteazaConficuratia () {
    document.querySelector("#trimitePret").innerHTML = "Apasa pentru a alege configuratia.";
    document.querySelector("#afiseazaPret").innerHTML = "Apasa pentru a calcula pretul.";
}










/*let Configuratie = {
    procesor: "",
    memorieRam: number,
    placaVideo: "",
    capacitateStocare: number,
}*/

/*let ram1 = {
    tip: 4,
    pret: 150,
}
let ram2 = {
    tip: 8,
    pret: 300,
}

let ram3 = {
    tip: 16,
    pret: 450,
}

let procesor1 = {
    tip: "I3",
    pret: 250,
}

let procesor2 = {
    tip: "I5",
    pret: 450,
}

let procesor3 = {
    tip: "I7",
    pret: 650,
}

let video1 = {
    tip: "integrata",
    pret: 250,
}

let video2 = {
    tip: "dedicata",
    pret: 500,
}

let stocare1 = {
    tip: 256,
    pret: 250,
}

let stocare2 = {
    tip: 500,
    pret: 500,
}

let stocare3 ={
    tip: 1000,
    pret: 900,
}

let ram = [{tip: 4, pret: 150}, {tip: 8, pret: 300}, {tip: 16, pret: 450}];
let procesoare = [{tip: "I3", pret: 250}, {tip: "I5", pret: 450}, {tip: "I7", pret: 650}];
let stocare = [{tip: 256, pret: 250}, {tip: 512, pret: 500}, {tip: 1000, pret: 900}];
let video = [{tip: "dedicata", pret: 250}, {tip: "integrata", pret: 500}];

function verificaRam (a){
    let alegereRam=document.querySelector("#selectRam").value;
    for (let i=0; i<a.lenght; i++){
        if (alegereRam===a[i].tip){
            alegereRam=a[i].pret;
        }
    }
    return alegereRam;
}

function verificaVideo (video){
    let alegereVideo=document.querySelector("#selectVideo").value;
    for (let i=0; i<video.length; i++){
        if (video[i].tip===alegereVideo){
            alegereVideo = video[i].pret;
        }
    }
    return alegereVideo;
}

function verificaProcesor (procesoare){
    let alegereProcesor = document.getElementById("selectCPU").value;
    for (let i=0; i<procesoare.length; i++){
        if (procesoare[i].tip===alegereProcesor){
            alegereProcesor=procesoare[i].pret;
        }
    }
    return alegereProcesor;
}

function verificaStocare (stocare){
    let alegereStocare = document.getElementById("selectMemory").value;
    for (let i=0; i<stocare.length; i++){
        if (stocare[i].tip===alegereStocare){
            alegereStocare=stocare[i].pret;
        }
    }
    return alegereStocare;
}

let videoAles = verificaVideo(video);
let ramAles = verificaRam(ram);
let stocareAleasa = verificaStocare(stocare);
let procesorAles = verificaProcesor(procesoare);

let pretConfiguratie = 500;
pretConfiguratie += ramAles + videoAles + stocareAleasa + procesorAles;

function afiseazaPret (pret){
    document.getElementById("trimitePret").innerHTML="Pret toatal: + pretConfiguratie";
}*/

/*let pretConfiguratie = Configuratie.procesor.pret+Configuratie.mimorieRam.pret+Configuratie.plavaVideo.pret+Configuratie.capacitateStocare.pret;*/

