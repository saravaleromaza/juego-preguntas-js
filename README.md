# ⏱️ Juego de preguntas

Mini juego en JavaScript donde tienes **30 segundos** para responder 5 preguntas de cultura general. Si se acaba el tiempo, aparece el mensaje **GAME OVER** acompañado de un sonido.

Proyecto realizado como práctica de mis primeros pasos en JavaScript.

## 🎮 Cómo se juega

1. Al abrir la página empieza una cuenta atrás de 30 segundos.
2. Responde a las 5 preguntas escribiendo en cada caja de texto.
3. Pulsa **Finalizar** antes de que termine el tiempo: se detiene la cuenta atrás y se muestra un mensaje con tus respuestas y la fecha de hoy.
4. Si el tiempo se acaba antes, verás **¡GAME OVER!** y sonará un audio.
5. Pulsa **Volver a intentar** para reiniciar el juego.

## Ver en vivo

https://saravaleromaza.github.io/juego-preguntas-js/

## 🛠️ Tecnologías

- HTML5
- CSS3
- JavaScript (`setTimeout`, `setInterval`, manipulación del DOM, `Date`)

## 📁 Estructura del proyecto

```
├── index.html
├── script.js
├── style.css
└── audios/
    └── gameover-1.mp3
```

## 🚀 Cómo ejecutarlo

1. Descarga o clona el repositorio:
   ```bash
   git clone https://github.com/TU_USUARIO/NOMBRE_DEL_REPO.git
   ```
2. Abre el archivo `index.html` en tu navegador.

No necesita instalar nada más.

## 📚 Qué he practicado

- Temporizadores con `setTimeout` y `setInterval`.
- Leer valores de cajas de texto con `getElementById`.
- Eventos `onload` y `onclick`.
- Mostrar mensajes con `alert` y trabajar con fechas.
- Reproducir audio desde JavaScript.
