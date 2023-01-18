import { Sequelize, Model, DataTypes, InferAttributes, InferCreationAttributes } from 'sequelize';

const sequelize: Sequelize = new Sequelize('database','username','password', {
    dialect: 'sqlite',
    storage: './dist/db.sqlite'
});

interface UserModel extends Model<InferAttributes<UserModel>, InferCreationAttributes<UserModel>> {
    username: string;
    password: string;
}

const UserModel = sequelize.define<UserModel>('User', {
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: { 
        type: DataTypes.STRING,
    }
});


export default UserModel;