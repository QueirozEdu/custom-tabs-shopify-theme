const tabs = document.querySelector(".tabs");
const tabButton = document.querySelectorAll(".tab-button");
const colapsable = document.getElementById("toggler")



colapsable.addEventListener('click', () => {
  console.log("clicou")
  tabs.classList.toggleg("tabsColapse")
})

var el = document.getElementById(".tab-Button");
if(el){
  el.addEventListener('click', swapper, false);
}

tabs.onclick = e => {
  const id = e.target.dataset.id;
  if (id) {
    tabButton.forEach(btn => {
      btn.classList.remove("active");
    });
    e.target.classList.add("active");
  }
}