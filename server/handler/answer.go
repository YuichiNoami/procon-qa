package handler

import (
	"net/http"
	"strconv"
	"time"

	"github.com/labstack/echo"
	"github.com/monkukui/procon-qa/server/entity"
)

// answers のサイズを取得する
func GetAnswerSize(c echo.Context) error {
	return c.JSON(http.StatusOK, len(entity.FindAnswers(&entity.Answer{}, "id desc")))
}

// 質問に紐ずいた, 回答を全取得する
func GetAnswersForQuestion(c echo.Context) error {
	// uid := userIDFromToken(c)
	// if user := entity.FindUser(&entity.User{ID: uid}); user.ID == 0 {
	//	return echo.ErrNotFound
	// }

	QuestionID, err := strconv.Atoi(c.Param("qid"))
	if err != nil {
		return echo.ErrNotFound
	}
	modeId, err := strconv.Atoi(c.Param("mode")) // ソートの設定
	if err != nil {
		return echo.ErrNotFound
	}

	mode := "id desc"

	if modeId == 2 {
		mode = "favorite_count desc"
	}

	answers := entity.FindAnswers(&entity.Answer{QID: QuestionID}, mode)
	return c.JSON(http.StatusOK, answers)
}

// userId/pageId で質問をページ取得する
func GetUserAnswersWithPage(c echo.Context) error {
	uid := userIDFromToken(c)
	if user := entity.FindUser(&entity.User{ID: uid}); user.ID == 0 {
		return echo.ErrNotFound
	}

	PageID, err := strconv.Atoi(c.Param("page")) // ページ番号 (1-indexed)
	PageLength := 5                              // 1 ページあたりの長さ

	if err != nil {
		return echo.ErrNotFound
	}

	answers := entity.FindAnswersWithPage(&entity.Answer{UID: uid}, PageID, PageLength)
	return c.JSON(http.StatusOK, answers)
}

// 回答を 1 つ 取得する
func GetAnswer(c echo.Context) error {

	// uid := userIDFromToken(c)
	// if user := entity.FindUser(&entity.User{ID: uid}); user.ID == 0 {
	// 	return echo.ErrNotFound
	// }

	AnswerID, err := strconv.Atoi(c.Param("id"))
	if err != nil {
		return echo.ErrNotFound
	}

	answer := entity.FindAnswers(&entity.Answer{ID: AnswerID}, "id desc")[0]
	return c.JSON(http.StatusOK, answer)
}

// 回答を投稿する
func PostAnswer(c echo.Context) error {
	answer := new(entity.Answer)
	// answer に 送信されてきたデータを bind している
	if err := c.Bind(answer); err != nil {
		return err
	}

	// 妥当性判定
	// Body が空欄ではないことをチェックする
	if answer.Body == "" {
		return &echo.HTTPError{
			Code:    http.StatusBadRequest,
			Message: "invalid to or message fields",
		}
	}

	uid := userIDFromToken(c)

	if user := entity.FindUser(&entity.User{ID: uid}); user.ID == 0 {
		return echo.ErrNotFound
	}

	// 回答者をユーザーに設定
	answer.UID = uid
	answer.FavoriteCount = 0

	now := time.Now()
	nowUTC := now.UTC()
	jst := time.FixedZone("Asia/Tokyo", 9*60*60)
	nowJST := nowUTC.In(jst)

	answer.Date = nowJST.Format("2006/01/02 15:04:05")

	entity.CreateAnswer(answer)

	return c.JSON(http.StatusCreated, answer)
}

// 回答を削除する
func DeleteAnswer(c echo.Context) error {
	uid := userIDFromToken(c)
	if user := entity.FindUser(&entity.User{ID: uid}); user.ID == 0 {
		return echo.ErrNotFound
	}

	answerID, err := strconv.Atoi(c.Param("id"))
	if err != nil {
		return echo.ErrNotFound
	}

	if err := entity.DeleteAnswer(&entity.FindAnswers(&entity.Answer{ID: answerID}, "id desc")[0]); err != nil {
		return echo.ErrNotFound
	}

	return c.NoContent(http.StatusNoContent)
}

// いいねをする
func FavoriteAnswer(c echo.Context) error {
	uid := userIDFromToken(c)
	if user := entity.FindUser(&entity.User{ID: uid}); user.ID == 0 {
		return echo.ErrNotFound
	}

	answerID, err := strconv.Atoi(c.Param("id"))
	if err != nil {
		return echo.ErrNotFound
	}

	answers := entity.FindAnswers(&entity.Answer{ID: answerID}, "id")
	if len(answers) == 0 {
		return echo.ErrNotFound
	}
	answer := answers[0]

	if answer.UID == uid {
		// 自分の回答にいいねはできません
		return echo.ErrNotFound
	}

	// question と同じロジック
	goods := entity.FindAnswerGoods(&entity.AnswerGood{UID: uid, AID: answerID})

	if len(goods) == 0 { // いいねをする
		entity.CreateAnswerGood(&entity.AnswerGood{UID: uid, AID: answerID})

	} else { // いいねを取り消す
		entity.DeleteAnswerGood(&entity.AnswerGood{UID: uid, AID: answerID})
	}

	return c.NoContent(http.StatusNoContent)
}
