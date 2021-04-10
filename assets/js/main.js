function showLastModified() {
  // initialize current time to midnight
  let today = new Date(new Date().setHours(0, 0, 0, 0));

  // set modified date (MM/DD/YYYY)
  let modifiedDate = new Date("03/20/2021");

  let diffTime = Math.abs(modifiedDate.getTime() - today.getTime());
  // get diff in days
  let diffDate = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
  let res = "";

  // res depends on diffDate
  if (!diffDate) {
    res = "today";
  } else {
    if (diffDate === 1)
      res = "1 day ago";
    else 
      res = diffDate + " days ago";
  }
  document.getElementById('lastModified').innerHTML = res;
}

// Before bootstrap 5.0, add following js to make dropdown menu work
/*
let tabEl = document.querySelector('a[data-bs-toggle="pill"]');
tabEl.addEventListener('shown.bs.tab', function (e) {
  console.log(e.relatedTarget);
  if (e.relatedTarget) {
    e.relatedTarget.classList.remove('active');
  }
});
*/

// if extra comma appears after }, all js functions will not work
const jsonData = `
{
  "bags": [ 
    {"url": "/bag/b1.jpg", "name": "white plastic bag", "qty": "500"},
    {"url": "/bag/b2.jpg", "name": "white plastic bag(Mercusys)", "qty": "500"},
    {"url": "/bag/b3.jpg", "name": "Non-woven Bag", "qty": "500"},
    {"url": "/bag.b4.jpg", "name": "Laptop bag", "qty": "500"}
  ],
  "brochures": [
    {"url": "/brochur/b1.jpg", "name": "Tp-Link Product Guide", "qty": "9"},
    {"url": "/brochur/b2.jpg", "name": "KASA Smart Product Guide", "qty": "1"},
    {"url": "/brochur/b3.jpg", "name": "Tapo Product Guide", "qty": "23"},
    {"url": "/brochur/b4.jpg", "name": "Business Switches and Router", "qty": "29"},
    {"url": "/brochur/b5.jpg", "name": "Pharos Solution", "qty": "14"},
    {"url": "/brochur/4g.jpg", "name": "4G and MiFi", "qty": "3603"},
    {"url": "/brochur/dsl.jpg", "name": "DSL", "qty": "3593"},
    {"url": "/brochur/kasa.jpg", "name": "Kasa Smart", "qty": "3553"},
    {"url": "/brochur/mercusys.png", "name": "Mercusys", "qty": "4003"},
    {"url": "/brochur/mesh.jpg", "name": "Mesh Wi-Fi", "qty": "3513"},
    {"url": "/brochur/omada.jpg", "name": "Omada SDN", "qty": "3573"},
    {"url": "/brochur/range.jpg", "name": "Range Extenders and Powerline", "qty": "3613"},
    {"url": "/brochur/tapo.jpg", "name": "Tapo Smart", "qty": "3663"},
    {"url": "/brochur/wifi6.jpg", "name": "Wi-Fi 6 and Gaming Routers", "qty": "3613"}
  ],
  "boxes": [
    {"name": "HS110", "qty": "313"},
    {"name": "AX10", "qty": "11"},
    {"name": "Ax20", "qty": "10"},
    {"name": "VR2100", "qty": "10"},
    {"name": "PA8033PKIT", "qty": "10"},
    {"name": "RE505X", "qty": "10"},
    {"name": "TX3000E", "qty": "10"},
    {"name": "WR902AC", "qty": "12"},
    {"name": "KL110", "qty": "25"},
    {"name": "KL110B", "qty": "19"},
    {"name": "KL130", "qty": "31"},
    {"name": "KL130B", "qty": "23"},
    {"name": "KP105", "qty": "200"},
    {"name": "KP115", "qty": "200"},
    {"name": "M4 (2 Pack)", "qty": "95"},
    {"name": "M5 (3 Pack)", "qty": "56"},
    {"name": "RE300", "qty": "1"},
    {"name": "PA9020PKIT", "qty": "23"},
    {"name": "W9960", "qty": "2"},
    {"name": "WA850RE", "qty": "54"},
    {"name": "C20", "qty": "194"}
  ],
  "units": [
    {"name": "AX10", "qty": "8"},
    {"name": "AX50", "qty": "4"},
    {"name": "VR2800", "qty": "13"},
    {"name": "VR300", "qty": "39"},
    {"name": "X20 (1 Pack)", "qty": "26"},
    {"name": "M5 (1 Pack)", "qty": "15"}
  ],
  "pos": [
    {"url": "/pos/p1.jpg", "name": "A4 Acrylic Stand", "qty": "29"},
    {"url": "/pos/p2.jpg", "name": "A5 Acrylic Stand", "qty": "18"},
    {"url": "/pos/p3.jpg", "name": "A6 Acrylic Stand", "qty": "65"},
    {"url": "/pos/p4.jpg", "name": "Plastic Stand", "qty": "110"},
    {"url": "/pos/p4.jpg", "name": "Thick Plastic Stand(9cm x 9cm)", "qty": "77"}
  ],
  "posters": [
    {"url":"/poster/p1.jpg","name":"Deco M5","qty":"35"},
    {"url":"/poster/p2.jpg","name":"Whole Home Mesh Wi-Fi Plastic Banner2 M5(3-pack)","qty":"19"},
    {"url":"/poster/p3.jpg","name":"Tp-Link Logo Plastic Banner","qty":"12"},
    {"url":"/poster/p4.jpg","name":"RE305 & RE650","qty":"38"}
  ],
  "promos": [
    {"url":"/promo/p1.jpg","name":"Ball Pen","qty":"35"},
    {"url":"/promo/p2.jpg","name":"Ball Pen (Blue)","qty":"19"},
    {"url":"/promo/p3.jpg","name":"Ball Pen (Mercusys)","qty":"12"},
    {"url":"/promo/p4.jpg","name":"USB (16G)","qty":"12"}
  ],
  "stationaries": [
    {"url":"/stationery/n1.jpg","name":"A4 Diary NoteBook","qty":"167"},
    {"url":"/stationery/n2.jpg","name":"Mercusys Diary NoteBook","qty":"842"},
    {"url":"/stationery/n3.jpg","name":"A5 NoteBook","qty":"2"},
    {"url":"/stationery/ring.jpg","name":"Postal Tubes","qty":"32"}
  ],
  "tshirts": [
    {"url": "/poster/p1.jpg", "name": "Polo", "group": [{"size": "S", "qty": "20"}, {"size": "M", "qty": "20"}, {"size": "L", "qty": "20"}]},
    {"url": "/poster/p2.jpg", "name": "Blue", "group": [{"size": "S", "qty": "20"}, {"size": "M", "qty": "20"}, {"size": "L", "qty": "20"}]},
    {"url": "/poster/p3.jpg", "name": "Black", "group": [{"size": "S", "qty": "20"}, {"size": "M", "qty": "20"}, {"size": "L", "qty": "20"}]}
  ]
}`;
const data = JSON.parse(jsonData);

// display col template
/*
  <div class="col">
    <div class="card">
      <img src="..." class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">White Plastic Bag</h5>
      </div>
      <div class="card-footer">
        <small class="text-muted">Qty:</small>
      </div>
    </div>
  </div>
*/
function displayColTemplate(myContainer, myData, myAlt) {
  myData.map(item => {
    const column = document.createElement("div");
    column.setAttribute("class", "col d-flex"); 

    const card = document.createElement("div");
    card.setAttribute("class", "card");

    const image = document.createElement("img");
    image.src = "./assets/images" + item.url;
    image.setAttribute("class", "card-img-top");
    image.alt = myAlt;

    const body = document.createElement("div");
    body.setAttribute("class", "card-body");
    const title = document.createElement("h5");
    title.setAttribute("class", "card-title");
    title.innerHTML = item.name;
    body.appendChild(title);

    const footer = document.createElement("div");
    footer.setAttribute("class", "card-footer");
    const text = document.createElement("small");
    text.setAttribute("class", "text-muted");
    text.innerHTML = "Qty: " + item.qty;
    footer.appendChild(text);

    card.innerHTML = image.outerHTML + body.outerHTML + footer.outerHTML;
    column.appendChild(card);
    myContainer.appendChild(column);
    });
}

// display ul template
/*
  <ul class="list-group">
    <li class="list-group-item d-flex justify-content-between align-items-center">
      HS110
      <span class="badge bg-custom rounded-pill">313</span>
    </li>
  </ul>
*/
function displayUlTemplate(myContainer, myData) {
  myData.map(item => {
    const unorderedList = document.createElement("ul");
    unorderedList.setAttribute("class", "list-group");

    const listItem = document.createElement("li");
    listItem.setAttribute("class", "list-group-item d-flex justify-content-between align-items-center");
    listItem.innerHTML = item.name;
    
    const span = document.createElement("span");
    span.setAttribute("class", "badge bg-custom rounded-pill");
    span.innerHTML = item.qty;
    listItem.appendChild(span);
    unorderedList.appendChild(listItem);
    myContainer.appendChild(unorderedList);
  });
}

// display all bags
function displayBags() {
  const container = document.getElementById("bagContainer");
  displayColTemplate(container, data.bags, "bag");
}

// display all brochures
function displayBrochures() {
  const container = document.getElementById("brochurContainer");
  displayColTemplate(container, data.brochures, "brochur");
}

// display all dummy boxes
function displayBoxes() {
  const container = document.getElementById("boxContainer");
  displayUlTemplate(container, data.boxes);
}

// Display all dummy units
function displayUnits() {
  const container = document.getElementById("unitContainer");
  displayUlTemplate(container, data.units);
}

// Display all POS Items
function displayPosItems() {
  const container = document.getElementById("posItemContainer");
  displayColTemplate(container, data.pos, "POS");
}

// Display all Posters
function displayPosters() {
  const container = document.getElementById("posterContainer");
  displayColTemplate(container, data.posters, "poster");
}

// Display all promo Items
function displayPromos() {
  const container = document.getElementById("promoContainer");
  displayColTemplate(container, data.promos, "promo item");
}

// display all stationaries
function displayStationaries() {
  const container = document.getElementById("stationeryContainer");
  displayColTemplate(container, data.stationaries, "stationery");
}

// Display all T-Shirts
function displayTShirts() {
  const container = document.getElementById("tshirtContainer");
  /*
  <div class="col">
    <div class="card">
      <img src="./assets/images/stationery/n3.jpg" class="card-img-top" alt="notebook3">
      <div class="card-body">
        <h5 class="card-title">SMB Black Shirt</h5>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item d-flex justify-content-between align-items-center">Size S<span class="badge bg-custom rounded-pill">194</span></li>
        <li class="list-group-item d-flex justify-content-between align-items-center">Size M<span class="badge bg-custom rounded-pill">194</span></li>
        <li class="list-group-item d-flex justify-content-between align-items-center">Size L<span class="badge bg-custom rounded-pill">194</span></li>
      </ul>
    </div>
  </div>
  */
  data.tshirts.map(item => {
    const column = document.createElement("div");
    column.setAttribute("class", "col d-flex"); 
    
    const card = document.createElement("div");
    card.setAttribute("class", "card");
    
    const image = document.createElement("img");
    image.src = "./assets/images" + item.url;
    image.setAttribute("class", "card-img-top");
    image.alt = "t-shirt";
    
    const body = document.createElement("div");
    body.setAttribute("class", "card-body");
    const title = document.createElement("h5");
    title.setAttribute("class", "card-title");
    title.innerHTML = item.name;
    body.appendChild(title);

    const unorderedList = document.createElement("ul");
    unorderedList.setAttribute("class", "list-group list-group-flush");
    item.group.map(gItem => {
      const listItem = document.createElement("li");
      listItem.setAttribute("class", "list-group-item d-flex justify-content-between align-items-center");
      listItem.innerHTML = "Size" + gItem.size + ":";
      
      const span = document.createElement("span");
      span.setAttribute("class", "badge bg-custom rounded-pill");
      span.innerHTML = gItem.qty;
      listItem.appendChild(span);
      unorderedList.appendChild(listItem);
    });
    card.innerHTML = image.outerHTML + body.outerHTML + unorderedList.outerHTML;
    column.appendChild(card);
    container.appendChild(column);
  });
}

  window.onload = function() {
    showLastModified();
    displayBags();
    displayBrochures();
    displayBoxes();
    displayUnits();
    displayPosItems();
    displayPosters();
    displayPromos();
    displayStationaries();
    displayTShirts();
  }
