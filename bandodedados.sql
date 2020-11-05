-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: sql311.epizy.com
-- Tempo de geração: 04/11/2020 às 10:24
-- Versão do servidor: 5.6.48-88.0
-- Versão do PHP: 7.2.22

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `epiz_27075315_cadastro`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `cadastro`
--

CREATE TABLE `cadastro` (
  `id` int(11) NOT NULL,
  `nome` varchar(60) NOT NULL,
  `renda` varchar(50) DEFAULT NULL,
  `profissao` varchar(30) DEFAULT NULL,
  `qntd_moradores` varchar(10) DEFAULT NULL,
  `telefone` char(14) DEFAULT NULL,
  `endereco` varchar(40) NOT NULL,
  `numero` int(11) NOT NULL,
  `complemento` varchar(15) DEFAULT NULL,
  `bairro` varchar(20) DEFAULT NULL,
  `cidade` varchar(20) DEFAULT NULL,
  `cep` char(9) DEFAULT NULL,
  `estado` char(2) DEFAULT NULL,
  `email` varchar(30) DEFAULT NULL,
  `senha` varchar(32) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Índices de tabelas apagadas
--

--
-- Índices de tabela `cadastro`
--
ALTER TABLE `cadastro`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `telefone` (`telefone`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT de tabelas apagadas
--

--
-- AUTO_INCREMENT de tabela `cadastro`
--
ALTER TABLE `cadastro`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

-- Outro exemplo de Banco --

CREATE DATABASE ecocasa
default character set utf8
default collate utf8_general_ci;

CREATE TABLE moradores (
  
  id int PRIMARY KEY AUTO_INCREMENT,
  nome varchar(70) NOT NULL,
  renda varchar(100) NOT NULL,
  profissao varchar(30),
  colaborar char(3),
  qtd_moradores varchar(10),
  telefone varchar(15),
  endereco varchar(60) NOT NULL,
  numero varchar(10),
  complemento varchar(15),
  bairro varchar(50) DEFAULT 'Comunidade Anchieta',
  cidade varchar(60) DEFAULT 'São Paulo',
  cep varchar(20),
  estado varchar(10) DEFAULT 'SP',
  email varchar(60) UNIQUE NOT NULL,
  senha varchar(35) NOT NULL

) DEFAULT charset= utf8;