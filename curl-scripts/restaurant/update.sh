
curl "http://localhost:4741/restaurants/${ID}" \
--include \
--request PATCH \
--header "Content-Type: application/json" \
--header "Authorization: Token token=${TOKEN}" \
--data '{
  "restaurant": {
     "name": "'"${NAME}"'",
     "address": "'"${ADDRESS}"'",
     "description": "'"${DESC}"'",
     "rating": "'"${RATING}"'",
     "user_id": "'"${USER}"'"
  }
}'

echo
