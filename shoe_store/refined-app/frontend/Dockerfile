# 1. เลือก Base Image เป็น Nginx (Web Server ขนาดเล็กและเร็ว)
FROM nginx:alpine

# 2. คัดลอกไฟล์ index.html ของเรา ไปไว้ในโฟลเดอร์ที่ Nginx ใช้แสดงผลเว็บ
COPY index.html /usr/share/nginx/html/index.html

# 3. เปิดพอร์ต 80 เพื่อให้คนภายนอกเข้ามาดูเว็บได้
EXPOSE 80

# 4. สั่งให้ Nginx ทำงานตลอดเวลา
CMD ["nginx", "-g", "daemon off;"]