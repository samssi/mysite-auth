# mysite-auth

Mysite-auth provides on user authentication a stateless JWT-token to the end user which is stored in the browser's session storage. JWT-token is authorized with the mysite-rest content API with every request which goes throgh a protected route. Usernames/passwords are stored on the host in a json-file. Passwords are hashed with a slow pbkdf2 hashing algorithm. Passwords all have random salts attached to them. There is also an utility to generate password hashes and salts accesable via REST.
