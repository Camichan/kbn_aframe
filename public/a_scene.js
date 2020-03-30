import 'aframe-environment-component';

function createScene (){
  //Create a_scene
  var escena = escena = document.createElement('a-scene');
  escena.setAttribute('id', 'AframeScene');
  escena.setAttribute('embedded', true);

  // Environment
  var environment = document.createElement('a-entity');
  environment.setAttribute('environment', {
    preset: 'contact',
    skyType: 'gradient'
  });
  escena.appendChild(environment);

  // LIGHT
  var light = document.createElement('a-light');
  light.setAttribute('type', 'ambient');
  light.setAttribute('intensity', 1);
  light.setAttribute('position', { x:10, y:20, z:30 });
  escena.appendChild(light);

  return escena;
}

export { createScene };
