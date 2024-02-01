# apple-action

Manage apple related tasks on github action.

## [prepare-certificate](/prepare-certificate/readme.md)

Create if does not exist and download certificate.

```
- uses: ab180/apple-action/prepare-certificate@v1
  with:
    app-store-connect-issuer-id: ${{ secrets.app-store-connect-issuer-id }}
    app-store-connect-key-id: ${{ secrets.app-store-connect-key-id }}
    app-store-connect-private-key: ${{ secrets.app-store-connect-private-key }}
    certificate-distribution-private-key: ${{ secrets.certificate-distribution-private-key }}
    certificate-distribution-private-key-password: ${{ secrets.certificate-distribution-private-key_PASSWORD }}
    certificate-development-private-key: ${{ secrets.certificate-development-private-key }}
    certificate-development-private-key-password: ${{ secrets.certificate-development-private-key_PASSWORD }}
```

## [prepare-xcbeautify](/prepare-xcbeautify/readme.md)

Apply xcbeautify to xcodebuild globally.

```
- uses: ab180/apple-action/prepare-xcbeautify@v1
```
