
class Card {
  constructor(init) {
    this.init = init;
  }

  createComponent(data) { 
    let component = `<img class="rounded-t-xl" src='${data.urlToImage}' />
                     <h1 class="text-center mx-2 my-2">${data.title}</h1>
                     <p class="mx-2 my-2 text-xs">${data.author} - ${data.publishedAt}</p>
                     <p class="mx-2 my-2">${data.description}</p>
                     <a href="${data.url}" class="mx-2 my-2 border rounded-xl bg-yellow-400 py-2 px-2">Read more...</a>
                    `;
    return component;
  }

  
  render(element) {
    let fullComponent = '';
    for(let i=0; i< this.init.data.length; i++){
        fullComponent += "<div class='mx-4 border rounded-xl'>" +
        this.createComponent((this.init.data)[i]) +
        "</div>";
    }   
    element.innerHTML = fullComponent;
  }
}



async function getDataFromUrl() {
  let apiUrl =
  "https://newsapi.org/v2/top-headlines?country=id&apiKey=fc790381326d45058656ffc4616c2166";
  let a = await fetch(apiUrl)
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) => console.log(err));
  return a;
}

async function search() {
        card.innerHTML = "Loading";
        let input, filter;
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();
        today = yyyy + '-' + mm + '-' + dd ;
        input = document.getElementById("search");
        filter = input.value.toLowerCase();
        let apiUrl = `https://newsapi.org/v2/everything?q=${filter}&from=${today}&sortBy=popularity&apiKey=fc790381326d45058656ffc4616c2166`;
        
        let a = await fetch(apiUrl)
          .then((res)=> res.json())
          .then((data) => data)
          .catch((err) => console.log(err));
        return a;
}

var card = document.getElementById("cardcomponent");

getDataFromUrl().then((item) => {
        card.innerHTML = "Loading..."    
        const app = new Card({
            data: item.articles
        });    
        app.render(card);
})
.catch(err=>console.log(err))
.finally();



const searchNews = () =>{
    let b = card;
    if(document.getElementById("search").value !== ""){
        search().then((item) => {
            const app = new Card({
                data: item.articles
            })
            
            app.render(b);    
        }).catch(err => {
            console.log(err);
        }).finally();
    }else{
        getDataFromUrl().then((item) => {
            card.innerHTML = "Loading..."    
            const app = new Card({
                data: item.articles
            });    
            app.render(card);
        })
        .catch(err=>console.log(err))
        .finally();
    }
    
}


