-- -- Outro exemplo de Banco completo futura implementação --

CREATE DATABASE ecocasa
default character set utf8
default collate utf8_general_ci;

CREATE TABLE moradores (
  	id int AUTO_INCREMENT NOT NULL,
	nome varchar(80) NOT NULL,
  	email varchar(80) NOT NULL,
  	senha varchar(32) NOT NULL,
	primary key (id)

) DEFAULT charset= utf8;


CREATE TABLE moradores_complemento (
	id int NOT NULL,
	email varchar(30) NOT NULL,
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
  	uf char(2) DEFAULT 'SP'	
);

ALTER TABLE moradores_complemento ADD CONSTRAINT FK_ID FOREIGN KEY (id) REFERENCES moradores (id);


CREATE DATABASE ecocasa
default character set utf8
default collate utf8_general_ci;

-- banco pagina login_admin / e retorna dados no home_admin


CREATE TABLE adm (
  
  id int PRIMARY KEY AUTO_INCREMENT,
  nome varchar(80) NOT NULL,
  email varchar(80) UNIQUE NOT NULL,
  senha char(32) NOT NULL

) DEFAULT charset = utf8;

-- banco pagina de login_usuario / moradores_admin

CREATE TABLE moradores (
  
  id int PRIMARY KEY AUTO_INCREMENT,
  nome varchar(80) NOT NULL,
  email varchar(80) UNIQUE NOT NULL,
  senha char(32) NOT NULL
) DEFAULT charset = utf8;


-- banco pagina trabalho_voluntario_admin / voluntariado_cadastro --

CREATE TABLE voluntariado (

id int PRIMARY KEY AUTO_INCREMENT,
titulo varchar (80),
imagem varchar(200),
descricao varchar(150),
nvagas varchar(10)
) DEFAULT charset = utf8;