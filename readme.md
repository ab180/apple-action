# apple-action

Manage apple related tasks on github action.

## [deploy-ios-application-to-aws](/deploy-ios-application-to-aws/readme.md)

Deploy ios application to aws.

```yml
- uses: ab180/apple-action/deploy-ios-application-to-aws@v3
  with:
    application: Build/Application.ipa
    application-version: 1.0.0
    application-identifier: com.example.application
    bucket: Bucket # Name of S3
    distribution:  AAAAAAAAAAAAAA # ID of CloudFront
    domain: application.example.com # Domain of CloudFront
    directory: Build # Directory of S3
```

Output
- install-url: URL to install application
- download-url: URL to download application
- expire: Expire date of deploy

## [prepare-certificate](/prepare-certificate/readme.md)

Create if does not exist and download certificate.

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

## [prepare-xcodebuild](/prepare-xcodebuild/readme.md)

Apply options to xcodebuild globally.

```yml
- uses: ab180/apple-action/prepare-xcodebuild@v3
  with:
    version: 15.3
    xcbeautify: true
    automatic-signing: true
    app-store-connect-issuer-id: ${{ secrets.app-store-connect-issuer-id }}
    app-store-connect-key-id: ${{ secrets.app-store-connect-key-id }}
    app-store-connect-private-key: ${{ secrets.app-store-connect-private-key }}
```
