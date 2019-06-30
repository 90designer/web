<?php
$categoryId = $_POST['categoryId'];
$dataItem = null;
if($categoryId == 123456){
    $dataItem = array(
        array(
            'id' => 10,
            'imgUrl' => 'http://www.web-jshtml.cn/data/upload/1f2d1g23d1r65awe1fdf.jpg',
            'title' => '郎朗口腔',
            'dec' => '诊所内设有典雅舒适、风格各异的独立诊疗室，如奇趣可爱的儿童诊室、适应女性需求的Hello Kitty'
        ),
        array(
            'id' => 11,
            'imgUrl' => 'http://www.web-jshtml.cn/data/upload/8w4d6f11vds1fasd1f3dsf.jpg',
            'title' => '舒适的就诊环境',
            'dec' => '诊所内设有典雅舒适、风格各异的独立诊疗室，如奇趣可爱的儿童诊室、适应女性需求的...'
        ),
        array(
            'id' => 12,
            'imgUrl' => 'http://www.web-jshtml.cn/data/upload/45df1dd21f3ae1ds1fd1fdsf.jpg',
            'title' => '郎朗口腔',
            'dec' => '朗朗口腔拥有全球先进口腔诊疗技术，引进国外多款高端的齿科诊疗设备。包括：德国进口种植机...'
        )
    );
}

$result = array(
    'resCode' => 0,
    'data' => $dataItem,
    'message' => 'OK'
);
exit(json_encode($result));
?>