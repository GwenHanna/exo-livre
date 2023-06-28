import { Book } from "./class";
import { creatBook } from "./function";

let index = 0
let wichList = []
let book = []
$('form').on('submit', function(event){
    event.preventDefault();
    let title = $('#titleBook').val()
    let autor = $('#autorBook').val()
    let srcImg = $('#imgBook').val()
    
    let user = new Book(index, title, autor, srcImg);
    let newCard = creatBook(user.title, user.autor, user.srcImg, index);
   
        book.push(user);
        book.sort((a,b) =>{
            let t1 = a.title.toUpperCase();
            let t2 = b.title.toUpperCase();
            if(t1 < t2){
                return -1;
            }
            if(t1 > t2){
                return 1;
            }
            return 0
        })
        
        document.querySelector('#container-cards').innerHTML = ''
        for(let b of book){
            let newCard = creatBook(b.title, b.autor, b.srcImg, index);
            document.querySelector('#container-cards').append(newCard);
        }

    
    document.querySelector('form').reset();
    
   let btns = document.querySelectorAll('.btn-card').forEach(btn => {
       btn.addEventListener('click',(e)=>{
            let btnSelect = e.target.id;
            if(btnSelect == 'clearCard'){
                for(let b of book){
                    if(b.title == btn.closest('.card').id){
                        book.splice(b.title,1)
                    }
                }
                
                console.log(book.indexOf(btn.closest('.card').id));
                console.log(btn.closest('.card').id);
                btn.closest('.card').remove();

            }
       })
   })
   index++
})
