const sequelize = require("../db")

const {DataTypes} = require("sequelize")


const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    login: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: "USER"},
    /* name: {type: DataTypes.STRING},
    surname: {type: DataTypes.STRING},
    patronymic: {type: DataTypes.STRING} */
})

const Deal = sequelize.define('deal', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING},
    description: {type: DataTypes.STRING},
    datecreate: {type: DataTypes.STRING},
    dateupdate: {type: DataTypes.STRING},
    deadline: {type: DataTypes.STRING},
    status: {type: DataTypes.STRING},
    priority: {type: DataTypes.STRING},
    creator: {type: DataTypes.STRING},
    responsible: {type: DataTypes.STRING}

})


User.hasMany(Deal, { onDelete: "CASCADE" })
Deal.belongsTo(User, { onDelete: "CASCADE" })


module.exports = {
    User, Deal
}