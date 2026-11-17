# Nova Store - Catálogo E-commerce 

Proyecto desarrollado para el Laboratorio 13 del curso de Desarrollo de Aplicaciones Empresariales (Tecsup). 
Nova Store es una plataforma web para la visualización y filtrado de un catálogo de periféricos de computadora y hardware.

##  Tecnologías Utilizadas

**Frontend:**
* ReactJS (Vite)
* Tailwind CSS v4
* Lucide React (Iconografía)

**Backend:**
* Python / Django
* Django REST Framework (API REST)
* SQLite (Base de datos)

## ⚙️ Instalación y Ejecución local

### 1. Configuración del Backend (Django)
```bash
cd backend
python -m venv venv
venv\Scripts\activate
pip install django djangorestframework django-cors-headers
python manage.py migrate
python manage.py runserver