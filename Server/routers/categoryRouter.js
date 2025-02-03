import { Router } from 'express';
import {
  getAllCategories,
  createCategory,
  getCategoryById,
  updateCategory,
  deleteCategory
} from '../controllers/categoryController.js';
import verifyToken from '../middlewares/verifyToken.js';

const router = Router();

router.get('/', getAllCategories);
router.post('/', verifyToken, createCategory);
router.get('/:id', getCategoryById);
router.put('/:id', verifyToken, updateCategory);
router.delete('/:id', verifyToken, deleteCategory);

export default router;