import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/sequelize';

class User extends Model {
  public id_user!: number;
  public name!: string;
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
      unique: true
    },
    username: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },


  },
  {
    sequelize,
    tableName: 'Users'
  }
);

export default User;
