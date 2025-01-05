# apple-action/prepare-xcodebuild

Apply options to xcodebuild globally.

## Behavior

1. Create wrapper `xcodebuild`.
    - `version`
        - Select version of Xcode
    - `xcbeautify`
        - Apply `xcbeautify`
    - `automatic-signing`
        - Apply `allowProvisioningUpdates`
        - Apply `authenticationKeyIssuerID`
        - Apply `authenticationKeyID`
        - Apply `authenticationKeyPath`
2. Apply to $GITHUB_PATH.

## Usage

```yml
- uses: ab180/apple-action/prepare-xcodebuild@v3
  with:
    xcbeautify: true
    automatic-signing: true
    app-store-connect-issuer-id: ${{ secrets.app-store-connect-issuer-id }}
    app-store-connect-key-id: ${{ secrets.app-store-connect-key-id }}
    app-store-connect-private-key: ${{ secrets.app-store-connect-private-key }}
```

Required    | Name                                          | Type      | Description
---         | ---                                           | ---       | ---
X           | version                                       | String    | Version of Xcode
O           | xcbeautify                                    | Boolean   | Apply xcbeautify or not
O           | automatic-signing                             | Boolean   | Apply automatic signing or not
O           | app-store-connect-issuer-id                   | String    | Issuer ID of App Store Connect API Key to apply automatic signing
O           | app-store-connect-key-id                      | String    | Key ID of App Store Connect API Key to apply automatic signing
O           | app-store-connect-private-key                 | String    | Private Key (Base64) of App Store Connect API Key to apply automatic signing

## FAQ

- What is App Store Connect API?
    - Apple's API to automate Apple Developer, App Store Connect.
    - Refer to this document: <https://developer.apple.com/documentation/appstoreconnectapi>
- How to create App Store Connect API Key?
    - Refer to this document: <https://developer.apple.com/documentation/appstoreconnectapi/creating_api_keys_for_app_store_connect_api>
