const tabsHandlerElems = document.querySelectorAll("[data-tabs-handler]");
const tabsContentElems = document.querySelectorAll("[data-tabs-field]");
const tabsHeaderName = document.querySelectorAll(".design__title");

for (let btn of tabsHandlerElems) {
  btn.addEventListener("click", () => {
    tabsHandlerElems.forEach(item => item.classList.remove("design-list__item_active"))

    btn.classList.add("design-list__item_active")
    
    let attr = btn.dataset.tabsHandler;

    tabsContentElems.forEach(item => {
      item.dataset.tabsField === attr ? 
      item.classList.remove("hidden")
      : item.classList.add("hidden")
      }
    );

    tabsHeaderName.forEach(item =>item.classList.toggle('hidden'))
  
  });
}
