-- phpMyAdmin SQL Dump
-- version 4.9.5deb2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jun 02, 2025 at 12:21 PM
-- Server version: 8.0.42-0ubuntu0.20.04.1
-- PHP Version: 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `satycms`
--

-- --------------------------------------------------------

--
-- Table structure for table `nav_links`
--

CREATE TABLE `nav_links` (
  `id` int NOT NULL,
  `link_lable` varchar(222) NOT NULL,
  `link_page_tiitle` varchar(222) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `nav_links`
--

INSERT INTO `nav_links` (`id`, `link_lable`, `link_page_tiitle`) VALUES
(1, 'About', 'About'),
(3, 'Services', 'Services'),
(4, 'Contact', 'Contact'),
(5, 'test', 'test'),
(6, 'Test-page', 'Test-page'),
(7, 'Dheer-page', 'dheer'),
(8, 'wr', 'wr'),
(9, 'tttt', 'tttt');

-- --------------------------------------------------------

--
-- Table structure for table `pages`
--

CREATE TABLE `pages` (
  `id` int NOT NULL,
  `page_titile` varchar(222) NOT NULL,
  `page_data` longtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `pages`
--

INSERT INTO `pages` (`id`, `page_titile`, `page_data`) VALUES
(1, 'About', '[{\"componentName\":\"ParagraphSection\",\"componentData\":{\"ImgUrl\":\"ll\",\"text\":\"Free-up critical resources to work on building value for your customers rather than manually resizing images in Photoshop®.\"}},{\"componentName\":\"ParagraphSection\",\"componentData\":{\"ImgUrl\":\"ll\",\"text\":\"Free-up critical resources to work on building value for your customers rather than manually resizing images in Photoshop®.\"}},{\"componentName\":\"HeroSection\",\"componentData\":{\"backGroundImgUrl\":\"https://png.pngtree.com/thumb_back/fh260/background/20230930/pngtree-a-blue-sky-above-clouds-with-clouds-image_13313410.jpg\",\"text\":\"this form my dynamic obj first top\",\"text2\":\"this form my dynamic obj first top222222222222222222\"}},{\"componentName\":\"ParagraphSection\",\"componentData\":{\"ImgUrl\":\"ll\",\"text\":\"Free-up critical resources to work on building value for your customers rather than manually resizing images in Photoshop®.\"}},{\"componentName\":\"HeroSection\",\"componentData\":{\"backGroundImgUrl\":\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvUbRbzsZhdorFDTCcmpWAhCGHCIOYljixTw&s\",\"text\":\"this form my dynamic obj first tophfghfgh dfgdf g ffb vb\",\"text2\":\"this form my dynamic obj first top222222222222222222\"}}]'),
(2, 'Services', '[{\"componentName\":\"ParagraphSection\",\"componentData\":{\"ImgUrl\":\"ll\",\"text\":\"Free-up servise sssssss  s s critical resources to work on building value for your customers rather than manually resizing images in Photoshop®.\"}},{\"componentName\":\"ParagraphSection\",\"componentData\":{\"ImgUrl\":\"ll\",\"text\":\"Free-up critical resources to work on building value for your customers rather than manually resizing images in Photoshop®.\"}},{\"componentName\":\"HeroSection\",\"componentData\":{\"backGroundImgUrl\":\"https://png.pngtree.com/thumb_back/fh260/background/20230930/pngtree-a-blue-sky-above-clouds-with-clouds-image_13313410.jpg\",\"text\":\"this form my dynamic obj first top\",\"text2\":\"this form my dynamic obj first top222222222222222222\"}},{\"componentName\":\"ParagraphSection\",\"componentData\":{\"ImgUrl\":\"ll\",\"text\":\"Free-up critical resources to work on building value for your customers rather than manually resizing images in Photoshop®.\"}},{\"componentName\":\"HeroSection\",\"componentData\":{\"backGroundImgUrl\":\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvUbRbzsZhdorFDTCcmpWAhCGHCIOYljixTw&s\",\"text\":\"this form my dynamic obj first tophfghfgh dfgdf g ffb vb\",\"text2\":\"this form my dynamic obj first top222222222222222222\"}}]'),
(3, 'Contact', '[{\"componentName\":\"HeroSection\",\"componentData\":{\"backGroundImgUrl\":\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyKgiVlo3cxKINIdygrlGBtOW6ELbSnkbvIA&s\",\"text\":\"this is first text\",\"text2\":\"tis is secont test\"}},{\"componentName\":\"ParagraphSection\",\"componentData\":{\"ImgUrl\":\"https://blog.infraspeak.com/wp-content/uploads/2021/08/Maintenance-as-a-Service.jpeg\",\"text\":\"tredfdg\"}}]'),
(4, 'Test-page', '[{\"componentName\":\"HeroSection\",\"componentData\":{\"backGroundImgUrl\":\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrbC7mOslv7tvZvdIhrrCVzxedQaH_GFAMnQ&s\",\"text\":\"this is test page\",\"text2\":\"ttttt\"}},{\"componentName\":\"ParagraphSection\",\"componentData\":{\"ImgUrl\":\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrbC7mOslv7tvZvdIhrrCVzxedQaH_GFAMnQ&s\",\"text\":\"now this data is updated\"}},{\"componentName\":\"ParagraphSection\",\"componentData\":{\"ImgUrl\":\"https://www.givainc.com/images/friendly_customer_service.png\",\"text\":\"przcddsfsdf 322222\"}},{\"componentName\":\"ParagraphSection\",\"componentData\":{\"ImgUrl\":\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrbC7mOslv7tvZvdIhrrCVzxedQaH_GFAMnQ&s\",\"text\":\"extraddddd\"}}]'),
(5, 'dheer', '[{\"componentName\":\"HeroSection\",\"componentData\":{\"backGroundImgUrl\":\"https://www.givainc.com/images/friendly_customer_service.png\",\"text\":\"dheer 11111\",\"text2\":\"dheer 11111222222222222222222222\"}},{\"componentName\":\"ParagraphSection\",\"componentData\":{\"ImgUrl\":\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrbC7mOslv7tvZvdIhrrCVzxedQaH_GFAMnQ&s\",\"text\":\"dfsdf sdfsdf sdfsf sfsf sf\"}},{\"componentName\":\"ParagraphSection\",\"componentData\":{\"ImgUrl\":\"https://www.givainc.com/images/friendly_customer_service.png\",\"text\":\"rrrrrrrrrrrr rrrrrrrrrrrrrfsr s fsdfs fsdf\"}}]'),
(6, 'para', '[{\"componentName\":\"ParagraphSection\",\"componentData\":{\"ImgUrl\":\"sdfsdfsdf\",\"text\":\"dddddddddd ppppppppppppppppppp ppp praaaapppppppp\"}}]'),
(7, 'wr', '[{\"componentName\":\"ParagraphSection\",\"componentData\":{\"ImgUrl\":\"vbvbb\",\"text\":\"vbvbvbvbvb\"}},{\"componentName\":\"LeftImageSection\",\"componentData\":{\"image\":\"bbvvb\",\"heading\":\"vbvbvb\",\"content\":\"vbvbbv\",\"text\":\"bvbvbbvvb\"}}]'),
(8, 'tttt', '[]');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `nav_links`
--
ALTER TABLE `nav_links`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `pages`
--
ALTER TABLE `pages`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `nav_links`
--
ALTER TABLE `nav_links`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `pages`
--
ALTER TABLE `pages`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
