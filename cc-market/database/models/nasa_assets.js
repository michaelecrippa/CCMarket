module.exports = (sequelize, Sequelize) => {
  const nasa_assets = sequelize.define("nasa_assets", {
    nid: {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    date: {
      type: Sequelize.date
    }
  });

  return nasa_assets;
};