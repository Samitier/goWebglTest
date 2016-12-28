module.exports = (sequelize, DataTypes) => {
    return sequelize.define('project', {
        code:           {
            type:       DataTypes.STRING,
            allowNull:  false,
            unique:     true,
            primaryKey: true,
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
    },
    {
        associate:  (models) => {}
    })
}