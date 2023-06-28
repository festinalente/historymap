/**
  * Onload event
  * @event DOMContentLoaded
  * @fires MapConstructor#generateMap
  */

 /*
  window.addEventListener('DOMContentLoaded', (event) => {
    const historyMap = new MapConstructor('#map', '80vh')
      .generateMap()
      .locateOnClick();
  });*/

/**
  * Onload event
  * @event DOMContentLoaded
  * @summary fires layer dialogue constructor
  * @fires Layer#generateAddLayerForm
  */

let layerControls;
let sliderConstructor;

document.addEventListener('DOMContentLoaded', () => {
  const parent = document.querySelector('.mapControls');

  layerControls = new LayerManager(parent);
  layerControls.generateAddLayerForm();
  layerControls.generateAddMapForm();
  layerControls.layerControlEvents();

  sliderConstructor = new SliderConstructor(1625, 1701);
  sliderConstructor.getDate();
  document.querySelectorAll('[data-featuregroup="Current Satellite"').forEach((radio) => {
    radio.click();
  });
  // For Firefox where checkboxes remain checked after reload:
  const layerControlsDiv = parent.querySelector('.layerControls');
  if (layerControlsDiv) {
    const checkboxes = layerControlsDiv.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach((checkbox, i) => {
      checkbox.checked = false;
    });
    document.querySelector('.layerToggle').querySelector('.toggleVisibility').click();
  }
});

// Global click event handler, others are defined in the "add layer" constructor:
document.querySelector('body').addEventListener('click', (e) => {
  // Hack to display content in modal from the encyclopedia
  if (e.target.classList.contains('toggleInfo')) {
    // refers to a node in Drupal:
    const modal = document.querySelector('.modal');
    const modalContent = document.querySelector('.modal-content');
    while (modalContent.firstChild) {
      modalContent.removeChild(modalContent.lastChild);
    }
    const nodeId = e.target.dataset.nodeid;
    const url = `https://encyclopedia.nahc-mapping.org/rendered-export-single?nid=${nodeId}`;
    xhrGetInPromise(null, url).then((content) => {
      let rmNewlines = JSON.parse(content)[0].rendered_entity.replace(/\n/g, '');
      rmNewlines = rmNewlines.replace(/<a (.*?)>/g, '');
      document.querySelector('.modal-content').insertAdjacentHTML('afterbegin', rmNewlines);
      modal.showModal();
    });
  }

  if (e.target.classList.contains('zoomToWorld')) {
    Object.values(maps).forEach((map) => {
      map.fitBounds([[-179, -59], [135, 77]]);
    });
  }

  if (e.target.classList.contains('displayStyleEditor')) {
    document.querySelector('.styleform').classList.remove('hiddenContent');
  }

  if (e.target.classList.contains('displayLayerEditor')) {
    document.querySelector('.layerform').classList.remove('hiddenContent');
  }

  if (e.target.classList.contains('hideMenuTab')) {
    // bad code trying to deal with hard code values
    const controlsDiv = document.querySelector('.mapControls');
    const mapContainer = document.querySelector('.mapContainer');
    if (e.target.textContent === '«') {
      controlsDiv.classList.add('hiddenControls');
      e.target.textContent = '»';
      e.target.style.left = '0px';
      changePosition = compare._x + 325;
      //compare._setPosition(changePosition);
    } else {
      controlsDiv.classList.remove('hiddenControls');
      e.target.textContent = '«';
      //e.target.style.left = controlsDiv.offsetWidth;
      e.target.style.left = '325px';
    }

    Object.values(maps).forEach(map => map.resize());
  }

  if (e.target.classList.contains('close')) {
    const modal = document.querySelector('.modal');
    modal.close();
  }
});
