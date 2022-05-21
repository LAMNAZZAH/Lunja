-- CreateTable
CREATE TABLE `answer` (
    `answer_id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(45) NULL,
    `image_url` LONGTEXT NULL,
    `is_correct` TINYINT NULL,
    `question_id` INTEGER NOT NULL,

    INDEX `question_card_id_idx`(`question_id`),
    PRIMARY KEY (`answer_id`, `question_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `asset` (
    `asset_id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(45) NOT NULL,
    `privacy` VARCHAR(45) NOT NULL,
    `created_at` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `subject_id` INTEGER NULL,
    `University_university_id` INTEGER NULL,
    `user_id` INTEGER NOT NULL,
    `class_id` INTEGER NULL,

    INDEX `fk_Asset_Class1_idx`(`class_id`),
    INDEX `fk_Asset_Subject1_idx`(`subject_id`),
    INDEX `fk_Asset_University1_idx`(`University_university_id`),
    INDEX `user_id_idx`(`user_id`),
    PRIMARY KEY (`asset_id`, `user_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `asset_has_tag` (
    `asset_has_tag_id` INTEGER NOT NULL AUTO_INCREMENT,
    `asset_id` INTEGER NOT NULL,
    `tag_id` INTEGER NOT NULL,

    INDEX `fk_Tag_has_Asset_Asset1_idx`(`asset_id`),
    INDEX `fk_Tag_has_Asset_Tag1_idx`(`tag_id`),
    PRIMARY KEY (`asset_has_tag_id`, `asset_id`, `tag_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `assetcomment` (
    `assetcomment_id` INTEGER NOT NULL AUTO_INCREMENT,
    `created_at` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `comment` VARCHAR(200) NOT NULL,
    `asset_id` INTEGER NOT NULL,
    `user_id` INTEGER NOT NULL,

    INDEX `fk_comment_Asset1_idx`(`asset_id`),
    INDEX `fk_comment_User1_idx`(`user_id`),
    PRIMARY KEY (`assetcomment_id`, `asset_id`, `user_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `document` (
    `document_id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(45) NOT NULL,
    `asset_id` INTEGER NULL,
    `url` LONGTEXT NOT NULL,

    INDEX `asset_id_idx`(`asset_id`),
    PRIMARY KEY (`document_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `interest` (
    `interest_id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(45) NOT NULL,

    UNIQUE INDEX `name_UNIQUE`(`name`),
    PRIMARY KEY (`interest_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `location` (
    `location_id` INTEGER NOT NULL AUTO_INCREMENT,
    `country` VARCHAR(45) NOT NULL DEFAULT 'morocco',
    `region` VARCHAR(45) NOT NULL,
    `city` VARCHAR(45) NOT NULL,

    UNIQUE INDEX `city_UNIQUE`(`city`),
    PRIMARY KEY (`location_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `post` (
    `post_id` INTEGER NOT NULL AUTO_INCREMENT,
    `image_url` LONGTEXT NULL,
    `content` VARCHAR(200) NOT NULL,
    `created_at` VARCHAR(45) NULL,
    `by_teacher` TINYINT NULL,
    `user_id` INTEGER NOT NULL,
    `class_id` INTEGER NULL,

    INDEX `fk_post_class1_idx`(`class_id`),
    INDEX `user_id_idx`(`user_id`),
    PRIMARY KEY (`post_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `post_has_tag` (
    `post_has_tag_id` INTEGER NOT NULL AUTO_INCREMENT,
    `post_id` INTEGER NOT NULL,
    `tag_id` INTEGER NOT NULL,

    INDEX `fk_Tag_has_Post_Post1_idx`(`post_id`),
    INDEX `fk_Tag_has_Post_Tag1_idx`(`tag_id`),
    PRIMARY KEY (`post_has_tag_id`, `post_id`, `tag_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `postcomment` (
    `postcomment_id` INTEGER NOT NULL AUTO_INCREMENT,
    `created_at` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `comment` VARCHAR(200) NOT NULL,
    `post_id` INTEGER NOT NULL,
    `user_id` INTEGER NOT NULL,

    INDEX `fk_postcomment_Post1_idx`(`post_id`),
    INDEX `fk_postcomment_user1_idx`(`user_id`),
    PRIMARY KEY (`postcomment_id`, `post_id`, `user_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `question` (
    `question_id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(45) NOT NULL,
    `image_url` LONGTEXT NULL,
    `quizz_id` INTEGER NOT NULL,

    INDEX `quizz_id_idx`(`quizz_id`),
    PRIMARY KEY (`question_id`, `quizz_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `quizz` (
    `quizz_id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(45) NOT NULL,
    `asset_id` INTEGER NOT NULL,

    INDEX `asset_id_idx`(`asset_id`),
    PRIMARY KEY (`quizz_id`, `asset_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `report` (
    `report_id` INTEGER NOT NULL AUTO_INCREMENT,
    `comment` VARCHAR(200) NULL,
    `type` VARCHAR(45) NOT NULL,
    `post_id` INTEGER NOT NULL,
    `user_id` INTEGER NOT NULL,
    `created_at` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0),

    INDEX `fk_Report_Post1_idx`(`post_id`),
    INDEX `fk_report_user1_idx`(`user_id`),
    PRIMARY KEY (`report_id`, `post_id`, `user_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `speciality` (
    `speciality_id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(45) NOT NULL,
    `brief` VARCHAR(200) NULL,
    `about` VARCHAR(400) NULL,

    UNIQUE INDEX `name_UNIQUE`(`name`),
    PRIMARY KEY (`speciality_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `speciality_subject` (
    `speciality_subject_id` INTEGER NOT NULL AUTO_INCREMENT,
    `speciality_id` INTEGER NOT NULL,
    `subject_id` INTEGER NOT NULL,

    INDEX `fk_speciality_has_Subject_Subject1_idx`(`subject_id`),
    INDEX `fk_speciality_has_Subject_speciality1_idx`(`speciality_id`),
    PRIMARY KEY (`speciality_subject_id`, `speciality_id`, `subject_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `subject` (
    `subject_id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(45) NOT NULL,
    `brief` VARCHAR(200) NULL,
    `about` VARCHAR(1000) NULL,

    UNIQUE INDEX `name_UNIQUE`(`name`),
    PRIMARY KEY (`subject_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tag` (
    `tag_id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(45) NOT NULL,

    UNIQUE INDEX `name_UNIQUE`(`name`),
    PRIMARY KEY (`tag_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `theclass` (
    `class_id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(45) NOT NULL,
    `status` VARCHAR(45) NOT NULL,
    `created_at` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `deleted_at` TIMESTAMP(0) NULL,
    `university_id` INTEGER NULL,
    `admin_id` INTEGER NOT NULL,

    INDEX `fk_Class_University1_idx`(`university_id`),
    INDEX `fk_Class_User1_idx`(`admin_id`),
    PRIMARY KEY (`class_id`, `admin_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `university` (
    `university_id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(100) NULL,
    `description` VARCHAR(2000) NULL,
    `location_id` INTEGER NULL,

    UNIQUE INDEX `name_UNIQUE`(`name`),
    INDEX `fk_university_location1_idx`(`location_id`),
    PRIMARY KEY (`university_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `university_speciality` (
    `university_speciality_id` INTEGER NOT NULL AUTO_INCREMENT,
    `university_id` INTEGER NOT NULL,
    `speciality_id` INTEGER NOT NULL,

    INDEX `fk_University_has_speciality_University1_idx`(`university_id`),
    INDEX `fk_University_has_speciality_speciality1_idx`(`speciality_id`),
    PRIMARY KEY (`university_speciality_id`, `university_id`, `speciality_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `university_user` (
    `university_user_id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER NOT NULL,
    `university_id` INTEGER NOT NULL,
    `joined_at` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `left_at` TIMESTAMP(0) NULL,
    `degree_optained` VARCHAR(45) NULL,
    `status` VARCHAR(45) NOT NULL,
    `speciality_id` INTEGER NOT NULL,

    INDEX `fk_Univ_User_speciality1_idx`(`speciality_id`),
    INDEX `fk_university_user_user1_idx`(`user_id`),
    INDEX `univ_id_idx`(`university_id`),
    PRIMARY KEY (`university_user_id`, `user_id`, `university_id`, `speciality_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user` (
    `user_id` INTEGER NOT NULL AUTO_INCREMENT,
    `first_name` VARCHAR(45) NOT NULL,
    `last_name` VARCHAR(45) NOT NULL,
    `username` VARCHAR(45) NOT NULL,
    `birth_date` DATE NULL,
    `level` VARCHAR(45) NOT NULL,
    `about` VARCHAR(2000) NULL,
    `password` VARCHAR(200) NOT NULL,
    `account_type` VARCHAR(45) NOT NULL,
    `gender` CHAR(1) NULL,
    `email` VARCHAR(50) NOT NULL,
    `phone` VARCHAR(20) NULL,
    `joined_at` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `status` VARCHAR(45) NOT NULL DEFAULT 'active',
    `profile_url` LONGTEXT NULL,
    `background_url` LONGTEXT NULL,
    `left_at` TIMESTAMP(0) NULL,

    UNIQUE INDEX `username_UNIQUE`(`username`),
    UNIQUE INDEX `email_UNIQUE`(`email`),
    INDEX `user_id`(`user_id`),
    PRIMARY KEY (`user_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user_class` (
    `user_class_id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER NOT NULL,
    `class_id` INTEGER NOT NULL,
    `joined_at` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `status` VARCHAR(45) NOT NULL,

    INDEX `fk_User_has_Class_Class1_idx`(`class_id`),
    INDEX `fk_User_has_Class_User1_idx`(`user_id`),
    PRIMARY KEY (`user_class_id`, `user_id`, `class_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user_has_interest` (
    `user_has_interest_id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER NOT NULL,
    `interest_id` INTEGER NOT NULL,

    INDEX `fk_Interest_has_User_Interest1_idx`(`interest_id`),
    INDEX `fk_Interest_has_User_User1_idx`(`user_id`),
    PRIMARY KEY (`user_has_interest_id`, `user_id`, `interest_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user_liked_post` (
    `user_liked_post_id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER NOT NULL,
    `post_id` INTEGER NOT NULL,

    INDEX `fk_User_has_Post_Post1_idx`(`post_id`),
    INDEX `fk_User_has_Post_User1_idx`(`user_id`),
    PRIMARY KEY (`user_liked_post_id`, `user_id`, `post_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `answer` ADD CONSTRAINT `question_card_id` FOREIGN KEY (`question_id`) REFERENCES `question`(`question_id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `asset` ADD CONSTRAINT `fk_asset_Subject1` FOREIGN KEY (`subject_id`) REFERENCES `subject`(`subject_id`) ON DELETE SET NULL ON UPDATE SET NULL;

-- AddForeignKey
ALTER TABLE `asset` ADD CONSTRAINT `fk_asset_Class1` FOREIGN KEY (`class_id`) REFERENCES `theclass`(`class_id`) ON DELETE SET NULL ON UPDATE SET NULL;

-- AddForeignKey
ALTER TABLE `asset` ADD CONSTRAINT `fk_asset_University1` FOREIGN KEY (`University_university_id`) REFERENCES `university`(`university_id`) ON DELETE SET NULL ON UPDATE SET NULL;

-- AddForeignKey
ALTER TABLE `asset` ADD CONSTRAINT `fk_asset_uset1` FOREIGN KEY (`user_id`) REFERENCES `user`(`user_id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `asset_has_tag` ADD CONSTRAINT `fk_Tag_has_Asset_Asset1` FOREIGN KEY (`asset_id`) REFERENCES `asset`(`asset_id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `asset_has_tag` ADD CONSTRAINT `fk_Tag_has_Asset_Tag1` FOREIGN KEY (`tag_id`) REFERENCES `tag`(`tag_id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `assetcomment` ADD CONSTRAINT `fk_comment_Asset1` FOREIGN KEY (`asset_id`) REFERENCES `asset`(`asset_id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `assetcomment` ADD CONSTRAINT `fk_comment_User1` FOREIGN KEY (`user_id`) REFERENCES `user`(`user_id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `document` ADD CONSTRAINT `fk_document_asset1` FOREIGN KEY (`asset_id`) REFERENCES `asset`(`asset_id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `post` ADD CONSTRAINT `fk_post_class1` FOREIGN KEY (`class_id`) REFERENCES `theclass`(`class_id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `post` ADD CONSTRAINT `fk_post_user1` FOREIGN KEY (`user_id`) REFERENCES `user`(`user_id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `post_has_tag` ADD CONSTRAINT `fk_Tag_has_Post_Post1` FOREIGN KEY (`post_id`) REFERENCES `post`(`post_id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `post_has_tag` ADD CONSTRAINT `fk_Tag_has_Post_Tag1` FOREIGN KEY (`tag_id`) REFERENCES `tag`(`tag_id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `postcomment` ADD CONSTRAINT `fk_postcomment_Post1` FOREIGN KEY (`post_id`) REFERENCES `post`(`post_id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `postcomment` ADD CONSTRAINT `fk_postcomment_user1` FOREIGN KEY (`user_id`) REFERENCES `user`(`user_id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `question` ADD CONSTRAINT `quizz_id` FOREIGN KEY (`quizz_id`) REFERENCES `quizz`(`quizz_id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `quizz` ADD CONSTRAINT `asset_id` FOREIGN KEY (`asset_id`) REFERENCES `asset`(`asset_id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `report` ADD CONSTRAINT `fk_Report_Post1` FOREIGN KEY (`post_id`) REFERENCES `post`(`post_id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `report` ADD CONSTRAINT `fk_report_user1` FOREIGN KEY (`user_id`) REFERENCES `user`(`user_id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `speciality_subject` ADD CONSTRAINT `fk_speciality_has_Subject_speciality1` FOREIGN KEY (`speciality_id`) REFERENCES `speciality`(`speciality_id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `speciality_subject` ADD CONSTRAINT `fk_speciality_has_Subject_Subject1` FOREIGN KEY (`subject_id`) REFERENCES `subject`(`subject_id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `theclass` ADD CONSTRAINT `fk_Class_University1` FOREIGN KEY (`university_id`) REFERENCES `university`(`university_id`) ON DELETE SET NULL ON UPDATE SET NULL;

-- AddForeignKey
ALTER TABLE `theclass` ADD CONSTRAINT `fk_Class_User1` FOREIGN KEY (`admin_id`) REFERENCES `user`(`user_id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `university` ADD CONSTRAINT `fk_university_location1` FOREIGN KEY (`location_id`) REFERENCES `location`(`location_id`) ON DELETE SET NULL ON UPDATE SET NULL;

-- AddForeignKey
ALTER TABLE `university_speciality` ADD CONSTRAINT `fk_University_has_speciality_speciality1` FOREIGN KEY (`speciality_id`) REFERENCES `speciality`(`speciality_id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `university_speciality` ADD CONSTRAINT `fk_University_has_speciality_University1` FOREIGN KEY (`university_id`) REFERENCES `university`(`university_id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `university_user` ADD CONSTRAINT `speciality_id` FOREIGN KEY (`speciality_id`) REFERENCES `speciality`(`speciality_id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `university_user` ADD CONSTRAINT `university_id` FOREIGN KEY (`university_id`) REFERENCES `university`(`university_id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `university_user` ADD CONSTRAINT `user_id` FOREIGN KEY (`user_id`) REFERENCES `user`(`user_id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `user_class` ADD CONSTRAINT `fk_User_has_Class_Class1` FOREIGN KEY (`class_id`) REFERENCES `theclass`(`class_id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `user_class` ADD CONSTRAINT `fk_User_has_Class_User1` FOREIGN KEY (`user_id`) REFERENCES `user`(`user_id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `user_has_interest` ADD CONSTRAINT `fk_Interest_has_User_Interest1` FOREIGN KEY (`interest_id`) REFERENCES `interest`(`interest_id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `user_has_interest` ADD CONSTRAINT `fk_Interest_has_User_User1` FOREIGN KEY (`user_id`) REFERENCES `user`(`user_id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `user_liked_post` ADD CONSTRAINT `fk_User_has_Post_Post1` FOREIGN KEY (`post_id`) REFERENCES `post`(`post_id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `user_liked_post` ADD CONSTRAINT `fk_User_has_Post_User1` FOREIGN KEY (`user_id`) REFERENCES `user`(`user_id`) ON DELETE CASCADE ON UPDATE CASCADE;
