Integrantes:
German David Fajardo

# BackEndEliteDev
Backend proyecto Ciclo 4 equipo EliteDev

● Módulo de gestión de usuarios.

● Gestión de ingreso al sistema de información. El sistema tendrá las interfaces gráficas para el registro e ingreso a la aplicación. Para el registro se deberá ingresar el correo, identificación, nombre completo y contraseña, además el usuario podrá seleccionar qué tipo de usuario desempeñará en la plataforma (Estudiante, líder o administrador), el usuario quedará registrado en el sistema por defecto con el estado  de pendiente (Independientemente si se registra como administrador, líder o estudiante). Para la autenticación el usuario debe ingresar el correo y la contraseña.

● Gestión de estado de usuarios. El sistema tendrá una interfaz gráfica para que el administrador pueda ver y cambiar el estado de los registrados como administrador, líder y estudiante (Pendiente/Autorizado/No autorizado), un líder puede cambiar el estado de los usuarios registrados como estudiantes (Pendiente/Autorizado). 

● Gestión de perfil. El sistema tendrá una interfaz gráfica para que el investigador o estudiante pueda actualizar los datos personales que ingresó cuando se registró (Incluyendo la contraseña).


● Módulo de gestión de proyectos. El sistema tendrá una interfaz gráfica para que los líderes registren los proyectos y otra para que el administrador, líder y estudiante puedan listar y ver los detalles de los proyectos, los líderes tendrán la opción que los direccione a la interfaz de actualizar los proyectos, mientras que los estudiantes podrán realizar la inscripción a los proyectos en los que desean trabajar, y seleccionar el proyecto en el que están trabajando y quieren agregar un nuevo avance.

Cada proyecto debe contar con los siguientes atributos: Identificador único del proyecto (Inmutable), nombre del proyecto, objetivos generales, objetivos específicos, presupuesto, fecha de inicio y terminación del proyecto, el documento de identificación y nombre del líder, el estado del proyecto (activo/inactivo) que será por defecto inactivo, y la fase del proyecto (iniciado, en desarrollo, terminado) que será nula por defecto.


● Módulo de gestión de inscripciones. Cómo se mencionó en el módulo de gestión de proyectos los estudiantes podrán inscribirse a un proyecto, si aún no lo están, mediante la interfaz que lista los proyectos presionando un botón que generará la inscripción. El sistema tendrá una interfaz para que los líderes de cada proyecto puedan listar las inscripciones y definir sus estados. Cada inscripción tendrá los siguientes atributos: Identificador único (inmutable), los identificadores del proyecto y estudiante (para relacionarlos), el estado de la inscripción (aceptada/rechazada), la fecha de ingreso, que se pondrá automáticamente cuando el líder actualice el estado de la inscripción a aceptada; y la fecha de egreso, que se pondrá automáticamente cuando la fase del proyecto se actualice a terminada o el estado del proyecto sea actualizado a inactivo.


● Módulo de gestión de avances. El sistema tendrá una interfaz para que los estudiantes registren los avances y otra para que los estudiantes y líderes puedan listar los avances, solo los estudiantes podrán actualizar los avances del proyecto en el que están inscritos, y el líder sólo podrá añadir sus observaciones a dicho avance. Cada avance debe contar con los siguientes atributos: Identificador único del avance (inmutable), el identificador del proyecto (para relacionarlo), la fecha del avance, la descripción del avance donde se especifique cuáles fueron los aportes a los objetivos del proyecto, y las observaciones del líder.




Precisiones

1.	Se requiere que el proyecto cumpla con las historias de usuario presentadas en este documento, pero se da libertad para que el equipo de desarrollo pueda acordar con el tutor cualquier funcionalidad adicional.

2.	No se considera cambio de rol, es decir, cuando un usuario se registra como líder o como estudiante, ese será su rol y no podrá ser modificado.

3.	Un líder y un estudiante pueden tener más de un proyecto asociado.

4.	Después de que un proyecto haya alcanzado la fase “Terminado”, su estado cambiará automáticamente a inactivo y ni el líder o el estudiante podrán hacerle modificaciones (Agregar avances en el caso de los estudiantes o modificar algún atributo del proyecto para el caso del líder) y tampoco podrá ser reabierto (Cuando el proyecto tenga la fase terminado).

5.	En caso tal de que ocurra un problema durante el desarrollo del proyecto, durante las fases “Iniciado” o “En desarrollo”, el administrador podrá cambiar el estado de “Activo” a “Inactivo”, y la fase permanece igual (En este caso el proyecto podrá ser reabierto).

6.	Cuando un proyecto pasa de estar en estado “Activo” a “Inactivo”, la fecha de egreso en las inscripciones que están en estado “Aceptado” y que cuya fecha de egreso está vacía, se debe guardar la fecha en la que se hizo la inactivación del proyecto.

7.	En caso tal de que un proyecto sea reabierto, y un estudiante que estaba inscrito anteriormente en este proyecto desea continuar trabajando en él, deberá realizar una nueva inscripción (se contempla que un estudiante puede tener varias inscripciones en un proyecto en diferentes periodos de tiempo), en caso tal de ser rechazado en la nueva inscripción, este estudiante no podrá agregar avances al proyecto.

8.	En caso tal de que un proyecto sea reabierto, nuevos estudiantes pueden enviar su solicitud de inscripción.

9.	Cuando se sube el primer avance de un proyecto, automáticamente cambia la fase de “Iniciado” a “En desarrollo”.

10.	Un administrador sólo puede: Listar los usuario registrados en la plataforma, actualizar el estado de los usuarios (Pendiente/Autorizado/No autorizado), listar los proyectos registrados en la plataforma, aprobar la creación de un proyecto (Activar un proyecto recién creado), cambiar el estado de un proyecto (Cuando el administrador cambia el estado de “Inactivo” a “Activo” y el campo de la fase está vacío, la fase se actualiza a “Iniciado” y se captura la fecha inicial automáticamente), cambiar la fase de un proyecto (De “En desarrollo” a “Terminado” y se captura la fecha final automáticamente), abrir nuevamente un proyecto que no tiene fase “Terminado” y tiene estado “Inactivo”.

11.	Un estudiante sólo puede: Registrarse en la plataforma, editar su información personal, listar todos los proyectos en plataforma, inscribirse en un proyecto en caso de que no lo esté, listar los avances de un proyecto al que pertenece, agregar avances a un proyecto en específico (Siempre y cuando esté inscrito en él), actualizar los datos de un avance en específico.

12.	Un líder sólo puede: Registrarse en la plataforma, editar su información personal, ver la lista de todos los estudiantes registrados en la plataforma, autorizar el registro de un estudiante (Solo puede colocarlo en estado Autorizado o dejarlo en estado Pendiente, pero no puede colocarlo en estado No autorizado), crear un nuevo proyecto (Por defecto su estado será inactivo y el campo de la fase debe estar vacío), listar sólo los proyectos registrados en la plataforma que él lidera, actualizar los datos de un proyecto que él lidera (Y tienen estado “Activo”), aceptar o rechazar las inscripciones de los estudiantes a uno de los proyectos que lidera, listar los avances de un proyecto que lidera, agregar observaciones a un avance en específico de un proyecto que lidera.  
