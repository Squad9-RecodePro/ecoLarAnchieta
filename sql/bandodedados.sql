-- -- Outro exemplo de Banco completo --

-- CREATE DATABASE ecocasa
-- default character set utf8
-- default collate utf8_general_ci;

-- CREATE TABLE moradores (
  
--   id int PRIMARY KEY AUTO_INCREMENT,
--   nome varchar(80) NOT NULL,
--   renda varchar(100) NOT NULL,
--   profissao varchar(30),
--   colaborar char(3),
--   qtd_moradores varchar(10),
--   telefone varchar(15),
--   endereco varchar(60) NOT NULL,
--   numero varchar(10),
--   complemento varchar(15),
--   bairro varchar(50) DEFAULT 'Comunidade Anchieta',
--   cidade varchar(60) DEFAULT 'São Paulo',
--   cep varchar(20),
--   uf char(2) DEFAULT 'SP',
--   email varchar(80) UNIQUE NOT NULL,
--   senha varchar(32) NOT NULL

-- ) DEFAULT charset= utf8;


CREATE DATABASE ecocasa
default character set utf8
default collate utf8_general_ci;

CREATE TABLE moradores (
  
  id int PRIMARY KEY AUTO_INCREMENT,
  nome varchar(80) NOT NULL,
  email varchar(80) UNIQUE NOT NULL,
  senha char(32) NOT NULL

) DEFAULT charset = utf8;


-- banco pagina trabalho_voluntario_admin / voluntariado_cadastro

create table voluntariado (
id int PRIMARY KEY AUTO_INCREMENT,
titulo varchar (60),
imagem varchar(100),
descricao varchar(200),
nvagas varchar(10)

) DEFAULT charset = utf8;