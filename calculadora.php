<?php

if(isset($_POST["maquina"], $_POST["bt-calc"])){
    $maquinaQt = $_POST["maquina"];
    $precoPadraoM = 50;
    $promocionalM = $precoPadraoM - (0.05 * $maquinaQt * $precoPadraoM); 
    $economiza = $precoPadraoM - $promocionalM;
    echo "preço do cortes sem promoção: R$ $precoPadraoM <br/> preço com promoção: R$ $promocionalM<br/> Com $maquinaQt amigos cada um economiza R$ $economiza";
}


?>


