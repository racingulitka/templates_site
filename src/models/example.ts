import { DataTypes } from 'sequelize';
import { sequelize } from '../server/index'; // Импортируем экземпляр sequelize из файла с настройками подключения

const ExampleId = sequelize.define('ExampleId', {
  // Определение полей модели
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true, // Отметить столбец 'id' как первичный ключ
    autoIncrement: true, // Предполагая, что 'id' является автоинкрементируемым
  }
}, 
{tableName: 'example_table', // Указываем имя таблицы
timestamps: false
}
);

export default ExampleId;