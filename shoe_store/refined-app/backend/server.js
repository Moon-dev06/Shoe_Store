const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// ข้อมูล Database (สินค้า)
const products = [
    { id: 1, name: "The Heritage Oxford", price: 4200, img: "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?q=80&w=200" },
    { id: 2, name: "Modern Minimalist", price: 3500, img: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=200" },
    { id: 3, name: "The Urban Chelsea", price: 4800, img: "https://images.unsplash.com/photo-1616406432452-07bc5938759d?q=80&w=200" }
];

// Health check สำหรับ Kubernetes
app.get('/health', (req, res) => res.status(200).send('OK'));

// API ดึงข้อมูลสินค้า
app.get('/api/products', (req, res) => {
    res.json(products);
});

// API รับข้อมูล Checkout ไปบันทึกลง Database
app.post('/api/checkout', (req, res) => {
    const { items, total } = req.body;
    console.log("Received order:", items, "Total:", total);
    // ในสถานการณ์จริง ตรงนี้คือการเขียนลง Database เช่น PostgreSQL หรือ MongoDB
    res.status(201).json({ message: "Order placed successfully!", orderId: Date.now() });
});

app.listen(PORT, () => {
    console.log(`Backend service is running on port ${PORT}`);
});