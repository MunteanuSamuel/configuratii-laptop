
function reseteazaConficuratia () {
    document.getElementById("reseteaza").reset();
}

let formular = document.getElementById("formular");

let Configuratie = {
    procesor: "",
    memorieRam: number,
    placaVideo: "",
    capacitateStocare: number,
}

let ram1 = {
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


function verificaRam (ram:object[]):number{
    let alegereRam=document.querySelector("#selectRam");
    for (let i=0; i<ram.lenght; i++){
        if (alegereRam===ram[i].tip){
            alegereRam=ram[i].pret;
        }
    }
    return alegereRam;
}

function verificaVideo (video:object[]):number{
    let alegereVideo=document.querySelector("#selectVideo");
    for (let i=0; i<video.length; i++){
        if (video[i].tip===alegereVideo){
            alegereVideo = video[i].pret;
        }
    }
    return alegereVideo;
}

function verificaProcesor (procesoare:object[]):number{
    let alegereProcesor=documnet.getElementById("selectProcesor");
    for (let i=0; i<procesoare.length; i++){
        if (procesoare[i].tip===alegereProcesor){
            alegereProcesor=procesoare[i].pret;
        }
    }
    return alegereProcesor;
}

function verificaStocare (stocare:object[]):number{
    let alegereStocare = document.getElementById("selectMemory");
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
}









/*
//Constructor function
function Configuratie () {
    this.procesor = procesor;
    this.memorieRam = memorieRam;
    this.placaVideo = placaVideo;
    this.capacitateStocare = capacitateStocare;
    this.pret = function (){
    return procesor.pret+mimorieRam.pret+plavaVideo.pret+capacitateStocare.pret;
//}}

let rams = document.querySelector("#selectRam").getAttribute("value");
let configuratie = new Configuratie('rams' )



// varianta cu preluarea atributului "value";
function calculeazaRam (){
   let ramAles = document.querySelector("#selectRam").getAttribute("value");}

*/



