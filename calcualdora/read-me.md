# Calculadora

Calculadora simple que permite a los usuarios realizar operaciones básicas.

### Información IMPORTANTE 📄

- La calculadora solo realiza **suma**, **resta**, **multiplicacion** y **division**. 
- De **NO** poner ningún valor numérico a operar en uno o ambos campos será interpretado como **0 (cero).**
- La caculadora **NO** mostrará resultados que necesiten ser expresado en notacion cientifica, en su lugar mostrará un **mensaje de ERROR**.
- Puedes usar la tecla **ENTER** para calcular. 
  

### Comenzando 🚀

La utilización de la calculadora es simple.

1. Primero debes completar los campos con los numeros a operar.
2. Luego elegir la operacion que quieras realizar.
3. Presionar **CALCULAR** (TECLA ENTER) para obtener el resultado. 
4. Puede volver a ejecutar otra operacion apretando sobre **RESET** y volviendo a repetir los pasos. 

### Casos de pruebas realizados ⚙️

- En primer error que maneje fue el de operar entre **valores no numericos**, este muestra el error por pantalla.
- Luego quise atrapar este error en **tiempo real**, a medida que el usuario va escribiendo y pude solucionarlo con el evento oninput().
- Seguí con la division por 0 **(cero)**, el cual solo muestra error en pantalla. No pude hacer que sea en tiempo real, sucedia que el mensaje aparecia al selecionar **division** y **cero** en el segundo input, pero no desaparecia al borrar y corregirlo. 
- Por ultimo lo que mas tiempo me llevó fue mostrar por pantalla un error cuando el resultado tiene **notacion cientifica**. Busque hacerlo por medio de **metodos** como toFixed(), toPrecision(), toLocaleString() (El cual se acercó al resultado pero solo permitia mostrar muy pocos digitos) entre otros. 
Asi que termine realizando un filtrado, conviritiendo el resultado number a string y buscando los signos **menos (-) y más (+)** utilizando **expresiones regulares** y el metodo **test** que devuleve true o false. El resto es historia (?.

### Construido con 🛠️

HTML, CSS y JavaScript.

### Autor ✒️ [NuMA](https://github.com/NumaTejeda)









