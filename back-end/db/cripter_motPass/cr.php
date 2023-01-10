<?php
 function crypter($string){
    $ciphering = "AES-128-CTR";
    $iv_length = openssl_cipher_iv_length($ciphering);
    $options = 0;
    $encryption_iv = '1234567891010101';
    $encryption_key = "SCSCGROUP";
    $encryption = openssl_encrypt($string, $ciphering,$encryption_key, $options, $encryption_iv);
    return $encryption;
}
function dcrypter($string){
    $ciphering = "AES-128-CTR";
    $options = 0;
    $decryption_iv = '1234567891010101';
    $decryption_key = "SCSCGROUP";
    $decryption=openssl_decrypt ($string, $ciphering,$decryption_key, $options, $decryption_iv);
    return  $decryption;
}
?>