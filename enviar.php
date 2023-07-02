<?php
    $nome = $_POST['nome'];
    $email = $_POST['email'];
    $mensagem = $_POST['msg'];
    $data_envio = date['d/m/y'];
    $hora_envio = date['H:i:s'];

    //arquivo E-mail
    $arquivo = "
    <html>
    <P><b>Nome: </b>$nome<p>
    <P><b>E-mail: </b>$email<p>
    <P><b>Mensagem: </b>$mensagem<p>
    <P>Este e-mail foi enviado em <b>$data_envio</b> às <b>$hora_envio</b><p>
    ";

    //E-mail que recebera a mensagem 
    $destino = 'rexdavi5855@gmail.com';
    $assunto = 'Contato pelo site';

    $headers = "MIME-Version: 1.0\n";
    $headers .= "Content-type: text/html; charset=iso-8859-1\n";
    $headers .= "From: $nome <$email>"

    //Enviar
    mail($destino, $assunto, $arquivo, $headers);
    
?>