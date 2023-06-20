CREATE DATABASE cuestionario2;
USE cuestionario2;
CREATE TABLE resultados (
  ID int(11) NOT NULL AUTO_INCREMENT,
  Nombre varchar(255) NOT NULL,
  ResInteres varchar(255) NOT NULL,
  ResAptitud varchar(255) NOT NULL,
  PRIMARY KEY(ID)
);