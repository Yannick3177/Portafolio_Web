export const semanas = [
  {
    id: '01',
    num: '01',
    title: 'Fundamentos web y enlaces',
    descripcionClase: 'Se revisó cómo funciona la web (cliente, servidor, HTTP) y la estructura básica de un documento HTML. Se practicaron enlaces de correo con mailto: y de teléfono con tel:, además de rutas relativas y absolutas.',
    topics: ['HTTP', 'HTML básico', 'mailto:', 'tel:', 'Rutas'],
    // 👇 CAMBIA ESTO POR TU LINK REAL DE LA SEMANA 1
    repoUrl: 'https://github.com/devjuancarlos10/actividad01' 
  },
  {
    id: '02',
    num: '02',
    title: 'HTML5 semántico y diseño responsive',
    descripcionClase: 'Se trabajó con etiquetas semánticas (header, nav, main, section, footer) y maquetación moderna con CSS Grid y Flexbox. Se aplicaron media queries para adaptar la interfaz a distintos tamaños de pantalla.',
    topics: ['HTML5 semántico', 'CSS Grid', 'Flexbox', 'Media queries', 'Mobile first'],
    // 👇 CAMBIA ESTO POR TU LINK REAL DE LA SEMANA 2
    repoUrl: 'https://github.com/Yannick3177/Semana_02_DAW/blob/main/index.html'
  },
  {
    id: '03',
    num: '03',
    title: 'Frameworks CSS y clases utilitarias',
    descripcionClase: 'Se estudió el enfoque de clases utilitarias con Bootstrap y Tailwind, comparándolo con CSS propio. Se construyeron componentes reutilizables como botones, tarjetas y barras de navegación.',
    topics: ['Bootstrap', 'Tailwind', 'Utility-first', 'Componentes UI'],
    // 👇 CAMBIA ESTO POR TU LINK REAL DE LA SEMANA 3
    repoUrl: 'https://github.com/Yannick3177/Equipo_Semana03'
  },
  {
    id: '04',
    num: '04',
    title: 'JavaScript y Canvas',
    descripcionClase: 'Se repasó JavaScript moderno (ES6+), manipulación del DOM y eventos. Se introdujo la API Canvas para dibujar y animar partículas con requestAnimationFrame.',
    topics: ['ES6+', 'DOM', 'Eventos', 'Canvas API', 'requestAnimationFrame'],
    // 👇 CAMBIA ESTO POR TU LINK REAL DE LA SEMANA 4
    repoUrl: 'https://github.com/Yannick3177/Practica04_Teorica'
  },
  {
    id: '05',
    num: '05',
    title: 'Introducción a React',
    descripcionClase: 'Se presentó React, JSX y la creación de componentes funcionales. Se aprendió a pasar datos entre componentes mediante props y a renderizar listas con map y key.',
    topics: ['JSX', 'Componentes', 'Props', 'Listas y keys'],
    // 👇 CAMBIA ESTO POR TU LINK REAL DE LA SEMANA 5
    repoUrl: 'https://github.com/Yannick3177/Practica05_Individual'
  },
  {
    id: '06',
    num: '06',
    title: 'Vite, routing y consumo de APIs',
    descripcionClase: 'Se creó un proyecto con Vite y se configuró la navegación con react-router-dom (Link, useParams). Se consumió una API externa con fetch y axios, manejando estados de carga y error.',
    topics: ['Vite', 'react-router-dom', 'useParams', 'fetch', 'axios'],
    // 👇 CAMBIA ESTO POR TU LINK REAL DE LA SEMANA 6
    repoUrl: 'https://github.com/Yannick3177/AQUI_TU_LINK_6'
  },
  {
    id: '07',
    num: '07',
    title: 'Hooks: useState y useEffect',
    descripcionClase: 'Se profundizó en el manejo de estado local con useState y en los efectos secundarios con useEffect. Se implementó un cambio de tema claro/oscuro persistido en localStorage.',
    topics: ['useState', 'useEffect', 'Ciclo de vida', 'localStorage'],
    // 👇 CAMBIA ESTO POR TU LINK REAL DE LA SEMANA 7
    repoUrl: 'https://github.com/josuewho10/biblioteca-universitaria'
  },
  {
    id: '09',
    num: '09',
    title: 'Django: arquitectura y primer proyecto',
    descripcionClase: 'Se instaló Django y se creó el primer proyecto y aplicación. Se explicó el patrón MTV, la estructura de carpetas, el archivo settings y el enrutamiento básico de URLs.',
    topics: ['Python POO', 'MTV', 'startproject', 'urls.py', 'settings.py'],
    // 👇 CAMBIA ESTO POR TU LINK REAL DE LA SEMANA 9
    repoUrl: 'https://github.com/Yannick3177/AQUI_TU_LINK_9'
  },
  {
    id: '10',
    num: '10',
    title: 'Modelos y ORM',
    descripcionClase: 'Se definieron modelos como clases de Python y se generaron migraciones. Se practicaron consultas con el ORM (filter, get, relaciones ForeignKey) y el panel de administración.',
    topics: ['models.py', 'Migraciones', 'ORM', 'ForeignKey', 'Django Admin'],
    // 👇 CAMBIA ESTO POR TU LINK REAL DE LA SEMANA 10
    repoUrl: 'https://github.com/Yannick3177/AQUI_TU_LINK_10'
  },
  {
    id: '11',
    num: '11',
    title: 'Vistas, plantillas y URLs',
    descripcionClase: 'Se construyeron vistas basadas en funciones y en clases, junto con plantillas que heredan de una base. Se organizaron las rutas por aplicación con include.',
    topics: ['views.py', 'Class-Based Views', 'Templates', 'include()'],
    // 👇 CAMBIA ESTO POR TU LINK REAL DE LA SEMANA 11
    repoUrl: 'https://github.com/Yannick3177/AQUI_TU_LINK_11'
  },
  {
    id: '12',
    num: '12',
    title: 'Formularios y validación',
    descripcionClase: 'Se crearon formularios con forms.py, validando datos en el servidor con clean y clean_<campo>. Se manejaron errores de validación y protección CSRF.',
    topics: ['forms.py', 'ModelForm', 'clean()', 'CSRF', 'Validación'],
    // 👇 CAMBIA ESTO POR TU LINK REAL DE LA SEMANA 12
    repoUrl: 'https://github.com/Yannick3177/AQUI_TU_LINK_12'
  },
  {
    id: '13',
    num: '13',
    title: 'Django REST Framework',
    descripcionClase: 'Se expusieron los modelos como API REST con serializadores y ViewSets. Se configuraron routers, paginación y pruebas de endpoints con herramientas de cliente HTTP.',
    topics: ['DRF', 'Serializers', 'ViewSets', 'Routers', 'JSON'],
    // 👇 CAMBIA ESTO POR TU LINK REAL DE LA SEMANA 13
    repoUrl: 'https://github.com/Yannick3177/AQUI_TU_LINK_13'
  },
  {
    id: '14',
    num: '14',
    title: 'Autenticación JWT y despliegue con Docker',
    descripcionClase: 'Se protegió la API con tokens JWT y permisos por usuario. Se contenerizó la aplicación con Dockerfile y docker-compose junto con la base de datos.',
    topics: ['JWT', 'Permisos', 'Docker', 'docker-compose', 'Variables de entorno'],
    // 👇 CAMBIA ESTO POR TU LINK REAL DE LA SEMANA 14
    repoUrl: 'https://github.com/Yannick3177/AQUI_TU_LINK_14'
  },
];