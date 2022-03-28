document.getElementById('check-menu').checked=false;
document.getElementById('check-menu').addEventListener('change',function(){
  if(this.checked==true){
    document.getElementsByClassName('menu-container')[0].classList.add('active');
    document.getElementsByClassName('main-body')[0].classList.add('disable');
  }
  else{
    document.getElementsByClassName('menu-container')[0].classList.remove('active');
    document.getElementsByClassName('main-body')[0].classList.remove('disable');
  }
});
document.getElementsByClassName('menu-close')[0].addEventListener('click',function(){
  document.getElementsByClassName('menu-container')[0].classList.remove('active');
  document.getElementsByClassName('main-body')[0].classList.remove('disable');
  document.getElementById('check-menu').checked=false;
});
let index_gbr=0;
let gbr=["logo.jpg","gbr_1.jpg","gbr_2.jpg"];
let opc=1;
let count=0;
setInterval(function(){
  let elemen_gambar=document.getElementsByClassName('img-container')[0].getElementsByTagName('img')[0];
  if(count>240&&count<=250){
    opc=opc-0.1;
    elemen_gambar.style.opacity=opc;
  }
  else if ((count>250&&count<=260)) {
    opc=opc+0.1;
    elemen_gambar.style.opacity=opc;
  }
  if(count==250){
    index_gbr++;
    if(index_gbr>2){
      index_gbr=0;
    }
    elemen_gambar.src="images/"+gbr[index_gbr];
  }
  if(count==350){
    count=0;
  }
  count+=1;
},1);

function create_observe(elemen){
  let elemen_observe=elemen;
  for(let i=0;i<elemen_observe.length;i++){
    let animation_direction=elemen_observe[i].getAttribute("animation-direction");
    let elemen_observe_add={
      top:"observe-top",
      bottom:"observe-bottom",
      left:"observe-left",
      right:"observe-right",
    }
    if(animation_direction){
      elemen_observe[i].classList.add(elemen_observe_add[animation_direction]);
    }
    else{
      elemen_observe[i].classList.add("observe-top");
    }
  }
  let elemen_observe_after=["observe-top","observe-bottom","observe-left","observe-right"];
  for (let j=0;j<elemen_observe_after.length;j++){
    let elemen_observe_show=["observe-show-top","observe-show-bottom","observe-show-left","observe-show-right",]
    let elemen_observe_after_container=document.getElementsByClassName(elemen_observe_after[j]);
    if(elemen_observe_after_container){
      if(elemen_observe_after_container){
        for(let k=elemen_observe_after_container.length;k>0;k=k-1){
          if(j==0){
            console.log(elemen_observe_after_container[0]);
          }
          if(elemen_observe_after_container[0].getBoundingClientRect().y<=500){
            elemen_observe_after_container[0].classList.add(elemen_observe_show[j]);
            elemen_observe_after_container[0].classList.remove(elemen_observe_after[j]);
          }
        }
      }
    }
  }
  window.addEventListener('scroll',function(){
    let elemen_observe_after=["observe-top","observe-bottom","observe-left","observe-right"];
    for (let j=0;j<elemen_observe_after.length;j++){
      let elemen_observe_show=["observe-show-top","observe-show-bottom","observe-show-left","observe-show-right",]
      let elemen_observe_after_container=document.getElementsByClassName(elemen_observe_after[j]);
      if(elemen_observe_after_container){
        if(elemen_observe_after_container){
          for(let k=0;k<elemen_observe_after_container.length;k++){
            if(elemen_observe_after_container[k].getBoundingClientRect().y<=500){
              elemen_observe_after_container[k].classList.add(elemen_observe_show[j]);
              elemen_observe_after_container[k].classList.remove(elemen_observe_after[j]);
            }
          }
        }
      }
    }
  });
}

create_observe(document.getElementsByClassName('observe'));
