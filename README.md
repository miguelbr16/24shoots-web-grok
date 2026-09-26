# 24SHOOTS

Sitio del estudio: contenido de marca, campañas y eventos corporativos. Valencia.

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000). El idioma por defecto es `/es`.

## Contacto

El correo público es `info@24shoots.es`.

El formulario entrega el mensaje solo si existen `RESEND_API_KEY` y `RESEND_FROM` (un remitente verificado en Resend). Si no están, no confirma un envío falso: abre el correo del visitante con el mensaje escrito. Ver `.env.example`.

`NEXT_PUBLIC_SITE_URL` define el canonical, el sitemap y Open Graph. Mientras el dominio propio no esté conectado, el valor de `config/site.json` es la URL publicada.

La razón social, el NIF y el domicilio fiscal no se muestran hasta que dejen de estar pendientes en `config/site.json`.
