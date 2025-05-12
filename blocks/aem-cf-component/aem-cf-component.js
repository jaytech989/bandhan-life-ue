export default function decorate(block) {
  console.log("block from cf component page", block);

  const divWrapper= document.createElement('div');
  
  divWrapper.setAttribute('data-aue-resource','urn:aem:/content');
  divWrapper.setAttribute('data-aue-type','container');
  divWrapper.setAttribute('data-aue-prop','field');


  const link = block.querySelector('a');
  const path = link ? link.getAttribute('href') : block.textContent.trim();

  block.textContent = "";
  block.append(divWrapper)
  block.append(path);
}
