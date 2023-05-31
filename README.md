# Movie Searcher

Buscador de películas creado con **React** en un entorno de _Vite.js_.

La data es fetcheada de la API: **https://www.omdbapi.com/**, mapeada y guardada en el _localStorage_.

Se utilizan dos **customHook**, uno para la búsqueda y otro para devolver la información.

La App está dividida en _componentes_, uno por cada parte del DOM.

El input de búsqueda es componente _no controlado_, con determinadas validaciones que permiten o no la búsqueda y, por ende, limitan un fetching innecesario.

El listado de películas se muestran en una grid responsive. El resto de la estilización de la interfaz se hizo con una drop-in collection de CSS llamada _WaterCSS_.

Se utiliza _ESLint_ + _Prettier_ para mejorar la escritura y prolijidad del código
