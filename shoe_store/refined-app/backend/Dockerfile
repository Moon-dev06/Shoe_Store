# ใช้ Node.js version ล่าสุด (LTS)
FROM node:20-alpine

# สร้างโฟลเดอร์สำหรับเก็บแอปในกล่อง
WORKDIR /app

# คัดลอก package.json และ package-lock.json เพื่อติดตั้ง library
COPY package*.json ./

# ติดตั้ง dependencies (ไลบรารีต่างๆ ที่แอปต้องใช้)
RUN npm install --production

# คัดลอกโค้ดหลังบ้านทั้งหมด (server.js และอื่นๆ) เข้าไป
COPY . .

# เปิด port 3000 (หรือ port ที่คุณตั้งไว้ใน server.js)
EXPOSE 3000

# สั่งรันแอปหลังบ้าน
CMD ["node", "server.js"]