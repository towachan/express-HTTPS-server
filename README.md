# express-HTTPS-server
A Express HTTPS server

git bash: openssl to create certificate files
- openssl genrsa -out [privatekey_filename].pem 1024
- openssl req -new -key [privatekey_filename].pem -out [certificate_csr_filename].csr
- openssl x509 -req -in [certificate_csr_filename].csr -signkey [privatekey_filename].pem -out [certification_filename].pem
