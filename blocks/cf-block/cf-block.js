export default function decorate(block) {
    const cfReference = block.querySelector('[data-aue-prop="cfRef"]');
    if (cfReference) {
      const cfPath = cfReference.dataset.aueResource;
      if (cfPath) {
        fetch(`${cfPath}.model.json`)
          .then((resp) => resp.json())
          .then((data) => {
            const title = data.title || 'No title';
            const subtitle = data.subtitle || 'No subtitle';
  
            const html = `
              <div class="cf-title"><h2>${title}</h2></div>
              <div class="cf-subtitle"><p>${subtitle}</p></div>
            `;
            block.innerHTML = html;
          });
      }
    }
  }
  