import { DataTypes, Model } from 'sequelize';
import util from 'util';
import connectToDB from './db.js';

const db = await connectToDB('postgresql:///animals');

export class Human extends Model {
  [util.inspect.custom]() {
    return this.toJSON();
  }

  getFullName() {
    return `${this.fname} ${this.lname}`
  }
}
Human.init(
  {
    humanId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    fname: {
      type: DataTypes.STRING(25),
      allowNull: false
    },
    lname: {
      type: DataTypes.STRING(25)
    },
    email: {
      type: DataTypes.STRING(100)
    }

  },
  {
    sequelize: db,
    modelName: 'human'
  }
)


export class Animal extends Model {
  [util.inspect.custom]() {
    return this.toJSON();
  }
}
Animal.init(
  {
    animalId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    species: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    birthYear: {
      type: DataTypes.INTEGER
    }
  },
  {
    sequelize: db,
    modelName: 'animal'
  }
)

// TODO: Define Relationship
Human.hasMany(Animal)
Animal.belongsTo(Human, {foreignKey: 'humanId'})


export default db;
