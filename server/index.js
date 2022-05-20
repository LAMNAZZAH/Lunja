const { PrismaClient } = require('@prisma/client'); 
const App = require('./app'); 

const prisma = new PrismaClient();

const PORT = process.env.PORT || 5000;


const testDbConnect = async () => {
    try {
        await prisma.$connect();
        return true
    } catch (e) {
        console.log(`[DB-ERROR] Unable to establish a database connection`);
        console.log(`[DB-ERROR] ${e}`);
    }
}

const startApp = async () => {

    const connected = await testDbConnect(); 

    if (!connected) return

    App().listen(PORT, () => console.log(`🚀 @ http://localhost:${PORT}`));
    
}

startApp(PORT); 


