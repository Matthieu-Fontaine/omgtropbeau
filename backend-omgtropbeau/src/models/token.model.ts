import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/sequelize';

class Token extends Model {
  public token!: string;
  public userId!: number;
  public expiredAt!: Date;
  public createdAt!: Date;
  public updatedAt!: Date;
}

Token.init (
  {
    token: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
      unique: true
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    expiredAt: {
      type: DataTypes.DATE,
      allowNull: false
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false
    }
  },
  {
    sequelize,
    tableName: 'Tokens'
  }
);

export default Token;;
