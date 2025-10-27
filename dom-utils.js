

const updateAttribute = (element, key, value) =>{
  try{
    const oldValue = element.getAttribute(String(key));
    if(oldValue == value)return;
    return element.setAttribute(String(key),String(value));
  }catch(e){
    console.warn(e,element,key,value);
  }
};

const querySelector = (...args)=>{
  let [elem,selectors] = args;
  try{
   if(!elem?.querySelector){
      [selectors,elem] = [elem,document];
    }
    return elem.querySelector(String(selectors));
  }catch(e){
    console.warn(e,...args);
  }
};

const querySelectorAll = (...args)=>{
  let [elem,selectors] = args;
  try{
    if(!elem?.querySelectorAll){
      [selectors,elem] = [elem,document];
    }
    return elem.querySelectorAll(String(selectors));
  }catch(e){
    console.warn(e,...args);
  }
  return document.createElement('NodeList').childNodes;
};

const getElementsByTagName = (...args)=>{
  let [elem,tag] = args;
  try{
    if(!elem?.getElementsByTagName){
      [tag,elem] = [elem,document];
    }
    return elem.getElementsByTagName(String(tag));
  }catch(e){
    console.warn(e,...args);
  }
  return document.createElement('HTMLCollection').children;
};
