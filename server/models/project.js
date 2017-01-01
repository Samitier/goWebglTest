module.exports = (sequelize, DataTypes) => {
    return sequelize.define('project', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true 
        },
        code:           {
            type:       DataTypes.STRING,
            allowNull:  false,
            unique:     true,
        },
        title:           {
            type:      DataTypes.STRING,
            unique:    true,
            allowNull: false,
        },
        description:    {
            type: DataTypes.STRING,
        },
        link:  {
            type: DataTypes.STRING
        }
    })
}