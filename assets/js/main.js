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