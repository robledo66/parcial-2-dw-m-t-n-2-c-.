/*manejo de cantidades en el carrito,
  un contador de productos en el navbar y 
  la opción de eliminar productos.
  Sumar y restar cantidad de productos */

const pintarcarrito = () => {
    modalContainer.innerHTML = "";
   modalContainer.style.display= "flex";
const modalHeader = document.createElement("div");
modalHeader.className = " modal-header"
modalHeader.innerHTML = `
 <h1 class="modal-header-title">Carrito.</h1>
`;
modalContainer.append(modalHeader);


const modalbutton = document.createElement("h1");
modalbutton.innerText = "x";
modalbutton.className = "modal-header-button";

modalbutton.addEventListener("click", () => {
    modalContainer.style.display = "none";

});

modalHeader.append(modalbutton);

carrito.forEach((product) => {
    let carritoContent = document.createElement("div")
    carritoContent.className = "modal-content"
    carritoContent.innerHTML =`
    <img src="${product.img}">
    <h3>${product.nombre}</h3>
    <p>${product.precio}$</p>
    <span class = "restar"> - </span>
    <p>Cantidad: ${product.cantidad}</p>
    <span class = "sumar"> + </span>
    <p>Total: ${product.cantidad + product.precio}</p>
    <span class = "delete-product"> ❌ </span>
      `;

modalContainer.append(carritoContent);

let restar = carritoContent.querySelector(".restar")
restar.addEventListener("click", () => {
  if(product.cantidad !== 1) {
  product.cantidad--;
  }
  saveLocal();
  pintarcarrito();
});

let sumar = carritoContent.querySelector(".sumar")
sumar.addEventListener("click", () => {
  product.cantidad++;
  saveLocal();
  pintarcarrito();
});

let eliminar = carritoContent.querySelector(".delete-product");

eliminar.addEventListener("click", () => {
  eliminarProducto (product.id);

})


  


console.log(carrito.length);

//let eliminar = document.createElement("span");
//eliminar.innerText = "❌";
//eliminar.classList = "delete-product";
//carritoContent.append(eliminar);


eliminar.addEventListener("click", eliminarProducto);
});

const total = carrito.reduce((acc, el) => acc + el.precio * el.cantidad, 0);

const totalBuying = document.createElement("div");
totalBuying.className = "total-content";
totalBuying.innerHTML = `total a pagar : ${total} $`;
modalContainer.append(totalBuying);
};

VerCarrito.addEventListener("click", pintarcarrito );

const eliminarProducto = (id) => {   
 const foundId = carrito.find((element) => element.id === id);
  
console.log(foundId);

 carrito = carrito.filter((carritoId) => {
    return carritoId !== foundId ;
 });
      carritoCounter();
      saveLocal();
      pintarcarrito();
};

/*local storage*/
const carritoCounter = () => {
cantidadcarrito.style.display = "block";

const carritoLength = carrito.length;

localStorage.setItem("carritoLength", JSON.stringify(carritoLength));

cantidadcarrito.innerText = JSON.parse(localStorage.getItem("carritoLength"));
};


carritoCounter();



