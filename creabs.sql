/*==============================================================*/
/* DBMS name:      MySQL 5.0                                    */
/* Created on:     11/01/2020 4:41:22 p. m.                     */
/*==============================================================*/


drop table if exists CURSO;

drop table if exists DOCENTE;

drop table if exists ESTUDIANTE;

drop table if exists MATERIA;

drop table if exists PERIDO;

/*==============================================================*/
/* Table: CURSO                                                 */
/*==============================================================*/
create table CURSO
(
   COD_CURSO            numeric(8,0) not null,
   NOM_CURSO            varchar(1024) not null,
   NUM_MATERIAS         numeric(8,0) not null,
   primary key (COD_CURSO)
);

/*==============================================================*/
/* Table: DOCENTE                                               */
/*==============================================================*/
create table DOCENTE
(
   DOC_DOCENTE          varchar(1024) not null,
   NOM_DOCENTE          varchar(1024) not null,
   APELLIDO_DOC         varchar(1024) not null,
   COTRASENA_DOC        varchar(1024) not null,
   primary key (DOC_DOCENTE)
);

/*==============================================================*/
/* Table: ESTUDIANTE                                            */
/*==============================================================*/
create table ESTUDIANTE
(
   DOC                  varchar(1024) not null,
   NOMBRE               varchar(1024) not null,
   APELLIDO             varchar(1024) not null,
   CODIGO               numeric(8,0) not null,
   CONTRASENA           varchar(1024) not null,
   primary key (DOC)
);

/*==============================================================*/
/* Table: MATERIA                                               */
/*==============================================================*/
create table MATERIA
(
   COD_MATERIA          numeric(8,0) not null,
   COD_CURSO            numeric(8,0) not null,
   DOC_DOCENTE          varchar(1024) not null,
   NOM_MATERIA          varchar(20) not null,
   NUM_HORAS            numeric(8,0) not null,
   primary key (COD_MATERIA)
);

/*==============================================================*/
/* Table: PERIDO                                                */
/*==============================================================*/
create table PERIDO
(
   COD_PERIODO          numeric(8,0) not null,
   COD_MATERIA          numeric(8,0),
   FECHA_INICIO         date not null,
   FECHA_FIN            date,
   primary key (COD_PERIODO)
);

create table NOTA 
(
	VALOR				numeric (2,2) not null,
	COD_MATERIA			numeric(8,0),
	DOC 				varchar(1024),
	primary key (COD_MATERIA, DOC)
);

alter table NOTA add constraint FK_RELATIONSHIP_9 foreign key (COD_MATERIA)
	references MATERIA (COD_MATERIA);

alter table NOTA add constraint FK_RELATIONSHIP_8 foreign key (DOC)
	references ESTUDIANTE (DOC);

alter table MATERIA add constraint FK_RELATIONSHIP_2 foreign key (COD_CURSO)
      references CURSO (COD_CURSO) on delete restrict on update restrict;

alter table MATERIA add constraint FK_RELATIONSHIP_7 foreign key (DOC_DOCENTE)
      references DOCENTE (DOC_DOCENTE) on delete restrict on update restrict;

alter table PERIDO add constraint FK_RELATIONSHIP_6 foreign key (COD_MATERIA)
      references MATERIA (COD_MATERIA) on delete restrict on update restrict;

