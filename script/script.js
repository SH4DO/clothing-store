const MENU = [
    "inicio",
    "servicios",
    "productos",
    "contacto"
    ];

function generateMenu(){
    let menuList = "";
    MENU.map((element) =>{
        menuList+=`<li><a href="#">${element}</a></li>`;
    });
    document.querySelector('.navbar').innerHTML += menuList ;
}

async function generateOferts(){
    const requestJson = await fetch("./json/oferts.json")
        .then(response => response.json())
        .then(data =>{
            data.map((element) =>{
                const ofertArticle = `
                    <article class="ofert-1">
                        <div class="ofert-img">
                            <img src="${element.image}" alt="">
                        </div>
                        <div class="ofert-txt">
                            <h3>${element.name}</h3>
                            <a href="#" class="btn-2">${element.description}</a>
                        </div>
                    </article>
                `;
            document.querySelector('.ofert').innerHTML += ofertArticle;
            });
        })
        .catch(err => {console.log(err);})
}

async function generateProduct() {

    const requestJson = await fetch('./json/products.json')
        .then(response => response.json())
        .then(data => {
            data.map((element) => {
                const image = element.image;
                const name = element.name;
                const description = element.description;
                const price = element.price;

                const productArticle = `                   
                        <article class="product">
                            <img src="${image}" alt="">
                            <div class="product-txt">
                                <h3>${name}</h3>
                                <p>${description}</p>
                                <p class="precio">$${price}</p>
                                <a href="#" class="agregar-carrito btn-2" data-id="1">agregar al carrito</a>
                            </div>
                        </article>
                    `;
                document.querySelector('.product-content').innerHTML += productArticle;    
            });
        })
        .catch(err => { console.log(err); });

}

generateProduct();

generateMenu();

generateOferts();

