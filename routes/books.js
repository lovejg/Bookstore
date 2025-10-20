const express = require("express");
const { allBooks, bookDetail } = require("../controller/BookController");
const router = express.Router();

router.use(express.json());

// 전체 도서 조회 + 카테고리별 도서 목록 조회
router.get("/", allBooks);

// 개별 도서 조회
router.get("/:id", bookDetail);

module.exports = router;
