import 'aframe';
import 'aframe-babia-components';
import 'aframe-extras';
import 'aframe-environment-component';

function createChart (type, data) {
  var chart = document.createElement('a-entity');

  if ( type == 'pie') {
    chart.setAttribute('geopiechart', {
      legend: true,   // legend
      data: data //data
    });
    chart.setAttribute('position', { x: 0, y: 2, z: -4 });
    chart.setAttribute('rotation', { x: 90, y: -20, z: 0 });
  } else if (type == 'simple_bar') {
    chart.setAttribute('geosimplebarchart', {
      legend: true,   // legend
      axis: true,   // axis
      data: data //data
    });
    chart.setAttribute('position', { x: -2, y: 0, z: -5 });
    chart.setAttribute('rotation', { x: 0, y: 0, z: 0 });
  } else if (type == '3d_bar') {
    chart.setAttribute('geo3dbarchart', {
      legend: true,   // legend
      data: data //data
    });
    chart.setAttribute('position', { x: 0, y: 0, z: -15 });
    chart.setAttribute('rotation', { x: 0, y: 0, z: 0 });
  } else if (type == 'bubble'){
    chart.setAttribute('scale', { x: 0.4, y: 0.4, z: 0.4 });
    chart.setAttribute('geobubbleschart', {
      legend: true,   // legend
      data: data //data
    });
    chart.setAttribute('position', { x: 0, y: 0, z: -15 });
    chart.setAttribute('rotation', { x: 0, y: 0, z: 0 });
  }
  return chart;
}

export { createChart };
