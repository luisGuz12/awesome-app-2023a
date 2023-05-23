// Importando el enrutador de express
import { Router } from 'express';
// Importando el gestor de rutas
import path from 'path';

// Creando una instancia del enrutador de express
const router = Router();

// GET /
router.get( (req, res)=>{
  
  res.sendFile(path.resolve('views','error-404html'));
});


export default router;