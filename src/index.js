document.addEventListener('DOMContentLoaded',()=>{
    const cards=[
        {
            name: 'fries',
            img:'src/images/fries.png'
        },
        {
            name: 'cheeseburger',
            img:'src/images/cheeseburger.png'
        },
        {
            name: 'hotdog',
            img:'src/images/hotdog.png'
        },
        {
            name: 'ice-cream',
            img:'src/images/ice-cream.png'
        },
        {
            name: 'milkshake',
            img:'src/images/milkshake.png'
        },
        {
            name: 'pizza',
            img:'src/images/pizza.png'
        },
        {
            name: 'fries',
            img:'src/images/fries.png'
        },
        {
            name: 'cheeseburger',
            img:'src/images/cheeseburger.png'
        },
        {
            name: 'hotdog',
            img:'src/images/hotdog.png'
        },
        {
            name: 'ice-cream',
            img:'src/images/ice-cream.png'
        },
        {
            name: 'milkshake',
            img:'src/images/milkshake.png'
        },
        {
            name: 'pizza',
            img:'src/images/pizza.png'
        },
    ]
    cards.sort(()=>0.5-Math.random())
    //console.log(cards)
    let m=0;
    const moves=document.querySelector('.score')
    const grid=document.querySelector('.box')
    let cardsChosen=[]
    let cardsChosenId=[]
    let cardsWon=[]
    function createGrid()
    {
        for(let i=0;i<cards.length;i++)
        {
            const card=document.createElement('img')
            card.setAttribute('src','src/images/blank.png')
            card.setAttribute('data-id',i)
            card.setAttribute('class','card')
            grid.appendChild(card)
            card.addEventListener('click',flipcard)
        }
    }
    function flipcard()
    {
        m++;
        let cardId=this.getAttribute('data-id')
        cardsChosen.push(cards[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src',cards[cardId].img)
        if(cardsChosen.length==2)
        {
           setTimeout(checkMatch,500) ;
        }
        moves.textContent=m
        //console.log(cardsChosen)
    }
    function checkMatch()
    {
        const crds=document.querySelectorAll('.card')
        let cardId1=cardsChosenId[0]
        let cardId2=cardsChosenId[1]
        if(cardId1===cardId2)
        {
            alert("You choose the same card again")
            cardsChosenId.pop()
            cardsChosen.pop()
            m--;
            moves.textContent=m
        }
        else if(cardsChosen[0]==cardsChosen[1]){
            alert("You found a match")
            crds[cardId2].setAttribute('src','src/images/white.png')
            crds[cardId1].setAttribute('src','src/images/white.png')
            crds[cardId1].removeEventListener('click',flipcard)
            crds[cardId2].removeEventListener('click',flipcard)
            cardsWon.push(cardsChosen)
            if(cardsWon.length==6)
            {
                moves.textContent='Congratulations! you have won in '+m+ ' moves!'
            }
            cardsChosenId=[]
            cardsChosen=[]
        }
        else{
            crds[cardId2].setAttribute('src','src/images/Blank.png')
            crds[cardId1].setAttribute('src','src/images/Blank.png')
            cardsChosenId=[]
            cardsChosen=[]
        }
    }
    createGrid()
    
})