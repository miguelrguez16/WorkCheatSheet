# PROMETHEUS

## Configurar archivo yml para scraping

```yml
global:
  scrape_interaval: 10s
  evaluation_interval: 10s

scrape_configs:
  - job_name: "<nombre_identificativo>"
    schema: https #tb puede ser http
    metrics_path: "/metricas/"
    static_configs:
      - targets: ["localhost:8080"]
    tls_config:
      insecure_skip_verify: true #ignorar certificado no seguro https

  - job_name: "otro"
```

## Configurar contraseña para prometheus

```bash
$ htpasswd -nBC 12 "" | tr -d ':\n'
New password:
Re-type new password:
$2y$12$ZcEJGmnIDSMKaeJhZsYeNukC.aJ.RhIfypct/pK5psrHEh6cB79L6
```

Archivo web.yml

```yml
basic_auth_users:
  myuser: $2y$12$ZcEJGmnIDSMKaeJhZsYeNukC.aJ.RhIfypct/pK5psrHEh6cB79L6
```

## Lanzar Prometheus

Windows:

```bash
prometheus.exe --web.config.file=web.yml
```

- [Prometheus.io](https://prometheus.io/)
- [Documentación - Proteger Prometheus](https://jfrog.com/blog/dont-let-prometheus-steal-your-fire/)
