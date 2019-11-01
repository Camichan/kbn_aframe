AFRAME.registerComponent('box', {
  schema: {
    boxWidth: {type: 'number', default: 1},
    boxHeight: {type: 'number', default: 1},
    boxDepth: {type: 'number', default: 1},
    boxColor: {type: 'color', default: '#4CC3D9'}

  },

  init: function () {
    var data = this.data;
    var el = this.el;
    this.geometry = new THREE.BoxBufferGeometry(data.boxWidth, data.boxHeight, data.boxDepth);
    this.material = new THREE.MeshStandardMaterial({color: data.boxColor});
    this.mesh = new THREE.Mesh(this.geometry, this.material);
    el.setObject3D('mesh', this.mesh);
  },

  /**
   * Update the mesh in response to property updates.
   */
  update: function (oldData) {
    var data = this.data;
    var el = this.el;

    // If `oldData` is empty, then this means we're in the initialization process.
    // No need to update.
    if (Object.keys(oldData).length === 0) { return; }

    // Geometry-related properties changed. Update the geometry.
    if (data.boxWidth !== oldData.boxWidth ||
        data.boxHeight !== oldData.boxHeight ||
        data.boxDepth !== oldData.boxDepth) {
      el.getObject3D('mesh').geometry = new THREE.BoxBufferGeometry(data.boxWidth, data.boxHeight,
                                                                    data.boxDepth);
    }

    // Material-related properties changed. Update the material.
    if (data.boxColor !== oldData.BoxColor) {
      el.getObject3D('mesh').material.color = new THREE.Color(data.boxColor);
    }
  },

  remove: function () {
    this.el.removeObject3D('mesh');
  }
});
