
SET FOREIGN_KEY_CHECKS=0;
-- ----------------------------
-- Create Table structures
-- ----------------------------
CREATE TABLE IF NOT EXISTS `users` (`username` VARCHAR(50) NOT NULL, PRIMARY KEY (`username`)) ENGINE=InnoDB DEFAULT CHARSET=utf8;
CREATE TABLE IF NOT EXISTS `players` (`username` VARCHAR(50) NOT NULL, `coins` INT(8) NOT NULL, PRIMARY KEY (`username`)) ENGINE=InnoDB DEFAULT CHARSET=utf8;
CREATE TABLE IF NOT EXISTS `items` (`id` INT(8) NOT NULL AUTO_INCREMENT, `name` VARCHAR(50) NOT NULL, `avatar` VARCHAR(50), PRIMARY KEY (`id`)) ENGINE=InnoDB DEFAULT CHARSET=utf8;
CREATE TABLE IF NOT EXISTS `players_items` (`id` INT(8) NOT NULL AUTO_INCREMENT, `username` VARCHAR(50) NOT NULL, `id_item` INT(8) NOT NULL, `quantity` INT(8) NOT NULL, PRIMARY KEY (`id`), CONSTRAINT fk_player FOREIGN KEY (`username`) REFERENCES players(`username`), CONSTRAINT fk_item FOREIGN KEY (`id_item`) REFERENCES items(`id`)) ENGINE=InnoDB DEFAULT CHARSET=utf8;
CREATE TABLE IF NOT EXISTS `auctions` (`id` INT(8) NOT NULL AUTO_INCREMENT, `seller_username` VARCHAR(50) NOT NULL, `id_item` INT(8) NOT NULL, `quantity` INT(8) NOT NULL, `minimum_bid` INT(8) NOT NULL, `status` VARCHAR(10) NOT NULL, `winner_bid` INT(8), `winner_username` VARCHAR(50), PRIMARY KEY (`id`), CONSTRAINT fk_seller FOREIGN KEY (`seller_username`) REFERENCES players(`username`), CONSTRAINT fk_winner FOREIGN KEY (`winner_username`) REFERENCES players(`username`), CONSTRAINT fk_itemm FOREIGN KEY (`id_item`) REFERENCES items(`id`)) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of items
-- ----------------------------
INSERT INTO `items` (name, avatar) VALUES ('Bread','assets/bread.png');
INSERT INTO `items` (name, avatar) VALUES ('Carrot','assets/carrot.png');
INSERT INTO `items` (name, avatar) VALUES ('Diamond','assets/diamond.png');
