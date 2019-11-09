pm2 start backend/server.js
pm2 start backend/services/payment/index.js --name payment --watch
pm2 start backend/services/user/index.js --name user --watch
pm2 start backend/services/tour/index.js --name tour --watch
pm2 start backend/services/magazine/index.js --name magazine --watch
cd frontend/;yarn dev
