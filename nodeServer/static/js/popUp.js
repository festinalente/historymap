/**
 * @param {string} layerClass   -The layer being added e.g. 'infoLayerDutchGrantsPopUp'
 * @param {Object{}} event      -Event fired by Mapbox GL
 * @param {string} layerName    -The human readable layer name being added e.g. 'Dutch Grant Lot'
 * @description Function to create popup content. From a security perspective
 * when taking uset input it is preferable to set text view textContent:
 * https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent#differences_from_innertext
 * Using DOM mutation like this also means we can add events easilly.
 * @returns A HTMLElemnt to use in the pop up
 */

function createPopup (data, event) {
  const layerName = data['feature group'];
  const layerClass = `${layerName}PopUp`;
  const popUpHTML = document.createElement('div');
  const mapboxFeatureProperties = ((event && event.features) && event.features[0].properties) || null;
  const props = [
    mapboxFeatureProperties.name || 'no property "name" exits on this feature',
    mapboxFeatureProperties.prop1 || '<b>Property "prop1": </b><span>doesn\'t exit on this feature</span>',
    mapboxFeatureProperties.prop2 || '<b>Property "prop2": </b><span>doesn\'t exit on this feature</span>',
    mapboxFeatureProperties.prop3 || '<b>Property "prop3": </b><span>doesn\'t exit on this feature</span>'
  ];

  popUpHTML.classList.add('hoverPopUp', layerClass.replaceAll(' ', '_'));

  if (data['pop up color']) { popUpHTML.style.backgroundColor = data['pop up color']; }
  if (data['pop up border color']) { popUpHTML.style.borderColor = data['pop up border color']; }

  props.forEach(prop => otherProps(prop));

  function otherProps (prop) {
    const div = document.createElement('div');
    div.innerHTML = prop;
    popUpHTML.appendChild(div);
  }

  return popUpHTML;
}
