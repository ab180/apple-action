# apple-action/prepare-certificate

Create if does not exist and download certificate.

## Behavior

1. Check required certificates are existed on app-store-connect.
2. If not, create certificates.
3. Download certificates.
4. Add certifciate to keychain.

## Usage

```yml
- uses: ab180/apple-action/prepare-certificate@v3
  with:
    app-store-connect-issuer-id: ${{ secrets.app-store-connect-issuer-id }}
    app-store-connect-key-id: ${{ secrets.app-store-connect-key-id }}
    app-store-connect-private-key: ${{ secrets.app-store-connect-private-key }}
    certificate-distribution-private-key: ${{ secrets.certificate-distribution-private-key }}
    certificate-distribution-private-key-password: ${{ secrets.certificate-distribution-private-key_PASSWORD }}
    certificate-development-private-key: ${{ secrets.certificate-development-private-key }}
    certificate-development-private-key-password: ${{ secrets.certificate-development-private-key_PASSWORD }}
```

Required    | Name                                          | Type      | Description
---         | ---                                           | ---       | ---
O           | app-store-connect-issuer-id                   | String    | Issuer ID of App Store Connect API Key
O           | app-store-connect-key-id                      | String    | Key ID of App Store Connect API Key
O           | app-store-connect-private-key                 | String    | Private Key (Base64) of App Store Connect API Key
X           | certificate-distribution-private-key          | String    | Private Key (Base64) for Certificate Signing Request
X           | certificate-distribution-private-key-password | String    | Password of Private Key for Certificate Signing Request
X           | certificate-development-private-key           | String    | Private Key (Base64) for Certificate Signing Request
X           | certificate-development-private-key-password  | String    | Password of Private Key for Certificate Signing Request

- **Managing every inputs with secret is highly recommended.**
- If specific type of certificate is not necessary, omit option for certificate.

## FAQ

- What is difference between just add certficate file to secret?
    - Without this action, you should create certificate on Apple Developer and download it and add it to secret. Also you should repeat this routine every 1 year because of expiration of certificate.
    - With this action, action automate this routine instead of you.
- What is App Store Connect API?
    - Apple's API to automate Apple Developer, App Store Connect.
    - Refer to this document: <https://developer.apple.com/documentation/appstoreconnectapi>
- How to create App Store Connect API Key?
    - Refer to this document: <https://developer.apple.com/documentation/appstoreconnectapi/creating_api_keys_for_app_store_connect_api>
- What is Private Key for Certificate Signing Request?
    - Private Key for creating Certificate Signing Request.
    - Certificate Signing Request is used for create or filter certificate on App Store Connect API.
    - Certificate is created per unique Certificate Private Key.
- How to create Private Key for Certificate Signing Request?
    - You can create AES256 encrypted RSA2048 key with below command.
        ```sh
        openssl genpkey -algorithm RSA \
            -pkeyopt rsa_keygen_bits:2048 \
            -pkeyopt rsa_keygen_pubexp:65537 \
        | openssl pkcs8 -topk8 \
            -v2 aes256 -passout pass:${password} \
        > private_key.p8
        ```
    > This is just example, use proper command and option with your own research.
