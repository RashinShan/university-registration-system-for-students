

CREATE TABLE `candidate` (
  `NIC` varchar(30) NOT NULL,
  `First_Name` varchar(30) NOT NULL,
  `Last_Name` varchar(30) NOT NULL,
  `Gender` varchar(30) NOT NULL,
  `Address` varchar(30) NOT NULL,
  `DOB` varchar(30) NOT NULL,
  `Registation_Number` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;




CREATE TABLE `courses` (
  `courses_Name` varchar(30) NOT NULL,
  `Registation_Number` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;



CREATE TABLE `faculty_details` (
  `Department_Name` varchar(30) NOT NULL,
  `Semester_Name` varchar(30) NOT NULL,
  `Registation_Number` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;




CREATE TABLE `student_registation` (
  `Registation_Number` varchar(30) NOT NULL,
  `Registation_Date` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


CREATE TABLE `user_details` (
  `UserName` varchar(30) NOT NULL,
  `Password` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
