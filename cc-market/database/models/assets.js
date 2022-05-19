module.exports = (sequelize, Sequelize) => {
  const assets = sequelize.define("assets", {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    price: {
      type: Sequelize.DECIMAL
    },
    a_picture_uri: {
      type: Sequelize.STRING,
      allowNull: false
    },
    likes: {
      type: Sequelize.INTEGER,
      default: 0
    },
    nasa_asset_ref: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'nasa_assets',
        key: 'nid'
      }
    },
    author_username: {
      type: Sequelize.STRING,
      allowNull: false,
      references: {
        model: 'users',
        key: 'username'
      }
    }
  });

  return assets;
};