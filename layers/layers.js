var wms_layers = [];


        var lyr_EsriImagery_0 = new ol.layer.Tile({
            'title': 'Esri Imagery',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_MEDviasURBANAS_2 = new ol.format.GeoJSON();
var features_MEDviasURBANAS_2 = format_MEDviasURBANAS_2.readFeatures(json_MEDviasURBANAS_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MEDviasURBANAS_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MEDviasURBANAS_2.addFeatures(features_MEDviasURBANAS_2);
var lyr_MEDviasURBANAS_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MEDviasURBANAS_2, 
                style: style_MEDviasURBANAS_2,
                popuplayertitle: 'MEDviasURBANAS',
                interactive: true,
                title: '<img src="styles/legend/MEDviasURBANAS_2.png" /> MEDviasURBANAS'
            });
var format_RN_Municipios_2022_3 = new ol.format.GeoJSON();
var features_RN_Municipios_2022_3 = format_RN_Municipios_2022_3.readFeatures(json_RN_Municipios_2022_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RN_Municipios_2022_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RN_Municipios_2022_3.addFeatures(features_RN_Municipios_2022_3);
var lyr_RN_Municipios_2022_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RN_Municipios_2022_3, 
                style: style_RN_Municipios_2022_3,
                popuplayertitle: 'RN_Municipios_2022',
                interactive: true,
                title: '<img src="styles/legend/RN_Municipios_2022_3.png" /> RN_Municipios_2022'
            });

lyr_EsriImagery_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_MEDviasURBANAS_2.setVisible(true);lyr_RN_Municipios_2022_3.setVisible(true);
var layersList = [lyr_EsriImagery_0,lyr_GoogleSatellite_1,lyr_MEDviasURBANAS_2,lyr_RN_Municipios_2022_3];
lyr_MEDviasURBANAS_2.set('fieldAliases', {'id': 'id', 'NM_TIP_LOG': 'NM_TIP_LOG', 'NM_TIT_LOG': 'NM_TIT_LOG', 'NM_LOG': 'NM_LOG', 'DIM_LOG': 'DIM_LOG', 'LARG_LOG': 'LARG_LOG', 'OBS_TEXTO': 'OBS_TEXTO', });
lyr_RN_Municipios_2022_3.set('fieldAliases', {'CD_MUN': 'CD_MUN', 'NM_MUN': 'NM_MUN', 'SIGLA_UF': 'SIGLA_UF', 'AREA_KM2': 'AREA_KM2', 'VALORTOTAL': 'VALORTOTAL', });
lyr_MEDviasURBANAS_2.set('fieldImages', {'id': 'TextEdit', 'NM_TIP_LOG': 'TextEdit', 'NM_TIT_LOG': 'TextEdit', 'NM_LOG': 'TextEdit', 'DIM_LOG': 'TextEdit', 'LARG_LOG': 'TextEdit', 'OBS_TEXTO': 'TextEdit', });
lyr_RN_Municipios_2022_3.set('fieldImages', {'CD_MUN': 'TextEdit', 'NM_MUN': 'TextEdit', 'SIGLA_UF': 'TextEdit', 'AREA_KM2': 'TextEdit', 'VALORTOTAL': 'TextEdit', });
lyr_MEDviasURBANAS_2.set('fieldLabels', {'id': 'no label', 'NM_TIP_LOG': 'no label', 'NM_TIT_LOG': 'no label', 'NM_LOG': 'no label', 'DIM_LOG': 'no label', 'LARG_LOG': 'no label', 'OBS_TEXTO': 'no label', });
lyr_RN_Municipios_2022_3.set('fieldLabels', {'CD_MUN': 'no label', 'NM_MUN': 'no label', 'SIGLA_UF': 'no label', 'AREA_KM2': 'no label', 'VALORTOTAL': 'no label', });
lyr_RN_Municipios_2022_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});