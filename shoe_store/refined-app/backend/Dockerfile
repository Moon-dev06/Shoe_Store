# 1. เลือก Base Image เป็น Node.js เวอร์ชั่น 18
FROM node:18-alpine

# 2. กำหนดโฟลเดอร์ทำงานภายใน Container
WORKDIR /app

# 3. คัดลอกไฟล์ package.json มาก่อน เพื่อติดตั้ง dependencies
COPY package*.json ./

# 4. รันคำสั่งติดตั้งแพ็กเกจที่จำเป็น (เช่น express, cors)
RUN npm install

# 5. คัดลอกไฟล์โค้ดทั้งหมด (เช่น server.js) เข้าไปใน Container
COPY . .

# 6. เปิดพอร์ต 3000 สำหรับให้ Frontend เรียกใช้งาน API
EXPOSE 3000

# 7. คำสั่งเริ่มต้นเพื่อรันเซิร์ฟเวอร์
CMD ["npm", "start"]