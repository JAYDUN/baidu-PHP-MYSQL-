-- phpMyAdmin SQL Dump
-- version 4.7.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jul 29, 2017 at 04:31 AM
-- Server version: 5.6.35
-- PHP Version: 7.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `baiduNews`
--

-- --------------------------------------------------------

--
-- Table structure for table `news`
--

CREATE TABLE `news` (
  `id` int(11) NOT NULL,
  `newsType` char(200) NOT NULL,
  `newsTitle` varchar(200) NOT NULL,
  `newsImg` varchar(200) NOT NULL,
  `newsTime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `news`
--
INSERT INTO `news` (`id`, `newsType`, `newsTitle`, `newsImg`, `newsTime`) VALUES
(9, 'Politics', 'Class and politics', './img/news/3.jpeg', '2017-07-31 00:00:00'),
(12, 'Business', 'Scaramucci out as WH chief moves in', './img/news/4.jpeg', '2017-07-31 00:00:00');


--
-- Indexes for dumped tables
--

--
-- Indexes for table `news`
--
ALTER TABLE `news`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `news`
--
ALTER TABLE `news`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;