pm2 start backend/server.js
pm2 start backend/services/payment/index.js --name payment
pm2 start backend/services/user/index.js --name user
pm2 start backend/services/tour/index.js --name tour
pm2 start backend/services/magazine/index.js --name magazine
cd frontend/;yarn dev
