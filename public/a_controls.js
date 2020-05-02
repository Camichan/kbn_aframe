import 'aframe-extras';

function createControls (){
  var controls = document.createElement('a-entity');
  controls.setAttribute('movement-controls', {fly: true});

  var camera = document.createElement('a-camera');
  camera.setAttribute('position', { x: 0, y: 2.5, z: 1 });
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
