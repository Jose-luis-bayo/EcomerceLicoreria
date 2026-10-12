# 🍾 LicoFast - Plataforma E-commerce & Sistema de Gestión para Licorerías

Landing Page de alta conversión y sistema frontend para **LicoFast**, diseñada específicamente para campañas publicitarias en Facebook e Instagram dirigidas a **Clientes Finales** (compra y delivery express de bebidas) y **Administradores / Dueños de Licorería** (sistema POS, control de stock y caja de cobro).

---

## 🚀 Características Principales

1. **Diseño Visual de Alto Impacto (Dark Mode & Nightlife):**
   - Paleta cromática nocturna: Obsidiana (`#07090e`), púrpura neón (`#a855f7`), dorado/ámbar cálido (`#f59e0b`) y esmeralda (`#10b981`).
   - Efectos de *Glassmorphism*, micro-animaciones flotantes, brillos dinámicos y sombras de neón.
   - Tipografía moderna con Google Fonts (*Plus Jakarta Sans* y *Outfit*).

2. **Catálogo Promocional Interactivo con Precios en Bolivianos (Bs.):**
   - Filtros dinámicos por categorías (Todos, Combos Fiesteros, Destilados, Cervezas Heladas, Mixers & Hielo).
   - Buscador en tiempo real por nombre de producto o etiqueta.
   - Tarjetas con fotografías de alta resolución (utilizando las imágenes locales en `/imagenes`).
   - Botón interactivo de compra rápida con retroalimentación visual inmediata.

3. **Carrito de Compras Flotante & Slide-over Drawer:**
   - Contador de productos y total en Bs. sincronizado en la barra de navegación y widget flotante.
   - Persistencia de datos mediante `localStorage`.
   - Modificación de cantidades (+ / -) y cálculo automático de envío gratis (en pedidos mayores a Bs. 150).
   - **Checkout Automatizado por WhatsApp:** Genera un mensaje preformateado y detallado con la lista de productos, total, dirección de entrega y método de pago (Simple QR Bolivia, Efectivo, Tigo Money).

4. **Portal Dual de Registro & Acceso (Clientes & Administradores):**
   - **Clientes:** Registro ágil por celular para guardar direcciones y pedidos frecuentes.
   - **Administradores:** Ingreso seguro al sistema de punto de venta y stock.
   - **Simulador Interactivo del Panel Admin:** Permite a los dueños de negocios probar en vivo el cobro en caja (+Bs. 135) y la reposición de inventario en tiempo real.

5. **Cumplimiento Legal (Ley N° 259 de Bolivia):**
   - Modal de verificación de mayoría de edad (18+).
   - Leyendas de advertencia sobre el consumo responsable de bebidas alcohólicas.

---

## 📁 Estructura del Proyecto

```
EcomerceLicoreria/
├── index.html          # Estructura semántica, SEO, OpenGraph para Ads y Modales
├── style.css           # Sistema de diseño, tokens, glassmorphism y animaciones
├── app.js              # Lógica de catálogo, carrito, WhatsApp y simulación POS
├── package.json        # Configuración para despliegue y servidor estático local
├── README.md           # Documentación técnica
└── imagenes/           # Recursos visuales locales de licores y coctelería
    ├── adam-wilson-6UIonphZA5o-unsplash.jpg
    ├── andrey-ilkevich-Daj8s0zVIFg-unsplash.jpg
    ├── chuttersnap-9UD0JHnWyVE-unsplash.jpg
    ├── james-yarema-dSbxHp-o2M4-unsplash.jpg
    ├── kasey-kollross-eCiKxDegY6I-unsplash.jpg
    ├── kobby-mendez-xBFTjrMIC0c-unsplash.jpg
    ├── nick-rickert-TUZva3dfRv4-unsplash.jpg
    └── zetong-li-ewZe8KPKIxw-unsplash.jpg
```

---

## 🛠️ Ejecución Local

### Opción 1: Con XAMPP / Apache (Directo)
El proyecto ya reside en `c:\xampp\htdocs\Licofast\EcomerceLicoreria`. Solo inicia el módulo Apache en XAMPP y abre tu navegador en:
```
http://localhost/Licofast/EcomerceLicoreria/
```

### Opción 2: Con Node / Serve
```bash
npm install
npm start
# O abre directamente con cualquier servidor local (Live Server en VSCode, etc.)
```

---

## 🌐 Despliegue en Render (Paso a Paso)

Este proyecto está 100% preparado para ser desplegado en **Render como Static Site**:

1. Sube este repositorio a tu cuenta de **GitHub** o **GitLab**.
2. Ingresa a tu panel de [Render.com](https://render.com) y selecciona **New +** > **Static Site**.
3. Conecta tu repositorio `EcomerceLicoreria`.
4. Configura los parámetros:
   - **Name:** `licofast` (o el nombre que prefieras).
   - **Branch:** `main`
   - **Build Command:** *(dejar vacío)*
   - **Publish Directory:** `.` (o `./` para la raíz del repositorio).
5. Haz clic en **Create Static Site**. ¡En menos de 1 minuto estará en vivo con HTTPS gratuito y CDN global!
