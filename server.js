// ============================================
// SERVIDOR LOCAL PARA HEAVYTECH SOLUTIONS
// ============================================

const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;

// Tipos MIME para diferentes archivos
const mimeTypes = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'application/javascript',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon',
    '.webp': 'image/webp'
};

// Crear el servidor
const server = http.createServer((req, res) => {
    console.log(`📡 ${req.method} ${req.url}`);
    
    // Normalizar la URL
    let filePath = req.url === '/' ? '/index.html' : req.url;
    
    // Construir la ruta completa
    filePath = path.join(__dirname, filePath);
    
    // Obtener extensión
    const extname = path.extname(filePath);
    
    // Determinar tipo de contenido
    const contentType = mimeTypes[extname] || 'application/octet-stream';
    
    // Leer el archivo
    fs.readFile(filePath, (err, content) => {
        if (err) {
            if (err.code === 'ENOENT') {
                // Archivo no encontrado
                console.log(`❌ 404: ${filePath}`);
                res.writeHead(404, { 'Content-Type': 'text/html' });
                res.end('<h1>404 - Página no encontrada</h1><p>La página que buscas no existe.</p>');
            } else {
                // Error del servidor
                console.log(`❌ 500: ${err.code}`);
                res.writeHead(500, { 'Content-Type': 'text/html' });
                res.end('<h1>500 - Error del servidor</h1>');
            }
        } else {
            // Archivo encontrado
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content);
        }
    });
});

// Iniciar el servidor
server.listen(PORT, '0.0.0.0', () => {
    console.log('\n========================================');
    console.log('🚀 HEAVYTECH SOLUTIONS - SERVIDOR LOCAL');
    console.log('========================================');
    console.log(`✅ Servidor corriendo en:`);
    console.log(`   📱 Local:       http://localhost:${PORT}`);
    
    // Obtener IP local automáticamente
    const os = require('os');
    const networkInterfaces = os.networkInterfaces();
    let localIp = '';
    
    for (const interfaceName in networkInterfaces) {
        const interfaces = networkInterfaces[interfaceName];
        for (const iface of interfaces) {
            if (iface.family === 'IPv4' && !iface.internal) {
                localIp = iface.address;
                break;
            }
        }
        if (localIp) break;
    }
    
    if (localIp) {
        console.log(`   🌐 Red local:   http://${localIp}:${PORT}`);
        console.log('\n📋 Para compartir con otros dispositivos en la misma red:');
        console.log(`   Comparte esta IP: http://${localIp}:${PORT}`);
    }
    
    console.log('\n🛑 Para detener el servidor: Ctrl + C');
    console.log('========================================\n');
});