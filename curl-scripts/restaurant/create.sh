
curl "http://localhost:4741/restaurants" \
--include \
--request POST \
--header "Content-Type: application/json" \
--header "Authorization: Token token=${TOKEN}" \
--data '{
  "restaurant": {
     "name": "'"${NAME}"'",
     "address": "'"${ADDRESS}"'",
     "description": "'"${DESC}"'",
     "rating": "'"${RATING}"'",
     "user_id": "'"${ID}"'"
  }
}'

echo
