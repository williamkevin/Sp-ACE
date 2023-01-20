from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from starlette import status

from database import get_db
from domain.question import question_schema, question_crud
from domain.user.user_router import get_current_user
from models import User


router = APIRouter(
    prefix="/api/question",
)


@router.get("/list", response_model=question_schema.QuestionList)  # 10개마다 질문 리스트 가졍괴
def question_list(db: Session = Depends(get_db),
                  page: int = 0, size: int = 10,
                  current_user: User = Depends(get_current_user)):
    if current_user.admin == 0:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST,
                            detail="관리자 권한이 없습니다.")
    
    total, _question_list = question_crud.get_question_list(
        db, skip=page*size, limit=size)
    return {
        'total': total,
        'question_list': _question_list
    }
    
@router.get("/{user_id}/mentee_question_list", response_model=question_schema.QuestionList)  # 10개마다 질문 리스트 가져오고
def mentee_question_list(db: Session = Depends(get_db),   # 멘티들의 질문 리스트 가져오기
                  page: int = 0, size: int = 10,
                  current_user: User = Depends(get_current_user)):
    
    user_id =  current_user.id
    total, _question_list = question_crud.get_mentee_question_list(
        db, User_id=user_id,skip=page*size, limit=size)

    return {
        'total': total,
        'question_list': _question_list
    }
    
@router.get("/{user_id}/mentor_question_list", response_model=question_schema.QuestionList)  # 10개마다 질문 리스트 가졍괴
def mentor_question_list(db: Session = Depends(get_db),  # 멘토들이 받을 질문리스트 가져오기
                  page: int = 0, size: int = 10,
                  current_user: User = Depends(get_current_user)):
    
    user_id =  current_user.id
    total, _question_list = question_crud.get_mentor_question_list(
        db, User_id=user_id,skip=page*size, limit=size)
    return {
        'total': total,
        'question_list': _question_list
    }

@router.get("/detail/{question_id}", response_model=question_schema.Question)  # 질문 찾아서 반환
def question_detail(question_id: int, db: Session = Depends(get_db)):
    question = question_crud.get_question(db, question_id=question_id)
    return question



@router.post("/create", status_code=status.HTTP_204_NO_CONTENT)
def question_create(_question_create: question_schema.QuestionCreate,
                    db: Session = Depends(get_db),
                    current_user: User = Depends(get_current_user)):  # --> 유저 권한이 있는지 확인하는 코드
    if (current_user.question_authority == None) or (current_user.question_authority == 0):
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST,
                            detail="질문 권한이 없습니다. 관리자에게 문의하세요.")
    question_crud.create_question(db=db, question_create=_question_create,
                                  user=current_user)

@router.put("/update", status_code=status.HTTP_204_NO_CONTENT)
def question_update(_question_update: question_schema.QuestionUpdate,
                    db: Session = Depends(get_db),
                    current_user: User = Depends(get_current_user)):
    db_question = question_crud.get_question(db, question_id=_question_update.question_id)
    if not db_question:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST,
                            detail="데이터를 찾을수 없습니다.")
    if current_user.id != db_question.user.id:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST,
                            detail="수정 권한이 없습니다.")
    question_crud.update_question(db=db, db_question=db_question,
                                  question_update=_question_update)

@router.put("/evaluation", status_code=status.HTTP_204_NO_CONTENT)
def question_eval(_question_eval: question_schema.QuestionEvaluation,
                    db: Session = Depends(get_db),
                    current_user: User = Depends(get_current_user)):
    db_question = question_crud.get_question(db, question_id=_question_eval.question_id)
    if not db_question:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST,
                            detail="데이터를 찾을수 없습니다.")

    question_crud.eval_question(db=db, db_question=db_question,
                                  question_eval=_question_eval)

@router.delete("/delete", status_code=status.HTTP_204_NO_CONTENT)
def question_delete(_question_delete: question_schema.QuestionDelete,
                    db: Session = Depends(get_db),
                    current_user: User = Depends(get_current_user)):
    db_question = question_crud.get_question(db, question_id=_question_delete.question_id)
    if not db_question:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST,
                            detail="데이터를 찾을수 없습니다.")
    if current_user.id != db_question.user.id:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST,
                            detail="삭제 권한이 없습니다.")
    question_crud.delete_question(db=db, db_question=db_question)

@router.post("/vote", status_code=status.HTTP_204_NO_CONTENT)
def question_vote(_question_vote: question_schema.QuestionVote,
                  db: Session = Depends(get_db),
                  current_user: User = Depends(get_current_user)):
    db_question = question_crud.get_question(db, question_id=_question_vote.question_id)
    if not db_question:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST,
                            detail="데이터를 찾을수 없습니다.")
    question_crud.vote_question(db, db_question=db_question, db_user=current_user)