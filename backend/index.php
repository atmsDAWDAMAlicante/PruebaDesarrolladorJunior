<?php
header("Access-Control-Allow-Origin: *"); // Permitir acceso desde cualquier origen
header("Content-Type: application/json"); // Devolver JSON

$tasks = [
    ["id" => 1, "title" => "Tarea 1", "completed" => false],
    ["id" => 2, "title" => "Tarea 2", "completed" => true]
];

echo json_encode($tasks);
?>