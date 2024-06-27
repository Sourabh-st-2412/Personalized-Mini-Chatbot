<?php

require "vendor/autoload.php";

use GeminiAPI\Client;
use GeminiAPI\Resources\Parts\TextPart;

try {
    $data = json_decode(file_get_contents("php://input"));

    if (!$data) {
        throw new Exception('Invalid input data');
    }

    $text = $data->text;

    if (!$text) {
        throw new Exception('Text not provided');
    }

    $client = new Client("AIzaSyAYagEngadYb5hv0PYgtiTSjsUkReu0mm0");

    $response = $client->geminiPro()->generateContent(
        new TextPart($text)
    );

    echo $response->text();
} catch (Exception $e) {
    echo 'Something went wrong. Please try again...';
}