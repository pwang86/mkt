function showLastModified() {
  // initialize current time to midnight
  let today = new Date(new Date().setHours(0, 0, 0, 0));

  // set modified date (MM/DD/YYYY)
  let modifiedDate = new Date("01/18/2021");

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

const jsonData = `
{
  "bags": [ 
    {"url": "/bag/b1.jpg", "name": "white plastic bag", "qty": "500"},
    {"url": "/bag/b2.jpg", "name": "white plastic bag(Mercusys)", "qty": "500"},
    {"url": "/bag/b3.jpg", "name": "Non-woven Bag", "qty": "500"},
    {"url": "/bag.b4.jpg", "name": "Laptop bag", "qty": "500"}
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
  "posters": [
    {"url":"/poster/p1.jpg","name":"Deco M5","qty":"20"},
    {"url":"/poster/p2.jpg","name":"Whole Home Mesh Wi-Fi Plastic Banner2 M5(3-pack)","qty":"20"},
    {"url":"/poster/p3.jpg","name":"Tp-Link Logo Plastic Banner","qty":"20"},
    {"url":"/poster/p4.jpg","name":"RE305 & RE650","qty":"20"}
  ],
  "tshirts": [
    {"url": "/poster/p1.jpg", "name": "Polo", "group": [{"size": "S", "qty": "20"}, {"size": "M", "qty": "20"}, {"size": "L", "qty": "20"}]},
    {"url": "/poster/p2.jpg", "name": "Blue", "group": [{"size": "S", "qty": "20"}, {"size": "M", "qty": "20"}, {"size": "L", "qty": "20"}]},
    {"url": "/poster/p3.jpg", "name": "Black", "group": [{"size": "S", "qty": "20"}, {"size": "M", "qty": "20"}, {"size": "L", "qty": "20"}]}
  ]
}`;
const data = JSON.parse(jsonData);

// display all bags
function displayBags() {
  const container = document.getElementById("bagContainer");
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
  data.bags.map(item => {
    const column = document.createElement("div");
    column.setAttribute("class", "col"); 

    const card = document.createElement("div");
    card.setAttribute("class", "card");

    const image = document.createElement("img");
    image.src = "./assets/images" + item.url;
    image.setAttribute("class", "card-img-top");
    image.alt = "bag";

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
    container.appendChild(column);
    });
  }

  // display all dummy boxes
  function displayBoxes() {
    const container = document.getElementById("boxContainer");
    /*
      <ul class="list-group">
        <li class="list-group-item d-flex justify-content-between align-items-center">
          HS110
          <span class="badge bg-custom rounded-pill">313</span>
        </li>
      </ul>
    */
    data.boxes.map(item => {
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
      container.appendChild(unorderedList);
    });
  };

  function displayTShirts() {
    const container = document.getElementById("tshirtContainer");
    /*
      <div class="col">
        <div class="card">
          <img src="./assets/images/stationary/n3.jpg" class="card-img-top" alt="notebook3">
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
        column.setAttribute("class", "col"); 
    
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
    displayBoxes();
    displayTShirts();
  }
