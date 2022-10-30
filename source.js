const audi = [
    '144 4001 546gA4 Limousine',
    '152 0001 628gA4 Avant',
    '345 0003 694rS4 Limousine',
    '208 6002 234gA4 allroad quatro',
    '439 5005 824bRS 4 Avant',
    '352 6003 775rS4 Avant'
];
const decodeInfo = {
    'colorIndex' : 12,
    'cenaIndexStart': 0,
    'cenaIndexEnd': 7,
    'rataIndexStart': 7,
    'rataIndexEnd': 12,
    'nazwaIndexStart': 13
}
const imageSRC = {
    'A4 Limousine': 'https://mediaservice.audi.com/media/live/50900/fly1400x601n8/8wc/2020.png?imwidth=550',
    'A4 Avant':'https://mediaservice.audi.com/media/live/50900/fly1400x601n8/8wd/2020.png?imwidth=550',
    'A4 allroad quatro':'https://mediaservice.audi.com/media/live/50900/fly1400x601n8/8wj/2020.png?imwidth=550',
    'S4 Limousine':'https://mediaservice.audi.com/media/live/50900/fly1400x601n8/8wcs/2023.png?imwidth=550',
    'S4 Avant':'https://mediaservice.audi.com/media/live/50900/fly1400x601n8/8wds/2023.png?imwidth=550',
    'RS 4 Avant':'https://mediaservice.audi.com/media/live/50900/fly1400x601n8/8wdrxa/2020.png?imwidth=550'

}
let zdanie= 'zdanie';
function show(type) {
    switch(type) {
        case 'all':
            for(let i = 0; i < audi.length; i++) {
                    const el = document.createElement('div');
                    el.classList.add("element");
                    el.style.width = '400px';
                    el.innerHTML = "<b><h2>"+audi[i].substring(decodeInfo.nazwaIndexStart)+"</b></h2><br>Cena od : "+audi[i].slice(decodeInfo.cenaIndexStart,decodeInfo.cenaIndexEnd)+' PLN'+"<br><br><span>rata od "+audi[i].slice(decodeInfo.rataIndexStart,decodeInfo.rataIndexEnd)+'PLN (w Audi Perfect Lease dla przedsiębiorców - rata netto)';
                    const div = document.getElementById('container');
                    div.appendChild(el);
                    var audiImage = document.createElement("img");
                    audiImage.setAttribute("src", imageSRC[audi[i].substring(decodeInfo.nazwaIndexStart)]);
                    audiImage.setAttribute("height", "auto");
                    audiImage.setAttribute("width", "380");
                    audiImage.setAttribute("margin", "auto");
                    el.appendChild(audiImage);
            }
            break;
        case 'red':
            for(let i = 0; i < audi.length; i++) {
                if(audi[i][decodeInfo.colorIndex] == 'r') {
                    const el = document.createElement('div');
                    el.classList.add("element");
                    el.style.width = '400px';
                    el.innerHTML = "<b><h2>"+audi[i].substring(decodeInfo.nazwaIndexStart)+"</b></h2><br>Cena od : "+audi[i].slice(decodeInfo.cenaIndexStart,decodeInfo.cenaIndexEnd)+' PLN'+"<br><br><span>rata od "+audi[i].slice(decodeInfo.rataIndexStart,decodeInfo.rataIndexEnd)+'PLN (w Audi Perfect Lease dla przedsiębiorców - rata netto)';
                    const div = document.getElementById('container');
                    div.appendChild(el);
                    var audiImage = document.createElement("img");
                    audiImage.setAttribute("src", imageSRC[audi[i].substring(decodeInfo.nazwaIndexStart)]);
                    audiImage.setAttribute("height", "auto");
                    audiImage.setAttribute("width", "380");
                    audiImage.setAttribute("margin", "auto");
                    el.appendChild(audiImage);
                }
            }
            break;
        case 'black':
            for(let i = 0; i < audi.length; i++) {
                if(audi[i][decodeInfo.colorIndex] == 'b') {
                    const el = document.createElement('div');
                    el.classList.add("element");
                    el.style.width = '400px';
                    el.innerHTML = "<b><h2>"+audi[i].substring(decodeInfo.nazwaIndexStart)+"</b></h2><br>Cena od : "+audi[i].slice(decodeInfo.cenaIndexStart,decodeInfo.cenaIndexEnd)+' PLN'+"<br><br><span>rata od "+audi[i].slice(decodeInfo.rataIndexStart,decodeInfo.rataIndexEnd)+'PLN (w Audi Perfect Lease dla przedsiębiorców - rata netto)';
                    const div = document.getElementById('container');
                    div.appendChild(el);
                    var audiImage = document.createElement("img");
                    audiImage.setAttribute("src", imageSRC[audi[i].substring(decodeInfo.nazwaIndexStart)]);
                    audiImage.setAttribute("height", "auto");
                    audiImage.setAttribute("width", "380");
                    audiImage.setAttribute("margin", "auto");
                    el.appendChild(audiImage);
                }
            }
            break;
        case 'grey':
            for(let i = 0; i < audi.length; i++) {
                if(audi[i][decodeInfo.colorIndex] == 'g') {
                    const el = document.createElement('div');
                    el.classList.add("element");
                    el.style.width = '400px';
                    el.innerHTML = "<b><h2>"+audi[i].substring(decodeInfo.nazwaIndexStart)+"</b></h2><br>Cena od : "+audi[i].slice(decodeInfo.cenaIndexStart,decodeInfo.cenaIndexEnd)+' PLN'+"<br><br><span>rata od "+audi[i].slice(decodeInfo.rataIndexStart,decodeInfo.rataIndexEnd)+'PLN (w Audi Perfect Lease dla przedsiębiorców - rata netto)';
                    const div = document.getElementById('container');
                    div.appendChild(el);
                    var audiImage = document.createElement("img");
                    audiImage.setAttribute("src", imageSRC[audi[i].substring(decodeInfo.nazwaIndexStart)]);
                    audiImage.setAttribute("height", "auto");
                    audiImage.setAttribute("width", "380");
                    audiImage.setAttribute("margin", "auto");
                    el.appendChild(audiImage);
                }
            }
            break;
    }
}
