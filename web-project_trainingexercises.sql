-- MySQL dump 10.13  Distrib 8.0.31, for Win64 (x86_64)
--
-- Host: localhost    Database: web-project
-- ------------------------------------------------------
-- Server version	8.0.31

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `trainingexercises`
--

DROP TABLE IF EXISTS `trainingexercises`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `trainingexercises` (
  `ExerciseID` int NOT NULL AUTO_INCREMENT,
  `ExerciseName` varchar(100) NOT NULL,
  `Description` text NOT NULL,
  `VideoLink` varchar(255) NOT NULL,
  PRIMARY KEY (`ExerciseID`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `trainingexercises`
--

LOCK TABLES `trainingexercises` WRITE;
/*!40000 ALTER TABLE `trainingexercises` DISABLE KEYS */;
INSERT INTO `trainingexercises` VALUES (5,'Hip Abduction Machine','Target your abductors with the Hip Abduction Machine exercise.','https://cdn.muscleandstrength.com/sites/default/files/hip-abduction-machine.jpg'),(6,'Cable Hip Abduction','Target your abductors with the Cable Hip Abduction exercise.','https://cdn.muscleandstrength.com/sites/default/files/styles/400x250/public/field/image/exercise/cableabduction1.jpg?itok=fxaZxcVX'),(7,'Lying Floor Leg Raise','Build impressive \"6-pack abs\" with the Lying Floor Leg Raise exercise.','https://cdn.muscleandstrength.com/sites/default/files/lying-leg-raise-1.jpg'),(8,'Weighted Crunch','Build impressive \"6-pack abs\" with the Weighted Crunch exercise.','https://cdn.muscleandstrength.com/sites/default/files/weighted-crunch.jpg'),(9,'Sit Up','Build impressive \"6-pack abs\" with the Sit Up exercise.','https://cdn.muscleandstrength.com/sites/default/files/sit-up_0.jpg');
/*!40000 ALTER TABLE `trainingexercises` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-07-20 20:18:45
