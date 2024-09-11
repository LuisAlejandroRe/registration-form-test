# Setup

## Instalación

Versión de node: 20.9.0

```bash
npm install
```

## Levantar server de la aplicación

```bash
npm run start
```

## Correr test

```bash
npx playwright test
```

## Correr test

```bash
npx playwright test
```

## Mostrar reporte de tests

```bash
npx playwright show-report
```

# Test Plan para Validación del Formulario de registro

## Resumen

Este plan de pruebas está diseñado para validar la funcionalidad de un formulario en una aplicación web. Las pruebas serán automatizadas utilizando Playwright y se enfocarán en asegurar que las validaciones del formulario funcionen correctamente bajo diferentes condiciones.

## Objetivos de las Pruebas

1. **Validar la funcionalidad del formulario**: Asegurar que el formulario acepte datos válidos y rechace datos inválidos.
2. **Garantizar mensajes de error apropiados**: Verificar que los mensajes de error se muestren correctamente cuando los datos ingresados no cumplen con las reglas de validación.
3. **Compatibilidad con múltiples navegadores**: Confirmar que la funcionalidad del formulario sea consistente en diferentes navegadores.

## Alcance

Este plan cubre las siguientes áreas de prueba:

- Validación de la entrada de datos en el formulario (formato y requerimientos).
- Comportamiento del formulario ante entradas válidas e inválidas.
- Comportamiento de los mensajes de error y su correcta aparición.

## Herramientas de Prueba

- **Playwright**: Se utilizará Playwright para la automatización de las pruebas en múltiples navegadores.

## Estrategia de Pruebas

1. **Configuración del Entorno de Pruebas**

   - Preparar el entorno de desarrollo para ejecutar pruebas con Playwright.
   - Asegurar que Playwright esté configurado para pruebas en Chrome, Firefox, y WebKit.

2. **Casos de Prueba**

### Caso de Prueba 1: Validar Campo de Nombre

**Descripción**: Verificar que el campo de Nombre valide correctamente la entrada.

**Pasos**:

1. Dejar el campo de nombre vacío y enviar el formulario.

**Resultados Esperados**:

- El formulario debe mostrar un mensaje de error si el campo está vacío.
- El formulario debe permitir el envío si el nombre tiene un formato válido.

### Caso de Prueba 2: Validar Campo de Correo Electrónico

**Descripción**: Verificar que el campo de correo electrónico valide correctamente la entrada.

**Pasos**:

1. Dejar el campo de correo electrónico vacío y enviar el formulario.
2. Ingresar un correo electrónico con formato incorrecto (ejemplo: "correo@dominio") y enviar el formulario.
3. Ingresar un correo electrónico con formato correcto (ejemplo: "nombre@dominio.com") y enviar el formulario.

**Resultados Esperados**:

- El formulario debe mostrar un mensaje de error si el campo está vacío o tiene un formato incorrecto.
- El formulario debe permitir el envío si el correo tiene un formato válido.

### Caso de Prueba 3: Validar Campo de Contraseña

**Descripción**: Verificar que el campo de contraseña valide correctamente la entrada.

**Pasos**:

1. Dejar el campo de contraseña vacío y enviar el formulario.
2. Ingresar una contraseña con menos de 8 caracteres y enviar el formulario.
3. Ingresar una contraseña sin cumplir con los requisitos (sin mayúscula, sin minúscula, sin número, o sin carácter especial) y enviar el formulario.
4. Ingresar una contraseña válida que cumpla con todos los requisitos y enviar el formulario.

**Resultados Esperados**:

- El formulario debe mostrar un mensaje de error si el campo está vacío o la contraseña no cumple con los requisitos.
- El formulario debe permitir el envío si la contraseña cumple con todos los requisitos.

### Caso de Prueba 4: Validar Campo de Confirmar Contraseña

**Descripción**: Verificar que el campo de confirmar contraseña valide correctamente la entrada.

**Pasos**:

1. Ingresar una contraseña diferente a la ingresada en el campo de contraseña.
2. Ingresar una contraseña válida que cumpla con todos los requisitos y enviar el formulario.

**Resultados Esperados**:

- El formulario debe mostrar un mensaje de error si el valor ingresado no es igual al ingresado en el campo de contraseña.
- El formulario debe permitir el envío si la confirmción de contraseña cumple con todos los requisitos.

### Caso de Prueba 5: Validar redirección cuando hay un registro exitoso

**Descripción**: Verificar que se haga una redirección al dashboard cuando todos los campos del formulario son válidos.

**Pasos**:

1. Ingresar entradas válidas en todos los campos del formulario.

**Resultados Esperados**:

- Se debe redireccionar a la ruta /dashboard.html

### Caso de Prueba 6: Prueba de Compatibilidad en Múltiples Navegadores

**Descripción**: Verificar que las validaciones del formulario funcionen de manera consistente en diferentes navegadores.

**Pasos**:

1. Ejecutar los casos de prueba anteriores en Chrome, Firefox y WebKit usando Playwright.

**Resultados Esperados**:

- Las validaciones deben comportarse de la misma manera en todos los navegadores soportados.

## Criterios de Aceptación

1. Todas las validaciones deben funcionar correctamente según los casos de prueba descritos.
2. Los mensajes de error deben ser claros y mostrar el problema específico.
3. La funcionalidad del formulario debe ser consistente en los navegadores soportados.

## Entregables

1. **Reporte de Pruebas**: Un reporte detallado que incluya los resultados de las pruebas, los errores encontrados y las recomendaciones para la corrección de errores.
2. **Scripts de Prueba**: Scripts de Playwright utilizados para automatizar las pruebas.

## Cronograma

- **Preparación del Entorno**: 1 día
- **Desarrollo de Casos de Prueba y Scripts**: 2 días
- **Ejecución de Pruebas**: 1 día
- **Generación de Reporte de Pruebas**: 1 día

## Responsabilidades

- **Desarrollador de Pruebas**: Crear y ejecutar los scripts de Playwright.
- **Líder de Pruebas**: Revisar y aprobar el plan de pruebas, supervisar la ejecución de pruebas y revisar el reporte final.
