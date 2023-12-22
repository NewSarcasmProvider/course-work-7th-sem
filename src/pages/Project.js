// Projects.jsx
import React from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {
  return (
    <div>
      <ProjectCard 
      title="ЛР 1. Создание собственного модуля и пакета." 
      description={
          <>
            В данном проекте был создан пакет, используя результаты работы за предыдущий семестр, в частности, выполнено задание с калькулятором. Структура пакета представляет собой каталог с файлом init.py внутри.
            <br />
            <br />
            Основным компонентом пакета является модуль с функцией calculate, а также несколько вспомогательных функций, включая load_params и convert_precision. Также в пакете присутствует механизм логирования. Дополнительно был добавлен третий модуль или пакет, предназначенный для проведения тестирования функционала калькулятора.
          </>
        } 
      buttomname="Replit"
      buttomlink="https://replit.com/@CrazyCat2/prog-5-lr1"/>

      <ProjectCard 
      title="ЛР 2. Реализация удаленного импорта собственного пакета" 
      description="В данном проекте была создана возможность импорта модулей напрямую из удаленных URL-ресурсов в языке программирования Python." 
      buttomname="Replit"
      buttomlink="https://replit.com/@CrazyCat2/prog-5-lr2"/>
    </div>
  );
};

export default Projects;
