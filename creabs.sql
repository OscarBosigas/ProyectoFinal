-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 17-02-2020 a las 15:46:10
-- Versión del servidor: 8.0.13-4
-- Versión de PHP: 7.2.24-0ubuntu0.18.04.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `Dl4apWt3Vb`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Admin`
--

CREATE TABLE `Admin` (
  `usuario` varchar(11) COLLATE utf8_unicode_ci NOT NULL,
  `contrasena` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `rol` int(11) NOT NULL DEFAULT '3'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Estructura de tabla para la tabla `CURSO`
--

CREATE TABLE `CURSO` (
  `COD_CURSO` decimal(8,0) NOT NULL,
  `NOM_CURSO` varchar(1024) COLLATE utf8_unicode_ci NOT NULL,
  `NUM_MATERIAS` decimal(8,0) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;


-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `DOCENTE`
--

CREATE TABLE `DOCENTE` (
  `DOC_DOCENTE` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `NOM_DOCENTE` varchar(1024) COLLATE utf8_unicode_ci NOT NULL,
  `APELLIDO_DOC` varchar(1024) COLLATE utf8_unicode_ci NOT NULL,
  `CONTRASENA_DOC` varchar(1024) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `rol` int(11) NOT NULL DEFAULT '2'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ESTRUCTURAM`
--

CREATE TABLE `ESTRUCTURAM` (
  `cod_materia` decimal(8,0) NOT NULL,
  `descripcion` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `value` decimal(8,0) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;


--
-- Estructura de tabla para la tabla `ESTUDIANTE`
--

CREATE TABLE `ESTUDIANTE` (
  `DOC` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `NOMBRE` varchar(1024) COLLATE utf8_unicode_ci NOT NULL,
  `APELLIDO` varchar(1024) COLLATE utf8_unicode_ci NOT NULL,
  `CODIGO` decimal(8,0) NOT NULL,
  `CONTRASENA` varchar(1024) COLLATE utf8_unicode_ci NOT NULL,
  `COD_CURSO` decimal(8,0) NOT NULL,
  `rol` int(11) NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;


--
-- Estructura de tabla para la tabla `MATERIA`
--

CREATE TABLE `MATERIA` (
  `COD_MATERIA` decimal(8,0) NOT NULL,
  `COD_PERIODO` decimal(8,0) NOT NULL,
  `COD_CURSO` decimal(8,0) NOT NULL,
  `DOC_DOCENTE` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `NOM_MATERIA` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `NUM_HORAS` decimal(8,0) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;


--
-- Estructura de tabla para la tabla `NOTA`
--

CREATE TABLE `NOTA` (
  `VALOR` decimal(5,2) NOT NULL,
  `COD_MATERIA` decimal(8,0) NOT NULL,
  `DOC` varchar(100) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `PERIDO`
--

CREATE TABLE `PERIDO` (
  `COD_PERIODO` decimal(8,0) NOT NULL,
  `FECHA_INICIO` date NOT NULL,
  `FECHA_FIN` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;


--
-- Indices de la tabla `CURSO`
--
ALTER TABLE `CURSO`
  ADD PRIMARY KEY (`COD_CURSO`);

--
-- Indices de la tabla `DOCENTE`
--
ALTER TABLE `DOCENTE`
  ADD PRIMARY KEY (`DOC_DOCENTE`);

--
-- Indices de la tabla `ESTRUCTURAM`
--
ALTER TABLE `ESTRUCTURAM`
  ADD KEY `FK_RELATIONSHIP_25` (`cod_materia`);

--
-- Indices de la tabla `ESTUDIANTE`
--
ALTER TABLE `ESTUDIANTE`
  ADD PRIMARY KEY (`DOC`),
  ADD KEY `FK_RELATIONSHIP_5` (`COD_CURSO`);

--
-- Indices de la tabla `MATERIA`
--
ALTER TABLE `MATERIA`
  ADD PRIMARY KEY (`COD_MATERIA`),
  ADD KEY `FK_RELATIONSHIP_2` (`COD_CURSO`),
  ADD KEY `FK_RELATIONSHIP_7` (`DOC_DOCENTE`),
  ADD KEY `FK_RELATIONSHIP_6` (`COD_PERIODO`);

--
-- Indices de la tabla `NOTA`
--
ALTER TABLE `NOTA`
  ADD PRIMARY KEY (`COD_MATERIA`,`DOC`),
  ADD KEY `FK_RELATIONSHIP_8` (`DOC`);

--
-- Indices de la tabla `PERIDO`
--
ALTER TABLE `PERIDO`
  ADD PRIMARY KEY (`COD_PERIODO`);


--
-- Filtros para la tabla `ESTRUCTURAM`
--
ALTER TABLE `ESTRUCTURAM`
  ADD CONSTRAINT `FK_RELATIONSHIP_25` FOREIGN KEY (`cod_materia`) REFERENCES `MATERIA` (`cod_materia`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Filtros para la tabla `ESTUDIANTE`
--
ALTER TABLE `ESTUDIANTE`
  ADD CONSTRAINT `FK_RELATIONSHIP_5` FOREIGN KEY (`COD_CURSO`) REFERENCES `CURSO` (`cod_curso`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Filtros para la tabla `MATERIA`
--
ALTER TABLE `MATERIA`
  ADD CONSTRAINT `FK_RELATIONSHIP_2` FOREIGN KEY (`COD_CURSO`) REFERENCES `CURSO` (`cod_curso`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `FK_RELATIONSHIP_6` FOREIGN KEY (`COD_PERIODO`) REFERENCES `PERIDO` (`cod_periodo`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `FK_RELATIONSHIP_7` FOREIGN KEY (`DOC_DOCENTE`) REFERENCES `DOCENTE` (`doc_docente`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Filtros para la tabla `NOTA`
--
ALTER TABLE `NOTA`
  ADD CONSTRAINT `FK_RELATIONSHIP_8` FOREIGN KEY (`DOC`) REFERENCES `ESTUDIANTE` (`doc`),
  ADD CONSTRAINT `FK_RELATIONSHIP_9` FOREIGN KEY (`COD_MATERIA`) REFERENCES `MATERIA` (`cod_materia`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;




INSERT INTO `Admin` (`usuario`, `contrasena`, `rol`) VALUES
('0', 'a123', 3);

INSERT INTO `CURSO` (`COD_CURSO`, `NOM_CURSO`, `NUM_MATERIAS`) VALUES
('0', 'Transición', '5'),
('1', 'Primero', '6'),
('2', 'Segundo', '7'),
('3', 'Tercero', '8'),
('4', 'Cuarto', '9'),
('5', 'Quinto', '10'),
('6', 'Sexto', '10'),
('7', 'Septimo', '10'),
('8', 'Octavo', '10'),
('9', 'Noveno', '10'),
('10', 'Decimo', '10'),
('11', 'Once', '10');

INSERT INTO `DOCENTE` (`DOC_DOCENTE`, `NOM_DOCENTE`, `APELLIDO_DOC`, `CONTRASENA_DOC`, `rol`) VALUES
('21', 'Claudia', 'Puerto', 'a123', 2),
('22', 'Felipe', 'Cristancho', 'b456', 2);


INSERT INTO `ESTUDIANTE` (`DOC`, `NOMBRE`, `APELLIDO`, `CODIGO`, `CONTRASENA`, `COD_CURSO`, `rol`) VALUES
('10', 'Prueba2', 'Pruebita2', '2', 'b456', '5', 1),
('11', 'Prueba1', 'Pruebita1', '2', 'a123', '11', 1),
('13', 'Oscar', 'Bosigas', '4', 'c789', '11', 1);


INSERT INTO `PERIDO` (`COD_PERIODO`, `FECHA_INICIO`, `FECHA_FIN`) VALUES
('1', '2020-02-03', '2020-04-03'),
('2', '2020-04-06', '2020-06-05'),
('3', '2020-06-08', '2020-08-07'),
('4', '2020-08-10', '2020-10-16');

INSERT INTO `MATERIA` (`COD_MATERIA`, `COD_PERIODO`, `COD_CURSO`, `DOC_DOCENTE`, `NOM_MATERIA`, `NUM_HORAS`) VALUES
('1', '1', '11', '21', 'Matematicas', '6');