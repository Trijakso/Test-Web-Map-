var wms_layers = [];


        var lyr_GoogleTerrainHybrid_0 = new ol.layer.Tile({
            'title': 'Google Terrain Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=p&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatelliteHybrid_1 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format__7_2 = new ol.format.GeoJSON();
var features__7_2 = format__7_2.readFeatures(json__7_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__7_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__7_2.addFeatures(features__7_2);
var lyr__7_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__7_2, 
                style: style__7_2,
                interactive: true,
    title: 'รวมใหม่_พื้นที่อนุรักษ์สบอ7และข้างเคียง<br />\
    <img src="styles/legend/_7_2_0.png" /> เขตรักษาพันธุ์สัตว์ป่าซับลังกา<br />\
    <img src="styles/legend/_7_2_1.png" /> เขตรักษาพันธุ์สัตว์ป่าดงใหญ่<br />\
    <img src="styles/legend/_7_2_2.png" /> เขตรักษาพันธุ์สัตว์ป่าตะเบาะ - ห้วยใหญ่<br />\
    <img src="styles/legend/_7_2_3.png" /> เขตรักษาพันธุ์สัตว์ป่าผาผึ้ง<br />\
    <img src="styles/legend/_7_2_4.png" /> เขตรักษาพันธุ์สัตว์ป่าภูเขียว<br />\
    <img src="styles/legend/_7_2_5.png" /> เขตห้ามล่าสัตว์ป่าเขากระโดง<br />\
    <img src="styles/legend/_7_2_6.png" /> เขตห้ามล่าสัตว์ป่าเขาแผงม้า<br />\
    <img src="styles/legend/_7_2_7.png" /> เขตห้ามล่าสัตว์ป่าบึงละหาน<br />\
    <img src="styles/legend/_7_2_8.png" /> เขตห้ามล่าสัตว์ป่าป่าเขาภูหลวง<br />\
    <img src="styles/legend/_7_2_9.png" /> เขตห้ามล่าสัตว์ป่าลำนางรอง<br />\
    <img src="styles/legend/_7_2_10.png" /> เขตห้ามล่าสัตว์ป่าหนองแวง<br />\
    <img src="styles/legend/_7_2_11.png" /> เขตห้ามล่าสัตว์ป่าอ่างเก็บน้ำสนามบิน<br />\
    <img src="styles/legend/_7_2_12.png" /> เขตห้ามล่าสัตว์ป่าอ่างเก็บน้ำห้วยจรเข้มาก<br />\
    <img src="styles/legend/_7_2_13.png" /> เขตห้ามล่าสัตว์ป่าอ่างเก็บน้ำห้วยตลาด<br />\
    <img src="styles/legend/_7_2_14.png" /> สวนรุกขชาติน้ำผุดทัพลาว<br />\
    <img src="styles/legend/_7_2_15.png" /> สวนรุกขชาติภูกุ้มข้าว<br />\
    <img src="styles/legend/_7_2_16.png" /> อุทยานแห่งชาติเขาใหญ่<br />\
    <img src="styles/legend/_7_2_17.png" /> อุทยานแห่งชาติเจ็ดสาวน้อย<br />\
    <img src="styles/legend/_7_2_18.png" /> อุทยานแห่งชาติตาดโตน<br />\
    <img src="styles/legend/_7_2_19.png" /> อุทยานแห่งชาติตาพระยา<br />\
    <img src="styles/legend/_7_2_20.png" /> อุทยานแห่งชาติทับลาน<br />\
    <img src="styles/legend/_7_2_21.png" /> อุทยานแห่งชาติไทรทอง<br />\
    <img src="styles/legend/_7_2_22.png" /> อุทยานแห่งชาติน้ำพอง<br />\
    <img src="styles/legend/_7_2_23.png" /> อุทยานแห่งชาติน้ำหนาว<br />\
    <img src="styles/legend/_7_2_24.png" /> อุทยานแห่งชาติป่าหินงาม<br />\
    <img src="styles/legend/_7_2_25.png" /> อุทยานแห่งชาติภูแลนคา<br />\
    <img src="styles/legend/_7_2_26.png" /> <br />'
        });
var format__3 = new ol.format.GeoJSON();
var features__3 = format__3.readFeatures(json__3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__3.addFeatures(features__3);
var lyr__3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__3, 
                style: style__3,
                interactive: true,
                title: '<img src="styles/legend/_3.png" /> พื้นที่เตรียมผนวก'
            });
var format__7_4 = new ol.format.GeoJSON();
var features__7_4 = format__7_4.readFeatures(json__7_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__7_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__7_4.addFeatures(features__7_4);
var lyr__7_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__7_4, 
                style: style__7_4,
                interactive: true,
    title: 'ที่ตั้งหน่วยงาน_สบอ7<br />\
    <img src="styles/legend/_7_4_0.png" /> โครงการพัฒนาป่าไม้ตามแนวพระราชดำริป่านายางกลัก<br />\
    <img src="styles/legend/_7_4_1.png" /> โครงการพัฒนาป่าไม้ตามแนวพระราชดำริป่าภูแลนคาด้านทิศใต้<br />\
    <img src="styles/legend/_7_4_2.png" /> โครงการพัฒนาป่าไม้ตามแนวพระราชดำริป่าวังน้ำเขียว จ.นครราชสีมา<br />\
    <img src="styles/legend/_7_4_3.png" /> จุดสกัดเขาขาด<br />\
    <img src="styles/legend/_7_4_4.png" /> จุดสกัดเขื่อนจุฬาภรณ์<br />\
    <img src="styles/legend/_7_4_5.png" /> จุดสกัดชั่วคราวเขาโซ่<br />\
    <img src="styles/legend/_7_4_6.png" /> จุดสกัดชั่วคราวบ้านน้อยหลักไฟ<br />\
    <img src="styles/legend/_7_4_7.png" /> จุดสกัดชั่วคราวป่าเหล่าไห่<br />\
    <img src="styles/legend/_7_4_8.png" /> จุดสกัดตลาดควาย<br />\
    <img src="styles/legend/_7_4_9.png" /> จุดสกัดถลุงมาศ<br />\
    <img src="styles/legend/_7_4_10.png" /> จุดสกัดที่ 1 (เขาสูง)<br />\
    <img src="styles/legend/_7_4_11.png" /> จุดสกัดเทพารักษ์<br />\
    <img src="styles/legend/_7_4_12.png" /> จุดสกัดบ้านสระ<br />\
    <img src="styles/legend/_7_4_13.png" /> จุดสกัดประมง<br />\
    <img src="styles/legend/_7_4_14.png" /> จุดสกัดป่าสัก<br />\
    <img src="styles/legend/_7_4_15.png" /> จุดสกัดภูคิ้ง<br />\
    <img src="styles/legend/_7_4_16.png" /> จุดสกัดร้อยล้าน<br />\
    <img src="styles/legend/_7_4_17.png" /> จุดสกัดโล่ใหญ่<br />\
    <img src="styles/legend/_7_4_18.png" /> จุดสกัดสามแยกบ้านไร่<br />\
    <img src="styles/legend/_7_4_19.png" /> จุดสกัดสายใจ<br />\
    <img src="styles/legend/_7_4_20.png" /> จุดสกัดหนองใหญ่<br />\
    <img src="styles/legend/_7_4_21.png" /> จุดสกัดห้วยเพียว<br />\
    <img src="styles/legend/_7_4_22.png" /> จุดสกัดห้วยอีด่าน<br />\
    <img src="styles/legend/_7_4_23.png" /> จุดสกัดห้าพันไร่<br />\
    <img src="styles/legend/_7_4_24.png" /> จุดสกัดแหละตองกุง<br />\
    <img src="styles/legend/_7_4_25.png" /> ฐานปฎิบัติการป้องกันรักษาป่าที่ นม.1 (ดงเค็ง) จ.บุรีรัมย์<br />\
    <img src="styles/legend/_7_4_26.png" /> ฐานปฎิบัติการป้องกันรักษาป่าที่ นม.2 (เขายายหอม) จ.ชัยภูมิ<br />\
    <img src="styles/legend/_7_4_27.png" /> ฐานปฎิบัติการป้องกันรักษาป่าที่ นม.3 (ภูตะเภา) จ.ชัยภูมิ<br />\
    <img src="styles/legend/_7_4_28.png" /> ฐานปฎิบัติการป้องกันรักษาป่าที่ นม.4 (เขาภุหลวง) จ.นครราชสีมา<br />\
    <img src="styles/legend/_7_4_29.png" /> ฐานปฏิบัติการ (หุบทองหลาง-ป่าสัก)<br />\
    <img src="styles/legend/_7_4_30.png" /> ด่านตรวจโคกเต็ง<br />\
    <img src="styles/legend/_7_4_31.png" /> ด่านตรวจซับยาง<br />\
    <img src="styles/legend/_7_4_32.png" /> ด่านตรวจหนองไผ่<br />\
    <img src="styles/legend/_7_4_33.png" /> ที่ทำการเขตรักษาพันธุ์สัตว์ป่าดงใหญ่<br />\
    <img src="styles/legend/_7_4_34.png" /> ที่ทำการเขตรักษาพันธุ์สัตว์ป่าผาผึ้ง<br />\
    <img src="styles/legend/_7_4_35.png" /> ที่ทำการเขตรักษาพันธุ์สัตว์ป่าภูเขียว<br />\
    <img src="styles/legend/_7_4_36.png" /> ที่ทำการเขตห้ามล่าสัตว์ป่าเขาแผงม้า<br />\
    <img src="styles/legend/_7_4_37.png" /> ที่ทำการเขตห้ามล่าสัตว์ป่าบึงละหาน<br />\
    <img src="styles/legend/_7_4_38.png" /> ที่ทำการเขตห้ามล่าสัตว์ป่าป่าเขาภูหลวง<br />\
    <img src="styles/legend/_7_4_39.png" /> ที่ทำการเขตห้ามล่าสัตว์ป่าภูเขาไฟกระโดง<br />\
    <img src="styles/legend/_7_4_40.png" /> ที่ทำการเขตห้ามล่าสัตว์ป่าลำนางรอง<br />\
    <img src="styles/legend/_7_4_41.png" /> ที่ทำการเขตห้ามล่าสัตว์ป่าหนองแวง<br />\
    <img src="styles/legend/_7_4_42.png" /> ที่ทำการเขตห้ามล่าสัตว์ป่าอ่างเก็บน้ำสนามบิน<br />\
    <img src="styles/legend/_7_4_43.png" /> ที่ทำการเขตห้ามล่าสัตว์ป่าอ่างเก็บน้ำห้วยจรเข้มาก<br />\
    <img src="styles/legend/_7_4_44.png" /> ที่ทำการเขตห้ามล่าสัตว์ป่าอ่างเก็บน้ำห้วยตลาด<br />\
    <img src="styles/legend/_7_4_45.png" /> ที่ทำการศูนย์ศึกษาการพัฒนาการจัดการเขตรักษาพันธุ์สัตว์ป่า ที่ 2 (ภาคตะวันออกเฉียงเหนือ)<br />\
    <img src="styles/legend/_7_4_46.png" /> ที่ทำการศูนย์ศึกษาธรรมชาติและสัตว์ป่าห้วยกุ่ม<br />\
    <img src="styles/legend/_7_4_47.png" /> ที่ทำการสถานีควบคุมไฟป่าเขาใหญ่<br />\
    <img src="styles/legend/_7_4_48.png" /> ที่ทำการสถานีเพาะเลี้ยงสัตว์ป่าภูเขียว<br />\
    <img src="styles/legend/_7_4_49.png" /> ที่ทำการอุทยานแห่งชาติตาดโตน<br />\
    <img src="styles/legend/_7_4_50.png" /> ที่ทำการอุทยานแห่งชาติไทรทอง<br />\
    <img src="styles/legend/_7_4_51.png" /> ที่ทำการอุทยานแห่งชาติป่าหินงาม<br />\
    <img src="styles/legend/_7_4_52.png" /> ที่ทำการอุทยานแห่งชาติภูแลนคา<br />\
    <img src="styles/legend/_7_4_53.png" /> ศูนย์ข้อมูลการอนุรักษ์สัตว์ป่าและพื้นที่ชุ่มน้ำจังหวัดบุรีรัมย์<br />\
    <img src="styles/legend/_7_4_54.png" /> ศูนย์บริการนักท่องเที่ยว<br />\
    <img src="styles/legend/_7_4_55.png" /> ศูนย์บริการนักท่องเที่ยวอุทยานป่าหินงาม<br />\
    <img src="styles/legend/_7_4_56.png" /> ศูนย์บริการนักท่องเที่ยวอุทยานแห่งชาติไทรทอง<br />\
    <img src="styles/legend/_7_4_57.png" /> ศูนย์พิทักษ์ป่าภูเขียวที่ 1 (ทุ่งกะมัง)<br />\
    <img src="styles/legend/_7_4_58.png" /> ศูนย์พิทักษ์ป่าภูเขียวที่ 2 (ปางม่วง)<br />\
    <img src="styles/legend/_7_4_59.png" /> ศูนย์พิทักษ์ป่าภูเขียวที่ 3 (โนนเขวา)<br />\
    <img src="styles/legend/_7_4_60.png" /> ศูนย์พิทักษ์ป่าภูเขียวที่ 4 (กุดจิก)<br />\
    <img src="styles/legend/_7_4_61.png" /> ศูนย์พิทักษ์ป่าภูเขียวที่ 5 (สะพุงเหนือ)<br />\
    <img src="styles/legend/_7_4_62.png" /> ศูนย์พิทักษ์ป่าภูเขียวที่ 6 (บ้านโหล่น)<br />\
    <img src="styles/legend/_7_4_63.png" /> สถานีควบคุมไฟป่าดงใหญ่<br />\
    <img src="styles/legend/_7_4_64.png" /> สถานีควบคุมไฟป่าตาดโตน-ภูแลนคา<br />\
    <img src="styles/legend/_7_4_65.png" /> สถานีควบคุมไฟป่าทับลาน<br />\
    <img src="styles/legend/_7_4_66.png" /> สถานีควบคุมไฟป่าภูเขียว<br />\
    <img src="styles/legend/_7_4_67.png" /> สถานีควบคุมไฟป่าวังน้ำเขียว<br />\
    <img src="styles/legend/_7_4_68.png" /> หน่วยจัดการต้นน้ำคลองไผ่<br />\
    <img src="styles/legend/_7_4_69.png" /> หน่วยจัดการต้นน้ำคลองไผ่ (สาขาลำนางรอง)<br />\
    <img src="styles/legend/_7_4_70.png" /> หน่วยจัดการต้นน้ำคลองสอง<br />\
    <img src="styles/legend/_7_4_71.png" /> หน่วยจัดการต้นน้ำชีลอง<br />\
    <img src="styles/legend/_7_4_72.png" /> หน่วยจัดการต้นน้ำทุ่งลุยลาย<br />\
    <img src="styles/legend/_7_4_73.png" /> หน่วยจัดการต้นน้ำลำเจา<br />\
    <img src="styles/legend/_7_4_74.png" /> หน่วยจัดการต้นน้ำลำตะคอง<br />\
    <img src="styles/legend/_7_4_75.png" /> หน่วยจัดการต้นน้ำลำปะทาว<br />\
    <img src="styles/legend/_7_4_76.png" /> หน่วยจัดการต้นน้ำหลังสัน<br />\
    <img src="styles/legend/_7_4_77.png" /> หน่วยดับไฟป่าเคลื่อนที่กุดจิก<br />\
    <img src="styles/legend/_7_4_78.png" /> หน่วยดับไฟป่าเคลื่อนที่เขาจันทร์<br />\
    <img src="styles/legend/_7_4_79.png" /> หน่วยดับไฟป่าเคลื่อนที่คลองโป่ง<br />\
    <img src="styles/legend/_7_4_80.png" /> หน่วยดับไฟป่าเคลื่อนที่ตะเคียนงาม<br />\
    <img src="styles/legend/_7_4_81.png" /> หน่วยดับไฟป่าเคลื่อนที่เนินหอม<br />\
    <img src="styles/legend/_7_4_82.png" /> หน่วยดับไฟป่าเคลื่อนที่ละเลิงรูร้อย<br />\
    <img src="styles/legend/_7_4_83.png" /> หน่วยป้องกันรักษาป่าที่ บร.6 (เขากระโดง) จ.บุรีรัมย์<br />\
    <img src="styles/legend/_7_4_84.png" /> หน่วยพิทักษ์ฯ ทท.1 (เขาวง)<br />\
    <img src="styles/legend/_7_4_85.png" /> หน่วยพิทักษ์ฯ ทท.2 (ห้วยเสือดาว)<br />\
    <img src="styles/legend/_7_4_86.png" /> หน่วยพิทักษ์ฯ ทท.3 (บ้านใหม่สามัคคี)<br />\
    <img src="styles/legend/_7_4_87.png" /> หน่วยพิทักษ์ฯ ทท.4 (สำนักตูมกา)<br />\
    <img src="styles/legend/_7_4_88.png" /> หน่วยพิทักษ์ฯ ทท.5 (คลองไทร)<br />\
    <img src="styles/legend/_7_4_89.png" /> หน่วยพิทักษ์ฯ ทท.6 (ราษฎร์ภักดี)<br />\
    <img src="styles/legend/_7_4_90.png" /> หน่วยพิทักษ์ฯ ที่ ตน.2 (ชีลองเหนือ)<br />\
    <img src="styles/legend/_7_4_91.png" /> หน่วยพิทักษ์ฯ ที่ ตน.3 (ตาดฟ้า)<br />\
    <img src="styles/legend/_7_4_92.png" /> หน่วยพิทักษ์ฯ ที่ ตน.4 (หนอกนกเขา)<br />\
    <img src="styles/legend/_7_4_93.png" /> หน่วยพิทักษ์ฯ ที่ ตน.5 (ซับสมบูรณ์)<br />\
    <img src="styles/legend/_7_4_94.png" /> หน่วยพิทักษ์ฯ ที่ ตน.6 (เขาช่องลม)<br />\
    <img src="styles/legend/_7_4_95.png" /> หน่วยพิทักษ์ฯ ที่ ปง.1 (เขาพนมโดม)<br />\
    <img src="styles/legend/_7_4_96.png" /> หน่วยพิทักษ์ฯ ที่ ปง.2 (เสลี่ยงทอง)<br />\
    <img src="styles/legend/_7_4_97.png" /> หน่วยพิทักษ์ฯ ที่ ภค.1 (ภูคี)<br />\
    <img src="styles/legend/_7_4_98.png" /> หน่วยพิทักษ์ฯ ที่ ภค.2 (พานทอง)<br />\
    <img src="styles/legend/_7_4_99.png" /> หน่วยพิทักษ์ฯ ที่ ภค.3 (ป่าปรงพันปี)<br />\
    <img src="styles/legend/_7_4_100.png" /> หน่วยพิทักษ์ป่ากุดเลาะ<br />\
    <img src="styles/legend/_7_4_101.png" /> หน่วยพิทักษ์ป่าเก่าน้อย<br />\
    <img src="styles/legend/_7_4_102.png" /> หน่วยพิทักษ์ป่าแก้งตาดไซ<br />\
    <img src="styles/legend/_7_4_103.png" /> หน่วยพิทักษ์ป่าเขากระเจียว<br />\
    <img src="styles/legend/_7_4_104.png" /> หน่วยพิทักษ์ป่าคลองเจริญ<br />\
    <img src="styles/legend/_7_4_105.png" /> หน่วยพิทักษ์ป่าคลองโป่ง<br />\
    <img src="styles/legend/_7_4_106.png" /> หน่วยพิทักษ์ป่าฉนวน<br />\
    <img src="styles/legend/_7_4_107.png" /> หน่วยพิทักษ์ป่าซับหวาย<br />\
    <img src="styles/legend/_7_4_108.png" /> หน่วยพิทักษ์ป่าถ้ำสิงโต<br />\
    <img src="styles/legend/_7_4_109.png" /> หน่วยพิทักษ์ป่าท่าเดื่อ<br />\
    <img src="styles/legend/_7_4_110.png" /> หน่วยพิทักษ์ป่าน้ำผุด<br />\
    <img src="styles/legend/_7_4_111.png" /> หน่วยพิทักษ์ป่าโนนศรีสง่า<br />\
    <img src="styles/legend/_7_4_112.png" /> หน่วยพิทักษ์ป่าบ่อมีงาม  (เขากระป็อด)<br />\
    <img src="styles/legend/_7_4_113.png" /> หน่วยพิทักษ์ป่าบึงแปน<br />\
    <img src="styles/legend/_7_4_114.png" /> หน่วยพิทักษ์ป่าพรมโซ้ง<br />\
    <img src="styles/legend/_7_4_115.png" /> หน่วยพิทักษ์ป่าละเลิงร้อยรู<br />\
    <img src="styles/legend/_7_4_116.png" /> หน่วยพิทักษ์ป่าลาดนกเจ่า<br />\
    <img src="styles/legend/_7_4_117.png" /> หน่วยพิทักษ์ป่าศาลาพรม<br />\
    <img src="styles/legend/_7_4_118.png" /> หน่วยพิทักษ์ป่าหนองนกออก<br />\
    <img src="styles/legend/_7_4_119.png" /> หน่วยพิทักษ์ป่าหนองแปก<br />\
    <img src="styles/legend/_7_4_120.png" /> หน่วยพิทักษ์ป่าหนองไรไก่<br />\
    <img src="styles/legend/_7_4_121.png" /> หน่วยพิทักษ์ป่าห้วยกล่ำ<br />\
    <img src="styles/legend/_7_4_122.png" /> หน่วยพิทักษ์ป่าห้วยแก้ว<br />\
    <img src="styles/legend/_7_4_123.png" /> หน่วยพิทักษ์ป่าห้วยซุ<br />\
    <img src="styles/legend/_7_4_124.png" /> หน่วยพิทักษ์อุทยานแห่งชาติชั่วคราว (ผาหัวนาค)<br />\
    <img src="styles/legend/_7_4_125.png" /> หน่วยสกัดเขาพังเหย<br />\
    <img src="styles/legend/_7_4_126.png" /> หน่วยสกัดหนองปล้อง<br />\
    <img src="styles/legend/_7_4_127.png" /> หน่วยสกัดห้วยยางดี<br />\
    <img src="styles/legend/_7_4_128.png" /> หน่วยอนุรักษ์และจัดการต้นน้ำลำพระเพลิง<br />\
    <img src="styles/legend/_7_4_129.png" /> หอควบคุมรั้วไฟฟ้าที่ 1<br />\
    <img src="styles/legend/_7_4_130.png" /> หอควบคุมรั้วไฟฟ้าที่ 2<br />\
    <img src="styles/legend/_7_4_131.png" /> หอควบคุมรั้วไฟฟ้าที่ 3<br />\
    <img src="styles/legend/_7_4_132.png" /> ห้องปฏิบัติการลาดตระเวนเชิงคุณภาพ<br />\
    <img src="styles/legend/_7_4_133.png" /> <br />'
        });

lyr_GoogleTerrainHybrid_0.setVisible(true);lyr_GoogleSatelliteHybrid_1.setVisible(true);lyr__7_2.setVisible(true);lyr__3.setVisible(true);lyr__7_4.setVisible(true);
var layersList = [lyr_GoogleTerrainHybrid_0,lyr_GoogleSatelliteHybrid_1,lyr__7_2,lyr__3,lyr__7_4];
lyr__7_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Area': 'Area', 'Perimeter': 'Perimeter', 'Area__RAI_': 'Area__RAI_', 'Type': 'Type', 'Name_TH': 'Name_TH', 'Name': 'Name', 'ANN_Date': 'ANN_Date', 'Law_Type': 'Law_Type', 'ANN_BOOK_I': 'ANN_BOOK_I', 'ANN_SECTIO': 'ANN_SECTIO', 'ANN_AREA_R': 'ANN_AREA_R', 'DNP_CODE': 'DNP_CODE', 'N_Full': 'N_Full', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr__3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Id': 'Id', 'Name_th': 'Name_th', 'Remark': 'Remark', 'PROV_NAM_T': 'PROV_NAM_T', 'RAI': 'RAI', 'area': 'area', });
lyr__7_4.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'Name_st': 'Name_st', 'E': 'E', 'N': 'N', 'Zone': 'Zone', 'lat': 'lat', 'Long': 'Long', 'remark': 'remark', 'type': 'type', '123': '123', 'Name_th': 'Name_th', 'name2': 'name2', });
lyr__7_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'Area': 'TextEdit', 'Perimeter': 'TextEdit', 'Area__RAI_': 'TextEdit', 'Type': 'TextEdit', 'Name_TH': 'TextEdit', 'Name': 'TextEdit', 'ANN_Date': 'DateTime', 'Law_Type': 'TextEdit', 'ANN_BOOK_I': 'TextEdit', 'ANN_SECTIO': 'TextEdit', 'ANN_AREA_R': 'TextEdit', 'DNP_CODE': 'TextEdit', 'N_Full': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr__3.set('fieldImages', {'OBJECTID': 'Range', 'Id': 'Range', 'Name_th': 'TextEdit', 'Remark': 'TextEdit', 'PROV_NAM_T': 'TextEdit', 'RAI': 'TextEdit', 'area': 'TextEdit', });
lyr__7_4.set('fieldImages', {'OBJECTID_1': 'Range', 'Name_st': 'TextEdit', 'E': 'TextEdit', 'N': 'TextEdit', 'Zone': 'TextEdit', 'lat': 'TextEdit', 'Long': 'TextEdit', 'remark': 'TextEdit', 'type': 'TextEdit', '123': 'TextEdit', 'Name_th': 'TextEdit', 'name2': 'TextEdit', });
lyr__7_2.set('fieldLabels', {'OBJECTID': 'no label', 'Area': 'no label', 'Perimeter': 'no label', 'Area__RAI_': 'no label', 'Type': 'no label', 'Name_TH': 'no label', 'Name': 'no label', 'ANN_Date': 'no label', 'Law_Type': 'no label', 'ANN_BOOK_I': 'no label', 'ANN_SECTIO': 'no label', 'ANN_AREA_R': 'no label', 'DNP_CODE': 'no label', 'N_Full': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr__3.set('fieldLabels', {'OBJECTID': 'no label', 'Id': 'no label', 'Name_th': 'no label', 'Remark': 'no label', 'PROV_NAM_T': 'no label', 'RAI': 'no label', 'area': 'no label', });
lyr__7_4.set('fieldLabels', {'OBJECTID_1': 'no label', 'Name_st': 'no label', 'E': 'no label', 'N': 'no label', 'Zone': 'no label', 'lat': 'no label', 'Long': 'no label', 'remark': 'no label', 'type': 'no label', '123': 'no label', 'Name_th': 'inline label', 'name2': 'no label', });
lyr__7_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});