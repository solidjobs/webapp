<?php

if (!preg_match("/^[A-F0-9]{128}$/", $_COOKIE['token'])) {
  die();
}

$opts = [
  'http' => [
    'method' => 'GET',
    'header' => 'Cookie: token=' . $_COOKIE['token']
  ]
];

$context = stream_context_create($opts);

header("Content-Type: image/jpeg");

echo file_get_contents(
  base64_decode('aHR0cHM6Ly9iYWNrZW5kLnNvbGlkam9icy5vcmcvdXNlcnMvcGljdHVyZS8w'),
  false,
  $context
);
