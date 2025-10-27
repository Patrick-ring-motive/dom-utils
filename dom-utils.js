

const updateAttribute = (element, key, value) =>{
  try{
    const oldValue = element.getAttribute(String(key));
    if(oldValue == value)return;
    return element.setAttribute(String(key),String(value));
  }catch(e){
    console.warn(e,element,key,value);
  }
};

