# apple-action/deploy-ios-application-to-aws

Deploy ios application to aws.

## Usage

```yml
- uses: ab180/apple-action/deploy-ios-application-to-aws
  with:
    application: Build/Application.ipa
    application-version: 1.0.0
    application-identifier: com.example.application
    bucket: Bucket # Name of S3
    distribution:  AAAAAAAAAAAAAA # ID of CloudFront
    domain: application.example.com # Domain of CloudFront
    directory: Build # Directory of S3
```

## Output

- install-url: URL to install application
- download-url: URL to download application
- expire: Expire date of deploy
