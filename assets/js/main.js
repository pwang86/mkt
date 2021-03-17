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
window.onload = showLastModified;

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
  "bags" : [ 
    {"url":"/bag/b1.jpg","name":"white plastic bag","qty":"500"},
    {"url":"/bag/b2.jpg","name":"white plastic bag(Mercusys)","qty":"500"},
    {"url":"/bag/b3.jpg","name":"Non-woven Bag","qty":"500"},
    {"url":"/bag.b4.jpg","name":"Laptop bag","qty":"500"}
  ],
  "posters": [
    {"url":"/poster/p1.jpg","name":"Deco M5","qty":"20"},
    {"url":"/poster/p2.jpg","name":"Whole Home Mesh Wi-Fi Plastic Banner2 M5(3-pack)","qty":"20"},
    {"url":"/poster/p3.jpg","name":"Tp-Link Logo Plastic Banner","qty":"20"},
    {"url":"/poster/p4.jpg","name":"RE305 & RE650","qty":"20"}
  ]
}`;

const data = JSON.parse(jsonData);
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
  window.onload = displayBags;
