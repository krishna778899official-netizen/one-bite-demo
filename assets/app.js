const $=(s,ctx=document)=>ctx.querySelector(s), $$=(s,ctx=document)=>[...ctx.querySelectorAll(s)];
document.querySelectorAll("[data-year]").forEach(el=>el.textContent=new Date().getFullYear());
const toggle=$(".menu-toggle"),nav=$(".main-nav");if(toggle&&nav){toggle.addEventListener("click",()=>{const open=nav.classList.toggle("open");toggle.setAttribute("aria-expanded",String(open));toggle.textContent=open?"×":"☰"});nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{nav.classList.remove("open");toggle.setAttribute("aria-expanded","false");toggle.textContent="☰"}))}
let toastTimer;function toast(msg){const el=$(".toast");if(!el)return;el.textContent=msg;el.classList.add("show");clearTimeout(toastTimer);toastTimer=setTimeout(()=>el.classList.remove("show"),2400)}
const menuItems=[
{name:"OB Cheese Pizza",category:"Pizza",price:75,veg:true,desc:"A classic, cheesy favourite.",image:"https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=600&q=80"},
{name:"OB Classic Pizza",category:"Pizza",price:110,veg:true,desc:"Tomato, onion and capsicum.",image:"https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80"},
{name:"OB Paneer Peppery Pizza",category:"Pizza",price:150,veg:true,desc:"Paneer tikka with a peppery kick.",image:"https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=600&q=80"},
{name:"OB Chicken Classic Pizza",category:"Pizza",price:115,veg:false,desc:"Chicken with classic pizza toppings.",image:"https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=600&q=80"},
{name:"OB Street Burger",category:"Burger",price:45,veg:true,desc:"Aloo tikki, tomato and sauce.",image:"https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80"},
{name:"OB Amazing Burger",category:"Burger",price:90,veg:true,desc:"Veggie tikki with fresh toppings.",image:"https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=600&q=80"},
{name:"OB Cheese Corn Burger",category:"Burger",price:120,veg:true,desc:"Cheese, corn and a veggie patty.",image:"https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=600&q=80"},
{name:"OB Chicken Burger",category:"Burger",price:90,veg:false,desc:"A savoury chicken burger.",image:"https://images.unsplash.com/photo-1606755962773-d324e0a13086?auto=format&fit=crop&w=600&q=80"},
{name:"OB Nutella Waffle",category:"Waffle",price:80,veg:true,desc:"Golden waffle with chocolate-hazelnut flavour.",image:"https://images.unsplash.com/photo-1562376552-0d160a2f238d?auto=format&fit=crop&w=600&q=80"},
{name:"OB Chocolate Waffle",category:"Waffle",price:80,veg:true,desc:"A sweet, chocolatey classic.",image:"https://images.unsplash.com/photo-1484723091739-30a097e8f929?auto=format&fit=crop&w=600&q=80"},
{name:"Oreo / KitKat Waffle",category:"Waffle",price:115,veg:true,desc:"A crunchy chocolate-treat twist.",image:"https://images.unsplash.com/photo-1562376552-0d160a2f238d?auto=format&fit=crop&w=600&q=80"},
{name:"OB Cheese Cottage Sandwich",category:"Sandwich",price:65,veg:true,desc:"Fresh vegetables and a cheesy bite.",image:"https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=600&q=80"},
{name:"OB Paneer Peppery Sandwich",category:"Sandwich",price:85,veg:true,desc:"Paneer with peppery, tangy flavours.",image:"https://images.unsplash.com/photo-1553909489-cd47e0ef937f?auto=format&fit=crop&w=600&q=80"},
{name:"OB Chicken Spanish Sandwich",category:"Sandwich",price:120,veg:false,desc:"Chicken with corn and savoury toppings.",image:"https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=600&q=80"},
{name:"OB Cheese Potato Wrap",category:"Wrap",price:110,veg:true,desc:"A comforting potato-and-cheese wrap.",image:"https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=600&q=80"},
{name:"OB Paneer Wrap",category:"Wrap",price:140,veg:true,desc:"Paneer and fresh vegetables, wrapped up.",image:"https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=600&q=80"},
{name:"OB Chicken Wrap",category:"Wrap",price:155,veg:false,desc:"A hearty chicken wrap.",image:"https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=600&q=80"},
{name:"OB Spicy Cottage Pasta",category:"Pasta",price:110,veg:true,desc:"Pasta with a spicy, savoury sauce.",image:"https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=600&q=80"},
{name:"OB Cheese Pasta",category:"Pasta",price:120,veg:true,desc:"Creamy cheese pasta with vegetables.",image:"https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=600&q=80"},
{name:"OB Chicken Cheese Pasta",category:"Pasta",price:130,veg:false,desc:"A creamy chicken pasta option.",image:"https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=600&q=80"},
{name:"OB Fresh Cheesy Loaf",category:"Cheesy Loaf",price:155,veg:true,desc:"A signature-style cheesy loaf.",image:"https://images.unsplash.com/photo-1573140247632-f8fd74997d5c?auto=format&fit=crop&w=600&q=80"},
{name:"OB Paneer Cheesy Loaf",category:"Cheesy Loaf",price:180,veg:true,desc:"Cheesy loaf with paneer.",image:"https://images.unsplash.com/photo-1573140247632-f8fd74997d5c?auto=format&fit=crop&w=600&q=80"},
{name:"OB Chicken Cheesy Loaf",category:"Cheesy Loaf",price:165,veg:false,desc:"A chicken-filled cheesy loaf.",image:"https://images.unsplash.com/photo-1573140247632-f8fd74997d5c?auto=format&fit=crop&w=600&q=80"},
{name:"OB Potato Regular Tornado",category:"Potato Tornado",price:70,veg:true,desc:"Crispy spiral potato snack.",image:"https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=600&q=80"},
{name:"Crazy Fries With Sauce",category:"Snacks",price:100,veg:true,desc:"Golden fries with a saucy finish.",image:"https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=600&q=80"},
{name:"Chilli Potato Balls",category:"Snacks",price:85,veg:true,desc:"Crispy potato bites with chilli flavour.",image:"https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?auto=format&fit=crop&w=600&q=80"},
{name:"OB Paneer Rice Bowl",category:"Rice Bowl",price:130,veg:true,desc:"A filling paneer rice bowl.",image:"https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=600&q=80"},
{name:"OB Chicken Rice Bowl",category:"Rice Bowl",price:150,veg:false,desc:"A hearty chicken rice bowl.",image:"https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=600&q=80"},
{name:"Cold Coffee",category:"Beverage",price:100,veg:true,desc:"A chilled coffee treat.",image:"https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=600&q=80"},
{name:"Choco Lava Cake",category:"Desserts",price:60,veg:true,desc:"A warm chocolate dessert.",image:"https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=600&q=80"},
{name:"Ice Cream",category:"Desserts",price:55,veg:true,desc:"A cool finish to your meal.",image:"https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=600&q=80"}
];
// Correct malformed fallback URL in dataset.
menuItems.find(x=>x.name==="OB Amazing Burger").image="https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=600&q=80";
let activeCategory="All",searchTerm="",vegOnly=false,cart={};
const money=n=>"₹"+n.toLocaleString("en-IN");
function renderMenu(){const grid=$("#menu-grid");if(!grid)return;const filtered=menuItems.filter(x=>(activeCategory==="All"||x.category===activeCategory)&&(!vegOnly||x.veg)&&(`${x.name} ${x.category} ${x.desc}`.toLowerCase().includes(searchTerm.toLowerCase())));grid.innerHTML=filtered.map((x)=>`<article class="menu-card"><div class="menu-card-img"><img loading="lazy" src="${x.image}" alt="${x.name}" onerror="this.src='https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80'"><span class="diet-dot ${x.veg?'':'nonveg'}" title="${x.veg?'Vegetarian':'Non-vegetarian'}"></span></div><div class="menu-card-body"><span class="menu-card-category">${x.category}</span><h3>${x.name}</h3><p>${x.desc}</p><div class="menu-card-foot"><span class="menu-price">${money(x.price)}<small style="display:block;font:8px var(--body);color:#8b7e72">demo price</small></span><button class="add-button" data-add="${x.name}" aria-label="Add ${x.name} to bag">+</button></div></div></article>`).join("");$("#result-count").textContent=`${filtered.length} bites to explore`;$("#empty-state").hidden=filtered.length>0;$$("[data-add]",grid).forEach(b=>b.addEventListener("click",()=>addToCart(b.dataset.add)))}
function renderPills(){const holder=$("#category-pills");if(!holder)return;const cats=["All",...new Set(menuItems.map(x=>x.category))];holder.innerHTML=cats.map(c=>`<button class="pill ${c===activeCategory?'active':''}" data-category="${c}">${c}</button>`).join("");$$("[data-category]",holder).forEach(b=>b.addEventListener("click",()=>{activeCategory=b.dataset.category;renderPills();renderMenu()}))}
// Menu initialization deferred until state declarations.
const drawer=$("#cart-drawer"),scrim=$(".drawer-scrim");function openCart(){if(!drawer)return;drawer.classList.add("open");scrim?.classList.add("open");drawer.setAttribute("aria-hidden","false")}function closeCart(){drawer?.classList.remove("open");scrim?.classList.remove("open");drawer?.setAttribute("aria-hidden","true")}
$$(".cart-open").forEach(b=>b.addEventListener("click",openCart));$$(".cart-close").forEach(b=>b.addEventListener("click",closeCart));scrim?.addEventListener("click",closeCart);document.addEventListener("keydown",e=>{if(e.key==="Escape")closeCart()});
function addToCart(name){cart[name]=(cart[name]||0)+1;renderCart();toast(`${name} added to your bag`)}function changeQty(name,delta){cart[name]=(cart[name]||0)+delta;if(cart[name]<=0)delete cart[name];renderCart()}
function renderCart(){const count=Object.values(cart).reduce((a,b)=>a+b,0);$$(".cart-count").forEach(e=>e.textContent=count);const list=$("#cart-items");if(!list)return;const entries=Object.entries(cart);list.innerHTML=entries.length?entries.map(([name,qty])=>{const item=menuItems.find(x=>x.name===name);return `<div class="cart-row"><div><b>${name}</b><small>${item.category} · demo price ${money(item.price)}</small></div><div class="cart-row-right"><strong>${money(item.price*qty)}</strong><div class="quantity-controls"><button data-qty="${name}" data-delta="-1" aria-label="Remove one">−</button><span>${qty}</span><button data-qty="${name}" data-delta="1" aria-label="Add one">+</button></div></div></div>`}).join(""):`<div class="cart-empty">Your bag is looking hungry.<br>Add a few bites from the menu.</div>`;$("#cart-total").textContent=money(entries.reduce((sum,[name,qty])=>sum+menuItems.find(x=>x.name===name).price*qty,0));$$("[data-qty]",list).forEach(b=>b.addEventListener("click",()=>changeQty(b.dataset.qty,Number(b.dataset.delta))))}
$("#demo-checkout")?.addEventListener("click",()=>{if(!Object.keys(cart).length){toast("Add something delicious first");return}toast("Demo only — no order or payment was sent.");closeCart()});renderCart();
$("#enquiry-form")?.addEventListener("submit",e=>{e.preventDefault();const data=Object.fromEntries(new FormData(e.currentTarget));toast(`Demo preview ready for ${data.name||"you"} — nothing was sent.`);alert("DEMO ENQUIRY PREVIEW\n\nName: "+(data.name||"—")+"\nPhone: "+(data.phone||"—")+"\nEmail: "+(data.email||"—")+"\nCity: "+(data.city||"—")+"\n\nThis is a presentation demo. No data was sent or stored.")});
const observer="IntersectionObserver"in window?new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add("visible");observer.unobserve(e.target)}}),{threshold:.08}):null;$$(".section,.category-card,.feature-copy,.page-hero,.contact-card").forEach(el=>{el.classList.add("reveal");if(observer)observer.observe(el);else el.classList.add("visible")});


/* ========================= V2 ENHANCEMENTS ========================= */
const V2_FAV_KEY="onebite-v2-favourites", V2_CART_KEY="onebite-v2-demo-cart";
let favouriteNames=new Set();try{favouriteNames=new Set(JSON.parse(localStorage.getItem(V2_FAV_KEY)||"[]"))}catch(e){}
let sortMode="featured", favouritesOnly=false, detailItem=null, detailQty=1;
function saveFavourites(){try{localStorage.setItem(V2_FAV_KEY,JSON.stringify([...favouriteNames]))}catch(e){}}
function saveDemoCart(){try{sessionStorage.setItem(V2_CART_KEY,JSON.stringify(cart))}catch(e){}}
try{const restored=JSON.parse(sessionStorage.getItem(V2_CART_KEY)||"{}");if(restored&&typeof restored==="object")cart={...cart,...restored}}catch(e){}
function renderMenu(){
 const grid=$("#menu-grid");if(!grid)return;
 let filtered=menuItems.filter(x=>(activeCategory==="All"||x.category===activeCategory)&&(!vegOnly||x.veg)&&(!favouritesOnly||favouriteNames.has(x.name))&&(`${x.name} ${x.category} ${x.desc}`.toLowerCase().includes(searchTerm.toLowerCase())));
 if(sortMode==="price-low")filtered.sort((a,b)=>a.price-b.price);
 if(sortMode==="price-high")filtered.sort((a,b)=>b.price-a.price);
 if(sortMode==="name")filtered.sort((a,b)=>a.name.localeCompare(b.name));
 grid.innerHTML=filtered.map(x=>`<article class="menu-card"><div class="menu-card-img"><img loading="lazy" src="${x.image}" alt="${x.name}" onerror="this.src='https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80'"><span class="diet-dot ${x.veg?'':'nonveg'}" title="${x.veg?'Vegetarian':'Non-vegetarian'}"></span><button class="favourite-button ${favouriteNames.has(x.name)?'is-favourite':''}" data-fav="${x.name}" aria-label="${favouriteNames.has(x.name)?'Remove from':'Add to'} favourites">${favouriteNames.has(x.name)?'♥':'♡'}</button></div><div class="menu-card-body"><span class="menu-card-category">${x.category}</span><h3>${x.name}</h3><p>${x.desc}</p><div class="menu-card-foot"><span class="menu-price">${money(x.price)}<small class="demo-price">demo price</small></span><div class="menu-card-actions"><button class="details-button" data-detail="${x.name}">Details</button><button class="add-button" data-add="${x.name}" aria-label="Add ${x.name} to bag">+</button></div></div></div></article>`).join("");
 $("#result-count").textContent=`${filtered.length} ${favouritesOnly?"favourite ":""}bites to explore`;
 $("#empty-state").hidden=filtered.length>0;
 $$("[data-add]",grid).forEach(b=>b.addEventListener("click",()=>addToCart(b.dataset.add)));
 $$("[data-fav]",grid).forEach(b=>b.addEventListener("click",()=>{const n=b.dataset.fav;if(favouriteNames.has(n))favouriteNames.delete(n);else favouriteNames.add(n);saveFavourites();renderMenu();toast(favouriteNames.has(n)?"Added to favourites":"Removed from favourites")}));
 $$("[data-detail]",grid).forEach(b=>b.addEventListener("click",()=>openItemDetail(b.dataset.detail)));
 const favButton=$("#favorites-only");if(favButton){favButton.setAttribute("aria-pressed",String(favouritesOnly));favButton.classList.toggle("active",favouritesOnly);favButton.innerHTML=`${favouritesOnly?"♥":"♡"} <span>${favouritesOnly?"Showing favourites":"Show favourites"} (${favouriteNames.size})</span>`}
}
function addToCart(name){cart[name]=(cart[name]||0)+1;renderCart();saveDemoCart();toast(`${name} added to your bag`)}
function changeQty(name,delta){cart[name]=(cart[name]||0)+delta;if(cart[name]<=0)delete cart[name];renderCart();saveDemoCart()}
const oldRenderPillsV2=renderPills;
function renderCart(){
 const count=Object.values(cart).reduce((a,b)=>a+b,0);$$(".cart-count").forEach(e=>e.textContent=count);
 const list=$("#cart-items");if(!list)return;const entries=Object.entries(cart);
 list.innerHTML=entries.length?entries.map(([name,qty])=>{const item=menuItems.find(x=>x.name===name);if(!item)return "";return `<div class="cart-row"><div><b>${name}</b><small>${item.category} · demo price ${money(item.price)}</small></div><div class="cart-row-right"><strong>${money(item.price*qty)}</strong><div class="quantity-controls"><button data-qty="${name}" data-delta="-1" aria-label="Remove one">−</button><span>${qty}</span><button data-qty="${name}" data-delta="1" aria-label="Add one">+</button></div></div></div>`}).join(""):`<div class="cart-empty">Your bag is looking hungry.<br>Add a few bites from the menu.</div>`;
 $("#cart-total").textContent=money(entries.reduce((sum,[name,qty])=>sum+(menuItems.find(x=>x.name===name)?.price||0)*qty,0));
 $$("[data-qty]",list).forEach(b=>b.addEventListener("click",()=>changeQty(b.dataset.qty,Number(b.dataset.delta))));saveDemoCart();
}
function openItemDetail(name){
 detailItem=menuItems.find(x=>x.name===name);if(!detailItem)return;detailQty=1;
 $("#detail-image").src=detailItem.image;$("#detail-image").alt=detailItem.name;$("#detail-category").textContent=detailItem.category;$("#detail-name").textContent=detailItem.name;$("#detail-description").textContent=detailItem.desc;$("#detail-quantity").textContent=detailQty;$("#detail-price").textContent=money(detailItem.price*detailQty)+" · demo";
 $("#detail-note").value="";$("#item-modal").classList.add("open");$("#item-modal").setAttribute("aria-hidden","false");
}
function closeItemDetail(){$("#item-modal")?.classList.remove("open");$("#item-modal")?.setAttribute("aria-hidden","true")}
$("#menu-sort")?.addEventListener("change",e=>{sortMode=e.target.value;renderMenu()});
$("#favorites-only")?.addEventListener("click",()=>{favouritesOnly=!favouritesOnly;renderMenu()});
$("#detail-minus")?.addEventListener("click",()=>{detailQty=Math.max(1,detailQty-1);$("#detail-quantity").textContent=detailQty;$("#detail-price").textContent=money((detailItem?.price||0)*detailQty)+" · demo"});
$("#detail-plus")?.addEventListener("click",()=>{detailQty=Math.min(20,detailQty+1);$("#detail-quantity").textContent=detailQty;$("#detail-price").textContent=money((detailItem?.price||0)*detailQty)+" · demo"});
$("#detail-add")?.addEventListener("click",()=>{if(!detailItem)return;cart[detailItem.name]=(cart[detailItem.name]||0)+detailQty;renderCart();closeItemDetail();toast(`${detailQty} × ${detailItem.name} added`);});
$(".item-modal-close")?.addEventListener("click",closeItemDetail);
$("#item-modal")?.addEventListener("click",e=>{if(e.target.id==="item-modal")closeItemDetail()});
document.addEventListener("keydown",e=>{if(e.key==="Escape")closeItemDetail()});
if($("#menu-grid")){renderMenu();renderCart()}
const stateSearch=$("#state-search"),stateCloud=$("#state-cloud");
if(stateSearch&&stateCloud){const stateNames=$$("span",stateCloud);stateSearch.addEventListener("input",()=>{const q=stateSearch.value.trim().toLowerCase();let visible=0;stateNames.forEach(el=>{const show=el.textContent.toLowerCase().includes(q);el.hidden=!show;if(show)visible++});const counter=$("#state-count");if(counter)counter.textContent=`${visible} matching entries · official state presence list, not outlet addresses`})}


/* ========================= V3: FIXED INIT + NEW FEATURES ========================= */
function initV3Menu(){
 const search=$("#menu-search"), veg=$("#veg-only"), sort=$("#menu-sort");
 if(!$("#menu-grid")) return;
 const params=new URLSearchParams(location.search);
 if(params.has("category")){
  const wanted=params.get("category").toLowerCase();
  const match=[...new Set(menuItems.map(x=>x.category))].find(c=>c.toLowerCase()===wanted);
  if(match)activeCategory=match;
 }
 renderPills();
 renderMenu();
 if(search)search.addEventListener("input",e=>{searchTerm=e.target.value;renderMenu()});
 if(veg)veg.addEventListener("change",e=>{vegOnly=e.target.checked;renderMenu()});
 if(sort)sort.value=sortMode;
 $("#reset-menu")?.addEventListener("click",()=>{activeCategory="All";searchTerm="";vegOnly=false;sortMode="featured";favouritesOnly=false;if(search)search.value="";if(veg)veg.checked=false;if(sort)sort.value="featured";renderPills();renderMenu()});
}
initV3Menu();
renderCart();

/* Combo builder — demo-only pricing */
const comboForm=$("#combo-form");
if(comboForm){
 const updateCombo=()=>{
  const burger=Number($("#combo-burger")?.value||0), fries=Number($("#combo-fries")?.value||0), drink=Number($("#combo-drink")?.value||0);
  const total=burger+fries+drink;
  const totalEl=$("#combo-total");if(totalEl)totalEl.textContent=money(total);
  const summary=$("#combo-summary");if(summary)summary.textContent=`${$("#combo-burger")?.selectedOptions[0]?.textContent.split(" — ")[0]||"Burger"} + ${$("#combo-fries")?.selectedOptions[0]?.textContent.split(" — ")[0]||"Fries"} + ${$("#combo-drink")?.selectedOptions[0]?.textContent.split(" — ")[0]||"Drink"}`;
 };
 ["combo-burger","combo-fries","combo-drink"].forEach(id=>$("#"+id)?.addEventListener("change",updateCombo));
 updateCombo();
 $("#add-combo")?.addEventListener("click",()=>{
  const selections=[["combo-burger","Burger"],["combo-fries","Fries"],["combo-drink","Drink"]];
  let total=0;selections.forEach(([id,label])=>{const el=$("#"+id);if(el&&el.value!=="0"){const price=Number(el.value);total+=price;const name=`Build-a-Combo ${label} (${el.selectedOptions[0].textContent.split(" — ")[0]})`;cart[name]=(cart[name]||0)+1;menuItems.push({name,category:"Combo",price,veg:label!=="Burger"||!/chicken/i.test(el.selectedOptions[0].textContent),desc:"Your custom demo combo component.",image:"https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80"});}});
  renderCart();saveDemoCart();toast(total?"Your combo was added to the demo bag":"Choose at least one combo item");if(total)openCart();
 });
}

/* V3 outlet finder uses clearly marked service-area examples, not invented addresses. */
const outletSearch=$("#outlet-search"), outletRegion=$("#outlet-region");
function filterOutlets(){const q=(outletSearch?.value||"").trim().toLowerCase(),region=outletRegion?.value||"all";let shown=0;$$("[data-outlet-region]").forEach(card=>{const matches=(`${card.dataset.outletRegion} ${card.dataset.outletKeywords||""} ${card.textContent}`).toLowerCase().includes(q);const regionMatches=region==="all"||card.dataset.outletRegion===region;card.hidden=!(matches&&regionMatches);if(!card.hidden)shown++});const result=$("#outlet-results-count");if(result)result.textContent=`${shown} region ${shown===1?"result":"results"} · no branch addresses are represented here.`}
outletSearch?.addEventListener("input",filterOutlets);outletRegion?.addEventListener("change",filterOutlets);filterOutlets();
