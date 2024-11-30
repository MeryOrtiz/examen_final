<?php
$total_vueltas = isset($_POST['total_vueltas']) ? (int) $_POST['total_vueltas'] : 0;
$tiempo_A = isset($_POST['tiempo_A']) ? (int) $_POST['tiempo_A'] : 0;
$tiempo_B = isset($_POST['tiempo_B']) ? (int) $_POST['tiempo_B'] : 0;

function calcularMCM($a, $b) {
    return ($a * $b) / calcularGCD($a, $b);
}

function calcularGCD($a, $b) {
    while ($b != 0) {
        $temp = $b;
        $b = $a % $b;
        $a = $temp;
    }
    return $a;
}

$mcm = calcularMCM($tiempo_A, $tiempo_B);

$vueltas_A = $mcm / $tiempo_A;
$vueltas_B = $mcm / $tiempo_B;

$tiempo_total_A = $mcm;
$tiempo_total_B = $mcm;

?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Resultados de Vueltas</title>
    <link rel="stylesheet" href="css.css">
</head>
<body>
    <div class="container">
        <h1>Resultados</h1>
        <p><strong>Corredor A:</strong> Dura <?php echo $tiempo_A; ?> minutos por vuelta.</p>
        <p><strong>Corredor B:</strong> Dura <?php echo $tiempo_B; ?> minutos por vuelta.</p>
        <p><strong>Vueltas totales para coincidir:</strong></p>
        <p>Corredor A da <strong><?php echo $vueltas_A; ?></strong> vueltas en <?php echo $tiempo_total_A; ?> minutos.</p>
        <p>Corredor B da <strong><?php echo $vueltas_B; ?></strong> vueltas en <?php echo $tiempo_total_B; ?> minutos.</p>
        <p>Ambos corredores coinciden después de <strong><?php echo $mcm; ?> minutos</strong>.</p>
        <a href="html.html">Volver</a>
    </div>
</body>
</html>
