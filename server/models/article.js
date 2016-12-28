module.exports = (sequelize, DataTypes) => {
    let article =  sequelize.define('article', {
        slug:           {
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
        summary:    {
            type: DataTypes.STRING,
        },
        body:  {
            type: DataTypes.STRING
        },
        hits:          {
            type:         DataTypes.INTEGER,
            allowNull:    false,
            defaultValue: 0
        }
    },
    {
        associate:  models => {
            article.belongsTo(models.project, {as: 'project'})
        }
    })
    return article
}