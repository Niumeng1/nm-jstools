/*
 * @Description: 
 * @Author: 牛猛
 * @Date: 2022-06-23 14:27:36
 * @LastEditTime: 2022-06-23 18:25:14
 * @LastEditors: nm
 * @FilePath: \nm-jstools\src\mapbox\index.js
 */
const mapbox = {
    
    
}
function addLayer(map,propObj,paintObj,layoutObj){
       
    propObj = Object.assign({layerName:'line-'+Math.random()*100,type:'LineString',coordinates:[],properties:{},isFixed:false},propObj);
    let layerType='';
    switch (propObj.type) {
        case 'Point':
        case 'MultiPoint':
            paintObj = Object.assign({ 'circle-radius': 4,  'circle-color': '#0080ff'},paintObj);
            layoutObj = Object.assign({},layoutObj);
            layerType = 'circle'
           break;
        case 'LineString':
        case 'MultiLineString':
            paintObj = Object.assign({ 'line-color': '#0080ff',  'line-width': 5},paintObj);
            layoutObj = Object.assign({  "line-cap": "round",
            "line-join": "bevel",
            "line-miter-limit": 2},layoutObj);
            layerType = 'line'
           break;
        case 'Polygon':
        case 'MultiPolygon':
            paintObj = Object.assign({ 'fill-color': '#0080ff',  'fill-opacity': .8,"fill-outline-color":'#000'},paintObj);
            layoutObj = Object.assign({},layoutObj);
            layerType = 'fill'
            break;
        default:
            break;
    }
   
    const geojson = {
        'type': 'FeatureCollection',
        'features': [
            {
                'type': 'Feature',
                'geometry': {
                    'type': propObj.type,
                    'coordinates':propObj.coordinates
                }
            }
        ]
    };
    map.addSource(propObj.layerName, {
        'type': 'geojson',
        'data': geojson
    });

    map.addLayer({
        'id': propObj.layerName,
        'type': layerType,
        'source': propObj.layerName,
        'paint':paintObj,
        'layout':layoutObj
    });
    // if(propObj.isFixed){
    //     if(propObj.type=='LineString' ||propObj.type=='Polygon'){
    //         this.ziFitBounds(propObj.coordinates[0])
    //     }
    //     if(propObj.type=='MultiLineString'){
    //         this.fitBounds(this.getPolygonBoundingBox(propObj.coordinates));
    //     }
    // }
}
mapbox.prototype.addLayer = addLayer
export default mapbox