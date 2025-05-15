let myLeads = [];
let oldLeads=[];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
const deleteEl = document.getElementById("delete-el");
const inputTab = document.getElementById('input-tab')

let myLeadsStr = localStorage.setItem("myLeads", JSON.stringify(myLeads));
let storedMyLeads = JSON.parse(localStorage.getItem("myLeads") || []);
if (storedMyLeads) {
  myLeadsStr = storedMyLeads;
  render(myLeadsStr);
}
    inputTab.addEventListener('click' ,function(){
      chrome.tabs.query({active:true , currentWindow:true} ,function(tabs){
     myLeads.push(tabs[0].url)
      localStorage.setItem('myLeads',JSON.stringify(myLeads))
      render(myLeads)
      })
      
    })
function render(leads) {
  let listItem = "  ";
  for (let i = 0; i < leads.length; i++) {
    listItem += `<li><a href='#' target='_blank'>  ${leads[i]} </a></li>`;
  }
  ulEl.innerHTML = listItem;
  inputEl.value = "";
}
inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  inputEl.value = "";
  localStorage.setItem('myLeads',JSON.stringify(myLeads))
  render(myLeads);
});
deleteEl.addEventListener("click", function () {
  console.log("double clicked !");
  localStorage.clear();
  myLeads = [];
  render(myLeads);
});
const name = localStorage.getItem("myLeads");

function saveLead() {
  console.log("Removed All Tabs!");
}
