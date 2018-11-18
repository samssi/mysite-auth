password_json="{\"password\": \"$1\"}"

if [ $# -ne 1 ]; then
  echo "Usage: ./curl-for-password.sh <password>"
  exit 1
fi

echo $password_json
curl --header "Content-Type: application/json" --request POST --data "$password_json" https://mysite.samssi.com/api/v1/auth/util/password | python -m json.tool
