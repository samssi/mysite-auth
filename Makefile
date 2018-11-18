run:
	npm start

run-prod:
	NODE_ENV=production npm start

build-docker-image:
	docker build -t mysite/mysite-auth .

run-docker-image:
	docker run -d -p 8100:8100 -v ~/.mysite-auth-config:/mysite/app/config -v ~/.mysite-credentials:/mysite/app/credentials mysite/mysite-auth

run-docker-image-prod:
	docker run -d -p 8100:8100 -e NODE_ENV='production' -v ~/.mysite-auth-config:/mysite/app/config -v ~/.mysite-credentials:/mysite/app/credentials mysite/mysite-auth

run-new-docker-image: build-docker-image run-docker-image

clean-config: delete-config
	mkdir ~/.mysite-auth-config
	mkdir ~/.mysite-credentials
	cp ./json/config-examples/* ~/.mysite-auth-config
	cp ./json/credential-examples/* ~/.mysite-credentials

delete-config:
	rm -rf ~/.mysite-auth-config
	rm -rf ~/.mysite-credentials
