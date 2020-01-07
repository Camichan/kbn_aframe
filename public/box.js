//import aframe
const aframe = require('aframe');

// Registro de la componente
AFRAME.registerComponent('box', {
  schema: {
    width: {type: 'number', default: 1},
    height: {type: 'number', default: 1},
    depth: {type: 'number', default: 1},
  },

  //Funcion inicial
  init: function () {
    var data = this.data;
    var el = this.el;

    // Crea la figura
    this.geometry = new THREE.BoxBufferGeometry(data.width, data.height, data.depth);

    // Creamos la mesh
    this.mesh = new THREE.Mesh(this.geometry);

    // Creamos el objeto 3D
    el.setObject3D('mesh', this.mesh);
  },


  // En caso de que los datos cambien, actualizamos la figura
  update: function (oldData) {
    var data = this.data;
    var el = this.el;

    // If `oldData` is empty, then this means we're in the initialization process.
    // No need to update.
    if (Object.keys(oldData).length === 0) { return; }

    // Geometry-related properties changed. Update the geometry.
    if (data.width !== oldData.width ||
        data.height !== oldData.height ||
        data.depth !== oldData.depth) {
      el.getObject3D('mesh').geometry = new THREE.BoxBufferGeometry(data.width, data.height,
                                                                    data.depth);
    }

  },

  // Borramos la figura
  remove: function () {
    this.el.removeObject3D('mesh');
  }


});
