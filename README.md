# Example Service for Digital Plattform - RISE

Currently the service only exposes a registration-route.
When a registration is submitted it grabs all the query-parameters with the credentials and passes them to the included [api](./api).

In the API we're looking for a `dp_referall_id`-parameter, and if exists, send another request to the "RISE"-API.

## Getting started

```
npm i
npm run build:css
npm start
```

### With the API

```
npm i -g vercel
vercel dev -l 5000
```
