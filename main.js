const elEngkattasi = document.querySelector(".engkattasi");

let qurilish =
  "Andava Bolta Tesha Arava dszgsfgsfhgDFSH sdgGADHFDAGHDGAH DAFGSGSAFGFDH SDGSFGFSGfgfd";
let array = qurilish.split(" ");

let engkattasi;

var soni = 0;
for (let i = 0; i < array.length; i++) {
  if (array[i].length > soni) {
    var soni = array[i].length;
    engkattasi = array[i];
  }
}
elEngkattasi.textContent = engkattasi;
