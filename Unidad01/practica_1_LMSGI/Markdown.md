# ¿Qué es MarkDown?
Es un lenguaje de marcado ligero, su creador fue **John Gruber** y **Aaron Swartz**, que consiste en conseguir la máxima legibilidad y facilidad de publicación, tanto en su entrada, como en la salida. *Markdown*, convierte el texto marcado en XHTML utilizando html2text, creado también por **Aaron Swartz**. *Markdown* se implementó originalmente en Perl, por **Gruber**.
## Su historia
El origen principal, vino por parte de **John Gruber**, creando este lenguaje en 2004, con una gran ayuda de **Aaron Swartz** a la hora de crear su sintaxis. **Gruber**, quería hacer que la gente pudiera escribir usando un formato "llano", fácil de leer, escribir y con la posibilidad de que estos textos se pudieran convertir en HTML *válido*.

La clave de su diseño es la facilidad de la lectura que tiene, por ello, es fácilmente interpretado, sin que pareciera que ha sido marcado con etiquetas o instrucciones de estilo, como si de HTML o RTF se tratara. Por ello, su inspiración más importante son las convenciones existentes para formatear texto llano en los mensajes electrónicos, aunque también toma características de lenguajes anteriores, como *setext*, *atx* (**por Aaron Swartz**), *Textile* entre otros.

Markdown desde entonces ha sido implementado como un módulo de *Perl* y también ha sido portado en una variedad de lenguajes de programación. Está distribuido bajo la **licencia BSD** y está disponible como *plugin* para muchos **sistemas de gestión de contenidos**

## Su estandarización
No hay un estándar definido para Markdown, aparte de la implementación original de *John Gruber*, que algunos consideran **obsoleta**.Esto está ocasionado por la fragmentación, porque las diferentes personas escriben sus propias variantes de Markdown para corregir detalles o añadir características no incluidas.

Existen iniciativas para crear un estándar moderno de Markdown como *CommonMark*, en la que participan personas de Github, Discourse o reddit.

# Ejemplos de sintaxis
### Títulos
Se generan cuando se encuentras una almohhadilla antes del texto
```
# Título h1
## Título h2
### Título h3
#### Título h4
##### Título h5
###### Título h6
```
### Citas
Para citar solo es necesario escribir un *mayor qué*
`Ejemplo de cita `

### Texto con énfasis
Agregar un asterisco lo covertirá en *cursiva* y dos en **negrita**.
```
*énfasis* (Cursiva)
**énfasis fuerte** (negrita)
```
# Ventajas de usar MarkDown
Algunas ventajas que nos ofrece Markdown son las siguientes: 
1. Escribir para web es más rápido y cómodo. Una vez acostumbrado y teniendo el conocimiento básico de la sintaxis, completas tus textos muchos más rápidos
2. Es más difícil cometer errores de sintaxis
3. Es perfecto para usarlo con editores de texto minimalistas
4. Ideal para entorno móvil

# Desventajas de MarkDown
Estas cosas podrían considerarse desventajas, pero personalmente pienso que no son cosas tan importantes como para considerarlas tales, siendo así que no nos supondrá grandes problemas.
1. No está estandarizado. Aunque las versiones existentes no difieren demasiado entre ellas.
2. Funcionalidad limitada, pues está hecho para ser simple y minimalista
3. No es compatible de forma universal. No todas las aplicaciones o plataformas admiten este lenguaje de manera nativa o completa.

Para consultar todas las versiones más extendidas, puedes consultar esta página para [más información](https://tutorialmarkdown.com/versiones-markdown), aún así, las más usadas son:
* Common Mark
* GitHub GFM
* Markdown Extra
* MultiMarkdown
* R Markdown
#### Imagen de MarkDown
MarkDown cuenta con un mismo luego por muchas versiones que tenga:
![Logo Markdown](MarkDown-Logo.png)
### Otros simbolos para marcado
Markdown utiliza algunos símbolos para el marcado. Si se utilizan, el analizador reacciona cuando se realiza la conversión. Parte de ellos son los siguientes:
| Simbolos  | Uso |
|:-------------:|:-------------:|
| *             | Cursiva     |
| _             | También cursiva|
|**             | Texto en negrita |
| __            | También negrita |
| ==            | Resaltado de texto |
| >             | Bloque de cita |
| >>            | Boque de cita dentro de otro|