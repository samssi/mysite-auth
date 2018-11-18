# mysite-auth

Mysite-auth provides on user authentication a stateless JWT-token to the end user which is stored in the browser's session storage. JWT-token is authorized with the mysite-rest content API with every request which goes throgh a protected route. Usernames/passwords are stored on the host in a json-file. Passwords are hashed with a slow pbkdf2 hashing algorithm. Passwords all have random salts attached to them. There is also an utility to generate password hashes and salts accesable via REST.

## Running mysite-auth locally

When container is run without overriding volume mappings defined in production mode the defaults from config/-folder and credentials/-folder are applied to the container.

Run the local development context with following make:
````
make run-docker-image
````

Default username is: foobar
Default password is: logal

Second username is: baz
Second passoword is: boz

## Running mysite-auth in production mode

Create on the host computer docker users home directory `~/.mysite-auth-config` and `~/.mysite-credentials`

### ~/.mysite-auth-config/production.json

Create production.json to this folder. Look for an example from config-examples-directory under json.

### .mysite-credentials/credentials.json

Create credentials.json to this folder. Look for an example from credential-examples-directory under json.

### Running production context

Run the production context with the following make:

````
make run-docker-image-prod
````