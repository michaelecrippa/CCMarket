use ccmarket;

DROP TABLE users;

CREATE table users
(username VARCHAR(20) PRIMARY KEY,
password VARCHAR(100) NOT NULL,
first_name VARCHAR(40) NOT NULL,
last_name VARCHAR(40) NOT NULL,
email VARCHAR(150) NOT NULL,
u_picture_uri VARCHAR(200) DEFAULT NULL);

INSERT INTO users
VALUES
("sdimov", "ccmarket", "Svetoslav", "Dimov", "svetli2112@gmail.com", ""),
("mcrippa", "ccmarket", "Michael", "Crippa", "mcrippa@gmail.com", ""),
("blgovestas", "ccmarket", "Blagovesta", "Simonova", "blagovestas@gmail.com", "");

SELECT * FROM users;

CREATE table assets
(id INT AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(100) NOT NULL,
price DECIMAL(10,2) DEFAULT 0,
a_picture_uri VARCHAR(40) NOT NULL,
likes INT DEFAULT 0,
nasa_asset_ref INT,
author_username VARCHAR(20),
CONSTRAINT fk_nasa_asset FOREIGN KEY (nasa_asset_ref)  
  REFERENCES nasa_assets(nid),
CONSTRAINT fk_author_username FOREIGN KEY (author_username)  
  REFERENCES users(username));
  
CREATE TABLE nasa_assets
(nid INT AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(80) NOT NULL,
date DATETIME DEFAULT CURRENT_TIMESTAMP,
likes INT DEFAULT 0);