
const getPageObj = () => {
  const pages = getCurrentPages();
  const pageObj = pages[pages.length-1];
  return pageObj;
}


export {
  getPageObj
}