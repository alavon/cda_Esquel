ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:22181").setExtent([1515792.628300, 5225606.613594, 1603260.277118, 5272070.389589]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_LIMITES_SECTORES_1 = new ol.format.GeoJSON();
var features_LIMITES_SECTORES_1 = format_LIMITES_SECTORES_1.readFeatures(json_LIMITES_SECTORES_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:22181'});
var jsonSource_LIMITES_SECTORES_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LIMITES_SECTORES_1.addFeatures(features_LIMITES_SECTORES_1);
var lyr_LIMITES_SECTORES_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LIMITES_SECTORES_1, 
                style: style_LIMITES_SECTORES_1,
                interactive: true,
                title: '<img src="styles/legend/LIMITES_SECTORES_1.png" /> LIMITES_SECTORES'
            });
var format_DivisionMzoMzaLIMITES_SECTORES_2 = new ol.format.GeoJSON();
var features_DivisionMzoMzaLIMITES_SECTORES_2 = format_DivisionMzoMzaLIMITES_SECTORES_2.readFeatures(json_DivisionMzoMzaLIMITES_SECTORES_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:22181'});
var jsonSource_DivisionMzoMzaLIMITES_SECTORES_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DivisionMzoMzaLIMITES_SECTORES_2.addFeatures(features_DivisionMzoMzaLIMITES_SECTORES_2);
var lyr_DivisionMzoMzaLIMITES_SECTORES_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DivisionMzoMzaLIMITES_SECTORES_2, 
                style: style_DivisionMzoMzaLIMITES_SECTORES_2,
                interactive: true,
                title: '<img src="styles/legend/DivisionMzoMzaLIMITES_SECTORES_2.png" /> Division-Mzo-Mza — LIMITES_SECTORES'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_LIMITES_SECTORES_1.setVisible(true);lyr_DivisionMzoMzaLIMITES_SECTORES_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_LIMITES_SECTORES_1,lyr_DivisionMzoMzaLIMITES_SECTORES_2];
lyr_LIMITES_SECTORES_1.set('fieldAliases', {'Layer': 'Layer', 'CircSect': 'CircSect', });
lyr_DivisionMzoMzaLIMITES_SECTORES_2.set('fieldAliases', {'Division': 'Division', 'DRIVE': 'DRIVE', 'Circ.Sect': 'Circ.Sect', 'I.P.V.y D.U.': 'I.P.V.y D.U.', });
lyr_LIMITES_SECTORES_1.set('fieldImages', {'Layer': 'TextEdit', 'CircSect': 'TextEdit', });
lyr_DivisionMzoMzaLIMITES_SECTORES_2.set('fieldImages', {'Division': 'TextEdit', 'DRIVE': 'TextEdit', 'Circ.Sect': 'TextEdit', 'I.P.V.y D.U.': 'TextEdit', });
lyr_LIMITES_SECTORES_1.set('fieldLabels', {'Layer': 'no label', 'CircSect': 'header label', });
lyr_DivisionMzoMzaLIMITES_SECTORES_2.set('fieldLabels', {'Division': 'inline label', 'DRIVE': 'header label', 'Circ.Sect': 'no label', 'I.P.V.y D.U.': 'inline label', });
lyr_DivisionMzoMzaLIMITES_SECTORES_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});