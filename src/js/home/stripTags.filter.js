class StripTags {
  
  static filter(text){
     return  text ? String(text).replace(/<[^>]+>/gm, '') : '';
  }
  
}

export default StripTags.filter;


