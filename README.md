# Living Spaces Intercom App

## First Clone?

- run `npm install -y`
- configure firebase-cli locally

- Run front and backend dev servers `npm run localserver`
- Run dev backend server locally `firebase serve`
- Build/deploy `firebase deploy`

## Frontend

All frontend related code is in ./ls-internal-intercom-app

You can start just the React app by navigating to this folder and running `npm start`

On `firebase deploy` the React app is automatically run through webpack - firebase then uploads the compiled files from `./ls-internal-intercom-app/build`

## Backend

Cloud functions are located in /functions

API keys are hidden - I set them up as environment variables in firebase. If you run locally put a file named `.runtimeconfig.json` in the root directory of this repo and put contents in as such:

```
{
  "intercom": {
    "key": "actual-api-key-goes-right-here",
    "id": "INTERCOM_API_KEY"
  }
}
```

**To run the backend locally:** `npm run functions` in the root directory.
