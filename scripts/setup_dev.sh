#!/bin/sh
#
# Make certificates for local development and set them as environment variables

if ! which mkcert > /dev/null 2>&1; then
  echo 'mkcert not found: "brew install mkcert"'
  exit 1
fi

unset host_name
host_name=${1:-localhost}

cert_file=${host_name}.pem
key_file=${host_name}-key.pem

mkcert -install
mkcert -cert-file "${cert_file}" -key-file "${key_file}" "${host_name}"

LOCALHOST_CERT_PEM="$(pwd)/${cert_file}"
LOCALHOST_KEY_PEM="$(pwd)/${key_file}"
export LOCALHOST_CERT_PEM
export LOCALHOST_KEY_PEM
