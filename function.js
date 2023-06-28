export function creatBook(title, autor, srcImg, id){
    let card = document.createElement('div');
    card.setAttribute('id', title)

    card.classList.add('card');
    let btnsCard = document.createElement('div')
    btnsCard.classList.add('btns-card');

    let btnCardLike = document.createElement('button');
    btnCardLike.classList.add('btn-card');
    btnCardLike.setAttribute('id', 'likeCard')
    btnCardLike.textContent = '♡'

    let btnCardClear = document.createElement('button');
    btnCardClear.setAttribute('type', 'reset')
    btnCardClear.setAttribute('id', 'clearCard')
    btnCardClear.classList.add('btn-card');
    btnCardClear.textContent = 'Supprimer'

    btnsCard.append(btnCardLike);
    btnsCard.append(btnCardClear);

    let h3 = document.createElement('h3');
    h3.textContent = title;

    let p = document.createElement('p');
    p.textContent = autor;

    let img = document.createElement('img');
    img.setAttribute('src', srcImg);



    card.append(img);
    card.append(h3);
    card.append(p);
    card.append(btnsCard)

    return card;
}

