import 'aframe';
import 'aframe-babia-components';
import 'aframe-extras';
import 'aframe-environment-component';

function createControls (){
  // CONTROLS
  var controls = document.createElement('a-entity');
  controls.setAttribute('movement-controls', {fly: true});

  var camera = document.createElement('a-entity');
  camera.setAttribute('camera', true);
  camera.setAttribute('look-controls', true);
  controls.appendChild(camera);

  var cursor = document.createElement('a-entity');
  cursor.setAttribute('cursor', {rayOrigin: "mouse"});
  controls.appendChild(cursor);

  var laser = document.createElement('a-entity');
  laser.setAttribute('laser-controls', {hand: "right"});
  controls.appendChild(laser);

  return controls;
}


export { createControls };
